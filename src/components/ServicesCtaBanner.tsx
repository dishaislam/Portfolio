"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#02050E] text-white py-20 sm:py-28 border-t border-white/[0.08]">
      {/* Background Cinematic Earth Limb Image - Clean, no satellites or debris */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/services/earth_horizon_cta.jpg"
          alt="Earth curvature limb from space with atmospheric cyan glow"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft gradient to keep the top-right dark and text readable while preserving the bright blue Earth limb */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02050E]/70 via-[#02050E]/55 to-[#02050E]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#02050E]/20 to-[#02050E]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center text-center gap-8">
        <div className="max-w-2xl flex flex-col items-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
            LET&apos;S BUILD TOGETHER
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15]">
            Have a system in mind?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Tell us what you&apos;re trying to build. We&apos;ll help you determine
            the architecture, technology and path to production.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold transition-all duration-300 shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] hover:-translate-y-0.5"
          >
            <span>Book a Technical Discovery</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
