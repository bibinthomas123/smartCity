import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { energyMix } from "@/lib/mockData";
import EnvironmentCharts from "./EnvironmentCharts";

const stats = [
  { label: "Sustainability Score", value: "72/100", sub: "+5 pts this year",  color: "#059669" },
  { label: "Renewable Energy",     value: "64%",    sub: "Of total mix",      color: "#0D9488" },
  { label: "Avg. AQI (2024)",      value: "33",     sub: "Good · WHO target", color: "#059669" },
  { label: "Green Space",          value: "~50%",   sub: "Of total city area",color: "#0D9488" },
];

const aqiScale = [
  { label: "Good",       range: "0–50",   color: "#059669" },
  { label: "Moderate",   range: "51–100", color: "#D97706" },
  { label: "Unhealthy",  range: "101–150",color: "#EA580C" },
  { label: "Hazardous",  range: "151+",   color: "#E11D48" },
];

export default function EnvironmentPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Environment"
        subtitle="Sustainability indicators, air quality, emissions, and green energy mix for Magdeburg."
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

      <EnvironmentCharts />

      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Energy Source Breakdown</p>
          <div className="space-y-3">
            {energyMix.map((e) => (
              <div key={e.name} className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: e.color }} />
                <p className="text-[12.5px] flex-1" style={{ color: "rgba(45,31,15,0.58)" }}>{e.name}</p>
                <div className="w-36 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 5 }}>
                  <div className="h-full rounded-full" style={{ width: `${e.value}%`, background: e.color }} />
                </div>
                <p className="text-[12px] font-semibold w-8 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{e.value}%</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Air Quality Index Scale</p>
          <div className="space-y-3">
            {aqiScale.map((a) => (
              <div key={a.label} className="flex items-center gap-4">
                <div className="w-10 h-6 rounded" style={{ background: a.color + "28", border: `1px solid ${a.color}40` }} />
                <p className="text-[13px] flex-1" style={{ color: "rgba(45,31,15,0.70)" }}>{a.label}</p>
                <p className="text-[12px] font-mono" style={{ color: "rgba(45,31,15,0.42)" }}>{a.range}</p>
              </div>
            ))}
            <p className="text-[11px] mt-4" style={{ color: "rgba(45,31,15,0.38)" }}>
              City average AQI in 2024:{" "}
              <span className="font-semibold" style={{ color: "#059669" }}>33</span> — Good
            </p>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}
