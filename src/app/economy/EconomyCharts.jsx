"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import { employmentHistory, gdpGrowthHistory, businessActivity } from "@/lib/mockData";

const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>{children}</p>;

export default function EconomyCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <T>Employment Rate</T>
          <S>% of working-age population · 2016–2024</S>
          <AreaWidget
            data={employmentHistory}
            dataKey="rate"
            xKey="year"
            color="#D97706"
            height={200}
            unit="%"
            gradientId="empGrad2"
          />
        </GlassCard>

        <GlassCard className="p-6">
          <T>GDP Growth</T>
          <S>Annual % change · 2016–2024</S>
          <BarWidget
            data={gdpGrowthHistory}
            bars={[{ dataKey: "growth", color: "#C17F24", name: "GDP Growth %" }]}
            xKey="year"
            height={200}
            unit="%"
          />
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <T>Business Activity</T>
        <S>Registrations vs closures · 2019–2024</S>
        <BarWidget
          data={businessActivity}
          bars={[
            { dataKey: "registered", color: "#D97706", name: "Registered" },
            { dataKey: "closed",     color: "#E11D48", name: "Closed"     },
          ]}
          xKey="year"
          height={200}
        />
      </GlassCard>
    </div>
  );
}
