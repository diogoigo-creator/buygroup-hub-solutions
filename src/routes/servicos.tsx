import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { TrendingDown, Users, GraduationCap, FileSearch, Handshake, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Redução de custos e outsourcing de compras | Buy Group" },
      { name: "description", content: "Consultoria de redução de custos, outsourcing de procurement, sourcing estratégico, gestão de fornecedores e cursos in company." },
      { property: "og:title", content: "Serviços Buy Group" },
      { property: "og:description", content: "Compras como alavanca de margem." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    icon: TrendingDown,
    title: "Redução de custos",
    body: "Programas estruturados de saving sobre o spend endereçável, com remuneração parcial atrelada a resultado auditado.",
    bullets: ["Diagnóstico de spend (90% do gasto em 30 dias)", "Renegociação de contratos e fornecedores", "Sourcing competitivo e RFPs", "Acompanhamento mensal de captura"],
  },
  {
    icon: Users,
    title: "Outsourcing de compras",
    body: "Operamos parte ou toda a sua área de suprimentos, com governança, tecnologia e indicadores integrados ao seu negócio.",
    bullets: ["BPO de compras táticas e indiretas", "Implantação de P2P e fluxo aprovativo", "SLA contratual e dashboard executivo", "Time dedicado com expertise setorial"],
  },
  {
    icon: GraduationCap,
    title: "Cursos in company",
    body: "Capacitação sob medida para compradores, supervisores e lideranças que querem profissionalizar a função de compras.",
    bullets: ["Negociação aplicada a procurement", "Strategic sourcing e categoria", "Gestão de contratos e fornecedores", "Procurement analytics e KPIs"],
  },
  {
    icon: FileSearch,
    title: "Spend analytics",
    body: "Classificação inteligente do gasto e visualização por categoria, fornecedor, área e centro de custo.",
    bullets: ["Taxonomia UNSPSC adaptada", "Painéis interativos", "Identificação de quick wins"],
  },
  {
    icon: Handshake,
    title: "Gestão de fornecedores",
    body: "Homologação, avaliação, segmentação e desenvolvimento de fornecedores críticos.",
    bullets: ["Critérios ESG e compliance", "Programas de SRM", "Avaliação 360°"],
  },
  {
    icon: BarChart3,
    title: "Diagnóstico de maturidade",
    body: "Assessment da função de compras frente a benchmarks de mercado, com roadmap priorizado de evolução.",
    bullets: ["Pessoas, processo e tecnologia", "Roadmap 12-24 meses", "Quick wins acionáveis"],
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Serviços"
        title={<>Soluções end-to-end para a função de <span className="italic">compras</span>.</>}
        description="Da análise do primeiro real ao saving auditado, passando por capacitação e operação terceirizada — tudo conectado em uma única metodologia."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-8 font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-foreground/85">
                    <span aria-hidden className="mt-2 inline-block h-1 w-1 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-charcoal-soft p-10 md:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl">Como começamos um projeto</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Em uma conversa de 45 minutos entendemos seu contexto e propomos
                um diagnóstico gratuito com estimativa de saving potencial.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-ember)]"
            >
              Agendar conversa
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
