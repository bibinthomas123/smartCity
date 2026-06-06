import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { populationHistory, ageGroups, migrationData } from "@/lib/mockData";
import PeopleCharts from "./PeopleCharts";
import {
  Users, ArrowUp, ArrowDown, TrendUp, WarningCircle, Info,
} from "@phosphor-icons/react/dist/ssr";

const latest   = populationHistory[populationHistory.length - 1];
const prev     = populationHistory[populationHistory.length - 2];
const earliest = populationHistory[0];
const growthPct = (((latest.total - prev.total) / prev.total) * 100).toFixed(1);

const stats = [
  { label: "Total Population",   value: "237,765",      sub: `+${growthPct}% YoY`,   color: "#10B981" },
  { label: "Male / Female",      value: "48.8% / 51.2%",sub: "Gender split",          color: "#06B6D4" },
  { label: "Population Density", value: "1,183",        sub: "residents per kmÂ²",     color: "#14B8A6" },
  { label: "Median Age",         value: "44.1",         sub: "+0.6 years vs 2023",    color: "#10B981" },
];

const insights = [
  {
    icon: TrendUp,
    title: "Steady recovery after reunification dip",
    body: "Magdeburg's population peaked at around 290,000 in 1990. Deindustrialisation and outmigration after reunification drove numbers down to a low of ~228,000 in 2012. Since then the city has reversed the trend â€” growing by almost 10,000 residents over the last decade.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
  {
    icon: Users,
    title: "Immigration is the main growth driver",
    body: "Natural growth (births minus deaths) has been near zero or negative since 2010, reflecting Germany's nationwide demographic trend. Nearly all of the net population gain comes from inward migration â€” primarily from Eastern Europe, MENA countries, and other German federal states seeking lower living costs.",
    accent: "#06B6D4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.20)",
  },
  {
    icon: WarningCircle,
    title: "Ageing population is the key challenge",
    body: "With a median age of 44.1 â€” above the national median of 44.6 â€” Magdeburg's demographic pyramid is top-heavy. Over 18% of residents are 65 or older. This places pressure on healthcare, care services, and pension systems, while reducing the working-age labour pool.",
    accent: "#EF4444",
    bg: "rgba(239,68,68,0.07)",
    border: "rgba(239,68,68,0.20)",
  },
];

const migrationFacts = [
  { label: "Arrivals 2024",     value: "54,000", delta: "+6%",  up: true  },
  { label: "Departures 2024",   value: "36,000", delta: "+3%",  up: false },
  { label: "Net gain 2024",     value: "+18,000",delta: "+3k",  up: true  },
  { label: "Foreign nationals", value: "15.8%",  delta: "+1.2pp",up: true },
];

export default function PeoplePage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="People"
        subtitle="Population demographics, migration flows, and long-term trends for Magdeburg."
      />

      {/* â”€â”€ KPI cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <GlassCard key={s.label} className="p-5">
            <p className="text-[12px] mb-2" style={{ color: "rgba(15,23,42,0.48)" }}>{s.label}</p>
            <p className="text-[22px] font-bold leading-none" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[11px] mt-1.5" style={{ color: "rgba(15,23,42,0.42)" }}>{s.sub}</p>
          </GlassCard>
        ))}
      </div>

      {/* â”€â”€ Overview banner â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <GlassCard className="p-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(15,23,42,0.40)" }}>Overview</p>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>
              A city rebuilding its population after the reunification era
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>
              Magdeburg is home to <strong style={{ color: "#10B981" }}>237,765 people</strong> as of 2024,
              making it the largest city in Saxony-Anhalt and the 15th-largest city in Germany.
              After losing nearly 60,000 residents between 1990 and 2012 â€” a direct consequence of
              post-reunification deindustrialisation â€” the city has been on a consistent growth
              trajectory for over a decade.
            </p>
            <p className="text-[13.5px] leading-relaxed mt-3" style={{ color: "rgba(15,23,42,0.68)" }}>
              The turnaround has been driven by urban renewal investment, a growing university
              community, and increasing inward migration. The population is distributed across
              40 districts (Stadtteile), with the highest densities in Altstadt, Stadtfeld, and
              Sudenburg.
            </p>
          </div>
          {/* Mini stat strip */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Peak population",    value: "~290k",   sub: "1990, before reunification" },
              { label: "Low point",          value: "~228k",   sub: "2012, after deindustrial." },
              { label: "Growth since 2012",  value: "+9,765",  sub: "net gain over 12 years"    },
              { label: "Population in 2010", value: "1.62M",   sub: "Metro region estimate"     },
            ].map(f => (
              <div key={f.label} className="rounded-xl p-3.5" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <p className="text-[16px] font-bold" style={{ color: "#10B981" }}>{f.value}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#10B981" }}>{f.label}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "rgba(15,23,42,0.44)" }}>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* â”€â”€ Charts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PeopleCharts />

      {/* â”€â”€ Insight cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="grid lg:grid-cols-3 gap-5">
        {insights.map((ins) => (
          <div key={ins.title} className="rounded-2xl p-5" style={{ background: ins.bg, border: `1px solid ${ins.border}` }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ins.border}` }}>
                <ins.icon size={15} weight="fill" style={{ color: ins.accent }} />
              </div>
              <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>{ins.title}</p>
            </div>
            <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>{ins.body}</p>
          </div>
        ))}
      </div>

      {/* â”€â”€ Age distribution + Migration context â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Age bars */}
        <GlassCard className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[13px] font-semibold" style={{ color: "rgba(15,23,42,0.65)" }}>Age Distribution</p>
              <p className="text-[11px] mt-0.5" style={{ color: "rgba(15,23,42,0.40)" }}>Share of population by age group Â· 2024</p>
            </div>
          </div>
          <div className="space-y-3">
            {ageGroups.map((ag) => (
              <div key={ag.group} className="flex items-center gap-4">
                <p className="text-[12px] w-14 shrink-0" style={{ color: "rgba(15,23,42,0.56)" }}>{ag.group}</p>
                <div className="flex-1 rounded-full overflow-hidden" style={{ background: "rgba(148,163,184,0.12)", height: 7 }}>
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${ag.value * 3}%`, background: ag.color }} />
                </div>
                <p className="text-[12px] font-semibold w-10 text-right" style={{ color: ag.color }}>{ag.value}%</p>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 rounded-xl p-3" style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.18)" }}>
            <p className="text-[12px] font-semibold" style={{ color: "#EF4444" }}>Demographic note</p>
            <p className="text-[11.5px] mt-1 leading-snug" style={{ color: "rgba(15,23,42,0.60)" }}>
              The 25â€“44 working-age cohort (28.7%) is the largest, but the combined 45â€“80+ group
              (44.7%) already outnumbers them â€” a trend that will intensify over the next decade.
            </p>
          </div>
        </GlassCard>

        {/* Migration facts */}
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>Migration in Focus</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>Key figures for 2024</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {migrationFacts.map(f => (
              <div key={f.label} className="rounded-xl p-3.5" style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(148,163,184,0.18)" }}>
                <p className="text-[17px] font-bold" style={{ color: "#0F172A" }}>{f.value}</p>
                <p className="text-[11px] font-medium mt-0.5" style={{ color: "rgba(15,23,42,0.54)" }}>{f.label}</p>
                <div className="flex items-center gap-1 mt-1">
                  {f.up
                    ? <ArrowUp size={10} weight="bold" style={{ color: "#10B981" }} />
                    : <ArrowDown size={10} weight="bold" style={{ color: "#EF4444" }} />}
                  <span className="text-[10px] font-semibold" style={{ color: f.up ? "#10B981" : "#EF4444" }}>{f.delta} YoY</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3.5" style={{ background: "rgba(6,182,212,0.07)", border: "1px solid rgba(6,182,212,0.18)" }}>
            <div className="flex items-start gap-2">
              <Info size={14} style={{ color: "#06B6D4", marginTop: 2, flexShrink: 0 }} />
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(15,23,42,0.65)" }}>
                Magdeburg has become a preferred destination for migrants from Eastern Europe
                and MENA countries due to its relatively low cost of living, active labour market,
                and strong social services infrastructure.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* â”€â”€ Neighbourhood context â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <GlassCard className="p-6">
        <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(15,23,42,0.40)" }}>District Snapshot</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { name: "Altstadt",        pop: "~12,400",  density: "High",   note: "Historic core, major regeneration underway."        },
            { name: "Stadtfeld West",  pop: "~18,200",  density: "High",   note: "Most populous district, popular with families."     },
            { name: "Sudenburg",       pop: "~17,600",  density: "High",   note: "Vibrant mix of residents, great cafÃ© culture."      },
            { name: "Buckau",          pop: "~6,800",   density: "Medium", note: "Creative hub, rapidly gentrifying waterfront area." },
            { name: "Herrenkrug",      pop: "~3,100",   density: "Low",    note: "Green outer district, parkland & riverside living." },
            { name: "Neue Neustadt",   pop: "~14,500",  density: "Medium", note: "Post-war residential, ongoing urban renewal."       },
          ].map(d => (
            <div key={d.name} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(148,163,184,0.18)" }}>
              <div className="flex items-baseline justify-between mb-1.5">
                <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>{d.name}</p>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                  style={{ background: d.density === "High" ? "rgba(16,185,129,0.12)" : d.density === "Medium" ? "rgba(37,99,235,0.12)" : "rgba(16,185,129,0.12)",
                           color: d.density === "High" ? "#10B981" : d.density === "Medium" ? "#2563EB" : "#059669" }}>
                  {d.density} density
                </span>
              </div>
              <p className="text-[14px] font-semibold mb-1" style={{ color: "#10B981" }}>{d.pop}</p>
              <p className="text-[11.5px] leading-snug" style={{ color: "rgba(15,23,42,0.56)" }}>{d.note}</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}

