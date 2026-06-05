"use client";

import GlassCard from "@/components/ui/GlassCard";
import LineWidget from "@/components/charts/LineWidget";
import DonutWidget from "@/components/charts/DonutWidget";
import { enrollmentTrends, educationAttainment } from "@/lib/mockData";

const fmtK = (v) => (v / 1000).toFixed(0) + "k";
const T = ({ children }) => <p className="text-[13px] font-semibold mb-1" style={{ color: "rgba(45,31,15,0.60)" }}>{children}</p>;

export default function EducationCharts() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <GlassCard className="p-6 lg:col-span-2">
          <T>Enrollment Trends</T>
          <p className="text-[11px] mb-5" style={{ color: "rgba(45,31,15,0.35)" }}>Students by level · 2018–2024</p>
          <LineWidget
            data={enrollmentTrends}
            lines={[
              { dataKey: "primary",   color: "#0891B2", name: "Primary"   },
              { dataKey: "secondary", color: "#0D9488", name: "Secondary" },
              { dataKey: "tertiary",  color: "#C17F24", name: "Tertiary"  },
            ]}
            xKey="year"
            height={210}
            formatter={fmtK}
            showLegend
          />
        </GlassCard>

        <GlassCard className="p-6">
          <T>Attainment</T>
          <p className="text-[11px] mb-2" style={{ color: "rgba(45,31,15,0.35)" }}>Population 25+ · 2024</p>
          <DonutWidget data={educationAttainment} height={230} innerRadius={60} outerRadius={95} />
        </GlassCard>
      </div>
    </div>
  );
}
