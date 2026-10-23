"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, ProjectItem } from "@/data/agencyData";
import {
  ExternalLink,
  Sparkles,
  X,
  CheckCircle2,
  Download,
  ArrowUpRight,
  ChevronRight,
  Code2,
  BrainCircuit,
  Globe2,
  Layers,
  FileCheck,
} from "lucide-react";

export default function HomeWorksShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "software" | "ai" | "data-analysis">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Select the top 6 flagship projects
  const flagshipIds = [
    "aura-ecommerce",
    "legalsupport-ai",
    "aci-svs",
    "vetdoctor-ai",
    "lidar-solar-pv",
    "taif-flood-sar",
  ];

  const flagshipProjects = flagshipIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p));

  const filteredProjects =
    activeTab === "all"
      ? flagshipProjects
      : flagshipProjects.filter((p) => p.section === activeTab);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const getDomainMeta = (section: string) => {
    switch (section) {
      case "software":
        return {
          label: "Website & Backend",
          badgeClass: "bg-slate-100 text-slate-900 border-slate-200",
          icon: <Code2 className="w-3.5 h-3.5 text-slate-700" />,
        };
      case "ai":
        return {
          label: "AI Integration & Models",
          badgeClass: "bg-slate-100 text-slate-900 border-slate-200",
          icon: <BrainCircuit className="w-3.5 h-3.5 text-slate-700" />,
        };
      case "data-analysis":
        return {
          label: "GIS & Geospatial",
          badgeClass: "bg-slate-100 text-slate-900 border-slate-200",
          icon: <Globe2 className="w-3.5 h-3.5 text-slate-700" />,
        };
      default:
        return {
          label: "Studio Project",
          badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
          icon: <Layers className="w-3.5 h-3.5 text-slate-600" />,
        };
    }
  };

  return (
    <section id="featured-works" className="py-14 sm:py-18 bg-white/70 backdrop-blur-md border-y border-slate-200/80">
      <div className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-slate-700" />
              <span>Flagship Deliverables in Production</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Featured Works &amp; Systems
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Explore our core products: responsive web platforms, cloud &amp; offline field architectures, statutory RAG copilots, and airborne LiDAR solar models.
            </p>
          </div>

          {/* Quick Domain Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {[
              { id: "all", label: "All Deliverables" },
              { id: "software", label: "Website & Backend" },
              { id: "ai", label: "AI Integration & Models" },
              { id: "data-analysis", label: "GIS & Geospatial" },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const domain = getDomainMeta(project.section);
            const isMobile =
              project.id === "aci-svs" ||
              project.id === "legalsupport-ai" ||
              project.id === "vetdoctor-ai";

            return (
              <div
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className="bs-card bg-white p-5 sm:p-6 flex flex-col justify-between cursor-pointer group hover:border-slate-400 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Clean Deliverable Image Preview */}
                  <div className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-slate-200/80 shadow-xs">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={`${
                        isMobile
                          ? "object-contain p-2.5 drop-shadow-md"
                          : "object-cover object-top"
                      } group-hover:scale-105 transition-transform duration-500`}
                    />

                    {/* Clean Category Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md text-slate-200 text-xs font-semibold border border-white/10 shadow-sm">
                      {project.badge.split("•")[0].trim()}
                    </div>

                    {/* Outcome Metric Pill */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950 text-white text-xs font-bold shadow-md border border-white/20">
                      {project.metrics}
                    </div>
                  </div>

                  {/* Header Byline */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${domain.badgeClass}`}>
                      {domain.icon}
                      <span>{domain.label}</span>
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      Lead: {project.author.split(" ")[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-950 group-hover:text-slate-800 transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Card Footer: Tech tags + Inspect button */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1 max-w-[65%]">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="font-bold text-slate-900 group-hover:text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Works CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-950">
              Explore Our Production Systems &amp; Products
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              From virtual try-on and enterprise voice receptionists to full-stack e-commerce and scientific-grade LiDAR pipelines. Select any product to inspect architecture, metrics, and deliverables.
            </p>
          </div>

          <Link
            href="/products"
            className="bs-btn-primary shrink-0 text-xs sm:text-sm py-3 px-6"
          >
            <span>View All Products &amp; Systems</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Modal Viewer */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6 cursor-default text-slate-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Single Deliverable Viewport */}
              <div className="relative h-72 sm:h-[440px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-3"
                  priority
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-xs font-semibold text-white border border-white/10 shadow-sm">
                  {selectedProject.badge}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-900 border border-slate-200 text-xs font-bold">
                    {selectedProject.metrics}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Lead: <strong className="text-slate-900">{selectedProject.author}</strong>
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-900 tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-slate-900" />
                  <span>Production Deliverables &amp; Verified Assets:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="bs-btn-primary"
                  >
                    <span>Inquire on Similar Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {selectedProject.downloadUrl && (
                    <a
                      href={selectedProject.downloadUrl}
                      download
                      className="bs-btn-secondary"
                    >
                      <Download className="w-4 h-4 text-slate-900" />
                      <span>{selectedProject.downloadLabel || "Download Deliverable"}</span>
                    </a>
                  )}
                </div>

                <Link
                  href="/products"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-bold text-slate-900 hover:text-black flex items-center gap-1"
                >
                  <span>See products &amp; systems</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
