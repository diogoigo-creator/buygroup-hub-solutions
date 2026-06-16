import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  ArrowUpRight,
  BarChart3,
  Compass,
  GraduationCap,
  Handshake,
  Rocket,
  RotateCw,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
} from "lucide-react";
import type { ComponentType } from "react";
import { SOCIAL_META, SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () => {
    const title = "Portfólio Buy Group — Por onde começar";
    const description =
      "Portfólio de produtos da Buy Group: Otimização de Custos, BPO de Compras, Inteligência de Gastos, Academy e serviços complementares.";
    const url = `${SITE_URL}/servicos`;
    const items: { name: string; path: string }[] = [
      { name: "Otimização de Custos", path: "/otimizacao-de-custos" },
      { name: "BPO de Compras", path: "/bpo-de-compras" },
      { name: "Inteligência de Gastos", path: "/inteligencia-de-gastos" },
      { name: "Buy Group Academy", path: "/cursos" },
      { name: "Gestão de Fornecedores", path: "/gestao-de-fornecedores" },
      { name: "Maturidade em Compras", path: "/maturidade-em-compras" },
      { name: "Revisão Pré-Fechamento", path: "/revisao-pre-fechamento" },
    ];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Portfólio Buy Group" },
        {
          property: "og:description",
          content: "Cada produto é desenhado para um momento diferente da maturidade de compras. Escolha o ponto de entrada certo.",
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
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            url,
            name: title,
            description,
            hasPart: items.map((it) => ({
              "@type": "Service",
              name: it.name,
              url: `${SITE_URL}${it.path}`,
              provider: { "@id": `${SITE_URL}/#organization` },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Serviços", path: "/servicos" },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicosPage,
});

type EntryRoute =
  | "/inteligencia-de-gastos"
  | "/otimizacao-de-custos"
  | "/bpo-de-compras"
  | "/cursos"
  | "/gestao-de-fornecedores"
  | "/maturidade-em-compras"
  | "/revisao-pre-fechamento"
  | "/contato";

const entryProfiles: {
  icon: ComponentType<{ className?: string }>;
  question: string;
  product: string;
  to: EntryRoute;
  interesse?: string;
}[] = [
  {
    icon: Compass,
    question: "Não sei onde estou perdendo",
    product: "Inteligência de Gastos",
    to: "/inteligencia-de-gastos",
  },
  {
    icon: Target,
    question: "Sei onde estou perdendo, preciso executar",
    product: "Otimização de Custos",
    to: "/otimizacao-de-custos",
  },
  {
    icon: RotateCw,
    question: "Preciso de operação contínua de compras",
    product: "BPO de Compras",
    to: "/bpo-de-compras",
  },
];

const portfolio: {
  badge: string;
  title: string;
  description: string;
  fit: string;
  icon: ComponentType<{ className?: string }>;
  to: EntryRoute;
  interesse?: string;
}[] = [
  {
    badge: "Produto principal",
    icon: TrendingDown,
    title: "Otimização de Custos",
    description:
      "Programa estruturado de redução de custos com remuneração 100% vinculada aos savings homologados.",
    fit: "Para empresas que sabem onde perdem margem e precisam executar com governança.",
    to: "/otimizacao-de-custos",
  },
  {
    badge: "Operação contínua",
    icon: Handshake,
    title: "BPO de Compras",
    description:
      "Célula externa de compras orientada a SLA, savings e governança financeira.",
    fit: "Para operações que precisam comprar melhor sem aumentar estrutura interna.",
    to: "/bpo-de-compras",
  },
  {
    badge: "Ponto de entrada",
    icon: Sparkles,
    title: "Inteligência de Gastos",
    description:
      "Classificação forense de 24 meses de gasto, baseline auditável e quick wins em 30 dias.",
    fit: "Para empresas que nunca fizeram um mapeamento formal de spend.",
    to: "/inteligencia-de-gastos",
  },
  {
    badge: "Capacitação",
    icon: GraduationCap,
    title: "Academy",
    description:
      "Educação executiva para lideranças e equipes de compras, com simulações e casos reais.",
    fit: "Para times que querem evoluir negociação, análise e governança internamente.",
    to: "/cursos",
  },
  {
    badge: "Complementar",
    icon: ShieldCheck,
    title: "Gestão de Fornecedores",
    description:
      "Homologação, segmentação, avaliação e desenvolvimento de fornecedores críticos sob a ótica de risco e continuidade.",
    fit: "Para empresas com base de fornecedores estratégica e risco operacional relevante.",
    to: "/gestao-de-fornecedores",
  },
  {
    badge: "Complementar",
    icon: BarChart3,
    title: "Maturidade em Compras",
    description:
      "Diagnóstico da área de compras frente a referências de mercado, com plano priorizado e justificativa financeira.",
    fit: "Para CPOs e CFOs preparando um plano de evolução de 12 a 24 meses.",
    to: "/maturidade-em-compras",
  },
  {
    badge: "Novo",
    icon: ScanSearch,
    title: "Revisão Pré-Fechamento",
    description:
      "Revisão independente de propostas comerciais com negociação direta pela Buy Group. Remuneração de 50% sobre a economia gerada.",
    fit: "Para times internos ativos que querem validar e capturar saving residual antes do fechamento.",
    to: "/revisao-pre-fechamento",
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfólio Buy Group"
        title={
          <>
            Como a Buy Group atua. Escolha o ponto de entrada{" "}
            <span className="text-green">certo para o seu momento</span>.
          </>
        }
        description="Cada produto é desenhado para um momento diferente da maturidade de compras. Alguns clientes começam pelo assessment. Outros chegam com urgência de saving. Outros precisam de operação contínua."
        identity={{
          kind: "lockup",
        }}
      />

      {/* POR ONDE COMEÇAR */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-10 lg:pt-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Por onde começar</p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Três perfis de entrada
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {entryProfiles.map((p) => (
            <Link
              key={p.product}
              to={p.to}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-green/10 bg-gradient-to-br from-green/20 to-green/5 text-navy">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="mt-7 font-serif text-2xl leading-snug text-navy">
                "{p.question}"
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Produto recomendado
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-green">
                {p.product}{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PORTFOLIO COMPLETO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Portfólio completo</p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Todos os produtos da Buy Group
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green/10 bg-gradient-to-br from-green/20 to-green/5 text-navy">
                  <s.icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                    s.badge === "Novo"
                      ? "bg-green font-semibold text-navy"
                      : "bg-secondary text-navy/70"
                  }`}
                >
                  {s.badge}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <p className="mt-5 border-t border-border/60 pt-4 text-xs text-navy/70">
                <span className="font-semibold uppercase tracking-[0.18em] text-navy/55">
                  Para quem:{" "}
                </span>
                {s.fit}
              </p>
              {s.interesse ? (
                <Link
                  to={s.to}
                  search={{ interesse: s.interesse }}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-green"
                >
                  Ver mais <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  to={s.to}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-green"
                >
                  Ver mais <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green/25 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-green">Conversa executiva</p>
              <h3 className="mt-4 max-w-2xl text-balance font-serif text-3xl md:text-4xl">
                Não sabe qual produto é o certo para o seu momento?
              </h3>
              <p className="mt-4 max-w-xl text-white/75">
                Em 20 minutos, sob NDA, indicamos o ponto de entrada mais adequado ao seu cenário de
                compras.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
            >
              <Rocket className="h-4 w-4" /> Agendar conversa de 20 minutos
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
