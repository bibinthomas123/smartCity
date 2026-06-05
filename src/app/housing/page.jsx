import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { housingByType, constructionActivity, rentTrend } from "@/lib/mockData";
import HousingCharts from "./HousingCharts";
import { Buildings, TrendUp, Info, CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { label: "Total Housing Units", value: "116,800", sub: "+2.8% since 2023",  color: "#D97706" },
  { label: "Avg. Rent (€/mo)",    value: "€720",    sub: "+4.5% YoY",         color: "#EA580C" },
  { label: "Vacancy Rate",        value: "3.2%",    sub: "Moderate",          color: "#C17F24" },
  { label: "New Units 2024",      value: "1,100",   sub: "+9.5% vs 2023",     color: "#D97706" },
];

const insights = [
  {
    icon: CheckCircle,
    title: "Still affordable by German standards",
    body: "At €720/month average, Magdeburg remains one of the most affordable mid-size German cities. Munich averages €1,900, Hamburg €1,500, and even Leipzig has overtaken Magdeburg at ~€800. This affordability attracts workers, students, and young families priced out of western cities.",
    accent: "#059669",
    bg: "rgba(5,150,105,0.07)",
    border: "rgba(5,150,105,0.20)",
  },
  {
    icon: TrendUp,
    title: "Construction boom at 10-year high",
    body: "With 5,050 permits issued in 2024 — the highest since records began — Magdeburg is in the middle of a residential construction surge. New developments are concentrated in the Stadtfeld, Reform, and Neu-Olvenstedt districts, with mixed-use developments increasing in Buckau and the Elbe waterfront.",
    accent: "#D97706",
    bg: "rgba(215,119,6,0.07)",
    border: "rgba(215,119,6,0.20)",
  },
  {
    icon: WarningCircle,
    title: "Rent rising faster than wages",
    body: "While still affordable in absolute terms, rents have risen 45% since 2016 — significantly outpacing wage growth of ~28% in the same period. Social housing stock (5.8% of units) is under pressure, and the city's 2025–2030 housing plan targets 3,000 new affordable units to prevent a shortage.",
    accent: "#EA580C",
    bg: "rgba(234,88,12,0.07)",
    border: "rgba(234,88,12,0.20)",
  },
];

export default function HousingPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Housing"
        subtitle="Stock composition, construction activity, and rental market indicators for Magdeburg."
      />

      {/* ── KPI cards ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <GlassCard key={s.label} className="p-5">
            <p className="text-[12px] mb-2" style={{ color: "rgba(45,31,15,0.45)" }}>{s.label}</p>
            <p className="text-[22px] font-bold leading-none" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[11px] mt-1.5" style={{ color: "rgba(45,31,15,0.40)" }}>{s.sub}</p>
          </GlassCard>
        ))}
      </div>

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <GlassCard className="p-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(45,31,15,0.38)" }}>Overview</p>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2D1F0F" }}>
              An affordable market under growing pressure
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,31,15,0.62)" }}>
              Magdeburg&rsquo;s housing market has undergone a significant transformation since the
              early 2000s. During the 1990s, the city faced a severe vacancy crisis as the
              post-reunification population exodus left tens of thousands of apartments empty.
              Many were demolished through federal programmes, and the city right-sized its stock.
            </p>
            <p className="text-[13.5px] leading-relaxed mt-3" style={{ color: "rgba(45,31,15,0.62)" }}>
              Today the picture is the reverse: vacancy has fallen from over 15% to just 3.2%,
              demand is rising alongside population growth, and construction is accelerating to keep
              pace. The challenge is now to build fast enough — and affordably enough — to avoid the
              housing crises seen in Hamburg and Munich.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: "National avg rent (Germany)", value: "~€900/mo",   note: "Magdeburg is 20% below average" },
              { label: "Rent increase since 2016",    value: "+45%",       note: "vs +28% wage growth same period" },
              { label: "Social housing units",         value: "~6,750",    note: "5.8% of total stock"             },
              { label: "Owner-occupancy rate",         value: "22%",       note: "Low vs EU avg (70%)"             },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-4 rounded-xl p-3.5"
                style={{ background: "rgba(215,119,6,0.07)", border: "1px solid rgba(215,119,6,0.18)" }}>
                <div className="flex-1">
                  <p className="text-[11.5px]" style={{ color: "rgba(45,31,15,0.52)" }}>{f.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(45,31,15,0.38)" }}>{f.note}</p>
                </div>
                <p className="text-[15px] font-bold shrink-0" style={{ color: "#D97706" }}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* ── Charts ────────────────────────────────────────────────────────── */}
      <HousingCharts />

      {/* ── Insight cards ─────────────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-3 gap-5">
        {insights.map((ins) => (
          <div key={ins.title} className="rounded-2xl p-5" style={{ background: ins.bg, border: `1px solid ${ins.border}` }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,249,235,0.80)", border: `1px solid ${ins.border}` }}>
                <ins.icon size={15} weight="fill" style={{ color: ins.accent }} />
              </div>
              <p className="text-[13px] font-bold" style={{ color: "#2D1F0F" }}>{ins.title}</p>
            </div>
            <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(45,31,15,0.62)" }}>{ins.body}</p>
          </div>
        ))}
      </div>

      {/* ── Housing breakdown + Context ───────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Housing Stock by Type</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.38)" }}>116,800 units total · 2024</p>
          <div className="space-y-3">
            {housingByType.map((h) => (
              <div key={h.name} className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: h.color }} />
                <p className="text-[12.5px] flex-1" style={{ color: "rgba(45,31,15,0.58)" }}>{h.name}</p>
                <div className="w-40 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 6 }}>
                  <div className="h-full rounded-full" style={{ width: `${h.value}%`, background: h.color }} />
                </div>
                <p className="text-[12px] font-semibold w-10 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{h.value}%</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3.5 rounded-xl" style={{ background: "rgba(193,127,36,0.07)", border: "1px solid rgba(193,127,36,0.18)" }}>
            <p className="text-[12px] font-semibold mb-1" style={{ color: "#A36318" }}>Why so many apartments?</p>
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(45,31,15,0.55)" }}>
              Magdeburg&rsquo;s urban form is dominated by Plattenbau (prefabricated concrete block)
              apartment buildings from the GDR era. Though many were renovated or demolished
              post-reunification, apartments still make up nearly 60% of the stock.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Construction Pipeline</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.38)" }}>Recent permits & completions outlook</p>
          <div className="space-y-4">
            {[
              { year: "2024", permits: 5050, completions: 4200, note: "Record permit year"    },
              { year: "2023", permits: 4100, completions: 3700, note: "Strong completion rate" },
              { year: "2022", permits: 3800, completions: 3400, note: "Post-COVID recovery"    },
            ].map(r => (
              <div key={r.year} className="rounded-xl p-3.5" style={{ background: "rgba(255,249,235,0.90)", border: "1px solid rgba(160,130,90,0.20)" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[12px] font-bold" style={{ color: "#2D1F0F" }}>{r.year}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(5,150,105,0.12)", color: "#047857" }}>{r.note}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[10px]" style={{ color: "rgba(45,31,15,0.42)" }}>Permits issued</p>
                    <p className="text-[14px] font-bold" style={{ color: "#D97706" }}>{r.permits.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px]" style={{ color: "rgba(45,31,15,0.42)" }}>Completions</p>
                    <p className="text-[14px] font-bold" style={{ color: "#EA580C" }}>{r.completions.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl flex items-start gap-2" style={{ background: "rgba(8,145,178,0.07)", border: "1px solid rgba(8,145,178,0.18)" }}>
            <Info size={13} style={{ color: "#0891B2", marginTop: 2, flexShrink: 0 }} />
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(45,31,15,0.58)" }}>
              The gap between permits and completions (averaging ~800/year) is largely due to
              labour shortages in the construction sector and planning approval delays.
            </p>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}
