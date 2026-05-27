import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos in company — Capacitação em procurement | Buy Group" },
      { name: "description", content: "Programas in company de negociação, strategic sourcing, gestão de contratos e analytics para áreas de compras." },
      { property: "og:title", content: "Cursos in company Buy Group" },
      { property: "og:description", content: "Forme compradores que entregam saving." },
    ],
  }),
  component: CursosPage,
});

const courses = [
  {
    code: "N-01",
    title: "Negociação aplicada a compras",
    duration: "16h",
    level: "Comprador / Sr.",
    summary: "Frameworks de negociação adaptados ao dia a dia de procurement: BATNA, ZOPA, planos de concessão e gestão de objeções.",
    topics: ["Preparação estruturada", "Negociação distributiva e integrativa", "Negociação com fornecedor único", "Role-plays gravados com feedback"],
  },
  {
    code: "S-02",
    title: "Strategic sourcing por categoria",
    duration: "24h",
    level: "Comprador / Coord.",
    summary: "Metodologia de 7 passos para construir estratégias de categoria que entregam saving sustentável.",
    topics: ["Mapa de mercado e supply", "Modelos de custo (should-cost)", "Estratégia por matriz de Kraljic", "RFI/RFP de alto impacto"],
  },
  {
    code: "C-03",
    title: "Gestão de contratos e fornecedores",
    duration: "12h",
    level: "Comprador / Jurídico",
    summary: "Como redigir, monitorar e revisar contratos que protegem margem e mitigam riscos operacionais.",
    topics: ["Cláusulas críticas", "SLA, reajuste e penalidades", "SRM e avaliação periódica", "Encerramento e renovação"],
  },
  {
    code: "A-04",
    title: "Procurement analytics e KPIs",
    duration: "12h",
    level: "Analista / Coord.",
    summary: "Indicadores que medem o que importa: saving, compliance, lead time, qualidade de fornecedor e produtividade.",
    topics: ["Spend cube e classificação", "Painéis em Power BI", "Cálculo de saving (TCO)", "Storytelling com dados"],
  },
  {
    code: "L-05",
    title: "Liderança em procurement",
    duration: "16h",
    level: "Coord. / Gerente",
    summary: "Para quem precisa estruturar times, governança e influência junto às áreas demandantes.",
    topics: ["Operating model de compras", "Stakeholder management", "OKRs e gestão de performance", "Transformação digital"],
  },
];

const includes = [
  "Conteúdo customizado para a realidade da sua empresa",
  "Cases reais do seu setor e do seu spend",
  "Material didático impresso e digital",
  "Certificado individual de participação",
  "Sessão de follow-up 30 dias após a turma",
];

function CursosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cursos in company"
        title={<>Forme compradores que entregam <span className="italic">saving</span>.</>}
        description="Programas de capacitação 100% customizados, conduzidos na sua empresa, com instrutores que operam projetos de procurement todos os dias."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {courses.map((c) => (
              <article key={c.code} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/60 pb-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl text-primary">{c.code}</span>
                    <h2 className="font-serif text-2xl md:text-3xl">{c.title}</h2>
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{c.duration}</span>
                    <span aria-hidden>·</span>
                    <span>{c.level}</span>
                  </div>
                </div>
                <p className="mt-5 text-pretty text-muted-foreground">{c.summary}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {c.topics.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-charcoal-soft p-8">
              <h3 className="font-serif text-2xl">O que está incluído</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {includes.map((i) => (
                  <li key={i} className="flex gap-2 text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/10 p-8">
              <p className="font-serif text-2xl">Quer uma proposta?</p>
              <p className="mt-2 text-sm text-foreground/90">
                Em até 3 dias úteis enviamos ementa, agenda e investimento para a sua turma.
              </p>
              <Link
                to="/contato"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Solicitar proposta
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
