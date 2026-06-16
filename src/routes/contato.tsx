import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, CheckCircle2, Lock, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";


export const Route = createFileRoute("/contato")({
  validateSearch: z.object({ interesse: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Contato — Buy Group" },
      {
        name: "description",
        content: "Fale com a Buy Group e solicite um diagnóstico gratuito de redução de custos.",
      },
      { property: "og:title", content: "Contato Buy Group" },
      { property: "og:description", content: "Solicite um diagnóstico gratuito." },
      { property: "og:url", content: "https://buygroup-hub-solutions.lovable.app/contato" },
      { property: "og:image", content: "https://buygroup-hub-solutions.lovable.app/og-buygroup.jpg" },
      { property: "twitter:image", content: "https://buygroup-hub-solutions.lovable.app/og-buygroup.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { interesse } = Route.useSearch();
  const interestMap: Record<string, string> = {
    "cost-optimization": "Otimização de Custos",
    "spend-intelligence": "Inteligência de Gastos",
    "bpo": "BPO de Compras",
    "second-opinion": "Revisão Pré-Fechamento",
    "supplier-risk": "Gestão de Fornecedores",
    "procurement-maturity": "Maturidade em Compras",
    "academy": "Academy — capacitação para a equipe",
  };
  const defaultInterest = interesse ? interestMap[interesse] : undefined;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      nome: String(fd.get("nome") ?? "").trim(),
      empresa: String(fd.get("empresa") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      interesse: String(fd.get("interesse") ?? "").trim() || null,
      volume_compras: String(fd.get("volume_compras") ?? "").trim() || null,
      compradores_internos: String(fd.get("compradores_internos") ?? "").trim() || null,
      desafio_compras: String(fd.get("desafio_compras") ?? "").trim() || null,
      mensagem: String(fd.get("mensagem") ?? "").trim() || null,
    };
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSubmitting(false);
    if (error) {
      console.error("[contato] insert failed", error);
      toast.error("Não foi possível enviar agora. Tente novamente em instantes.");
      return;
    }
    setSent(true);
  }


  return (
    <SiteLayout>
      <PageHero
        eyebrow="Executive briefing · nível diretivo · 20min"
        title={
          <>
            Agende uma conversa <span className="text-green">executiva sob NDA</span>.
          </>
        }
        description="Uma conversa para avaliar o potencial de economia, os riscos e os próximos passos a partir do perfil de compras da sua empresa."
        identity={{
          kind: "slogan",
          lines: [[{ text: "É comprar" }, { text: " bem.", accent: true }]],
        }}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:px-10 lg:py-24">
        <div>
          {sent ? (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-green/40 bg-green/10 p-10">
              <CheckCircle2 className="h-12 w-12 text-green" />
              <h2 className="font-serif text-3xl text-navy">Recebido. Obrigado!</h2>
              <p className="text-muted-foreground">
                Nossa equipe vai responder em até 1 dia útil no e-mail informado.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8 md:p-10"
            >
              <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="Empresa" name="empresa" required />
                <Field label="E-mail corporativo" name="email" type="email" required />
              </div>
              <Select
                label="Interesse principal"
                name="interesse"
                required
                defaultValue={defaultInterest}
                options={[
                  "Otimização de Custos",
                  "BPO de Compras",
                  "Inteligência de Gastos",
                  "Revisão Pré-Fechamento",
                  "Gestão de Fornecedores",
                  "Maturidade em Compras",
                  "Academy — capacitação para a equipe",
                  "Ainda não sei — quero um executive briefing",
                ]}
              />
              <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
                <Field label="Volume anual aproximado de compras" name="volume_compras" placeholder="Ex: R$ 50M" />
                <Field label="Quantidade aproximada de compradores internos" name="compradores_internos" type="number" placeholder="Ex: 5" />
              </div>
              <Field label="Principal desafio atual em compras" name="desafio_compras" placeholder="Ex: sobrecarga operacional, contratos ou redução de custos" />
              <div className="grid gap-2">
                <Label htmlFor="mensagem" className="text-sm font-normal text-muted-foreground">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  autoComplete="off"
                  className="min-h-32 resize-y rounded-lg border-border bg-white px-4 py-3 text-sm text-navy shadow-none transition-colors placeholder:text-muted-foreground focus-visible:border-green focus-visible:ring-green/25"
                  placeholder="Conte brevemente o contexto e o que você espera de um parceiro."
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="h-12 w-full rounded-full px-7 font-semibold tracking-wide shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando…</>
                  ) : (
                    "Agendar executive briefing"
                  )}
                </Button>
                <p className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>
                    NDA padrão antes de qualquer briefing. Cobertura de seguro corporativo em todos
                    os engajamentos.
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h3 className="font-serif text-2xl">Fale direto com a gente</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green" />
                <a href="mailto:atendimento@buygroup.com.br" className="hover:text-green">
                  atendimento@buygroup.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-green" />
                <span className="leading-relaxed">
                  R. Rio Grande do Norte, 1436 — Sala 813<br />
                  Savassi, Belo Horizonte — MG<br />
                  CEP 30130-138 · Brasil
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
            <p className="font-serif text-2xl leading-snug text-navy">
              Economia transformada em <span className="text-green">margem</span>, com critérios
              claros e governança financeira.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Experiência em projetos de compras complexos, com remuneração vinculada ao resultado
              validado.
            </p>
          </div>
        </aside>
      </section>

    </SiteLayout>
  );
}

const autoCompleteMap: Record<string, string> = {
  nome: "name",
  email: "email",
  empresa: "organization",
  telefone: "tel",
  cargo: "organization-title",
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-sm font-normal text-muted-foreground">
        {label} {required && <span className="text-green">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoCompleteMap[name] ?? "off"}
        className="h-12 rounded-lg border-border bg-white px-4 text-sm text-navy shadow-none transition-colors placeholder:text-muted-foreground focus-visible:border-green focus-visible:ring-green/25"
      />
    </div>
  );
}

function Select({ label, name, options, defaultValue, required }: { label: string; name: string; options: string[]; defaultValue?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-sm font-normal text-muted-foreground">
        {label} {required && <span className="text-green">*</span>}
      </Label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue ?? ""}
        required={required}
        className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-navy outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green/25"
      >
        <option value="" disabled>Selecione uma opção…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

