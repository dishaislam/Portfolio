import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, CheckCircle2 } from "lucide-react";
import { FOUNDERS } from "@/data/agencyData";

const INTROS = [
  "I build the AI side: assistants that read documents, models that predict, and the websites and shops around them. If your project involves software, you'll be talking to me.",
  "I'm the maps and satellite specialist. I trained in geodesy at TU Berlin and mapped over 100,000 tree crowns at the German Aerospace Center. If your project involves location, that's me.",
];

export default function FoundersStrip() {
  return (
    <section aria-labelledby="founders-heading" className="py-12 md:py-16 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200/90 shadow-2xs mb-2.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Senior Engineering Studio</span>
          </div>
          <h2 id="founders-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Two founders, one studio
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Every project is engineered and delivered directly by Sharmin and Rafi. No middle managers and no junior subcontractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {FOUNDERS.map((f, i) => (
            <article
              key={f.name}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col sm:flex-row gap-5 items-start shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                <Image src={f.image} alt={f.name} fill sizes="96px" className="object-cover" />
              </div>
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-950">{f.name}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    {f.role.includes("AI") ? "Lead AI Engineer" : "Geospatial Lead"}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500">{f.role}</p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pt-1">{INTROS[i]}</p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-900 transition-colors"
                  >
                    <span>Explore founder profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
