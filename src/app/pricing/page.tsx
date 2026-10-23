import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSpotlight from "@/components/HeroSpotlight";
import { ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  title: "Pricing | utsho",
  description:
    "How utsho prices AI tools, websites and online shops, and GIS and satellite projects. Free 30-minute call, written quote before any work starts, full code and data handed over.",
};

const PROMISES = [
  { title: "A written quote first", text: "You get the scope, timeline and price in writing before any work begins." },
  { title: "The price you agree is the price you pay", text: "Fixed prices, with two rounds of adjustments in every milestone." },
  { title: "Everything is yours at the end", text: "Code, data and documentation are handed over, with no lock-in." },
];

const GROUPS = [
  {
    title: "AI tools",
    examples: "AI assistants, voice agents, document tools and computer vision",
    price: "Quoted after a free call",
    how: "A fixed price based on how many systems it connects to and how much data it learns from.",
    includes: ["A working tool connected to your systems", "Testing on your own data", "Full code and documentation"],
  },
  {
    title: "Websites and online shops",
    examples: "Business sites, complete shops and payment integration",
    price: "Quoted after a free call",
    how: "A fixed price based on the number of pages, products and payment options.",
    includes: ["Design, build and launch", "Payments tested from click to receipt", "Admin training and full handover"],
  },
  {
    title: "Maps and satellite work",
    examples: "Map jobs, satellite analysis, LiDAR and 3D, web maps",
    price: "From $250",
    how: "Small map and data jobs start at $250 to $600. Larger analysis, AI and web-map projects are typically $1,200 to $3,500.",
    includes: ["GeoJSON, shapefile, GeoPackage, GeoTIFF or PDF maps", "Workflow and quality checks documented", "2 to 4 days for small jobs, 2 to 3 weeks for larger ones"],
  },
];

const FAQS = [
  {
    q: "How do I get a price?",
    a: "Book a free 30-minute call or send us a short description. We reply with a written scope, timeline and fixed price before any work begins.",
  },
  {
    q: "Can we hire you through Upwork or directly?",
    a: "Both work. We support fixed-price milestones and hourly contracts through Upwork with escrow, and we also invoice directly by bank transfer.",
  },
  {
    q: "How do you handle confidential data?",
    a: "We routinely sign mutual NDAs. Your images, scans and documents are processed in isolated encrypted workspaces and deleted or returned according to your policy.",
  },
  {
    q: "What happens if I want changes?",
    a: "Every fixed milestone includes two full rounds of adjustments, so the result matches what you asked for.",
  },
  {
    q: "Do I get the source code?",
    a: "Yes. You receive the documented code, setup files and data. The work is yours, with no lock-in and no ongoing fees unless you choose a retainer.",
  },
  {
    q: "Can you work on an ongoing basis?",
    a: "Yes. A monthly retainer, from $3,000, gives you both founders on call for new features, monitoring and model updates, with a 12-hour response time.",
  },
];

const container = "max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function PricingPage() {
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

        <section className={`relative z-10 ${container} pt-8 sm:pt-16`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-heading text-[34px] sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] text-white">
                Simple, fixed pricing.
              </h1>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent">
                You agree the price before work starts.
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Tell us what you need on a free 30-minute call. We reply with a written scope, a timeline and a fixed price, so there are no surprises.
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
                  href="/services"
                  className={`inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors ${focusRing}`}
                >
                  <span>See our services</span>
                </Link>
              </div>
            </div>

            <ul className="lg:col-span-5 divide-y divide-white/10 border-y border-white/10">
              {PROMISES.map((v) => (
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
        {/* Pricing by service */}
        <section aria-labelledby="pricing-heading" className={`${container} pt-12 sm:pt-16`}>
          <div className="max-w-2xl">
            <h2 data-reveal id="pricing-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              What it costs
            </h2>
            <p className="mt-2 text-slate-600 text-base leading-relaxed">
              Three kinds of work. Every one ends with the full code, data and documentation in your hands.
            </p>
          </div>

          <div className="mt-10 border-b border-slate-200">
            {GROUPS.map((g) => (
              <article
                key={g.title}
                data-reveal
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-slate-200 py-10"
              >
                <div className="lg:col-span-4">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-950">{g.title}</h3>
                  <p className="mt-2 text-base text-slate-500 leading-relaxed">{g.examples}</p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-base text-slate-700 leading-relaxed">{g.how}</p>
                  <ul className="mt-5 border-b border-slate-200">
                    {g.includes.map((x) => (
                      <li key={x} className="border-t border-slate-200 py-2.5 text-sm text-slate-700 leading-snug">{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-col lg:items-end lg:text-right">
                  <p className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">{g.price}</p>
                  <Link
                    href="/contact"
                    className={`mt-5 inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors ${focusRing}`}
                  >
                    <span>Get a quote</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p data-reveal className="mt-8 text-base text-slate-600 max-w-2xl leading-relaxed">
            Need us regularly? A monthly retainer starts at $3,000 and gives you both founders on call.
          </p>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <h2 data-reveal id="faq-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">Common questions</h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">Anything else? Ask us directly on a free 30-minute call.</p>
            </div>
            <div className="lg:col-span-8 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} data-reveal className="group rounded-2xl border border-slate-200/90 bg-white p-5 hover:border-slate-300 transition-colors">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-heading text-base font-bold text-slate-950">
                    <span>{f.q}</span>
                    <Plus className="w-5 h-5 text-slate-700 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className={container}>
          <div data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl">
            <div className="relative max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">Ready for a fixed quote?</h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Book a free call with Sharmin and Rafi. We reply within one working day.
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
                href="/case-studies"
                className="inline-flex items-center px-6 h-12 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>See case studies</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" showCta={false} />
    </main>
  );
}
