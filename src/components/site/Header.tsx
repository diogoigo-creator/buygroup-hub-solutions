import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/buy-group-logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/reducao-de-custos", label: "Redução de Custos" },
  { to: "/cursos", label: "Cursos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-white/90 shadow-[0_1px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Buy Group — início">
          <img src={logo} alt="Buy Group" className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
          <Link
            to="/contato"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-[0_12px_28px_-12px_rgba(15,23,42,0.55)]"
          >
            Executive briefing
          </Link>
        </nav>
        <button
          className="text-navy md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-navy"
                activeProps={{ className: "text-navy bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-navy px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)]"
            >
              Executive briefing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
