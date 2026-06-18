import { useEffect, useRef, useState } from "react";
import markDark from "@/assets/buy-group-mark.png";
import markLight from "@/assets/buy-group-mark-white.png";

/**
 * Decorative watermark mark mirroring the footer treatment.
 * Use `tone="dark"` (default) on light sections, `tone="light"` on dark sections.
 *
 * Mounts the image lazily via IntersectionObserver to avoid loading 6+
 * decorative marks above the fold on initial render.
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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const position =
    variant === "left"
      ? "-left-24 top-1/2 -translate-y-1/2"
      : variant === "center-bottom"
        ? "left-1/2 -bottom-32 -translate-x-1/2"
        : "-right-24 top-1/2 -translate-y-1/2";

  const src = tone === "light" ? markLight : markDark;
  const opacity = tone === "light" ? "opacity-[0.05]" : "opacity-[0.04]";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-[520px] w-[520px] select-none md:block ${position} ${className}`}
    >
      {visible && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${opacity}`}
        />
      )}
    </div>
  );
}
