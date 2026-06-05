"use client";

import {
  ResponsiveContainer, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid, Cell,
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

export default function BarWidget({
  data,
  bars,
  xKey = "year",
  height = 200,
  formatter,
  unit = "",
  stacked = false,
  radius = 4,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }} barGap={4} barCategoryGap="30%">
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(160,130,90,0.14)" vertical={false} />
        <XAxis
          dataKey={xKey}
          tick={{ fill: "rgba(45,31,15,0.38)", fontSize: 11 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ fill: "rgba(45,31,15,0.38)", fontSize: 11 }}
          tickLine={false}
          axisLine={false}
          width={46}
          tickFormatter={formatter}
        />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          cursor={{ fill: "rgba(160,130,90,0.07)" }}
          formatter={(v, name) => [formatter ? formatter(v) : v + unit, name]}
        />
        {bars.map(({ dataKey, color, name }) => (
          <Bar
            key={dataKey}
            dataKey={dataKey}
            name={name ?? dataKey}
            fill={color}
            radius={[radius, radius, 0, 0]}
            stackId={stacked ? "stack" : undefined}
            maxBarSize={48}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
