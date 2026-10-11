"use client";

import { useEffect, useRef, useState } from "react";

const SOURCES = {
  wide: "/hero/bulb-scrub-1280.mp4",
  portrait: "/hero/bulb-scrub-portrait.mp4",
} as const;

/** Part of the pinned scroll spent on the video; the rest is the exit into the next section. */
const VIDEO_SPAN = 0.86;
const FRAME = 1 / 24;

/**
 * Scroll-scrubbed hero video.
 * - The track (`.ph-hero--scrub`) is taller than the viewport; its inner stage is sticky.
 * - Progress 0…1 across the track is written to `--hero-p` and mapped to `video.currentTime`,
 *   so scrolling back up plays the sequence in reverse.
 * - The file is fetched whole as a blob: seeking never waits on the network.
 * - Reduced motion: no fetch, no pin — the CSS shows the lit end frame.
 */
export function useHeroScrub() {
  const trackRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chips = track.querySelectorAll<HTMLElement>(".ph-hero__chip");
    const narrow = window.matchMedia("(max-width: 959px)");
    let objectUrl = "";
    let loadToken = 0;
    let target = 0;
    let current = -1;
    let raf = 0;
    let visible = true;

    const load = async () => {
      const token = ++loadToken;
      const src = narrow.matches ? SOURCES.portrait : SOURCES.wide;
      setReady(false);
      let url: string = src;
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(String(res.status));
        const blob = await res.blob();
        if (token !== loadToken) return;
        url = URL.createObjectURL(blob);
      } catch {
        // Fall back to progressive loading; seeking may stall briefly.
      }
      if (token !== loadToken) return;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = url.startsWith("blob:") ? url : "";
      video.src = url;
      video.load();
    };

    const onLoaded = () => {
      // iOS paints seeks reliably only once the element has been played.
      video.play().then(() => video.pause()).catch(() => {});
      current = -1;
      setReady(true);
      schedule();
    };

    const measure = () => {
      const rect = track.getBoundingClientRect();
      const span = track.offsetHeight - window.innerHeight;
      // Not pinned (short landscape screens): show the finished scene.
      target = span > 1 ? Math.min(1, Math.max(0, -rect.top / span)) : 1;
    };

    const tick = () => {
      raf = 0;
      current = current < 0 ? target : current + (target - current) * 0.2;
      if (Math.abs(target - current) < 0.0005) current = target;
      track.style.setProperty("--hero-p", current.toFixed(4));
      chips.forEach((chip) => {
        const at = parseFloat(chip.style.getPropertyValue("--chip-at")) || 0;
        chip.classList.toggle("is-live", current >= at + 0.06);
      });

      if (video.readyState >= 2 && !video.seeking && video.duration) {
        const t = Math.min(1, current / VIDEO_SPAN) * (video.duration - FRAME);
        if (Math.abs(video.currentTime - t) > FRAME * 0.5) video.currentTime = t;
      }
      if (current !== target) schedule();
    };

    const schedule = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      measure();
      schedule();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("seeked", schedule);
    narrow.addEventListener("change", load);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    io.observe(track);
    onScroll();
    load();

    return () => {
      loadToken++;
      cancelAnimationFrame(raf);
      io.disconnect();
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("seeked", schedule);
      narrow.removeEventListener("change", load);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeAttribute("src");
      video.load();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      track.style.removeProperty("--hero-p");
    };
  }, []);

  return { trackRef, videoRef, ready };
}
