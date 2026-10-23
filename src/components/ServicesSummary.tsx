import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { OFFERING_GROUPS } from "@/data/offerings";
import { offeringImage } from "@/lib/offeringImage";

const SUMMARY = [
  { id: "ai", heading: "AI agents", cta: "Explore AI agents", cover: "rag-chatbot" },
  { id: "web", heading: "Websites and online shops", cta: "Explore websites and shops", cover: "ecommerce" },
  { id: "gis", heading: "Maps and satellite intelligence", cta: "Explore maps and GIS", cover: "lidar-3d" },
];

export default function ServicesSummary() {
  return (
    <section aria-labelledby="services-heading" className="py-14 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
            What we build
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Three things, done well. Tell us the problem and we&apos;ll build what solves it, then hand you everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUMMARY.map((s) => {
            const group = OFFERING_GROUPS.find((g) => g.id === s.id)!;
            const cover = group.items.find((i) => i.slug === s.cover)!;
            const src = offeringImage(cover.slug) ?? cover.fallback ?? null;
            return (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="bs-card group bg-white rounded-3xl border border-slate-200 p-5 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-slate-100 to-slate-200">
                  {src ? (
                    <Image src={src} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-slate-500">
                      <ImageIcon className="w-6 h-6" aria-hidden="true" />
                      <span className="text-xs font-medium">Reference image</span>
                    </div>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-950">{s.heading}</h3>
                <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{group.intro}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.slice(0, 4).map((i) => (
                    <li key={i.slug} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      {i.title}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] group-hover:underline underline-offset-4">
                  {s.cta}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
