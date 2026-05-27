import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingDown, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero-boardroom.jpg";
import mark from "@/assets/buy-group-mark-white.png";
import markEmber from "@/assets/buy-group-mark-ember.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Group — Redução de custos, outsourcing de compras e cursos in company" },
      { name: "description", content: "Consultoria especializada em redução de custos empresariais, outsourcing de compras e capacitação in company para áreas de suprimentos." },
      { property: "og:title", content: "Buy Group — Compre melhor. Cresça mais." },
      { property: "og:description", content: "Reduzimos custos, operamos suas compras e capacitamos seu time." },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: TrendingDown,
    title: "Redução de custos",
    body: "Diagnóstico de spend, renegociação estratégica e modelos de saving sustentável com remuneração atrelada a resultado.",
  },
  {
    icon: Users,
    title: "Outsourcing de compras",
    body: "Operamos sua área de suprimentos como extensão do seu time — governança, processo e tecnologia incluídos.",
  },
  {
    icon: GraduationCap,
    title: "Cursos in company",
    body: "Programas de capacitação desenhados sob medida para compradores, gestores e lideranças de procurement.",
  },
];

const metrics = [
  { value: "18%", label: "Saving médio sobre o spend endereçável" },
  { value: "+200", label: "Projetos entregues no Brasil" },
  { value: "12sem", label: "Tempo médio do primeiro resultado" },
  { value: "97%", label: "Retenção de clientes recorrentes" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-24 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32 lg:pt-36">
          <div className="lg:col-span-8">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-primary">
              Consultoria de procurement
            </p>
            <h1 className="mt-8 text-balance font-serif text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
              Compre melhor.
              <br />
              <span className="italic text-muted-foreground">Cresça mais.</span>
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground">
              A Buy Group ajuda empresas a transformar a área de compras em uma
              alavanca real de margem — com redução de custos, terceirização
              especializada e capacitação executiva.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar diagnóstico gratuito
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary hover:text-primary"
              >
                Conhecer serviços
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pt-24">
            <div className="space-y-6 border-l border-border/80 pl-6">
              <p className="font-serif text-2xl leading-snug text-foreground/90">
                "Quem domina o custo de aquisição, domina a margem."
              </p>
              <p className="text-sm text-muted-foreground">
                Princípio fundador da Buy Group, aplicado a cada projeto desde
                indústrias a serviços B2B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border/60 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background px-6 py-10 lg:px-10">
              <p className="font-serif text-5xl text-primary">{m.value}</p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-[0.24em] text-primary">O que fazemos</p>
            <h2 className="mt-6 text-balance font-serif text-4xl md:text-5xl">
              Três frentes, um único <span className="italic">objetivo</span>: margem.
            </h2>
          </div>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Ver todos os serviços <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/60"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              <Link
                to="/servicos"
                className="mt-8 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-primary"
              >
                Saiba mais <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.24em] text-primary">Nosso método</p>
            <h2 className="mt-6 text-balance font-serif text-4xl md:text-5xl">
              Diagnóstico, execução e governança — sem teoria solta.
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-muted-foreground">
              Cada projeto começa com uma análise profunda do spend e termina com
              indicadores claros de saving auditado. Trabalhamos lado a lado com
              suas equipes, transferindo método e ferramentas.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Remuneração parcial atrelada a resultado
            </div>
          </div>
          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border/60">
            {[
              { n: "01", t: "Diagnóstico do spend", d: "Mapa completo de gastos por categoria, fornecedor e área." },
              { n: "02", t: "Plano de captura", d: "Iniciativas priorizadas por impacto, complexidade e prazo." },
              { n: "03", t: "Execução conjunta", d: "Negociação, RFPs, contratos e implantação de governança." },
              { n: "04", t: "Saving auditado", d: "Reporting mensal com baseline, captura e desvios." },
            ].map((step) => (
              <li key={step.n} className="flex gap-6 bg-card p-6">
                <span className="font-serif text-3xl text-primary">{step.n}</span>
                <div>
                  <p className="font-medium">{step.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-charcoal-soft p-10 md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance font-serif text-4xl md:text-5xl">
                Quanto a sua empresa pode economizar nos próximos 12 meses?
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Em até 5 dias úteis entregamos uma estimativa preliminar de
                saving baseada em benchmarks reais do seu setor.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-ember)]"
              >
                Solicitar diagnóstico gratuito
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/cursos" className="text-sm text-muted-foreground hover:text-primary">
                Conhecer cursos →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
