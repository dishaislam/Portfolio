"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Globe,
  Zap,
  Satellite,
  ArrowUpRight,
  ArrowRight,
  Heart,
  ShoppingCart,
  Scale,
  Headphones,
  Building2,
  Layers,
  CreditCard,
  Cpu,
  FileText,
  Users,
  Repeat,
  Activity,
  Sun,
  Waves,
  Trees,
  Compass,
} from "lucide-react";

interface ServicePractice {
  id: string;
  number: string;
  title: string;
  tabLabel: string;
  icon: React.ElementType;
  tags: string[];
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  typicalApplications: {
    name: string;
    icon: React.ElementType;
  }[];
  href: string;
}

const PRACTICES: ServicePractice[] = [
  {
    id: "ai-machine-learning",
    number: "01",
    tabLabel: "AI & Machine Learning",
    title: "AI & Machine Learning",
    icon: Brain,
    tags: [
      "Computer Vision",
      "NLP",
      "LLMs",
      "RAG",
      "AI Agents",
      "Predictive Models",
    ],
    description:
      "We design and develop production-ready AI and machine learning systems that can perform verifiable work across industries, from document understanding to computer vision and intelligent automation.",
    deliverables: [
      "Document understanding and data extraction",
      "Computer vision models trained on your data",
      "Chat and voice assistants grounded in your knowledge base",
      "Model evaluation, monitoring and hand-over",
    ],
    image: "/images/services/service_ai_brain_mesh.jpg",
    imageAlt: "AI brain neural network with facial biometric mesh nodes",
    typicalApplications: [
      { name: "Healthcare", icon: Heart },
      { name: "Retail & E-commerce", icon: ShoppingCart },
      { name: "Legal & Compliance", icon: Scale },
      { name: "Customer Support", icon: Headphones },
      { name: "Enterprise Automation", icon: Building2 },
    ],
    href: "/products/ai-voice-receptionist",
  },
  {
    id: "digital-platforms-commerce",
    number: "02",
    tabLabel: "Digital Platforms & Commerce",
    title: "Digital Platforms & Commerce",
    icon: Globe,
    tags: [
      "Web Applications",
      "E-commerce",
      "APIs",
      "Dashboards",
      "Backend Systems",
    ],
    description:
      "Build scalable web platforms and digital commerce solutions tailored to your business needs.",
    deliverables: [
      "Storefronts and checkout built to your brand",
      "Admin dashboards and order management",
      "Payment, shipping and inventory integrations",
      "Secure APIs and backend services",
    ],
    image: "/images/services/service_ecommerce_platform.jpg",
    imageAlt: "Modern 3D digital e-commerce web platform and mobile store application with live checkout and analytics",
    typicalApplications: [
      { name: "B2B Wholesale", icon: Building2 },
      { name: "Retail & DTC", icon: ShoppingCart },
      { name: "Fintech & Payments", icon: CreditCard },
      { name: "SaaS Portals", icon: Layers },
      { name: "Internal Operations", icon: Cpu },
    ],
    href: "/products/turnkey-ecommerce",
  },
  {
    id: "ai-automation-intelligent-workflows",
    number: "03",
    tabLabel: "AI Automation & Intelligent Workflows",
    title: "AI Automation & Intelligent Workflows",
    icon: Zap,
    tags: [
      "AI Agents",
      "Business Automation",
      "Integrations",
      "Document Processing",
    ],
    description:
      "Automate repetitive processes and connect your systems with AI, APIs and external tools.",
    deliverables: [
      "Workflow mapping and automation design",
      "AI agents that call your tools and APIs",
      "Document and email processing pipelines",
      "CRM and internal-system integrations",
    ],
    image: "/images/services/service_ai_automation.jpg",
    imageAlt: "Intelligent AI workflow automation and decision routing pipelines",
    typicalApplications: [
      { name: "Client Intake", icon: Users },
      { name: "Contract Audits", icon: FileText },
      { name: "Tier-1 Diagnostics", icon: Activity },
      { name: "Automated Surveys", icon: Repeat },
      { name: "CRM Synchronization", icon: Layers },
    ],
    href: "/products/business-knowledge-assistant",
  },
  {
    id: "geospatial-earth-observation",
    number: "04",
    tabLabel: "Geospatial & Earth Observation",
    title: "Geospatial & Earth Observation",
    icon: Satellite,
    tags: [
      "Satellite Data",
      "LiDAR",
      "Remote Sensing",
      "Geospatial Analytics",
      "Large-scale Pipelines",
    ],
    description:
      "Build geospatial and Earth observation systems for large-scale data processing and analysis.",
    deliverables: [
      "Satellite and LiDAR ingestion pipelines",
      "Flood, solar and land-cover analysis",
      "Interactive maps and 3D scene viewers",
      "Reports and exports your team can reuse",
    ],
    image: "/images/services/service_geospatial_earth.jpg",
    imageAlt: "3D LiDAR point cloud elevation mesh and Earth observation scan",
    typicalApplications: [
      { name: "Solar PV Yield", icon: Sun },
      { name: "Flood Risk & Disaster", icon: Waves },
      { name: "Urban Canopy Inventory", icon: Trees },
      { name: "Agriculture & Land", icon: Compass },
      { name: "Infrastructure Planning", icon: Building2 },
    ],
    href: "/products/geospatial-intelligence",
  },
];

export default function ServicesPracticeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = PRACTICES[activeIndex];
  const secondaryServices = PRACTICES.filter((_, idx) => idx !== activeIndex);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Top Header Row: Left Title & Right 4 Practice Selector Tabs Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-12">
          {/* Left Title & Description (Span 5 cols) */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2 font-mono">
              OUR SERVICES
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Four engineering practices.
              <br />
              One production mindset.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              We offer four core service areas, each designed to help you build
              scalable, secure and high-performance systems.
            </p>
          </div>

          {/* Right 4 Category Selector Tabs (Span 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PRACTICES.map((practice, index) => {
              const isSelected = activeIndex === index;
              return (
                <button
                  key={practice.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-start p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? "bg-white border-slate-900 shadow-[0_4px_16px_rgba(15,23,42,0.10)] ring-1 ring-slate-900/10"
                      : "bg-[#F8FAFC] border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
                  }`}
                >
                  <span
                    className={`font-heading text-xs sm:text-[13px] font-bold tracking-tight leading-snug ${
                      isSelected ? "text-slate-950" : "text-slate-700"
                    }`}
                  >
                    {practice.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Active Service Showcase Card */}
        <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_-10px_rgba(15,23,42,0.06)] transition-all duration-500 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: 3D High-Tech Visual Container */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-950 shadow-md group">
                <Image
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Detailed Specification & Information */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight flex items-baseline">
                  <span className="text-slate-400 mr-2.5 font-bold">
                    {activeService.number} ·
                  </span>
                  <span>{activeService.title}</span>
                </h3>
                <Link
                  href={activeService.href}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200/80 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shrink-0 shadow-xs"
                  aria-label={`View details for ${activeService.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Tags Line */}
              <div className="mt-2 text-xs sm:text-[13px] font-medium text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                {activeService.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {idx < activeService.tags.length - 1 && (
                      <span className="text-slate-300 font-bold">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeService.description}
              </p>

              {/* What we deliver */}
              <div className="mt-6 pt-5 border-t border-slate-200/70">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 font-mono">
                  WHAT WE DELIVER
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {activeService.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Typical Applications Section */}
              <div className="mt-7 pt-5 border-t border-slate-200/70">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 font-mono">
                  TYPICAL APPLICATIONS
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {activeService.typicalApplications.map((app) => {
                    return (
                      <div
                        key={app.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-slate-300 transition-colors shadow-2xs"
                      >
                        <span>{app.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Service Cards Grid (Matching the reference layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {secondaryServices.map((service) => {
            const originalIndex = PRACTICES.findIndex((p) => p.id === service.id);
            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(originalIndex)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition-all duration-300"
              >
                <div>
                  <h4 className="font-heading text-base font-bold text-slate-950 tracking-tight flex items-baseline gap-1.5">
                    <span className="text-slate-400 font-extrabold">
                      {service.number} ·
                    </span>
                    <span>{service.title}</span>
                  </h4>

                  {/* Sub-tags */}
                  <p className="mt-2 text-xs text-slate-500 font-medium leading-relaxed">
                    {service.tags.slice(0, 5).join(" · ")}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
