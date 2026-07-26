"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/** Monte une fois le layout locale — active reveals / clips sur tout le site. */
export default function ScrollRevealRoot() {
  useScrollReveal();
  return null;
}
