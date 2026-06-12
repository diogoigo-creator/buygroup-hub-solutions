import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/buy-group-logo-white.png";
import mark from "@/assets/buy-group-mark-white.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <img
        src={mark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-[520px] w-[520px] select-none opacity-[0.05]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <img src={logo} alt="Buy Group" className="h-7 w-auto" />
          <p className="mt-6 font-sans text-lg font-bold uppercase leading-tight tracking-[0.14em] text-white">
            Mais que comprar. <span className="text-white/60">É comprar bem.</span>
          </p>
          <p className="mt-6 max-w-sm text-pretty text-sm text-white/70">
            Transformamos despesas em margem com inteligência de mercado, negociação estratégica e
            governança de compras.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/sobre" className="text-white/85 hover:text-green">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-white/85 hover:text-green">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/reducao-de-custos" className="text-white/85 hover:text-green">
                Redução de custos
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="text-white/85 hover:text-green">
                Cursos para empresas
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-white/85 hover:text-green">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Contato executivo
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="mailto:atendimento@buygroup.com.br"
                className="inline-flex items-center gap-2.5 text-white/85 hover:text-green"
              >
                <Mail className="h-4 w-4 text-green/80" />
                atendimento@buygroup.com.br
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-white/65">
              <MapPin className="h-4 w-4 text-green/80" />
              São Paulo · Brasil
            </li>
          </ul>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/45">
            ATENDIMENTO POR AGENDAMENTO · NDA
          </p>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-white/55 sm:flex-row sm:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Buy Group Consultoria. Todos os direitos reservados.</p>
          <p className="text-white/45">Consultoria em compras e negociação</p>
        </div>
      </div>
    </footer>
  );
}
