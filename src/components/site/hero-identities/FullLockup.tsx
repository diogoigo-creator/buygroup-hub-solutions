import logoWhite from "@/assets/buy-group-logo-white.svg";

export function FullLockup({
  caption,
  subCaption,
  slogan,
}: {
  caption?: string;
  subCaption?: string;
  /** Optional full slogan displayed below the lockup, separated by a divider, with animation. */
  slogan?: { primary: string; accent?: string };
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-10 lg:translate-x-0"
    >
      <div className="relative flex flex-col items-center gap-5">
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

        {subCaption && (
          <p className="animate-fade-up animate-delay-500 -mt-2 text-[10px] uppercase tracking-[0.32em] text-white/55">
            {subCaption}
          </p>
        )}

        {slogan && (
          <>
            <span className="block h-px w-16 origin-left bg-white/20 animate-lockup-underline" />
            <p className="text-center font-serif text-xl leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
              <span className="animate-slogan-word" style={{ animationDelay: "1.1s" }}>
                {slogan.primary}
              </span>
              {slogan.accent && (
                <>
                  {" "}
                  <span className="relative inline-block text-green">
                    <span className="animate-slogan-word" style={{ animationDelay: "1.55s" }}>
                      {slogan.accent}
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 block h-[2px] w-full origin-left bg-green animate-slogan-underline"
                      style={{ animationDelay: "2s" }}
                    />
                  </span>
                </>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
