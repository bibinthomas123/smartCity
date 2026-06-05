import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { housingByType, constructionActivity, rentTrend } from "@/lib/mockData";
import HousingCharts from "./HousingCharts";

const stats = [
  { label: "Total Housing Units", value: "116,800", sub: "+2.8% since 2023",  color: "#D97706" },
  { label: "Avg. Rent (€/mo)",    value: "€720",    sub: "+4.5% YoY",         color: "#EA580C" },
  { label: "Vacancy Rate",        value: "3.2%",    sub: "Moderate",          color: "#C17F24" },
  { label: "New Units 2024",      value: "1,100",   sub: "+9.5% vs 2023",     color: "#D97706" },
];

export default function HousingPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Housing"
        subtitle="Stock composition, construction activity, and rental market indicators for Magdeburg."
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

      <HousingCharts />

      <GlassCard className="p-6">
        <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Housing Stock by Type</p>
        <div className="space-y-3">
          {housingByType.map((h) => (
            <div key={h.name} className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: h.color }} />
              <p className="text-[12.5px] flex-1" style={{ color: "rgba(45,31,15,0.58)" }}>{h.name}</p>
              <div className="w-40 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 5 }}>
                <div className="h-full rounded-full" style={{ width: `${h.value}%`, background: h.color }} />
              </div>
              <p className="text-[12px] font-semibold w-10 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{h.value}%</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
