"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Cpu, Globe2, Layers } from "lucide-react";

interface RealProject {
  id: string;
  title: string;
  domain: string;
  lead: "Sharmin Islam Disha" | "Rafi Mahmud Tumon";
  leadRole: string;
  metric: string;
  summary: string;
  image: string;
  deliverables: string[];
  link: string;
}

const FEATURED_ENGINEERING_WORK: RealProject[] = [
  {
    id: "taif-flood-sar",
    title: "Sentinel-1 SAR Radar Flash Flood Hazard Susceptibility",
    domain: "Radar Remote Sensing & Hydrology",
    lead: "Rafi Mahmud Tumon",
    leadRole: "Geospatial Lead · M.Sc. TU Berlin",
    metric: "0.82 ROC-AUC · 10m Resolution",
    summary:
      "Integrated Sentinel-1 Synthetic Aperture Radar (SAR) backscatter with GPM IMERG rainfall and topographic hydrology factors into a Random Forest spatial ML pipeline.",
    image: "/images/works/taif_flood_probability.jpg",
    deliverables: ["GeoTIFF Hazard Rasters", "Spatial-Block Cross Validation", "300 DPI Zonation Map"],
    link: "/case-studies",
  },
  {
    id: "foshol360-b2b",
    title: "Enterprise B2B Agricultural Order & Cloud Inventory Flow",
    domain: "Full-Stack Web & Supply Infrastructure",
    lead: "Sharmin Islam Disha",
    leadRole: "Lead AI & Software Engineer",
    metric: "Multi-Tier Wholesale · Real-Time Sync",
    summary:
      "Architected transactional wholesale ordering for licensed agrochemical distributors with volume pricing tiers, depot inventory tracking, and automated invoice delivery.",
    image: "/images/works/foshol360_live_dealer_portal.png",
    deliverables: ["Next.js Full-Stack Portal", "PostgreSQL & FastAPI Sync", "Multi-Tenant Admin Console"],
    link: "/works",
  },
  {
    id: "lidar-solar-pv",
    title: "1,073 Rooftop Solar PV Modeling & Shadow Ray-Tracing",
    domain: "Airborne 3D LiDAR & Solar Energy",
    lead: "Rafi Mahmud Tumon",
    leadRole: "Geospatial Lead · M.Sc. TU Berlin",
    metric: "1,073 Roofs · Solstice Shadows",
    summary:
      "Extracted 3D building rooftops from airborne LiDAR point clouds, calculated pitch/azimuth geometry, and traced annual solar irradiance with solstice tree shadow casting.",
    image: "/images/works/lidar_rooftop_solar_pv.jpg",
    deliverables: ["Building Footprint GeoPackage", "Annual Irradiance Rasters", "PV Yield Summary Tables"],
    link: "/case-studies",
  },
  {
    id: "legal-support-rag",
    title: "Bilingual Statutory Legal Copilot & Document OCR Parser",
    domain: "Generative AI & Agentic RAG",
    lead: "Sharmin Islam Disha",
    leadRole: "Lead AI & Software Engineer",
    metric: "96.4% Citation Precision · Multi-Turn",
    summary:
      "Engineered an enterprise statutory advisory copilot in Bengali and English. Features citation-grounded RAG with pgvector and automated PDF clause risk analysis.",
    image: "/images/works/legal_support_composite.jpg",
    deliverables: ["pgvector Semantic Embeddings", "FastAPI Streaming Endpoint", "PDF Contract Clause Parser"],
    link: "/works",
  },
  {
    id: "tree-detection-5610",
    title: "5,610 Individual Tree Detection & Canopy Heights from LiDAR",
    domain: "Forestry Intelligence & Computer Vision",
    lead: "Rafi Mahmud Tumon",
    leadRole: "Geospatial Lead · M.Sc. TU Berlin",
    metric: "5,610 Canopies · Sub-meter Height",
    summary:
      "Engineered a forestry intelligence workflow fusing airborne LiDAR point clouds with Sentinel-2 NDVI spectral masking to segment 5,610 individual tree crowns.",
    image: "/images/works/tree_detection_5610.jpg",
    deliverables: ["Canopy Height Models (CHM)", "Vector Crown Polygons", "Tree Biomass Statistics"],
    link: "/case-studies",
  },
  {
    id: "credit-risk-ml",
    title: "Supervised Credit Default ML with SHAP Waterfall Explainability",
    domain: "Explainable Machine Learning (XAI)",
    lead: "Sharmin Islam Disha",
    leadRole: "Lead AI & Software Engineer",
    metric: "0.862 ROC-AUC · 100% Explainable",
    summary:
      "Supervised risk prediction across 150,000 borrower profiles. Used TreeSHAP attribution and waterfall plots to legally and mathematically justify individual credit decisions.",
    image: "/images/works/credit_risk_shap_waterfall.jpg",
    deliverables: ["Trained XGBoost / Scikit Models", "Individual SHAP Waterfall Engine", "Compliance Audit Reports"],
    link: "/case-studies",
  },
];

export default function EngineeringShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="showcase-heading" className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <Layers className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
            <span>Production Engineering Deliverables</span>
          </div>
          <h2 id="showcase-heading" className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">
            Real systems. Engineered end-to-end.
          </h2>
          <p className="mt-2 text-slate-600 text-base leading-relaxed">
            A selection of production platforms, machine learning models, and geospatial pipelines architected and delivered by our two founders.
          </p>
        </div>

        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:text-[#172554] hover:underline underline-offset-4 transition-colors shrink-0 group"
        >
          <span>View all case studies &amp; datasets</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Gentle staggered reveal grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_ENGINEERING_WORK.map((proj, idx) => {
          return (
            <motion.article
              key={proj.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.42,
                delay: shouldReduceMotion ? 0 : (idx % 3) * 0.08,
                ease: "easeOut" as const,
              }}
              className="bg-white rounded-2xl border border-slate-200/90 flex flex-col justify-between overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Real Technical Screenshot Container */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {/* Subtle Technical Metric Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md text-slate-200 border border-white/10">
                    <span>{proj.metric}</span>
                    <span className="text-slate-400">{proj.domain.split("&")[0]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Author Attribution */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" aria-hidden="true" />
                    <span>{proj.lead}</span>
                    <span className="text-slate-300">&middot;</span>
                    <span className="text-slate-500">{proj.leadRole.split("·")[0]}</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-950 tracking-tight leading-snug group-hover:text-slate-900 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {proj.summary}
                  </p>

                  {/* Concrete Engineering Deliverables */}
                  <ul className="mt-4 space-y-1 text-xs text-slate-600">
                    {proj.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-1.5 font-medium">
                        <span className="w-1 h-1 rounded-full bg-slate-700 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 sm:p-6 pt-0 mt-2">
                <Link
                  href={proj.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-[#1E3A8A] transition-colors"
                >
                  <span>Explore engineering details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
