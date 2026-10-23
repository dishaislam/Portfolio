"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";

interface GlobePin {
  id: string;
  label: string;
  lat: number;
  lon: number;
  title: string;
  detail: string;
  href: string;
}

const PINS: GlobePin[] = [
  {
    id: "voice",
    label: "AI Voice",
    lat: 40.7,
    lon: -74.0,
    title: "AI Voice Receptionist",
    detail: "Answers calls 24/7 and books appointments with sub-280ms latency.",
    href: "/products/ai-voice-receptionist",
  },
  {
    id: "lidar",
    label: "LiDAR",
    lat: 52.5,
    lon: 13.4,
    title: "Airborne LiDAR & Canopy Mapping",
    detail: "Tree canopies mapped from aerial LiDAR, built with the German Aerospace Center.",
    href: "/products/geospatial-intelligence",
  },
  {
    id: "gis",
    label: "Web GIS",
    lat: 23.8,
    lon: 90.4,
    title: "Web GIS & Solar Analysis",
    detail: "Interactive maps, flood-risk layers, and rooftop solar shadow analysis.",
    href: "/products/geospatial-intelligence",
  },
];

const latLonToVector = (lat: number, lon: number, r = 1.012) => {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
};

const wrapAngle = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

export default function RealisticEarthGlobe({ pins = true }: { pins?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const globeWrapperRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pinRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const focusRef = useRef<((index: number) => void) | null>(null);
  const userInteractedRef = useRef(false);
  const [activePin, setActivePin] = useState(0);

  const selectPin = useCallback((index: number, byUser = true) => {
    if (byUser) userInteractedRef.current = true;
    setActivePin(index);
    focusRef.current?.(index);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = globeWrapperRef.current;
    if (!canvas || !wrapper) return;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();

    const getDimensions = () => {
      const size = Math.min(wrapper.clientWidth || 440, 480);
      return { width: size, height: size };
    };

    const { width, height } = getDimensions();

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1000);
    camera.position.set(0, 0, 3.25);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0); // Transparent canvas
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12; // Clear, luminous exposure

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // --- 2. High-Resolution Texture Loader ---
    const textureLoader = new THREE.TextureLoader();

    const configureTexture = (texture: THREE.Texture, isSRGB = false) => {
      if (isSRGB) texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAnisotropy;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
      return texture;
    };

    // 4K Photorealistic Earth Deep Navy & Natural Soil Continents Map
    const earthColorTexture = configureTexture(
      textureLoader.load("/textures/earth/earth_deep_navy_4k.jpg"),
      true
    );

    // Earth Normal Map for 3D terrain relief
    const earthNormalTexture = configureTexture(
      textureLoader.load("/textures/earth/earth_normal.jpg")
    );

    // High-Density Radiant Urban Fabric Street & City Lights Map
    // Covers all global metropolitan hubs & highway networks in warm champagne-gold & incandescent ivory
    const earthUrbanLightsTexture = textureLoader.load(
      "/textures/earth/earth_city_lights_radiant.png"
    );
    earthUrbanLightsTexture.colorSpace = THREE.SRGBColorSpace;
    earthUrbanLightsTexture.generateMipmaps = false;
    earthUrbanLightsTexture.minFilter = THREE.LinearFilter;
    earthUrbanLightsTexture.magFilter = THREE.LinearFilter;
    earthUrbanLightsTexture.anisotropy = maxAnisotropy;
    earthUrbanLightsTexture.needsUpdate = true;

    // Global Cloud Texture
    const cloudsTexture = configureTexture(
      textureLoader.load("/textures/earth/earth_clouds.png"),
      true
    );

    // Earth Group with natural orbital tilt
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (22 * Math.PI) / 180;
    earthGroup.rotation.x = (14 * Math.PI) / 180; // Northern hemisphere tilted toward camera
    scene.add(earthGroup);

    // Initial longitude orientation: brings Europe, Middle East, India, and Africa facing front
    const initialRotationY = 4.4;

    // --- 3. Base Earth Mesh (Dark Navy Oceans & Rich Soil Continents) ---
    const earthGeometry = new THREE.SphereGeometry(1, 128, 128);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthColorTexture,
      color: new THREE.Color(0x8fa6d6), // deepens ocean blue
      normalMap: earthNormalTexture,
      normalScale: new THREE.Vector2(0.85, 0.85), // Pronounced 3D topographic ridge relief
      roughness: 0.44, // Crisp planetary sheen emphasizing 3D surface topography
      metalness: 0.04,
    });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.rotation.y = initialRotationY;
    earthGroup.add(earthMesh);

    // --- 3b. Region pins: anchored to the Earth mesh so they rotate with it ---
    const pinAnchors = PINS.map((pin) => {
      const anchor = new THREE.Object3D();
      anchor.position.copy(latLonToVector(pin.lat, pin.lon));
      earthMesh.add(anchor);
      return anchor;
    });
    const pinWorld = new THREE.Vector3();
    const pinNormal = new THREE.Vector3();
    const camDir = new THREE.Vector3();
    let focusTarget: number | null = null;

    focusRef.current = (index: number) => {
      const pin = PINS[index];
      const local = latLonToVector(pin.lat, pin.lon, 1);
      const a = Math.atan2(local.z, local.x);
      // earthMesh rotates about Y; bring azimuth `a` to face the camera (+Z)
      focusTarget = a - Math.PI / 2 - earthGroup.rotation.y;
    };

    // --- 4. Delicate Parallax Cloud Layer ---
    const cloudsGeometry = new THREE.SphereGeometry(1.004, 96, 96);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.2, // Subtle, ethereal white cloud coverage
      roughness: 0.90,
      metalness: 0.0,
      depthWrite: false,
    });

    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMesh.rotation.y = initialRotationY;
    earthGroup.add(cloudsMesh);

    // --- 5. GIS Radar Wave Layer: Lighting Vision ONLY Active When Scanner Passes Through ---
    // Sits at 1.007 (above clouds) so city lights and radar sweeps are crystal clear
    const nightGeometry = new THREE.SphereGeometry(1.007, 128, 128);

    const nightMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uNightTexture: { value: earthUrbanLightsTexture },
        uTime: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vLocalPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vLocalPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uNightTexture;
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vLocalPosition;

        void main() {
          vec4 lights = texture2D(uNightTexture, vUv);
          float cityIntensity = lights.a;

          // High-Precision GIS Satellite Radar Wave (Tilted orbital swath)
          float lon = atan(vLocalPosition.z, vLocalPosition.x);
          float swathCoord = lon + vLocalPosition.y * 0.40;
          
          float scanSpeed = 0.52;
          float totalScan = uTime * scanSpeed;
          float rel = totalScan - swathCoord;
          
          // Safe non-negative relative coordinate
          float safeRel = rel + 6283.1853;
          
          // Pass index (integer cycle count of scanner revolutions)
          float cycle = floor(safeRel / 6.2831853);
          // Angular distance behind current beam front (0.0 to 2*PI)
          float dist = mod(safeRel, 6.2831853);

          // Alternating Scanner Mode:
          // Pass 0, 2, 4... = LIGHT VISION MODE (Scanner turns lights ON and leaves them ON)
          // Pass 1, 3, 5... = WITHOUT LIGHT MODE (Scanner turns lights OFF and leaves them OFF)
          float isNoLightPass = mod(cycle, 2.0);

          // 1. Sleek leading GIS LiDAR laser beam front (crisp high-tech wave)
          float laserBeam = exp(-dist * dist * 1400.0);

          // 2. Smooth transition width behind the laser beam (~0.25 radians / 14 degrees)
          float transition = clamp(dist / 0.25, 0.0, 1.0);

          // 3. State calculation:
          // In Light Mode pass: as beam sweeps through, region behind beam transitions to 1.0 (ON)
          // In Without Light pass: as beam sweeps through, region behind beam transitions to 0.0 (OFF)
          float lightState = (isNoLightPass < 0.5) ? transition : (1.0 - transition);

          // Total radiance of city lights at this fragment
          float cityRadiance = lightState * 3.6 + laserBeam * 2.2;

          // If lights are OFF and laser beam is not present, discard to keep pure dark navy Earth
          if (cityRadiance < 0.01 && laserBeam < 0.01) {
            discard;
          }

          // Warm champagne-gold (#D4B996) and incandescent ivory (#F6EEE3) city lights
          vec3 cityColor = lights.rgb * cityRadiance;

          // Sleek LiDAR wave front beam:
          // Slightly warmer gold on Light Mode pass, sleek cyan on Without Light pass
          vec3 beamTint = (isNoLightPass < 0.5) 
            ? vec3(1.30, 1.50, 1.80) 
            : vec3(0.80, 1.30, 1.95);
          vec3 laserLine = beamTint * laserBeam * 1.25;

          // Subtle leading/trailing scan aura
          vec3 swathAura = vec3(0.12, 0.25, 0.55) * laserBeam * 0.20;

          vec3 finalColor = cityColor + laserLine + swathAura;
          float finalAlpha = clamp(cityIntensity * lightState * 1.8 + laserBeam * 1.0, 0.0, 1.0);

          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    const nightMesh = new THREE.Mesh(nightGeometry, nightMaterial);
    nightMesh.rotation.y = initialRotationY;
    earthGroup.add(nightMesh);

    // --- 6. Deep Sapphire Atmospheric Highlighter Rim ---
    const atmosGeometry = new THREE.SphereGeometry(1.06, 64, 64);
    const atmosMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
          // Crisp, brilliant white atmospheric highlighter rim
          gl_FragColor = vec4(0.88, 0.94, 1.0, 1.0) * intensity * 0.90;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosMesh = new THREE.Mesh(atmosGeometry, atmosMaterial);
    scene.add(atmosMesh);

    // --- 7. Radiant, Balanced Lighting for Rich Navy Oceans & Crisp Soil Continents ---
    // Ambient Light: soft, balanced ambient illumination so surface coverage is lighter and continents are never dark
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.62);
    scene.add(ambientLight);

    // Sun Key Light: crisp, natural sunlight across the visible globe face for sharp ridge relief
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.3);
    sunLight.position.set(-1.8, 1.4, 2.4);
    scene.add(sunLight);

    // Fill Light: soft sapphire fill to bring out realistic oceanic depth and subtle relief
    const fillLight = new THREE.DirectionalLight(0x7aa7e8, 0.4);
    fillLight.position.set(2.4, -0.6, 1.6);
    scene.add(fillLight);

    // --- 8. Interactive Drag Rotation with Momentum & Scroll Response ---
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velX = 0;
    let velY = 0;

    const onPointerDown = (e: PointerEvent) => {
      focusTarget = null;
      userInteractedRef.current = true;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      velX = 0;
      velY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      velX = deltaX * 0.005;
      velY = deltaY * 0.005;

      earthGroup.rotation.y += velX;
      earthGroup.rotation.x += velY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Scroll-linked rotation
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      earthGroup.rotation.y += deltaScroll * 0.0018;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Responsive Resize Listener
    const onResize = () => {
      if (!globeWrapperRef.current) return;
      const { width: w, height: h } = getDimensions();
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- 9. Animation Loop ---
    let animId: number;

    const animate = () => {
      // Advance GIS scan time
      nightMaterial.uniforms.uTime.value += 0.016;

      // Ease toward a focused pin
      if (focusTarget !== null) {
        const diff = wrapAngle(focusTarget - earthMesh.rotation.y);
        if (Math.abs(diff) < 0.003) {
          focusTarget = null;
        } else {
          const step = prefersReducedMotion ? diff : diff * 0.07;
          earthMesh.rotation.y += step;
          nightMesh.rotation.y += step;
          cloudsMesh.rotation.y += step;
        }
      }

      // Slow, smooth orbital drift if not reduced motion
      if (!prefersReducedMotion && focusTarget === null) {
        earthMesh.rotation.y += 0.00035;
        nightMesh.rotation.y += 0.00035;
        cloudsMesh.rotation.y += 0.00055;
      }

      // Apply drag momentum inertia
      if (!isDragging) {
        if (Math.abs(velX) > 0.0001 || Math.abs(velY) > 0.0001) {
          earthGroup.rotation.y += velX;
          earthGroup.rotation.x += velY;
          velX *= 0.92;
          velY *= 0.92;
        }
      }

      // Constrain vertical tilt comfortably
      earthGroup.rotation.x = Math.max(-0.45, Math.min(0.45, earthGroup.rotation.x));

      renderer.render(scene, camera);

      // Project pins to screen space and hide those on the far side
      earthGroup.updateMatrixWorld(true);
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      pinAnchors.forEach((anchor, i) => {
        const el = pinRefs.current[i];
        if (!el) return;
        anchor.getWorldPosition(pinWorld);
        pinNormal.copy(pinWorld).normalize();
        camDir.copy(camera.position).sub(pinWorld).normalize();
        const facing = pinNormal.dot(camDir);
        const projected = pinWorld.clone().project(camera);
        const x = (projected.x * 0.5 + 0.5) * w;
        const y = (-projected.y * 0.5 + 0.5) * h;
        const visible = facing > 0.12;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        el.style.opacity = visible ? String(Math.min(1, (facing - 0.12) * 4)) : "0";
        el.style.pointerEvents = visible ? "auto" : "none";
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Gentle cursor parallax on the whole globe stage
    const root = rootRef.current;
    let parallaxRaf = 0;
    let px = 0;
    let py = 0;
    let cx = 0;
    let cy = 0;
    const onParallax = (e: PointerEvent) => {
      px = (e.clientX / window.innerWidth - 0.5) * 2;
      py = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const parallaxLoop = () => {
      cx += (px - cx) * 0.06;
      cy += (py - cy) * 0.06;
      if (root) root.style.transform = `translate3d(${cx * -12}px, ${cy * -10}px, 0)`;
      parallaxRaf = requestAnimationFrame(parallaxLoop);
    };
    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", onParallax);
      parallaxRaf = requestAnimationFrame(parallaxLoop);
    }

    // Cleanup on unmount
    return () => {
      focusRef.current = null;
      cancelAnimationFrame(parallaxRaf);
      window.removeEventListener("pointermove", onParallax);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      earthGeometry.dispose();
      earthMaterial.dispose();
      nightGeometry.dispose();
      nightMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      atmosGeometry.dispose();
      atmosMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Auto-tour the pins until the visitor interacts
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = setInterval(() => {
      if (userInteractedRef.current) return;
      i = (i + 1) % PINS.length;
      selectPin(i, false);
    }, 5200);
    return () => clearInterval(id);
  }, [selectPin]);

  return (
    <div
      ref={rootRef}
      className="lg:col-span-5 relative flex flex-col items-center justify-center w-full select-none will-change-transform"
    >
      {/* Luminous Atmospheric White Radial Aura behind Earth */}
      <div
        className="absolute w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.42)_0%,_rgba(255,255,255,0.16)_42%,_transparent_72%)] blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3D Earth Viewport */}
      <div
        ref={globeWrapperRef}
        className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing group/globe"
      >
        {/* Layer 1: Deep Navy & Midnight Space Halo */}
        <div
          className="absolute -inset-10 sm:-inset-14 rounded-full bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.30)_0%,_rgba(15,23,42,0.18)_45%,_transparent_75%)] blur-[45px] pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Layer 2: Radiant White Core Backlight directly under Earth */}
        <div
          className="absolute -inset-2 sm:-inset-3 rounded-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.55)_35%,_rgba(224,242,254,0.25)_55%,_transparent_70%)] blur-[16px] pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* 3D WebGL Canvas sitting cleanly on top of glowing cosmic backlights */}
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full max-w-[380px] sm:max-w-[430px] max-h-[380px] sm:max-h-[430px] object-contain transition-transform duration-500 group-hover/globe:scale-[1.02]"
        />

        {/* Region pins, positioned each frame from the 3D scene */}
        {pins && PINS.map((p, i) => (
          <Link
            key={p.id}
            href={p.href}
            ref={(el) => {
              pinRefs.current[i] = el;
            }}
            aria-label={p.title}
            onPointerEnter={() => selectPin(i)}
            onPointerDown={(e) => e.stopPropagation()}
            className="absolute top-0 left-0 z-20 opacity-0 cursor-pointer group/pin"
          >
            <span className="relative flex items-center justify-center w-7 h-7">
              <span
                className={`absolute inset-0 rounded-full border-2 border-amber-200 animate-pin-ring ${
                  activePin === i ? "" : "hidden"
                }`}
                aria-hidden="true"
              />
              <span
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                  activePin === i
                    ? "bg-amber-300 border-white scale-125 shadow-[0_0_0_3px_rgba(7,14,30,0.55),0_0_16px_4px_rgba(252,211,77,0.75)]"
                    : "bg-white border-slate-900/70 shadow-[0_0_0_2px_rgba(255,255,255,0.35)] group-hover/pin:bg-amber-200"
                }`}
              />
            </span>
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-0.5 whitespace-nowrap text-[11px] font-bold text-slate-950 px-2 py-0.5 rounded-md bg-white shadow-md shadow-black/30">
              {p.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

