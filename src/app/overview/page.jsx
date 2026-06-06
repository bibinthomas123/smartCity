import {
  kpis, trendingInsights, recentActivity, featuredDatasets, cityHealthScore,
} from "@/lib/mockData";
import GlassCard from "@/components/ui/GlassCard";
import KpiCard from "@/components/ui/KpiCard";
import CategoryBadge from "@/components/ui/CategoryBadge";
import OverviewCharts from "./OverviewCharts";
import { ArrowRight, Database, Clock } from "@phosphor-icons/react/dist/ssr";

function HealthRing({ score }) {
  const r = 80;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ - (circ * score) / 100;

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90">
      <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(148,163,184,0.16)" strokeWidth="12" />
      <circle
        cx="100" cy="100" r={r}
        fill="none"
        stroke="url(#scoreGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={dashOffset}
      />
      <defs>
        <linearGradient id="scoreGrad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function OverviewPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section>
        <GlassCard
          className="relative overflow-hidden p-8"
          style={{
            background: "linear-gradient(135deg, rgba(239,246,255,0.95) 0%, rgba(224,242,254,0.90) 50%, rgba(240,253,250,0.85) 100%)",
            border: "1px solid rgba(37,99,235,0.28)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: "rgba(37,99,235,0.15)" }} />
            <div className="absolute -bottom-16 left-48 w-48 h-48 rounded-full blur-3xl" style={{ background: "rgba(239,68,68,0.10)" }} />
            <div className="absolute top-10 right-24 w-40 h-40 rounded-full blur-3xl" style={{ background: "rgba(16,185,129,0.08)" }} />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="relative shrink-0">
              <HealthRing score={cityHealthScore} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[40px] font-bold leading-none" style={{ color: "#0F172A" }}>{cityHealthScore}</p>
                <p className="text-[11px] font-medium mt-1 tracking-wide uppercase" style={{ color: "rgba(15,23,42,0.54)" }}>City Score</p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase mb-3" style={{ color: "#2563EB" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2563EB" }} />
                Live Dashboard
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight" style={{ color: "#0F172A" }}>
                Magdeburg City<br />
                <span className="gradient-text">Health Report 2024</span>
              </h1>
              <p className="mt-3 text-[14px] max-w-sm leading-relaxed" style={{ color: "rgba(15,23,42,0.60)" }}>
                Comprehensive overview of city performance across 6 key domains â€” updated December 2024.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium"
                  style={{ color: "#10B981", background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.22)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
                  98.2% Uptime
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium"
                  style={{ color: "#2563EB", background: "rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.22)" }}>
                  17 Active Datasets
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium"
                  style={{ color: "rgba(15,23,42,0.54)", background: "rgba(15,23,42,0.04)", border: "1px solid rgba(15,23,42,0.08)" }}>
                  Dec 2024 data
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* â”€â”€ KPI Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.id} {...kpi} />
          ))}
        </div>
      </section>

      {/* â”€â”€ Trending Insights + Recent Activity â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "rgba(15,23,42,0.42)" }}>
            Trending Insights
          </h2>
          {trendingInsights.map((ins, i) => (
            <GlassCard key={i} className="p-5 group cursor-pointer transition-all duration-200"
              style={{ border: "1px solid rgba(148,163,184,0.20)" }}>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-2 h-2 rounded-full" style={{ background: ins.badge }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <p className="text-[14px] font-semibold" style={{ color: "#0F172A" }}>{ins.title}</p>
                    <CategoryBadge category={ins.category} />
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(15,23,42,0.54)" }}>{ins.body}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 mt-0.5 transition-colors" style={{ color: "rgba(15,23,42,0.22)" }} />
              </div>
            </GlassCard>
          ))}
        </div>

        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(15,23,42,0.42)" }}>
            Recent Updates
          </h2>
          <GlassCard className="overflow-hidden">
            <ul>
              {recentActivity.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 px-5 py-3.5 border-b last:border-b-0"
                  style={{ borderColor: "rgba(148,163,184,0.16)" }}
                >
                  <Clock size={13} className="mt-0.5 shrink-0" style={{ color: "rgba(15,23,42,0.30)" }} />
                  <div className="min-w-0">
                    <p className="text-[12.5px] leading-snug" style={{ color: "rgba(15,23,42,0.70)" }}>{item.event}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(15,23,42,0.36)" }}>{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* â”€â”€ Interactive Charts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <OverviewCharts />

      {/* â”€â”€ Featured Datasets â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "rgba(15,23,42,0.42)" }}>
            Featured Datasets
          </h2>
          <a href="/explorer" className="text-[12px] flex items-center gap-1 transition-colors" style={{ color: "#2563EB" }}>
            View all <ArrowRight size={12} />
          </a>
        </div>
        <GlassCard>
          <div className="divide-y" style={{ borderColor: "rgba(148,163,184,0.16)" }}>
            {featuredDatasets.map((ds, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 transition-colors cursor-pointer group hover:bg-blue-50/60">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.22)" }}
                >
                  <Database size={14} style={{ color: "#2563EB" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-medium truncate transition-colors" style={{ color: "rgba(15,23,42,0.78)" }}>
                    {ds.label}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(15,23,42,0.40)" }}>
                    {ds.rows} rows Â· Updated {ds.lastUpdated}
                  </p>
                </div>
                <CategoryBadge category={ds.category} />
                <ArrowRight size={14} className="transition-colors shrink-0" style={{ color: "rgba(15,23,42,0.22)" }} />
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

    </div>
  );
}

