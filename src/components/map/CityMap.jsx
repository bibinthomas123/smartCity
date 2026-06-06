"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Users, Drop, Buildings, Leaf, Lightning, GraduationCap,
  Train, MapPin, ArrowUp, ArrowDown,
} from "@phosphor-icons/react";

// ── Map data ──────────────────────────────────────────────────────────────────

const DISTRICTS = [
  { id: "altstadt",   name: "Altstadt",       lat: 52.1295, lng: 11.6373, pop: 12400, aqi: 38, rent: 750, green: 12, density: 2850 },
  { id: "stfdw",      name: "Stadtfeld West",  lat: 52.1268, lng: 11.5943, pop: 18200, aqi: 28, rent: 720, green: 35, density: 3100 },
  { id: "stfdo",      name: "Stadtfeld Ost",   lat: 52.1248, lng: 11.6143, pop: 16800, aqi: 31, rent: 695, green: 22, density: 2950 },
  { id: "sudenburg",  name: "Sudenburg",       lat: 52.1058, lng: 11.6198, pop: 17600, aqi: 35, rent: 680, green: 28, density: 2740 },
  { id: "buckau",     name: "Buckau",          lat: 52.1018, lng: 11.6468, pop: 6800,  aqi: 42, rent: 710, green: 38, density: 1820 },
  { id: "neu_neust",  name: "Neue Neustadt",   lat: 52.1478, lng: 11.6408, pop: 14500, aqi: 30, rent: 660, green: 20, density: 2600 },
  { id: "herrenkrug", name: "Herrenkrug",      lat: 52.1318, lng: 11.6848, pop: 3100,  aqi: 18, rent: 780, green: 82, density: 420  },
  { id: "cracau",     name: "Cracau",          lat: 52.1148, lng: 11.6748, pop: 8200,  aqi: 25, rent: 695, green: 55, density: 1050 },
  { id: "reform",     name: "Reform",          lat: 52.1548, lng: 11.5858, pop: 9800,  aqi: 26, rent: 705, green: 42, density: 1340 },
  { id: "lemsdorf",   name: "Lemsdorf",        lat: 52.0878, lng: 11.6528, pop: 5600,  aqi: 22, rent: 640, green: 48, density: 980  },
  { id: "diesdorf",   name: "Diesdorf",        lat: 52.1138, lng: 11.5718, pop: 7400,  aqi: 24, rent: 650, green: 50, density: 1120 },
  { id: "nord",       name: "Magdeburg Nord",  lat: 52.1658, lng: 11.6278, pop: 11200, aqi: 33, rent: 670, green: 25, density: 1780 },
];

const POIS = [
  { name: "Magdeburg Dom",        lat: 52.1273, lng: 11.6392, type: "landmark",  emoji: "⛪", color: "#A36318",  desc: "Germany's oldest Gothic cathedral · built 1209–1520"        },
  { name: "Grüne Zitadelle",      lat: 52.1262, lng: 11.6338, type: "landmark",  emoji: "🏛", color: "#059669",  desc: "Hundertwasser's last masterpiece · completed 2005"           },
  { name: "OVGU University",      lat: 52.1388, lng: 11.6018, type: "education", emoji: "🎓", color: "#1D4ED8",  desc: "Otto von Guericke University · 14,500 students"              },
  { name: "Hauptbahnhof",         lat: 52.1305, lng: 11.6268, type: "transport", emoji: "🚆", color: "#0891B2",  desc: "Central station · Berlin 60 min · Halle 30 min"             },
  { name: "Elbauenpark",          lat: 52.1118, lng: 11.6058, type: "park",      emoji: "🌿", color: "#059669",  desc: "100-hectare park built for the 1999 Bundesgartenschau"       },
  { name: "University Hospital",  lat: 52.1328, lng: 11.6128, type: "health",    emoji: "🏥", color: "#E11D48",  desc: "UKM · Largest employer in the city · ~7,500 staff"           },
  { name: "Alter Markt",          lat: 52.1280, lng: 11.6345, type: "landmark",  emoji: "🏪", color: "#A36318",  desc: "City's main market square · Otto von Guericke statue"        },
  { name: "Herrenkrug Park",      lat: 52.1368, lng: 11.6838, type: "park",      emoji: "🌳", color: "#047857",  desc: "200-hectare meadow forest along the Elbe"                    },
  { name: "MVB Tram Hub",         lat: 52.1310, lng: 11.6270, type: "transport", emoji: "🚋", color: "#0891B2",  desc: "Magdeburger Verkehrsbetriebe · 12 tram lines since 1877"     },
  { name: "Inland Port",          lat: 52.1080, lng: 11.6550, type: "economy",   emoji: "🚢", color: "#D97706",  desc: "Germany's 3rd-largest inland port by cargo tonnage"          },
];

const METRICS = [
  {
    key: "pop",     label: "Population",    unit: "residents",
    low: 3000,  high: 20000,
    colorLow: [245,237,216], colorHigh: [13,148,136],   // cream → teal
    format: (v) => v.toLocaleString(),
    insight: "Stadtfeld West is the most populous district with ~18,200 residents. Herrenkrug is the least dense with just 3,100 — mostly parkland.",
  },
  {
    key: "aqi",     label: "Air Quality",   unit: "AQI",
    low: 15,    high: 45,
    colorLow: [5,150,105],   colorHigh: [234,88,12],    // green → orange (lower AQI = better)
    invert: true,
    format: (v) => `AQI ${v}`,
    insight: "Herrenkrug has the city's cleanest air (AQI 18) thanks to its vast forest cover. Buckau's industrial heritage still shows at AQI 42, but improving year on year.",
  },
  {
    key: "rent",    label: "Avg Rent",      unit: "€/mo",
    low: 620,   high: 800,
    colorLow: [245,237,216], colorHigh: [193,127,36],   // cream → amber
    format: (v) => `€${v}/mo`,
    insight: "Herrenkrug commands the highest rents (€780/mo) for its riverside green living. Lemsdorf is the most affordable at €640/mo.",
  },
  {
    key: "green",   label: "Green Space",   unit: "% area",
    low: 10,    high: 85,
    colorLow: [245,237,216], colorHigh: [5,150,105],    // cream → green
    format: (v) => `${v}%`,
    insight: "Herrenkrug leads with 82% green coverage — the Elbe meadows dominate the landscape. Altstadt has just 12% as the historic dense urban core.",
  },
  {
    key: "density", label: "Pop. Density",  unit: "per km²",
    low: 400,   high: 3200,
    colorLow: [245,237,216], colorHigh: [8,145,178],    // cream → cyan
    format: (v) => `${v}/km²`,
    insight: "Stadtfeld West is the most densely settled district. Herrenkrug at 420/km² is largely nature reserve and parkland.",
  },
];

// ── Color utils ───────────────────────────────────────────────────────────────

function lerpColor(low, high, t) {
  const r = Math.round(low[0] + (high[0] - low[0]) * t);
  const g = Math.round(low[1] + (high[1] - low[1]) * t);
  const b = Math.round(low[2] + (high[2] - low[2]) * t);
  return `rgb(${r},${g},${b})`;
}

function getColor(metric, value) {
  const t = Math.max(0, Math.min(1, (value - metric.low) / (metric.high - metric.low)));
  const tAdjusted = metric.invert ? 1 - t : t;
  return lerpColor(metric.colorLow, metric.colorHigh, tAdjusted);
}

function getRawT(metric, value) {
  const t = Math.max(0, Math.min(1, (value - metric.low) / (metric.high - metric.low)));
  return metric.invert ? 1 - t : t;
}

// ── POI icon factory ──────────────────────────────────────────────────────────

function makePOIIcon(poi) {
  return L.divIcon({
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
    html: `<div style="
      width:32px;height:32px;border-radius:50%;
      background:rgba(255,249,235,0.95);
      border:2px solid ${poi.color};
      box-shadow:0 2px 8px rgba(0,0,0,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:14px;line-height:1;cursor:pointer;
    ">${poi.emoji}</div>`,
  });
}

// ── Fit-bounds helper ─────────────────────────────────────────────────────────

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    map.setView([52.1205, 11.6276], 12);
  }, [map]);
  return null;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function CityMap() {
  const [activeMKey, setActiveMKey] = useState("pop");
  const [selected, setSelected]     = useState(null); // district
  const [showPois, setShowPois]      = useState(true);

  const metric = METRICS.find(m => m.key === activeMKey);

  return (
    <div className="flex h-full overflow-hidden" style={{ background: "#F5EDD8" }}>

      {/* ── Left control panel ──────────────────────────────────────────── */}
      <div
        className="w-72 shrink-0 flex flex-col overflow-y-auto border-r"
        style={{ background: "rgba(237,224,200,0.97)", borderColor: "rgba(160,130,90,0.22)" }}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(160,130,90,0.18)" }}>
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={14} weight="fill" style={{ color: "#C17F24" }} />
            <p className="text-[13px] font-bold" style={{ color: "#2D1F0F" }}>City Intelligence Map</p>
          </div>
          <p className="text-[11px]" style={{ color: "rgba(45,31,15,0.45)" }}>
            Magdeburg · 12 districts · live stats
          </p>
        </div>

        {/* Metric selector */}
        <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(160,130,90,0.18)" }}>
          <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(45,31,15,0.38)" }}>
            Data layer
          </p>
          <div className="space-y-1.5">
            {METRICS.map(m => (
              <button
                key={m.key}
                onClick={() => setActiveMKey(m.key)}
                className="w-full flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left transition-all duration-150"
                style={{
                  background: activeMKey === m.key ? "rgba(193,127,36,0.15)" : "rgba(45,31,15,0.04)",
                  border: `1px solid ${activeMKey === m.key ? "rgba(193,127,36,0.35)" : "rgba(160,130,90,0.18)"}`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: activeMKey === m.key ? "#C17F24" : "rgba(45,31,15,0.20)" }}
                />
                <div>
                  <p className="text-[12.5px] font-semibold" style={{ color: activeMKey === m.key ? "#A36318" : "rgba(45,31,15,0.65)" }}>
                    {m.label}
                  </p>
                  <p className="text-[10px]" style={{ color: "rgba(45,31,15,0.38)" }}>{m.unit}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* POI toggle */}
        <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(160,130,90,0.18)" }}>
          <button
            onClick={() => setShowPois(p => !p)}
            className="w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-all"
            style={{
              background: showPois ? "rgba(8,145,178,0.10)" : "rgba(45,31,15,0.04)",
              border: `1px solid ${showPois ? "rgba(8,145,178,0.28)" : "rgba(160,130,90,0.18)"}`,
            }}
          >
            <span className="text-[12.5px] font-semibold" style={{ color: showPois ? "#0891B2" : "rgba(45,31,15,0.55)" }}>
              Points of Interest
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: showPois ? "#0891B2" : "rgba(45,31,15,0.12)", color: showPois ? "#fff" : "rgba(45,31,15,0.50)" }}>
              {showPois ? "ON" : "OFF"}
            </span>
          </button>
        </div>

        {/* Selected district info */}
        <div className="px-4 py-4 flex-1">
          {selected ? (
            <>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[13px] font-bold" style={{ color: "#2D1F0F" }}>{selected.name}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(45,31,15,0.08)", color: "rgba(45,31,15,0.50)" }}
                >
                  ✕ Close
                </button>
              </div>
              <div className="space-y-2">
                {METRICS.map(m => {
                  const val = selected[m.key];
                  const t = getRawT(m, val);
                  return (
                    <div key={m.key} className="rounded-xl p-3"
                      style={{ background: "rgba(255,249,235,0.90)", border: "1px solid rgba(160,130,90,0.20)" }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="text-[11px]" style={{ color: "rgba(45,31,15,0.50)" }}>{m.label}</p>
                        <p className="text-[13px] font-bold" style={{ color: getColor(m, val) }}>{m.format(val)}</p>
                      </div>
                      <div className="rounded-full overflow-hidden" style={{ background: "rgba(160,130,90,0.15)", height: 4 }}>
                        <div className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${t * 100}%`, background: getColor(m, val) }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <MapPin size={28} style={{ color: "rgba(45,31,15,0.20)", margin: "0 auto 10px" }} />
              <p className="text-[12px]" style={{ color: "rgba(45,31,15,0.38)" }}>
                Click a district circle on the map to see its stats
              </p>
            </div>
          )}
        </div>

        {/* Insight */}
        <div className="px-4 py-4 border-t" style={{ borderColor: "rgba(160,130,90,0.18)" }}>
          <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(45,31,15,0.35)" }}>Insight</p>
          <p className="text-[11.5px] leading-relaxed" style={{ color: "rgba(45,31,15,0.55)" }}>
            {metric.insight}
          </p>
        </div>
      </div>

      {/* ── Map area ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Legend strip above map */}
        <div
          className="flex items-center gap-4 px-5 py-2.5 border-b shrink-0"
          style={{ background: "rgba(255,249,235,0.95)", borderColor: "rgba(160,130,90,0.18)" }}
        >
          <p className="text-[11px] font-semibold" style={{ color: "rgba(45,31,15,0.55)" }}>
            {metric.label} legend:
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]" style={{ color: "rgba(45,31,15,0.45)" }}>
              {metric.invert ? "Best" : "Low"} ({metric.low}{metric.key === "rent" ? "€" : ""})
            </span>
            <div className="w-24 h-3 rounded-full" style={{
              background: `linear-gradient(to right, rgb(${metric.colorLow.join(",")}), rgb(${metric.colorHigh.join(",")}))`
            }} />
            <span className="text-[10px]" style={{ color: "rgba(45,31,15,0.45)" }}>
              {metric.invert ? "Worst" : "High"} ({metric.high}{metric.key === "rent" ? "€" : ""})
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3 text-[10px]" style={{ color: "rgba(45,31,15,0.40)" }}>
            <span>● District (circle = population)</span>
            {showPois && <span>📍 Point of interest</span>}
          </div>
        </div>

        {/* Leaflet map */}
        <div className="flex-1">
          <MapContainer
            center={[52.1205, 11.6276]}
            zoom={12}
            style={{ width: "100%", height: "100%" }}
            zoomControl={true}
            attributionControl={true}
          >
            <FitBounds />

            {/* CartoDB Positron — clean light tiles matching cream theme */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
              subdomains="abcd"
              maxZoom={19}
            />

            {/* District circles */}
            {DISTRICTS.map(d => {
              const val   = d[activeMKey];
              const color = getColor(metric, val);
              const radius = Math.max(14, Math.min(40, 14 + (d.pop / 20000) * 26));
              return (
                <CircleMarker
                  key={d.id}
                  center={[d.lat, d.lng]}
                  radius={radius}
                  pathOptions={{
                    fillColor: color,
                    fillOpacity: 0.72,
                    color: "rgba(255,255,255,0.85)",
                    weight: 2,
                  }}
                  eventHandlers={{
                    click: () => setSelected(d),
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: 180 }}>
                      <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{d.name}</p>
                      <table style={{ fontSize: 11, width: "100%", borderCollapse: "collapse" }}>
                        <tbody>
                          {METRICS.map(m => (
                            <tr key={m.key}>
                              <td style={{ color: "#888", paddingRight: 8, paddingBottom: 3 }}>{m.label}</td>
                              <td style={{ fontWeight: 600 }}>{m.format(d[m.key])}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}

            {/* POI markers */}
            {showPois && POIS.map(poi => (
              <Marker
                key={poi.name}
                position={[poi.lat, poi.lng]}
                icon={makePOIIcon(poi)}
              >
                <Popup>
                  <div style={{ minWidth: 180 }}>
                    <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{poi.name}</p>
                    <p style={{ fontSize: 11, color: "#666" }}>{poi.desc}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Bottom stats strip */}
        <div
          className="flex items-center gap-0 shrink-0 border-t overflow-x-auto"
          style={{ background: "rgba(255,249,235,0.95)", borderColor: "rgba(160,130,90,0.18)" }}
        >
          {[
            { label: "City Population",   value: "237,765", icon: Users,        color: "#0D9488" },
            { label: "Avg City Rent",      value: "€700/mo", icon: Buildings,    color: "#D97706" },
            { label: "Avg City AQI",       value: "AQI 29",  icon: Drop,         color: "#059669" },
            { label: "Green Space",        value: "~50%",    icon: Leaf,         color: "#059669" },
            { label: "Tram Lines",         value: "12 lines",icon: Train,        color: "#0891B2" },
            { label: "University",         value: "14,500 stu",icon: GraduationCap, color: "#1D4ED8" },
            { label: "Sustainability",     value: "72/100",  icon: Lightning,    color: "#C17F24" },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-2 px-4 py-2.5 border-r shrink-0"
              style={{ borderColor: "rgba(160,130,90,0.18)" }}>
              <s.icon size={13} weight="fill" style={{ color: s.color, flexShrink: 0 }} />
              <div>
                <p className="text-[11px] font-bold" style={{ color: "#2D1F0F" }}>{s.value}</p>
                <p className="text-[9px]" style={{ color: "rgba(45,31,15,0.42)" }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
