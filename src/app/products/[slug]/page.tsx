import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSpotlight from "@/components/HeroSpotlight";
import AiVoiceAgentProductView from "@/components/AiVoiceAgentProductView";
import { PRODUCTS_CATALOG, PRODUCT_COVERS } from "@/data/productsData";
import { imageRatio } from "@/data/imageSizes";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const container = "max-w-[1100px] lg:max-w-[1160px] mx-auto px-6 sm:px-8 lg:px-10";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export async function generateStaticParams() {
  return PRODUCTS_CATALOG.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === slug);
  if (!product) return { title: `Product Not Found | ${AGENCY_DISPLAY_NAME}` };

  return {
    title: `${product.name} | ${AGENCY_DISPLAY_NAME}`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // The voice agent has its own interactive page
  if (product.id === "ai-voice-receptionist") {
    return (
      <main id="main" tabIndex={-1} className="min-h-screen bg-[#F8FAFC] text-slate-900">
        <AiVoiceAgentProductView product={product} />
        <Footer showCta={false} />
      </main>
    );
  }

  const cover = PRODUCT_COVERS[product.slug];
  // Never show the same picture twice, and skip rows whose image belongs to a different project
  const rows = product.storyRows.filter(
    (r) => r.image !== cover.src && !r.image.includes("acisvs")
  );
  const others = PRODUCTS_CATALOG.filter((p) => p.id !== product.id);

  return (
    <main
      id="main"
      tabIndex={-1}
      className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white"
    >
      <ScrollReveal />
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
      </noscript>

      {/* Hero: dark stage, same as the other pages */}
      <div className="relative bg-[#070E1E] text-white overflow-hidden pb-24 sm:pb-28">
        <Navbar theme="dark" />
        <HeroSpotlight />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-[20%] right-[-5%] lg:right-[2%] w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(23,37,84,0.30)_0%,_rgba(15,23,42,0.15)_45%,_transparent_72%)] blur-[90px]" />
        </div>

        <section className={`relative z-10 ${container} pt-6 sm:pt-12`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Link href="/products" className={`inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors ${focusRing}`}>
                <span aria-hidden="true">&larr;</span> All products
              </Link>
              <h1 className="mt-4 font-heading text-[34px] sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-white">
                {product.headlinePrimary}
              </h1>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#6C9BFF] via-[#A5BDF0] to-[#E8EEF8] bg-clip-text text-transparent">
                {product.headlineSecondary}
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">{product.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold shadow-[0_0_26px_-6px_rgba(147,197,253,0.5)] hover:shadow-[0_0_38px_-4px_rgba(147,197,253,0.8)] transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
                >
                  <span>Book a discovery call</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/pricing"
                  className={`inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors ${focusRing}`}
                >
                  <span>See pricing</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="group relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)]"
                style={{ aspectRatio: imageRatio(cover.src) }}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Light sheet slides over the hero */}
      <div className="relative z-30 -mt-10 sm:-mt-12 rounded-t-[28px] sm:rounded-t-[40px] bg-[#F8FAFC] pb-20 shadow-[0_-18px_50px_-10px_rgba(0,0,0,0.55)] space-y-20 sm:space-y-28">
        {/* What it does */}
        <section aria-labelledby="what-heading" className={`${container} pt-12 sm:pt-16`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <h2 data-reveal id="what-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                What it does
              </h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">{product.summary}</p>
            </div>
            <ul className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
              {product.highlights.map((h) => (
                <li key={h} data-reveal className="py-4 text-base text-slate-700 leading-relaxed">{h}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Feature rows: each image shown whole */}
        {rows.length > 0 && (
          <section aria-label="How it works" className={container}>
            <div className="space-y-16 sm:space-y-24">
              {rows.map((row, i) => (
                <article
                  key={row.title}
                  data-reveal
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div
                      className="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.2)]"
                      style={{ aspectRatio: imageRatio(row.image) }}
                    >
                      <Image
                        src={row.image}
                        alt={row.title}
                        fill
                        sizes="(min-width: 1024px) 540px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">{row.title}</h3>
                    <p className="mt-4 text-base text-slate-700 leading-relaxed">{row.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {product.id === "turnkey-ecommerce" && (
          <section aria-labelledby="store-gallery-heading" className={container}>
            <h2 id="store-gallery-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#0B0F20] tracking-tight">
              Inside a store we built
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">Real screens from AURA Dhaka, a live clothing store with its own catalog, checkout and delivery settings.</p>
            <div data-reveal className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 sm:p-6">
              <Image
                src="/images/works/aura/categories-strip.jpg"
                alt="Store category tiles: heritage sarees, salwar kameez, luxury shirts and bridal and wedding"
                width={1896}
                height={428}
                sizes="(min-width: 1024px) 1050px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div data-reveal className="lg:col-span-4 relative aspect-[954/1033] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <Image src="/images/works/aura/product-photo.jpg" alt="Product photo of an embroidered orange and green three-piece outfit" fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover" />
              </div>
              <div data-reveal className="lg:col-span-8 flex flex-col justify-center rounded-3xl border border-slate-200 bg-[#FAFBFD] p-6 sm:p-10">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0B0F20] tracking-tight">Every product gets a full page</h3>
                <p className="mt-2 text-base text-slate-600 leading-relaxed max-w-xl">Shoppers see large photography and choose everything they need without leaving the page.</p>
                <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                  {[
                    "Colour and size pickers",
                    "Garment length and quantity",
                    "Add to bag in one tap",
                    "AI try-on button that opens the virtual studio",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 py-3.5 text-base text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* What you receive */}
        <section aria-labelledby="receive-heading" className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <h2 data-reveal id="receive-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                What you receive
              </h2>
              <p className="mt-2 text-slate-600 text-base leading-relaxed">Every project ends with a full handover.</p>
            </div>
            <ul className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
              {product.deliverables.map((d) => (
                <li key={d} data-reveal className="py-4 text-base text-slate-700 leading-relaxed">{d}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* More products: plain list, no repeated pictures */}
        <section aria-labelledby="more-heading" className={container}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 data-reveal id="more-heading" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              More from our studio
            </h2>
            <Link href="/products" className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:underline underline-offset-4 ${focusRing}`}>
              <span>View all products</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 border-b border-slate-200 lg:[&>li:nth-last-child(-n+3)]:border-b-0">
            {others.map((p) => (
              <li key={p.id} data-reveal className="border-t border-slate-200">
                <Link href={`/products/${p.slug}`} className={`group flex items-baseline justify-between gap-4 py-4 ${focusRing}`}>
                  <span>
                    <span className="block font-heading text-base font-bold text-slate-950 group-hover:underline underline-offset-4">{p.shortName}</span>
                    <span className="block mt-0.5 text-sm text-slate-500">{p.liveBadge}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-slate-950 transition-colors" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing CTA */}
        <section className={container}>
          <div data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070E1E] via-[#0B1528] to-[#121F3A] border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white shadow-2xl">
            <div className="relative max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Want {product.shortName} for your business?
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Book a free 30-minute call with Sharmin and Rafi. We review what you need and send a fixed written scope.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-950 text-sm font-semibold transition-colors shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Book a free call</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-6 h-12 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>See pricing</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" showCta={false} />
    </main>
  );
}
