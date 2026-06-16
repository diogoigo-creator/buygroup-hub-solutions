import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Cog,
  FileSearch,
  Layers,
  LineChart,
  Lock,
  Presentation,
  Rocket,
  ShieldCheck,
  Target,
  Timer,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { OutrosServicos } from "@/components/site/OutrosServicos";
import { Button } from "@/components/ui/button";
import { SOCIAL_META, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/maturidade-em-compras")({
  head: () => {
    const title = "Maturidade em Compras — Buy Group";
    const description =
      "Diagnóstico da área de compras frente a referências de mercado, com plano priorizado e justificativa financeira para os próximos 12 a 24 meses.";
    const url = "https://buygroup-hub-solutions.lovable.app/maturidade-em-compras";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Maturidade em Compras — Buy Group" },
        {
          property: "og:description",
          content: "Benchmark, gap analysis e plano de evolução de compras com business case.",
        },
        { property: "og:url", content: url },
        ...SOCIAL_META,
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceJsonLd({
              name: "Diagnóstico de Maturidade em Compras",
              serviceType: "Procurement maturity assessment",
              description,
              path: "/maturidade-em-compras",
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Serviços", path: "/servicos" },
              { name: "Maturidade em Compras", path: "/maturidade-em-compras" },
            ]),
          ),
        },
      ],
    };
  },
  component: ProcurementMaturityPage,
});

const dimensions = [
  { icon: Users, title: "Pessoas e estrutura" },
  { icon: Cog, title: "Processos de compras" },
  { icon: Layers, title: "Tecnologia e dados" },
  { icon: ShieldCheck, title: "Governança e compliance" },
  { icon: BarChart3, title: "Indicadores e performance" },
  { icon: Target, title: "Categorias estratégicas" },
  { icon: FileSearch, title: "Gestão de fornecedores" },
  { icon: LineChart, title: "Gestão de risco" },
];

const deliverables = [
  { icon: ClipboardCheck, title: "Scorecard de maturidade por dimensão" },
  { icon: BarChart3, title: "Benchmark setorial" },
  { icon: FileSearch, title: "Gap analysis estruturado" },
  { icon: Rocket, title: "Plano de evolução de 12 a 24 meses" },
  { icon: LineChart, title: "Business case por iniciativa" },
  { icon: Target, title: "Roadmap priorizado por ROI" },
  { icon: Presentation, title: "Apresentação para board" },
  { icon: ShieldCheck, title: "Recomendação de quick wins" },
];

const steps = [
  {
    n: "01",
    title: "Entrevistas e coleta",
    deadline: "10 dias",
    body: "Entrevistas com liderança, coleta de processos, indicadores e bases de dados de compras.",
  },
  {
    n: "02",
    title: "Análise e benchmark",
    deadline: "20 dias",
    body: "Avaliação por dimensão, comparação com referências setoriais e gap analysis.",
  },
  {
    n: "03",
    title: "Apresentação executiva",
    deadline: "10 dias",
    body: "Scorecard, plano de evolução, business case por iniciativa e apresentação para o board.",
  },
];

const audiences = [
  "CPOs e CFOs preparando um plano de evolução de 12 a 24 meses",
  "Empresas em transformação ou crescimento acelerado",
  "Organizações com board ou auditoria exigindo evolução da área de compras",
  "Grupos em processo de M&A integrando funções de compras",
  "Empresas que querem comparar a área frente a referências de mercado",
];

function ProcurementMaturityPage() {
  return (
    <SiteLayout>
      <Breadcrumb currentLabel="Maturidade em Compras" currentSlug="maturidade-em-compras" />
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Serviço complementar · Diagnóstico
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              Onde sua área de compras está hoje.{" "}
              <span className="text-white/55">
                E para onde precisa ir nos próximos 24 meses.
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
              Diagnóstico estruturado da área de compras frente a referências de mercado, com plano
              priorizado e justificativa financeira para a decisão executiva.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 font-semibold">
                <Link to="/contato" search={{ interesse: "procurement-maturity" }}>
                  Falar com especialista <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/25 bg-transparent px-7 text-white shadow-none hover:bg-white/10 hover:text-white"
              >
                <a href="#entregaveis">
                  Ver o que entregamos <ArrowDown />
                </a>
              </Button>
            </div>
            <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.17em] text-white/50">
              <Lock className="h-3.5 w-3.5 text-green" /> SOB NDA · BENCHMARK · PLANO 12-24 MESES
            </p>
          </div>
        </div>
      </section>

      <nav
        aria-label="Sumário da página"
        className="sticky top-16 z-30 border-b border-border bg-white/90 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-10">
          <ul className="flex min-w-max items-center gap-1 py-3 text-xs font-medium text-muted-foreground sm:text-sm">
            {[
              ["dimensoes", "Dimensões avaliadas"],
              ["entregaveis", "Entregáveis"],
              ["como-funciona", "Como funciona"],
              ["para-quem", "Para quem"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-secondary hover:text-navy"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="dimensoes" className="scroll-mt-[var(--scroll-anchor)] mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Dimensões avaliadas</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Oito dimensões, uma fotografia completa
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {dimensions.map((item) => (
            <article key={item.title} className="bg-white p-7 lg:p-8">
              <item.icon className="h-6 w-6 text-green" />
              <h3 className="mt-6 font-serif text-lg leading-snug text-navy">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="entregaveis" className="scroll-mt-[var(--scroll-anchor)] border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Entregáveis</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              O que entregamos ao final do diagnóstico
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <article key={item.title} className="bg-white p-7 lg:p-8">
                <item.icon className="h-6 w-6 text-green" />
                <h3 className="mt-6 font-serif text-lg leading-snug text-navy">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="scroll-mt-[var(--scroll-anchor)] mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
          Três etapas, 40 dias
        </h2>
        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-green">{step.n}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-navy/70">
                  <Timer className="h-3 w-3 text-green" /> {step.deadline}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="para-quem"
        className="scroll-mt-[var(--scroll-anchor)] mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28"
      >
        <div className="lg:col-span-6">
          <Eyebrow>Para quem é indicado</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Quem se beneficia
          </h2>
        </div>
        <ul className="space-y-3 lg:col-span-6">
          {audiences.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-b border-border pb-3 text-sm text-navy"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" /> {item}
            </li>
          ))}
        </ul>
      </section>

      <OutrosServicos currentSlug="maturidade-em-compras" />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/45 p-9 md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Conversa executiva</p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl text-navy md:text-5xl">
                Avalie a maturidade da sua área de compras
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Conversa de 20 minutos sob NDA para definir o escopo do diagnóstico.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/contato" search={{ interesse: "procurement-maturity" }}>
                  Falar com especialista <ArrowUpRight />
                </Link>
              </Button>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-green" /> Confidencial · NDA padrão
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs uppercase tracking-[0.28em] ${light ? "text-green" : "text-navy/55"}`}>
      {children}
    </p>
  );
}
