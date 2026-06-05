"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import { populationHistory, employmentHistory } from "@/lib/mockData";

export default function OverviewCharts() {
  const fmt = (v) => (v / 1e6).toFixed(2) + "M";

  return (
    <section className="grid lg:grid-cols-2 gap-6">
      <GlassCard className="p-5">
        <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Population Growth</p>
        <p className="text-[11px] mb-4" style={{ color: "rgba(45,31,15,0.35)" }}>2010 – 2024</p>
        <AreaWidget
          data={populationHistory}
          dataKey="total"
          xKey="year"
          color="#3b82f6"
          height={200}
          formatter={fmt}
          gradientId="popGrad"
        />
      </GlassCard>

      <GlassCard className="p-5">
        <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>Employment Rate</p>
        <p className="text-[11px] mb-4" style={{ color: "rgba(45,31,15,0.35)" }}>2016 – 2024 · %</p>
        <AreaWidget
          data={employmentHistory}
          dataKey="rate"
          xKey="year"
          color="#10b981"
          height={200}
          unit="%"
          gradientId="empGrad"
        />
      </GlassCard>
    </section>
  );
}
