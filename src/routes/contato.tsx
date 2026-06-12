import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Mail, MapPin, CheckCircle2, Lock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Buy Group" },
      { name: "description", content: "Fale com a Buy Group e solicite um diagnóstico gratuito de redução de custos." },
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
        title={<>Agende uma conversa <span className="text-green">executiva sob NDA</span>.</>}
        description="Uma conversa para avaliar o potencial de economia, os riscos e os próximos passos a partir do perfil de compras da sua empresa."
        identity={{
          kind: "slogan",
          lines: [[{ text: "É comprar", }, { text: " bem.", accent: true }]],
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
            <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)] md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="Empresa" name="empresa" required />
                <Field label="E-mail corporativo" name="email" type="email" required />
                <Field label="Telefone" name="telefone" type="tel" />
              </div>
              <Select label="Interesse principal" name="interesse" options={[
                "Programa de Otimização de Custos",
                "Gestão de Compras",
                "CUT4MORE™ FRAMEWORK completo",
                "Mapeamento de Oportunidades",
                "Educação Executiva para empresas",
                "Outro",
              ]} />
              <Field label="Faturamento anual aproximado" name="faturamento" placeholder="Ex: R$ 50M" />
              <div>
                <label htmlFor="mensagem" className="text-sm text-muted-foreground">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-green"
                  placeholder="Conte brevemente o contexto e o que você espera de um parceiro."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar executive briefing
              </button>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" />
                NDA padrão antes de qualquer briefing. Cobertura de seguro corporativo em todos os engajamentos.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h3 className="font-serif text-2xl">Fale direto com a gente</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green" />
                <a href="mailto:atendimento@buygroup.com.br" className="hover:text-green">atendimento@buygroup.com.br</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-green" />
                São Paulo · Brasil
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
            <p className="font-serif text-2xl leading-snug text-navy">
              "R$ <span className="text-green">2.1</span>Bi+ em savings auditados.
              <br />Zero risco à sua reputação."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Experiência em projetos de compras complexos, com remuneração vinculada ao resultado validado.
            </p>
          </div>
        </aside>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground">
        {label} {required && <span className="text-green">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-green"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground">{label}</label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-green"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
