import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  Zap,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";

const POINTS = [
  "Custom catalogue, dynamic cart, and automated order pipeline in one unified dashboard",
  "Apple Pay, Google Pay, international cards and local payment gateways with no markup from us",
  "Full source code and PostgreSQL database handed over to you with no monthly subscriptions",
];

export default function ShopsBand() {
  return (
    <section aria-labelledby="shops-heading" className="py-10 md:py-14 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs">
              <ShoppingBag className="w-3.5 h-3.5 text-slate-900" />
              <span>Turnkey Web &amp; Commerce</span>
            </div>

            {/* Headline */}
            <h2 id="shops-heading" className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Websites and online shops, end to end
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-xl">
              One team designs, builds, and launches your site or commerce store, including custom checkout and payments. You get a production asset that generates sales from day one.
            </p>

            {/* 3 Checkmark Items */}
            <div className="space-y-2.5 pt-1">
              {POINTS.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5 stroke-[2.2]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/products/turnkey-ecommerce"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B0F20] text-white text-xs sm:text-[13px] font-semibold hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>Explore Storefront Product</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </Link>
              <Link
                href="/services#web"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-slate-700 border border-slate-200 text-xs sm:text-[13px] font-medium hover:border-slate-300 transition-colors shadow-2xs"
              >
                <span>Services Scope</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-End Architectural Panel (No Images) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_12px_35px_-5px_rgba(15,23,42,0.08)] space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-400 ml-2">production-storefront.tsx</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Fast, search-friendly
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    <Zap className="w-3 h-3 text-slate-700" />
                    <span>Speed</span>
                  </div>
                  <div className="text-base font-extrabold text-slate-900">&lt;0.8s FCP</div>
                  <div className="text-[11px] text-slate-500">Global edge caching</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    <CreditCard className="w-3 h-3 text-slate-700" />
                    <span>Fees</span>
                  </div>
                  <div className="text-base font-extrabold text-slate-900">0% Markup</div>
                  <div className="text-[11px] text-slate-500">Direct gateway deposit</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    <Layers className="w-3 h-3 text-slate-700" />
                    <span>Stack</span>
                  </div>
                  <div className="text-base font-extrabold text-slate-900">Next.js 16</div>
                  <div className="text-[11px] text-slate-500">PostgreSQL + Prisma</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    <Lock className="w-3 h-3 text-slate-700" />
                    <span>IP Handover</span>
                  </div>
                  <div className="text-base font-extrabold text-slate-900">100% Owned</div>
                  <div className="text-[11px] text-slate-500">Source code + DB</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-900 font-medium">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                  <span>Turnkey E-Commerce &amp; Web Platform</span>
                </div>
                <Link
                  href="/products/turnkey-ecommerce"
                  className="font-bold text-slate-900 hover:text-slate-600 flex items-center gap-0.5"
                >
                  <span>Explore Product &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
