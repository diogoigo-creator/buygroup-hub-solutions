import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Quote, ArrowUpRight, ShieldCheck, Lock, Award, Scale, Building2, MapPin, Layers } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Buy Group — Compras estratégicas" },
      {
        name: "description",
        content:
          "Consultoria executiva de compras e negociação para grandes empresas, com foco em margem, governança e resultado validado.",
      },
      { property: "og:title", content: "Sobre a Buy Group" },
      {
        property: "og:description",
        content:
          "Compras como alavanca de margem, com abordagem independente e governança financeira.",
      },
      { property: "og:url", content: "https://buygroup-hub-solutions.lovable.app/sobre" },
      { property: "og:image", content: "https://buygroup-hub-solutions.lovable.app/og-buygroup.jpg" },
      { property: "twitter:image", content: "https://buygroup-hub-solutions.lovable.app/og-buygroup.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/sobre" }],
  }),
  component: SobrePage,
});

const principles = [
  {
    icon: ShieldCheck,
    t: "Resultado alinhado",
    d: "A remuneração é vinculada aos savings homologados conforme o baseline aprovado com o cliente.",
  },
  {
    icon: Award,
    t: "Condução por especialistas",
    d: "Os projetos são conduzidos por profissionais experientes em compras, negociação e gestão de fornecedores.",
  },
  {
    icon: Lock,
    t: "Confidencialidade institucional",
    d: "O trabalho começa sob NDA, com tratamento reservado das informações e comunicação executiva clara.",
  },
  {
    icon: Scale,
    t: "Abordagem independente",
    d: "Atuamos sem vínculos comerciais com fornecedores, alinhados às prioridades financeiras e operacionais do cliente.",
  },
];

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem somos"
        title={
          <>
            Compras e negociação como alavancas de{" "}
            <span className="text-green">margem e eficiência</span>.
          </>
        }
        description="A Buy Group apoia grandes empresas na identificação de oportunidades, condução de negociações e validação de resultados com governança financeira."
        identity={{ kind: "lockup", caption: "Consultoria em compras e negociação" }}
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
            Posicionamento
          </p>
          <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">Por que existimos.</h2>
          <div className="mt-6 space-y-5 text-pretty text-muted-foreground">
            <p>
              Em grandes empresas, decisões de compra afetam margem, risco e continuidade
              operacional. Contratos relevantes exigem análise consistente, estratégia clara e uma
              negociação bem conduzida.
            </p>
            <p>
              A Buy Group atua como extensão especializada da área de compras, com{" "}
              <span className="font-semibold text-navy">
                remuneração vinculada ao resultado validado
              </span>{" "}
              e critérios financeiros definidos antes do início do projeto.
            </p>
            <p>
              Esse modelo alinha nossos incentivos à margem do cliente: os savings são acompanhados
              e homologados conforme o baseline aprovado, com transparência sobre premissas, riscos
              e resultados.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
              <Quote className="h-6 w-6" />
            </div>
            <p className="mt-6 font-serif text-2xl leading-snug text-navy">
              "A condução estruturada permitiu capturar oportunidades que estavam represadas,
              preservando a operação e dando clareza ao resultado financeiro."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              CFO · Grupo industrial · R$ 3.2Bi
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
              Princípios de atuação
            </p>
            <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
              Quatro princípios que <span className="text-green">não negociamos</span>.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {principles.map((v) => (
              <div key={v.t} className="bg-white p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                  <v.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 font-serif text-2xl text-navy">{v.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
              Liderança
            </p>
            <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
              Quem conduz os <span className="text-green">engajamentos</span>.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)] md:col-span-1">
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-semibold tracking-wider text-navy">
                  DM
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy">Diogo Igor Silva Moraes</h3>
                  <p className="mt-1 text-sm font-medium text-green">Head de Supply Chain</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Atuação em compras e cadeia de suprimentos em projetos de alta complexidade,
                    com foco em margem, governança e resultado validado.
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-navy/55">
                    Aviação · Construção · Mineração · Hospitalar · Indústria · Agronegócio
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            <div className="flex items-center gap-4 bg-white p-7">
              <Building2 className="h-6 w-6 text-green" />
              <div>
                <p className="font-serif text-3xl text-navy">2013</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Ano de fundação</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-7">
              <MapPin className="h-6 w-6 text-green" />
              <div>
                <p className="font-serif text-3xl text-navy">Belo Horizonte · MG</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Sede</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-7">
              <Layers className="h-6 w-6 text-green" />
              <div>
                <p className="font-serif text-3xl text-navy">6 setores</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Setores atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-navy p-10 text-white md:p-14">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-green">
                Executive briefing · nível diretivo · 20min
              </p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                Uma conversa executiva para avaliar o potencial de economia.
              </h3>
              <p className="mt-3 max-w-xl text-white/75">
                Avaliamos o contexto, os riscos e os próximos passos. Sob NDA.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
            >
              Falar com especialista <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
