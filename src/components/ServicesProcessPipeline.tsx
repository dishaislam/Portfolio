"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface DeliveryStep {
  number: string;
  name: string;
  description: string;
}

const STEPS: DeliveryStep[] = [
  {
    number: "01",
    name: "Discover",
    description: "Understand the business problem, data and requirements.",
  },
  {
    number: "02",
    name: "Architect",
    description: "Design the system architecture, models and infrastructure.",
  },
  {
    number: "03",
    name: "Build",
    description: "Develop, integrate and test the production system.",
  },
  {
    number: "04",
    name: "Deploy",
    description: "Containerize, deploy and optimize.",
  },
  {
    number: "05",
    name: "Transfer",
    description: "Deliver source code, documentation and agreed model assets.",
  },
];

export default function ServicesProcessPipeline() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#040814] text-white overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background ambient glow aura */}
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,_rgba(37,99,235,0.12)_0%,_rgba(14,165,233,0.06)_40%,_transparent_75%)] blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Heading and Process Manifesto (Span 4 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              HOW WE WORK
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              From Engineering to Production.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              We follow a structured, transparent process to deliver reliable,
              scalable and maintainable systems — from discovery to handover.
            </p>
          </div>

          {/* Right Column: 5 Connected Process Nodes (Span 8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-3">
              {STEPS.map((step, idx) => {
                const isHovered = hoveredStep === idx;
                const hasNext = idx < STEPS.length - 1;

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className="group relative flex flex-col transition-all duration-300"
                  >
                    {/* Circle Node & Arrow */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs tracking-wider transition-all duration-300 ${
                          isHovered
                            ? "bg-white text-slate-950 ring-4 ring-white/20 shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                            : "bg-[#0A1224] text-white border border-slate-700/80 group-hover:border-white/50"
                        }`}
                      >
                        <span>{step.number}</span>
                      </div>

                      {/* Arrow to next step (on desktop) */}
                      {hasNext && (
                        <div className="hidden lg:flex items-center flex-1 pr-1">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors ml-auto" />
                        </div>
                      )}
                    </div>

                    {/* Step Name */}
                    <h3 className="font-heading text-base font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                      {step.name}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed pr-1">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
