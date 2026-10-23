"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";

interface FooterProps {
  theme?: "light" | "dark";
  showCta?: boolean;
}

export default function Footer({ theme = "dark", showCta = true }: FooterProps) {
  const isDark = theme === "dark";

  return (
    <>
      {/* Pre-Footer Action Banner */}
      {showCta && (
      <section
        className={`${
          isDark
            ? "bg-[#0A1020] text-white border-t border-b border-white/[0.08]"
            : "bg-[#F8FAFC] text-slate-950 border-b border-slate-200"
        } py-7 sm:py-8`}
      >
        <div className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
              Transform your ideas into intelligent systems.
            </h2>
            <p className="mt-0.5 text-slate-400 text-xs sm:text-[13px]">
              Let&apos;s build the right solution for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#172554] via-[#1E293B] to-[#334155] hover:from-[#1E3A8A] hover:to-[#475569] border border-slate-700/80 text-white text-xs sm:text-[13px] font-semibold transition-all shadow-sm w-fit"
          >
            <span>Schedule a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
          </Link>
        </div>
      </section>
      )}

      {/* Main Footer */}
      <footer
        className={`${
          isDark
            ? "bg-[#060D1A] text-slate-400 border-t border-white/[0.08]"
            : "bg-white text-slate-600 border-t border-slate-200"
        } pt-10 sm:pt-12 pb-8 sm:pb-10`}
      >
        <div className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8">
            {/* Column 1: Brand & Copyright */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div>
                <Link href="/" className="inline-flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white text-slate-950 font-bold text-xs flex items-center justify-center">
                    <span className="font-heading lowercase">u</span>
                  </div>
                  <span className="font-heading text-xl font-extrabold text-white lowercase">
                    {AGENCY_DISPLAY_NAME}<span className="text-slate-400">.</span>
                  </span>
                </Link>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  TURN YOUR DATA INTO INTELLIGENCE
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-4 lg:pt-0">
                &copy; 2025 Utsho. All rights reserved.
              </div>
            </div>

            {/* Column 2: Explore */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Founders
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Capabilities &amp; Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing &amp; Engagements
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Deliverables */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Full-Stack Web Platforms</li>
                <li>AI Integration &amp; Multi-Agent RAG</li>
                <li>Cloud &amp; Offline Backends</li>
                <li>Computer Vision &amp; Model Training</li>
                <li>Sentinel-1 SAR Radar Flood Mapping</li>
                <li>3D Airborne LiDAR Solar PV Yield</li>
              </ul>
            </div>

            {/* Column 4: Direct Access & Socials */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Direct Access
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Work directly with studio founders Sharmin &amp; Rafi on your geospatial or AI roadmap.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 text-xs font-semibold transition-all shadow-xs"
                  >
                    <span>Schedule a Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Sub-Footer */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <div>Berlin, Germany &amp; Global Remote Engineering</div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
