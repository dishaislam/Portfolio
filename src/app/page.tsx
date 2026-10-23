import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RealisticEarthGlobe from "@/components/RealisticEarthGlobe";
import HeroHeadline from "@/components/HeroHeadline";
import HeroSpotlight from "@/components/HeroSpotlight";
import ScrollReveal from "@/components/ScrollReveal";
import { AGENCY_DISPLAY_NAME, AGENCY_TAGLINE } from "@/data/agencyData";
import {
  ArrowUpRight,
  Layers,
  Store,
  Stethoscope,
  Scale,
  Trees,
  MessageCircle,
  ShieldCheck,
  Plus,
  Star,
} from "lucide-react";

export const metadata = {
  title: `${AGENCY_DISPLAY_NAME} | ${AGENCY_TAGLINE}`,
  description:
    "AI agents, websites and online shops, and satellite and LiDAR analysis, built end to end by two senior engineers. Full code and data handover.",
};

const AREAS = [
  {
    title: "Voice and customer calls",
    text: "An assistant that picks up the phone, books appointments into your calendar and passes difficult calls to your team.",
    img: "/images/products/ai-voice-receptionist/hero_natural.jpg",
    href: "/products/ai-voice-receptionist",
    items: [{ name: "AI voice receptionist", note: "answers calls around the clock", href: "/products/ai-voice-receptionist" }],
  },
  {
    title: "Websites and online shops",
    text: "Custom stores with payments and inventory, designed, built and launched by one team, with tools that help shoppers decide.",
    img: "/images/works/aura_store_home.jpg",
    pos: "object-top",
    href: "/products/turnkey-ecommerce",
    items: [
      { name: "Online shop systems", note: "payments and inventory", href: "/products/turnkey-ecommerce" },
      { name: "Virtual try-on", note: "inside your product pages", href: "/products/virtual-try-on" },
    ],
  },
  {
    title: "Maps and satellite data",
    text: "Satellite radar and aerial LiDAR turned into spatial databases, interactive maps and numbers you can act on.",
    img: "/images/satellite_detected.jpg",
    href: "/products/geospatial-intelligence",
    items: [{ name: "Geospatial analysis", note: "flood, solar, trees and land", href: "/products/geospatial-intelligence" }],
  },
  {
    title: "Documents and vision",
    text: "Assistants that answer from your own files with a source for every reply, and cameras that recognise people at your door.",
    img: "/images/products/business-knowledge-assistant/lifestyle.jpg",
    href: "/products/business-knowledge-assistant",
    items: [
      { name: "Knowledge assistant", note: "answers with sources", href: "/products/business-knowledge-assistant" },
      { name: "Face recognition", note: "attendance and door access", href: "/products/face-recognition" },
    ],
  },
];

const AUDIENCES = [
  { icon: Store, href: "/products/turnkey-ecommerce", title: "Retail and e-commerce brands", text: "Online shops with payments, plus virtual try-on to help shoppers decide." },
  { icon: Stethoscope, href: "/products/ai-voice-receptionist", title: "Clinics and service businesses", text: "A voice agent that answers calls and books appointments around the clock." },
  { icon: Scale, href: "/products/business-knowledge-assistant", title: "Legal, compliance and operations", text: "Assistants that answer from your contracts and manuals, with sources." },
  { icon: Trees, href: "/products/geospatial-intelligence", title: "Forestry, planning and agriculture", text: "Tree counts, flood exposure and land-change maps from aerial and satellite data." },
];

const STEPS = [
  { title: "Discovery call", when: "Free, 30 minutes", text: "You talk directly with Sharmin and Rafi about your goals, data and constraints." },
  { title: "Written scope", when: "Within 24 to 48 hours", text: "A clear document with deliverables, milestones, a fixed price and an honest timeline." },
  { title: "Build and handover", when: "Typically 2 to 4 weeks", text: "A private staging site and weekly check-ins while we build. Then the source code, data and documentation are yours, with 30 days of fixes." },
];

const WHY = [
  { icon: MessageCircle, title: "You work with the founders", text: "Sharmin and Rafi plan, build and review your project themselves. There are no account managers and no subcontractors." },
  { icon: ShieldCheck, title: "You own everything", text: "Code, trained models, databases and documents are transferred to you, with no lock-in and no monthly platform fee." },
  { icon: Layers, title: "One team, end to end", text: "AI, software and geospatial work under one roof, so nothing gets lost between suppliers." },
];

const FOUNDERS = [
  {
    image: "/images/sharmin_founder.jpg",
    initial: "S",
    name: "Sharmin Islam Disha",
    role: "Co-founder & Lead AI Engineer",
    points: [
      "5+ years engineering full-stack web platforms, machine learning algorithms, and AI systems",
      "Architect of production agentic RAG, predictive ML with SHAP, and high-conversion e-commerce engines",
    ],
  },
  {
    image: "/images/rafi_founder.jpg",
    initial: "R",
    name: "Rafi Mahmud Tumon",
    role: "Co-founder & Lead Geospatial Specialist",
    points: [
      "M.Sc. Geodesy and Geoinformation, Technische Universität Berlin (TU Berlin)",
      "Former researcher at the German Aerospace Center (DLR), specialized in SAR radar and LiDAR analysis",
    ],
  },
];

const UPWORK_REVIEWS = [
  {
    quote:
      "Deep domain expertise in geospatial analysis and GIS systems (including QGIS). Handled complex cartographic modeling and documentation with rapid turnaround times and rigorous academic precision. Highly recommended.",
    clientType: "Geospatial & Research Client",
    projectTag: "GIS & QGIS Analysis",
    scope: "Cartography, Mapping & Spatial Documentation",
    stars: 5,
  },
  {
    quote:
      "Understood all technical requirements with precision and maintained proactive, seamless communication under challenging constraints. A dependable engineer I will definitely hire again—strongly recommended.",
    clientType: "Technical Project Lead",
    projectTag: "Engineering & Architecture",
    scope: "Requirements Engineering & Execution",
    stars: 5,
  },
  {
    quote:
      "Clear, transparent communication and delivered exactly what was specified, accompanied by comprehensive multi-format data options. We will definitely collaborate again on upcoming work.",
    clientType: "Product & Operations Client",
    projectTag: "Data Delivery & Formats",
    scope: "Multi-Format Deliverables & Clear Handover",
    stars: 5,
  },
  {
    quote:
      "Outstanding engineering professionalism and reliable execution. An exceptional partner we are already lining up for our next production deployment.",
    clientType: "Enterprise Client",
    projectTag: "Repeat Engagement",
    scope: "Production Systems Development",
    stars: 5,
  },
  {
    quote:
      "Exceptional execution from start to finish. Delivered the complete project with thorough revisions and a clear commitment to getting every single detail right.",
    clientType: "Commercial Client",
    projectTag: "Full-Cycle Delivery",
    scope: "End-to-End Implementation & Revisions",
    stars: 5,
  },
  {
    quote:
      "Proactive communication and consistently on-time deliveries. High attention to detail throughout the entire engagement. Highly recommend collaborating with this studio.",
    clientType: "Agency & Business Client",
    projectTag: "On-Time Handover",
    scope: "Milestone Delivery & Continuous Communication",
    stars: 5,
  },
];

const FAQS = [
  { q: "What do you need from us to start?", a: "A short description of the problem and any data or systems involved. We'll cover the rest on a free 30-minute call." },
  { q: "How long does a project take?", a: "Most projects take two to four weeks. Small map and data jobs can take a few days. You get a timeline in writing before work starts." },
  { q: "Who owns the code and the data?", a: "You do. Source code, trained models, databases and documentation are handed over at the end." },
  { q: "Can you work with our existing systems?", a: "Yes. We connect to your calendar, CRM, payment gateway, website or databases, and we can run on your own servers if you need that." },
  { q: "How is pricing set?", a: "You get a fixed quote after the discovery call. See the pricing page for typical ranges." },
];

const lightCard =
  "rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300";

const staticCard = "rounded-2xl border border-slate-200/90 bg-white";

function LinkRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:text-[#172554] hover:underline underline-offset-4 group">
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </Link>
  );
}

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white">
      <ScrollReveal />
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
      </noscript>
      {/* 1. Header & Hero: Deep Space Celestial Navy Stage */}
      <div className="relative bg-[#070E1E] text-white overflow-hidden pb-24 sm:pb-28">
        <Navbar theme="dark" />
        <HeroSpotlight />

        {/* Dynamic Celestial Ambient Dark Halos (Zero Light Blue) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          {/* Ambient Deep Navy Halo on Right */}
          <div className="absolute -top-[20%] right-[-5%] lg:right-[2%] w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(23,37,84,0.30)_0%,_rgba(15,23,42,0.15)_45%,_transparent_72%)] blur-[90px]" />
          {/* Ambient Dark Slate Mist on Left */}
          <div className="absolute top-[25%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(30,41,59,0.25)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <section className="relative z-10 max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10 pt-4 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 sm:pt-6 pb-4">
            <HeroHeadline />
            <RealisticEarthGlobe />
          </div>
        </section>
      </div>

      {/* 3. Daylight canvas: slides up over the dark hero with rounded top corners */}
      <div className="relative z-30 -mt-10 sm:-mt-12 rounded-t-[28px] sm:rounded-t-[40px] bg-[#F8FAFC] text-slate-900 pt-16 sm:pt-20 space-y-20 sm:space-y-28 pb-20 shadow-[0_-18px_50px_-10px_rgba(0,0,0,0.55)]">

        {/* What we build: four areas, each pointing to its product pages */}
        <section aria-labelledby="work-heading" className="relative z-10 max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10 space-y-8">
          <div data-reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="max-w-2xl">
              <h2 id="work-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">Production AI, web and geospatial work</h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">From an assistant that answers your phone to maps built from satellite data. Every project is handed over with the full source code.</p>
            </div>
            <LinkRow href="/products">See all products</LinkRow>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AREAS.map((area) => (
              <article key={area.title} data-reveal className={`${lightCard} overflow-hidden flex flex-col`}>
                <Link href={area.href} className="block relative aspect-[16/10] bg-slate-100 border-b border-slate-200" tabIndex={-1} aria-hidden="true">
                  <Image src={area.img} alt="" fill sizes="(min-width: 768px) 560px, 100vw" className={`object-cover ${area.pos ?? ""}`} />
                </Link>
                <div className="p-6 sm:p-7 flex flex-1 flex-col">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-slate-950">{area.title}</h3>
                  <p className="mt-2 mb-5 text-base text-slate-600 leading-relaxed">{area.text}</p>
                  <ul className="mt-auto pt-0 divide-y divide-slate-200 border-y border-slate-200">
                    {area.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} className="flex items-center justify-between gap-3 py-2.5 text-sm text-slate-700 hover:text-slate-950 group">
                          <span><span className="font-semibold text-slate-900">{it.name}</span> <span className="text-slate-500">{it.note}</span></span>
                          <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p data-reveal className="text-base text-slate-600">
            Not sure which one fits? <Link href="/contact" className="font-semibold text-[#1E3A8A] underline underline-offset-4">Tell us about your project</Link>.
          </p>
        </section>

        {/* How a project works: light card with a connected timeline */}
        <section aria-labelledby="steps-heading" className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.12)]">
            <div className="max-w-2xl">
              <h2 data-reveal id="steps-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">How a project works</h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">Three steps, with the founders involved in every one.</p>
            </div>
            <ol data-line className="relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:before:absolute md:before:left-5 md:before:right-5 md:before:top-[1.1rem] md:before:h-px md:before:bg-slate-200">
              {STEPS.map((st, i) => (
                <li data-reveal key={st.title} className="relative">
                  <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-full bg-slate-950 text-white text-sm font-semibold ring-4 ring-white">{i + 1}</span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-950">{st.title}</h3>
                  <span className="mt-0.5 block text-sm font-medium text-slate-500">{st.when}</span>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why clients work with us: reasons, founders and short reviews in one block */}
        <section aria-labelledby="why-heading" className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <h2 data-reveal id="why-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">Why clients work with us</h2>
              <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                {WHY.map(({ title, text }) => (
                  <li data-reveal key={title} className="py-5">
                    <h3 className="font-heading text-lg font-bold text-slate-950">{title}</h3>
                    <p className="mt-1.5 text-base text-slate-600 leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-7"><LinkRow href="/about">More about the founders</LinkRow></div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {FOUNDERS.map((f) => (
                <figure data-reveal key={f.name} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200">
                  <Image src={f.image} alt={f.name} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 pt-16">
                    <figcaption>
                      <div className="font-heading text-base font-bold text-white leading-tight">{f.name}</div>
                      <div className="mt-0.5 text-xs text-slate-200">{f.role}</div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[UPWORK_REVIEWS[4], UPWORK_REVIEWS[5], UPWORK_REVIEWS[2]].map((rev) => (
              <figure data-reveal key={rev.clientType + rev.scope} className={`${staticCard} p-6 flex flex-col`}>
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 text-base text-slate-700 leading-relaxed">&ldquo;{rev.quote}&rdquo;</blockquote>
                <figcaption className="mt-auto pt-5 text-sm">
                  <span className="font-semibold text-slate-950">{rev.clientType}</span>
                  <span className="block text-slate-500">{rev.scope}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Who we build for: four sectors, each linked to related work */}
        <section aria-labelledby="who-heading" className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 data-reveal id="who-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">Who we build for</h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">Businesses and teams that need a working system, not a prototype.</p>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-b border-slate-200 sm:[&>li:nth-last-child(-n+2)]:border-b-0">
              {AUDIENCES.map(({ icon: Icon, href, title, text }) => (
                <li data-reveal key={title} className="border-t border-slate-200">
                  <Link href={href} className="group flex items-start gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    <div className="w-11 h-11 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-950 group-hover:underline underline-offset-4">{title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{text}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Client reviews */}
        <section aria-labelledby="reviews-heading" className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div data-reveal className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 id="reviews-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">What clients say</h2>
            <p className="text-sm text-slate-500">Five-star reviews left by clients on Upwork</p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-slate-200 pt-6">
            {[UPWORK_REVIEWS[0], UPWORK_REVIEWS[2], UPWORK_REVIEWS[5]].map((r) => (
              <figure key={r.projectTag} data-reveal className="flex flex-col">
                <div className="flex items-center gap-1" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 text-base text-slate-700 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  <span className="font-semibold text-slate-800">Upwork review</span>
                  {" "}&middot; {r.projectTag}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 data-reveal id="faq-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">Common questions</h2>
              <p className="mt-1.5 text-slate-600 text-base leading-relaxed">Short answers to what clients ask us first.</p>
              <div data-reveal className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6">
                <div className="flex -space-x-2" aria-hidden="true">
                  {["/images/sharmin_founder.jpg", "/images/rafi_founder.jpg"].map((src) => (
                    <span key={src} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-slate-100">
                      <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-slate-950">Still have a question?</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">Ask Sharmin and Rafi directly on a free 30-minute call. No sales team in between.</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    <span>Book a call</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <LinkRow href="/pricing">See pricing</LinkRow>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} data-reveal className="group">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-5 font-heading text-lg font-semibold text-slate-950 hover:text-[#1E3A8A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <Plus className="w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="pb-6 -mt-1 pr-10 max-w-2xl text-base text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* High-Impact Dark Navy Anchor: Floating Flagship Consultation Banner */}
        <section className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
          <div data-reveal className="relative rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl overflow-hidden">
            {/* Subtle atmospheric ambient glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-slate-800/30 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-slate-800/20 blur-3xl" aria-hidden="true" />

            <div className="max-w-xl relative z-10">
                            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Ready to build software that solves real problems?
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Talk directly with Sharmin and Rafi. In a 30-minute technical discovery, we&apos;ll evaluate your requirements, design an architecture plan, and provide an honest fixed-price quote.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 shrink-0 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold transition-colors duration-200 shadow-md"
              >
                <span>Book technical discovery</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-6 h-12 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                See pricing &amp; scope
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" showCta={false} />
    </main>
  );
}
