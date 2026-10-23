"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CapabilityItem {
  id: string;
  title: string;
  category: string;
  href: string;
}

const CAPABILITIES: CapabilityItem[] = [
  { id: "01", title: "AI Voice Receptionists", category: "Voice Systems", href: "/products/ai-voice-receptionist" },
  { id: "02", title: "Satellite Earth Observation & Radar", category: "SAR & Geodesy", href: "/products/geospatial-intelligence" },
  { id: "03", title: "Virtual Try-On Systems", category: "Computer Vision", href: "/products/virtual-try-on" },
  { id: "04", title: "Airborne LiDAR & 3D Canopy Mapping", category: "Point Clouds", href: "/products/geospatial-intelligence" },
  { id: "05", title: "Custom Websites & Web Platforms", category: "Full-Stack", href: "/services" },
  { id: "06", title: "Document AI & Knowledge Copilots", category: "RAG & LLM", href: "/services" },
  { id: "07", title: "Turnkey E-Commerce Stores", category: "Transactions", href: "/services" },
  { id: "08", title: "Predictive ML & Risk Scoring", category: "Supervised ML", href: "/case-studies" },
  { id: "09", title: "Computer Vision & Object Detection", category: "YOLO Detection", href: "/services" },
  { id: "10", title: "Flood Hazard & Risk Mapping", category: "Hydrospatial", href: "/products/geospatial-intelligence" },
  { id: "11", title: "Data Analytics & Dashboards", category: "Data Engineering", href: "/services" },
  { id: "12", title: "Interactive Web GIS Applications", category: "PostGIS & Leaflet", href: "/products/geospatial-intelligence" },
  { id: "13", title: "Rooftop Solar & Shadow Analysis", category: "Solar PV", href: "/products/geospatial-intelligence" },
];

export default function Marquee() {
  return (
    <section
      aria-label="Core Engineering Capabilities"
      className="relative z-20 pt-4 sm:pt-5 pb-12 sm:pb-14 bg-[#070E1E] overflow-hidden select-none"
    >
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#070E1E] via-[#070E1E]/85 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#070E1E] via-[#070E1E]/85 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Marquee Track with Pause on Hover */}
        <div className="animate-marquee flex items-center gap-3 sm:gap-3.5 py-1">
          {[...CAPABILITIES, ...CAPABILITIES].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group/chip inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.09] hover:border-blue-300/60 hover:-translate-y-0.5 hover:shadow-[0_0_22px_-4px_rgba(147,197,253,0.45)] focus-visible:outline-2 focus-visible:outline-blue-300 backdrop-blur-md transition-all duration-200 shrink-0"
            >
              <span className="text-xs sm:text-[13px] font-medium text-slate-200 group-hover/chip:text-white whitespace-nowrap transition-colors">
                {item.title}
              </span>
              <ArrowUpRight className="w-0 opacity-0 group-hover/chip:w-3.5 group-hover/chip:ml-1.5 group-hover/chip:opacity-100 text-blue-200 transition-all duration-200" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
