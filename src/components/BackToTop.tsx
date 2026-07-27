"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

const SHOW_AFTER = 480;

export default function BackToTop() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const label = lang === "fr" ? "Haut de page" : "Back to top";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label={label}
      title={label}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      ↑
    </button>
  );
}
