"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import DonutWidget from "@/components/charts/DonutWidget";
import { transitRidership, modalSplit, congestionIndex } from "@/lib/mockData";

const fmtM = (v) => (v / 1e6).toFixed(1) + "M";
const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>{children}</p>;

export default function MobilityCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <GlassCard className="p-6 lg:col-span-2">
          <T>Public Transit Ridership</T>
          <S>Monthly riders · 2024</S>
          <AreaWidget
            data={transitRidership}
            dataKey="riders"
            xKey="month"
            color="#0891B2"
            height={200}
            formatter={fmtM}
            gradientId="riderGrad"
          />
        </GlassCard>

        <GlassCard className="p-6">
          <T>Modal Split</T>
          <p className="text-[11px] mb-2" style={{ color: "rgba(45,31,15,0.35)" }}>How people travel</p>
          <DonutWidget data={modalSplit} height={230} innerRadius={60} outerRadius={95} />
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <T>Daily Traffic Congestion Index</T>
        <S>Average weekday · 0–100 index</S>
        <BarWidget
          data={congestionIndex}
          bars={[{ dataKey: "index", color: "#2563EB", name: "Congestion" }]}
          xKey="hour"
          height={180}
        />
      </GlassCard>
    </div>
  );
}
