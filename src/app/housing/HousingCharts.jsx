"use client";

import GlassCard from "@/components/ui/GlassCard";
import BarWidget from "@/components/charts/BarWidget";
import AreaWidget from "@/components/charts/AreaWidget";
import DonutWidget from "@/components/charts/DonutWidget";
import { realRentPerSqm } from "@/lib/realData";
import { housingByType, constructionActivity } from "@/lib/mockData";

const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>{children}</p>;

export default function HousingCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <T>Housing Mix</T>
          <p className="text-[11px] mb-2" style={{ color: "rgba(15,23,42,0.40)" }}>By type - 2024</p>
          <DonutWidget data={housingByType} height={300} innerRadius={60} outerRadius={95} />
        </GlassCard>

        <GlassCard className="p-6 lg:col-span-2">
          <T>Average Net Rent per m&sup2;</T>
          <S>Nettokaltmiete (Mietspiegel) - EUR/m&sup2; - 2012-2024</S>
          <AreaWidget
            data={realRentPerSqm}
            dataKey="avgPerSqm"
            xKey="year"
            color="#2563EB"
            height={200}
            formatter={(v) => `€${v.toFixed(2)}/m²`}
            gradientId="rentGrad"
          />
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <T>Construction Activity</T>
        <S>Permits issued &amp; completions - 2018-2024</S>
        <BarWidget
          data={constructionActivity}
          bars={[
            { dataKey: "permits",     color: "#F59E0B", name: "Permits Issued" },
            { dataKey: "completions", color: "#EF4444", name: "Completions"    },
          ]}
          xKey="year"
          height={220}
        />
      </GlassCard>
    </div>
  );
}
