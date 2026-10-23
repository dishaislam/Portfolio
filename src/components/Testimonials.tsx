"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/agencyData";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E7E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="aarong-badge mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8D5B18]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1816] tracking-tight">
            Client Perspectives<span className="text-[#8D5B18]">.</span>
          </h2>
          <div className="w-12 h-px bg-[#8D5B18] mx-auto my-5" />
          <p className="font-sans text-sm sm:text-base text-[#5E5852] leading-relaxed">
            Trusted by environmental teams, telecom infrastructure directors, and AI agritech founders across Europe, the US, and Asia.
          </p>
        </div>

        {/* Testimonials Grid (Aarong Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col justify-between hover:border-[#1A1816] transition-all duration-300"
            >
              <div>
                <Quote className="w-7 h-7 text-[#8D5B18]/60 mb-5" />
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#8D5B18] text-[#8D5B18]" />
                  ))}
                </div>

                <p className="font-serif text-base sm:text-lg text-[#1A1816] leading-relaxed italic mb-6">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE4D9]">
                <div className="font-sans font-semibold text-[#1A1816] text-xs uppercase tracking-[0.16em]">
                  {item.client}
                </div>
                <div className="font-sans text-xs text-[#79716B] mt-0.5">
                  {item.project} &middot; {item.location}
                </div>
                <div className="mt-2 text-xs uppercase font-sans font-bold tracking-[0.18em] text-[#8D5B18]">
                  {item.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
