import Link from "next/link";
import {
  Users, Buildings, Train, Leaf, ChartBar, GraduationCap,
  MapPin, Church, ArrowRight, Star, Drop, Lightning,
  Clock, Trophy, Palette, Flask, Tree, Bicycle,
} from "@phosphor-icons/react/dist/ssr";

// â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const quickStats = [
  { label: "Population",  value: "237,765", sub: "residents (2023)"          },
  { label: "City Area",   value: "201 kmÂ²", sub: "total territory"           },
  { label: "Green Space", value: "~50%",    sub: "parks, forests & meadows"  },
  { label: "Founded",     value: "805 AD",  sub: "over 1,200 years of history"},
  { label: "Districts",   value: "40",      sub: "Stadtteile"                },
  { label: "University",  value: "OVGU",    sub: "Otto von Guericke Univ."   },
];

const gallery = [
  {
    img: "https://picsum.photos/seed/gothic-cathedral/600/400",
    label: "Magdeburg Dom",
    sub: "Germany's oldest Gothic cathedral Â· built 1209â€“1520",
    accent: "#2563EB",
  },
  {
    img: "https://picsum.photos/seed/colorful-building/600/400",
    label: "Die GrÃ¼ne Zitadelle",
    sub: "Hundertwasser's last masterpiece Â· completed 2005",
    accent: "#10B981",
  },
  {
    img: "https://picsum.photos/seed/river-promenade/600/400",
    label: "Elbuferpromenade",
    sub: "Kilometres of riverside walks & cycling paths",
    accent: "#06B6D4",
  },
];

const timeline = [
  {
    year: "805 AD",
    title: "Birth of the City",
    desc: "Magdeburg is first mentioned in Carolingian records as a trading post and crossing point on the Elbe River under Charlemagne's reign.",
    accent: "#2563EB",
  },
  {
    year: "968 AD",
    title: "Imperial Capital",
    desc: "Emperor Otto I â€” who was buried here â€” established the Archbishopric of Magdeburg, making the city one of the most important seats of power in the Holy Roman Empire.",
    accent: "#10B981",
  },
  {
    year: "1209 AD",
    title: "Cathedral Begins",
    desc: "Construction starts on the Dom zu Magdeburg, which would take over 300 years to complete and become Germany's first Gothic cathedral.",
    accent: "#2563EB",
  },
  {
    year: "1631",
    title: "The Great Destruction",
    desc: "During the Thirty Years' War, imperial forces sacked Magdeburg in one of the worst atrocities in German history. Over 25,000 civilians perished and 90% of the city was burned.",
    accent: "#EF4444",
  },
  {
    year: "1945",
    title: "WWII Bombing",
    desc: "Allied air raids on 16 January 1945 devastated Magdeburg once again, destroying much of the remaining historic fabric. The city had to be almost entirely rebuilt after the war.",
    accent: "#EF4444",
  },
  {
    year: "1990",
    title: "Reunification & Renaissance",
    desc: "German reunification brought Magdeburg back as the capital of the new federal state of Saxony-Anhalt. Decades of investment followed, transforming it into a modern, liveable city.",
    accent: "#10B981",
  },
  {
    year: "2005â€“Now",
    title: "Green City Era",
    desc: "The Hundertwasser Haus opens, OVGU expands, and Magdeburg earns its reputation as one of Germany's greenest cities â€” with nearly half of its land dedicated to parks and nature.",
    accent: "#06B6D4",
  },
];

const districts = [
  {
    name: "Altstadt",
    eng: "Old Town",
    desc: "The historic heart of the city, home to the Cathedral, the Alter Markt, and the Otto von Guericke monument. Undergoing major cultural regeneration.",
    img: "https://picsum.photos/seed/old-town-square/400/220",
    tag: "Historic Centre",
    tagColor: "#2563EB",
  },
  {
    name: "Buckau",
    eng: "Creative Quarter",
    desc: "Once an industrial powerhouse on the Elbe, Buckau has reinvented itself as Magdeburg's creative and artistic hub â€” galleries, workshops, and river-side bars fill former factories.",
    img: "https://picsum.photos/seed/creative-urban/400/220",
    tag: "Arts & Culture",
    tagColor: "#2563EB",
  },
  {
    name: "Stadtfeld",
    eng: "Garden District",
    desc: "Leafy and residential, Stadtfeld is popular with families and young professionals. Wide tree-lined boulevards, neighbourhood cafÃ©s, and easy access to the Stadtpark.",
    img: "https://picsum.photos/seed/tree-lined-street/400/220",
    tag: "Residential",
    tagColor: "#10B981",
  },
  {
    name: "Sudenburg",
    eng: "Lively South",
    desc: "A vibrant neighbourhood with independent shops, restaurants, and a strong community identity. The Elbufer promenade runs right past, offering stunning river access.",
    img: "https://picsum.photos/seed/european-neighbourhood/400/220",
    tag: "Shopping & Dining",
    tagColor: "#EF4444",
  },
  {
    name: "Herrenkrug",
    eng: "Park & Nature",
    desc: "A vast expanse of meadows, forests, and parkland stretching along the Elbe. Home to the famous Herrenkrug Park Hotel, cycle routes, and the Magdeburg Zoo.",
    img: "https://picsum.photos/seed/riverside-park/400/220",
    tag: "Green Space",
    tagColor: "#10B981",
  },
  {
    name: "Neue Neustadt",
    eng: "Modern Living",
    desc: "A post-war residential district with broad streets and modern apartment blocks, currently being revitalised with new mixed-use developments and community spaces.",
    img: "https://picsum.photos/seed/modern-city-blocks/400/220",
    tag: "Urban Development",
    tagColor: "#06B6D4",
  },
];

const cityLife = [
  {
    icon: Palette,
    label: "Culture & Arts",
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.20)",
    img: "https://picsum.photos/seed/opera-theatre/500/260",
    items: [
      "Theater Magdeburg â€” opera, ballet & drama",
      "Kloster Unser Lieben Frauen â€” art museum in a 12th-century monastery",
      "Kulturhistorisches Museum with Otto the Great's legacy",
      "Annual Magdeburger Dom Festival (outdoor concerts)",
      "Moritzhof cultural centre â€” cinema & live music",
    ],
  },
  {
    icon: Trophy,
    label: "Sports & Recreation",
    accent: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.20)",
    img: "https://picsum.photos/seed/sports-stadium/500/260",
    items: [
      "1. FC Magdeburg â€” Bundesliga 2 football club",
      "SC Magdeburg â€” European Champions League handball",
      "MDCC-Arena (capacity 27,000) home ground",
      "Extensive cycling network along the Elbe",
      "Herrenkrug Park â€” running, rowing & outdoor fitness",
    ],
  },
  {
    icon: Flask,
    label: "Science & Education",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.20)",
    img: "https://picsum.photos/seed/university-campus/500/260",
    items: [
      "Otto von Guericke University (~14,500 students)",
      "Hochschule Magdeburg-Stendal â€” applied sciences",
      "Max Planck Institute for Dynamics of Complex Technical Systems",
      "Fraunhofer Institute for Factory Operation",
      "Strong engineering & life-sciences research cluster",
    ],
  },
];

const highlights = [
  {
    img: "https://picsum.photos/seed/magdeburg-dom-cathedral/700/380",
    icon: Church,
    title: "Magdeburg Cathedral",
    subtitle: "Dom zu Magdeburg",
    desc: "Built between 1209 and 1520, the Dom zu Magdeburg is Germany's oldest Gothic cathedral. Its striking twin towers dominate the city skyline and can be seen from kilometres around. Inside, the cathedral houses the tomb of Emperor Otto I and his wife Edith â€” a UNESCO World Heritage candidate. Guided tours run daily and include access to the crypt and treasury.",
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.07)",
    border: "rgba(37,99,235,0.20)",
  },
  {
    img: "https://picsum.photos/seed/hundertwasser-pink/700/380",
    icon: Buildings,
    title: "Die GrÃ¼ne Zitadelle",
    subtitle: "Hundertwasser Haus",
    desc: "Completed in 2005 as Friedensreich Hundertwasser's final project, this extraordinary building is a riot of pink, gold, and green. It features grass-covered rooftops, uneven floors, trees growing from balconies, and not a single straight line in sight. The building houses apartments, a hotel, shops, and galleries, and has become one of Magdeburg's most beloved landmarks.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
  {
    img: "https://picsum.photos/seed/elbe-river-city/700/380",
    icon: Drop,
    title: "Elbe River & Waterfront",
    subtitle: "Die Elbuferpromenade",
    desc: "The Elbe has shaped Magdeburg for over a thousand years â€” both as a trade route and as a natural boundary. Today, the river promenade stretches for kilometres, offering one of the finest riverside walks in eastern Germany. In summer, open-air events, beach bars, and festivals bring the waterfront to life. The HubbrÃ¼cke (lift bridge) and the new Stadtpark SÃ¼dpark are particular highlights.",
    accent: "#06B6D4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.20)",
  },
  {
    img: "https://picsum.photos/seed/vacuum-science-experiment/700/380",
    icon: Lightning,
    title: "Magdeburg Hemispheres",
    subtitle: "Otto von Guericke's Legacy",
    desc: "In 1654, native son Otto von Guericke conducted one of history's most dramatic science experiments: he evacuated the air from two bronze hemispheres held together by atmospheric pressure. Not even two teams of horses could pull them apart. This demonstration changed our understanding of the atmosphere and laid foundations for modern vacuum technology. A bronze replica stands in the Alter Markt today.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.20)",
  },
];

const sections = [
  { href: "/people",      label: "People & Demographics",  desc: "Population trends, age structure, migration, and gender breakdown.",                  icon: Users,         accent: "#10B981", bg: "rgba(16,185,129,0.08)"  },
  { href: "/housing",     label: "Housing",                desc: "Construction activity, rental prices, ownership rates, and urban development.",        icon: Buildings,     accent: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { href: "/mobility",    label: "Mobility & Transport",   desc: "Public transit usage, cycling infrastructure, traffic flows, and commuting patterns.", icon: Train,         accent: "#06B6D4", bg: "rgba(6,182,212,0.08)"  },
  { href: "/environment", label: "Environment",            desc: "Air quality, COâ‚‚ emissions, green space coverage, and sustainability goals.",          icon: Leaf,          accent: "#10B981", bg: "rgba(16,185,129,0.08)"  },
  { href: "/economy",     label: "Economy",                desc: "Employment rates, GDP growth, business activity, and key industries.",                  icon: ChartBar,      accent: "#EF4444", bg: "rgba(239,68,68,0.08)"  },
  { href: "/education",   label: "Education",              desc: "School enrollment, graduation rates, university students, and adult learning.",          icon: GraduationCap, accent: "#2563EB", bg: "rgba(37,99,235,0.08)"  },
];

const funFacts = [
  "Magdeburg received Germany's first city charter in 1035 â€” making it one of the oldest chartered cities in the German-speaking world.",
  "The city was 90% destroyed in WWII but was completely rebuilt and today has a modern urban fabric.",
  "Magdeburg is home to one of Germany's largest inland ports â€” a major logistics hub on the Elbe.",
  "The Elbauenpark, built for a 1999 Federal Garden Show (Bundesgartenschau), covers 100 hectares.",
  "Otto von Guericke, inventor of the vacuum pump and the first electric generator, was born here in 1602.",
  "The MVB tram network has been running since 1877 â€” one of the oldest continuously operating tram systems in Germany.",
  "SC Magdeburg handball club are European Champions League winners and one of Germany's most successful handball clubs.",
  "Magdeburg is located almost exactly at the geographic centre of Germany.",
];

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function HomePage() {
  return (
    <div className="page-fade-in">

      {/* â•â• HERO â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative overflow-hidden" style={{ minHeight: 520 }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/magdeburg-river-skyline/1400/520"
          alt="Magdeburg city panorama"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(30,15,5,0.88) 0%, rgba(30,15,5,0.65) 55%, rgba(30,15,5,0.25) 100%)" }}
        />

        <div className="relative flex items-center" style={{ minHeight: 520 }}>
          <div className="px-8 lg:px-14 py-16 max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={14} weight="fill" style={{ color: "#3B82F6" }} />
              <span style={{ color: "#3B82F6", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Saxony-Anhalt Â· Germany Â· 52Â°8â€²N 11Â°37â€²E
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(40px, 6vw, 60px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
              Welcome to<br />
              <span style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Magdeburg
              </span>
            </h1>

            <p style={{ color: "rgba(251,247,238,0.72)", fontSize: 16, marginTop: 18, lineHeight: 1.65, maxWidth: 460 }}>
              Germany&rsquo;s <em style={{ color: "rgba(251,247,238,0.88)" }}>Green City on the Elbe</em> â€” 1,200 years of
              history, 50% green space, and 237,000 residents building the future together.
            </p>

            {/* Hero stat chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { v: "237,765", l: "residents" },
                { v: "805 AD",  l: "founded"   },
                { v: "~50%",    l: "green space"},
                { v: "201 kmÂ²", l: "city area"  },
              ].map(s => (
                <div
                  key={s.l}
                  style={{ background: "rgba(251,247,238,0.10)", border: "1px solid rgba(251,247,238,0.18)", borderRadius: 10, padding: "10px 18px", backdropFilter: "blur(8px)" }}
                >
                  <p style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700, lineHeight: 1 }}>{s.v}</p>
                  <p style={{ color: "rgba(251,247,238,0.55)", fontSize: 11, marginTop: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/overview"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #2563EB, #3B82F6)", boxShadow: "0 4px 16px rgba(37,99,235,0.40)" }}
              >
                View City Dashboard <ArrowRight size={14} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all"
                style={{ color: "#FFFFFF", background: "rgba(251,247,238,0.12)", border: "1px solid rgba(251,247,238,0.22)", backdropFilter: "blur(8px)" }}
              >
                Learn about the city
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â•â• Page content â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 space-y-16">

        {/* â”€â”€ QUICK STATS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(15,23,42,0.40)" }}>City at a Glance</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(148,163,184,0.20)", boxShadow: "0 1px 3px rgba(148,163,184,0.10)" }}
              >
                <p className="text-[18px] font-bold leading-tight" style={{ color: "#0F172A" }}>{s.value}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#2563EB" }}>{s.label}</p>
                <p className="text-[10px] mt-0.5 leading-snug" style={{ color: "rgba(15,23,42,0.44)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ PHOTO GALLERY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(15,23,42,0.40)" }}>Iconic Landmarks</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <div
                key={g.label}
                className="rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid rgba(148,163,184,0.20)", boxShadow: "0 2px 8px rgba(148,163,184,0.12)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.img}
                  alt={g.label}
                  className="w-full object-cover"
                  style={{ height: 200 }}
                  loading="lazy"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: "linear-gradient(to top, rgba(20,10,0,0.82) 0%, transparent 100%)" }}
                >
                  <p className="text-[14px] font-bold" style={{ color: "#FFFFFF" }}>{g.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(251,247,238,0.65)" }}>{g.sub}</p>
                </div>
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ background: "rgba(20,10,0,0.55)", color: "#FFFFFF", border: "1px solid rgba(251,247,238,0.20)" }}
                >
                  Magdeburg
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ ABOUT THE CITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="about">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(15,23,42,0.40)" }}>About the City</p>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(148,163,184,0.20)", boxShadow: "0 4px 16px rgba(148,163,184,0.13)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/german-city-river/640/440"
                alt="Magdeburg city and Elbe River"
                className="w-full object-cover"
                style={{ height: 420 }}
                loading="lazy"
              />
              <div className="p-4" style={{ background: "rgba(255,255,255,0.92)" }}>
                <p className="text-[12px] font-semibold" style={{ color: "#2563EB" }}>Magdeburg on the Elbe</p>
                <p className="text-[11px] mt-0.5" style={{ color: "rgba(15,23,42,0.54)" }}>Capital of Saxony-Anhalt since 1990 Â· Located at 52Â°N</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#0F172A" }}>
                A city shaped by the Elbe and by history
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(15,23,42,0.72)" }}>
                Magdeburg is the capital and largest city of the federal state of Saxony-Anhalt,
                sitting on the western bank of the Elbe River in central Germany. With roots
                stretching back over 1,200 years, the city has been a Carolingian trading post,
                an Imperial capital, and a Hanseatic city â€” before being almost completely
                destroyed twice and rebuilt each time with remarkable determination.
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(15,23,42,0.72)" }}>
                Today Magdeburg earns its nickname <strong style={{ color: "#2563EB" }}>&ldquo;Die GrÃ¼ne Stadt am Fluss&rdquo;</strong> â€”
                The Green City by the River â€” because nearly half of its 201 kmÂ² is covered by
                parks, forests, and riverbank meadows. The broad Elbuferpromenade, the 100-hectare
                Elbauenpark, and dozens of neighbourhood gardens give its 237,000 residents
                some of the most generous green access of any German city.
              </p>

              {/* 4 fact boxes */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: MapPin,    label: "Location",   value: "Elbe River, 52Â°N" },
                  { icon: Tree,      label: "Green Space",value: "~100 kmÂ² parks"   },
                  { icon: Bicycle,   label: "Cycling",    value: "300+ km routes"   },
                  { icon: Lightning, label: "Science",    value: "Guericke's city"  },
                ].map(f => (
                  <div
                    key={f.label}
                    className="rounded-xl p-3 flex items-center gap-3"
                    style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(148,163,184,0.18)" }}
                  >
                    <f.icon size={16} weight="fill" style={{ color: "#2563EB", flexShrink: 0 }} />
                    <div>
                      <p className="text-[11px] font-semibold" style={{ color: "#2563EB" }}>{f.label}</p>
                      <p className="text-[12px] font-bold" style={{ color: "#0F172A" }}>{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ HISTORY TIMELINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(15,23,42,0.40)" }}>History</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0F172A" }}>1,200 years in seven milestones</h2>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[18px] top-0 bottom-0 w-[2px]"
              style={{ background: "linear-gradient(to bottom, #2563EB, rgba(37,99,235,0.10))" }}
            />
            <div className="space-y-6 pl-12">
              {timeline.map((t, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[42px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ background: "#EFF6FF", borderColor: t.accent, boxShadow: `0 0 0 3px rgba(255,255,255,1)` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: t.accent }} />
                  </div>

                  <div
                    className="rounded-2xl p-5"
                    style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(148,163,184,0.18)" }}
                  >
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <span
                        className="text-[12px] font-bold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}30` }}
                      >
                        {t.year}
                      </span>
                      <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>{t.title}</p>
                    </div>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ DISTRICTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(15,23,42,0.40)" }}>Neighbourhoods</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Magdeburg&rsquo;s distinct districts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {districts.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(148,163,184,0.20)", boxShadow: "0 2px 8px rgba(148,163,184,0.10)" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(20,10,0,0.55) 0%, transparent 60%)" }}
                  />
                  <span
                    className="absolute bottom-3 left-3 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${d.tagColor}22`, color: d.tagColor, border: `1px solid ${d.tagColor}44`, backdropFilter: "blur(8px)", background: "rgba(251,247,238,0.85)" }}
                  >
                    {d.tag}
                  </span>
                </div>
                {/* Text */}
                <div className="p-4">
                  <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>{d.name}</p>
                  <p className="text-[11px] font-medium mb-2" style={{ color: d.tagColor }}>{d.eng}</p>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.65)" }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ CITY LIFE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(15,23,42,0.40)" }}>City Life</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Living in Magdeburg</h2>
          <div className="grid lg:grid-cols-3 gap-5">
            {cityLife.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl overflow-hidden"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 180 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.label} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,5,0,0.65) 0%, transparent 60%)" }} />
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${c.border}` }}
                    >
                      <c.icon size={15} weight="fill" style={{ color: c.accent }} />
                    </div>
                    <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>{c.label}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {c.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: c.accent }} />
                        <p className="text-[12.5px] leading-snug" style={{ color: "rgba(15,23,42,0.70)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ CITY HIGHLIGHTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(15,23,42,0.40)" }}>Must-See</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>City Highlights</h2>
          <div className="space-y-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="rounded-2xl overflow-hidden"
                style={{ background: h.bg, border: `1px solid ${h.border}` }}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Image */}
                  <div className="lg:w-2/5 shrink-0 overflow-hidden" style={{ minHeight: 220 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={h.img}
                      alt={h.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: 220 }}
                      loading="lazy"
                    />
                  </div>
                  {/* Text */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(255,255,255,0.88)", border: `1px solid ${h.border}` }}
                      >
                        <h.icon size={17} weight="fill" style={{ color: h.accent }} />
                      </div>
                      <div>
                        <p className="text-[16px] font-bold" style={{ color: "#0F172A" }}>{h.title}</p>
                        <p className="text-[11px] font-semibold" style={{ color: h.accent }}>{h.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(15,23,42,0.68)" }}>{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ EXPLORE CITY DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(15,23,42,0.40)" }}>Open Data</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Explore City Data</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md"
                style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(148,163,184,0.20)", boxShadow: "0 1px 3px rgba(148,163,184,0.09)" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.bg, border: `1px solid ${s.accent}33` }}>
                  <s.icon size={17} weight="fill" style={{ color: s.accent }} />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold" style={{ color: "#0F172A" }}>{s.label}</p>
                  <p className="text-[12px] mt-1 leading-relaxed" style={{ color: "rgba(15,23,42,0.56)" }}>{s.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[12px] font-medium" style={{ color: s.accent }}>
                  Explore <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* â”€â”€ DID YOU KNOW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <div className="rounded-2xl p-6 lg:p-8" style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.22)" }}>
            <div className="flex items-center gap-2 mb-5">
              <Star size={15} weight="fill" style={{ color: "#2563EB" }} />
              <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "#2563EB" }}>Did You Know?</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {funFacts.map((fact, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2563EB" }} />
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(15,23,42,0.72)" }}>{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <footer className="text-center pb-4">
          <p className="text-[11px]" style={{ color: "rgba(15,23,42,0.36)" }}>
            Data sourced from official Magdeburg city statistics, Statistisches Landesamt Sachsen-Anhalt, and federal agencies. Last updated December 2024.
          </p>
        </footer>

      </div>
    </div>
  );
}

