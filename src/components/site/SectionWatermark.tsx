import markDark from "@/assets/buy-group-mark.png";
import markLight from "@/assets/buy-group-mark-white.png";

/**
 * Decorative watermark mark mirroring the footer treatment.
 * Use `tone="dark"` (default) on light sections, `tone="light"` on dark sections.
 */
export function SectionWatermark({
  variant = "right",
  tone = "dark",
  className = "",
}: {
  variant?: "right" | "left" | "center-bottom";
  tone?: "dark" | "light";
  className?: string;
}) {
  const position =
    variant === "left"
      ? "-left-24 top-1/2 -translate-y-1/2"
      : variant === "center-bottom"
        ? "left-1/2 -bottom-32 -translate-x-1/2"
        : "-right-24 top-1/2 -translate-y-1/2";

  const src = tone === "light" ? markLight : markDark;
  const opacity = tone === "light" ? "opacity-[0.05]" : "opacity-[0.04]";

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-[520px] w-[520px] select-none md:block ${opacity} ${position} ${className}`}
    />
  );
}
