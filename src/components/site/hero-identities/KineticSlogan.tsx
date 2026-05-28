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
      className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-12"
    >
      {/* Background watermark mark */}
      <img
        src={markWhite}
        alt=""
        className="pointer-events-none absolute right-4 top-1/2 h-[260px] w-[260px] -translate-y-1/2 select-none opacity-[0.06] animate-mark-float lg:right-12 lg:h-[420px] lg:w-[420px] lg:opacity-[0.08]"
      />
      <div className="relative max-w-[90%] text-center lg:max-w-[520px] lg:text-right">
        {lines.map((segments, lineIdx) => (
          <p
            key={lineIdx}
            className="font-serif text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl"
          >
            {segments.map((seg, segIdx) => {
              const words = seg.text.split(" ");
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
