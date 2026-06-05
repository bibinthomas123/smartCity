// Global design tokens for CityPulse — cream/beige theme
// Import from here instead of hardcoding hex values in components.

// ── Base palette ──────────────────────────────────────────────────────────────
export const COLORS = {
  // Amber / gold  (primary brand)
  amber:       "#C17F24",
  amberDark:   "#A36318",
  amberLight:  "#E8963A",
  amberDeep:   "#B45309",

  // Teal  (People category)
  teal:        "#0D9488",
  tealDark:    "#0A7C74",
  tealLight:   "#14B8A6",

  // Cyan  (Mobility category)
  cyan:        "#0891B2",
  cyanDark:    "#0E7490",
  cyanLight:   "#22D3EE",

  // Green  (Environment category)
  green:       "#059669",
  greenDark:   "#047857",
  greenLight:  "#10B981",

  // Orange  (Economy category)
  orange:      "#EA580C",
  orangeDark:  "#C2410C",
  orangeLight: "#F97316",

  // Blue  (Education category)
  blue:        "#1D4ED8",
  blueDark:    "#1E3A8A",
  blueLight:   "#3B82F6",

  // Neutral
  slate:       "#64748B",
  slateLight:  "#94A3B8",

  // Background / text (cream theme)
  bg:          "#F5EDD8",
  surface:     "rgba(255,249,235,0.82)",
  border:      "rgba(160,130,90,0.22)",
  text:        "#2D1F0F",
  textMuted:   "rgba(45,31,15,0.50)",
  textFaint:   "rgba(45,31,15,0.35)",
};

// ── Per-category badge colors ─────────────────────────────────────────────────
export const CATEGORY_COLORS = {
  People:      { bg: `rgba(13,148,136,0.10)`,  text: COLORS.teal,      border: `rgba(13,148,136,0.25)`  },
  Housing:     { bg: `rgba(193,127,36,0.10)`,  text: COLORS.amberDark, border: `rgba(193,127,36,0.25)`  },
  Mobility:    { bg: `rgba(8,145,178,0.10)`,   text: COLORS.cyanDark,  border: `rgba(8,145,178,0.25)`   },
  Environment: { bg: `rgba(5,150,105,0.10)`,   text: COLORS.greenDark, border: `rgba(5,150,105,0.25)`   },
  Economy:     { bg: `rgba(217,119,6,0.10)`,   text: COLORS.amberDeep, border: `rgba(217,119,6,0.25)`   },
  Education:   { bg: `rgba(29,78,216,0.10)`,   text: COLORS.blue,      border: `rgba(29,78,216,0.25)`   },
};

// ── Shared chart tooltip style ────────────────────────────────────────────────
export const TOOLTIP_STYLE = {
  backgroundColor: "#FBF7EE",
  border:          "1px solid rgba(160,130,90,0.28)",
  borderRadius:    "10px",
  fontSize:        "12px",
  color:           "#2D1F0F",
  padding:         "8px 12px",
  boxShadow:       "0 4px 12px rgba(160,130,90,0.14)",
};

// ── Multi-series chart palette (no purples/violets) ───────────────────────────
// Use these in order when you need 2–7 distinct series on one chart.
export const CHART_PALETTE = [
  COLORS.amber,       // 1 — amber
  COLORS.cyan,        // 2 — cyan
  COLORS.green,       // 3 — green
  COLORS.amberLight,  // 4 — warm orange
  COLORS.teal,        // 5 — teal
  COLORS.amberDeep,   // 6 — dark amber
  COLORS.slate,       // 7 — neutral grey
];

// ── Convenience: axis / grid defaults ────────────────────────────────────────
export const AXIS_TICK  = { fill: "rgba(45,31,15,0.38)", fontSize: 11 };
export const GRID_STROKE = "rgba(160,130,90,0.14)";
