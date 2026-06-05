"use client";

import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
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

export default function LineWidget({
  data,
  lines,
  xKey = "year",
  height = 220,
  formatter,
  unit = "",
  showLegend = false,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
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
          formatter={(v, name) => [formatter ? formatter(v) : v + unit, name]}
          cursor={{ stroke: "rgba(160,130,90,0.20)" }}
        />
        {showLegend && (
          <Legend
            wrapperStyle={{ fontSize: "11px", color: "rgba(45,31,15,0.50)" }}
          />
        )}
        {lines.map(({ dataKey, color, name }) => (
          <Line
            key={dataKey}
            type="monotone"
            dataKey={dataKey}
            name={name ?? dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: color, strokeWidth: 0 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
