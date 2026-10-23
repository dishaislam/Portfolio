"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SIMULATION_SCENARIOS } from "@/data/agencyData";
import { MapPin, Cpu, CheckCircle2, FileText, Database, Layers, ArrowUpRight } from "lucide-react";

export default function InteractiveMapSim() {
  const [activeScenarioId, setActiveScenarioId] = useState(SIMULATION_SCENARIOS[0].id);
  const activeScenario = SIMULATION_SCENARIOS.find((s) => s.id === activeScenarioId) || SIMULATION_SCENARIOS[0];

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E7E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="aarong-badge mb-4">
            <Layers className="w-3.5 h-3.5 text-[#8D5B18]" />
            <span>Methodologies &amp; Scientific Pipelines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1816] tracking-tight">
            Production Case Studies<span className="text-[#8D5B18]">.</span>
          </h2>
          <div className="w-12 h-px bg-[#8D5B18] mx-auto my-5" />
          <p className="font-sans text-sm sm:text-base text-[#5E5852] leading-relaxed">
            Inspect verified technical methodologies executed by our leads—from German Aerospace Center (DLR) 
            deep learning tree crown extraction to radar SAR flood vulnerability models.
          </p>
        </div>

        {/* Interactive Scenario Selector Grid (Aarong Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SIMULATION_SCENARIOS.map((sc) => {
            const isSelected = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`text-left p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#1A1816] text-[#FAF8F5] border-[#1A1816] shadow-md -translate-y-1"
                    : "bg-[#FAF8F5] hover:bg-[#FFFFFF] border-[#E8E2D8] text-[#1A1816]"
                }`}
              >
                <div>
                  <div className={`flex items-center justify-between text-xs mb-2 ${isSelected ? "text-[#A89F91]" : "text-[#79716B]"}`}>
                    <span className="font-sans text-xs uppercase tracking-[0.16em]">{sc.domain}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isSelected ? "#FAF8F5" : "#8D5B18" }} />
                  </div>
                  <h3 className={`font-serif text-lg font-medium leading-snug ${isSelected ? "text-white" : "text-[#1A1816]"}`}>
                    {sc.title}
                  </h3>
                </div>
                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-sans ${isSelected ? "border-white/15" : "border-[#EAE4D9]"}`}>
                  <span className={`flex items-center gap-1 truncate ${isSelected ? "text-[#FAF8F5]/80" : "text-[#79716B]"}`}>
                    <MapPin className="w-3 h-3 text-[#8D5B18] shrink-0" />
                    {sc.region}
                  </span>
                  <span className={`font-semibold uppercase tracking-wider text-xs ${isSelected ? "text-white" : "text-[#1A1816]"}`}>
                    Inspect &rarr;
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Scenario Deep-Dive Panel */}
        <div className="p-6 sm:p-10 bg-[#FAF8F5] border border-[#E8E2D8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Cols: Main Architecture & Method */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="aarong-badge text-xs">
                    {activeScenario.domain}
                  </span>
                  <span className="font-sans text-xs text-[#79716B]">
                    Lead Specialist: <strong className="text-[#1A1816]">{activeScenario.lead}</strong>
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1816]">
                  {activeScenario.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-[#8D5B18] font-semibold mt-1">
                  Location: {activeScenario.region}
                </p>
              </div>

              {/* Objective */}
              <div className="p-5 bg-[#FFFFFF] border border-[#E7E1D6]">
                <div className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#79716B] mb-1">
                  Project Objective:
                </div>
                <p className="font-sans text-sm text-[#1A1816] leading-relaxed">
                  {activeScenario.objective}
                </p>
              </div>

              {/* Data & Methodology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-[#FFFFFF] border border-[#E7E1D6]">
                  <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#1A1816] mb-2">
                    <Database className="w-3.5 h-3.5 text-[#8D5B18]" />
                    <span>Input Data Sources</span>
                  </div>
                  <p className="font-sans text-xs text-[#5E5852] leading-relaxed">
                    {activeScenario.dataSources}
                  </p>
                </div>

                <div className="p-5 bg-[#FFFFFF] border border-[#E7E1D6]">
                  <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#1A1816] mb-2">
                    <Cpu className="w-3.5 h-3.5 text-[#8D5B18]" />
                    <span>Scientific Methodology</span>
                  </div>
                  <p className="font-sans text-xs text-[#5E5852] leading-relaxed">
                    {activeScenario.methodology}
                  </p>
                </div>
              </div>

              {/* Key Metric & Deliverable Summary */}
              <div className="p-5 bg-[#FFFFFF] border border-[#E7E1D6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#79716B]">
                    Validated Result:
                  </div>
                  <div className="font-serif text-lg font-medium text-[#1A1816] mt-0.5">
                    {activeScenario.keyMetric}
                  </div>
                  <p className="font-sans text-xs text-[#5E5852] mt-1">
                    {activeScenario.deliverableSummary}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="aarong-btn-primary shrink-0 text-center"
                >
                  <span>Inquire Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Col: High-Res Deliverable Figure */}
            <div className="space-y-4">
              <div className="relative h-72 sm:h-96 w-full bg-[#FFFFFF] border border-[#E7E1D6] overflow-hidden">
                <Image
                  src={activeScenario.image}
                  alt={activeScenario.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tools Badges */}
              <div>
                <div className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#79716B] mb-2">
                  Software &amp; Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeScenario.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#FFFFFF] border border-[#E7E1D6] text-xs font-sans uppercase tracking-[0.08em] text-[#5E5852]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
