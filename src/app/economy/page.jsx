import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import EconomyCharts from "./EconomyCharts";
import { ChartBar, Factory, TrendUp, Buildings, Info, Briefcase } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { label: "Employment Rate",     value: "95.8%",  sub: "Strong market 2024",  color: "#D97706" },
  { label: "GDP Growth",          value: "2.1%",   sub: "+0.4pp vs 2023",      color: "#C17F24" },
  { label: "New Businesses",      value: "1,820",  sub: "+6.2% vs 2023",       color: "#EA580C" },
  { label: "Median Household €",  value: "€38,900",sub: "+3.8% real growth",   color: "#D97706" },
];

const sectors = [
  { name: "Services",          share: 48, color: "#D97706", note: "Healthcare, retail, finance, public sector" },
  { name: "Manufacturing",     share: 20, color: "#EA580C", note: "Engineering, chemicals, food processing"    },
  { name: "Technology",        share: 12, color: "#C17F24", note: "Software, biotech, research institutes"    },
  { name: "Retail & Trade",    share: 11, color: "#F59E0B", note: "City centre & online retail logistics"     },
  { name: "Construction",      share: 6,  color: "#B45309", note: "Booming residential & infrastructure"      },
  { name: "Other",             share: 3,  color: "#78716C", note: "Agriculture, arts, other"                  },
];

const insights = [
  {
    icon: TrendUp,
    title: "Full employment within reach",
    body: "With an employment rate of 95.8%, Magdeburg is approaching structural full employment. This is a remarkable turnaround from the 1990s, when unemployment topped 25% after the collapse of GDR industry. The labour market is now so tight that many companies report skills shortages as the primary brake on growth.",
    accent: "#D97706",
    bg: "rgba(215,119,6,0.07)",
    border: "rgba(215,119,6,0.20)",
  },
  {
    icon: Factory,
    title: "Manufacturing remains the backbone",
    body: "Despite the shift towards services, manufacturing still employs 20% of the workforce. Key employers include Getec (energy), SKET (engineering), Pflüger Präzisionsteile (precision parts), and a cluster of automotive supply-chain firms. The Otto von Guericke University has helped attract technology spin-offs and biomedical firms.",
    accent: "#EA580C",
    bg: "rgba(234,88,12,0.07)",
    border: "rgba(234,88,12,0.20)",
  },
  {
    icon: Buildings,
    title: "New business formation accelerating",
    body: "6,100 new businesses were registered in 2024 — the highest since records began. Technology and creative services account for a growing share of new registrations. The city's startup ecosystem is supported by several incubators including the Technologietransfer- und Innovationszentrums Magdeburg (TIZMD).",
    accent: "#C17F24",
    bg: "rgba(193,127,36,0.07)",
    border: "rgba(193,127,36,0.20)",
  },
];

const employers = [
  { name: "University Hospital (UKM)",    sector: "Healthcare",    employees: "~7,500", note: "Largest single employer"       },
  { name: "Otto von Guericke University", sector: "Education",     employees: "~4,800", note: "Staff + research"               },
  { name: "Getec Energie",               sector: "Energy",        employees: "~3,200", note: "Heat & energy infrastructure"   },
  { name: "DB Cargo / Deutsche Bahn",    sector: "Logistics",     employees: "~2,800", note: "Inland port & rail hub"         },
  { name: "SKET Engineering",            sector: "Manufacturing", employees: "~1,600", note: "Heavy machinery & plant eng."   },
  { name: "Volkswagen supply chain",     sector: "Auto",          employees: "~2,100", note: "Multiple Tier-1/2 suppliers"    },
];

export default function EconomyPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Economy"
        subtitle="Employment, GDP growth, business activity, and sector breakdown for Magdeburg."
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
              From post-reunification crisis to a diversified modern economy
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,31,15,0.62)" }}>
              Magdeburg&rsquo;s economy was devastated by the collapse of the GDR&rsquo;s planned economy
              in 1990. Unemployment peaked above 25% and the city lost a third of its population.
              Three decades of patient investment in infrastructure, education, and economic
              diversification have transformed it into a stable, growing regional economy.
            </p>
            <p className="text-[13.5px] leading-relaxed mt-3" style={{ color: "rgba(45,31,15,0.62)" }}>
              Today Magdeburg is the economic centre of Saxony-Anhalt, home to a <strong style={{ color: "#D97706" }}>major
              inland port on the Elbe</strong>, a leading research university, a large healthcare cluster,
              and a growing technology and clean-energy sector. The median household income of
              €38,900 still trails the national average but has grown faster than any period since
              reunification.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Unemployment 1990",    value: ">25%",    note: "Post-reunification crisis"  },
              { label: "Unemployment 2024",    value: "4.2%",    note: "Below national average"     },
              { label: "Inland port rank",      value: "#3 DE",   note: "By cargo tonnage"           },
              { label: "R&D investment",        value: "€420M",   note: "Annual (public + private)"  },
            ].map(f => (
              <div key={f.label} className="rounded-xl p-3.5" style={{ background: "rgba(215,119,6,0.08)", border: "1px solid rgba(215,119,6,0.18)" }}>
                <p className="text-[16px] font-bold" style={{ color: "#D97706" }}>{f.value}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#D97706" }}>{f.label}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "rgba(45,31,15,0.42)" }}>{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* ── Charts ────────────────────────────────────────────────────────── */}
      <EconomyCharts />

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

      {/* ── Sectors + Major employers ─────────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Employment by Sector</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.38)" }}>Share of workforce · 2024</p>
          <div className="space-y-3">
            {sectors.map((s) => (
              <div key={s.name}>
                <div className="flex items-center gap-4 mb-0.5">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }} />
                  <p className="text-[12.5px] flex-1 font-medium" style={{ color: "rgba(45,31,15,0.65)" }}>{s.name}</p>
                  <div className="w-40 rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.12)", height: 6 }}>
                    <div className="h-full rounded-full" style={{ width: `${s.share * 2}%`, background: s.color }} />
                  </div>
                  <p className="text-[12px] font-semibold w-8 text-right" style={{ color: "rgba(45,31,15,0.70)" }}>{s.share}%</p>
                </div>
                <p className="text-[11px] pl-6" style={{ color: "rgba(45,31,15,0.38)" }}>{s.note}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Major Employers</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.38)" }}>Top employers by headcount · 2024</p>
          <div className="space-y-2.5">
            {employers.map((e, i) => (
              <div key={e.name} className="flex items-start gap-3 rounded-xl px-3.5 py-3"
                style={{ background: "rgba(255,249,235,0.90)", border: "1px solid rgba(160,130,90,0.20)" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                  style={{ background: "rgba(215,119,6,0.15)", color: "#D97706" }}>{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12.5px] font-semibold" style={{ color: "#2D1F0F" }}>{e.name}</p>
                  <p className="text-[11px]" style={{ color: "rgba(45,31,15,0.45)" }}>{e.sector} · {e.note}</p>
                </div>
                <p className="text-[12px] font-bold shrink-0" style={{ color: "#D97706" }}>{e.employees}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 p-3 rounded-xl" style={{ background: "rgba(193,127,36,0.07)", border: "1px solid rgba(193,127,36,0.18)" }}>
            <Info size={13} style={{ color: "#A36318", marginTop: 2, flexShrink: 0 }} />
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(45,31,15,0.58)" }}>
              Intel&rsquo;s planned €17B semiconductor fab near Magdeburg is expected to add
              ~3,000 direct jobs and up to 10,000 supply-chain roles by 2030.
            </p>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}
