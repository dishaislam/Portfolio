import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSpotlight from "@/components/HeroSpotlight";
import { PRODUCTS_CATALOG, PRODUCT_COVERS } from "@/data/productsData";
import { imageRatio } from "@/data/imageSizes";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: `Products | ${AGENCY_DISPLAY_NAME}`,
  description:
    "AI tools, online shops and geospatial systems built by utsho. Every project is handed over with full source code.",
};

const container = "max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function ProductsPage() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white"
    >
      <ScrollReveal />
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
      </noscript>

      <div className="relative bg-[#070E1E] text-white overflow-hidden pb-24 sm:pb-28">
        <Navbar theme="dark" />
        <HeroSpotlight />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-[20%] right-[-5%] lg:right-[2%] w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(23,37,84,0.30)_0%,_rgba(15,23,42,0.15)_45%,_transparent_72%)] blur-[90px]" />
        </div>

        <section className={`relative z-10 ${container} pt-6 sm:pt-12`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <h1 className="font-heading text-[34px] sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-white">
                Products
              </h1>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent">
                Systems we build and hand over.
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Each of these is something we design, build and deploy for clients, with the full source code and documentation handed over at the end.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
                >
                  <span>Book technical discovery</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/case-studies"
                  className={`inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors ${focusRing}`}
                >
                  <span>See case studies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group relative w-full aspect-[1376/768] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/hero_gis_ai_software.webp"
                  alt="Satellite imagery of a coastline with a network of data points overlaid"
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-30 -mt-10 sm:-mt-12 rounded-t-[28px] sm:rounded-t-[40px] bg-[#F8FAFC] pb-20 shadow-[0_-18px_50px_-10px_rgba(0,0,0,0.55)] space-y-20 sm:space-y-28">
        <section aria-labelledby="catalog-heading" className={`${container} pt-12 sm:pt-16`}>
          <div className="max-w-2xl">
            <h2 data-reveal id="catalog-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              What we build
            </h2>
            <p className="mt-2 text-slate-600 text-base leading-relaxed">
              Open any product to see what it does and what you receive.
            </p>
          </div>

          <div className="mt-10 space-y-16 sm:space-y-24">
            {PRODUCTS_CATALOG.map((p, i) => {
              const cover = PRODUCT_COVERS[p.slug];
              return (
                <article
                  key={p.id}
                  data-reveal
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Link href={`/products/${p.slug}`} className={`group block rounded-3xl ${focusRing}`} aria-label={p.name}>
                      <div
                        className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.2)]"
                        style={{ aspectRatio: imageRatio(cover.src) }}
                      >
                        <Image
                          src={cover.src}
                          alt={cover.alt}
                          fill
                          sizes="(min-width: 1024px) 540px, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
                      {p.shortName}
                    </h3>
                    <p className="mt-4 text-base text-slate-700 leading-relaxed">{p.tagline}</p>

                    <ul className="mt-6 border-b border-slate-200">
                      {p.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="border-t border-slate-200 py-3 text-sm text-slate-700 leading-snug">{h}</li>
                      ))}
                    </ul>

                    <Link
                      href={`/products/${p.slug}`}
                      className={`mt-6 inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors ${focusRing}`}
                    >
                      <span>Open {p.shortName}</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={container}>
          <div data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl">
            <div className="relative max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Need something that is not listed?
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                We build custom systems too. Tell us the problem and we will send a fixed written scope.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold transition-colors shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Book a free call</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 h-12 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>See our services</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" showCta={false} />
    </main>
  );
}
