import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Layers,
  LineChart,
  Lock,
  MessageSquare,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { OutrosServicos } from "@/components/site/OutrosServicos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/revisao-pre-fechamento")({
  head: () => ({
    meta: [
      { title: "Revisão Pré-Fechamento de Propostas | Buy Group" },
      {
        name: "description",
        content:
          "Revisão independente de propostas comerciais já negociadas pelo seu time. A Buy Group conduz a rodada final e captura o saving residual. Remuneração de 50% sobre a economia gerada. Retorno em 48h.",
      },
      { property: "og:title", content: "Revisão Pré-Fechamento | Buy Group" },
      {
        property: "og:description",
        content:
          "Validação independente pré-fechamento. A Buy Group negocia e extrai o saving residual de propostas já negociadas, sob NDA. Remuneração de 50% sobre a economia gerada.",
      },
      { property: "og:url", content: "/revisao-pre-fechamento" },
    ],
    links: [{ rel: "canonical", href: "/revisao-pre-fechamento" }],
  }),
  component: SecondOpinionPage,
});

const steps: { n: string; title: string; time: string; body: string }[] = [
  {
    n: "01",
    title: "Envio da proposta",
    time: "Até 24h",
    body: "Seu time conduz a negociação normalmente e envia a proposta final para revisão antes de comunicar decisão ao fornecedor, sob NDA.",
  },
  {
    n: "02",
    title: "Análise de mercado",
    time: "Até 24h",
    body: "Avaliamos a proposta contra referências de mercado, composição de custo do fornecedor, margens praticadas na categoria e histórico de negociações similares.",
  },
  {
    n: "03",
    title: "Recomendação tática",
    time: "Entrega em até 48h",
    body: "Devolvemos um parecer com: o saving residual identificado, as táticas recomendadas para extração, os argumentos de negociação e o piso estimado que o fornecedor pode aceitar.",
  },
  {
    n: "04",
    title: "Negociação pela Buy Group",
    time: "Conduzida por nós",
    body: "A Buy Group assume a rodada final de negociação direta com o fornecedor para extrair o saving residual identificado. O delta capturado acima do preço já negociado pelo seu time é dividido: 50% fica com a empresa, 50% é a remuneração da Buy Group.",
  },
];

const included: { icon: ComponentType<{ className?: string }>; title: string }[] = [
  { icon: Layers, title: "Análise de composição de custo do fornecedor" },
  { icon: LineChart, title: "Benchmarking da proposta contra referências de mercado" },
  { icon: ScanSearch, title: "Identificação de saving residual por item ou categoria" },
  { icon: Target, title: "Recomendação de táticas e argumentos de negociação" },
  { icon: Gauge, title: "Estimativa do piso de aceitação do fornecedor" },
  { icon: ClipboardCheck, title: "Parecer escrito entregue em até 48h" },
  { icon: MessageSquare, title: "Condução da rodada final de negociação pela Buy Group" },
  { icon: BadgeCheck, title: "Registro do delta capturado para cálculo da divisão 50/50" },
];

const audiences = [
  "Empresas com time interno de compras ativo que conduz negociações próprias",
  "Propostas acima de R$ 50.000 onde o saving residual justifica a revisão",
  "Categorias estratégicas com contratos recorrentes ou de alto volume",
  "Gestores que precisam de validação independente antes de comprometer orçamento",
  "Empresas que querem fortalecer o time interno sem substituí-lo",
  "Diretores que precisam justificar a decisão de compra para comitê ou board",
];

const commercial: { icon: ComponentType<{ className?: string }>; title: string; body: string }[] = [
  {
    icon: CircleDollarSign,
    title: "50% da economia gerada",
    body: "Sem taxa fixa, sem upfront, sem mensalidade. A remuneração é 50% sobre o saving adicional capturado pela negociação conduzida pela Buy Group. Sem economia, sem custo para você.",
  },
  {
    icon: Sparkles,
    title: "Saving mínimo para acionamento",
    body: "Indicado para propostas em que o saving potencial estimado supera R$ 50.000. Abaixo desse valor, a relação custo-benefício da revisão não se justifica.",
  },
  {
    icon: Lock,
    title: "Confidencialidade total",
    body: "A revisão e a negociação acontecem sob NDA. A Buy Group conduz a rodada final em alinhamento com seu time, sem expor decisões internas.",
  },
];

const reasons: { icon: ComponentType<{ className?: string }>; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Seu time fez 80% do trabalho",
    body: "A negociação inicial já desgastou o fornecedor e estabeleceu âncoras. Entramos para extrair o residual com menor resistência.",
  },
  {
    icon: ScanSearch,
    title: "Conhecemos a margem do outro lado",
    body: "Nossa base de referências de mercado por categoria permite identificar onde o fornecedor ainda tem espaço que não vai oferecer espontaneamente.",
  },
  {
    icon: ShieldCheck,
    title: "Sem exposição política interna",
    body: "Seu diretor de compras não é questionado. A revisão independente protege a decisão dele e agrega resultado ao trabalho que ele já fez.",
  },
];

function SecondOpinionPage() {
  return (
    <SiteLayout>
      <Breadcrumb currentLabel="Revisão Pré-Fechamento" />
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Validação independente · Pré-fechamento
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              Sua equipe negociou. Antes de fechar,{" "}
              <span className="text-white/55">deixe um especialista revisar.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
              Revisamos propostas comerciais já negociadas pelo seu time e extraímos o saving
              residual antes do comprometimento do orçamento. Sem substituir sua equipe — somando
              inteligência de mercado no momento crítico.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 font-semibold">
                <Link to="/contato" search={{ interesse: "second-opinion" }}>
                  Solicitar revisão de proposta <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/25 bg-transparent px-7 text-white shadow-none hover:bg-white/10 hover:text-white"
              >
                <a href="#como-funciona">
                  Como funciona <ArrowDown />
                </a>
              </Button>
            </div>
            <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.17em] text-white/50">
              <ShieldCheck className="h-3.5 w-3.5 text-green" /> Sob NDA · Retorno em 48h · 50% da
              economia gerada · Negociação pela Buy Group
            </p>
          </div>
        </div>
      </section>

      {/* O QUE ESSE SERVIÇO RESOLVE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Contexto</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              O que esse serviço resolve
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Equipes internas de compras negociam bem dentro do referencial que conhecem. O problema
              é que o fornecedor sempre sabe mais sobre sua própria margem do que o comprador. O
              resultado é um acordo que parece bom — mas deixa saving na mesa.
            </p>
            <p className="mt-6 border-l-2 border-green pl-6 font-serif text-2xl leading-snug text-navy md:text-3xl">
              A Revisão Pré-Fechamento coloca um especialista sênior entre a proposta negociada e
              a assinatura do contrato. Não para refazer o trabalho do seu time — para extrair o que
              ainda é possível capturar.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-24 border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Fluxo</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Como funciona
            </h2>
            <p className="mt-6 text-muted-foreground">
              Da chegada da proposta ao parecer entregue: 48 horas para devolver inteligência tática
              antes da decisão final.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <article
                key={s.n}
                className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-green">{s.n}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-navy/70">
                    {s.time}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Escopo da revisão</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            O que está incluído na revisão
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

      {/* PARA QUEM É INDICADO */}
      <section className="border-y border-border bg-secondary/35">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <Eyebrow>Perfil indicado</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Para quem é indicado
            </h2>
            <p className="mt-6 text-muted-foreground">
              Funciona melhor quando há time interno ativo, propostas relevantes em volume e
              necessidade de validação antes do comprometimento do orçamento.
            </p>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {audiences.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 border-b border-border pb-3 text-sm text-navy"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* O QUE NÃO É */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-navy/15 bg-navy/[0.03] p-9 md:p-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Posicionamento</Eyebrow>
              <h2 className="mt-4 text-balance font-serif text-3xl text-navy md:text-4xl">
                O que esse serviço{" "}
                <span className="text-green">não</span> é
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-8">
              <p className="text-lg leading-relaxed text-navy">
                Não substituímos sua equipe de compras. Não refazemos a negociação do zero. Não
                atuamos como intermediários entre você e o fornecedor sem sua autorização.
              </p>
              <p className="border-l-2 border-green pl-6 font-serif text-xl leading-snug text-navy md:text-2xl">
                A Revisão Pré-Fechamento é uma camada de inteligência independente — seu time
                continua no controle da relação com o fornecedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODELO COMERCIAL */}
      <section className="border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Estrutura comercial</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Modelo comercial
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commercial.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-8">
                <item.icon className="h-6 w-6 text-green" />
                <h3 className="mt-6 font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-sm text-muted-foreground">
            <span className="font-semibold uppercase tracking-[0.18em] text-navy/60">Nota: </span>
            O modelo pode ser estruturado como pacote mensal para empresas com volume contínuo de
            propostas a revisar. Consulte.
          </p>
        </div>
      </section>

      {/* POR QUE FUNCIONA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Por que funciona</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Três razões pelas quais a Revisão Pré-Fechamento captura saving residual
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green/10 bg-gradient-to-br from-green/20 to-green/5 text-navy">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-7 font-serif text-2xl text-navy">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ESTUDO DE CASO COMPACTO */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.28em] text-green">Caso compacto</p>
              <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl">
                Saving residual extraído após revisão independente
              </h2>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
                <Lock className="h-3 w-3 text-green" /> Confidencial · Setor: Infraestrutura
              </span>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-9 md:p-12">
                <p className="text-lg leading-relaxed text-white/80">
                  Proposta de serviços de facilities negociada pelo time interno por{" "}
                  <span className="text-white">R$ 2,1MM</span>. Parecer de revisão identificou{" "}
                  <span className="text-green">saving residual de R$ 280k</span> em itens de mão de
                  obra e margem de gestão. Rodada final conduzida pelo próprio time do cliente.
                </p>
                <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Negociado</p>
                    <p className="mt-2 font-serif text-3xl text-white">R$ 2,10MM</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Fechado</p>
                    <p className="mt-2 font-serif text-3xl text-white">R$ 1,82MM</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-green">
                      Saving capturado
                    </p>
                    <p className="mt-2 font-serif text-3xl text-green">R$ 280k</p>
                  </div>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/50">
                  Remuneração de 50% sobre os R$ 280k capturados — negociação conduzida pela Buy Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OutrosServicos currentSlug="revisao-pre-fechamento" />

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/45 p-9 md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-navy/55">
                Tem uma proposta na mesa?
              </p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl text-navy md:text-5xl">
                Tem uma proposta prestes a ser fechada?
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Envie para revisão. Retorno em até 48 horas. A Buy Group conduz a negociação final
                e a remuneração é de 50% sobre a economia gerada — sem taxa fixa.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/contato" search={{ interesse: "second-opinion" }}>
                  Solicitar revisão agora <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-navy/20 bg-transparent px-7 text-navy hover:bg-navy/5"
              >
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4" /> Falar pelo WhatsApp
                </a>
              </Button>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <FileSearch className="h-3.5 w-3.5 text-green" /> NDA assinado antes do recebimento
                de qualquer documento
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
