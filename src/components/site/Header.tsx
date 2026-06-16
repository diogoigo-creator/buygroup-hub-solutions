import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/buy-group-logo.png";

const nav = [
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/reducao-de-custos", label: "Onde Atuamos" },
  { to: "/cursos", label: "Academy" },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/75 shadow-[0_8px_32px_-16px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
          : "bg-white/40 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="Buy Group — início"
        >
          <img src={logo} alt="Buy Group" className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-white/60 p-1 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_8px_24px_-16px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group relative block rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
                  activeProps={{ className: "!text-navy" }}
                  activeOptions={{ exact: false }}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute inset-0 rounded-full bg-secondary transition-all duration-300 ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }`}
                        aria-hidden
                      />
                      <span className="relative">{n.label}</span>
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/contato"
            className="group inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[13px] font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-[0_14px_30px_-12px_rgba(15,23,42,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
          >
            Executive briefing
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/70 text-navy backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-x-0 top-[var(--header-h)] bottom-0 bg-navy/20 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-3 top-full mt-2 origin-top rounded-3xl border border-border/70 bg-white/95 p-3 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition-all duration-300 ${
            open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-1">
              {nav.map((n, i) => (
                <li
                  key={n.to}
                  className={`transition-all duration-300 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                    activeProps={{ className: "!text-navy bg-secondary" }}
                    activeOptions={{ exact: false }}
                  >
                    <span>{n.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-1.5 rounded-2xl bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)]"
            >
              Executive briefing
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/servicos"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl border border-border/70 px-5 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-secondary"
            >
              Ver todos os serviços
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
