import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import EconomyCharts from "./EconomyCharts";

const stats = [
  { label: "Employment Rate",     value: "95.8%",  sub: "Strong market 2024",  color: "#D97706" },
  { label: "GDP Growth",          value: "2.1%",   sub: "+0.4pp vs 2023",      color: "#C17F24" },
  { label: "New Businesses",      value: "1,820",  sub: "+6.2% vs 2023",       color: "#EA580C" },
  { label: "Median Household €",  value: "€38,900",sub: "+3.8% real growth",   color: "#D97706" },
];

const sectors = [
  { name: "Services",          share: 48, color: "#D97706" },
  { name: "Manufacturing",     share: 20, color: "#EA580C" },
  { name: "Technology",        share: 12, color: "#C17F24" },
  { name: "Retail & Trade",    share: 11, color: "#F59E0B" },
  { name: "Construction",      share: 6,  color: "#B45309" },
  { name: "Other",             share: 3,  color: "#78716C" },
];

export default function EconomyPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Economy"
        subtitle="Employment, GDP growth, business activity, and sector breakdown for Magdeburg."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <GlassCard key={s.label} className="p-5">
            <p className="text-[12px] mb-2" style={{ color: "rgba(45,31,15,0.45)" }}>{s.label}</p>
            <p className="text-[22px] font-bold leading-none" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[11px] mt-1.5" style={{ color: "rgba(45,31,15,0.40)" }}>{s.sub}</p>
          </GlassCard>
        ))}
      </div>

      <EconomyCharts />

      <GlassCard className="p-6">
        <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Employment by Sector</p>
        <div className="space-y-3">
          {sectors.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }} />
              <p className="text-[12.5px] flex-1" style={{ color: "rgba(45,31,15,0.58)" }}>{s.name}</p>
              <div className="w-48 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 5 }}>
                <div className="h-full rounded-full" style={{ width: `${s.share}%`, background: s.color }} />
              </div>
              <p className="text-[12px] font-semibold w-8 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{s.share}%</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
