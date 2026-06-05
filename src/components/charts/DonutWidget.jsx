"use client";

import {
  ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend,
} from "recharts";

const TOOLTIP_STYLE = {
  backgroundColor: "#FBF7EE",
  border: "1px solid rgba(160,130,90,0.28)",
  borderRadius: "10px",
  fontSize: "12px",
  color: "#2D1F0F",
  padding: "8px 12px",
  boxShadow: "0 4px 12px rgba(160,130,90,0.14)",
};

export default function DonutWidget({
  data,
  height = 220,
  innerRadius = 55,
  outerRadius = 90,
  centerLabel,
  centerValue,
  unit = "%",
  showLegend = true,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
          strokeWidth={0}
          paddingAngle={2}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          formatter={(v) => [`${v}${unit}`, ""]}
        />
        {showLegend && (
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: "11px", color: "rgba(45,31,15,0.52)" , paddingTop:"20px"}}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}
