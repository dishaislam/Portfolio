"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, CheckCircle2 } from "lucide-react";

const PHRASES = [
  "solves real problems.",
  "ships production AI.",
  "maps the real world.",
  "answers every call.",
];

const FOUNDERS = [
  { src: "/images/sharmin_founder.jpg", name: "Sharmin Islam Disha", role: "AI & Web Engineering" },
  { src: "/images/rafi_founder.jpg", name: "Rafi Mahmud Tumon", role: "Geospatial & Geodesy" },
];

export default function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setPhraseIndex((i) => (i + 1) % PHRASES.length), 3400);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="lg:col-span-7 space-y-6">
      {/* Main Headline: Confident Editorial Typography with Smooth Color Transition */}
      <h1 className="font-heading text-[32px] sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold tracking-tight leading-[1.08]">
        {/* Line 1: Crisp Solid White */}
        <span className="block text-white">
          We build software that
        </span>

        {/* Line 2: rotating phrase, brighter periwinkle-to-silver gradient for contrast on navy */}
        <span className="block mt-1 relative min-h-[1.2em]">
          <span
            className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-blue-900/40 via-slate-800/20 to-transparent blur-xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={PHRASES[phraseIndex]}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: "easeOut" }}
              className="relative inline-block bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent"
            >
              {PHRASES[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      {/* Editorial Subheadline */}
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
        Utsho is an independent engineering consultancy founded by Sharmin Islam Disha and Rafi Mahmud Tumon. We design, architect, and ship production AI systems, transactional web platforms, and satellite &amp; LiDAR geospatial intelligence.
      </p>

      {/* Action Buttons: Dark Blue to Dark Grey Blend */}
      <div className="flex flex-wrap items-center gap-3.5 pt-1">
        <Link
          href="/contact"
          className="shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 border border-white text-slate-950 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
          <Calendar className="w-4 h-4 text-blue-700" aria-hidden="true" />
          <span>Book technical discovery</span>
        </Link>
        <Link
          href="/case-studies"
          className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors duration-200"
        >
          <span>View case studies</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
        </Link>
      </div>

      {/* Direct Founder Credentials Strip */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
        <div className="flex -space-x-2 shrink-0">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="relative group/avatar">
              <div className="relative w-9 h-9 rounded-full ring-2 ring-slate-800 overflow-hidden bg-slate-800 transition-transform duration-200 group-hover/avatar:-translate-y-0.5 group-hover/avatar:ring-blue-400/60">
                <Image src={f.src} alt={f.name} fill sizes="36px" className="object-cover" />
              </div>
              <div
                role="tooltip"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1.5 text-[11px] text-slate-200 shadow-xl opacity-0 translate-y-1 group-hover/avatar:opacity-100 group-hover/avatar:translate-y-0 transition-all duration-150 z-20"
              >
                <span className="block font-semibold text-white">{f.name}</span>
                <span className="block text-slate-400">{f.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-medium text-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <span>Sharmin (AI &amp; Web) &middot; Rafi (Geospatial &amp; Geodesy)</span>
          </div>
          <span className="text-[11px] text-slate-400">
            Direct collaboration with the founders &middot; Full source code &amp; IP ownership
          </span>
          <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            Accepting new projects
          </span>
        </div>
      </div>
    </div>
  );
}
