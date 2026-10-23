"use client";

import { useEffect } from "react";

// Fades elements marked data-reveal up as they enter the viewport, staggering siblings.
// Elements marked data-line only get the is-in class (used to draw a timeline line).
export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-line]")
    );
    if (!targets.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    const seen = new Map<Element, number>();
    targets.forEach((t) => {
      if (!t.hasAttribute("data-reveal")) return;
      const parent = t.parentElement;
      if (!parent) return;
      const idx = seen.get(parent) ?? 0;
      seen.set(parent, idx + 1);
      t.style.setProperty("--rv-d", `${Math.min(idx, 5) * 90}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return null;
}
