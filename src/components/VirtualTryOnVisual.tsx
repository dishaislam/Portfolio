"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VirtualTryOnVisual() {
  const [scanPercent, setScanPercent] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Smooth cyclic animation loop:
  // 0.0s - 1.0s: Pause at top (0% - wearing everyday baseline outfit)
  // 1.0s - 3.2s: Sweep down (0% -> 100% - laser transforms clothes into the new shop coat)
  // 3.2s - 5.8s: Generous hold at bottom (100% - fully wearing the new boutique designer coat)
  // 5.8s - 7.2s: Smooth sweep back up (100% -> 0% - reset for comparison)
  // 7.2s - 7.8s: Brief pause at top, then loops
  useEffect(() => {
    if (isHovered) return; // Allow manual hover scrubbing

    const totalDuration = 7800; // 7.8 seconds per full cycle

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) % totalDuration;
      let progress = 0;

      if (elapsed < 1000) {
        // Paused at top (before outfit)
        progress = 0;
      } else if (elapsed < 3200) {
        // Sweeping down: 0 -> 100%
        const t = (elapsed - 1000) / 2200;
        const eased = 0.5 - Math.cos(t * Math.PI) / 2;
        progress = eased * 100;
      } else if (elapsed < 5800) {
        // Paused at bottom (wearing new designer dress)
        progress = 100;
      } else if (elapsed < 7200) {
        // Sweeping back up: 100 -> 0%
        const t = (elapsed - 5800) / 1400;
        const eased = 0.5 - Math.cos(t * Math.PI) / 2;
        progress = 100 - eased * 100;
      } else {
        progress = 0;
      }

      setScanPercent(progress);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered]);

  // Allow manual scrub on mouse move / touch move
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientY = e.clientY;
    const relativeY = Math.max(0, Math.min(rect.height, clientY - rect.top));
    const percent = (relativeY / rect.height) * 100;
    setScanPercent(percent);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
    startTimeRef.current = null;
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    startTimeRef.current = null;
  };

  // Clamped percent for styling
  const p = Math.max(0, Math.min(100, scanPercent));

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className="relative w-full max-w-[240px] sm:max-w-none sm:w-[170px] lg:w-[210px] aspect-[9/16] shrink-0 rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-100 shadow-2xs select-none cursor-ns-resize group/tryon"
    >
      {/* 1. Base Layer: Before Outfit (Regular clothes) */}
      <Image
        src="/images/offerings/virtual-try-on-before.webp"
        alt="Customer before virtual try-on in everyday outfit"
        fill
        sizes="(min-width: 640px) 185px, 100vw"
        priority
        className="object-cover object-center group-hover/tryon:scale-105 transition-transform duration-700 ease-out"
      />

      {/* 2. Top Layer: New Shop Dress (Revealed behind the laser scan sweep) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden group-hover/tryon:scale-105 transition-transform duration-700 ease-out"
        style={{
          clipPath: `inset(0 0 ${Math.max(0, 100 - p)}% 0)`,
        }}
      >
        <Image
          src="/images/offerings/virtual-try-on-after.webp"
          alt="Customer wearing the new designer outfit from the store via AI Virtual Try-On"
          fill
          sizes="(min-width: 640px) 185px, 100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 3. Holographic Laser Scanner Beam */}
      <div
        className="pointer-events-none absolute inset-x-0 z-20 transition-[opacity] duration-300"
        style={{
          top: `${p}%`,
          opacity: p > 1 && p < 99 ? 1 : 0.8,
        }}
      >
        {/* Soft Ambient Flare Glow */}
        <div className="absolute inset-x-0 -top-6 h-12 bg-gradient-to-b from-transparent via-emerald-400/35 to-transparent blur-[3px]" />

        {/* Sharp High-Precision Laser Line */}
        <div className="relative mx-1 h-[2px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_14px_rgba(52,211,153,1)]" />

        {/* Reticle Micro-Nodes on Left and Right of Laser */}
        <div className="absolute -top-[3px] left-1.5 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,1)]" />
        <div className="absolute -top-[3px] right-1.5 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,1)]" />
      </div>

      {/* 4. AR Viewport Corner Targeting Reticles */}
      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-emerald-400/90 rounded-tr-xs pointer-events-none z-10" />
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-emerald-400/90 rounded-bl-xs pointer-events-none z-10" />
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-emerald-400/90 rounded-br-xs pointer-events-none z-10" />
      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-emerald-400/90 rounded-tl-xs pointer-events-none z-10" />

      {/* 5. Minimal Status Indicator (No sentences) */}
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-white tracking-wide flex items-center gap-1 shadow-xs z-20 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        Live AR
      </div>
    </div>
  );
}
