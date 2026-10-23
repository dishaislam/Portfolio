"use client";

import React, { useState } from "react";
import Image from "next/image";

const CARD =
  "flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0A1730]/70 backdrop-blur-md border border-sky-300/20 shadow-[0_12px_36px_rgba(0,0,0,0.55)]";
const CARD_TITLE = "text-base font-semibold text-white font-heading";
const CARD_LIST = "mt-2 flex flex-col gap-0.5 text-xs text-slate-300 leading-tight";

export default function ServicesHeroGlobe() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[620px] flex items-center justify-center select-none overflow-visible">
      <div
        className="absolute w-[440px] sm:w-[520px] h-[440px] sm:h-[520px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.16)_0%,_rgba(30,58,138,0.1)_40%,_transparent_72%)] blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
        <div
          className="absolute inset-[-14%] rounded-full border border-sky-400/20 pointer-events-none animate-[spin_55s_linear_infinite]"
          style={{ transform: "rotateX(68deg) rotateY(-18deg)" }}
        >
          <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]" />
        </div>
        <div
          className="absolute inset-[-8%] rounded-full border border-sky-500/25 pointer-events-none animate-[spin_40s_linear_infinite_reverse]"
          style={{ transform: "rotateX(-58deg) rotateY(24deg)" }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#60a5fa]" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#60a5fa]" />
        </div>

        <div className="relative w-full h-full">
          <Image
            src="/images/services/cyber_globe_network_core.png"
            alt="Digital network globe"
            fill
            priority
            className="object-contain scale-[1.12] brightness-[0.82] saturate-[0.8] hue-rotate-[8deg] [mask-image:radial-gradient(circle,#000_52%,transparent_71%)]"
            sizes="(min-width: 1024px) 500px, 90vw"
          />
        </div>
      </div>

      <div
        onMouseEnter={() => setHoveredCard("ai")}
        onMouseLeave={() => setHoveredCard(null)}
        className={`absolute top-[22%] left-0 sm:left-2 lg:-left-6 z-20 transition-all duration-300 ${hoveredCard === "ai" ? "-translate-y-1" : ""}`}
      >
        <div className={`${CARD} min-w-[170px] sm:min-w-[190px]`}>
          <div>
            <div className={CARD_TITLE}>AI / ML</div>
            <div className={CARD_LIST}>
              <span>Vision</span>
              <span>NLP</span>
              <span>RAG</span>
              <span>Agents</span>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={() => setHoveredCard("geo")}
        onMouseLeave={() => setHoveredCard(null)}
        className={`absolute top-0 sm:top-2 right-0 sm:right-2 lg:-right-4 z-20 transition-all duration-300 ${hoveredCard === "geo" ? "-translate-y-1" : ""}`}
      >
        <div className={`${CARD} min-w-[200px] sm:min-w-[220px]`}>
          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-sky-300/30 shrink-0">
            <Image
              src="/images/services/hero_geospatial_card_thumb.jpg"
              alt="Geospatial satellite aerial orthophoto"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className={CARD_TITLE}>Geospatial</div>
            <div className={CARD_LIST}>
              <span>Satellite</span>
              <span>LiDAR</span>
              <span>Remote Sensing</span>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={() => setHoveredCard("web")}
        onMouseLeave={() => setHoveredCard(null)}
        className={`absolute bottom-2 sm:bottom-6 right-0 sm:right-4 lg:-right-4 z-20 transition-all duration-300 ${hoveredCard === "web" ? "-translate-y-1" : ""}`}
      >
        <div className={`${CARD} min-w-[190px] sm:min-w-[210px]`}>
          <div>
            <div className={CARD_TITLE}>Web &amp; Commerce</div>
            <div className={CARD_LIST}>
              <span>Web Apps</span>
              <span>E-commerce</span>
              <span>Dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
