import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import {
  Database, Globe, ShieldCheck, Lightning, GitBranch, Heart,
} from "@phosphor-icons/react/dist/ssr";

const dataSources = [
  { name: "National Statistics Office",  type: "Population & Demographics", freq: "Annual"    },
  { name: "City Housing Authority",       type: "Housing & Construction",    freq: "Quarterly" },
  { name: "Urban Mobility Department",    type: "Transit & Traffic",         freq: "Monthly"   },
  { name: "Environmental Agency",         type: "Emissions & Air Quality",   freq: "Monthly"   },
  { name: "Labour Market Agency",         type: "Employment & Economy",      freq: "Quarterly" },
  { name: "Ministry of Education",        type: "Schools & Enrollment",      freq: "Annual"    },
];

const freqColors = {
  Annual:    { bg: "rgba(45,31,15,0.06)",         text: "rgba(45,31,15,0.45)",   border: "rgba(45,31,15,0.14)"    },
  Quarterly: { bg: "rgba(193,127,36,0.10)",        text: "#A36318",               border: "rgba(193,127,36,0.22)"  },
  Monthly:   { bg: "rgba(5,150,105,0.10)",         text: "#059669",               border: "rgba(5,150,105,0.22)"   },
};

export default function AboutPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-10 max-w-5xl mx-auto">

      <PageHeader
        title="About CityPulse"
        subtitle="Open city data for Magdeburg — rigorously collected and beautifully presented."
      />

      {/* Mission hero */}
      <GlassCard
        className="p-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(240,215,155,0.80) 0%, rgba(220,195,140,0.80) 100%)",
          border: "1px solid rgba(193,127,36,0.28)",
        }}
      >
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(193,127,36,0.18)" }} />
        <div className="relative">
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C17F24, #E8963A)" }}
            >
              <Lightning size={15} weight="fill" className="text-white" />
            </div>
            <p className="text-[13px] font-semibold" style={{ color: "#A36318" }}>Our Mission</p>
          </div>
          <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: "rgba(45,31,15,0.75)" }}>
            CityPulse makes Magdeburg&rsquo;s city data accessible to everyone — residents, researchers, policymakers,
            and journalists. We believe transparent, beautiful data empowers better decisions and
            healthier cities.
          </p>
        </div>
      </GlassCard>

      {/* Methodology */}
      <section>
        <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(45,31,15,0.40)" }}>
          Data Methodology
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Database, title: "Data Collection", body: "Raw datasets are sourced from municipal and national agencies via official APIs and open data portals." },
            { icon: ShieldCheck, title: "Validation", body: "Automated checks flag outliers, missing values, and inconsistencies. Anomalies are reviewed manually." },
            { icon: Globe, title: "Normalisation", body: "Values are standardised across years, adjusted for boundary changes, and converted to consistent units." },
            { icon: GitBranch, title: "Version Control", body: "Every dataset version is tracked. Users can access historical snapshots for full reproducibility." },
          ].map(({ icon: Icon, title, body }) => (
            <GlassCard key={title} className="p-5 flex gap-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(193,127,36,0.10)", border: "1px solid rgba(193,127,36,0.22)" }}>
                <Icon size={17} style={{ color: "#C17F24" }} />
              </div>
              <div>
                <p className="text-[14px] font-semibold mb-1.5" style={{ color: "#2D1F0F" }}>{title}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(45,31,15,0.50)" }}>{body}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Data sources */}
      <section>
        <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(45,31,15,0.40)" }}>
          Data Sources
        </h2>
        <GlassCard>
          <ul className="divide-y" style={{ borderColor: "rgba(160,130,90,0.18)" }}>
            {dataSources.map((src) => {
              const scheme = freqColors[src.freq];
              return (
                <li key={src.name} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-[13.5px] font-medium" style={{ color: "rgba(45,31,15,0.78)" }}>{src.name}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(45,31,15,0.40)" }}>{src.type}</p>
                  </div>
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0"
                    style={{ background: scheme.bg, color: scheme.text, border: `1px solid ${scheme.border}` }}
                  >
                    {src.freq}
                  </span>
                </li>
              );
            })}
          </ul>
        </GlassCard>
      </section>

      {/* License */}
      <GlassCard className="p-6">
        <div className="flex items-start gap-4">
          <Heart size={18} className="shrink-0 mt-0.5" style={{ color: "#E11D48" }} />
          <div>
            <p className="text-[14px] font-semibold mb-2" style={{ color: "#2D1F0F" }}>Open Data License</p>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,31,15,0.52)" }}>
              All datasets on CityPulse are published under the{" "}
              <span style={{ color: "#A36318" }}>Creative Commons Attribution 4.0 (CC BY 4.0)</span>{" "}
              license. You are free to share and adapt the data for any purpose, provided you
              give appropriate credit to the city data authorities.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full font-medium"
                style={{ background: "rgba(45,31,15,0.06)", color: "rgba(45,31,15,0.45)", border: "1px solid rgba(45,31,15,0.12)" }}>
                v2.4.0
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full font-medium"
                style={{ background: "rgba(5,150,105,0.10)", color: "#059669", border: "1px solid rgba(5,150,105,0.22)" }}>
                CC BY 4.0
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full font-medium"
                style={{ background: "rgba(45,31,15,0.06)", color: "rgba(45,31,15,0.45)", border: "1px solid rgba(45,31,15,0.12)" }}>
                December 2024
              </span>
            </div>
          </div>
        </div>
      </GlassCard>

    </div>
  );
}
