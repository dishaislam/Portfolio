"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PROJECTS,
  PROJECT_SECTIONS,
  ProjectItem,
  ProjectSectionId,
} from "@/data/agencyData";
import {
  ExternalLink,
  Sparkles,
  X,
  CheckCircle2,
  Download,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Globe2,
  Layers,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Eye,
} from "lucide-react";

interface ProjectsSectionProps {
  previewOnly?: boolean;
}

export default function ProjectsSection({ previewOnly = false }: ProjectsSectionProps) {
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const expandAllSections = () => {
    const allExpanded: Record<string, boolean> = {};
    PROJECT_SECTIONS.forEach((s) => {
      allExpanded[s.id] = true;
    });
    setExpandedSections(allExpanded);
  };

  const collapseAllSections = () => {
    setExpandedSections({});
  };

  const isAllExpanded = PROJECT_SECTIONS.every((s) => Boolean(expandedSections[s.id]));

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const displayedSections =
    selectedSection === "all"
      ? PROJECT_SECTIONS
      : PROJECT_SECTIONS.filter((s) => s.id === selectedSection);

  const getSectionIcon = (id: ProjectSectionId) => {
    switch (id) {
      case "software":
        return <Code2 className="w-4 h-4 text-slate-900" />;
      case "ai":
        return <BrainCircuit className="w-4 h-4 text-slate-900" />;
      case "data-analysis":
        return <Globe2 className="w-4 h-4 text-slate-900" />;
      default:
        return <Layers className="w-4 h-4 text-slate-900" />;
    }
  };

  const getSectionBadgeStyle = (_id: ProjectSectionId) => {
    return "bg-slate-100 text-slate-800 border-slate-300";
  };

  const isMobileProject = (id: string) =>
    id === "aci-svs" || id === "legalsupport-ai" || id === "vetdoctor-ai";

  return (
    <section id="works-portfolio" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Section Jump Tabs */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Projects we&apos;ve delivered
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            The three best examples from each group are shown first. Open a group to see everything in it.
          </p>

          {/* Quick Section Filter & Global Expand Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setSelectedSection("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedSection === "all"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/60"
              }`}
            >
              All Sections ({PROJECTS.length})
            </button>
            {PROJECT_SECTIONS.map((sec) => {
              const count = PROJECTS.filter((p) => p.section === sec.id).length;
              const isSelected = selectedSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/60"
                  }`}
                >
                  <span className="font-sans text-xs opacity-70">[{sec.index}]</span>
                  <span>{sec.title.split("&")[0].trim()}</span>
                  <span
                    className={`text-xs px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            {/* Global Expand / Collapse Button */}
            <button
              onClick={isAllExpanded ? collapseAllSections : expandAllSections}
              className="px-3.5 py-2 text-xs font-bold rounded-xl transition-all border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 flex items-center gap-1.5 ml-1 shadow-2xs"
              title={isAllExpanded ? "Collapse all sections to top 3" : "Expand all sections"}
            >
              <Eye className="w-3.5 h-3.5 text-slate-900" />
              <span>{isAllExpanded ? "Collapse All to 3" : "Expand All Sections"}</span>
            </button>
          </div>
        </div>

        {/* Section Groups */}
        <div className="space-y-24">
          {displayedSections.map((section) => {
            const sectionProjects = PROJECTS.filter((p) => p.section === section.id);
            if (sectionProjects.length === 0) return null;

            const isExpanded = Boolean(expandedSections[section.id]);
            const displayedProjects = isExpanded ? sectionProjects : sectionProjects.slice(0, 3);
            const hasMore = sectionProjects.length > 3;
            const remainingCount = sectionProjects.length - 3;

            return (
              <div key={section.id} id={section.id} className="scroll-mt-28 space-y-8">
                {/* Editorial Section Header */}
                <div className="p-6 sm:p-8 bg-slate-50/90 rounded-3xl border border-slate-200/90 shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getSectionBadgeStyle(
                            section.id
                          )}`}
                        >
                          {getSectionIcon(section.id)}
                          <span>
                            {section.title}
                          </span>
                        </span>

                        <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                          {isExpanded
                            ? `Showing all ${sectionProjects.length} systems`
                            : `Highlighted: 3 of ${sectionProjects.length} systems`}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                        {section.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-900">
                        {section.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {section.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
                      <div className="text-left md:text-right p-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
                        <div className="text-xs font-sans tracking-wider text-slate-400 font-bold">
                          Direct Lead Engineer
                        </div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">
                          {section.id === "data-analysis" ? "Rafi Mahmud Tumon" : "Sharmin Islam Disha"}
                        </div>
                        <div className="text-xs text-slate-600 font-medium">
                          {section.id === "data-analysis"
                            ? "M.Sc. Geodesy & GIS • TU Berlin"
                            : "Senior AI & Full-Stack Architect"}
                        </div>
                      </div>

                      {hasMore && (
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="text-xs font-bold text-slate-950 hover:text-slate-700 inline-flex items-center gap-1 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-300 transition-colors shadow-xs"
                        >
                          <span>{isExpanded ? "Collapse to Top 3" : `View All ${sectionProjects.length} Works`}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-slate-900" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-slate-900" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section Projects Grid: 3 Symmetrical Columns for 3 Highlighted Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {displayedProjects.map((project, idx) => {
                    const isMobile = isMobileProject(project.id);
                    const isTopThree = idx < 3;

                    return (
                      <div
                        key={project.id}
                        onClick={() => handleOpenProject(project)}
                        className={`bs-card bg-white p-5 sm:p-6 flex flex-col justify-between cursor-pointer group hover:border-slate-400 hover:shadow-xl transition-all duration-300 rounded-3xl ${
                          isTopThree && !isExpanded ? "ring-1 ring-slate-900/10" : ""
                        }`}
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

                            {/* Metric Pill Bottom Right */}
                            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950 text-white text-xs font-bold shadow-md truncate max-w-[180px] border border-slate-700">
                              {project.metrics}
                            </div>
                          </div>

                          {/* Author & Byline */}
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="font-sans text-xs tracking-wider text-slate-950 font-bold">
                              Lead: {project.author.split(" ")[0]}
                            </span>
                            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                              {project.badge.split("•")[0].trim()}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors leading-snug line-clamp-2">
                            {project.title}
                          </h4>

                          {/* Summary */}
                          <p className="text-slate-600 text-xs sm:text-sm mt-2.5 line-clamp-2 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>

                        {/* Card Footer: Technologies & Action */}
                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                          <div className="flex flex-wrap gap-1 max-w-[65%]">
                            {project.tools.slice(0, 3).map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-700"
                              >
                                {tool}
                              </span>
                            ))}
                            {project.tools.length > 3 && (
                              <span className="text-xs text-slate-400 font-semibold self-center">
                                +{project.tools.length - 3}
                              </span>
                            )}
                          </div>

                          <span className="text-xs font-bold text-slate-950 flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0 underline underline-offset-4 decoration-slate-400">
                            <span>Inspect</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Section Bottom Expand / Collapse Toggle Bar */}
                {hasMore && (
                  <div className="pt-2 flex justify-center">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs bg-white hover:bg-slate-50 text-slate-950 border border-slate-300 hover:border-slate-500 hover:shadow-md group"
                    >
                      {isExpanded ? (
                        <>
                          <span>Collapse to Top 3 Highlighted Deliverables</span>
                          <ChevronUp className="w-4 h-4 text-slate-900 transition-transform group-hover:-translate-y-0.5" />
                        </>
                      ) : (
                        <>
                          <span>
                            View All {sectionProjects.length} Works in {section.title.split("&")[0].trim()}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-900 text-xs font-sans font-bold">
                            +{remainingCount} More
                          </span>
                          <ChevronDown className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Project Details Modal Viewer */}
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

              {/* Modal Metadata */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold">
                    {selectedProject.metrics}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Lead: <strong className="text-slate-900">{selectedProject.author}</strong>
                  </span>
                  <span className="text-xs text-slate-400">
                    Category:{" "}
                    <strong className="text-slate-700 font-sans">
                      {selectedProject.section}
                    </strong>
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
                  <span>Production Deliverables &amp; Verified Assets Provided:</span>
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

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                  Engineering Stack &amp; Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="bs-btn-primary"
                  >
                    <span>Inquire on Similar System</span>
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

                <div className="flex items-center gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-950 hover:text-slate-700 flex items-center gap-1 underline underline-offset-4"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
