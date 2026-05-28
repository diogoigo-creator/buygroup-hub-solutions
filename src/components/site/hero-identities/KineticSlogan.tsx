import markWhite from "@/assets/buy-group-mark-white.png";

type Segment = { text: string; accent?: boolean };

export function KineticSlogan({
  lines,
}: {
  /** Each line is an array of segments; accent segments render in gold with an animated underline. */
  lines: Segment[][];
}) {
  let wordIndex = 0;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center px-6 pb-8 lg:justify-end lg:px-12 lg:pb-12"
    >
      {/* Background watermark mark (no rotation) */}
      <img
        src={markWhite}
        alt=""
        className="pointer-events-none absolute right-6 top-1/2 h-[220px] w-[220px] -translate-y-1/2 select-none opacity-[0.06] animate-mark-bob lg:right-16 lg:h-[360px] lg:w-[360px] lg:opacity-[0.08]"
      />
      <div className="relative max-w-[92%] text-center lg:max-w-[640px] lg:text-right">
        {lines.map((segments, lineIdx) => (
          <p
            key={lineIdx}
            className="font-serif text-2xl leading-[1.1] text-white sm:text-3xl lg:text-[2.75rem]"
          >
            {segments.map((seg, segIdx) => {
              const words = seg.text.split(" ").filter(Boolean);
              return (
                <span key={segIdx} className={seg.accent ? "relative inline-block" : "inline"}>
                  {words.map((w, wi) => {
                    const delay = wordIndex * 0.12;
                    wordIndex += 1;
                    return (
                      <span
                        key={wi}
                        className={`animate-slogan-word ${seg.accent ? "text-green" : ""}`}
                        style={{ animationDelay: `${delay}s` }}
                      >
                        {w}
                        {wi < words.length - 1 ? "\u00A0" : ""}
                      </span>
                    );
                  })}
                  {seg.accent && (
                    <span
                      className="absolute -bottom-1 left-0 block h-[3px] w-full origin-left bg-green animate-slogan-underline"
                      style={{ animationDelay: `${wordIndex * 0.12 + 0.2}s` }}
                    />
                  )}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </div>
  );
}
