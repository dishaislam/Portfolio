import React from "react";
import { Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/agencyData";

export default function HomeTestimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-10 md:py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-300 shadow-2xs mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
            <span>Client Feedback</span>
          </div>
          <h2 id="testimonials-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            What clients say
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Feedback from environmental, agritech and infrastructure teams we have delivered for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.client}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:border-slate-400 transition-colors duration-300"
            >
              <div>
                <Quote className="w-6 h-6 text-[var(--brand)]/40 mb-3" aria-hidden="true" />
                <blockquote className="text-slate-800 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{item.feedback}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-5 pt-4 border-t border-slate-100">
                <div className="font-heading font-bold text-slate-950 text-xs sm:text-sm">{item.client}</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  {item.project} &middot; {item.location}
                </div>
                <div className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                  {item.source}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
