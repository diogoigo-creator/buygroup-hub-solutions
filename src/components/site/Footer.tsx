import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/buy-group-logo-white.png";

const servicos = [
  { to: "/otimizacao-de-custos", label: "Otimização de Custos" },
  { to: "/bpo-de-compras", label: "BPO de Compras" },
  { to: "/inteligencia-de-gastos", label: "Inteligência de Gastos" },
  { to: "/revisao-pre-fechamento", label: "Revisão Pré-Fechamento" },
  { to: "/gestao-de-fornecedores", label: "Gestão de Fornecedores" },
  { to: "/maturidade-em-compras", label: "Maturidade em Compras" },
] as const;

const empresa = [
  { to: "/sobre", label: "Sobre a Buy Group" },
  { to: "/servicos", label: "Todos os serviços" },
  { to: "/metodologia", label: "Metodologia CUT4MORE™" },
  { to: "/reducao-de-custos", label: "Onde atuamos" },
  { to: "/cursos", label: "Buy Group Academy" },
  { to: "/contato", label: "Falar com especialista" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-10 lg:px-10 lg:py-16">
        <div className="space-y-5">
          <img src={logo} alt="Buy Group" className="h-7 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            Consultoria executiva de compras e negociação. Economia com método, governança
            financeira e resultado validado.
          </p>
        </div>

        <nav aria-label="Serviços">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {servicos.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 transition-colors hover:text-green">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Empresa">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {empresa.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 transition-colors hover:text-green">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
              <a
                href="mailto:atendimento@buygroup.com.br"
                className="transition-colors hover:text-green"
              >
                atendimento@buygroup.com.br
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
              <span className="leading-relaxed">
                R. Rio Grande do Norte, 1436 — Sala 813<br />
                Savassi, Belo Horizonte — MG<br />
                CEP 30130-138 · Brasil
              </span>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/50 lg:px-10">
          © {new Date().getFullYear()} Buy Group Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
