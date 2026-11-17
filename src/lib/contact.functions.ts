import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

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
    const { sendFormNotification } = await import("./contact-email.server");
    const supabase = getServerSupabase();
    const submissionId = crypto.randomUUID();
    const { error } = await supabase.from("contact_submissions").insert({
      id: submissionId,
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

    const rows: Array<[string, string | null | undefined]> = [
      ["Nome", data.nome],
      ["Empresa", data.empresa],
      ["E-mail", data.email],
      ["Telefone", data.telefone],
      ["Interesse", data.interesse],
      ["Volume anual de compras", data.volume_compras],
      ["Compradores internos", data.compradores_internos],
      ["Principal desafio", data.desafio_compras],
      ["Mensagem", data.mensagem],
    ];
    const subject = `Novo contato site — ${data.empresa || data.nome}`;
    const send = await sendFormNotification({ submissionId, subject, title: "Novo contato recebido", subtitle: `${data.nome} · ${data.empresa}`, rows, replyTo: data.email });
    return { ok: true, emailSent: send.ok };
  });

export const submitCourseSignup = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => courseSchema.parse(data))
  .handler(async ({ data }) => {
    const { sendFormNotification } = await import("./contact-email.server");
    const supabase = getServerSupabase();
    const submissionId = crypto.randomUUID();
    const { error } = await supabase.from("course_signups").insert({
      id: submissionId,
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

    const rows: Array<[string, string | null | undefined]> = [
      ["Nome", data.nome],
      ["Empresa", data.empresa],
      ["Cargo", data.cargo],
      ["E-mail", data.email],
      ["Telefone", data.telefone],
      ["Curso de interesse", data.curso],
      ["Tamanho da turma", data.tamanho],
      ["Formato", data.formato],
      ["Mensagem", data.mensagem],
    ];
    const subject = `Nova solicitação Academy — ${data.empresa || data.nome}`;
    const send = await sendFormNotification({ submissionId, subject, title: "Nova solicitação de treinamento", subtitle: `${data.nome} · ${data.empresa}`, rows, replyTo: data.email });
    return { ok: true, emailSent: send.ok };
  });
