import { Link } from "@tanstack/react-router";
import logo from "@/assets/buy-group-logo-white.png";
import mark from "@/assets/buy-group-mark-white.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-charcoal">
      <img
        src={mark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-[520px] w-[520px] select-none opacity-[0.04]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <img src={logo} alt="Buy Group" className="h-7 w-auto" />
          <p className="mt-6 max-w-sm text-pretty text-sm text-muted-foreground">
            Redução de custos, outsourcing de compras e capacitação para empresas
            que tratam o suprimento como vantagem competitiva.
          </p>
          <p className="mt-6 font-serif text-xl italic text-foreground/80">
            Compre melhor. Cresça mais.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/sobre" className="text-foreground/80 hover:text-primary">Sobre</Link></li>
            <li><Link to="/servicos" className="text-foreground/80 hover:text-primary">Serviços</Link></li>
            <li><Link to="/cursos" className="text-foreground/80 hover:text-primary">Cursos in company</Link></li>
            <li><Link to="/contato" className="text-foreground/80 hover:text-primary">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:contato@buygroup.com.br" className="text-foreground/80 hover:text-primary">contato@buygroup.com.br</a></li>
            <li><a href="tel:+551140000000" className="text-foreground/80 hover:text-primary">+55 11 4000-0000</a></li>
            <li className="text-muted-foreground">São Paulo · Brasil</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground lg:px-10">
          <p>© {new Date().getFullYear()} Buy Group. Todos os direitos reservados.</p>
          <img src={mark} alt="" aria-hidden="true" className="h-5 w-5 opacity-50" />
        </div>
      </div>
    </footer>
  );
}
