import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Database,
  FileSearch,
  Gauge,
  Handshake,
  LineChart,
  Lock,
  Rocket,
  ShieldCheck,
  Target,
  Timer,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/otimizacao-de-custos")({
  head: () => ({
    meta: [
      { title: "Cost Optimization Program · CUT4MORE™ | Buy Group" },
      {
        name: "description",
        content:
          "Programa estruturado de redução de custos com remuneração 100% vinculada aos savings homologados. Da análise forense ao contrato renegociado.",
      },
      { property: "og:title", content: "Cost Optimization Program | Buy Group" },
      {
        property: "og:description",
        content:
          "Capturamos economia que sua empresa já deveria ter, com governança e resultado validado.",
      },
      { property: "og:url", content: "/cost-optimization" },
    ],
    links: [{ rel: "canonical", href: "/cost-optimization" }],
  }),
  component: CostOptimizationPage,
});

const whenItMakesSense = [
  "Contratos sem renegociação ativa há mais de 12 meses",
  "Fornecedores estratégicos sem concorrência",
  "Base de spend sem classificação confiável",
  "Savings identificados internamente mas não executados",
  "Fusões e aquisições com sobreposição de contratos",
  "Pressão de margem sem aumento de receita",
  "Auditoria ou board exigindo eficiência em compras",
  "Equipe interna sem capacidade de conduzir negociações complexas",
];

const phases = [
  {
    icon: FileSearch,
    title: "Mapeamento de Oportunidades",
    body: "Classificação forense do spend, baseline auditável e priorização por potencial de saving.",
    deadline: "30 dias",
  },
  {
    icon: Target,
    title: "Estratégia de Compra",
    body: "Composição de custos, alternativas de fornecimento e plano competitivo por categoria.",
    deadline: "15 dias",
  },
  {
    icon: Handshake,
    title: "Condução da Negociação",
    body: "RFQ, equalização e negociação direta com foco em margem, SLA e continuidade.",
    deadline: "45 dias",
  },
  {
    icon: ClipboardCheck,
    title: "Validação dos Savings",
    body: "Homologação financeira contra baseline, com relatório auditável para o board.",
    deadline: "Contínuo",
  },
];

const included = [
  { icon: Database, title: "Spend Intelligence dos últimos 24 meses" },
  { icon: FileSearch, title: "Classificação UNSPSC adaptada" },
  { icon: ClipboardCheck, title: "Baseline oficial auditável" },
  { icon: Target, title: "Estratégia por categoria" },
  { icon: Handshake, title: "Condução de RFQ e negociação" },
  { icon: BarChart3, title: "Relatórios executivos mensais" },
  { icon: ShieldCheck, title: "Validação financeira third-party" },
  { icon: LineChart, title: "Dashboard board-ready" },
];

const audiences = [
  "Empresas com faturamento acima de R$ 200MM",
  "Volume de compras indiretas acima de R$ 20MM/ano",
  "Equipe interna sem especialização em negociação estratégica",
  "Contratos recorrentes com mais de 12 meses sem renegociação",
  "Grupos com múltiplas unidades ou empresas",
];

const engagementModels = [
  {
    n: "01",
    title: "Projeto por categoria",
    body: "Categorias específicas, prazo definido, fee sobre saving homologado.",
    icon: Gauge,
  },
  {
    n: "02",
    title: "Programa completo",
    body: "Spend total endereçável, ciclo de 6 a 18 meses, fee sobre saving validado.",
    icon: Rocket,
  },
  {
    n: "03",
    title: "Programa acelerado",
    body: "Quick wins em 90 dias, categorias priorizadas por ROI imediato.",
    icon: Timer,
  },
];

function CostOptimizationPage() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Produto principal · CUT4MORE™
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              Capturamos economia que sua empresa já deveria ter.{" "}
              <span className="text-white/55">Com governança e resultado validado.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
              Programa estruturado de redução de custos com remuneração 100% vinculada aos savings
              homologados. Da análise forense ao contrato renegociado.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 font-semibold">
                <Link to="/contato" search={{ interesse: "cost-optimization" }}>
                  Agendar executive briefing <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/25 bg-transparent px-7 text-white shadow-none hover:bg-white/10 hover:text-white"
              >
                <a href="#metodologia">
                  Conhecer a metodologia <ArrowDown />
                </a>
              </Button>
            </div>
            <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.17em] text-white/50">
              <Lock className="h-3.5 w-3.5 text-green" /> SOB NDA · SENIOR-ONLY DELIVERY · NO
              SAVINGS, NO FEE
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
              ["metodologia", "Metodologia"],
              ["incluido", "O que está incluído"],
              ["para-quem", "Para quem"],
              ["modelos", "Modelos de engajamento"],
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
        className="scroll-mt-32 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Quando faz sentido</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Quando o Cost Optimization Program faz sentido
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              O programa é desenhado para empresas que sabem — ou desconfiam — que estão deixando
              dinheiro na mesa em contratos, fornecedores e categorias estratégicas, mas não têm
              capacidade interna para destravar os savings com governança.
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
        id="metodologia"
        className="scroll-mt-32 border-y border-border bg-secondary/35"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Metodologia CUT4MORE™</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              O que entregamos em cada fase
            </h2>
            <p className="mt-6 text-muted-foreground">
              Quatro fases sequenciais, com entregáveis claros, prazos definidos e remuneração
              vinculada ao saving homologado.
            </p>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, i) => (
              <li key={phase.title} className="bg-white p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <phase.icon className="h-6 w-6 text-green" />
                  <span className="font-serif text-xl text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-navy/70">
                  <Timer className="h-3 w-3 text-green" /> {phase.deadline}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="incluido"
        className="scroll-mt-32 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="max-w-3xl">
          <Eyebrow>Escopo do programa</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            O que está incluído no programa
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {included.map((item) => (
            <article key={item.title} className="bg-white p-7 lg:p-8">
              <item.icon className="h-6 w-6 text-green" />
              <h3 className="mt-6 font-serif text-lg leading-snug text-navy">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section
        id="para-quem"
        className="scroll-mt-32 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28"
      >
        <div className="lg:col-span-6">
          <Eyebrow>Perfil de empresa</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Para quem é indicado
          </h2>
        </div>
        <ul className="space-y-3 lg:col-span-6">
          {audiences.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-border pb-3 text-sm text-navy"
            >
              <Check className="h-4 w-4 shrink-0 text-green" /> {item}
            </li>
          ))}
        </ul>
      </section>



      <section
        id="modelos"
        className="scroll-mt-32 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <Eyebrow>Estrutura de contratação</Eyebrow>
        <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
          Modelos de engajamento
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((item) => (
            <article
              key={item.n}
              className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <item.icon className="h-6 w-6 text-green" />
                <span className="font-serif text-4xl text-green">{item.n}</span>
              </div>
              <h3 className="mt-7 font-serif text-2xl text-navy">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/45 p-9 md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Executive briefing</p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl text-navy md:text-5xl">
                Avalie o potencial de saving da sua empresa
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Briefing de 20 minutos sob NDA. Estimativa preliminar em até 5 dias úteis.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/contato" search={{ interesse: "cost-optimization" }}>
                  Agendar executive briefing <ArrowUpRight />
                </Link>
              </Button>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Aceitando 3 novos engajamentos neste trimestre
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
