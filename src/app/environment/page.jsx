import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { energyMix } from "@/lib/mockData";
import EnvironmentCharts from "./EnvironmentCharts";
import { Leaf, Drop, Sun, Wind, TrendDown, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr";
import WasteSortingGuide from "./WasteSortingGuide";

const stats = [
  { label: "Sustainability Score", value: "72/100", sub: "+5 pts this year",  color: "#10B981" },
  { label: "Renewable Energy",     value: "64%",    sub: "Of total mix",      color: "#10B981" },
  { label: "Avg. AQI (2024)",      value: "33",     sub: "Good Â· WHO target", color: "#10B981" },
  { label: "Green Space",          value: "~50%",   sub: "Of total city area",color: "#10B981" },
];

const aqiScale = [
  { label: "Good",       range: "0â€“50",   color: "#10B981", note: "Magdeburg avg: 33" },
  { label: "Moderate",   range: "51â€“100", color: "#F59E0B", note: ""                  },
  { label: "Unhealthy",  range: "101â€“150",color: "#EF4444", note: ""                  },
  { label: "Hazardous",  range: "151+",   color: "#EF4444", note: ""                  },
];

const insights = [
  {
    icon: TrendDown,
    title: "COâ‚‚ down 31% since 2015",
    body: "Magdeburg has reduced annual COâ‚‚ emissions from 3.8 million tonnes in 2015 to 2.63 million tonnes in 2024 â€” a reduction of 31%. The main drivers are the shift to renewable energy (solar & wind capacity expanded 4Ã—), improved building insulation, and declining car usage in the city centre.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
  {
    icon: Sun,
    title: "Leading Germany in solar expansion",
    body: "Solar now accounts for 28% of Magdeburg's energy mix â€” the highest share of any Saxony-Anhalt city. The Elbauenpark solar field and large rooftop installations on industrial buildings in the north of the city have been key. The city plan targets 40% solar by 2030.",
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.20)",
  },
  {
    icon: Leaf,
    title: "~50% of city land is green space",
    body: "Magdeburg has one of the highest ratios of green space to urban land area of any German city. The 100-hectare Elbauenpark, the vast Herrenkrug meadows and forest, the Stadtpark, and riverside Elbe corridors together ensure virtually every resident lives within 500 metres of a green area.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
];

const greenAreas = [
  { name: "Elbauenpark",       size: "100 ha", note: "Built for 1999 Bundesgartenschau"       },
  { name: "Herrenkrug Park",   size: "200 ha", note: "Largest green space, forest & meadow"   },
  { name: "Stadtpark SÃ¼d",     size: "35 ha",  note: "Newly opened 2022, river promenade"     },
  { name: "Rotehorn Park",     size: "80 ha",  note: "Island park in the Elbe, cycle paths"   },
  { name: "Magdeburg Zoo",     size: "28 ha",  note: "Wildlife & conservation education"       },
  { name: "Cracau floodplain", size: "120 ha", note: "Protected Elbe floodplain habitat"      },
];

export default function EnvironmentPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Environment"
        subtitle="Sustainability indicators, air quality, emissions, and green energy mix for Magdeburg."
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
              Die grÃ¼ne Stadt am Fluss â€” The Green City by the River
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>
              Magdeburg has built its modern identity around its extraordinary relationship with
              nature. With nearly <strong style={{ color: "#10B981" }}>50% of the city&rsquo;s 201 kmÂ² designated as green space</strong>,
              it is one of the most generously parked cities in the country. The Elbe River and its
              flood meadows run through the city heart, providing natural cooling, biodiversity
              corridors, and recreational space for hundreds of thousands of people.
            </p>
            <p className="text-[13.5px] leading-relaxed mt-3" style={{ color: "rgba(15,23,42,0.68)" }}>
              On the climate side, the city has made significant strides since joining Germany&rsquo;s
              national climate protection programme. Renewable energy now accounts for 64% of the
              city&rsquo;s supply â€” 16 percentage points above the German national average.
              Air quality is consistently rated &ldquo;Good&rdquo; by WHO standards.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { icon: Leaf, label: "Green space coverage", value: "~100 kmÂ²",  note: "Parks, forests & river meadows",    color: "#10B981" },
              { icon: Sun,  label: "Solar capacity",        value: "580 MWp",   note: "4Ã— growth since 2015",              color: "#F59E0B" },
              { icon: Wind, label: "Wind energy share",     value: "22%",       note: "Of local electricity generation",   color: "#06B6D4" },
              { icon: Drop, label: "Elbe water quality",   value: "Class II",  note: "Good ecological status (EU WFD)",   color: "#10B981" },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-3 rounded-xl p-3.5"
                style={{ background: `${f.color}12`, border: `1px solid ${f.color}28` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${f.color}30` }}>
                  <f.icon size={15} weight="fill" style={{ color: f.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px]" style={{ color: "rgba(15,23,42,0.54)" }}>{f.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(15,23,42,0.40)" }}>{f.note}</p>
                </div>
                <p className="text-[14px] font-bold shrink-0" style={{ color: f.color }}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* â”€â”€ Charts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <EnvironmentCharts />

      <WasteSortingGuide />

      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>Energy Source Breakdown</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>Local generation mix Â· 2024</p>
          <div className="space-y-3">
            {energyMix.map((e) => (
              <div key={e.name} className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: e.color }} />
                <p className="text-[12.5px] flex-1" style={{ color: "rgba(15,23,42,0.62)" }}>{e.name}</p>
                <div className="w-36 rounded-full overflow-hidden" style={{ background: "rgba(148,163,184,0.12)", height: 6 }}>
                  <div className="h-full rounded-full" style={{ width: `${e.value * 3}%`, background: e.color }} />
                </div>
                <p className="text-[12px] font-semibold w-8 text-right" style={{ color: "rgba(15,23,42,0.74)" }}>{e.value}%</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3.5 rounded-xl" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}>
            <p className="text-[12px] font-semibold mb-1" style={{ color: "#059669" }}>Renewables trajectory</p>
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(15,23,42,0.60)" }}>
              Solar + Wind + Hydro = <strong>64%</strong> combined â€” 16pp above the German national average.
              The 2030 climate plan targets 80% renewable, requiring ~400 MWp of additional solar capacity
              and two new wind farms on the city outskirts.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>Air Quality & Green Spaces</p>
          <p className="text-[11px] mb-4" style={{ color: "rgba(15,23,42,0.40)" }}>AQI scale + major parks</p>
          <div className="space-y-2.5 mb-5">
            {aqiScale.map((a) => (
              <div key={a.label} className="flex items-center gap-4 rounded-lg px-3 py-2.5"
                style={{ background: a.color + "10", border: `1px solid ${a.color}25` }}>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: a.color }} />
                <p className="text-[13px] flex-1 font-medium" style={{ color: "rgba(15,23,42,0.74)" }}>{a.label}</p>
                <p className="text-[11px] font-mono" style={{ color: "rgba(15,23,42,0.44)" }}>{a.range}</p>
                {a.note && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: a.color + "20", color: a.color }}>{a.note}</span>}
              </div>
            ))}
          </div>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(15,23,42,0.36)" }}>Major Green Areas</p>
          <div className="space-y-2">
            {greenAreas.map(g => (
              <div key={g.name} className="flex items-center gap-3">
                <Leaf size={11} weight="fill" style={{ color: "#10B981", flexShrink: 0 }} />
                <p className="text-[12px] flex-1" style={{ color: "rgba(15,23,42,0.70)" }}>{g.name}
                  <span className="ml-1 text-[10px]" style={{ color: "rgba(15,23,42,0.40)" }}>â€” {g.note}</span>
                </p>
                <span className="text-[11px] font-semibold" style={{ color: "#10B981" }}>{g.size}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

    </div>
  );
}

