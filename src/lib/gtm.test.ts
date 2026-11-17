import { afterEach, expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { GA4_SCRIPT, GTM_SCRIPT, pushDataLayer } from "./gtm";
import { CONSENT_DEFAULTS, BG_CONSENT_DEFAULT } from "./consent-defaults";

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
afterEach(() => {
  if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
  else Reflect.deleteProperty(globalThis, "window");
});

for (const hostname of ["buygroup.com.br", "www.buygroup.com.br", "localhost", "buygroup-hub-solutions.lovable.app", "id-preview--8481e0ea-fbb3-434b-b80d-a886baad2d4f.lovable.app", "site.buygroup.com.br", "buygroup.com.br.example.com"]) {
  test(`GTM domain restriction: ${hostname}`, () => {
    const inserted: { src?: string; async?: boolean }[] = [];
    const window = {};
    runInNewContext(GTM_SCRIPT, {
      location: { hostname }, window,
      document: {
        getElementsByTagName: () => [{ parentNode: { insertBefore: (script: { src?: string }) => inserted.push(script) } }],
        createElement: () => ({}),
      },
    });
    const allowed = hostname === "buygroup.com.br" || hostname === "www.buygroup.com.br";
    expect(inserted.length).toBe(allowed ? 1 : 0);
    if (allowed) expect(inserted[0]?.src).toBe("https://www.googletagmanager.com/gtm.js?id=GTM-WDCJPM6Z");
  });
  test(`GA4 domain restriction and single initial config: ${hostname}`, () => {
    const inserted: { src?: string; async?: boolean }[] = [];
    const calls: unknown[][] = [];
    runInNewContext(GA4_SCRIPT, {
      location: { hostname },
      document: { createElement: () => ({}), head: { appendChild: (script: { src?: string }) => inserted.push(script) } },
      gtag: (...args: unknown[]) => calls.push(args),
    });
    const allowed = hostname === "buygroup.com.br" || hostname === "www.buygroup.com.br";
    expect(inserted).toEqual(allowed ? [{ async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-T0K88B24JZ" }] : []);
    expect(calls.filter((call) => call[0] === "config")).toEqual(allowed ? [["config", "G-T0K88B24JZ"]] : []);
    expect(calls.filter((call) => call[0] === "js")).toHaveLength(allowed ? 1 : 0);
    expect(calls.some((call) => call[0] === "event" && call[1] === "page_view")).toBe(false);
  });
}

test("GA4 uses the consent dataLayer after globally denied defaults without granting permission", () => {
  const context = {
    location: { hostname: "buygroup.com.br" },
    document: { createElement: () => ({}), head: { appendChild: () => {} } },
    localStorage: { getItem: () => null }, navigator: {},
    dataLayer: [] as ArrayLike<unknown>[],
  };
  runInNewContext(`window = globalThis; ${CONSENT_DEFAULTS}\n${BG_CONSENT_DEFAULT}\n${GA4_SCRIPT}`, context);
  const calls = context.dataLayer.map((entry) => Array.from(entry));
  expect(calls[0]).toEqual(["consent", "default", {
    analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  }]);
  expect(calls.slice(1).map((call) => call[0])).toEqual(["js", "config"]);
});

test("GA4 receives only allowlisted fields for both forms and all five WhatsApp locations", () => {
  const calls: unknown[][] = [];
  const browser = { dataLayer: [] as Record<string, unknown>[], gtag: (...args: unknown[]) => calls.push(args) };
  Object.defineProperty(globalThis, "window", { configurable: true, value: browser });
  const contact = { form_name: "contato" as const, email: "private@example.test", nome: "Private" };
  pushDataLayer("generate_lead", contact);
  pushDataLayer("generate_lead", { form_name: "academy" });
  for (const link_location of ["header", "menu_mobile", "footer", "contato", "barra_mobile"] as const) {
    const params = { link_location, telefone: "private" };
    pushDataLayer("whatsapp_click", params);
  }
  expect(calls).toEqual(browser.dataLayer.map(({ event, ...params }) => ["event", event, params]));
  expect(calls).toHaveLength(7);
  expect(JSON.stringify(calls)).not.toContain("private");
});

test("a GA4 failure does not interrupt the flow or the existing dataLayer push", () => {
  const browser = { dataLayer: [] as Record<string, unknown>[], gtag: () => { throw new Error("blocked"); } };
  Object.defineProperty(globalThis, "window", { configurable: true, value: browser });
  expect(() => pushDataLayer("generate_lead", { form_name: "contato" })).not.toThrow();
  expect(browser.dataLayer).toEqual([{ event: "generate_lead", form_name: "contato" }]);
});

test("a dataLayer failure does not prevent best-effort GA4 forwarding", () => {
  const calls: unknown[][] = [];
  Object.defineProperty(globalThis, "window", { configurable: true, value: {
    dataLayer: { push: () => { throw new Error("blocked"); } },
    gtag: (...args: unknown[]) => calls.push(args),
  } });
  expect(() => pushDataLayer("whatsapp_click", { link_location: "header" })).not.toThrow();
  expect(calls).toEqual([["event", "whatsapp_click", { link_location: "header" }]]);
});

test("analytics helper is safe without window during SSR", () => {
  Reflect.deleteProperty(globalThis, "window");
  expect(() => pushDataLayer("generate_lead", { form_name: "contato" })).not.toThrow();
});

test("both form events contain only the requested non-personal fields", () => {
  const browser = { dataLayer: [] as Record<string, unknown>[] };
  Object.defineProperty(globalThis, "window", { configurable: true, value: browser });
  const params = { form_name: "contato" as const, email: "private@example.test", nome: "Private" };
  pushDataLayer("generate_lead", params);
  pushDataLayer("generate_lead", { form_name: "academy" });
  expect(browser.dataLayer).toEqual([
    { event: "generate_lead", form_name: "contato" },
    { event: "generate_lead", form_name: "academy" },
  ]);
});

test("WhatsApp events identify all five requested locations", () => {
  const browser = { dataLayer: [] as Record<string, unknown>[] };
  Object.defineProperty(globalThis, "window", { configurable: true, value: browser });
  const locations = ["header", "menu_mobile", "footer", "contato", "barra_mobile"] as const;
  for (const link_location of locations) pushDataLayer("whatsapp_click", { link_location });
  expect(browser.dataLayer).toEqual(locations.map((link_location) => ({ event: "whatsapp_click", link_location })));
});

test("analytics transport failures never interrupt existing flows", () => {
  Object.defineProperty(globalThis, "window", { configurable: true, value: { dataLayer: { push: () => { throw new Error("blocked"); } } } });
  expect(() => pushDataLayer("generate_lead", { form_name: "contato" })).not.toThrow();
});