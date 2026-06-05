"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import LineWidget from "@/components/charts/LineWidget";
import { populationHistory, migrationData } from "@/lib/mockData";

const fmt = (v) => (v / 1e6).toFixed(2) + "M";
const fmtK = (v) => (v / 1000).toFixed(0) + "k";

export default function PeopleCharts() {
  return (
    <div className="space-y-6">
      {/* Population trend */}
      <GlassCard className="p-6">
        <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Population Trend</p>
        <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>Total residents 2010–2024</p>
        <AreaWidget
          data={populationHistory}
          dataKey="total"
          xKey="year"
          color="#0D9488"
          height={220}
          formatter={fmt}
          gradientId="peoplePop"
        />
      </GlassCard>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Male vs Female */}
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Gender Split</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>Male vs Female 2010–2024</p>
          <LineWidget
            data={populationHistory}
            lines={[
              { dataKey: "male",   color: "#0891B2", name: "Male"   },
              { dataKey: "female", color: "#C17F24", name: "Female" },
            ]}
            xKey="year"
            height={200}
            formatter={fmtK}
            showLegend
          />
        </GlassCard>

        {/* Migration flow */}
        <GlassCard className="p-6">
          <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Migration Flow</p>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>Arrivals & departures 2018–2024</p>
          <BarWidget
            data={migrationData}
            bars={[
              { dataKey: "arrivals",   color: "#059669", name: "Arrivals"   },
              { dataKey: "departures", color: "#EA580C", name: "Departures" },
            ]}
            xKey="year"
            height={200}
            formatter={fmtK}
          />
        </GlassCard>
      </div>
    </div>
  );
}
