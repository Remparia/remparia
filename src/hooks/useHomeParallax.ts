"use client";

import { useEffect } from "react";

/**
 * Pose `--ph-p` (unitless, ~-1…1) sur chaque `.ph-parallax`.
 * Respecte `prefers-reduced-motion`.
 */
export function useHomeParallax(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight || 1;
      const mid = vh * 0.5;

      document.querySelectorAll<HTMLElement>(".ph-parallax").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -vh * 0.5 || rect.top > vh * 1.5) {
          el.style.setProperty("--ph-p", "0");
          return;
        }
        const center = rect.top + rect.height * 0.5;
        const p = Math.max(-1.2, Math.min(1.2, (center - mid) / mid));
        el.style.setProperty("--ph-p", p.toFixed(4));
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.querySelectorAll<HTMLElement>(".ph-parallax").forEach((el) => {
        el.style.removeProperty("--ph-p");
      });
    };
  }, [enabled]);
}
