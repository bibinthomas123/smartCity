import { cn } from "@/lib/utils";

export default function GlassCard({ className, children, glow, style }) {
  const glowMap = {
    blue:   "0 0 40px rgba(37,99,235,0.12)",
    teal:   "0 0 40px rgba(13,148,136,0.12)",
    green:  "0 0 40px rgba(5,150,105,0.12)",
    amber:  "0 0 40px rgba(193,127,36,0.16)",
    cyan:   "0 0 40px rgba(8,145,178,0.12)",
    rose:   "0 0 40px rgba(225,29,72,0.12)",
  };

  return (
    <div
      className={cn("rounded-2xl overflow-hidden", className)}
      style={{
        background: "rgba(255, 249, 235, 0.80)",
        backdropFilter: "blur(16px) saturate(1.4)",
        WebkitBackdropFilter: "blur(16px) saturate(1.4)",
        border: "1px solid rgba(160, 130, 90, 0.25)",
        boxShadow: glow ? (glowMap[glow] ?? undefined) : "0 1px 3px rgba(160,130,90,0.12)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
