import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Handshake,
  HardHat,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { OutrosServicos } from "@/components/site/OutrosServicos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/bpo-de-compras")({
  head: () => ({
    meta: [
      { title: "BPO de Compras para empresas | Buy Group" },
      {
        name: "description",
        content:
          "BPO de Compras com governança, SLA, inteligência de mercado e foco em savings homologados para empresas de médio e grande porte.",
      },
      { property: "og:title", content: "BPO de Compras com foco em performance | Buy Group" },
      {
        property: "og:description",
        content: "Uma célula externa de compras orientada a governança, savings e margem capturada.",
      },
      { property: "og:url", content: "https://buygroup-hub-solutions.lovable.app/bpo-de-compras" },
    ],
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/bpo-de-compras" }],
  }),
  component: BpoDeComprasPage,
});

const scenarios = [
  "Time interno sobrecarregado",
  "Compras descentralizadas",
  "Falta de cotação estruturada",
  "Contratos vencidos ou pouco renegociados",
  "Pouca visibilidade de fornecedores alternativos",
  "Demandas spot sem controle",
  "Projetos CAPEX sem apoio especializado",
  "Necessidade de reduzir custos sem contratar mais pessoas",
];

const operations = [
  { icon: FileSearch, title: "Cotações e equalização de propostas", body: "Condução de RFQs, comparação comercial, análise técnica e organização das propostas para decisão." },
  { icon: Handshake, title: "Negociação com fornecedores", body: "Atuação direta na negociação de preço, prazo, escopo, SLA, reajustes e condições comerciais." },
  { icon: Search, title: "Desenvolvimento de fornecedores alternativos", body: "Mapeamento de mercado, identificação de novos players e ampliação da competitividade." },
  { icon: RefreshCw, title: "Compras táticas e indiretas", body: "Apoio em demandas recorrentes de materiais, serviços, facilities, tecnologia, logística e contratos indiretos." },
  { icon: ClipboardCheck, title: "Contratos recorrentes", body: "Renegociação e acompanhamento de contratos com impacto financeiro contínuo." },
  { icon: HardHat, title: "Compras para obras e CAPEX", body: "Apoio em concorrências, equalização, negociação e governança de compras para projetos de alto valor." },
  { icon: BarChart3, title: "Relatórios executivos", body: "Indicadores de demandas, savings, SLA, fornecedores, riscos e oportunidades." },
  { icon: ShieldCheck, title: "Governança de fornecedores", body: "Apoio em homologação, avaliação de desempenho, risco, SLA e continuidade operacional." },
];

const engagementModels = [
  { n: "01", title: "BPO Operacional de Compras", body: "Para empresas que precisam terceirizar rotinas de cotação, negociação, follow-up, equalização de propostas e suporte às áreas internas." },
  { n: "02", title: "Squad de Compras Estratégicas", body: "Para categorias críticas, contratos relevantes, fornecedores estratégicos e projetos com alto potencial de economia." },
  { n: "03", title: "Compras por Projeto / CAPEX", body: "Para obras, expansões, reformas, equipamentos, facilities, tecnologia e demandas de alto valor agregado." },
];

const commercialModels = [
  { icon: Gauge, title: "Fee mensal fixo", body: "Indicado para operação contínua de BPO, com escopo, SLA e volume de demandas definidos." },
  { icon: CircleDollarSign, title: "Fee + success fee", body: "Combina uma remuneração mensal reduzida com participação sobre savings homologados." },
  { icon: Building2, title: "Projeto fechado", body: "Indicado para demandas específicas, categorias prioritárias, obras, concorrências estratégicas ou renegociações pontuais." },
];

const audiences = [
  "Empresas de médio e grande porte",
  "Empresas com volume relevante de compras indiretas",
  "Operações com equipe de compras enxuta",
  "Grupos com múltiplas unidades ou filiais",
  "Empresas com contratos recorrentes relevantes",
  "Companhias em expansão, obras ou projetos CAPEX",
  "Organizações pressionadas por margem, caixa e eficiência",
];

const comparison = [
  ["Processa demandas", "Analisa oportunidade"],
  ["Executa cotações", "Equaliza propostas"],
  ["Atua com foco operacional", "Negocia com inteligência de mercado"],
  ["Mede volume de pedidos", "Mede SLA, saving e impacto"],
  ["Pouca conexão com resultado financeiro", "Atua com governança e foco em margem"],
];

function BpoDeComprasPage() {
  return (
    <SiteLayout>
      <Breadcrumb currentLabel="BPO de Compras" currentSlug="bpo-de-compras" />
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Outsourcing estratégico · Performance em compras
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              BPO de Compras para empresas que precisam comprar melhor{" "}
              <span className="text-white/55">sem aumentar estrutura.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
              A Buy Group opera processos de compras de forma terceirizada ou híbrida, apoiando
              empresas que precisam de velocidade, controle, redução de custos e governança em
              categorias estratégicas, contratos recorrentes e demandas de alto volume.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 font-semibold">
                <Link to="/contato" search={{ interesse: "bpo" }}>
                  Agendar conversa sobre BPO de Compras <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/25 bg-transparent px-7 text-white shadow-none hover:bg-white/10 hover:text-white"
              >
                <a href="#modelos-de-atuacao">
                  Conhecer modelos de atuação <ArrowDown />
                </a>
              </Button>
            </div>
            <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.17em] text-white/50">
              <ShieldCheck className="h-3.5 w-3.5 text-green" /> Operação sob NDA · SLA definido ·
              Relatórios executivos · Savings homologados
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="Sumário da página" className="sticky top-16 z-30 border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-10">
          <ul className="flex min-w-max items-center gap-1 py-3 text-xs font-medium text-muted-foreground sm:text-sm">
            {[
              ["quando-faz-sentido", "Quando faz sentido"],
              ["o-que-operamos", "O que operamos"],
              ["modelos-de-atuacao", "Modelos de atuação"],
              ["modelos-comerciais", "Modelos comerciais"],
              ["para-quem-e-indicado", "Para quem é indicado"],
              ["bpo-vs-buy-group", "BPO vs. Buy Group"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-secondary hover:text-navy"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="quando-faz-sentido" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Quando faz sentido</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Quando o BPO de Compras faz sentido
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Muitas empresas crescem em volume de compras, contratos e fornecedores, mas não
              conseguem expandir a equipe interna na mesma velocidade. O resultado é sobrecarga
              operacional, baixa concorrência, contratos sem renegociação ativa, fornecedores pouco
              monitorados e perda de oportunidades de economia.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {scenarios.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white p-6 text-sm text-navy">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="o-que-operamos" className="scroll-mt-32 border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Escopo operacional</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              O que podemos operar pelo cliente
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {operations.map((item) => (
              <article key={item.title} className="bg-white p-7 lg:p-8">
                <item.icon className="h-6 w-6 text-green" />
                <h3 className="mt-6 font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-green/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.28em] text-green">Performance financeira</p>
            <h2 className="mt-4 text-balance font-serif text-4xl md:text-5xl">
              BPO com mentalidade de performance
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Diferente de um outsourcing operacional tradicional, a Buy Group não atua apenas para
              processar pedidos. Cada demanda pode ser analisada sob a ótica de preço, baseline,
              risco fornecedor, oportunidade de saving, SLA e impacto financeiro.
            </p>
            <p className="mt-9 border-l-2 border-green pl-6 font-serif text-2xl leading-snug text-white md:text-3xl">
              O objetivo não é apenas executar compras. É transformar a operação de compras em uma
              frente ativa de geração de margem.
            </p>
          </div>
        </div>
      </section>

      <section id="modelos-de-atuacao" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Eyebrow>Arquitetura da operação</Eyebrow>
        <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">Modelos de atuação</h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((item) => (
            <article key={item.n} className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
              <span className="font-serif text-4xl text-green">{item.n}</span>
              <h3 className="mt-7 font-serif text-2xl text-navy">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modelos-comerciais" className="scroll-mt-32 border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Estrutura de contratação</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">Modelos comerciais flexíveis</h2>
            <p className="mt-6 text-muted-foreground">A contratação pode ser estruturada de acordo com o nível de complexidade, volume de demandas, potencial de economia e necessidade de dedicação da equipe.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commercialModels.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-8">
                <item.icon className="h-6 w-6 text-green" />
                <h3 className="mt-6 font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl border-l-2 border-green pl-6 font-serif text-2xl text-navy">O modelo recomendado pode combinar previsibilidade operacional com remuneração vinculada ao resultado financeiro validado.</p>
        </div>
      </section>

      <section id="para-quem-e-indicado" className="scroll-mt-32 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-6">
          <Eyebrow>Perfil de operação</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">Indicado para empresas que precisam de mais capacidade de compras sem aumentar complexidade interna</h2>
        </div>
        <ul className="space-y-3 lg:col-span-6">
          {audiences.map((item) => (
            <li key={item} className="flex items-center gap-3 border-b border-border pb-3 text-sm text-navy">
              <Check className="h-4 w-4 shrink-0 text-green" /> {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="bpo-vs-buy-group" className="scroll-mt-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <Eyebrow light>BPO tradicional vs. Buy Group</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl md:text-5xl">Uma operação conectada ao resultado financeiro</h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-2 bg-white/10 text-xs uppercase tracking-[0.22em] text-white/60 md:grid">
              <p className="p-5">BPO tradicional</p><p className="border-l border-white/10 p-5 text-green">BPO Buy Group</p>
            </div>
            {comparison.map(([traditional, buy]) => (
              <div key={traditional} className="grid border-t border-white/10 md:grid-cols-2">
                <div className="p-5 text-sm text-white/55"><span className="mb-2 block text-[10px] uppercase tracking-widest md:hidden">Tradicional</span>{traditional}</div>
                <div className="border-t border-white/10 p-5 text-sm font-medium text-white md:border-l md:border-t-0"><span className="mb-2 block text-[10px] uppercase tracking-widest text-green md:hidden">Buy Group</span>{buy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OutrosServicos currentSlug="bpo-de-compras" />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/45 p-9 md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-navy/55">Executive briefing</p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl text-navy md:text-5xl">Sua empresa precisa comprar melhor sem aumentar a estrutura interna?</h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">Agende uma conversa executiva para avaliar se o modelo de BPO de Compras da Buy Group faz sentido para o volume, maturidade e desafios da sua operação.</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/contato" search={{ interesse: "bpo" }}>Agendar conversa sobre BPO de Compras <ArrowUpRight /></Link>
              </Button>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Conversa sob NDA · Nível diretivo · Diagnóstico inicial</p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`text-xs uppercase tracking-[0.28em] ${light ? "text-green" : "text-navy/55"}`}>{children}</p>;
}