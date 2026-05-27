import { Link } from "@tanstack/react-router";
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
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <img src={logo} alt="Buy Group" className="h-7 w-auto" />
          <p className="mt-6 font-serif text-2xl leading-snug text-white">
            Mais que comprar. <span className="italic text-green">É comprar bem.</span>
          </p>
          <p className="mt-6 max-w-sm text-pretty text-sm text-white/70">
            Transformamos despesas em margem de lucro sustentada por meio de
            inteligência de mercado, negociação estratégica e governança de
            compras — sem risco financeiro para o cliente.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/sobre" className="text-white/85 hover:text-green">Sobre</Link></li>
            <li><Link to="/servicos" className="text-white/85 hover:text-green">Serviços</Link></li>
            <li><Link to="/cursos" className="text-white/85 hover:text-green">Cursos in company</Link></li>
            <li><Link to="/contato" className="text-white/85 hover:text-green">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:contato@buygroup.com.br" className="text-white/85 hover:text-green">contato@buygroup.com.br</a></li>
            <li><a href="tel:+551140000000" className="text-white/85 hover:text-green">+55 11 4000-0000</a></li>
            <li className="text-white/60">São Paulo · Brasil</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-6 py-6 text-xs text-white/60 lg:px-10">
          <p>© {new Date().getFullYear()} Buy Group. Todos os direitos reservados.</p>
          <img src={mark} alt="" aria-hidden="true" className="h-5 w-5 opacity-60" />
        </div>
      </div>
    </footer>
  );
}
