"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Sparkles,
  PhoneCall,
  Bot,
  ScanFace,
  ShoppingBag,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  FileCheck,
  Download,
  Calendar,
} from "lucide-react";
import { PRODUCTS_CATALOG, type ProductData } from "@/data/productsData";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  "virtual-try-on": Sparkles,
  "ai-voice-receptionist": PhoneCall,
  "business-knowledge-assistant": Bot,
  "face-recognition": ScanFace,
  "turnkey-ecommerce": ShoppingBag,
  "geospatial-intelligence": Globe2,
};

export default function ProductShowcaseClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const querySelected = searchParams.get("selected") || searchParams.get("product");

  const [activeId, setActiveId] = useState<string>(() => {
    if (querySelected && PRODUCTS_CATALOG.some((p) => p.id === querySelected)) {
      return querySelected;
    }
    return PRODUCTS_CATALOG[0].id;
  });

  const [activeTab, setActiveTab] = useState<"overview" | "handover">("overview");

  useEffect(() => {
    if (querySelected && PRODUCTS_CATALOG.some((p) => p.id === querySelected)) {
      setActiveId(querySelected);
    }
  }, [querySelected]);

  const handleSelectProduct = (id: string) => {
    setActiveId(id);
    router.replace(`/products?selected=${id}`, { scroll: false });
  };

  const selectedProduct: ProductData =
    PRODUCTS_CATALOG.find((p) => p.id === activeId) || PRODUCTS_CATALOG[0];

  const CurrentIcon = PRODUCT_ICONS[selectedProduct.id] || Sparkles;

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SHOWCASE SECTION (Matching Screenshot 2 Luxury Apple/B&O Style) */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Massive Dual-Tone Headline & Direct Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs">
                <CurrentIcon className="w-3.5 h-3.5 text-slate-900" />
                <span>{selectedProduct.category}</span>
              </div>

              {/* Signature Dual-Tone Headline from Reference Screenshot 2 */}
              <div className="space-y-1">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B0F20] tracking-[-0.03em] leading-[1.08]">
                  {selectedProduct.headlinePrimary}
                </h1>
                <div className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-400 tracking-[-0.03em] leading-[1.08]">
                  {selectedProduct.headlineSecondary}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                {selectedProduct.tagline}
              </p>

              {/* Action Buttons matching Screenshot 2 "Explore the Experience" pill */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-[#0B0F20] text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
                >
                  <span>Explore the Experience</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-5 h-11 rounded-full bg-white text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold hover:border-slate-300 transition-colors shadow-2xs"
                >
                  <span>View Pricing &amp; Sprints</span>
                </Link>
              </div>

              {/* Telemetry Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{selectedProduct.liveBadge}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                  <span>100% IP Handover</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>2 to 4 Weeks Delivery</span>
                </span>
              </div>
            </div>

            {/* Right Column: Large Floating Hero Product Visual */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6] border border-slate-200/90 p-4 sm:p-6 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.1)] flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-radial-gradient from-slate-200/40 via-transparent to-transparent pointer-events-none" />

                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/60">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    priority
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Floating Metric Callout Chip */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500">
                    {selectedProduct.metricLabel}:
                  </span>
                  <span className="text-xs font-black text-slate-950">
                    {selectedProduct.metricValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 3 ALTERNATING NUMBERED FEATURE ROWS (Exact Pattern from Reference Screenshot 2) */}
      <section className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10 space-y-16 sm:space-y-24">
        {/* ROW 01: Macro Feature Detail (Image Left, Narrative Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-sm">
              <Image
                src={selectedProduct.storyRows[0].image}
                alt={selectedProduct.storyRows[0].title}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 border border-slate-200/80 shadow-2xs">
                {selectedProduct.storyRows[0].tag}
              </div>
            </div>
          </div>

          {/* Narrative Right with Large Number "01" */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-3">
            <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0B0F20] tracking-tight">
              01
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0B0F20] tracking-tight leading-snug">
              {selectedProduct.storyRows[0].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedProduct.storyRows[0].description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                <span>Zero third-party middleware latency</span>
              </span>
            </div>
          </div>
        </div>

        {/* ROW 02: Inverted Layout (Narrative Left, Exploded/Architecture Visual Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Narrative Left with Large Number "02" */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0B0F20] tracking-tight">
              02
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0B0F20] tracking-tight leading-snug">
              {selectedProduct.storyRows[1].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedProduct.storyRows[1].description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                <span>Production-tested on real client traffic</span>
              </span>
            </div>
          </div>

          {/* Visual Right */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-sm">
              <Image
                src={selectedProduct.storyRows[1].image}
                alt={selectedProduct.storyRows[1].title}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 border border-slate-200/80 shadow-2xs">
                {selectedProduct.storyRows[1].tag}
              </div>
            </div>
          </div>
        </div>

        {/* ROW 03: In-Situ Lifestyle / Context (Image Left, Narrative Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-sm">
              <Image
                src={selectedProduct.storyRows[2].image}
                alt={selectedProduct.storyRows[2].title}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 border border-slate-200/80 shadow-2xs">
                {selectedProduct.storyRows[2].tag}
              </div>
            </div>
          </div>

          {/* Narrative Right with Large Number "03" */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-3">
            <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0B0F20] tracking-tight">
              03
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0B0F20] tracking-tight leading-snug">
              {selectedProduct.storyRows[2].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedProduct.storyRows[2].description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                <span>Full source code ownership transferred on completion</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT ECOSYSTEM FAMILY SELECTOR GRID (Matching Screenshot 2 Bottom Row) */}
      <section className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs mb-2.5">
            <Layers className="w-3.5 h-3.5 text-slate-900" />
            <span>Product Catalog</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B0F20] tracking-tight">
            Select a Product to Visualize
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Click any system below to see what it does and what you receive.
          </p>
        </div>

        {/* 6-Card Product Ecosystem Grid (Exact Screenshot 2 styling) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {PRODUCTS_CATALOG.map((prod) => {
            const isSelected = prod.id === selectedProduct.id;
            const Icon = PRODUCT_ICONS[prod.id] || Sparkles;

            return (
              <button
                key={prod.id}
                onClick={() => handleSelectProduct(prod.id)}
                className={`p-3.5 rounded-2xl text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-between min-h-[190px] ${
                  isSelected
                    ? "bg-white ring-2 ring-[#0B0F20] shadow-md border-transparent scale-102"
                    : "bg-[#FAFAFB] hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-2xs"
                }`}
              >
                {/* Thumbnail Product Shot */}
                <div className="relative w-full h-20 mb-2 flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt={prod.shortName}
                    fill
                    sizes="(min-width: 1024px) 150px, 33vw"
                    className="object-contain p-1"
                  />
                </div>

                {/* Product Name & Metric */}
                <div className="w-full space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Icon
                      className={`w-3 h-3 ${
                        isSelected ? "text-slate-950" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold leading-tight truncate ${
                        isSelected ? "text-slate-950" : "text-slate-800"
                      }`}
                    >
                      {prod.shortName}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium truncate">
                    {prod.liveBadge}
                  </div>
                </div>

                {/* Active Indicator Pill */}
                <div className="mt-2">
                  <span
                    className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                      isSelected
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isSelected ? "Active View" : "Visualize"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. HIGHLIGHTS & DELIVERABLES */}
      <section className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-6 sm:p-10 shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Deliverables
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B0F20] tracking-tight">
                {selectedProduct.name}: what you receive
              </h3>
            </div>

            {/* View Mode Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl text-xs font-semibold w-fit">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-white text-slate-950 shadow-2xs font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Key Highlights
              </button>
              <button
                onClick={() => setActiveTab("handover")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "handover"
                    ? "bg-white text-slate-950 shadow-2xs font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Deliverables
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProduct.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "handover" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProduct.deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3"
                  >
                    <FileCheck className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Downloadable Deliverable for Geospatial */}
          {selectedProduct.id === "geospatial-intelligence" && (
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-100/70 p-4 rounded-2xl border border-slate-200">
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-950">
                  Sample GIS Deliverable: 3D LiDAR Rooftop Solar PV (.gpkg)
                </div>
                <div className="text-xs text-slate-600">
                  Real classified vector dataset with building footprints, tilt, azimuth, and annual kWh potential.
                </div>
              </div>
              <a
                href="/downloads/buildings_lidar.gpkg"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shrink-0 shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Sample .gpkg (2.4 MB)</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 5. BOTTOM CONVERSION BANNER */}
      <section className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10 pb-16">
        <div className="rounded-3xl bg-[#0B0F20] border border-slate-800 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Engineering Engagement
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to deploy {selectedProduct.shortName} into your operations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Talk directly with founders Sharmin and Rafi. We scope your project in 24 hours and deliver turnkey production code in 2 to 4 weeks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Schedule Free 30-Min Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center px-5 h-11 rounded-full border border-white/30 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <span>View Pricing Models</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
