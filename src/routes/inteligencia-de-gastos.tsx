import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Database,
  FileSearch,
  Layers,
  LineChart,
  Lock,
  Map,
  ShieldCheck,
  Target,
  X as XIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OutrosServicos } from "@/components/site/OutrosServicos";
import { Button } from "@/components/ui/button";
import { SOCIAL_META, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/inteligencia-de-gastos")({
  head: () => {
    const title = "Inteligência de Gastos · Assessment | Buy Group";
    const description =
      "Classificação forense de 24 meses de gasto. Baseline oficial auditável. Quick wins identificados em 30 dias.";
    const url = "https://buygroup-hub-solutions.lovable.app/inteligencia-de-gastos";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Inteligência de Gastos | Buy Group" },
        {
          property: "og:description",
          content: "Assessment de spend sob NDA. Painel executivo e oportunidades em 30 dias.",
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
              name: "Inteligência de Gastos",
              serviceType: "Spend analytics & assessment",
              description,
              path: "/inteligencia-de-gastos",
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Serviços", path: "/servicos" },
              { name: "Inteligência de Gastos", path: "/inteligencia-de-gastos" },
            ]),
          ),
        },
      ],
    };
  },
  component: SpendIntelligencePage,
});

const without = [
  "Spend classificado de forma errada",
  "Contratos duplicados invisíveis",
  "Fornecedores da mesma categoria sem consolidação",
  "Decisões de saving baseadas em percepção, não em dado",
  "Baseline inexistente para medir resultado",
  "Oportunidades óbvias não priorizadas",
];

const withIt = [
  "90% do gasto classificado em 30 dias",
  "Classificação de despesas customizada por setor",
  "Mapa de fornecedores por categoria",
  "Quick wins priorizados por ROI",
  "Baseline oficial aprovado pelo cliente",
  "Ponto de partida para qualquer projeto de saving",
];

const deliverables = [
  { icon: Map, title: "Mapa de spend por categoria e fornecedor" },
  { icon: Layers, title: "Classificação inteligente de compras adaptada ao setor" },
  { icon: FileSearch, title: "Identificação de sobreposições e contratos duplicados" },
  { icon: Target, title: "Ranking de oportunidades por potencial de saving" },
  { icon: ShieldCheck, title: "Baseline oficial auditável por third-party" },
  { icon: LineChart, title: "Painel executivo interativo" },
  { icon: BarChart3, title: "Relatório de quick wins com prazo e ROI estimado" },
  { icon: ClipboardCheck, title: "Recomendação de próximos passos priorizados" },
];

const steps = [
  {
    n: "01",
    title: "Coleta de dados",
    deadline: "5 dias",
    body: "Recebimento das bases de AP, contratos e notas fiscais dos últimos 24 meses sob NDA.",
  },
  {
    n: "02",
    title: "Classificação e análise",
    deadline: "20 dias",
    body: "Taxonomia, deduplicação, enriquecimento de dados e identificação de padrões.",
  },
  {
    n: "03",
    title: "Entrega executiva",
    deadline: "5 dias",
    body: "Painel interativo, relatório de oportunidades e apresentação para liderança.",
  },
];

const audiences = [
  "Empresas que nunca fizeram um mapeamento formal de spend",
  "Gestão que quer priorizar onde atuar antes de contratar consultoria de saving",
  "CFOs que precisam de baseline confiável para comitê ou board",
  "Empresas em processo de fusão ou aquisição com bases de fornecedores a consolidar",
  "Times de compras que querem identificar quick wins com dados, não com percepção",
];

function SpendIntelligencePage() {
  return (
    <SiteLayout>
      
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Assessment · Entrada do programa
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              Você sabe exatamente onde sua empresa gasta.{" "}
              <span className="text-white/55">Mas sabe onde está perdendo?</span>
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
              Classificação forense de 24 meses de gasto. Baseline oficial auditável. Quick wins
              identificados em 30 dias.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 font-semibold">
                <Link to="/contato" hash="form" search={{ interesse: "spend-intelligence" }}>
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
              <Lock className="h-3.5 w-3.5 text-green" /> SOB NDA · ENTREGA EM 30 DIAS · BASELINE
              AUDITÁVEL
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
              ["problema", "Problema que resolvemos"],
              ["entregaveis", "Entregáveis"],
              ["como-funciona", "Como funciona"],
              ["para-quem", "Para quem"],
              ["relacao", "Relação com outros serviços"],
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

      <section id="problema" className="scroll-mt-[var(--scroll-anchor)] mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Problema que resolvemos</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            A diferença entre achar e saber onde a margem está
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Sem Inteligência de Gastos
            </p>
            <h3 className="mt-4 font-serif text-2xl text-navy">Decisão por percepção</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy/40" /> {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-green/40 bg-secondary/40 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-green">Com Inteligência de Gastos</p>
            <h3 className="mt-4 font-serif text-2xl text-navy">Decisão por dado auditável</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {withIt.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" /> {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        id="entregaveis"
        className="scroll-mt-[var(--scroll-anchor)] border-y border-border bg-secondary/35"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Entregáveis do assessment</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              O que entregamos ao final de 30 dias
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
          Três etapas, 30 dias
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
                  {step.deadline}
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
            Quem se beneficia do assessment
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

      <section id="relacao" className="scroll-mt-[var(--scroll-anchor)] border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow>Relação com outros serviços</Eyebrow>
              <p className="mt-5 max-w-3xl font-serif text-2xl leading-snug text-navy md:text-3xl">
                A Inteligência de Gastos é o ponto de partida natural para a Otimização de Custos e
                para o BPO de Compras. Empresas que começam pelo assessment chegam ao projeto de
                saving com baseline validado, priorizações claras e tempo de execução{" "}
                <span className="text-green">40% menor</span>.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/otimizacao-de-custos"
                className="inline-flex items-center justify-between gap-4 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-green hover:text-green"
              >
                Ver Otimização de Custos <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/bpo-de-compras"
                className="inline-flex items-center justify-between gap-4 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-green hover:text-green"
              >
                Ver BPO de Compras <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OutrosServicos currentSlug="inteligencia-de-gastos" />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/45 p-9 md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Assessment</p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl text-navy md:text-5xl">
                Saiba onde sua empresa está perdendo em 30 dias
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Assessment sob NDA. Painel executivo e relatório de oportunidades entregues em 30
                dias.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/contato" hash="form" search={{ interesse: "spend-intelligence" }}>
                  Falar com especialista <ArrowUpRight />
                </Link>
              </Button>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <Database className="h-3.5 w-3.5 text-green" /> Dados sob NDA · Entrega em 30 dias
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
    <p
      className={`text-xs uppercase tracking-[0.28em] ${light ? "text-green" : "text-navy/55"}`}
    >
      {children}
    </p>
  );
}
