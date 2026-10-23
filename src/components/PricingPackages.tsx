"use client";

import React from "react";
import Link from "next/link";
import { PRICING_PACKAGES } from "@/data/agencyData";
import { Check, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function PricingPackages() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
            <span>Upwork &amp; Direct Engagement</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Transparent Pricing Models
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear milestones, guaranteed turnaround times, and fully documented reproducible 
            deliverables for teams worldwide. Upwork escrow supported.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlighted
                  ? "bg-white text-slate-900 border-2 border-slate-950 shadow-xl -translate-y-2 ring-4 ring-slate-100"
                  : "bg-white text-slate-900 border-slate-200 hover:border-slate-400 hover:shadow-md"
              }`}
            >
              {/* Highlight ribbon */}
              {pkg.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-950 text-white text-xs font-bold rounded-full shadow-md border border-slate-800">
                  Recommended Tier
                </div>
              )}

              <div>
                <div className="text-xs uppercase font-bold tracking-wider mb-2 text-slate-950">
                  {pkg.period}
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-950">
                  {pkg.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-slate-950">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-500">/ sprint</span>
                </div>
                <p className="text-xs mt-3 leading-relaxed text-slate-600">
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <span className="text-xs uppercase tracking-wider font-bold block mb-2 text-slate-900">
                    Scope of Deliverables:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-slate-900" />
                      <span className="text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className={pkg.highlighted ? "bs-btn-primary w-full text-center" : "bs-btn-secondary w-full text-center"}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
