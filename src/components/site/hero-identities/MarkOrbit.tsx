import markWhite from "@/assets/buy-group-mark-white.png";

export function MarkOrbit({ intensity = "default" }: { intensity?: "default" | "bold" }) {
  const haloOpacity = intensity === "bold" ? "bg-green/25" : "bg-green/15";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-6 lg:translate-x-0"
    >
      <div className="relative h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]">
        <span className={`absolute inset-0 rounded-full blur-3xl animate-mark-pulse-ring ${haloOpacity}`} />
        <span className="absolute inset-6 rounded-full border border-green/25 animate-mark-spin-slow" />
        <span
          className="absolute inset-16 rounded-full border border-white/10 animate-mark-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "55s" }}
        />

        {/* Orbiting particles — only on lg */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green animate-orbit-cw" style={{ ["--orbit-r" as never]: "150px" }} />
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/70 animate-orbit-ccw" style={{ ["--orbit-r" as never]: "175px", animationDelay: "-8s" }} />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 animate-orbit-cw" style={{ ["--orbit-r" as never]: "120px", animationDelay: "-4s", animationDuration: "18s" }} />
        </div>

        <img
          src={markWhite}
          alt=""
          className="absolute inset-0 m-auto h-[55%] w-[55%] select-none opacity-[0.10] animate-mark-float lg:opacity-[0.22]"
        />
      </div>
    </div>
  );
}
