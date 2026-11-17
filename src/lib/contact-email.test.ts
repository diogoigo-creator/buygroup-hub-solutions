/// <reference types="bun" />
import { afterEach, expect, spyOn, test } from "bun:test";
import { sendResend } from "./contact-email.server";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "./contact-details";

const originalKey = process.env.RESEND_API_KEY;
const spies: Array<{ mockRestore: () => void }> = [];
afterEach(() => {
  for (const spy of spies.splice(0)) spy.mockRestore();
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
});

test("official WhatsApp destination and message", () => {
  expect(WHATSAPP_NUMBER).toBe("(31) 99008-7887");
  const url = new URL(WHATSAPP_URL);
  expect(url.origin + url.pathname).toBe("https://wa.me/5531990087887");
  expect(url.searchParams.get("text")).toBe("Olá, vim pelo site da Buy Group e gostaria de falar com um especialista.");
});

test("transport failure is logged without rejecting saved leads", async () => {
  process.env.RESEND_API_KEY = "test-only-not-a-credential";
  const log = spyOn(console, "error").mockImplementation(() => {});
  spies.push(log, spyOn(globalThis, "fetch").mockRejectedValue(new TypeError("connection failed")));
  expect(await sendResend({ subject: "Test", html: "<p>Test</p>", replyTo: "lead@example.com" }))
    .toEqual({ ok: false, error: "transport_TypeError" });
  expect(log).toHaveBeenCalledWith("[email] Resend transport failed", "TypeError");
});

test("provider rejection is logged without rejecting saved leads", async () => {
  process.env.RESEND_API_KEY = "test-only-not-a-credential";
  const log = spyOn(console, "error").mockImplementation(() => {});
  spies.push(log, spyOn(globalThis, "fetch").mockResolvedValue(new Response("test sender restricted", { status: 403 })));
  expect(await sendResend({ subject: "Test", html: "<p>Test</p>", replyTo: "lead@example.com" }))
    .toEqual({ ok: false, error: "resend_403" });
  expect(log).toHaveBeenCalledWith("[email] Resend send failed", 403, "test sender restricted");
});

test("email recipient, reply-to and original HTML stay unchanged", async () => {
  process.env.RESEND_API_KEY = "test-only-not-a-credential";
  let payload: Record<string, unknown> = {};
  const fakeFetch = Object.assign(async (_input: RequestInfo | URL, init?: RequestInit) => {
    payload = JSON.parse(String(init?.body));
    return new Response("{}", { status: 200 });
  }, { preconnect: globalThis.fetch.preconnect });
  spies.push(spyOn(globalThis, "fetch").mockImplementation(fakeFetch));
  expect(await sendResend({ subject: "Test", html: "<p>Original HTML</p>", replyTo: "lead@example.com" })).toEqual({ ok: true });
  expect(payload.to).toEqual(["atendimento@buygroup.com.br"]);
  expect(payload.reply_to).toBe("lead@example.com");
  expect(payload.html).toBe("<p>Original HTML</p>");
});