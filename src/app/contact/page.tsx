import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSpotlight from "@/components/HeroSpotlight";
import ContactSection from "@/components/ContactSection";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: `Contact | ${AGENCY_DISPLAY_NAME}`,
  description:
    "Tell us about your project. You talk directly with founders Sharmin Islam Disha and Rafi Mahmud Tumon, and we reply within one working day.",
};

const PROMISES = [
  { title: "You talk to the founders", text: "Sharmin and Rafi read every message and join every call." },
  { title: "The first call is free", text: "30 minutes to understand the problem and your data." },
  { title: "A written quote comes first", text: "Scope, timeline and a fixed price, before any work starts." },
];

const NEXT_STEPS = [
  { title: "We reply", text: "Within one working day, with a few questions or a time for a call." },
  { title: "We talk", text: "A free 30-minute call to understand your goals, data and constraints." },
  { title: "You get a written quote", text: "A clear scope, timeline and fixed price you can approve." },
];

const BRIEF = [
  { title: "What you want to achieve", text: "The problem you are solving and what a good result looks like." },
  { title: "Your data and systems", text: "What you already have, such as imagery, documents, a website or a database, and what we would need to connect to." },
  { title: "What you want to receive", text: "For example a working website, an assistant, a map, a GeoPackage, a PDF or the full source code." },
  { title: "Timing and how you want to work", text: "Your target date, and whether you prefer Upwork milestones, a direct invoice or a monthly retainer." },
];

const container = "max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function ContactPage() {
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
                Tell us about your project.
              </h1>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent">
                We reply within one working day.
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Send a few lines about what you want to build. You will hear from Sharmin or Rafi directly, not from a sales team.
              </p>
              <div className="mt-8">
                <a
                  href="#message"
                  className={`inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
                >
                  <span>Write to us</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
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
        {/* Form and what happens next */}
        <section id="message" aria-label="Contact" className={`${container} pt-12 sm:pt-16 scroll-mt-24`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div data-reveal className="lg:col-span-7">
              <ContactSection />
            </div>

            <aside className="lg:col-span-5 space-y-10">
              <div data-reveal>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950">What happens next</h2>
                <ol className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
                  {NEXT_STEPS.map((s, i) => (
                    <li key={s.title} className="flex items-start gap-4 py-5">
                      <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white text-sm font-semibold">{i + 1}</span>
                      <div>
                        <h3 className="font-heading text-base font-bold text-slate-950">{s.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div data-reveal>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950">Where we are</h2>
                <p className="mt-3 text-base text-slate-700 leading-relaxed">Berlin, Germany and Dhaka, Bangladesh. We work remotely with clients around the world.</p>
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:underline underline-offset-4 ${focusRing}`}
                >
                  <span>Prefer to hire through Upwork?</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* What to include */}
        <section aria-labelledby="brief-heading" className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <h2 data-reveal id="brief-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                What to include
              </h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">
                Nothing here is required. The more we know, the faster we can send a useful quote.
              </p>
            </div>
            <ul className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
              {BRIEF.map((b) => (
                <li key={b.title} data-reveal className="py-6">
                  <h3 className="font-heading text-lg font-bold text-slate-950">{b.title}</h3>
                  <p className="mt-1.5 text-base text-slate-600 leading-relaxed">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing banner */}
        <section className={container}>
          <div data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl">
            <div className="relative max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">Not ready to write yet?</h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Have a look at how we price projects, or at the work we have already delivered.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold transition-colors shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>See pricing</span>
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
