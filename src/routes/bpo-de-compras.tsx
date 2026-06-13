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
  Network,
  RefreshCw,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
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
      { property: "og:url", content: "/bpo-de-compras" },
    ],
    links: [{ rel: "canonical", href: "/bpo-de-compras" }],
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
      <section className="relative isolate overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:flex lg:items-center">
        <div className="pointer-events-none absolute -right-48 top-0 h-[580px] w-[580px] rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-green">
              <span className="h-px w-10 bg-green" /> Outsourcing estratégico · Performance em compras
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-[4.5rem]">
              BPO de Compras para empresas que precisam comprar melhor{