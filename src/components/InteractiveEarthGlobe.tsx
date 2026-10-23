"use client";

import React, { useEffect, useRef, useState } from "react";
import createGlobe, { Marker, Arc } from "cobe";
import HeroDock from "@/components/HeroDock";
import { Satellite, Activity } from "lucide-react";

const MARKERS: Marker[] = [
  // German Aerospace Center (DLR) - Munich (LiDAR canopy mapping)
  { location: [48.1351, 11.582], size: 0.08, color: [0.05, 0.78, 0.52] },
  // Dhaka - Utsho Studio HQ
  { location: [23.8103, 90.4125], size: 0.09, color: [0.05, 0.78, 0.52] },
  // San Francisco - Client hub
  { location: [37.7749, -122.4194], size: 0.06, color: [0.38, 0.45, 0.95] },
  // London - European network
  { location: [51.5074, -0.1278], size: 0.06, color: [0.38, 0.45, 0.95] },
  // Tokyo
  { location: [35.6762, 139.6503], size: 0.05, color: [0.38, 0.45, 0.95] },
];

const ARCS: Arc[] = [
  { from: [23.8103, 90.4125], to: [48.1351, 11.582], color: [0.05, 0.78, 0.52] },
  { from: [23.8103, 90.4125], to: [37.7749, -122.4194], color: [0.38, 0.45, 0.95] },
  { from: [48.1351, 11.582], to: [51.5074, -0.1278], color: [0.05, 0.78, 0.52] },
  { from: [23.8103, 90.4125], to: [35.6762, 139.6503], color: [0.38, 0.45, 0.95] },
];

export default function InteractiveEarthGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let width = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    let phi = 0;
    let animId: number;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1),
      width: (width || 460) * 2,
      height: (width || 460) * 2,
      phi: 0,
      theta: 0.22,
      dark: 0,
      diffuse: 1.35,
      mapSamples: 16000,
      mapBrightness: 4.5,
      baseColor: [0.88, 0.92, 0.98], // Crisp oceanic / aerial landmass tone
      markerColor: [0.05, 0.78, 0.52], // Glowing emerald markers
      glowColor: [0.84, 0.9, 0.99], // Luminous atmosphere glow
      markers: MARKERS,
      arcs: ARCS,
      arcColor: [0.2, 0.65, 0.9],
      arcWidth: 1.2,
      arcHeight: 0.35,
    });

    const animate = () => {
      if (pointerInteracting.current === null) {
        phi += 0.0035;
      } else {
        phi += pointerInteractionMovement.current;
        pointerInteractionMovement.current *= 0.92; // smooth inertia damping
      }

      globe.update({ phi });
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full select-none">
      {/* Ambient background glow aura */}
      <div
        className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-slate-200/40 via-slate-100/50 to-slate-200/40 blur-3xl pointer-events-none -top-4"
        aria-hidden="true"
      />

      {/* 3D Globe Stage */}
      <div
        className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing group/globe"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = (e.clientX - pointerInteracting.current) * 0.005;
            pointerInteractionMovement.current = delta;
            pointerInteracting.current = e.clientX;
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Orbital Satellite Ring */}
        <div
          className="absolute inset-4 sm:inset-6 rounded-full border border-slate-400/25 pointer-events-none transition-transform duration-700 [transform:rotateX(68deg)_rotateY(-18deg)]"
          aria-hidden="true"
        >
          {/* Traveling Satellite along orbit */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 animate-[spin_24s_linear_infinite] origin-[50%_210px] sm:origin-[50%_230px]">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.8)] ring-2 ring-white" />
          </div>
        </div>

        {/* Secondary Tilted Arc */}
        <div
          className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-slate-400/30 pointer-events-none [transform:rotateX(78deg)_rotateY(25deg)] animate-[spin_40s_linear_infinite]"
          aria-hidden="true"
        />

        {/* High-DPI WebGL 3D Globe Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full max-w-[420px] max-h-[420px] object-contain drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)] transition-transform duration-500 group-hover/globe:scale-[1.02]"
        />

        {/* Floating Telemetry Badge 1: Munich DLR (Top Left) */}
        <div className="absolute top-4 left-0 sm:left-2 px-3 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center gap-2 pointer-events-none animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-slate-900 leading-tight">Munich &middot; DLR</div>
            <div className="text-[9px] font-medium text-slate-500">100K+ Tree crowns mapped</div>
          </div>
        </div>

        {/* Floating Telemetry Badge 2: Sentinel-2 (Top Right) */}
        <div className="absolute top-6 right-0 sm:right-2 px-3 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center gap-2 pointer-events-none">
          <Satellite className="w-3.5 h-3.5 text-slate-800 animate-spin [animation-duration:12s]" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-slate-900 leading-tight">Sentinel-2 &middot; LiDAR</div>
            <div className="text-[9px] font-medium text-slate-500">Multispectral 10m</div>
          </div>
        </div>

        {/* Floating Telemetry Badge 3: Dhaka AI HQ (Bottom Right) */}
        <div className="absolute bottom-14 right-2 sm:right-4 px-3 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center gap-2 pointer-events-none">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-slate-900 leading-tight">Utsho Studio</div>
            <div className="text-[9px] font-medium text-emerald-600 font-mono">Real-time GeoAI</div>
          </div>
        </div>

        {/* Drag Hint indicator on hover */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-medium text-white shadow-xs opacity-75 group-hover/globe:opacity-100 transition-opacity">
            Drag to rotate 3D Earth
          </div>
        </div>
      </div>

      {/* Docked Service Navigator directly below the Globe */}
      <HeroDock />
    </div>
  );
}
