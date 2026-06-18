import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Search,
  Compass,
  Handshake,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Scale,
  Rocket,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SOCIAL_META, SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/metodologia")({
  head: () => {
    const title = "Metodologia CUT4MORE™ | Buy Group";
    const description =
      "CUT4MORE™ é a metodologia proprietária da Buy Group para captura de savings em compras: 4 fases auditáveis, do baseline ao saving homologado.";
    const url = `${SITE_URL}/metodologia`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Metodologia CUT4MORE™ | Buy Group" },
        {
          property: "og:description",
          content:
            "As 4 fases da metodologia proprietária CUT4MORE™: mapeamento, estratégia, negociação e validação financeira dos savings.",
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
            "@type": "AboutPage",
            url,
            name: title,
            description,
            isPartOf: { "@id": `${SITE_URL}/#organization` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Metodologia", path: "/metodologia" },
            ]),
          ),
        },
      ],
    };
  },
  component: MetodologiaPage,
});

const frameworkDetail = [
  {
    n: "01",
    icon: Search,
    t: "Mapeamento de Oportunidades",
    d: "Diagnóstico estruturado de despesas, contratos e fornecedores. Construímos um baseline financeiro auditável e priorizamos as categorias com maior potencial de captura no curto e médio prazo.",
    activities: [
      "Análise de spend dos últimos 12 meses",
      "Revisão de contratos vigentes e cláusulas críticas",
      "Entrevistas com stakeholders e áreas usuárias",
      "Benchmarking de preços e condições de mercado",
      "Matriz de priorização por impacto x esforço",
    ],
    metrics: [
      { v: "100%", l: "do spend endereçável mapeado" },
      { v: "5–12", l: "categorias priorizadas" },
      { v: "≤ 3 sem.", l: "para baseline aprovado" },
    ],
  },
  {
    n: "02",
    icon: Compass,
    t: "Estratégia de Compra",
    d: "Decomposição da estrutura de custos por categoria e desenho de estratégia de fornecimento (competitiva, de parceria ou híbrida), alinhada ao risco operacional e ao apetite de margem do cliente.",
    activities: [
      "Should-cost analysis por categoria",
      "Mapeamento de fornecedores alternativos qualificados",
      "Definição de lotes e modelagem de cenários",
      "Estruturação de RFI / RFP",
      "Validação técnica com áreas usuárias",
    ],
    metrics: [
      { v: "3–8", l: "fornecedores qualificados por categoria" },
      { v: "2–4", l: "cenários de negociação por contrato" },
      { v: "30–50%", l: "de redução no ciclo de sourcing" },
    ],
  },
  {
    n: "03",
    icon: Handshake,
    t: "Condução da Negociação",
    d: "Negociação direta com fornecedores conduzida por especialistas seniores, preservando SLA, qualidade e continuidade. Atuamos como extensão da área de compras, sob NDA e sob autoridade definida com o cliente.",
    activities: [
      "Rodadas de negociação estruturadas",
      "Leilões reversos quando aplicável",
      "Contraproposta técnica e comercial",
      "Redação de adendos e instrumentos contratuais",
      "Governança de aprovação interna",
    ],
    metrics: [
      { v: "8%–22%", l: "de saving médio por categoria" },
      { v: "90%", l: "de fornecedores estratégicos preservados" },
      { v: "< 60 dias", l: "para renegociação concluída" },
    ],
  },
  {
    n: "04",
    icon: CheckCircle2,
    t: "Validação dos Savings",
    d: "Homologação financeira dos resultados frente ao baseline aprovado, com rastreabilidade contábil e validação pelo controller e auditoria do cliente. A remuneração da Buy Group é vinculada ao saving validado.",
    activities: [
      "Reconciliação de notas fiscais vs. preços novos",
      "Dashboard de captura mensal",
      "Relatório executivo para CFO e comitê",
      "Validação por controller e auditoria",
      "Ajustes de carve-out e tratamento de exceções",
    ],
    metrics: [
      { v: "100%", l: "dos savings com lastro documental" },
      { v: "8,7x", l: "ROI médio dos projetos" },
      { v: "< 90 dias", l: "de payback" },
    ],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    t: "Remuneração vinculada ao saving validado",
    d: "Sem captura homologada, sem remuneração. O risco é compartilhado e o incentivo, alinhado ao CFO.",
  },
  {
    icon: Lock,
    t: "Confidencialidade institucional",
    d: "O trabalho começa sob NDA, com tratamento reservado das informações comerciais e financeiras.",
  },
  {
    icon: Scale,
    t: "Independência estrutural",
    d: "Atuação sem vínculos comerciais com fornecedores. Recomendações alinhadas exclusivamente ao cliente.",
  },
];

function MetodologiaPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Metodologia proprietária CUT4MORE™"
        title={
          <>
            Quatro fases auditáveis.{" "}
            <span className="text-green">Do baseline ao saving homologado.</span>
          </>
        }
        description="CUT4MORE™ é o método pelo qual a Buy Group estrutura projetos de redução de custos em compras: análise, estratégia, negociação e validação financeira, com rastreabilidade contábil e remuneração vinculada ao resultado."
        identity={{ kind: "mark" }}
        cta={
          <>
            <Link
              to="/contato" hash="form"
              className="group inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
            >
              Aplicar a metodologia ao meu cenário
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
            >
              Ver portfólio de serviços
            </Link>
          </>
        }
      />

      {/* MINI ÍNDICE DAS FASES */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-10 lg:pt-16">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {frameworkDetail.map((step, idx) => (
            <li
              key={step.n}
              className="group relative flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-green/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green/15 bg-gradient-to-br from-green/20 to-green/5 text-navy">
                <step.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-tabular font-serif text-xs text-green/90">{step.n}</span>
                <p className="mt-0.5 truncate font-serif text-sm leading-snug text-navy">
                  {step.t}
                </p>
              </div>
              {idx < frameworkDetail.length - 1 && (
                <ArrowUpRight className="hidden h-3.5 w-3.5 shrink-0 text-green/50 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* DETALHE POR FASE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
            Detalhe por fase
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            O que acontece em cada fase{" "}
            <span className="text-green">e o que esperar em métricas.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-muted-foreground">
            Cada fase tem entregáveis, atividades-chave e indicadores próprios, tornando o
            processo auditável de ponta a ponta, do baseline ao saving homologado.
          </p>
        </div>

        <div className="mt-14 space-y-6 lg:mt-16 lg:space-y-8">
          {frameworkDetail.map((phase) => (
            <article
              key={phase.n}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-green/40 hover:shadow-[0_22px_50px_-20px_rgba(15,23,42,0.18)] lg:p-12"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-green/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <header className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green/20 bg-gradient-to-br from-green/20 to-green/5 text-navy shadow-sm">
                      <phase.icon className="h-6 w-6" />
                    </div>
                    <span className="font-tabular font-serif text-4xl text-green/90">
                      {phase.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-navy md:text-3xl">
                    {phase.t}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {phase.d}
                  </p>
                </header>

                <div className="lg:col-span-4">
                  <p className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-navy/55">
                    Atividades-chave
                  </p>
                  <ul className="mt-5 space-y-3">
                    {phase.activities.map((act) => (
                      <li
                        key={act}
                        className="flex items-start gap-3 text-sm leading-relaxed text-navy/80"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <p className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-navy/55">
                    Métricas esperadas
                  </p>
                  <dl className="mt-5 grid gap-4">
                    {phase.metrics.map((m) => (
                      <div
                        key={m.l}
                        className="rounded-2xl border border-border bg-secondary/40 p-5"
                      >
                        <dt className="font-tabular font-serif text-3xl text-navy">{m.v}</dt>
                        <dd className="mt-1.5 text-xs leading-snug text-muted-foreground">
                          {m.l}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground lg:mt-12">
          Faixas de métricas baseadas no histórico agregado de projetos da Buy Group. Resultados
          individuais variam conforme categoria, maturidade da função de compras e escopo
          contratado.
        </p>
      </section>

      {/* PILARES INSTITUCIONAIS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
              Pilares institucionais
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Princípios que sustentam o método.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.t}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green/15 bg-gradient-to-br from-green/20 to-green/5 text-navy">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA EXECUTIVO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green/25 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-green">Briefing executivo</p>
              <h2 className="mt-4 max-w-2xl text-balance font-serif text-3xl md:text-4xl">
                Como a CUT4MORE™ se aplica ao seu cenário?
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Em 20 minutos, sob NDA, avaliamos potencial de saving, riscos e o desenho de
                projeto recomendado para sua empresa.
              </p>
            </div>
            <Link
              to="/contato" hash="form"
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
