"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Users, Buildings, Train, Leaf,
  ChartBar, GraduationCap, TrendUp, MagnifyingGlass,
  Info, CaretLeft, CaretRight, MapPin, House, MapTrifold,
} from "@phosphor-icons/react";

const NAV = [
  { href: "/",            label: "Home",        icon: MapPin          },
  { href: "/overview",    label: "Overview",    icon: ChartBar        },
  { href: "/map",         label: "City Map",    icon: MapTrifold      },
  { href: "/people",      label: "People",      icon: Users           },
  { href: "/housing",     label: "Housing",     icon: Buildings       },
  { href: "/mobility",    label: "Mobility",    icon: Train           },
  { href: "/environment", label: "Environment", icon: Leaf            },
  { href: "/economy",     label: "Economy",     icon: House           },
  { href: "/education",   label: "Education",   icon: GraduationCap   },
  { href: "/trends",      label: "Trends",      icon: TrendUp         },
  { href: "/explorer",    label: "Explorer",    icon: MagnifyingGlass },
  { href: "/about",       label: "About",       icon: Info            },
];

const SIDEBAR_KEY = "sidebar-collapsed";

const navLinkClass =
  "relative flex items-center rounded-lg text-[13.5px] font-medium select-none transition-colors duration-150 hover:bg-[rgba(45,31,15,0.06)] hover:text-[rgba(45,31,15,0.80)]";

const iconBtnClass =
  "flex items-center justify-center rounded-lg transition-colors duration-150 hover:bg-[rgba(45,31,15,0.08)] hover:text-[rgba(45,31,15,0.75)]";

const footerToggleClass =
  "mt-2 w-full flex items-center justify-center rounded-lg py-2 gap-2 transition-colors duration-150 hover:bg-[rgba(45,31,15,0.08)] hover:text-[rgba(45,31,15,0.75)]";

const floatingTabClass =
  "absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-150 hover:scale-110";

let sidebarListeners = [];

function emitSidebarChange() {
  sidebarListeners.forEach((listener) => listener());
}

function subscribeSidebar(onStoreChange) {
  sidebarListeners.push(onStoreChange);
  return () => {
    sidebarListeners = sidebarListeners.filter((listener) => listener !== onStoreChange);
  };
}

function getSidebarCollapsed() {
  try {
    return localStorage.getItem(SIDEBAR_KEY) === "true";
  } catch {
    return false;
  }
}

function getSidebarCollapsedServer() {
  return false;
}

function setSidebarCollapsed(value) {
  try {
    localStorage.setItem(SIDEBAR_KEY, String(value));
  } catch {}
  emitSidebarChange();
}

export default function Sidebar() {
  const pathname = usePathname();
  const collapsed = useSyncExternalStore(
    subscribeSidebar,
    getSidebarCollapsed,
    getSidebarCollapsedServer,
  );

  const toggle = useCallback(() => {
    setSidebarCollapsed(!getSidebarCollapsed());
  }, []);

  return (
    <aside
      className="hidden md:flex flex-col shrink-0 h-full border-r relative"
      style={{
        width: collapsed ? 68 : 244,
        minWidth: collapsed ? 68 : 244,
        background: "rgba(237,224,200,0.97)",
        borderColor: "rgba(160,130,90,0.28)",
        transition: "width 0.28s cubic-bezier(0.4,0,0.2,1), min-width 0.28s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        className="flex items-center shrink-0 border-b"
        style={{
          height: 64,
          borderColor: "rgba(160,130,90,0.22)",
          padding: collapsed ? "0 10px" : "0 14px",
          justifyContent: collapsed ? "center" : "space-between",
          transition: "padding 0.28s",
        }}
      >
        <Link
          href="/"
          className="flex items-center overflow-hidden min-w-0"
          style={{ gap: collapsed ? 0 : 10, transition: "gap 0.28s" }}
          title="CityPulse — Magdeburg"
        >
          <div className="w-9 h-9 shrink-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="CityPulse Magdeburg"
              width={36}
              height={36}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div
            style={{
              overflow: "hidden",
              maxWidth: collapsed ? 0 : 160,
              opacity: collapsed ? 0 : 1,
              transition: "max-width 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.20s",
              whiteSpace: "nowrap",
            }}
          >
            <p className="text-sm font-semibold tracking-tight" style={{ color: "#2D1F0F" }}>CityPulse</p>
            <p className="text-[10px] font-medium tracking-wider uppercase" style={{ color: "rgba(45,31,15,0.40)" }}>Magdeburg</p>
          </div>
        </Link>

        {!collapsed && (
          <button
            onClick={toggle}
            className={iconBtnClass}
            style={{
              width: 28,
              height: 28,
              flexShrink: 0,
              color: "rgba(45,31,15,0.40)",
            }}
            title="Collapse sidebar"
          >
            <CaretLeft size={14} weight="bold" />
          </button>
        )}
      </div>

      <nav
        className="flex-1 overflow-y-auto"
        style={{ padding: collapsed ? "14px 8px" : "14px 10px" }}
      >
        {!collapsed && (
          <p
            className="pb-2 text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: "rgba(45,31,15,0.30)", paddingLeft: 10 }}
          >
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
                className={navLinkClass}
                style={{
                  gap: collapsed ? 0 : 10,
                  padding: collapsed ? "10px 0" : "9px 10px",
                  justifyContent: collapsed ? "center" : "flex-start",
                  color: active ? "#A36318" : "rgba(45,31,15,0.50)",
                  background: active ? "rgba(193,127,36,0.13)" : undefined,
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
                <span
                  style={{
                    overflow: "hidden",
                    maxWidth: collapsed ? 0 : 160,
                    opacity: collapsed ? 0 : 1,
                    transition: "max-width 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.18s",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                  }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div
        className="border-t shrink-0"
        style={{
          borderColor: "rgba(160,130,90,0.18)",
          padding: collapsed ? "10px 8px" : "10px 10px",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            maxHeight: collapsed ? 0 : 40,
            opacity: collapsed ? 0 : 1,
            transition: "max-height 0.28s, opacity 0.18s",
            paddingLeft: 10,
            marginTop: collapsed ? 0 : 6,
          }}
        >
          <p className="text-[10px]" style={{ color: "rgba(45,31,15,0.28)" }}>Data last refreshed</p>
          <p className="text-[11px] font-medium" style={{ color: "rgba(45,31,15,0.42)" }}>Dec 2024 · v2.4.0</p>
        </div>

        <button
          onClick={toggle}
          className={footerToggleClass}
          style={{ color: "rgba(45,31,15,0.38)" }}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <CaretRight size={14} /> : <CaretLeft size={14} />}
          <span
            style={{
              overflow: "hidden",
              maxWidth: collapsed ? 0 : 100,
              opacity: collapsed ? 0 : 1,
              transition: "max-width 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.18s",
              whiteSpace: "nowrap",
              display: "inline-block",
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            Collapse
          </span>
        </button>
      </div>

      {collapsed && (
        <button
          onClick={toggle}
          className={floatingTabClass}
          style={{
            right: -14,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(237,224,200,0.97)",
            border: "1px solid rgba(160,130,90,0.35)",
            boxShadow: "2px 0 8px rgba(160,130,90,0.18)",
            color: "#A36318",
            zIndex: 10,
          }}
          title="Expand sidebar"
        >
          <CaretRight size={12} weight="bold" />
        </button>
      )}
    </aside>
  );
}
