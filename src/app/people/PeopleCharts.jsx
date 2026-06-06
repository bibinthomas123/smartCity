"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import LineWidget from "@/components/charts/LineWidget";
import { realPopulation, realBirthsDeaths } from "@/lib/realData";

const fmt  = (v) => (v / 1e6).toFixed(3) + "M";
const fmtK = (v) => (v / 1000).toFixed(0) + "k";

const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>{children}</p>;

export default function PeopleCharts() {
  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <T>Population Trend</T>
        <S>Hauptwohnsitz residents (December snapshot) - 1993-2024</S>
        <AreaWidget
          data={realPopulation}
          dataKey="total"
          xKey="year"
          color="#10B981"
          height={220}
          formatter={fmt}
          gradientId="peoplePop"
        />
      </GlassCard>

      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <T>Gender Split</T>
          <S>Male vs Female - 1993-2024</S>
          <LineWidget
            data={realPopulation}
            lines={[
              { dataKey: "male",   color: "#06B6D4", name: "Male"   },
              { dataKey: "female", color: "#2563EB", name: "Female" },
            ]}
            xKey="year"
            height={200}
            formatter={fmtK}
            showLegend
          />
        </GlassCard>

        <GlassCard className="p-6">
          <T>Births &amp; Deaths</T>
          <S>Annual counts - 2000-2024</S>
          <BarWidget
            data={realBirthsDeaths}
            bars={[
              { dataKey: "births", color: "#10B981", name: "Births" },
              { dataKey: "deaths", color: "#EF4444", name: "Deaths" },
            ]}
            xKey="year"
            height={200}
            formatter={(v) => v.toLocaleString()}
          />
        </GlassCard>
      </div>
    </div>
  );
}
