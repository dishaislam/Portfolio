"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Bot,
  ScanFace,
  ShoppingBag,
  Globe2,
} from "lucide-react";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";
import { PRODUCTS_CATALOG } from "@/data/productsData";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  "virtual-try-on": Sparkles,
  "ai-voice-receptionist": PhoneCall,
  "business-knowledge-assistant": Bot,
  "face-recognition": ScanFace,
  "turnkey-ecommerce": ShoppingBag,
  "geospatial-intelligence": Globe2,
};

interface NavbarProps {
  theme?: "light" | "dark";
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  theme = "light",
  ctaText = "Book a Technical Discovery",
  ctaHref = "/contact",
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/products" && (pathname.startsWith("/products") || pathname.startsWith("/works"))) {
      return true;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        theme === "dark"
          ? scrolled
            ? "bg-[#060913]/95 border-b border-white/10 shadow-lg text-white backdrop-blur-md"
            : "bg-[#060913] border-b border-white/10 text-white"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100"
            : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 h-[66px] flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className={`nav-logo w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-xs ${
              theme === "dark" ? "bg-white text-slate-950" : "bg-slate-950 text-white"
            }`}>
              <span className="font-heading lowercase">u</span>
            </div>
            <span className={`nav-word font-heading text-xl font-extrabold tracking-tight lowercase ${
              theme === "dark" ? "text-white" : "text-slate-950"
            }`}>
              {AGENCY_DISPLAY_NAME}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links with Products Dropdown */}
        <nav className="nav-links hidden md:flex items-center space-x-7 relative">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative py-4 group/products"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${
                      theme === "dark"
                        ? active || productsDropdownOpen
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white group-hover/products:text-white"
                        : active || productsDropdownOpen
                          ? "text-slate-950 font-semibold"
                          : "text-slate-600 hover:text-slate-950 group-hover/products:text-slate-950"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        productsDropdownOpen
                          ? theme === "dark"
                            ? "rotate-180 text-white"
                            : "rotate-180 text-slate-950"
                          : theme === "dark"
                            ? "text-slate-400 group-hover/products:rotate-180 group-hover/products:text-white"
                            : "text-slate-400 group-hover/products:rotate-180 group-hover/products:text-slate-950"
                      }`}
                    />
                  </Link>

                  {/* Desktop Mega-Menu Flyout (Matching Reference Screenshot 1) */}
                  <div
                    className={`absolute top-full -left-64 sm:-left-72 w-[840px] lg:w-[880px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] transition-all duration-200 origin-top z-50 overflow-hidden flex group-hover/products:opacity-100 group-hover/products:scale-100 group-hover/products:translate-y-0 group-hover/products:pointer-events-auto group-hover/products:visible ${
                      productsDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    {/* Left Column: Products Summary & Testimonial (Exact Screenshot 1) */}
                    <div className="w-[280px] p-6 bg-[#FAFBFD] border-r border-slate-100 flex flex-col justify-between shrink-0">
                      <div>
                        <h3 className="font-heading text-lg font-extrabold text-slate-950 tracking-tight">
                          Products
                        </h3>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                          Utsho delivers tailored digital solutions across AI systems, intelligent voice, bespoke e-commerce, and geospatial intelligence, empowering businesses with innovation and engineering expertise.
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-200/80">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-xs font-bold text-slate-900 tracking-tight">
                            Testimonials
                          </span>
                          <Link
                            href="/case-studies"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="text-xs font-semibold text-slate-900 hover:text-slate-600 flex items-center gap-0.5"
                          >
                            <span>View All</span>
                            <span className="text-sm leading-none">&rsaquo;</span>
                          </Link>
                        </div>

                        {/* Clutch Review Badge */}
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                            REVIEWED ON
                          </span>
                          <span className="font-heading font-black text-xs text-slate-900 tracking-tight">
                            Clutch
                          </span>
                          <div className="flex text-[#E11D48] text-xs leading-none ml-1">
                            ★★★★★
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 italic leading-snug">
                          &ldquo;Utsho&apos;s resource augmentation transformed our development velocity. Their AI-powered approach delivered our production platform 4X faster than expected.&rdquo;
                        </p>

                        <div className="mt-3">
                          <div className="text-xs font-bold text-slate-900">
                            Anupom Syam
                          </div>
                          <div className="text-xs text-slate-500">
                            Founder &amp; CEO at Tackle
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Columns: Categorized Product Columns with Square Bullets (Exact Screenshot 1) */}
                    <div className="flex-1 p-6 grid grid-cols-3 gap-6 bg-white">
                      {/* Column 1: AI Solutions */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3.5 tracking-tight">
                          <span className="w-1.5 h-1.5 rounded-[1px] bg-slate-900 shrink-0" />
                          <span>AI Solutions</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link
                              href="/products/virtual-try-on"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Virtual Try-On System
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/ai-voice-receptionist"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              AI Voice Receptionist
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/business-knowledge-assistant"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Knowledge Assistant (RAG)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/face-recognition"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Edge Face Recognition
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: Web & Commerce */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3.5 tracking-tight">
                          <span className="w-1.5 h-1.5 rounded-[1px] bg-slate-900 shrink-0" />
                          <span>Web &amp; Commerce</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link
                              href="/products/turnkey-ecommerce"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Turnkey Online Storefront
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/turnkey-ecommerce"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Payment integration
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/turnkey-ecommerce"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Aura Luxury Storefront
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-studies"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              B2B Dealer Portal
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3: Geospatial & LiDAR */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3.5 tracking-tight">
                          <span className="w-1.5 h-1.5 rounded-[1px] bg-slate-900 shrink-0" />
                          <span>Geospatial &amp; LiDAR</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link
                              href="/products/geospatial-intelligence"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Airborne LiDAR Solar PV
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/geospatial-intelligence"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              Sentinel-1 SAR Flood Inundation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/geospatial-intelligence"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              YOLOv12 Tree Segmentation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/geospatial-intelligence"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block text-slate-700 hover:text-slate-950 font-medium transition-colors py-0.5 leading-snug"
                            >
                              GeoPackage Vector Pipelines
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 ${
                  theme === "dark"
                    ? active
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                    : active
                      ? "text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <span>{link.name}</span>
                {active && theme === "dark" && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Pill CTA */}
        <div className="hidden sm:flex items-center">
          <Link
            href={ctaHref}
            className={`nav-cta inline-flex items-center justify-center gap-1 px-4.5 py-2 rounded-full text-xs font-semibold transition-all ${
              theme === "dark"
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.06)]"
                : "bg-slate-950 text-white hover:bg-slate-800 shadow-xs"
            }`}
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-3 rounded-lg transition-colors ${
            theme === "dark"
              ? "text-white hover:bg-white/10"
              : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-slate-200 bg-white px-6 py-5 shadow-lg space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-2">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-1"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileProductsOpen ? "rotate-180 text-slate-950" : "text-slate-500"
                        }`}
                      />
                    </button>

                    {mobileProductsOpen && (
                      <div className="pl-3 border-l-2 border-slate-200 space-y-2 pt-1">
                        <Link
                          href="/products/virtual-try-on"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-bold text-slate-950 py-1"
                        >
                          All Products Overview &rarr;
                        </Link>
                        {PRODUCTS_CATALOG.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-slate-700 hover:text-slate-950 py-1"
                          >
                            <span className="font-semibold">{prod.shortName}</span>
                            <span className="text-xs text-slate-400 block">{prod.category}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-1 ${
                    isActive(link.href) ? "text-slate-950 font-bold" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-full bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 shadow-sm"
            >
              <span>Schedule a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
