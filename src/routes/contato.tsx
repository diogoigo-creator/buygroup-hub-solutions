import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, CheckCircle2, Lock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Buy Group" },
      {
        name: "description",
        content: "Fale com a Buy Group e solicite um diagnóstico gratuito de redução de custos.",
      },
      { property: "og:title", content: "Contato Buy Group" },
      { property: "og:description", content: "Solicite um diagnóstico gratuito." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
                <Field label="Telefone" name="telefone" type="tel" />
              </div>
              <Select
                label="Interesse principal"
                name="interesse"
                options={[
                  "Programa de Otimização de Custos",
                  "Gestão de Compras",
                  "Metodologia CUT4MORE™ completa",
                  "Mapeamento de Oportunidades",
                  "Educação Executiva para empresas",
                  "Outro",
                ]}
              />
              <Field
                label="Faturamento anual aproximado"
                name="faturamento"
                placeholder="Ex: R$ 50M"
              />
              <div className="grid gap-2">
                <Label htmlFor="mensagem" className="text-sm font-normal text-muted-foreground">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className="min-h-32 resize-y rounded-lg border-border bg-white px-4 py-3 text-sm text-navy shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-green focus-visible:ring-green/25"
                  placeholder="Conte brevemente o contexto e o que você espera de um parceiro."
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-full px-7 font-semibold tracking-wide shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Agendar executive briefing
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
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-green" />
                São Paulo · Brasil
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

      <WhatsAppFab />
    </SiteLayout>
  );
}

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
        className="h-12 rounded-lg border-border bg-white px-4 text-sm text-navy shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-green focus-visible:ring-green/25"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-sm font-normal text-muted-foreground">
        {label}
      </Label>
      <select
        id={name}
        name={name}
        className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-navy outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green/25"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
