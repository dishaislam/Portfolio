"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShoppingBag, Globe2 } from "lucide-react";

const ITEMS = [
  { icon: Sparkles, name: "AI agents", line: "Voice, chat, document and vision agents", href: "/services#ai-systems" },
  { icon: ShoppingBag, name: "Websites and online shops", line: "Built end to end, payments included", href: "/services#web-ecommerce" },
  { icon: Globe2, name: "Geospatial analysis", line: "Satellite and LiDAR turned into maps", href: "/services#geospatial-lidar" },
];

interface HeroDockProps {
  theme?: "light" | "dark";
}

export default function HeroDock({ theme = "light" }: HeroDockProps) {
  const [i, setI] = useState(0);
  const reduced = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % ITEMS.length), 3200);
    return () => window.clearTimeout(t);
  }, [i, reduced]);

  const it = ITEMS[i];
  const Icon = it.icon;

  const isDark = theme === "dark";

  return (
    <div
      className={`w-full max-w-[440px] -mt-5 z-30 relative rounded-2xl backdrop-blur-xl p-3.5 sm:p-4 transition-colors ${
        isDark
          ? "bg-[#0B1120]/85 border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] text-white"
          : "bg-white/95 border border-slate-200/90 shadow-[0_16px_40px_-10px_rgba(15,23,42,0.12)] text-slate-900"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div key={i} className="gl-swap flex items-center gap-3 min-w-0" aria-live="off">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              isDark
                ? "bg-white/10 border border-white/20 text-white"
                : "bg-slate-100 border border-slate-200 text-slate-900"
            }`}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <div
              className={`text-sm font-bold leading-tight truncate ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {it.name}
            </div>
            <div
              className={`text-xs mt-0.5 truncate ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {it.line}
            </div>
          </div>
        </div>
        <Link
          href={it.href}
          className={`inline-flex items-center gap-1 px-3.5 h-9 rounded-full text-xs font-semibold transition-colors shrink-0 shadow-xs ${
            isDark
              ? "bg-white hover:bg-slate-100 text-slate-950"
              : "bg-slate-950 hover:bg-slate-800 text-white"
          }`}
        >
          <span>Explore</span>
          <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
