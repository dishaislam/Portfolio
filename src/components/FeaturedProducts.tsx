import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Bot,
  ScanFace,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface AgentProduct {
  slug: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  specs: string[];
}

const PRODUCTS: AgentProduct[] = [
  {
    slug: "virtual-try-on",
    tag: "Vision AI & AR Commerce",
    title: "Virtual Try-On System",
    description:
      "Shoppers see clothes, glasses or accessories on themselves before they buy, right on your product page.",
    badge: "Phone and laptop cameras",
    icon: Sparkles,
    specs: ["In-browser fitting", "Works with phone & desktop webcams", "Shopify & Next.js embed"],
  },
  {
    slug: "ai-voice-receptionist",
    tag: "Voice AI & Telephony",
    title: "AI Voice Receptionist",
    description:
      "Answers incoming calls 24/7, books appointments directly into your calendar, resolves FAQs, and escalates complex queries to staff.",
    badge: "Answers calls 24/7",
    icon: PhoneCall,
    specs: ["Natural streaming voice", "Google & Outlook calendar sync", "Warm staff transfer"],
  },
  {
    slug: "business-knowledge-assistant",
    tag: "Enterprise RAG & Documents",
    title: "Business Knowledge Assistant",
    description:
      "An assistant trained on your contracts, technical manuals, and policies. Strictly answers with verified source citations and page numbers.",
    badge: "Answers cite their sources",
    icon: Bot,
    specs: ["Hybrid vector + BM25 keyword search", "Page-level citation overlay", "Air-gapped VPC option"],
  },
  {
    slug: "face-recognition",
    tag: "Edge Biometrics & Access",
    title: "Face Recognition & Access Control",
    description:
      "Touchless attendance, secure door access, and verified customer check-in engineered with strict consent and GDPR data privacy.",
    badge: "Built around consent",
    icon: ScanFace,
    specs: ["3D anti-spoofing liveness", "Local edge inference without cloud", "Encrypted mathematical vectors"],
  },
];

export default function FeaturedProducts() {
  return (
    <section aria-labelledby="featured-heading" className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1024px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs mb-2.5">
              <Zap className="w-3.5 h-3.5 text-slate-900" />
              <span>Production AI Systems</span>
            </div>
            <h2 id="featured-heading" className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              Our AI agents
            </h2>
            <p className="mt-1.5 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-xl">
              Four turnkey AI agent platforms engineered in-house, deployed to your infrastructure with 100% full source code ownership.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-slate-900 hover:text-slate-600 transition-colors shrink-0"
          >
            <span>Explore all products</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.slug}
                className="group rounded-2xl border border-slate-200/90 bg-[#FAFBFD] hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      <Icon className="w-3.5 h-3.5 text-slate-900 shrink-0" aria-hidden="true" />
                      <span>{p.tag}</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-950 tracking-tight group-hover:text-slate-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-200/70 pt-3.5">
                    {p.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" aria-hidden="true" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>100% IP Handover</span>
                  </div>
                  <Link
                    href={`/products/${p.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 h-9 rounded-full bg-[#0B0F20] text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-2xs shrink-0 group-hover:scale-102"
                  >
                    <span>Explore Product</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
