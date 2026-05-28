import logoWhite from "@/assets/buy-group-logo-white.png";

export function FullLockup({ caption }: { caption?: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-10 lg:translate-x-0"
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative">
          <img
            src={logoWhite}
            alt=""
            className="h-auto w-[220px] select-none animate-lockup-reveal sm:w-[300px] lg:w-[380px]"
          />
          <span className="absolute inset-x-2 -bottom-2 block h-px origin-left bg-green animate-lockup-underline" />
        </div>
        {caption && (
          <p className="animate-fade-up animate-delay-300 text-[10px] uppercase tracking-[0.32em] text-white/55">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
