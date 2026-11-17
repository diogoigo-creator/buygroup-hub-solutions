import { afterEach, expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { BG_CONSENT_DEFAULT, CONSENT_DEFAULTS } from "./consent-defaults";
import { canTrack, needsAnswer, onConsentChange, readChoice } from "./consent";
import { BG_COOKIE_CONSENT_KEY, saveAnalyticsChoice } from "./cookie-preferences";

const descriptors = ["window", "localStorage", "navigator"].map((key) => [
  key,
  Object.getOwnPropertyDescriptor(globalThis, key),
] as const);

afterEach(() => {
  for (const [key, descriptor] of descriptors) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else Reflect.deleteProperty(globalThis, key);
  }
});

function browser() {
  const values = new Map<string, string>();
  const calls: unknown[][] = [];
  const listeners = new Map<string, EventListener>();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    },
  });
  Object.defineProperty(globalThis, "navigator", { configurable: true, value: {} });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      gtag: (...args: unknown[]) => calls.push(args),
      dispatchEvent: () => true,
      addEventListener: (name: string, listener: EventListener) => listeners.set(name, listener),
      removeEventListener: (name: string) => listeners.delete(name),
    },
  });
  return { values, calls, listeners };
}

test("defaults deny every signal and a stored acceptance grants analytics only", () => {
  const dataLayer: Record<number, unknown>[] = [];
  runInNewContext(`${CONSENT_DEFAULTS}\n${BG_CONSENT_DEFAULT}`, {
    window: { dataLayer },
    dataLayer,
    localStorage: {
      getItem: (key: string) => key === "cookie_consent_analytics" ? JSON.stringify({ choice: "granted", at: Date.now() }) : null,
    },
    navigator: {},
    Date,
    JSON,
  });
  expect(dataLayer[0]?.[0]).toBe("consent");
  expect(dataLayer[0]?.[1]).toBe("default");
  expect(dataLayer[0]?.[2]).toEqual({
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  expect(dataLayer.at(-1)?.[1]).toBe("update");
  expect(dataLayer.at(-1)?.[2]).toEqual({ analytics_storage: "granted" });
});

test("accept stores the site choice and grants analytics only", () => {
  const { values, calls } = browser();
  saveAnalyticsChoice("granted");
  expect(values.get(BG_COOKIE_CONSENT_KEY)).toBe("granted");
  expect(JSON.parse(values.get("cookie_consent_analytics") ?? "{}").choice).toBe("granted");
  expect(calls).toEqual([["consent", "update", { analytics_storage: "granted" }]]);
});

test("changing acceptance to refusal denies analytics in both stored choices", () => {
  const { values, calls } = browser();
  saveAnalyticsChoice("granted");
  saveAnalyticsChoice("denied");
  expect(values.get(BG_COOKIE_CONSENT_KEY)).toBe("denied");
  expect(JSON.parse(values.get("cookie_consent_analytics") ?? "{}").choice).toBe("denied");
  expect(calls[1]).toEqual(["consent", "update", { analytics_storage: "denied" }]);
  expect(JSON.stringify(calls)).not.toContain("ad_storage");
});

test("the browser privacy signal overrides a stored acceptance", () => {
  browser();
  saveAnalyticsChoice("granted");
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: { globalPrivacyControl: true },
  });
  expect(readChoice("analytics")).toBe("denied");
});

for (const country of ["BR", "US", "DE", "CA", "XX"]) {
  test(`unanswered analytics and advertising are denied everywhere (${country})`, async () => {
    browser();
    // Any regional metadata is irrelevant to the global consent default.
    Object.defineProperty(globalThis, "navigator", { configurable: true, value: { language: country } });
    expect(await canTrack("analytics")).toBe(false);
    expect(await canTrack("advertising")).toBe(false);
    expect(await needsAnswer(["analytics", "advertising"])).toBe(true);
    const dataLayer: Record<number, unknown>[] = [];
    runInNewContext(`${CONSENT_DEFAULTS}\n${BG_CONSENT_DEFAULT}`, {
      window: { dataLayer }, dataLayer, navigator: {},
      location: { country }, localStorage: { getItem: () => null },
    });
    expect(dataLayer).toHaveLength(1);
    expect(dataLayer[0]?.[2]).toEqual({ analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  });
}

for (const key of ["cookie_consent_analytics", "cookie_consent_advertising", null]) {
  test(`cross-tab deletion restores denied signals (${key ?? "clear all"})`, async () => {
    const { values, calls, listeners } = browser();
    values.set("cookie_consent_analytics", JSON.stringify({ choice: "granted", at: Date.now() }));
    values.set("cookie_consent_advertising", JSON.stringify({ choice: "granted", at: Date.now() }));
    expect(await canTrack("analytics")).toBe(true);
    expect(await canTrack("advertising")).toBe(true);
    let changes = 0;
    const unsubscribe = onConsentChange(() => changes++);
    if (key === null) values.clear();
    else values.delete(key);
    listeners.get("storage")?.({ key } as StorageEvent);
    for (const purpose of ["analytics", "advertising"] as const) {
      if (key !== null && key !== `cookie_consent_${purpose}`) continue;
      expect(await canTrack(purpose)).toBe(false);
      expect(await needsAnswer([purpose])).toBe(true);
    }
    expect(calls).toContainEqual(["consent", "update", key === "cookie_consent_advertising" ? { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" } : { analytics_storage: "denied" }]);
    expect(changes).toBe(1);
    unsubscribe();
  });
}

test("legacy, expired and invalid acceptance cannot grant permission", async () => {
  const { values } = browser();
  values.set(BG_COOKIE_CONSENT_KEY, "granted");
  for (const at of [undefined, Date.now() - 366 * 86400000, Date.now() + 86400000]) {
    values.set("cookie_consent_analytics", JSON.stringify({ choice: "granted", at }));
    expect(await canTrack("analytics")).toBe(false);
    const dataLayer: Record<number, unknown>[] = [];
    runInNewContext(`${CONSENT_DEFAULTS}\n${BG_CONSENT_DEFAULT}`, {
      window: { dataLayer }, dataLayer, navigator: {},
      localStorage: { getItem: (key: string) => values.get(key) ?? null },
    });
    expect(dataLayer).toHaveLength(1);
    expect(dataLayer[0]?.[2]).toMatchObject({ analytics_storage: "denied" });
  }
});
