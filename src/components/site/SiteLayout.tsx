import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import mark from "@/assets/buy-group-mark-white.png";

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
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <img
        src={mark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-16 hidden h-[460px] w-[460px] select-none opacity-[0.045] md:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />
          <p className="font-sans text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        </div>
        <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}

export function MarkDivider() {
  return (
    <div aria-hidden="true" className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-8 lg:px-10">
      <span className="h-px flex-1 bg-border/60" />
      <img src={mark} alt="" className="h-5 w-5 opacity-40" />
      <span className="h-px flex-1 bg-border/60" />
    </div>
  );
}
