import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Leaf,
  LineChart,
  Lock,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { OutrosServicos } from "@/components/site/OutrosServicos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gestao-de-fornecedores")({
  head: () => ({
    meta: [
      { title: "Gestão de Fornecedores | Buy Group" },
      {
        name: "description",
        content:
          "Homologação, segmentação, avaliação e desenvolvimento de fornecedores críticos sob a ótica de risco, ESG e continuidade operacional.",
      },
      { property: "og:title", content: "Gestão de Fornecedores | Buy Group" },
      {
        property: "og:description",
        content: "Governança estruturada para fornecedores críticos, sob NDA.",
      },
      { property: "og:url", content: "https://buygroup-hub-solutions.lovable.app/gestao-de-fornecedores" },
      { property: "og:image", content: "https://buygroup-hub-solutions.lovable.app/og-buygroup.jpg" },
      { property: "twitter:image", content: "https://buygroup-hub-solutions.lovable.app/og-buygroup.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/gestao-de-fornecedores" }],
  }),
  component: SupplierRiskPage,
});

const whenItMakesSense = [
  "Base de fornecedores sem homologação formal",
  "Concentração em poucos fornecedores críticos",
  "Ausência de avaliação de desempenho",
  "Exigência ESG ou compliance vinda do board ou da auditoria",
  "Histórico recente de falhas de fornecimento",
  "M&A com necessidade de consolidar bases de fornecedores",
];

const deliverables = [
  { icon: Gauge, title: "Matriz de criticidade de fornecedores" },
  { icon: ClipboardCheck, title: "Processo de homologação documentado" },
  { icon: Leaf, title: "Critérios ESG e compliance" },
  { icon: BarChart3, title: "SLA e indicadores de desempenho" },
  { icon: ShieldCheck, title: "Plano de mitigação de risco" },
  { icon: LineChart, title: "Dashboard de fornecedores críticos" },
  { icon: FileSearch, title: "Governança documental e auditável" },
  { icon: Users, title: "Plano de desenvolvimento de fornecedores" },
];

const steps = [
  {
    n: "01",
    title: "Mapeamento da base",
    deadline: "15 dias",
    body: "Inventário, segmentação por categoria e identificação de fornecedores estratégicos.",
  },
  {
    n: "02",
    title: "Classificação de risco",
    deadline: "20 dias",
    body: "Avaliação financeira, operacional, ESG, compliance e concentração — matriz de criticidade.",
  },
  {
    n: "03",
    title: "Governança contínua",
    deadline: "Contínuo",
    body: "Homologação, SLA, monitoramento, planos de mitigação e desenvolvimento.",
  },
];

const audiences = [
  "Empresas com base de fornecedores estratégica e risco operacional relevante",
  "Operações com fornecedores únicos ou alta concentração",
  "Empresas pressionadas por exigências ESG e compliance",
  "Grupos em processo de M&A consolidando bases de fornecedores",
  "CFOs e CPOs com auditoria ou board exigindo governança",
];

function SupplierRiskPage() {
  return (
    <SiteLayout>
      <Breadcrumb currentLabel="Gestão de Fornecedores" currentSlug="gestao-de-fornecedores" />
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Serviço complementar · Governança de fornecedores
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              Seus fornecedores críticos sustentam sua operação.{" "}
              <span className="text-white/55">Quem sustenta seus fornecedores?</span>
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
              Programa estruturado de homologação, avaliação e governança de fornecedores críticos
              sob a ótica de risco, ESG, compliance e continuidade operacional.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 font-semibold">
                <Link to="/contato" search={{ interesse: "supplier-risk" }}>
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
              <Lock className="h-3.5 w-3.5 text-green" /> SOB NDA · GOVERNANÇA · RISCO E CONTINUIDADE
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
              ["quando-faz-sentido", "Quando faz sentido"],
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

      <section
        id="quando-faz-sentido"
        className="scroll-mt-[var(--scroll-anchor)] mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Quando faz sentido</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Quando a Gestão de Fornecedores faz sentido
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Falha de fornecedor crítico custa mais do que qualquer saving. Estruturamos a
              governança para reduzir risco sem travar a operação.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {whenItMakesSense.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white p-6 text-sm text-navy">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="entregaveis"
        className="scroll-mt-[var(--scroll-anchor)] border-y border-border bg-secondary/35"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Entregáveis</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              O que entregamos
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
          Três fases, do diagnóstico à governança contínua
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

      <OutrosServicos currentSlug="gestao-de-fornecedores" />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/45 p-9 md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Executive briefing</p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl text-navy md:text-5xl">
                Estruture a governança de fornecedores críticos
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Conversa de 20 minutos sob NDA para avaliar o nível atual de risco e os próximos
                passos.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/contato" search={{ interesse: "supplier-risk" }}>
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
