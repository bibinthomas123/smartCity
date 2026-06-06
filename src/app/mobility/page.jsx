import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { modalSplit } from "@/lib/mockData";
import MobilityCharts from "./MobilityCharts";
import { Train, Bicycle, TrendUp, Leaf, Info, Bus } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { label: "Monthly Riders",    value: "8.2M",   sub: "MVB tram & bus network",   color: "#06B6D4" },
  { label: "On-Time Rate",      value: "89.6%",  sub: "+0.8pp vs Q2 2024",        color: "#10B981" },
  { label: "Avg. Delay",        value: "3.1 min",sub: "City trams & buses",        color: "#06B6D4" },
  { label: "Cycling Trips/Day", value: "28,000", sub: "+14% since 2022",           color: "#06B6D4" },
];

const insights = [
  {
    icon: Train,
    title: "MVB: one of Germany's oldest tram networks",
    body: "The Magdeburger Verkehrsbetriebe (MVB) has been running trams since 1877 â€” making it one of the longest continuously operating tram systems in Germany. Today it operates 12 tram lines and over 30 bus routes, covering 240+ stops. The network carries over 98 million passengers per year.",
    accent: "#06B6D4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.20)",
  },
  {
    icon: Bicycle,
    title: "Cycling fast becoming the second choice",
    body: "Magdeburg has invested heavily in its cycling infrastructure since 2018 â€” over 300 km of cycle paths now cover the city, including the Elbe Cycle Route (EuroVelo 3). Daily cycling trips have risen 14% since 2022. The city targets 15% modal share for cycling by 2030, up from the current 9%.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
  {
    icon: Leaf,
    title: "On course for climate-neutral transport by 2035",
    body: "The city is electrifying its bus fleet, with 40% of buses now electric or hybrid. All new tram rolling stock is zero-emission. Combined with the growing cycling mode share and continued ridership growth on public transit, Magdeburg aims to reduce transport-related COâ‚‚ by 55% by 2035 vs a 2015 baseline.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
];

const tramLines = [
  { line: "1",  route: "MessegelÃ¤nde â†” Sudenburg",        freq: "10 min", riders: "high"   },
  { line: "2",  route: "Europaplatz â†” Alte Neustadt",     freq: "10 min", riders: "high"   },
  { line: "4",  route: "Hasselbachplatz â†” Barleber See",  freq: "15 min", riders: "medium" },
  { line: "6",  route: "JacobstraÃŸe â†” NeustÃ¤dter See",    freq: "12 min", riders: "high"   },
  { line: "8",  route: "Cracauer StraÃŸe â†” Barleber See",  freq: "20 min", riders: "medium" },
  { line: "10", route: "Hauptbahnhof â†” Reform",           freq: "10 min", riders: "high"   },
];

export default function MobilityPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Mobility"
        subtitle="Public transport, traffic congestion, and modal split across Magdeburg."
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

      {/* â”€â”€ Overview â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <GlassCard className="p-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(15,23,42,0.40)" }}>Overview</p>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>
              Getting around Magdeburg â€” trams, bikes, and everything in between
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>
              Magdeburg's transport network is anchored by its historic tram system, managed by
              the <strong style={{ color: "#06B6D4" }}>MVB (Magdeburger Verkehrsbetriebe)</strong>.
              With 12 tram lines and 30+ bus routes, the network is one of the densest for a city of its
              size in Germany. The main hub is Magdeburg Hauptbahnhof (central station), which also
              connects regional trains to Berlin (60 min), Halle, and Hanover.
            </p>
            <p className="text-[13.5px] leading-relaxed mt-3" style={{ color: "rgba(15,23,42,0.68)" }}>
              Car use remains significant (34% modal share) but is declining year on year as cycling
              infrastructure improves and MVB ridership grows. The city&rsquo;s 2030 mobility plan
              targets a 10-point shift from private cars to public transit and cycling.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Tram lines",      value: "12",       note: "147 km of track"          },
              { label: "Bus routes",       value: "30+",      note: "Citywide coverage"         },
              { label: "Network age",      value: "147 yrs",  note: "Operating since 1877"      },
              { label: "Annual riders",    value: "98M+",     note: "All MVB services combined" },
            ].map(f => (
              <div key={f.label} className="rounded-xl p-3.5" style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.18)" }}>
                <p className="text-[16px] font-bold" style={{ color: "#06B6D4" }}>{f.value}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#06B6D4" }}>{f.label}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "rgba(15,23,42,0.44)" }}>{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* â”€â”€ Charts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <MobilityCharts />

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

      {/* â”€â”€ Modal split + Tram lines â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>How Magdeburgers Travel</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>Modal split Â· 2024 survey</p>
          <div className="space-y-3">
            {modalSplit.map((m) => (
              <div key={m.name} className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: m.color }} />
                <p className="text-[12.5px] flex-1" style={{ color: "rgba(15,23,42,0.62)" }}>{m.name}</p>
                <div className="w-48 rounded-full overflow-hidden" style={{ background: "rgba(148,163,184,0.12)", height: 6 }}>
                  <div className="h-full rounded-full" style={{ width: `${m.value * 2.5}%`, background: m.color }} />
                </div>
                <p className="text-[12px] font-semibold w-10 text-right" style={{ color: "rgba(15,23,42,0.74)" }}>{m.value}%</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3.5 rounded-xl" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}>
            <p className="text-[12px] font-semibold mb-1" style={{ color: "#10B981" }}>2030 target</p>
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(15,23,42,0.60)" }}>
              City plan aims for Public Transit 44% / Cycling 15% / Car 25% â€” a major modal
              shift requiring continued investment in network reliability and cycling infrastructure.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>Key Tram Lines</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>MVB tram network Â· selected lines</p>
          <div className="space-y-2.5">
            {tramLines.map((t) => (
              <div key={t.line} className="flex items-center gap-3 rounded-xl px-3.5 py-3"
                style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(148,163,184,0.18)" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold text-white"
                  style={{ background: "#06B6D4" }}>
                  {t.line}
                </div>
                <p className="text-[12px] flex-1" style={{ color: "rgba(15,23,42,0.70)" }}>{t.route}</p>
                <span className="text-[10px] font-semibold shrink-0 px-2 py-0.5 rounded-full"
                  style={{ background: t.riders === "high" ? "rgba(6,182,212,0.12)" : "rgba(37,99,235,0.12)",
                           color: t.riders === "high" ? "#06B6D4" : "#2563EB" }}>
                  every {t.freq}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 p-3 rounded-xl" style={{ background: "rgba(6,182,212,0.07)", border: "1px solid rgba(6,182,212,0.18)" }}>
            <Info size={13} style={{ color: "#06B6D4", marginTop: 2, flexShrink: 0 }} />
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(15,23,42,0.62)" }}>
              A â‚¬180M tram network expansion is planned for 2026â€“2030, adding two new lines to
              the northern and eastern districts.
            </p>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}

