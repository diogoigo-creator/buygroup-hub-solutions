import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact-details";
import { pushDataLayer } from "@/lib/gtm";
import { shouldShowMobileContact } from "@/lib/mobile-contact";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MarkOrbit } from "./hero-identities/MarkOrbit";
import { FullLockup } from "./hero-identities/FullLockup";
import { KineticSlogan } from "./hero-identities/KineticSlogan";

import { SectionWatermark } from "./SectionWatermark";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const layoutRef = useRef<HTMLDivElement>(null);
  const [showContactBar, setShowContactBar] = useState(false);

  useEffect(() => {
    let frame = 0;
    const visible = (element: Element | null | undefined) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight;
    };
    const update = () => {
      frame = 0;
      setShowContactBar(shouldShowMobileContact({
        pathname,
        viewportWidth: window.innerWidth,
        scrollY: window.scrollY,
        footerVisible: visible(layoutRef.current?.querySelector("footer")),
        courseFormVisible: visible(layoutRef.current?.querySelector("#solicitar form")),
      }));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    if (layoutRef.current) observer.observe(layoutRef.current);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <div ref={layoutRef} data-page={pathname} className={`site-layout flex min-h-screen flex-col bg-background text-foreground ${pathname !== "/contato" ? "mobile-contact-space" : ""}`}>
      <a href="#conteudo-principal" className="skip-to-main">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" className="relative flex-1 overflow-hidden" tabIndex={-1}>
        {/* Decorative watermarks — dark mark visible on light sections, light mark visible on dark sections */}
        <SectionWatermark variant="right" tone="dark" className="top-[40vh]" />
        <SectionWatermark variant="left" tone="dark" className="top-[120vh]" />
        <SectionWatermark variant="right" tone="dark" className="top-[200vh]" />
        <SectionWatermark variant="left" tone="light" className="top-[10vh]" />
        <SectionWatermark variant="right" tone="light" className="top-[80vh]" />
        <SectionWatermark variant="left" tone="light" className="top-[160vh]" />
        <div className="relative">{children}</div>
      </main>
      <Footer />
      {showContactBar && (
        <nav aria-label="Contato rápido" className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] gap-2 bg-navy px-3 md:hidden">
          <Button asChild variant="outline" className="h-11 min-w-0 border-primary/40 bg-navy px-2 text-xs text-primary hover:bg-navy-soft hover:text-primary">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => pushDataLayer("whatsapp_click", { link_location: "barra_mobile" })} aria-label="Falar com a Buy Group pelo WhatsApp">
              <MessageCircle aria-hidden="true" /> WhatsApp
            </a>
          </Button>
          <Button asChild className="h-11 min-w-0 px-2 text-xs">
            <Link to="/contato" hash="form" aria-label="Falar com especialista da Buy Group">Falar com especialista</Link>
          </Button>
        </nav>
      )}
    </div>
  );
}


type Identity =
  | { kind: "mark"; intensity?: "default" | "bold" }
  | { kind: "lockup"; caption?: string; subCaption?: string; slogan?: { primary: string; accent?: string } }
  | { kind: "slogan"; lines: { text: string; accent?: boolean }[][] };

export function PageHero({
  eyebrow,
  title,
  description,
  identity = { kind: "mark" },
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  identity?: Identity;
  cta?: ReactNode;
}) {
  return (
    <section className="relative flex overflow-hidden bg-navy text-white lg:min-h-[72svh] lg:items-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 85% 20%, oklch(0.78 0.18 162 / 0.35), transparent 60%), radial-gradient(50% 70% at 10% 90%, oklch(0.78 0.18 162 / 0.18), transparent 60%)",
        }}
      />

      {/* Identity visual */}
      <div className="hidden lg:contents">
        {identity.kind === "mark" && <MarkOrbit intensity={identity.intensity} />}
        {identity.kind === "lockup" && (
          <FullLockup caption={identity.caption} subCaption={identity.subCaption} slogan={identity.slogan} />
        )}
        {identity.kind === "slogan" && <KineticSlogan lines={identity.lines} />}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:px-10 lg:pb-16 lg:pt-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-green" aria-hidden="true" />
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/65">{eyebrow}</p>
        </div>
        <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.05] text-white md:text-6xl lg:text-[3.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-pretty text-base text-white/70 lg:text-lg">{description}</p>
        )}
        {cta && <div className="mt-8 flex flex-wrap items-center gap-3">{cta}</div>}
      </div>
    </section>
  );
}

