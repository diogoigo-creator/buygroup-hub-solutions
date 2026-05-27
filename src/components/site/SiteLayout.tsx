import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import markWhite from "@/assets/buy-group-mark-white.png";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 85% 20%, oklch(0.78 0.18 162 / 0.35), transparent 60%), radial-gradient(50% 70% at 10% 90%, oklch(0.78 0.18 162 / 0.18), transparent 60%)",
        }}
      />
      {/* Logomarca animada — assinatura visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative h-[560px] w-[560px]">
          <span className="absolute inset-0 rounded-full bg-green/15 blur-3xl animate-mark-pulse-ring" />
          <span className="absolute inset-8 rounded-full border border-green/20 animate-mark-spin-slow" />
          <span
            className="absolute inset-20 rounded-full border border-white/10 animate-mark-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "55s" }}
          />
          <img
            src={markWhite}
            alt=""
            className="absolute inset-0 m-auto h-[300px] w-[300px] select-none opacity-[0.16] animate-mark-float"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-32 lg:pt-36">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-green" />
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/65">{eyebrow}</p>
        </div>
        <h1 className="mt-8 max-w-5xl text-balance font-serif text-5xl leading-[1.02] text-white md:text-7xl lg:text-[5.25rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-pretty text-lg text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
