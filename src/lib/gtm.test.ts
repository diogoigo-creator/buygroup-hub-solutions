import { afterEach, expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { GTM_SCRIPT, pushDataLayer } from "./gtm";

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
}

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