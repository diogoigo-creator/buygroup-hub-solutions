const TO_EMAIL = "atendimento@buygroup.com.br";
const FROM_EMAIL = "Buy Group Site <onboarding@resend.dev>";

export async function sendResend(params: {
  subject: string;
  html: string;
  replyTo: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[email] RESEND_API_KEY missing");
    return { ok: false as const, error: "missing_api_key" };
  }
  try {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[email] Resend send failed", res.status, body);
    return { ok: false as const, error: `resend_${res.status}` };
  }
  return { ok: true as const };
  } catch (error) {
    const reason = error instanceof Error ? error.name : "UnknownError";
    console.error("[email] Resend transport failed", reason);
    return { ok: false as const, error: `transport_${reason}` };
  }
}

