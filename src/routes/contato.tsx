import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Buy Group" },
      { name: "description", content: "Fale com a Buy Group e solicite um diagnóstico gratuito de redução de custos." },
      { property: "og:title", content: "Contato Buy Group" },
      { property: "og:description", content: "Solicite um diagnóstico gratuito." },
    ],
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
        eyebrow="Contato"
        title={<>Solicite um <span className="italic">diagnóstico gratuito</span>.</>}
        description="Em até 5 dias úteis entregamos uma estimativa preliminar de saving baseada no perfil da sua empresa."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        <div>
          {sent ? (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/40 bg-primary/10 p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl">Recebido. Obrigado!</h2>
              <p className="text-muted-foreground">
                Nossa equipe vai responder em até 1 dia útil no e-mail informado.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="Empresa" name="empresa" required />
                <Field label="E-mail corporativo" name="email" type="email" required />
                <Field label="Telefone" name="telefone" type="tel" />
              </div>
              <Select label="Interesse principal" name="interesse" options={[
                "Redução de custos",
                "Outsourcing de compras",
                "Cursos in company",
                "Diagnóstico de maturidade",
                "Outro",
              ]} />
              <Field label="Faturamento anual aproximado" name="faturamento" placeholder="Ex: R$ 50M" />
              <div>
                <label htmlFor="mensagem" className="text-sm text-muted-foreground">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  placeholder="Conte brevemente o contexto e o que você espera de um parceiro."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-ember)]"
              >
                Enviar pedido de diagnóstico
              </button>
              <p className="text-xs text-muted-foreground">
                Tratamos as informações com sigilo absoluto e nunca as compartilhamos com terceiros.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-charcoal-soft p-8">
            <h3 className="font-serif text-2xl">Fale direto com a gente</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contato@buygroup.com.br" className="hover:text-primary">contato@buygroup.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+551140000000" className="hover:text-primary">+55 11 4000-0000</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                São Paulo · Brasil
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-serif text-2xl leading-snug">
              "Compre melhor.<br /><span className="italic text-primary">Cresça mais.</span>"
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Mais de 200 projetos entregues. 18% de saving médio. Confidencialidade absoluta.
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
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
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
