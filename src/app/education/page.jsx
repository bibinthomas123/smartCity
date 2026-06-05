import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { educationAttainment } from "@/lib/mockData";
import EducationCharts from "./EducationCharts";

const stats = [
  { label: "School Enrollment",   value: "38,400", sub: "Primary + secondary 2024",  color: "#4F46E5" },
  { label: "Tertiary Enrollment", value: "14,500", sub: "OVGU + other colleges",      color: "#7C3AED" },
  { label: "Literacy Rate",       value: "99.4%",  sub: "Adults 15+",                color: "#6D28D9" },
  { label: "Digital Skills",      value: "68%",    sub: "Basic proficiency 2024",     color: "#4F46E5" },
];

export default function EducationPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Education"
        subtitle="Enrollment trends, educational attainment, and digital competencies in Magdeburg."
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

      <EducationCharts />

      <GlassCard className="p-6">
        <p className="text-[13px] font-semibold mb-5" style={{ color: "rgba(45,31,15,0.60)" }}>Education Attainment (Population 25+)</p>
        <div className="space-y-3">
          {educationAttainment.map((e) => (
            <div key={e.level} className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: e.color }} />
              <p className="text-[12.5px] flex-1" style={{ color: "rgba(45,31,15,0.58)" }}>{e.level}</p>
              <div className="w-44 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 5 }}>
                <div className="h-full rounded-full" style={{ width: `${(e.value / 35) * 100}%`, background: e.color }} />
              </div>
              <p className="text-[12px] font-semibold w-10 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{e.value}%</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
