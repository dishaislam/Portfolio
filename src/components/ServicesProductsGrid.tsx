"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProductCardItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href: string;
}

const PRODUCTS: ProductCardItem[] = [
  {
    id: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    image: "/images/services/product_voice_receptionist.jpg",
    imageAlt: "Futuristic microphone with digital audio sound waves",
    tags: ["Voice AI", "Automation"],
    href: "/products/ai-voice-receptionist",
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    image: "/images/services/product_virtual_tryon.jpg",
    imageAlt: "Digital face with biometric mesh tracking",
    tags: ["Computer Vision", "Biometrics"],
    href: "/products/face-recognition",
  },
  {
    id: "geospatial-analytics-platform",
    title: "Geospatial Analytics Platform",
    image: "/images/services/product_geospatial_platform.jpg",
    imageAlt: "Global geospatial command dashboard with satellite telemetry",
    tags: ["Satellite", "LiDAR"],
    href: "/products/geospatial-intelligence",
  },
];

export default function ServicesProductsGrid() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Heading & Explore All Products Button (Span 3.5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2 font-mono">
                BUILT IN-HOUSE
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Our Products
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
                Explore some of the AI systems and digital products we&apos;ve
                already engineered.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore all products</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Product Cards Side-by-Side (Span 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={prod.href}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all duration-300 flex flex-col"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={prod.image}
                    alt={prod.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 280px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                  <h3 className="font-heading text-sm sm:text-[15px] font-bold text-slate-950 tracking-tight group-hover:text-[#1E3A8A] transition-colors">
                    {prod.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                    {/* Tag Badges */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {prod.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-medium text-slate-700 group-hover:bg-slate-200 group-hover:text-slate-900 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Indicator */}
                    <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center text-slate-500 transition-all shrink-0 ml-1">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
