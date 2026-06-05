"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House, Users, Buildings, Train, Leaf,
  ChartBar, GraduationCap, TrendUp, MagnifyingGlass,
  Info, Lightning, Gear, CaretLeft, CaretRight, MapPin,
} from "@phosphor-icons/react";

const NAV = [
  { href: "/",            label: "Home",        icon: MapPin        },
  { href: "/overview",    label: "Overview",    icon: ChartBar      },
  { href: "/people",      label: "People",      icon: Users         },
  { href: "/housing",     label: "Housing",     icon: Buildings     },
  { href: "/mobility",    label: "Mobility",    icon: Train         },
  { href: "/environment", label: "Environment", icon: Leaf          },
  { href: "/economy",     label: "Economy",     icon: House         },
  { href: "/education",   label: "Education",   icon: GraduationCap },
  { href: "/trends",      label: "Trends",      icon: TrendUp       },
  { href: "/explorer",    label: "Explorer",    icon: MagnifyingGlass },
  { href: "/about",       label: "About",       icon: Info          },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sidebar-collapsed");
      if (saved !== null) setCollapsed(saved === "true");
    } catch {}
  }, []);

  function toggle() {
    setCollapsed(prev => {
      const next = !prev;
      try { localStorage.setItem("sidebar-collapsed", String(next)); } catch {}
      return next;
    });
  }

  return (
    <aside
      className="hidden md:flex flex-col shrink-0 h-full border-r transition-all duration-300 ease-in-out"
      style={{
        width: collapsed ? 64 : 240,
        background: "rgba(237, 224, 200, 0.97)",
        borderColor: "rgba(160,130,90,0.28)",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center border-b shrink-0 overflow-hidden"
        style={{
          borderColor: "rgba(160,130,90,0.22)",
          height: 64,
          padding: collapsed ? "0 14px" : "0 20px",
          justifyContent: collapsed ? "center" : "flex-start",
          gap: collapsed ? 0 : 12,
          transition: "padding 0.3s, gap 0.3s",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, #C17F24, #E8963A)" }}
        >
          <Lightning size={16} weight="fill" className="text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-sm font-semibold tracking-tight" style={{ color: "#2D1F0F" }}>CityPulse</p>
            <p className="text-[10px] font-medium tracking-wider uppercase" style={{ color: "rgba(45,31,15,0.40)" }}>Magdeburg</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4" style={{ padding: collapsed ? "16px 8px" : "16px 12px" }}>
        {!collapsed && (
          <p className="px-3 pb-2 text-[10px] font-semibold tracking-widest uppercase" style={{ color: "rgba(45,31,15,0.30)" }}>
            Explore
          </p>
        )}
        <div className="space-y-0.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                title={collapsed ? label : undefined}
                className="relative flex items-center rounded-lg text-[13.5px] font-medium transition-all duration-150 select-none"
                style={{
                  gap: collapsed ? 0 : 10,
                  padding: collapsed ? "10px 0" : "9px 12px",
                  justifyContent: collapsed ? "center" : "flex-start",
                  color: active ? "#A36318" : "rgba(45,31,15,0.48)",
                  background: active ? "rgba(193,127,36,0.13)" : "transparent",
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.background = "rgba(45,31,15,0.06)";
                    e.currentTarget.style.color = "rgba(45,31,15,0.78)";
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(45,31,15,0.48)";
                  }
                }}
              >
                {active && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full"
                    style={{ background: "linear-gradient(to bottom, #C17F24, #E8963A)" }}
                  />
                )}
                <Icon
                  size={17}
                  weight={active ? "fill" : "regular"}
                  className="shrink-0"
                />
                {!collapsed && label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer + Toggle */}
      <div
        className="border-t"
        style={{
          borderColor: "rgba(160,130,90,0.18)",
          padding: collapsed ? "12px 8px" : "12px 12px",
        }}
      >
        {!collapsed && (
          <>
            <Link
              href="/about"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-all duration-150"
              style={{ color: "rgba(45,31,15,0.38)" }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "rgba(45,31,15,0.65)";
                e.currentTarget.style.background = "rgba(45,31,15,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(45,31,15,0.38)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Gear size={16} />
              Settings
            </Link>
            <div className="mt-2 px-3">
              <p className="text-[10px]" style={{ color: "rgba(45,31,15,0.28)" }}>Data last refreshed</p>
              <p className="text-[11px] font-medium" style={{ color: "rgba(45,31,15,0.42)" }}>Dec 2024 · v2.4.0</p>
            </div>
          </>
        )}

        {/* Collapse toggle */}
        <button
          onClick={toggle}
          className="mt-3 w-full flex items-center justify-center rounded-lg py-2 transition-all duration-150"
          style={{ color: "rgba(45,31,15,0.40)" }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(45,31,15,0.07)";
            e.currentTarget.style.color = "rgba(45,31,15,0.70)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(45,31,15,0.40)";
          }}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <CaretRight size={15} /> : <CaretLeft size={15} />}
        </button>
      </div>
    </aside>
  );
}
