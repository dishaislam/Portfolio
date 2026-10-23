import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Satellite,
  Compass,
  Waves,
  Trees,
  Globe2,
  Activity,
  Layers,
} from "lucide-react";

export default function MapsShowcase() {
  return (
    <section aria-labelledby="maps-heading" className="py-10 md:py-14 bg-white border-b border-slate-200">
      <div className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7 sm:mb-9">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs mb-2.5">
              <Satellite className="w-3.5 h-3.5 text-slate-900" />
              <span>Earth Observation &amp; Geospatial Engineering</span>
            </div>
            <h2 id="maps-heading" className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              Maps that answer real questions
            </h2>
            <p className="mt-1.5 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-xl">
              We turn satellite, radar, and aerial LiDAR data into verifiable spatial intelligence that researchers, municipalities, and engineers rely on.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/products/geospatial-intelligence"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0B0F20] text-white text-xs sm:text-[13px] font-semibold hover:bg-slate-800 transition-all shadow-2xs"
            >
              <span>Explore Geospatial Engine</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Content Layout: Left High-Tech Telemetry Card + Right 3 Stat Cards (Zero Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left High-End Telemetry Card */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-[#FAFBFD] p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-slate-900" />
                  <span className="text-xs font-bold text-slate-900">Geospatial Intelligence Engine</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                  <Activity className="w-3 h-3 text-slate-900 animate-pulse" />
                  <span>Sentinel-1 &amp; LiDAR Calibrated</span>
                </span>
              </div>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Automated geospatial pipelines turning airborne point clouds and radar into production GeoPackage (.gpkg) layers. Validated with German Aerospace Center (DLR) and TU Berlin geodesy research.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Input Feeds</div>
                  <div className="font-semibold text-slate-800 mt-0.5">Sentinel-1/2, LiDAR, Drone</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Standard Outputs</div>
                  <div className="font-semibold text-slate-800 mt-0.5">GeoPackage, COG, LAS/LAZ</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-200/70 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Layers className="w-3.5 h-3.5 text-slate-600" />
                <span>QGIS &amp; ArcGIS Direct Compatibility</span>
              </div>
              <Link
                href="/products/geospatial-intelligence"
                className="text-xs font-bold text-slate-900 hover:text-slate-600 flex items-center gap-0.5"
              >
                <span>View Full Page &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right: 3 Metric Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: 3D Airborne LiDAR */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#FBFBFC] hover:bg-white p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Compass className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    3D Airborne LiDAR
                  </span>
                </div>
                <div className="font-heading text-2xl sm:text-[26px] font-extrabold text-slate-950 tracking-tight leading-none">
                  1,073
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 font-medium leading-tight">
                Roofs modeled from airborne LiDAR
              </p>
            </div>

            {/* Card 2: Satellite Radar (SAR) */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#FBFBFC] hover:bg-white p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Waves className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Satellite Radar (SAR)
                  </span>
                </div>
                <div className="font-heading text-2xl sm:text-[26px] font-extrabold text-slate-950 tracking-tight leading-none">
                  0.82
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 font-medium leading-tight">
                ROC-AUC prediction benchmark
              </p>
            </div>

            {/* Card 3: Multi-Spectral Satellite AI */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#FBFBFC] hover:bg-white p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Trees className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider truncate">
                    Multi-Spectral AI
                  </span>
                </div>
                <div className="font-heading text-2xl sm:text-[26px] font-extrabold text-slate-950 tracking-tight leading-none">
                  100K+
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 font-medium leading-tight">
                Canopies segmented at DLR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
