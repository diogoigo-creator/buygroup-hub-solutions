import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const TO_EMAIL = "atendimento@buygroup.com.br";
const FROM_EMAIL = "Buy Group Site <onboarding@resend.dev>";

const contactSchema = z.object({
  nome: z.string().trim().min(1).max(120),
  empresa: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(200),
  telefone: z.string().trim().max(40).optional().nullable(),
  interesse: z.string().trim().max(120).optional().nullable(),
  volume_compras: z.string().trim().max(120).optional().nullable(),
  compradores_internos: z.string().trim().max(40).optional().nullable(),
  desafio_compras: z.string().trim().max(500).optional().nullable(),
  mensagem: z.string().trim().max(2000).optional().nullable(),
});

const courseSchema = z.object({
  nome: z.string().trim().min(1).max(120),
  empresa: z.string().trim().min(1).max(160),
  cargo: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  telefone: z.string().trim().min(1).max(40),
  curso: z.string().trim().max(200).optional().nullable(),
  tamanho: z.string().trim().max(60).optional().nullable(),
  formato: z.string().trim().max(60).optional().nullable(),
  mensagem: z.string().trim().max(2000).optional().nullable(),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRows(rows: Array<[string, string | null | undefined]>): string {
  return rows
    .filter(([, v]) => v && String(v).trim().length > 0)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;background:#f6f7f9;border:1px solid #e5e7eb;font-size:13px;color:#475569;width:220px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;color:#0f172a;white-space:pre-wrap;">${escapeHtml(String(value))}</td>
        </tr>`,
    )
    .join("");
}

function buildEmail(title: string, subtitle: string, rowsHtml: string): string {
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f9;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr><td style="background:#0a1f3d;color:#ffffff;padding:24px 28px;">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#86efac;">Buy Group · Site</div>
          <div style="font-size:22px;font-weight:600;margin-top:6px;">${escapeHtml(title)}</div>
          <div style="font-size:14px;color:#cbd5e1;margin-top:4px;">${escapeHtml(subtitle)}</div>
        </td></tr>
        <tr><td style="padding:24px 28px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            ${rowsHtml}
          </table>
          <p style="margin:20px 0 0;font-size:12px;color:#64748b;">Responda este e-mail para entrar em contato direto com a pessoa que preencheu o formulário.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

async function sendResend(params: {
  subject: string;
  html: string;
  replyTo: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[email] RESEND_API_KEY missing");
    return { ok: false as const, error: "missing_api_key" };
  }
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
}

function getServerSupabase() {
  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase server credentials missing");
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = getServerSupabase();
    const { error } = await supabase.from("contact_submissions").insert({
      nome: data.nome,
      empresa: data.empresa,
      email: data.email,
      telefone: data.telefone ?? null,
      interesse: data.interesse ?? null,
      volume_compras: data.volume_compras ?? null,
      compradores_internos: data.compradores_internos ?? null,
      desafio_compras: data.desafio_compras ?? null,
      mensagem: data.mensagem ?? null,
    });
    if (error) {
      console.error("[contato] insert failed", error);
      throw new Error("Não foi possível salvar o contato.");
    }

    const rowsHtml = renderRows([
      ["Nome", data.nome],
      ["Empresa", data.empresa],
      ["E-mail", data.email],
      ["Telefone", data.telefone],
      ["Interesse", data.interesse],
      ["Volume anual de compras", data.volume_compras],
      ["Compradores internos", data.compradores_internos],
      ["Principal desafio", data.desafio_compras],
      ["Mensagem", data.mensagem],
    ]);
    const html = buildEmail(
      "Novo contato recebido",
      `${data.nome} · ${data.empresa}`,
      rowsHtml,
    );
    const subject = `Novo contato site — ${data.empresa || data.nome}`;
    const send = await sendResend({ subject, html, replyTo: data.email });
    return { ok: true, emailSent: send.ok };
  });

export const submitCourseSignup = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => courseSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = getServerSupabase();
    const { error } = await supabase.from("course_signups").insert({
      nome: data.nome,
      empresa: data.empresa,
      cargo: data.cargo,
      email: data.email,
      telefone: data.telefone,
      curso: data.curso ?? null,
      tamanho: data.tamanho ?? null,
      formato: data.formato ?? null,
      mensagem: data.mensagem ?? null,
    });
    if (error) {
      console.error("[cursos] insert failed", error);
      throw new Error("Não foi possível salvar a solicitação.");
    }

    const rowsHtml = renderRows([
      ["Nome", data.nome],
      ["Empresa", data.empresa],
      ["Cargo", data.cargo],
      ["E-mail", data.email],
      ["Telefone", data.telefone],
      ["Curso de interesse", data.curso],
      ["Tamanho da turma", data.tamanho],
      ["Formato", data.formato],
      ["Mensagem", data.mensagem],
    ]);
    const html = buildEmail(
      "Nova solicitação de treinamento",
      `${data.nome} · ${data.empresa}`,
      rowsHtml,
    );
    const subject = `Nova solicitação Academy — ${data.empresa || data.nome}`;
    const send = await sendResend({ subject, html, replyTo: data.email });
    return { ok: true, emailSent: send.ok };
  });
