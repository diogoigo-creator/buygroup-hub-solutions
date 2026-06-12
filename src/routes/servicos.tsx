import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { TrendingDown, Users, GraduationCap, FileSearch, Handshake, BarChart3, Check, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de compras estratégicas — Buy Group" },
      { name: "description", content: "Projetos completos de compras estratégicas, da análise à negociação, com foco em economia, margem e governança financeira." },
      { property: "og:title", content: "Serviços Buy Group" },
      { property: "og:description", content: "Atuação da análise à negociação em contratos, fornecedores e categorias estratégicas." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const services = [
  {
    icon: TrendingDown,
    title: "Programa de Otimização de Custos",
    body: "Projeto estruturado para identificar, negociar e validar economia sobre o volume de compras analisado, com remuneração vinculada ao resultado.",
    bullets: ["Mapeamento de oportunidades", "Renegociação conduzida por especialistas", "Estratégia de compra competitiva", "Relatórios para decisão executiva"],
  },
  {
    icon: Users,
    title: "Gestão de Compras",
    body: "Apoiamos parte ou toda a operação de compras com processos claros, indicadores de desempenho e governança institucional.",
    bullets: ["Compras táticas e indiretas", "Fluxos de compra e aprovação", "SLA e indicadores de desempenho", "Equipe dedicada e experiente"],
  },
  {
    icon: GraduationCap,
    title: "Educação Executiva",
    body: "Programas sob medida para lideranças e equipes de compras de grandes empresas, com aplicação prática e confidencialidade.",
    bullets: ["Estratégia de compra avançada", "Negociação com simulações reais", "Análise e indicadores de compras", "Governança e conformidade"],
  },
  {
    icon: FileSearch,
    title: "Mapeamento de Oportunidades",
    body: "Análise das despesas para organizar categorias, construir um baseline confiável e priorizar oportunidades de economia.",
    bullets: ["Taxonomia UNSPSC adaptada", "Painéis executivos interativos", "Identificação de oportunidades por categoria"],
  },
  {
    icon: Handshake,
    title: "Risco e Governança de Fornecedores",
    body: "Homologação, segmentação, avaliação e desenvolvimento de fornecedores críticos sob a ótica de risco e continuidade operacional.",
    bullets: ["Critérios ESG e conformidade", "Gestão estruturada de fornecedores", "Avaliação de desempenho documentada"],
  },
  {
    icon: BarChart3,
    title: "Diagnóstico da Área de Compras",
    body: "Avaliação da área frente a referências de mercado, com plano priorizado e justificativa financeira para a decisão.",
    bullets: ["Pessoas, processos e tecnologia", "Plano de evolução de 12 a 24 meses", "Oportunidades de curto prazo"],
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="CUT4MORE™ FRAMEWORK"
        title={<>Engajamentos end-to-end para a função de <span className="text-green">compras enterprise</span>.</>}
        description="Da auditoria forense do primeiro real ao saving validado por third-party — uma metodologia proprietária, quatro fases, um único KPI: resultado capturado."
        identity={{
          kind: "lockup",
          slogan: { primary: "Mais que comprar. É comprar", accent: "bem." },
        }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-border/80 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-green/40 hover:shadow-[0_22px_50px_-16px_oklch(0.21_0.06_264_/_0.12),0_4px_16px_-8px_oklch(0.75_0.13_86_/_0.08)] overflow-hidden"
            >
              {/* Decorative hover glow */}
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-green/5 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-green/10 bg-gradient-to-br from-green/20 to-green/5 text-navy transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.4)]">
                <s.icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              <h2 className="mt-8 font-serif text-2xl text-navy transition-colors duration-300 group-hover:text-navy-soft flex items-center justify-between gap-2">
                <span>{s.title}</span>
                <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-green shrink-0" />
              </h2>
              
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground/90 flex-grow">{s.body}</p>
              
              <ul className="mt-8 space-y-3 border-t border-border/50 pt-6 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-navy/85 transition-transform duration-300 hover:translate-x-1">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[13px] leading-snug text-navy/80">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy p-10 text-white md:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-green">Executive briefing · CFO-level · 20min</p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                Como iniciamos um engajamento.
              </h3>
              <p className="mt-3 max-w-xl text-white/75">
                Briefing sob NDA. Entrega de estimativa preliminar de saving em
                até 5 dias úteis. Currently accepting 3 new engagements this quarter.
              </p>
              <p className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
                <ShieldCheck className="h-3 w-3 text-green" />
                Full guarantee · Investment-grade results or full refund
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
            >
              Agendar briefing <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
