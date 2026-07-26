"use client";

import { useEffect } from "react";

const SELECTOR = ".reveal:not(.in), .clip:not(.in), .media-reveal:not(.in)";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function markAllIn() {
  document.querySelectorAll(".reveal, .clip, .media-reveal").forEach((el) => {
    el.classList.add("in");
  });
}

function isNearViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

/**
 * Active le système CSS `.reveal` / `.clip` (gate `html.is-ready`).
 * Ne mute jamais le DOM pendant l’hydratation React (évite mismatch `.in`).
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;

    if (prefersReducedMotion()) {
      root.classList.add("is-ready");
      markAllIn();
      return () => {
        root.classList.remove("is-ready");
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    /** @param eager Révéler tout de suite les éléments already in view (mount initial only) */
    const scan = (eager: boolean) => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (eager && isNearViewport(el)) {
          el.classList.add("in");
          return;
        }
        io.observe(el);
      });
    };

    // Après hydratation (useEffect) : gate + reveal above-the-fold
    const raf = requestAnimationFrame(() => {
      root.classList.add("is-ready");
      requestAnimationFrame(() => scan(true));
    });

    // Navigation client : observer seulement — ne pas ajouter `.in` sync
    // (sinon React hydrate un HTML déjà muté → hydration mismatch)
    let moTimer: number | undefined;
    const mo = new MutationObserver(() => {
      window.clearTimeout(moTimer);
      moTimer = window.setTimeout(() => scan(false), 50);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        markAllIn();
        io.disconnect();
      }
    };
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(moTimer);
      mq.removeEventListener("change", onMotionChange);
      mo.disconnect();
      io.disconnect();
      root.classList.remove("is-ready");
    };
  }, []);
}
