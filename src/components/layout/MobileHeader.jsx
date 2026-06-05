"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  List, X, Lightning, House, Users, Buildings, Train, Leaf,
  ChartBar, GraduationCap, TrendUp, MagnifyingGlass, Info, MapPin,
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

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top bar — mobile only */}
      <header
        className="md:hidden flex items-center justify-between px-4 py-3 border-b shrink-0"
        style={{ background: "rgba(237,224,200,0.97)", borderColor: "rgba(160,130,90,0.28)" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #C17F24, #E8963A)" }}
          >
            <Lightning size={14} weight="fill" className="text-white" />
          </div>
          <span className="text-[15px] font-semibold" style={{ color: "#2D1F0F" }}>CityPulse</span>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="p-2 rounded-lg transition-all"
          style={{ color: "rgba(45,31,15,0.50)" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(45,31,15,0.07)"; e.currentTarget.style.color = "#2D1F0F"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(45,31,15,0.50)"; }}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </header>

      {/* Drawer overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50 flex"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-[260px] h-full flex flex-col py-4"
            style={{ background: "rgba(245,237,216,0.99)", backdropFilter: "blur(20px)" }}
            onClick={e => e.stopPropagation()}
          >
            <nav className="px-3 space-y-0.5 mt-2">
              {NAV.map(({ href, label, icon: Icon }) => {
                const active = href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all"
                    style={{
                      color: active ? "#A36318" : "rgba(45,31,15,0.55)",
                      background: active ? "rgba(193,127,36,0.13)" : "transparent",
                    }}
                  >
                    <Icon size={18} weight={active ? "fill" : "regular"} className="shrink-0" />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-1" style={{ background: "rgba(45,31,15,0.30)" }} />
        </div>
      )}
    </>
  );
}
