import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesHeroGlobe from "@/components/ServicesHeroGlobe";
import ServicesPracticeShowcase from "@/components/ServicesPracticeShowcase";
import ServicesProcessPipeline from "@/components/ServicesProcessPipeline";
import ServicesProductsGrid from "@/components/ServicesProductsGrid";
import ServicesCtaBanner from "@/components/ServicesCtaBanner";
import { ArrowUpRight } from "lucide-react";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";

export const metadata = {
  title: `Production Engineering Services | ${AGENCY_DISPLAY_NAME}`,
  description:
    "We build AI systems and digital infrastructure that work in production. From intelligent AI systems to scalable platforms and geospatial pipelines.",
};

export default function ServicesPage() {
  return (
    <main
      id="main"
      className="relative min-h-screen bg-[#040814] text-white selection:bg-sky-500 selection:text-white"
    >
      <ScrollReveal />
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
      </noscript>

      {/* 1. Header & Hero Section */}
      <div className="relative bg-[#040814] text-white overflow-hidden pb-16 sm:pb-20">
        <Navbar theme="dark" ctaText="Book a Technical Discovery" ctaHref="/contact" />

        {/* Ambient background glow & subtle space lighting */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(23,37,84,0.35)_0%,_rgba(15,23,42,0.15)_45%,_transparent_70%)] blur-[100px]" />
          <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.12)_0%,_rgba(30,58,138,0.08)_50%,_transparent_70%)] blur-[110px]" />
        </div>

        {/* Hero Content */}
        <section className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headline, Subtitle, and CTAs */}
            <div className="lg:col-span-7 z-10">
              <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4 font-mono">
                PRODUCTION ENGINEERING SERVICES
              </div>

              <h1 className="font-heading text-[32px] sm:text-5xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight leading-[1.12] text-white">
                We build AI systems and
                <br />
                digital infrastructure
                <br />
                <span className="text-[#60a5fa] drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]">
                  that work in production.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                From intelligent AI systems to scalable platforms and geospatial
                pipelines, we design, build and deploy production-ready
                technology tailored to your business needs.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-heading text-sm font-bold shadow-[0_0_28px_-4px_rgba(255,255,255,0.4)] hover:shadow-[0_0_36px_-2px_rgba(255,255,255,0.65)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Book a Technical Discovery</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0A1020]/80 hover:bg-[#121D38] text-slate-200 hover:text-white border border-white/20 text-sm font-semibold transition-all duration-200 backdrop-blur-sm"
                >
                  <span>Explore Our Products</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Cyber Network Earth with 3 Connected Glass Cards */}
            <div className="lg:col-span-5 relative w-full">
              <ServicesHeroGlobe />
            </div>
          </div>
        </section>
      </div>

      {/* 2. OUR SERVICES Practice Showcase (Light Section) */}
      <ServicesPracticeShowcase />

      {/* 3. HOW WE WORK Process Pipeline (Dark Section) */}
      <ServicesProcessPipeline />

      {/* 4. OUR PRODUCTS Section (Light Section) */}
      <ServicesProductsGrid />

      {/* 5. Bottom CTA Banner (Space Earth Limb Horizon) */}
      <ServicesCtaBanner />

    </main>
  );
}
