import Link from "next/link";
import {
  Users, Buildings, Train, Leaf, ChartBar, GraduationCap,
  MapPin, Church, ArrowRight, Star, Drop, Lightning,
} from "@phosphor-icons/react/dist/ssr";

const quickStats = [
  { label: "Population",   value: "237,765",  sub: "residents (2023)"        },
  { label: "City Area",    value: "201 km²",  sub: "total territory"         },
  { label: "Green Space",  value: "~50%",     sub: "parks, forests & meadows"},
  { label: "Founded",      value: "805 AD",   sub: "over 1,200 years of history"},
  { label: "Districts",    value: "40",       sub: "Stadtteile"              },
  { label: "University",   value: "OVGU",     sub: "Otto von Guericke Univ." },
];

const highlights = [
  {
    icon: Church,
    title: "Magdeburg Cathedral",
    subtitle: "Dom zu Magdeburg",
    desc: "Built between 1209 and 1520, this is Germany's oldest Gothic cathedral. Its twin towers define the city skyline and it houses the tomb of Emperor Otto I, founder of the Holy Roman Empire.",
    accent: "#A36318",
    bg: "rgba(193,127,36,0.08)",
    border: "rgba(193,127,36,0.22)",
  },
  {
    icon: Buildings,
    title: "Die Grüne Zitadelle",
    subtitle: "Hundertwasser Haus",
    desc: "Friedensreich Hundertwasser's final masterpiece, completed in 2005. The spectacular pink building with grass-covered roofs, crooked floors, and tree-filled balconies has become an iconic symbol of modern Magdeburg.",
    accent: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.22)",
  },
  {
    icon: Drop,
    title: "Elbe River & Waterfront",
    subtitle: "Die Elbuferpromenade",
    desc: "The Elbe River runs right through the heart of the city. The promenade along its banks offers kilometres of cycling and walking paths, seasonal festivals, and sweeping views of the cathedral and old town.",
    accent: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.22)",
  },
  {
    icon: Lightning,
    title: "Magdeburg Hemispheres",
    subtitle: "A scientific legend",
    desc: "In 1654, Magdeburg-born scientist Otto von Guericke demonstrated atmospheric pressure by creating a vacuum between two metal hemispheres that teams of horses could not pull apart. It changed science forever.",
    accent: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.22)",
  },
];

const sections = [
  {
    href: "/people",
    label: "People & Demographics",
    desc: "Population trends, age structure, migration, and gender breakdown.",
    icon: Users,
    accent: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    href: "/housing",
    label: "Housing",
    desc: "Construction activity, rental prices, ownership rates, and urban development.",
    icon: Buildings,
    accent: "#C17F24",
    bg: "rgba(193,127,36,0.08)",
  },
  {
    href: "/mobility",
    label: "Mobility & Transport",
    desc: "Public transit usage, cycling infrastructure, traffic flows, and commuting patterns.",
    icon: Train,
    accent: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
  },
  {
    href: "/environment",
    label: "Environment",
    desc: "Air quality, CO₂ emissions, green space coverage, and sustainability goals.",
    icon: Leaf,
    accent: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    href: "/economy",
    label: "Economy",
    desc: "Employment rates, GDP growth, business activity, and key industries.",
    icon: ChartBar,
    accent: "#EA580C",
    bg: "rgba(234,88,12,0.08)",
  },
  {
    href: "/education",
    label: "Education",
    desc: "School enrollment, graduation rates, university students, and adult learning.",
    icon: GraduationCap,
    accent: "#4F46E5",
    bg: "rgba(79,70,229,0.08)",
  },
];

const funFacts = [
  "Magdeburg received Germany's first city charter in 1035.",
  "The city was 90% destroyed in WWII but was completely rebuilt.",
  "Magdeburg is one of the largest inland ports in Germany.",
  "The Elbauenpark, built for a 1999 Federal Garden Show, remains a beloved public garden.",
  "Otto von Guericke, inventor of the vacuum pump, was born here in 1602.",
  "The MVB tram network is one of the oldest still-operating in Germany.",
];

export default function HomePage() {
  return (
    <div className="page-fade-in max-w-5xl mx-auto px-6 lg:px-8 py-8 space-y-12">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section>
        <div
          className="relative rounded-2xl overflow-hidden p-8 lg:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(240,215,155,0.85) 0%, rgba(235,200,130,0.85) 40%, rgba(220,190,140,0.80) 100%)",
            border: "1px solid rgba(193,127,36,0.30)",
            boxShadow: "0 4px 24px rgba(193,127,36,0.14)",
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(193,127,36,0.18)" }} />
          <div className="absolute -bottom-12 left-32 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(5,150,105,0.12)" }} />

          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} weight="fill" style={{ color: "#A36318" }} />
              <span className="text-[12px] font-semibold tracking-widest uppercase" style={{ color: "#A36318" }}>
                Saxony-Anhalt, Germany
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ color: "#2D1F0F" }}>
              Welcome to<br />
              <span className="gradient-text">Magdeburg</span>
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed max-w-xl" style={{ color: "rgba(45,31,15,0.65)" }}>
              Germany&rsquo;s <em>Green City on the Elbe</em> — a place where 1,200 years of history meets
              forward-thinking urban life. Explore how Magdeburg&rsquo;s 237,000 residents live, move, and thrive.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/overview"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #C17F24, #E8963A)", boxShadow: "0 2px 8px rgba(193,127,36,0.30)" }}
              >
                View City Dashboard
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all"
                style={{ color: "#A36318", background: "rgba(193,127,36,0.12)", border: "1px solid rgba(193,127,36,0.25)" }}
              >
                About this project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ──────────────────────────────────────────────── */}
      <section>
        <h2 className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(45,31,15,0.38)" }}>
          City at a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(255,249,235,0.82)",
                border: "1px solid rgba(160,130,90,0.22)",
                boxShadow: "0 1px 3px rgba(160,130,90,0.10)",
              }}
            >
              <p className="text-[18px] font-bold leading-tight" style={{ color: "#2D1F0F" }}>{s.value}</p>
              <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#A36318" }}>{s.label}</p>
              <p className="text-[10px] mt-0.5 leading-snug" style={{ color: "rgba(45,31,15,0.42)" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Magdeburg ──────────────────────────────────────────── */}
      <section>
        <div
          className="rounded-2xl p-7 lg:p-8 space-y-4"
          style={{
            background: "rgba(255,249,235,0.82)",
            border: "1px solid rgba(160,130,90,0.22)",
          }}
        >
          <h2 className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "rgba(45,31,15,0.38)" }}>
            About the City
          </h2>
          <h3 className="text-xl font-semibold" style={{ color: "#2D1F0F" }}>
            A city shaped by the Elbe and by history
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,31,15,0.68)" }}>
            Magdeburg is the capital and largest city of the German federal state of Saxony-Anhalt, sitting on the western bank of the Elbe River in central Germany.
            With roots stretching back to a Carolingian trading post in 805 AD, the city carries more than twelve centuries of layered history — from its time as Emperor
            Otto I&rsquo;s favourite residence, to being one of the most devastated cities of the Thirty Years&rsquo; War (1631), to its near-total destruction in World War II
            and its remarkable post-war reconstruction.
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,31,15,0.68)" }}>
            Today, Magdeburg is nicknamed <strong style={{ color: "#A36318" }}>&ldquo;Die Grüne Stadt am Fluss&rdquo;</strong> — The Green City by the River — because almost half
            of its 201 km² is covered by parks, forests, riverbank meadows, and allotment gardens. The Elbe promenade, the Stadtpark, and the vast Elbauenpark give residents
            generous outdoor space year-round. Combined with the OVGU university, strong engineering industry, and a growing creative scene, Magdeburg has built a
            distinctly liveable, mid-sized German city.
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,31,15,0.68)" }}>
            This dashboard brings together publicly available city data across six key domains — People, Housing, Mobility, Environment, Economy, and Education — so that
            residents, students, researchers, and policymakers can understand how Magdeburg is changing over time.
          </p>
        </div>
      </section>

      {/* ── City Highlights ──────────────────────────────────────────── */}
      <section>
        <h2 className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(45,31,15,0.38)" }}>
          City Highlights
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl p-5 flex gap-4"
              style={{
                background: h.bg,
                border: `1px solid ${h.border}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,249,235,0.80)", border: `1px solid ${h.border}` }}
              >
                <h.icon size={18} weight="fill" style={{ color: h.accent }} />
              </div>
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "#2D1F0F" }}>{h.title}</p>
                <p className="text-[11px] font-medium mb-2" style={{ color: h.accent }}>{h.subtitle}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(45,31,15,0.60)" }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Explore City Data ─────────────────────────────────────────── */}
      <section>
        <h2 className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(45,31,15,0.38)" }}>
          Explore City Data
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md"
              style={{
                background: "rgba(255,249,235,0.82)",
                border: "1px solid rgba(160,130,90,0.22)",
                boxShadow: "0 1px 3px rgba(160,130,90,0.08)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: s.bg, border: `1px solid ${s.accent}33` }}
              >
                <s.icon size={17} weight="fill" style={{ color: s.accent }} />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold" style={{ color: "#2D1F0F" }}>{s.label}</p>
                <p className="text-[12px] mt-1 leading-relaxed" style={{ color: "rgba(45,31,15,0.52)" }}>{s.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-[12px] font-medium" style={{ color: s.accent }}>
                Explore <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Did You Know ─────────────────────────────────────────────── */}
      <section>
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(193,127,36,0.07)",
            border: "1px solid rgba(193,127,36,0.22)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Star size={15} weight="fill" style={{ color: "#C17F24" }} />
            <h2 className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "#A36318" }}>
              Did You Know?
            </h2>
          </div>
          <ul className="space-y-2.5">
            {funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#C17F24" }}
                />
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,31,15,0.68)" }}>{fact}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Footer note ──────────────────────────────────────────────── */}
      <footer className="text-center pb-4">
        <p className="text-[11px]" style={{ color: "rgba(45,31,15,0.35)" }}>
          Data sourced from official Magdeburg city statistics, Statistisches Landesamt Sachsen-Anhalt, and federal agencies.
          Last updated December 2024.
        </p>
      </footer>

    </div>
  );
}
