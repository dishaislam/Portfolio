"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  Globe,
  Zap,
  Satellite,
  Heart,
  ShoppingCart,
  Scale,
  Headphones,
  Building2,
  Package,
  ShoppingBag,
  LayoutDashboard,
  CreditCard,
  UserPlus,
  FileSearch,
  Wrench,
  ClipboardList,
  RefreshCw,
  Sun,
  Waves,
  Trees,
  Sprout,
  Landmark,
  type LucideIcon,
} from "lucide-react";

interface Practice {
  id: string;
  label: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
  text: string;
  short: string;
  apps: { label: string; icon: LucideIcon }[];
  image: string;
  imageAlt: string;
  ratio: string;
  href: string;
}

const PRACTICES: Practice[] = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    title: "AI & Machine Learning",
    icon: Brain,
    tags: ["Computer Vision", "NLP", "LLMs", "RAG", "AI Agents", "Predictive Models"],
    short: "Production-ready AI and machine learning systems, from document understanding to computer vision.",
    text: "We design and develop production-ready AI and machine learning systems that can perform verifiable work across industries, from document understanding to computer vision and intelligent automation.",
    apps: [
      { label: "Healthcare", icon: Heart },
      { label: "Retail & E-commerce", icon: ShoppingCart },
      { label: "Legal & Compliance", icon: Scale },
      { label: "Customer Support", icon: Headphones },
      { label: "Enterprise Automation", icon: Building2 },
    ],
    image: "/images/services/service_ai_brain_mesh.jpg",
    imageAlt: "AI brain neural network with facial biometric mesh nodes",
    ratio: "16 / 10",
    href: "/products/business-knowledge-assistant",
  },
  {
    id: "platforms",
    label: "Digital Platforms & Commerce",
    title: "Digital Platforms & Commerce",
    icon: Globe,
    tags: ["Web Applications", "E-commerce", "APIs", "Dashboards", "Backend Systems"],
    short: "Scalable web platforms and digital commerce tailored to your business.",
    text: "We build scalable web platforms and digital commerce solutions tailored to your business, with payments, inventory and admin tools handed over with full source code.",
    apps: [
      { label: "B2B Wholesale", icon: Package },
      { label: "Direct-to-Consumer", icon: ShoppingBag },
      { label: "Internal Operations", icon: LayoutDashboard },
      { label: "SaaS Portals", icon: Building2 },
      { label: "Global Payments", icon: CreditCard },
    ],
    image: "/images/services/service_ecommerce_platform.jpg",
    imageAlt: "Modern 3D digital e-commerce web platform and mobile store application with live checkout and analytics",
    ratio: "16 / 10",
    href: "/products/turnkey-ecommerce",
  },
  {
    id: "automation",
    label: "AI Automation & Intelligent Workflows",
    title: "AI Automation & Intelligent Workflows",
    icon: Zap,
    tags: ["AI Agents", "Business Automation", "Integrations", "Document Processing"],
    short: "Connect your systems with AI, APIs and external tools to automate repetitive work.",
    text: "We automate repetitive processes by connecting your systems with AI models, APIs and external tools, with a human in the loop where it matters.",
    apps: [
      { label: "Client Intake", icon: UserPlus },
      { label: "Contract Audits", icon: FileSearch },
      { label: "Tier-1 Diagnostics", icon: Wrench },
      { label: "Automated Surveys", icon: ClipboardList },
      { label: "CRM Synchronization", icon: RefreshCw },
    ],
    image: "/images/services/service_ai_automation.jpg",
    imageAlt: "Intelligent AI workflow automation and decision routing pipelines",
    ratio: "16 / 10",
    href: "/products/business-knowledge-assistant",
  },
  {
    id: "geospatial",
    label: "Geospatial & Earth Observation",
    title: "Geospatial & Earth Observation",
    icon: Satellite,
    tags: ["Satellite Data", "LiDAR", "Remote Sensing", "Geospatial Analytics", "Large-scale Pipelines"],
    short: "Earth observation and geospatial systems for large-scale data processing and analysis.",
    text: "We build geospatial and Earth observation systems for large-scale data processing and analysis, from satellite imagery to airborne LiDAR.",
    apps: [
      { label: "Solar PV Yield", icon: Sun },
      { label: "Flood Risk & Disaster", icon: Waves },
      { label: "Urban Canopy Inventory", icon: Trees },
      { label: "Agriculture & Land", icon: Sprout },
      { label: "Infrastructure Planning", icon: Landmark },
    ],
    image: "/images/services/service_geospatial_earth.jpg",
    imageAlt: "3D LiDAR point cloud elevation mesh and Earth observation scan",
    ratio: "16 / 10",
    href: "/products/geospatial-intelligence",
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const featured = PRACTICES[active];
  const others = PRACTICES.map((p, i) => ({ p, i })).filter(({ i }) => i !== active);
  const FeaturedIcon = featured.icon;

  return (
    <div>
      {/* Practice selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
        <div className="lg:col-span-5">
          <h2 id="practices-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
            Four engineering practices. One production mindset.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-md">
            We offer four core service areas, each designed to help you build scalable, secure and high-performance systems.
          </p>
        </div>

        <div role="tablist" aria-label="Engineering practices" className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRACTICES.map((p, i) => {
            const Icon = p.icon;
            const on = i === active;
            return (
              <button
                key={p.id}
                role="tab"
                id={`practice-tab-${p.id}`}
                aria-selected={on}
                aria-controls="practice-panel"
                type="button"
                onClick={() => setActive(i)}
                className={`flex flex-col items-start gap-3 rounded-2xl border p-4 text-left text-sm font-semibold leading-snug transition-colors cursor-pointer ${focusRing} ${
                  on
                    ? "border-blue-200 bg-blue-50 text-slate-950"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-6 h-6 ${on ? "text-blue-600" : "text-slate-500"}`} strokeWidth={1.5} aria-hidden="true" />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured practice */}
      <div
        key={featured.id}
        role="tabpanel"
        id="practice-panel"
        aria-labelledby={`practice-tab-${featured.id}`}
        className="animate-showcase-in mt-8 grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_-14px_rgba(15,23,42,0.12)]"
      >
        <div className="lg:col-span-5 p-3 sm:p-4">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#060d1c]" style={{ aspectRatio: featured.ratio }}>
            <Image src={featured.image} alt={featured.imageAlt} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-950 flex items-center gap-3">
              <span className="text-sm font-semibold text-blue-600 tabular-nums">0{active + 1}</span>
              <FeaturedIcon className="w-5 h-5 text-blue-600 hidden sm:block" strokeWidth={1.5} aria-hidden="true" />
              {featured.title}
            </h3>
            <Link href={featured.href} aria-label={`Explore ${featured.title}`} className={`shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors ${focusRing}`}>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">{featured.tags.join("  ·  ")}</p>
          <p className="mt-4 text-base text-slate-700 leading-relaxed">{featured.text}</p>

          <div className="mt-6 pt-5 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-950">Typical applications</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
              {featured.apps.map(({ label, icon: AppIcon }) => (
                <li key={label} className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <AppIcon className="w-4 h-4 text-slate-500" strokeWidth={1.5} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* The other three practices */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {others.map(({ p, i }) => {
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left hover:border-slate-300 hover:shadow-md transition-all cursor-pointer ${focusRing}`}
            >
              <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-slate-950 leading-snug">
                <span className="text-sm font-semibold text-blue-600 tabular-nums mr-2">0{i + 1}</span>
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.tags.slice(0, 5).join("  ·  ")}</p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.short}</p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] group-hover:underline underline-offset-4">
                View practice <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
