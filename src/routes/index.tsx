import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Lock, Award, Sparkles, TrendingUp, Scale, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { FullLockup } from "@/components/site/hero-identities/FullLockup";
import heroImg from "@/assets/hero-boardroom.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Group — Procurement transformation for Fortune-class CFOs" },
      { name: "description", content: "The procurement transformation firm trusted by enterprise CFOs. Investment-grade savings, fully documented. No Savings, No Fee." },
      { property: "og:title", content: "Buy Group — Investment-grade procurement transformation" },
      { property: "og:description", content: "Documented enterprise savings with full risk reversal. Executive briefings by invitation." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const credibility = [
  { value: "R$ 1.4 bi+", label: "Em volume de compras analisado" },
  { value: "23", label: "Clientes entreprise atendidos" },
  { value: "8.7x", label: "ROI médio por projeto" },
  { value: "100%", label: "auditável · No Savings, No Fee" },
];


const framework = [
  { n: "01", t: "Spend Intelligence", d: "Analisamos 24 meses de despesas, contratos e fornecedores para construir um baseline confiável, organizar categorias de gasto e identificar quick wins negociáveis nos primeiros 30 dias." },
  { n: "02", t: "Strategic Sourcing", d: "Avaliamos composição de custos, custo total da contratação e alternativas de fornecimento para estruturar negociações competitivas e capturar savings com governança." },
  { n: "03", t: "Negotiation Lab", d: "Negociações conduzidas com foco em margem capturada, preservando SLA, qualidade, relacionamento com fornecedores e continuidade operacional." },
  { n: "04", t: "Value Assurance", d: "Acompanhamento mensal dos savings capturados, com reporting executivo e validação financeira conforme baseline aprovado." },
];

const moat = [
  { icon: ShieldCheck, t: "Garantia baseada em resultado", d: "Único modelo do mercado com garantia contratual de resultado. Sem savings auditados, sem fee sem exceções." },
  { icon: Lock, t: "Confidencialidade absoluta", d: "NDA padrão antes do primeiro briefing. Cobertura de seguro corporativo em todos os engajamentos." },
  { icon: Award, t: "Atuação direta de especialistas", d: "Cada projeto é liderado por profissionais com mais de 15 anos de experiência em compras, negociação e gestão de fornecedores em ambientes corporativos complexos." },
  { icon: Scale, t: "Independência estrutural", d: "A Buy Group atua sem vínculos comerciais com fornecedores, garantindo recomendações alinhadas às prioridades financeiras e operacionais do cliente." },
];


function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate flex overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:items-center">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/50 via-navy/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-green/10 blur-3xl" />


        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-12 lg:pt-10">
          <div className="lg:col-span-9">
            <div className="inline-flex items-center gap-3 border-l-2 border-green px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/75">
              <Sparkles className="h-3.5 w-3.5 text-green" />
              PERFORMANCE EM COMPRAS · IMPACTO NO RESULTADO
            </div>

            <div className="mt-10">
              <p className="font-serif font-medium leading-[0.95] tracking-[-0.03em] text-white text-6xl md:text-7xl lg:text-8xl">
                R$ <span className="text-green">1,4</span> bi
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/55">
                em volume de compras analisado
              </p>
            </div>

            <h1 className="mt-10 max-w-3xl text-balance font-serif font-medium leading-[1.05] tracking-[-0.02em] text-white text-3xl md:text-4xl lg:text-[2.65rem]">
              Compras estratégicas para transformar base contratada
              <span className="text-white/60"> em resultado financeiro.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base text-white/75 lg:text-lg">
              A Buy Group transforma spend existente em margem capturada:
              identificamos oportunidades, conduzimos negociações estratégicas e
              homologamos savings com governança financeira para decisões defensáveis no board.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar diagnóstico executivo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:border-green/70 hover:text-green"
              >
                cut4more™
              </Link>
            </div>

            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45">
              <Lock className="h-3 w-3" />
              ATENDIMENTO CONSULTIVO · SOB NDA · REMUNERAÇÃO VINCULADA A SAVINGS HOMOLOGADOS
            </p>

          </div>
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
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">ESTUDO DE CASO · CONFIDENCIAL</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              R$ 12MM capturados em <span className="text-green">90 dias</span>.
            </h2>
            <p className="mt-6 text-pretty text-muted-foreground">
              Grupo industrial brasileiro, faturamento R$ 3.2Bi. Spend anual
              de R$ 380MM. Resultado auditado pela KPMG, validado pelo comitê de auditoria
              do board.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-green"
            >
              Solicitar case completo (sob NDA) <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {[
                { k: "Saving capturado", v: "12.4%", s: "sobre spend anual" },
                { k: "Payback", v: "< 90d", s: "do primeiro contrato renegociado" },
                { k: "ROI do projeto", v: "9.3x", s: "vs. fee Buy Group" },
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
                "Em 90 dias, savings que permaneciam não capturados havia dois anos
                foram destravados com governança financeira, risco compartilhado e
                validação do resultado.."
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
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-green">CUT4MORE™ FRAMEWORK</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-white md:text-5xl">
              Metodologia proprietária. Quatro fases.
              <span className="text-white/55"> Um único KPI: saving auditado.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-white/70">
              Desenvolvida ao longo de anos de projetos enterprise. cut4more™ é o
              único framework de procurement com garantia contratual de resultado e
              auditoria em cada fase.
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
            Quatro razões pelas quais lideranças executivas <span className="text-green">nos escolhem</span> para negociações de alto impacto
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
                Veja as faixas de saving observadas.
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
                { icon: TrendingUp, t: "100+", d: "projetos conduzidos em verticais críticas" },
                { icon: Award, t: "Vivência executiva", d: "background dos sócios em projetos globais e indústria" },
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
              <p className="text-xs uppercase tracking-[0.32em] text-green">EXECUTIVE BRIEFING · NIVEL DIRETIVO · 20MIN</p>
              <h2 className="mt-4 text-balance font-serif text-4xl md:text-5xl">
                Uma conversa. Estimativa preliminar de saving.
                <span className="text-white/55"> Sob NDA.</span>
              </h2>
              <p className="mt-5 max-w-lg text-white/75">
                Assumimos um projeto estratégico por vez, garantindo dedicação direta, confidencialidade e foco total na captura de resultado.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
              >
                Agendar executive briefing
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
                <ShieldCheck className="h-3 w-3 text-green" />
                GARANTIA INTEGRAL · RESULTADOS AUDITAVEIS
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
