import GlassCard from "@/components/ui/GlassCard";
import PageHeader from "@/components/ui/PageHeader";
import { educationAttainment } from "@/lib/mockData";
import EducationCharts from "./EducationCharts";
import { GraduationCap, BookOpen, Laptop, TrendUp, Info, Flask } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { label: "School Enrollment",   value: "38,400", sub: "Primary + secondary 2024",  color: "#2563EB" },
  { label: "Tertiary Enrollment", value: "14,500", sub: "OVGU + other colleges",      color: "#06B6D4" },
  { label: "Literacy Rate",       value: "99.4%",  sub: "Adults 15+",                color: "#10B981" },
  { label: "Digital Skills",      value: "68%",    sub: "Basic proficiency 2024",     color: "#10B981" },
];

const insights = [
  {
    icon: GraduationCap,
    title: "OVGU: a world-class research university",
    body: "The Otto von Guericke University Magdeburg (OVGU) is the city's academic centrepiece. Founded in 1953, it has 14,500 students across nine faculties. Its engineering, medicine, and natural sciences faculties are ranked in the top 20 nationally. The university generates over â‚¬420M in research income annually and has 80+ active spin-off companies.",
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.07)",
    border: "rgba(37,99,235,0.20)",
  },
  {
    icon: TrendUp,
    title: "Tertiary enrollment at a 10-year high",
    body: "Tertiary (university & college) enrollment has grown 27% since 2018 â€” driven by OVGU expansion, the Hochschule Magdeburg-Stendal applied sciences university, and new online/distance learning programmes. International student enrolment doubled between 2015 and 2024, with students from India, China, and Syria making up the largest cohorts.",
    accent: "#06B6D4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.20)",
  },
  {
    icon: Laptop,
    title: "Digital skills gap being actively addressed",
    body: "While 99.4% literacy is near-universal, digital literacy at 68% basic proficiency lags behind Germany's national average of 74%. The city's Digital Strategy 2025 has funded 42 school IT upgrades, free coding programmes for 8â€“18 year olds, and a city-wide retraining programme for adults transitioning out of declining manufacturing roles.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
];

const schools = [
  { type: "Primary schools",       count: 42,  students: "~18,200", note: "Grundschulen (grades 1â€“4)"      },
  { type: "Secondary schools",     count: 28,  students: "~20,200", note: "Sekundar & Gymnasien (5â€“12)"    },
  { type: "Vocational colleges",   count: 12,  students: "~9,500",  note: "Berufsschule & Fachschule"      },
  { type: "Universities",          count: 2,   students: "~14,500", note: "OVGU + HS Magdeburg-Stendal"    },
  { type: "Research institutes",   count: 8,   students: "â€”",       note: "Fraunhofer, Max Planck, others" },
];

const researchHighlights = [
  { org: "OVGU â€” Engineering",            rank: "Top 15 national",  field: "Mechanical & systems engineering"         },
  { org: "OVGU â€” Medical Faculty",        rank: "Top 20 national",  field: "Neuroscience & cardiac medicine"          },
  { org: "Max Planck Institute",          rank: "World-class",      field: "Dynamics of complex technical systems"    },
  { org: "Fraunhofer IFF",                rank: "Applied research", field: "Factory automation & digital manufacturing"},
];

export default function EducationPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">

      <PageHeader
        title="Education"
        subtitle="Enrollment trends, educational attainment, and digital competencies in Magdeburg."
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
              A city of science built on 1,200 years of intellectual heritage
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>
              Magdeburg has deep roots in science and learning â€” Otto von Guericke, born here in 1602,
              invented the vacuum pump and the first electrostatic generator, fundamentally changing
              humanity&rsquo;s understanding of physics. Today the city honours this legacy with a
              university bearing his name, multiple world-class research institutes, and a commitment
              to education at every level.
            </p>
            <p className="text-[13.5px] leading-relaxed mt-3" style={{ color: "rgba(15,23,42,0.68)" }}>
              The education system spans <strong style={{ color: "#2563EB" }}>42 primary schools</strong>,
              28 secondary schools, 12 vocational colleges, and the two universities.
              Total enrollment across all levels exceeds 52,000 students â€” equivalent to more than
              one in five residents being in full-time education.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total students (all levels)", value: "52,000+",  note: "22% of total population"       },
              { label: "International students",       value: "~4,200",   note: "At OVGU Â· doubled since 2015"  },
              { label: "OVGU research income",         value: "â‚¬420M",    note: "Annual grants & contracts"      },
              { label: "Graduate employment",          value: "88%",      note: "Within 12 months of graduation" },
            ].map(f => (
              <div key={f.label} className="rounded-xl p-3.5" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)" }}>
                <p className="text-[16px] font-bold" style={{ color: "#2563EB" }}>{f.value}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#2563EB" }}>{f.label}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "rgba(15,23,42,0.44)" }}>{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* â”€â”€ Charts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <EducationCharts />

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

      {/* â”€â”€ Attainment + School system + Research â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>Education Attainment</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>Population aged 25+ Â· 2024</p>
          <div className="space-y-3">
            {educationAttainment.map((e) => (
              <div key={e.level} className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: e.color }} />
                <p className="text-[12.5px] flex-1" style={{ color: "rgba(15,23,42,0.62)" }}>{e.level}</p>
                <div className="w-44 rounded-full overflow-hidden" style={{ background: "rgba(148,163,184,0.12)", height: 6 }}>
                  <div className="h-full rounded-full" style={{ width: `${(e.value / 35) * 100}%`, background: e.color }} />
                </div>
                <p className="text-[12px] font-semibold w-10 text-right" style={{ color: "rgba(15,23,42,0.74)" }}>{e.value}%</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3.5 rounded-xl" style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.18)" }}>
            <p className="text-[12px] font-semibold mb-1" style={{ color: "#2563EB" }}>Tertiary on the rise</p>
            <p className="text-[11.5px] leading-snug" style={{ color: "rgba(15,23,42,0.60)" }}>
              Combined Bachelor&rsquo;s + Master&rsquo;s attainment stands at 35.8% among the 25+ population â€”
              up from 28% in 2015 and on track to reach 42% by 2030 as more young graduates stay in
              the city after finishing their degrees.
            </p>
          </div>
        </GlassCard>

        <div className="space-y-5">
          {/* School system */}
          <GlassCard className="p-6">
            <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>School System</p>
            <p className="text-[11px] mb-4" style={{ color: "rgba(15,23,42,0.40)" }}>Magdeburg education institutions Â· 2024</p>
            <div className="space-y-2">
              {schools.map((s) => (
                <div key={s.type} className="flex items-center gap-3 rounded-xl px-3.5 py-2.5"
                  style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(148,163,184,0.18)" }}>
                  <BookOpen size={13} style={{ color: "#2563EB", flexShrink: 0 }} />
                  <p className="text-[12px] flex-1" style={{ color: "rgba(15,23,42,0.70)" }}>{s.type}
                    <span className="ml-1 text-[10px]" style={{ color: "rgba(15,23,42,0.40)" }}>â€” {s.note}</span>
                  </p>
                  <span className="text-[11px] font-semibold" style={{ color: "#06B6D4" }}>{s.count} institutions</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Research */}
          <GlassCard className="p-6">
            <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>Research Excellence</p>
            <p className="text-[11px] mb-4" style={{ color: "rgba(15,23,42,0.40)" }}>Key research strengths</p>
            <div className="space-y-2.5">
              {researchHighlights.map((r) => (
                <div key={r.org} className="rounded-xl p-3"
                  style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.14)" }}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Flask size={11} weight="fill" style={{ color: "#2563EB" }} />
                    <p className="text-[12px] font-semibold" style={{ color: "#0F172A" }}>{r.org}</p>
                    <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                      style={{ background: "rgba(37,99,235,0.12)", color: "#2563EB" }}>{r.rank}</span>
                  </div>
                  <p className="text-[11px] pl-5" style={{ color: "rgba(15,23,42,0.54)" }}>{r.field}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

    </div>
  );
}

