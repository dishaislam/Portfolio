import React from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

interface TestimonialCard {
  quote: string;
  author: string;
  project: string;
}

const DELIVERED_WORK: TestimonialCard[] = [
  {
    quote:
      "Rafi is exceptional. He delivered analysis on over 1,100 parcel boundaries with impeccable precision, structured CSVs, and an interactive web map ahead of schedule. Truly top-tier GIS expertise.",
    author: "Environmental Consultancy Lead",
    project: "Private Land Parcel & Boundary Mapping \u00b7 United States",
  },
  {
    quote:
      "The synergy between remote sensing satellite time-series and deep learning computer vision provided insights our internal team had been struggling to obtain for months. Unbeatable speed and scientific rigour.",
    author: "Agritech Platform Founder",
    project: "Satellite Crop Yield & Disease Detection \u00b7 Germany / EU",
  },
  {
    quote:
      "Automated geospatial workflows across 20+ cities cut down our rollout assessment time by over 20%. The documentation and reproducible Docker scripts made handoff effortless.",
    author: "Telecom Infrastructure Director",
    project: "Fibre Network Automation & GIS Analysis \u00b7 Germany",
  },
];

export default function SelectedWork() {
  return (
    <section aria-labelledby="work-heading" className="py-10 md:py-14 bg-white border-b border-slate-200">
      <div className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7 sm:mb-9">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs mb-2.5">
              <FolderGit2 className="w-3.5 h-3.5 text-slate-900" />
              <span>Production Deliverables</span>
            </div>
            <h2 id="work-heading" className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              Delivered work
            </h2>
            <p className="mt-1.5 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-xl">
              Recent systems delivered across AI assistants, online commerce, and geospatial analytics. Each project solved an active problem for a real client.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-slate-900 hover:text-slate-600 transition-colors shrink-0"
          >
            <span>See all product systems</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* 3 Client Deliverable Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {DELIVERED_WORK.map((item) => (
            <div
              key={item.author}
              className="rounded-2xl border border-slate-200/90 bg-[#FBFBFC] hover:bg-white p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <div>
                {/* Top Row: Quote mark on left, Delivered badge on right */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-slate-400 text-2xl font-serif leading-none font-bold select-none">&ldquo;</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Delivered
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution & Context */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/70">
                <div className="text-xs sm:text-[12.5px] font-bold text-slate-900">
                  &mdash; {item.author}
                </div>
                <div className="mt-0.5 text-xs text-slate-500 font-medium">
                  {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
