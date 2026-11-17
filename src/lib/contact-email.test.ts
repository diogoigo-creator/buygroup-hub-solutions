/// <reference types="bun" />
import { afterEach, expect, spyOn, test } from 'bun:test';
import { sendFormNotification } from './contact-email.server';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from './contact-details';

const originalKey = process.env.LOVABLE_API_KEY;
const spies: Array<{ mockRestore: () => void }> = [];
afterEach(() => {
  for (const spy of spies.splice(0)) spy.mockRestore();
  if (originalKey === undefined) delete process.env.LOVABLE_API_KEY;
  else process.env.LOVABLE_API_KEY = originalKey;
});

const params = {
  submissionId: 'test-event-1', subject: 'Novo contato site — Empresa exemplo',
  title: 'Novo contato recebido', subtitle: 'Contato exemplo',
  rows: [['Nome', '<script>example</script>']] as Array<[string, string]>,
  replyTo: 'lead@example.com',
};

test('official WhatsApp destination and message', () => {
  expect(WHATSAPP_NUMBER).toBe('(31) 99008-7887');
  const url = new URL(WHATSAPP_URL);
  expect(url.origin + url.pathname).toBe('https://wa.me/5531990087887');
  expect(url.searchParams.get('text')).toBe('Olá, vim pelo site da Buy Group e gostaria de falar com um especialista.');
});

test('transport failure is logged without rejecting saved leads', async () => {
  process.env.LOVABLE_API_KEY = 'test-only-not-a-credential';
  const log = spyOn(console, 'error').mockImplementation(() => {});
  spies.push(log, spyOn(globalThis, 'fetch').mockRejectedValue(new TypeError('connection failed')));
  expect(await sendFormNotification(params)).toEqual({ ok: false, error: 'TypeError' });
  expect(log).toHaveBeenCalledWith('[email] Form notification failed', 'TypeError');
});

test('suppression is respected without rejecting saved leads', async () => {
  process.env.LOVABLE_API_KEY = 'test-only-not-a-credential';
  const log = spyOn(console, 'error').mockImplementation(() => {});
  const fakeFetch = Object.assign(async () => Response.json({ type: 'recipient_suppressed' }, { status: 403 }), { preconnect: globalThis.fetch.preconnect });
  spies.push(log, spyOn(globalThis, 'fetch').mockImplementation(fakeFetch));
  expect(await sendFormNotification(params)).toEqual({ ok: false, error: 'recipient_suppressed' });
  expect(log).toHaveBeenCalledWith('[email] Form notification not sent', 'recipient_suppressed');
});

test('fixed recipient, sender domain, reply-to and event id are preserved', async () => {
  process.env.LOVABLE_API_KEY = 'test-only-not-a-credential';
  let payload: Record<string, unknown> = {};
  const fakeFetch = Object.assign(async (_input: RequestInfo | URL, init?: RequestInit) => {
    payload = JSON.parse(String(init?.body));
    return Response.json({});
  }, { preconnect: globalThis.fetch.preconnect });
  spies.push(spyOn(globalThis, 'fetch').mockImplementation(fakeFetch));
  expect(await sendFormNotification(params)).toEqual({ ok: true });
  expect(payload.to).toBe('atendimento@buygroup.com.br');
  expect(payload.from).toBe('Buy Group Site <no-reply@notify.buygroup.com.br>');
  expect(payload.sender_domain).toBe('notify.buygroup.com.br');
  expect(payload.reply_to).toBe('lead@example.com');
  expect(payload.idempotency_key).toBe('form-notification-test-event-1');
  expect(payload.subject).toBe(params.subject);
});