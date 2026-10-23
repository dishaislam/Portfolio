"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Target } from "lucide-react";

export default function ImpactBand() {
  return (
    <section aria-labelledby="impact-heading" className="relative bg-[#0B1026] text-white py-10 sm:py-12 overflow-hidden border-y border-slate-800">
      {/* Subtle topographic contour styling */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)`,
        }}
      />

      <div className="relative max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
          {/* Left Column: CTA & Headline */}
          <div className="flex-1 lg:max-w-[460px]">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-sm mb-3">
              <Target className="w-3.5 h-3.5 text-slate-300" />
              <span>Real impact, real numbers</span>
            </div>

            {/* Headline */}
            <h2 id="impact-heading" className="font-heading text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-white leading-tight">
              Got messy data and a big question?<br />
              <span className="text-white">Let&apos;s find the answer.</span>
            </h2>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0B1026] text-xs sm:text-[13px] font-bold hover:bg-slate-100 transition-all shadow-sm"
              >
                <span>Book a free 30-minute call</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </Link>
              <Link
                href="/products"
                className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-full border border-white/30 text-white text-xs sm:text-[13px] font-medium hover:bg-white/10 transition-colors"
              >
                <span>Explore products</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Metrics Row with Vertical Dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15">
            {/* Metric 1 */}
            <div className="sm:px-5 sm:first:pl-0">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                100K+
              </div>
              <p className="mt-1 text-xs text-slate-400 font-medium leading-tight">
                German Aerospace Center (DLR)
              </p>
            </div>

            {/* Metric 2 */}
            <div className="sm:px-5">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                1,073+
              </div>
              <p className="mt-1 text-xs text-slate-400 font-medium leading-tight">
                Rooftop Irradiance &amp; Shadow Modeling
              </p>
            </div>

            {/* Metric 3 */}
            <div className="sm:px-5">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                20+
              </div>
              <p className="mt-1 text-xs text-slate-400 font-medium leading-tight">
                Fibre Rollout Efficiency +20%
              </p>
            </div>

            {/* Metric 4 */}
            <div className="sm:px-5 sm:last:pr-0">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                100%
              </div>
              <p className="mt-1 text-xs text-slate-400 font-medium leading-tight">
                5-Star Top-Rated Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
