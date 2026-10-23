import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ImageIcon } from "lucide-react";
import { OFFERING_GROUPS, type Offering } from "@/data/offerings";
import { offeringImage } from "@/lib/offeringImage";

const COLS = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" } as const;

function Visual({ item, tall = true }: { item: Offering; tall?: boolean }) {
  const own = offeringImage(item.slug);
  const src = own ?? item.fallback ?? null;
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-slate-100 to-slate-200 ${tall ? "aspect-[4/3]" : "h-36"}`}>
      {src ? (
        <Image
          src={src}
          alt={`${item.title}: example`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover ${own ? "object-center" : "object-top"} group-hover:scale-105 transition-transform duration-500`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-slate-500">
          <ImageIcon className="w-6 h-6" aria-hidden="true" />
          <span className="text-xs font-medium">Reference image</span>
        </div>
      )}
    </div>
  );
}

export default function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section aria-label="Our services" className="py-14 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
            What we build
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            AI agents, online shops and map-based intelligence. Tell us the problem and we&apos;ll build what solves it, then hand you everything.
          </p>
        </div>
        )}

        <div className="space-y-14">
          {OFFERING_GROUPS.map((g) => (
            <div key={g.id} id={g.id}>
              <div className="mb-5 max-w-3xl">
                <h3 className="font-heading text-2xl font-bold text-slate-950">{g.title}</h3>
                <p className="mt-1.5 text-slate-600 text-base leading-relaxed">{g.intro}</p>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-2 ${COLS[g.columns]} gap-5`}>
                {g.items.map((s) => (
                  <article
                    key={s.slug}
                    className="bs-card group bg-white rounded-3xl border border-slate-200 p-4 flex flex-col hover:shadow-lg transition-shadow duration-300"
                  >
                    <Visual item={s} tall />
                    <h4 className="font-heading text-lg font-bold text-slate-950 leading-snug">{s.title}</h4>
                    <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{s.text}</p>
                    <ul className="mt-3 space-y-1 text-sm text-slate-700">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:underline underline-offset-4"
                    >
                      <span>Talk to us about this</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>

              {g.id === "gis" && (
                <p className="mt-5 text-sm text-slate-600 max-w-4xl">
                  <span className="font-semibold text-slate-800">You receive:</span> GeoJSON, shapefiles, GeoPackages, GeoTIFFs, Excel and CSV tables, KML/KMZ, print-ready PDF maps and interactive web maps, with the workflow and quality checks documented so results can be repeated.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
