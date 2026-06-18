import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Wifi,
  Zap,
  Truck,
  Printer,
  Laptop,
  Wrench,
  Package,
  Plane,
  Shield,
  Banknote,
  Boxes,
  Recycle,
} from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SOCIAL_META, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/reducao-de-custos")({
  head: () => {
    const title = "Redução de Custos em Compras — Buy Group";
    const description =
      "Categorias estratégicas e potenciais de economia em telecomunicações, energia, logística, tecnologia, seguros, serviços e insumos.";
    const url = "https://buygroup-hub-solutions.lovable.app/reducao-de-custos";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Redução de Custos · Categorias endereçáveis" },
        {
          property: "og:description",
          content: "Onde encontramos economia e como cada categoria pode contribuir para a margem.",
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
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Redução de Custos", path: "/reducao-de-custos" },
            ]),
          ),
        },
      ],
    };
  },
  component: ReducaoDeCustosPage,
});

const categorias = [
  {
    icon: Wifi,
    t: "Telecomunicações",
    r: "18–32%",
    d: "Voz, dados, telefonia móvel e links dedicados.",
  },
  {
    icon: Zap,
    t: "Energia",
    r: "12–25%",
    d: "Mercado livre, gestão tarifária, gás natural e eficiência energética.",
  },
  {
    icon: Truck,
    t: "Logística",
    r: "10–22%",
    d: "Fretes, armazenagem, distribuição e operações logísticas.",
  },
  {
    icon: Printer,
    t: "Outsourcing de Impressão",
    r: "20–40%",
    d: "Frota, outsourcing, gestão documental e print-on-demand.",
  },
  {
    icon: Laptop,
    t: "Tecnologia",
    r: "15–30%",
    d: "Licenças, equipamentos, nuvem e contratos de software.",
  },
  {
    icon: Wrench,
    t: "Serviços Corporativos",
    r: "14–28%",
    d: "Limpeza, segurança, manutenção predial e serviços de apoio.",
  },
  {
    icon: Package,
    t: "Embalagens e Suprimentos",
    r: "8–20%",
    d: "Caixas, filmes, paletes, materiais de escritório e manutenção.",
  },
  {
    icon: Plane,
    t: "Viagens e Eventos",
    r: "15–35%",
    d: "Passagens, hospedagem, locação de veículos e eventos corporativos.",
  },
  {
    icon: Shield,
    t: "Seguros Corporativos",
    r: "10–25%",
    d: "Patrimonial, frota, vida em grupo, D&O e responsabilidade civil.",
  },
  {
    icon: Banknote,
    t: "Serviços Financeiros",
    r: "12–28%",
    d: "Tarifas bancárias, cartões corporativos, adquirência e câmbio.",
  },
  {
    icon: Boxes,
    t: "Matérias-primas e Insumos",
    r: "6–18%",
    d: "Composição de custos, alternativas de fornecimento e negociações competitivas.",
  },
  {
    icon: Recycle,
    t: "Resíduos e Sustentabilidade",
    r: "15–30%",
    d: "Gestão de resíduos, reciclagem, água e efluentes industriais.",
  },
];

function ReducaoDeCustosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Redução de custos"
        title={
          <>
            Onde encontramos economia.{" "}
            <span className="text-green">Quanto cada categoria pode contribuir para a margem.</span>
          </>
        }
        description="As faixas indicam potenciais observados por categoria. O saving real depende da análise das despesas, dos contratos e dos fornecedores, e o projeto só avança após a validação do caso com o cliente."
        identity={{ kind: "mark", intensity: "bold" }}
      />
      


      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c) => (
              <article
                key={c.t}
                className="group flex flex-col bg-white p-8 transition-colors hover:bg-secondary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Saving potencial
                    </p>
                    <p className="font-serif text-2xl text-green">{c.r}</p>
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>

          {/* Conexão com serviços existentes */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link
              to="/inteligencia-de-gastos"
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-navy/55">1. Mapear</p>
              <h3 className="mt-3 font-serif text-xl text-navy">Inteligência de Gastos</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Classificação forense de 24 meses de gasto e baseline auditável para enxergar o que é endereçável em cada categoria.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy group-hover:text-green">
                Conhecer <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/otimizacao-de-custos"
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-navy/55">2. Capturar</p>
              <h3 className="mt-3 font-serif text-xl text-navy">Otimização de Custos</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Programa estruturado de redução de custos com remuneração 100% vinculada aos savings homologados.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy group-hover:text-green">
                Conhecer <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/revisao-pre-fechamento"
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-navy/55">3. Validar</p>
              <h3 className="mt-3 font-serif text-xl text-navy">Revisão Pré-Fechamento</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Revisão independente de propostas já negociadas, com captura de saving residual antes do fechamento.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy group-hover:text-green">
                Conhecer <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-white p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="font-serif text-2xl text-navy">
                Não vê sua categoria?{" "}
                <span className="text-green">Analisamos diferentes categorias estratégicas.</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                O mapeamento inicial organiza o volume negociável e dimensiona o potencial real por
                categoria.
              </p>
            </div>
            <Link
              to="/contato" hash="form"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Falar com especialista
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
