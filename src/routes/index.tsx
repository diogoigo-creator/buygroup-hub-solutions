import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Lock, Award, Sparkles, TrendingUp, Scale, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { FullLockup } from "@/components/site/hero-identities/FullLockup";
import heroImg from "@/assets/hero-boardroom.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Group — Consultoria estratégica em compras" },
      { name: "description", content: "Consultoria estratégica em compras para analisar contratos, fornecedores, categorias e projetos com impacto financeiro comprovável." },
      { property: "og:title", content: "Buy Group — Consultoria estratégica em compras" },
      { property: "og:description", content: "Análise de contratos, fornecedores, categorias e projetos estratégicos para redução de custos com governança." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const credibility = [
  { value: "R$ 2,1 bi+", label: "em spend enterprise analisado" },
  { value: "8.7x", label: "ROI médio por engajamento" },
  { value: "Baseline aprovado", label: "saving auditável homologado" },
  { value: "Senior-only", label: "delivery por sócios e seniores" },
];


const framework = [
  { n: "01", t: "Diagnóstico de compras", d: "Leitura estruturada de contratos, despesas, categorias e fornecedores para definir uma base confiável de análise." },
  { n: "02", t: "Priorização de oportunidades", d: "Classificação das iniciativas por potencial financeiro, risco operacional, complexidade e viabilidade de captura." },
  { n: "03", t: "Negociação e homologação", d: "Apoio à negociação com fornecedores, validação técnica e alinhamento com áreas usuárias e governança interna." },
  { n: "04", t: "Comprovação de impacto", d: "Documentação dos resultados capturados e acompanhamento executivo para sustentar a redução de custos no P&L." },
];

const moat = [
  { icon: ShieldCheck, t: "Governança financeira", d: "Baseline aprovado em conjunto com o CFO, validação de savings e documentação auditável para decisão no board." },
  { icon: Lock, t: "Confidencialidade absoluta", d: "NDA padrão antes de qualquer briefing. Sem acesso prévio a dados sensíveis. Cobertura de seguro corporativo em todos os engajamentos." },
  { icon: Award, t: "Senior-only delivery", d: "Engajamentos conduzidos por sócios e profissionais seniores com background em consultorias globais e indústria. Sem juniores na ponta." },
  { icon: Scale, t: "Independência estrutural", d: "Zero relação comercial com fornecedores. Alinhamento único com o P&L e a estratégia do cliente." },
];


function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate flex overflow-hidden bg-navy text-white lg:min-h-[88svh] lg:items-center">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-navy/45" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-green/10 blur-3xl" />


        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 border-l-2 border-green px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/75">
              <Sparkles className="h-3.5 w-3.5 text-green" />
              PROCUREMENT TRANSFORMATION · PERFORMANCE-BASED
            </div>

            <h1 className="mt-10 max-w-3xl text-balance font-serif font-medium leading-[1.05] tracking-[-0.02em] text-white text-3xl md:text-4xl lg:text-[2.85rem]">
              R$ <span className="text-green">2,1 bi+</span> em spend enterprise analisado.
              <span className="text-white/70"> Transformamos compras existentes em margem auditada, resiliência operacional e decisões defensáveis no board.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-base text-white/75 lg:text-lg">
              A Buy Group atua ao lado do CFO, CEO e time de procurement para
              identificar, negociar e homologar oportunidades reais em contratos,
              fornecedores e projetos estratégicos — com baseline aprovado,
              governança financeira e remuneração vinculada ao saving
              efetivamente capturado.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
              >
                Agendar executive briefing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="#framework"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:border-green/70 hover:text-green"
              >
                Ver framework
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed tracking-[0.08em] text-white/55 lg:text-[11px] lg:uppercase lg:tracking-[0.22em]">
              <Lock className="mt-0.5 h-3 w-3 shrink-0 text-green/80" />
              Briefing sob NDA · 20 minutos · sem acesso prévio a dados sensíveis · próximo passo apenas se houver potencial material de saving
            </p>
          </div>

          {/* Board-ready value case */}
          <aside className="lg:col-span-5 lg:pl-4">
            <div className="relative rounded-2xl border border-white/12 bg-navy/65 p-8 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] lg:p-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/40 to-transparent" />
              <p className="text-[10px] uppercase tracking-[0.36em] text-green/80">
                Board-ready value case
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-white lg:text-[1.6rem]">
                Como apresentamos o caso ao board.
              </h2>

              <dl className="mt-8 divide-y divide-white/10">
                {[
                  { k: "Spend analisado", v: "R$ 2,1 bi+" },
                  { k: "ROI médio", v: "8.7x por engajamento" },
                  { k: "Governança", v: "Baseline aprovado + saving auditável" },
                  { k: "Modelo", v: "No Savings, No Fee" },
                ].map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-white/55">{row.k}</dt>
                    <dd className="text-right font-serif text-base text-white lg:text-lg">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 border-t border-white/10 pt-5 text-[11px] leading-relaxed tracking-[0.12em] text-white/50">
                Briefing sob NDA · 20 minutos · sem acesso prévio a dados sensíveis
              </p>
            </div>
          </aside>
        </div>
      </section>


      {/* CREDIBILITY MATRIX */}
      <section className="border-y border-white/5 bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-white/10 lg:grid-cols-4">
          {credibility.map((m) => (
            <div key={m.label} className="bg-navy px-6 py-12 lg:px-10">
              <p className="font-serif text-4xl text-green lg:text-5xl">{m.value}</p>
              <p className="mt-3 text-sm leading-snug text-white/65">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Exemplo de atuação · Confidencial</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              R$ 47MM capturados em <span className="text-green">90 dias</span>.
            </h2>
            <p className="mt-6 text-pretty text-muted-foreground">
              Grupo industrial brasileiro com base relevante de contratos e fornecedores.
              O trabalho priorizou categorias críticas, negociação com governança e validação
              das economias junto às áreas responsáveis.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-green"
            >
              Solicitar exemplo completo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {[
                { k: "Saving capturado", v: "12.4%", s: "sobre spend endereçável" },
                { k: "Payback", v: "< 90d", s: "do primeiro contrato renegociado" },
                { k: "ROI do projeto", v: "11.2x", s: "vs. fee Buy Group" },
              ].map((c) => (
                <div key={c.k} className="bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.k}</p>
                  <p className="mt-4 font-serif text-4xl text-navy">{c.v}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.s}</p>
                </div>
              ))}
            </div>

            <figure className="mt-6 rounded-2xl border border-border bg-secondary/40 p-8">
              <blockquote className="font-serif text-2xl leading-snug text-navy">
                "Em 90 dias entregaram o que três consultorias tier-1 não conseguiram em
                dois anos. O modelo de risco compartilhado mudou a equação."
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                CFO · Grupo industrial · R$ 3.2Bi faturamento
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PROCUREMAX FRAMEWORK */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-green">Metodologia</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-white md:text-5xl">
              Metodologia proprietária. Quatro fases.
              <span className="text-white/55"> Um único foco: impacto financeiro comprovável.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-white/70">
              A Buy Group combina análise de contratos, leitura de fornecedores,
              entendimento das categorias e apoio à negociação para capturar redução
              de custos sem comprometer continuidade operacional.
            </p>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {framework.map((step) => (
              <li key={step.n} className="bg-navy p-8 lg:p-10">
                <span className="font-serif text-4xl text-green">{step.n}</span>
                <p className="mt-6 font-serif text-xl text-white">{step.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIFFERENTIATION MOAT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Por que Buy Group</p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Quatro razões pelas quais boards de companhias enterprise
            <span className="text-green"> nos escolhem</span> sobre Big Four.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {moat.map((d) => (
            <div
              key={d.t}
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_22px_50px_-16px_oklch(0.21_0.06_264_/_0.12)] lg:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-green/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-green/10 bg-gradient-to-br from-green/20 to-green/5 text-navy shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.4)]">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{d.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>

      </section>

      {/* CATEGORIAS DE SPEND — TEASER */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Redução de custos</p>
              <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
                Onde encontramos saving.
                <span className="text-green"> Quanto cada categoria devolve ao P&amp;L.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-pretty text-muted-foreground">
                Telecom, energia, logística, TI, facilities, travel, seguros e mais 40+ verticais.
                Veja as faixas de saving observadas em 200+ engajamentos enterprise.
              </p>
              <Link
                to="/reducao-de-custos"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Ver categorias e potencial de economia
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* TEAM CREDENTIALS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Quem conduz</p>
              <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
                Senior procurement.
                <span className="text-green"> Sem juniores.</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
              {[
                { icon: Building2, t: "15+ anos", d: "experiência média da equipe sênior em procurement enterprise" },
                { icon: TrendingUp, t: "200+", d: "engajamentos conduzidos em verticais críticas" },
                { icon: Award, t: "Tier-1", d: "background dos sócios em consultorias globais e indústria" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-white p-6">
                  <c.icon className="h-5 w-5 text-green" />
                  <p className="mt-5 font-serif text-2xl text-navy">{c.t}</p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-green">Diagnóstico executivo · Compras estratégicas</p>
              <h2 className="mt-4 text-balance font-serif text-4xl md:text-5xl">
                Uma conversa para mapear oportunidades reais de redução de custos.
                <span className="text-white/55"> Sob confidencialidade.</span>
              </h2>
              <p className="mt-5 max-w-lg text-white/75">
                Avaliamos contratos, fornecedores, categorias e projetos estratégicos
                para indicar onde há potencial de impacto financeiro com governança.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
              >
                Solicitar diagnóstico executivo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
                <ShieldCheck className="h-3 w-3 text-green" />
                Projetos sob confidencialidade · Remuneração vinculada a savings homologados
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
