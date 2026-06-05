"use client";

import GlassCard from "@/components/ui/GlassCard";
import BarWidget from "@/components/charts/BarWidget";
import AreaWidget from "@/components/charts/AreaWidget";
import DonutWidget from "@/components/charts/DonutWidget";
import { constructionActivity, rentTrend, housingByType } from "@/lib/mockData";

const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>{children}</p>;

export default function HousingCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <T>Housing Mix</T>
          <p className="text-[11px] mb-2" style={{ color: "rgba(45,31,15,0.35)" }}>By type · 2024</p>
          <DonutWidget data={housingByType} height={230} innerRadius={60} outerRadius={95} />
        </GlassCard>

        <GlassCard className="p-6 lg:col-span-2">
          <T>Average Monthly Rent</T>
          <S>€/month · 2016–2024</S>
          <AreaWidget
            data={rentTrend}
            dataKey="avgRent"
            xKey="year"
            color="#C17F24"
            height={200}
            formatter={(v) => `€${v}`}
            gradientId="rentGrad"
          />
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <T>Construction Activity</T>
        <S>Permits issued & completions · 2018–2024</S>
        <BarWidget
          data={constructionActivity}
          bars={[
            { dataKey: "permits",     color: "#D97706", name: "Permits Issued" },
            { dataKey: "completions", color: "#EA580C", name: "Completions"    },
          ]}
          xKey="year"
          height={220}
        />
      </GlassCard>
    </div>
  );
}
