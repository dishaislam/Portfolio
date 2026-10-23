"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sliders, CheckCircle2 } from "lucide-react";

export default function InteractiveSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeDataset, setActiveDataset] = useState<"satellite" | "lidar">("satellite");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const datasets = {
    satellite: {
      title: "Raw Optical vs SAR Radar Detection",
      subtitle: "Drag horizontally to compare Sentinel-2 true-color optical imagery against false-color Sentinel-1 radar backscatter and deep learning flood detection.",
      leftImage: "/images/satellite_optical.jpg",
      leftLabel: "Raw Sentinel-2 Optical",
      rightImage: "/images/satellite_detected.jpg",
      rightLabel: "SAR Flood + Vectorization",
      crs: "EPSG:32633 (UTM 33N)",
      resolution: "10m GSD",
      legendLeft: "RGB Visible Bands",
      legendRight: "SAR Radar + Flood Inundation",
      bullets: [
        "Unimpeded radar penetration through cloud cover",
        "Clean vectorized polygons in QGIS & GeoPackage",
        "Deterministic Python & GEE pipelines",
      ],
    },
    lidar: {
      title: "LiDAR Bare-Earth vs 3D Solar PV Irradiance",
      subtitle: "Drag horizontally to compare airborne LiDAR bare-earth Digital Terrain Model (DTM) with annual solar PV yield modeled across 1,073 building facets.",
      leftImage: "/images/works/bare_earth_dtm.jpg",
      leftLabel: "Bare-Earth LiDAR DTM",
      rightImage: "/images/works/lidar_rooftop_solar_pv.jpg",
      rightLabel: "3D Solar Irradiance & Shadows",
      crs: "EPSG:26913 (NAD83)",
      resolution: "0.5m High-Density Grid",
      legendLeft: "Bare-Earth Elevation (m)",
      legendRight: "Annual Solar Irradiance (kWh/m²/yr)",
      bullets: [
        "1,073 3D building rooftops delineated with heights",
        "Solstice shadow ray-tracing from adjacent trees",
        "Rooftop PV solar yield delivered in CSV/GeoPackage",
      ],
    },
  };

  const current = datasets[activeDataset];

  return (
    <section id="interactive-demo" aria-label="Optical and radar comparison">
      <div className="max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            {current.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {current.subtitle}
          </p>

          {/* Dataset Switcher & Presets */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <div className="p-1 bg-white border border-slate-200 rounded-full shadow-xs flex items-center gap-1">
              <button
                onClick={() => {
                  setActiveDataset("satellite");
                  setSliderPosition(50);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeDataset === "satellite"
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sentinel-1 SAR Radar
              </button>
              <button
                onClick={() => {
                  setActiveDataset("lidar");
                  setSliderPosition(50);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeDataset === "lidar"
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Airborne LiDAR Solar PV
              </button>
            </div>

            {/* Split View Quick Presets */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-full p-1 shadow-xs">
              <button
                onClick={() => setSliderPosition(0)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  sliderPosition === 0 ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Left
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  sliderPosition === 50 ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                50 / 50
              </button>
              <button
                onClick={() => setSliderPosition(100)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  sliderPosition === 100 ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Right
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Viewer Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] md:h-[540px] overflow-hidden rounded-2xl border border-slate-200 shadow-xl cursor-ew-resize select-none bg-slate-900"
          >
            {/* Background Image: Right Side */}
            <div className="absolute inset-0">
              <Image
                src={current.rightImage}
                alt={current.rightLabel}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              {/* Overlay Badge Top Right */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-slate-900 shadow-md border border-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-900" />
                <span>{current.rightLabel}</span>
              </div>
            </div>

            {/* Foreground Image: Left Side, clipped by sliderPosition */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[100vw] max-w-5xl h-full">
                <Image
                  src={current.leftImage}
                  alt={current.leftLabel}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Overlay Badge Top Left */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-slate-900 shadow-md border border-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-900" />
                <span>{current.leftLabel}</span>
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Circular Slider Thumb */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 active:scale-95 transition-transform">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Bottom HUD metadata bar */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs text-white">
              <span className="text-slate-400 text-xs">Drag the handle to compare</span>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-300">{current.legendLeft}</span>
                <span className="text-slate-400 font-bold">&harr;</span>
                <span className="text-slate-300 font-bold">{current.legendRight}</span>
              </div>
            </div>
          </div>

          {/* Under slider info banner */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            {current.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                <span className="font-medium">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
