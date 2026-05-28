import mark from "@/assets/buy-group-mark.png";

/**
 * Decorative watermark mark for light-background sections.
 * Mirrors the footer's watermark treatment in navy at very low opacity.
 *
 * Variants:
 *  - "right": large mark sticking out from the right edge (default)
 *  - "left":  large mark sticking out from the left edge
 *  - "center-bottom": faint mark anchored bottom-center, useful at page end
 */
export function SectionWatermark({
  variant = "right",
  className = "",
}: {
  variant?: "right" | "left" | "center-bottom";
  className?: string;
}) {
  const position =
    variant === "left"
      ? "-left-24 top-1/2 -translate-y-1/2"
      : variant === "center-bottom"
        ? "left-1/2 -bottom-32 -translate-x-1/2"
        : "-right-24 top-1/2 -translate-y-1/2";

  return (
    <img
      src={mark}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute h-[520px] w-[520px] select-none opacity-[0.04] ${position} ${className}`}
    />
  );
}
