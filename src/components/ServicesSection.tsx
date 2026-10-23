"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/agencyData";
import { Satellite, Mountain, Scan, Database, Brain, Sparkles, Check, ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  previewOnly?: boolean;
}

export default function ServicesSection({ previewOnly = false }: ServicesSectionProps) {
  const [filter, setFilter] = useState<"all" | "gis" | "ai" | "combined">("all");

  const filteredServices =
    filter === "all" ? SERVICES : SERVICES.filter((s) => s.category === filter);

  const displayedServices = previewOnly ? filteredServices.slice(0, 6) : filteredServices;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Satellite":
        return <Satellite className="w-5 h-5 text-[#1A1816]" />;
      case "Mountain":
        return <Mountain className="w-5 h-5 text-[#1A1816]" />;
      case "Scan":
        return <Scan className="w-5 h-5 text-[#1A1816]" />;
      case "Database":
        return <Database className="w-5 h-5 text-[#1A1816]" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-[#1A1816]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#1A1816]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#1A1816]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E7E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="aarong-badge mb-4">
              <span>Scientific &amp; Engineering Disciplines</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1816] tracking-tight">
              What We Deliver<span className="text-[#8D5B18]">.</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#5E5852] max-w-xl leading-relaxed">
              From one-off GIS mapping sprints and remote sensing analysis to scalable enterprise 
              spatial databases and custom LLM copilots.
            </p>
          </div>

          {/* Filter Bar (Aarong Minimalist Tabs) */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#FAF8F5] border border-[#E7E1D6]">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.16em] transition-all ${
                filter === "all" ? "bg-[#1A1816] text-[#FAF8F5] font-semibold" : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              All Disciplines
            </button>
            <button
              onClick={() => setFilter("gis")}
              className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.16em] transition-all ${
                filter === "gis" ? "bg-[#1A1816] text-[#FAF8F5] font-semibold" : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              GIS &amp; Remote Sensing
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.16em] transition-all ${
                filter === "ai" ? "bg-[#1A1816] text-[#FAF8F5] font-semibold" : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              AI &amp; LLM Systems
            </button>
            <button
              onClick={() => setFilter("combined")}
              className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.16em] transition-all ${
                filter === "combined" ? "bg-[#1A1816] text-[#FAF8F5] font-semibold" : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              Spatial AI Synergy
            </button>
          </div>
        </div>

        {/* Aarong Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-[#FAF8F5] border border-[#EAE4D9] flex flex-col justify-between group hover:border-[#1A1816] transition-all duration-300"
            >
              <div>
                {/* Top Row: Icon + Lead Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#FFFFFF] border border-[#E7E1D6]">
                    {getIcon(service.icon)}
                  </div>
                  <span className="aarong-badge text-[9px]">
                    Lead: {service.lead}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1A1816] group-hover:text-[#8D5B18] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-[#79716B] mt-1 mb-4 italic">
                  &ldquo;{service.tagline}&rdquo;
                </p>

                <p className="font-sans text-xs sm:text-sm text-[#5E5852] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-6 pt-5 border-t border-[#EAE4D9] space-y-2">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#1A1816] block mb-2">
                    Verified Deliverables:
                  </span>
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#443E38] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8D5B18] shrink-0 mt-1.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tools + Action */}
              <div className="pt-4 border-t border-[#EAE4D9]">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#FFFFFF] border border-[#E7E1D6] text-xs font-sans uppercase tracking-[0.1em] text-[#5E5852]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1816] flex items-center gap-1 hover:text-[#8D5B18] transition-colors"
                >
                  <span>Request Scoping &amp; SLA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {previewOnly && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="aarong-btn-outline"
            >
              <span>Explore Detailed Services &amp; Technical Stacks</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
