import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { populationHistory, ageGroups, migrationData } from "@/lib/mockData";
import PeopleCharts from "./PeopleCharts";

const latest = populationHistory[populationHistory.length - 1];
const prev    = populationHistory[populationHistory.length - 2];
const growthPct = (((latest.total - prev.total) / prev.total) * 100).toFixed(1);

const stats = [
  { label: "Total Population",   value: "237,765",      sub: `+${growthPct}% YoY`,   color: "#7C3AED" },
  { label: "Male / Female",      value: "48.8% / 51.2%",sub: "Gender split",          color: "#6D28D9" },
  { label: "Population Density", value: "1,183",        sub: "residents per km²",     color: "#4F46E5" },
  { label: "Median Age",         value: "44.1",         sub: "+0.6 years vs 2023",    color: "#7C3AED" },
];

export default function PeoplePage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="People"
        subtitle="Population demographics, migration flows, and long-term trends for Magdeburg."
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

      <PeopleCharts />

      <GlassCard className="p-6">
        <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Age Distribution Breakdown</p>
        <div className="space-y-3">
          {ageGroups.map((ag) => (
            <div key={ag.group} className="flex items-center gap-4">
              <p className="text-[12px] w-14 shrink-0" style={{ color: "rgba(45,31,15,0.52)" }}>{ag.group}</p>
              <div className="flex-1 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 6 }}>
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${ag.value}%`, background: ag.color }} />
              </div>
              <p className="text-[12px] font-semibold w-10 text-right" style={{ color: ag.color }}>{ag.value}%</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
