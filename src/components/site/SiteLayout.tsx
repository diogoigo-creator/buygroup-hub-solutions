import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MarkOrbit } from "./hero-identities/MarkOrbit";
import { FullLockup } from "./hero-identities/FullLockup";
import { KineticSlogan } from "./hero-identities/KineticSlogan";

import { SectionWatermark } from "./SectionWatermark";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="relative flex-1 overflow-hidden">
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
    </div>
  );
}

type Identity =
  | { kind: "mark"; intensity?: "default" | "bold" }
  | { kind: "lockup"; caption?: string; slogan?: { primary: string; accent?: string } }
  | { kind: "slogan"; lines: { text: string; accent?: boolean }[][] };

export function PageHero({
  eyebrow,
  title,
  description,
  identity = { kind: "mark" },
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  identity?: Identity;
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
      {identity.kind === "mark" && <MarkOrbit intensity={identity.intensity} />}
      {identity.kind === "lockup" && <FullLockup caption={identity.caption} slogan={identity.slogan} />}
      {identity.kind === "slogan" && <KineticSlogan lines={identity.lines} />}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-16 lg:pt-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-green" />
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/65">{eyebrow}</p>
        </div>
        <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.05] text-white md:text-6xl lg:text-[3.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-pretty text-base text-white/70 lg:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
