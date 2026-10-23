"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOUNDERS } from "@/data/agencyData";
import { Mail, ExternalLink, Award, CheckCircle2, ArrowUpRight, Linkedin } from "lucide-react";

export default function FounderProfiles() {
  return (
    <section id="founders" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E7E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="aarong-badge mb-4">
            <Award className="w-3.5 h-3.5 text-[#8D5B18]" />
            <span>Co-Founders &amp; Leads</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1816] tracking-tight">
            Meet the Specialists Behind <span className="italic">utsho<span className="text-[#8D5B18]">.</span></span>
          </h2>
          <div className="w-12 h-px bg-[#8D5B18] mx-auto my-5" />
          <p className="font-sans text-sm sm:text-base text-[#5E5852] leading-relaxed">
            A husband-and-wife technical duo uniting European aerospace remote sensing &amp; TU Berlin geoinformatics with production-proven enterprise artificial intelligence.
          </p>
        </div>

        {/* Dual Profiles Grid (Aarong Editorial Aesthetic) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FOUNDERS.map((founder, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] border border-[#E8E2D8] p-8 sm:p-10 flex flex-col justify-between group hover:border-[#1A1816] transition-all duration-300 shadow-xs"
            >
              <div>
                {/* Header: Photo + Name + Role */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                  <div className="w-24 h-24 overflow-hidden relative shrink-0 border border-[#E7E1D6]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="aarong-badge text-[9px] mb-2">
                      {founder.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1816]">
                      {founder.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#79716B] font-semibold mt-1">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="font-sans text-sm text-[#5E5852] leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Key Credentials List */}
                <div className="space-y-2.5 mb-6 pt-5 border-t border-[#EAE4D9]">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#1A1816] block mb-2">
                    Verified Credentials:
                  </span>
                  {founder.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#443E38] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8D5B18] shrink-0 mt-1.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills and Direct Links */}
              <div className="pt-5 border-t border-[#EAE4D9]">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {founder.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E4DDD0] text-xs font-sans uppercase tracking-[0.1em] text-[#5E5852]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {founder.links.portfolio && (
                      <a
                        href={founder.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-[#E7E1D6] hover:border-[#1A1816] text-[#1A1816] transition-colors"
                        title="Personal Website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {founder.links.linkedin && (
                      <a
                        href={founder.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-[#E7E1D6] hover:border-[#1A1816] text-[#1A1816] transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {founder.links.email && (
                      <a
                        href={founder.links.email}
                        className="p-2 border border-[#E7E1D6] hover:border-[#1A1816] text-[#1A1816] transition-colors"
                        title="Send Direct Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <Link
                    href="/about"
                    className="font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1816] flex items-center gap-1 hover:text-[#8D5B18] transition-colors"
                  >
                    <span>Full Biography</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
