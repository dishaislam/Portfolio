"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, Terminal, Compass, Download } from "lucide-react";
import { AGENCY_DISPLAY_NAME, AGENCY_TAGLINE, AGENCY_METRICS } from "@/data/agencyData";

export default function Hero() {
  const [activePersona, setActivePersona] = useState<"joint" | "sharmin" | "rafi">("joint");

  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Aarong-style Editorial Container */}
      <div className="border border-[#E8E2D8] bg-[#FFFFFF] p-8 sm:p-14 md:p-20 relative text-center shadow-xs">
        
        {/* Editorial Eyebrow Tag */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="aarong-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 status-pulse" />
            <span>Dual-Specialist Studio</span>
          </div>

          <div className="aarong-badge">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8D5B18]" />
            <span>M.Sc. TU Berlin &middot; Ex-DLR &middot; Upwork Top-Rated</span>
          </div>
        </div>

        {/* Aarong Editorial Headline with Serif Elegance */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#79716B] font-semibold mb-4">
            {AGENCY_DISPLAY_NAME} &middot; Geospatial &amp; AI Engineering
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#1A1816] leading-[1.08] tracking-tight">
            Turn your data into <br />
            <span className="italic font-normal">intelligence<span className="text-[#8D5B18]">.</span></span>
          </h1>

          <div className="w-16 h-px bg-[#8D5B18] mx-auto my-7" />

          <p className="text-base sm:text-lg text-[#5E5852] max-w-2xl mx-auto font-sans leading-relaxed">
            We bridge radar SAR satellites, airborne LiDAR point clouds, and computer vision with enterprise Generative AI. Transforming raw spatial and business signals into decision-grade intelligence.
          </p>
        </div>

        {/* Interactive Persona / Perspective Switcher */}
        <div className="max-w-2xl mx-auto mt-6 mb-10">
          <div className="border border-[#E7E1D6] bg-[#FAF8F5] p-1 flex items-center justify-between gap-1">
            <button
              onClick={() => setActivePersona("joint")}
              className={`flex-1 py-2.5 px-3 text-xs font-sans uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activePersona === "joint"
                  ? "bg-[#1A1816] text-[#FAF8F5] font-semibold shadow-xs"
                  : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Synergy</span>
            </button>
            <button
              onClick={() => setActivePersona("sharmin")}
              className={`flex-1 py-2.5 px-3 text-xs font-sans uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activePersona === "sharmin"
                  ? "bg-[#1A1816] text-[#FAF8F5] font-semibold shadow-xs"
                  : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Sharmin (AI Lead)</span>
            </button>
            <button
              onClick={() => setActivePersona("rafi")}
              className={`flex-1 py-2.5 px-3 text-xs font-sans uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activePersona === "rafi"
                  ? "bg-[#1A1816] text-[#FAF8F5] font-semibold shadow-xs"
                  : "text-[#6B655F] hover:text-[#1A1816]"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Rafi (GIS &amp; Remote Sensing)</span>
            </button>
          </div>

          {/* Dynamic Persona Card */}
          <div className="mt-4 p-5 sm:p-6 bg-[#FAF8F5] border border-[#E7E1D6] text-left transition-all duration-300">
            {activePersona === "joint" && (
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex -space-x-3 shrink-0">
                  <div className="w-14 h-14 rounded-full ring-2 ring-white overflow-hidden relative shadow-xs">
                    <Image src="/images/sharmin_profile.jpg" alt="Sharmin Islam Disha" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="w-14 h-14 rounded-full ring-2 ring-white overflow-hidden relative shadow-xs">
                    <Image src="/images/rafi_profile.png" alt="Rafi Mahmud Tumon" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#1A1816] font-semibold">
                    The {AGENCY_DISPLAY_NAME} Dual-Core Advantage
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5E5852] font-sans mt-1 leading-relaxed">
                    A husband-and-wife collaborative studio. Uniting German Aerospace Center (DLR) remote sensing &amp; TU Berlin geoinformation science with enterprise Generative AI, agentic RAG, and computer vision systems.
                  </p>
                </div>
              </div>
            )}

            {activePersona === "sharmin" && (
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-14 h-14 rounded-full ring-2 ring-white overflow-hidden relative shrink-0 shadow-xs">
                  <Image src="/images/sharmin_profile.jpg" alt="Sharmin Islam Disha" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg text-[#1A1816] font-semibold">Sharmin Islam Disha</h4>
                    <span className="aarong-badge text-[9px] py-0.5">
                      Lead AI Engineer
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E5852] font-sans mt-1 leading-relaxed">
                    Specialized in enterprise Agentic RAG, domain-specific LLM copilots (LegalSupportAI, AgroGPT), PyTorch vision pipelines, and explainable ML with SHAP feature attribution.
                  </p>
                </div>
              </div>
            )}

            {activePersona === "rafi" && (
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-14 h-14 rounded-full ring-2 ring-white overflow-hidden relative shrink-0 shadow-xs">
                  <Image src="/images/rafi.png" alt="Rafi Mahmud Tumon" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg text-[#1A1816] font-semibold">Rafi Mahmud Tumon</h4>
                    <span className="aarong-badge text-[9px] py-0.5">
                      Geospatial Specialist
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E5852] font-sans mt-1 leading-relaxed">
                    M.Sc. in Geodesy (TU Berlin). 5+ years international research experience including German Aerospace Center (DLR) and OXG Glasfaser. Expert in Sentinel SAR, airborne LiDAR, and YOLOv12.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Aarong Luxury Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/products"
            className="aarong-btn-primary"
          >
            <span>Explore Products &amp; Systems</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href="/downloads/buildings_lidar.gpkg"
            download
            className="aarong-btn-outline"
          >
            <Download className="w-3.5 h-3.5 text-[#8D5B18]" />
            <span>Sample Deliverable (.gpkg)</span>
          </a>

          <Link
            href="/contact"
            className="aarong-btn-outline"
          >
            <span>Request Project Scope</span>
          </Link>
        </div>

        {/* Verified Metrics Strip (Aarong Editorial Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-[#E8E2D8]">
          {AGENCY_METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#EAE4D9] text-center"
            >
              <div className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-normal">
                {metric.value}
              </div>
              <div className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#1A1816] mt-1.5">
                {metric.label}
              </div>
              <div className="text-xs text-[#79716B] font-sans mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
