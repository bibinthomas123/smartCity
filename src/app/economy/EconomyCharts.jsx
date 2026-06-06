"use client";

import GlassCard from "@/components/ui/GlassCard";
import AreaWidget from "@/components/charts/AreaWidget";
import BarWidget from "@/components/charts/BarWidget";
import LineWidget from "@/components/charts/LineWidget";
import { realEmployment } from "@/lib/realData";
import { gdpGrowthHistory, businessActivity } from "@/lib/mockData";

const fmtK = (v) => (v / 1000).toFixed(1) + "k";
const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(15,23,42,0.65)" }}>{children}</p>;
const S = ({ children }) => <p className="text-[11px] mb-5" style={{ color: "rgba(15,23,42,0.40)" }}>{children}</p>;

const employmentChartData = realEmployment.map(r => ({
  year:    r.year,
  total:   r.total,
  male:    r.male,
  female:  r.female,
  foreign: r.foreign,
}));

export default function EconomyCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <T>Insured Employees at Workplace</T>
          <S>Sozialversicherungspflichtig Beschaeftigte - 2016-2023</S>
          <AreaWidget
            data={employmentChartData}
            dataKey="total"
            xKey="year"
            color="#F59E0B"
            height={200}
            formatter={fmtK}
            gradientId="empGrad2"
          />
        </GlassCard>

        <GlassCard className="p-6">
          <T>GDP Growth</T>
          <S>Annual % change - 2016-2024</S>
          <BarWidget
            data={gdpGrowthHistory}
            bars={[{ dataKey: "growth", color: "#2563EB", name: "GDP Growth %" }]}
            xKey="year"
            height={200}
            unit="%"
          />
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <T>Employment by Group</T>
        <S>Male - Female - Foreign nationals - 2016-2023</S>
        <LineWidget
          data={employmentChartData}
          lines={[
            { dataKey: "male",    color: "#06B6D4", name: "Male"    },
            { dataKey: "female",  color: "#2563EB", name: "Female"  },
            { dataKey: "foreign", color: "#EF4444", name: "Foreign" },
          ]}
          xKey="year"
          height={200}
          formatter={fmtK}
          showLegend
        />
      </GlassCard>

      <GlassCard className="p-6">
        <T>Business Activity</T>
        <S>Registrations vs closures - 2019-2024</S>
        <BarWidget
          data={businessActivity}
          bars={[
            { dataKey: "registered", color: "#F59E0B", name: "Registered" },
            { dataKey: "closed",     color: "#EF4444", name: "Closed"     },
          ]}
          xKey="year"
          height={200}
        />
      </GlassCard>
    </div>
  );
}
