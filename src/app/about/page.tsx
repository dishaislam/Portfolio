import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSpotlight from "@/components/HeroSpotlight";
import { FOUNDERS, AGENCY_TAGLINE } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: `About utsho | ${AGENCY_TAGLINE}`,
  description:
    "Meet Sharmin Islam Disha and Rafi Mahmud Tumon, the two founders behind utsho. We build websites, online shops, AI tools and map-based analysis, and you work with us directly.",
};

const PROFILES = [
  {
    photo: "/images/sharmin_hero_portrait.webp",
    ratio: "aspect-[790/920]",
    intro:
      "I build the software and AI side of utsho: websites, online shops, assistants that read documents, and models that predict. I like turning a vague idea into something a team can use every day.",
    focus: ["Websites and online shops", "AI assistants and document tools", "Prediction models with clear explanations", "Computer vision"],
    background: [
      "Full-stack web, machine learning and AI engineer",
      "Builds e-commerce storefronts and business platforms",
      "Explainable machine learning and computer vision",
      "Document assistants that cite their sources",
    ],
  },
  {
    photo: "/images/rafi_hero_portrait.webp",
    ratio: "aspect-[1286/1252]",
    intro:
      "I handle everything to do with maps and satellites. I trained in geodesy at TU Berlin, worked on tree mapping at the German Aerospace Center, and now help teams turn location data into decisions.",
    focus: ["Satellite and aerial image analysis", "3D city and rooftop models", "Flood and land-use mapping", "Interactive web maps"],
    background: [
      "M.Sc. in Geodesy and Geoinformation, TU Berlin",
      "Former researcher at the German Aerospace Center (DLR)",
      "Geospatial analyst at OXG Glasfaser",
      "Published research on satellite flood mapping",
    ],
  },
];

const STEPS = [
  { title: "We talk", text: "A free 30-minute call. You describe the problem and we ask questions until it's clear." },
  { title: "We agree a plan", text: "You get a written scope, a timeline and a price before any work starts." },
  { title: "We build and hand over", text: "You see progress as we go. At the end you receive the full code, documents and data." },
];

const VALUES = [
  { title: "You talk to the people building it", text: "Sharmin and Rafi join every call and review every delivery. There are no account managers in between." },
  { title: "You know the scope before we start", text: "Deliverables, timeline and price are written down and agreed first." },
  { title: "You own everything we make", text: "Code, models, data and documents are transferred to you, with no lock-in." },
];

const container = "max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function AboutPage() {
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

      {/* Hero: dark stage, same as the home page */}
      <div className="relative bg-[#070E1E] text-white overflow-hidden pb-24 sm:pb-28">
        <Navbar theme="dark" />
        <HeroSpotlight />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-[20%] right-[-5%] lg:right-[2%] w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(23,37,84,0.30)_0%,_rgba(15,23,42,0.15)_45%,_transparent_72%)] blur-[90px]" />
        </div>

        <section className={`relative z-10 ${container} pt-8 sm:pt-16`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-heading text-[34px] sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] text-white">
                Two founders, one studio.
              </h1>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent">
                The people who design it also build it.
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                We started utsho because the best projects happen when the people who design the solution are the same people who build it. Every client works with us directly, from the first call to the final handover.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
                >
                  <span>Book a free call</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/case-studies"
                  className={`inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors ${focusRing}`}
                >
                  <span>See our work</span>
                </Link>
              </div>
            </div>

            <ul className="lg:col-span-5 divide-y divide-white/10 border-y border-white/10">
              {VALUES.map((v) => (
                <li key={v.title} className="py-5">
                  <h2 className="font-heading text-base font-bold text-white">{v.title}</h2>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Light sheet slides over the hero */}
      <div className="relative z-30 -mt-10 sm:-mt-12 rounded-t-[28px] sm:rounded-t-[40px] bg-[#F8FAFC] pb-20 shadow-[0_-18px_50px_-10px_rgba(0,0,0,0.55)] space-y-20 sm:space-y-28">
        {/* Founders */}
        <section aria-labelledby="founders-heading" className={`${container} pt-12 sm:pt-16`}>
          <div className="max-w-2xl">
            <h2 data-reveal id="founders-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Meet the founders
            </h2>
            <p className="mt-2 text-slate-600 text-base leading-relaxed">
              One leads software and AI, the other leads maps and satellite data.
            </p>
          </div>

          <div className="mt-10 space-y-16 sm:space-y-24">
            {FOUNDERS.map((f, i) => {
              const p = PROFILES[i];
              return (
                <article
                  key={f.name}
                  data-reveal
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className={`group relative w-full ${p.ratio} overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.2)]`}>
                      <Image
                        src={p.photo}
                        alt={f.name}
                        fill
                        sizes="(min-width: 1024px) 460px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">{f.name}</h3>
                    <p className="mt-1 text-base font-medium text-slate-500">{f.role}</p>
                    <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">{p.intro}</p>

                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                      <div>
                        <h4 className="font-heading text-base font-bold text-slate-950">What I work on</h4>
                        <ul className="mt-3 border-b border-slate-200">
                          {p.focus.map((x) => (
                            <li key={x} className="border-t border-slate-200 py-2.5 text-sm text-slate-700 leading-snug">{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-bold text-slate-950">Background</h4>
                        <ul className="mt-3 border-b border-slate-200">
                          {p.background.map((x) => (
                            <li key={x} className="border-t border-slate-200 py-2.5 text-sm text-slate-700 leading-snug">{x}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <a
                        href={f.links.email}
                        className={`inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors ${focusRing}`}
                      >
                        <span>Email {f.name.split(" ")[0]}</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                      <a
                        href={f.links.linkedin}
                        className={`inline-flex items-center gap-1 text-sm font-semibold text-[#1E3A8A] hover:underline underline-offset-4 ${focusRing}`}
                      >
                        LinkedIn <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                      {"portfolio" in f.links && (
                        <a
                          href={(f.links as { portfolio?: string }).portfolio}
                          className={`inline-flex items-center gap-1 text-sm font-semibold text-[#1E3A8A] hover:underline underline-offset-4 ${focusRing}`}
                        >
                          Portfolio <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* How a project works */}
        <section aria-labelledby="how-heading" className={container}>
          <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.12)]">
            <div className="max-w-2xl">
              <h2 id="how-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">How a project works</h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">Three steps, and you are talking to the founders in every one.</p>
            </div>
            <ol data-line className="relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:before:absolute md:before:left-5 md:before:right-5 md:before:top-[1.1rem] md:before:h-px md:before:bg-slate-200">
              {STEPS.map((s, i) => (
                <li key={s.title} data-reveal className="relative">
                  <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-full bg-slate-950 text-white text-sm font-semibold ring-4 ring-white">{i + 1}</span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-950">{s.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section className={container}>
          <div data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl">
            <div className="relative max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">Have a project in mind?</h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Tell us what you are working on. We reply within one working day.
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
                href="/products"
                className="inline-flex items-center px-6 h-12 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>See our products</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" showCta={false} />
    </main>
  );
}
