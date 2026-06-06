"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import DonutWidget from "@/components/charts/DonutWidget";
import TreemapWidget from "@/components/charts/TreemapWidget";
import { formatNumber } from "@/lib/utils";
import { co2Emissions, energyMix, airQualityHistory, wasteByType } from "@/lib/mockData";

const fmtMt = (v) => (v / 1e6).toFixed(2) + "Mt";
const WASTE_TOTAL = wasteByType.reduce((sum, w) => sum + w.tons, 0);
const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>{children}</p>;

export default function EnvironmentCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <GlassCard className="p-6 lg:col-span-2">
          <T>CO₂ Emissions</T>
          <S>Annual metric tons · 2015–2024</S>
          <AreaWidget
            data={co2Emissions}
            dataKey="tons"
            xKey="year"
            color="#059669"
            height={200}
            formatter={fmtMt}
            gradientId="co2Grad"
          />
        </GlassCard>

        <GlassCard className="p-6">
          <T>Energy Mix</T>
          <p className="text-[11px] mb-2" style={{ color: "rgba(45,31,15,0.35)" }}>By source · 2024</p>
          <DonutWidget data={energyMix} height={230} innerRadius={60} outerRadius={95} />
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <T>Monthly Air Quality Index</T>
        <S>Monthly avg. AQI · 2024</S>
        <BarWidget
          data={airQualityHistory}
          bars={[{ dataKey: "aqi", color: "#0D9488", name: "AQI" }]}
          xKey="month"
          height={160}
        />
      </GlassCard>

      <GlassCard className="p-6">
        <T>Waste by Type</T>
        <S>
          Annual collected volume · 2024 ·{" "}
          {formatNumber(WASTE_TOTAL)} t total
        </S>
        <TreemapWidget data={wasteByType} height={300} />
      </GlassCard>
    </div>
  );
}
