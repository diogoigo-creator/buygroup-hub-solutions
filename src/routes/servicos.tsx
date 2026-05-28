import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { TrendingDown, Users, GraduationCap, FileSearch, Handshake, BarChart3, Check, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — ProcureMax™ Framework | Buy Group" },
      { name: "description", content: "Engajamentos enterprise de procurement transformation: spend intelligence, strategic sourcing, BPO sênior e governança board-ready." },
      { property: "og:title", content: "Serviços Buy Group" },
      { property: "og:description", content: "ProcureMax™ Framework. Investment-grade savings." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    icon: TrendingDown,
    title: "Cost Optimization Program",
    body: "Programa estruturado de saving sobre o spend endereçável com remuneração 100% atrelada a resultado auditado por third-party.",
    bullets: ["Spend intelligence em 30 dias (90% do gasto mapeado)", "Renegociação executada por sêniores", "Strategic sourcing competitivo", "Reporting trimestral board-ready"],
  },
  {
    icon: Users,
    title: "Procurement BPO",
    body: "Operamos parte ou toda a função de compras com governança institucional, KPIs board-ready e SLA contratual.",
    bullets: ["BPO de compras táticas e indiretas", "Implantação de P2P e fluxo aprovativo", "SLA contratual com penalidades", "Time dedicado senior-only"],
  },
  {
    icon: GraduationCap,
    title: "Executive Education",
    body: "Programas in-company para C-level e lideranças de procurement de companhias enterprise. Confidencial.",
    bullets: ["Strategic sourcing avançado", "Negotiation lab com simulações reais", "Procurement analytics & KPIs", "Governança e compliance enterprise"],
  },
  {
    icon: FileSearch,
    title: "Spend Intelligence",
    body: "Classificação forense de 24 meses de gasto. Baseline oficial auditável. Quick wins identificados em 30 dias.",
    bullets: ["Taxonomia UNSPSC adaptada", "Painéis executivos interativos", "Identificação de oportunidades por categoria"],
  },
  {
    icon: Handshake,
    title: "Supplier Risk & Governance",
    body: "Homologação, segmentação, scoring e desenvolvimento de fornecedores críticos sob ótica de risco enterprise.",
    bullets: ["Critérios ESG e compliance", "Programas SRM estruturados", "Avaliação 360° auditável"],
  },
  {
    icon: BarChart3,
    title: "Procurement Maturity Assessment",
    body: "Assessment da função frente a benchmarks de mercado enterprise. Roadmap priorizado com business case.",
    bullets: ["Pessoas, processo e tecnologia", "Roadmap 12-24 meses", "Quick wins acionáveis"],
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ProcureMax™ Framework"
        title={<>Engajamentos end-to-end para a função de <span className="text-green">compras enterprise</span>.</>}
        description="Da auditoria forense do primeiro real ao saving validado por third-party — uma metodologia proprietária, quatro fases, um único KPI: resultado capturado."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group card-lift flex flex-col rounded-2xl border border-border bg-white p-8 hover:border-green/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-8 font-serif text-2xl text-navy">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-navy/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    {b}
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
                até 5 dias úteis. Currently accepting [3] new engagements this quarter.
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
