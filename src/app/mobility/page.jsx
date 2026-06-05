import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { modalSplit } from "@/lib/mockData";
import MobilityCharts from "./MobilityCharts";

const stats = [
  { label: "Monthly Riders",    value: "8.2M",   sub: "MVB tram & bus network",   color: "#0891B2" },
  { label: "On-Time Rate",      value: "89.6%",  sub: "+0.8pp vs Q2 2024",        color: "#0D9488" },
  { label: "Avg. Delay",        value: "3.1 min",sub: "City trams & buses",        color: "#0891B2" },
  { label: "Cycling Trips/Day", value: "28,000", sub: "+14% since 2022",           color: "#06B6D4" },
];

export default function MobilityPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Mobility"
        subtitle="Public transport, traffic congestion, and modal split across Magdeburg."
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

      <MobilityCharts />

      <GlassCard className="p-6">
        <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Modal Split Detail</p>
        <div className="space-y-3">
          {modalSplit.map((m) => (
            <div key={m.name} className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: m.color }} />
              <p className="text-[12.5px] flex-1" style={{ color: "rgba(45,31,15,0.58)" }}>{m.name}</p>
              <div className="w-48 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 5 }}>
                <div className="h-full rounded-full" style={{ width: `${m.value}%`, background: m.color }} />
              </div>
              <p className="text-[12px] font-semibold w-10 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{m.value}%</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
