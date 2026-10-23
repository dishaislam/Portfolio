"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, Cpu, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

export default function HeroDeliverableShowcase() {
  const [activeTab, setActiveTab] = useState<"gis" | "ai">("gis");

  return (
    <div className="relative w-full">
      {/* Sleek Developer Terminal Window */}
      <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* Window dots & Terminal title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
            </div>
            <span className="font-sans text-xs text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>utsho-runtime // verified-output</span>
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab("gis")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeTab === "gis"
                  ? "bg-slate-800 text-white shadow-xs border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Geospatial (GIS)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeTab === "ai"
                  ? "bg-slate-800 text-white shadow-xs border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>AI &amp; E-Commerce</span>
            </button>
          </div>
        </div>

        {/* Viewport Content */}
        {activeTab === "gis" ? (
          <div>
            <div className="relative h-64 sm:h-80 w-full bg-slate-950">
              <Image
                src="/images/works/lidar_rooftop_solar_pv.jpg"
                alt="3D Airborne LiDAR Rooftop Solar PV Modeling"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-xs font-sans text-slate-200 border border-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 status-pulse" />
                <span>LiDAR nDSM &middot; Solstice Ray-Tracing</span>
              </div>
            </div>

            {/* Terminal Meta Bar */}
            <div className="p-5 bg-slate-950 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-sans text-xs tracking-wider text-slate-300 font-bold">
                  Lead: Rafi Mahmud Tumon &middot; M.Sc. TU Berlin
                </span>
                <span className="font-sans text-xs text-slate-400">1,073 Structures</span>
              </div>

              <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                Rooftop Solar PV Feasibility &amp; Canopy Shadow Casting
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                Processed airborne LiDAR point clouds. Delineated 1,073 building footprints, calculated roof slope/azimuth, and computed annual solar irradiance (kWh/m²).
              </p>

              {/* Status Telemetry */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-sans text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                  <span>GeoPackage Vector + GeoTIFF Rasters</span>
                </div>
                <Link
                  href="/products?selected=geospatial-intelligence"
                  className="text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1 underline underline-offset-4 decoration-slate-600"
                >
                  <span>Inspect GIS Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative h-64 sm:h-80 w-full bg-slate-950">
              <Image
                src="/images/works/legal_support_composite.jpg"
                alt="AI Platform Statutory Assistant & Document Parser"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-xs font-sans text-slate-200 border border-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 status-pulse" />
                <span>Statutory RAG &middot; Bilingual NLP</span>
              </div>
            </div>

            {/* Terminal Meta Bar */}
            <div className="p-5 bg-slate-950 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-sans text-xs tracking-wider text-slate-300 font-bold">
                  Lead: Sharmin Islam Disha &middot; AI Systems
                </span>
                <span className="font-sans text-xs text-slate-400">FastAPI &middot; Next.js</span>
              </div>

              <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                Website, AI Integration &amp; E-Commerce Platforms
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                Production bilingual legal research assistant with PDF clause extraction, alongside crop disease neural vision and B2B agrochemical catalog.
              </p>

              {/* Status Telemetry */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-sans text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                  <span>Production APIs &middot; Authentic Deliverables</span>
                </div>
                <Link
                  href="/products?selected=business-knowledge-assistant"
                  className="text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1 underline underline-offset-4 decoration-slate-600"
                >
                  <span>Inspect AI Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
