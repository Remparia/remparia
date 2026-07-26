"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(value: string): {
  prefix: string;
  num: number | null;
  suffix: string;
} {
  const match = value.match(/^([^0-9]*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { prefix: "", num: null, suffix: value };
  return {
    prefix: match[1] ?? "",
    num: Number((match[2] ?? "0").replace(",", ".")),
    suffix: match[3] ?? "",
  };
}

export default function StatCount({
  value,
  color,
  className,
}: {
  value: string;
  color?: string;
  className?: string;
}) {
  const parsed = parseStat(value);
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (parsed.num === null) {
      setDisplay(value);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const target = parsed.num!;
      const duration = 900;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased);
        setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [parsed.num, parsed.prefix, parsed.suffix, value]);

  return (
    <div ref={ref} className={className} style={color ? { color } : undefined}>
      {display}
    </div>
  );
}
