import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSpotlight from "@/components/HeroSpotlight";
import InteractiveSlider from "@/components/InteractiveSlider";
import { SIMULATION_SCENARIOS, AGENCY_DISPLAY_NAME } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: `Case Studies | ${AGENCY_DISPLAY_NAME}`,
  description:
    "Production case studies by utsho: satellite flood modelling, LiDAR solar analysis, a legal AI assistant, an agriculture platform and more, each delivered with full source code and data.",
};

// Projects whose screenshots are shown as separate pieces with room between them.
const GALLERY: Record<string, { src: string; w: number; h: number }[]> = {
  "legalsupport-rag": [
    { src: "/images/works/legal_phone_1.png", w: 332, h: 740 },
    { src: "/images/works/legal_phone_2.png", w: 332, h: 740 },
    { src: "/images/works/legal_phone_3.png", w: 332, h: 740 },
  ],
  "foshol360-ecommerce-ai": [
    { src: "/images/works/foshol_dashboard_clean.png", w: 1060, h: 680 },
    { src: "/images/works/foshol_site.png", w: 420, h: 740 },
  ],
};

// Plain-language headings for each project, keyed by scenario id.
const PLAIN: Record<string, { field: string; title: string; summary: string }> = {
  "taif-flood": { field: "Flood mapping, Saudi Arabia", title: "Mapping where flash floods are most likely", summary: "A risk map of the Taif basin built from satellite radar, rainfall records and terrain data." },
  "legalsupport-rag": { field: "Legal assistant", title: "A legal assistant that answers in English and Bengali", summary: "Answers questions from statutes and case records with a citation for every reply, and reviews uploaded legal documents." },
  "lidar-solar": { field: "Solar potential, urban housing", title: "How much sun every roof gets", summary: "3D building roofs extracted from aerial LiDAR, with yearly solar energy worked out roof by roof, including shade from trees and neighbours." },
  "foshol360-ecommerce-ai": { field: "Agriculture platform", title: "Leaf disease diagnosis and a dealer marketplace", summary: "Farmers photograph a leaf to get a diagnosis, and agrochemical dealers take orders on the same platform." },
  "tree-canopy-5610": { field: "Forestry and green space", title: "Counting and measuring every tree", summary: "Individual tree crowns outlined and measured from LiDAR, ready for biomass and audit reports." },
  "explainable-ml": { field: "Financial services", title: "Credit scores that explain themselves", summary: "A default-risk model that shows which factors drove each decision, so every score can be justified." },
  "berlin-roads": { field: "Cartography, Berlin", title: "Berlin's street network as a map and a graph", summary: "The city's streets turned into a connected network for analysis, plus a print-quality map atlas." },
};

const container = "max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function CaseStudiesPage() {
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

      {/* Hero: dark stage, same as the other pages */}
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
                Case studies
              </h1>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent">
                Real projects, real data.
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Walkthroughs of the maps, models and platforms we have delivered: what the problem was, which data we used, how we solved it, and what the client received.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
                >
                  <span>Discuss your project</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className={`inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors ${focusRing}`}
                >
                  <span>See our services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group relative w-full aspect-[1600/1131] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/works/rajshahi_urban_fabric.jpg"
                  alt="Map of Rajshahi city's streets and buildings in gold on dark blue"
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

      {/* Light sheet slides over the hero */}
      <div className="relative z-30 -mt-10 sm:-mt-12 rounded-t-[28px] sm:rounded-t-[40px] bg-[#F8FAFC] pb-20 shadow-[0_-18px_50px_-10px_rgba(0,0,0,0.55)] space-y-20 sm:space-y-28">
        {/* Projects */}
        <section aria-labelledby="projects-heading" className={`${container} pt-12 sm:pt-16`}>
          <div data-reveal className="max-w-2xl">
            <h2 id="projects-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Selected projects
            </h2>
            <p className="mt-2 text-slate-600 text-base leading-relaxed">
              Each one ended with the full code, data and documentation in the client&apos;s hands.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIMULATION_SCENARIOS.map((cs) => {
              const plain = PLAIN[cs.id];
              return (
                <article
                  key={cs.id}
                  id={cs.id}
                  data-reveal
                  className="scroll-mt-28 flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white"
                >
                  <div className="relative aspect-[4/3] border-b border-slate-200 bg-white">
                    {GALLERY[cs.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center gap-2.5 p-4">
                        {GALLERY[cs.id].map((g) => (
                          <div key={g.src} className="relative h-full min-w-0" style={{ flex: `${g.w / g.h} 1 0%` }}>
                            <Image src={g.src} alt="" fill sizes="200px" className="object-contain" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        sizes="(min-width: 1024px) 360px, 50vw"
                        className="object-contain p-2"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-slate-500">{plain?.field ?? cs.region}</p>
                    <h3 className="mt-1 font-heading text-lg font-bold tracking-tight leading-snug text-slate-950 text-balance">
                      {plain?.title ?? cs.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{plain?.summary ?? cs.objective}</p>
                    <dl className="mt-auto pt-4 text-[13px]">
                      <div className="border-t border-slate-200 py-2.5">
                        <dt className="font-semibold text-slate-950">Delivered</dt>
                        <dd className="mt-0.5 text-slate-600 leading-relaxed line-clamp-3">{cs.deliverableSummary}</dd>
                      </div>
                      <div className="border-t border-slate-200 pt-2.5">
                        <dt className="font-semibold text-slate-950">Built with</dt>
                        <dd className="mt-0.5 text-slate-600">{cs.tools.join(", ")}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
          <p data-reveal className="mt-10 text-base text-slate-600">
            Have something similar in mind? <Link href="/contact" className="font-semibold text-[#1E3A8A] underline underline-offset-4">Tell us about your project</Link>.
          </p>
        </section>

        {/* Interactive comparison */}
        <div data-reveal>
          <InteractiveSlider />
        </div>

        {/* Closing CTA */}
        <section className={container}>
          <div data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl">
            <div className="relative max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Have data you want to put to work?
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                From satellite imagery to document archives, we build a clear, repeatable pipeline around your data.
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
                href="/pricing"
                className="inline-flex items-center px-6 h-12 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>See pricing</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" showCta={false} />
    </main>
  );
}
