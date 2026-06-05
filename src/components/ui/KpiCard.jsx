"use client";

import { ArrowUp, ArrowDown } from "@phosphor-icons/react";
import SparkLine from "@/components/charts/SparkLine";
import GlassCard from "./GlassCard";

export default function KpiCard({ label, value, unit, change, changeType, color, sparkData }) {
  const isUp = changeType === "up";
  const absChange = Math.abs(change);

  return (
    <GlassCard className="p-5 flex flex-col gap-4 transition-all duration-200 group cursor-default"
      style={{
        border: "1px solid rgba(160,130,90,0.25)",
        background: "rgba(255,249,235,0.82)",
      }}
    >
      <div className="flex items-start justify-between">
        <p className="text-[13px] font-medium" style={{ color: "rgba(45,31,15,0.50)" }}>
          {label}
        </p>
        <span
          className="flex items-center gap-0.5 text-[11px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: isUp ? "rgba(5,150,105,0.12)" : "rgba(192,57,43,0.12)",
            color: isUp ? "#059669" : "#C0392B",
          }}
        >
          {isUp
            ? <ArrowUp size={10} weight="bold" />
            : <ArrowDown size={10} weight="bold" />
          }
          {absChange}%
        </span>
      </div>

      <div>
        <p className="text-3xl font-bold tracking-tight leading-none" style={{ color: "#2D1F0F" }}>
          {value}
        </p>
        {unit && (
          <p className="text-[12px] mt-1" style={{ color: "rgba(45,31,15,0.40)" }}>{unit}</p>
        )}
      </div>

      {sparkData && (
        <SparkLine data={sparkData} color={color} />
      )}
    </GlassCard>
  );
}
