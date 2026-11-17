import { afterEach, expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { BG_CONSENT_DEFAULT, CONSENT_DEFAULTS } from "./consent-defaults";
import { readChoice } from "./consent";
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
    },
  });
  return { values, calls };
}

test("defaults deny every signal and a stored acceptance grants analytics only", () => {
  const dataLayer: Record<number, unknown>[] = [];
  runInNewContext(`${CONSENT_DEFAULTS}\n${BG_CONSENT_DEFAULT}`, {
    window: { dataLayer },
    dataLayer,
    localStorage: {
      getItem: (key: string) => key === BG_COOKIE_CONSENT_KEY ? "granted" : null,
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
