import React from "react";
import { MessageCircle, ShieldCheck, FolderCheck } from "lucide-react";

const POINTS = [
  {
    icon: MessageCircle,
    title: "You work with the founders",
    text: "Sharmin and Rafi plan, build and review your project themselves. No hand-offs, no account managers.",
  },
  {
    icon: ShieldCheck,
    title: "Results you can check",
    text: "Our methods come from research at the German Aerospace Center, and every model ships with its accuracy figures.",
  },
  {
    icon: FolderCheck,
    title: "Everything is yours",
    text: "You get the full code, documentation and data when we finish, with no lock-in and no ongoing fees.",
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="py-10 md:py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-6 sm:mb-8">
          <h2 id="why-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            You talk to the people who write the code
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Satellite and AI projects go wrong in the gaps between teams. With two founders there are no gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[var(--brand)] shadow-2xs">
                <Icon className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="mt-3.5 font-heading text-base sm:text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
