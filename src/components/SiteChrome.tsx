"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/BackToTop";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import SkipLink from "@/components/SkipLink";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});

function isCareersApplyPath(pathname: string | null) {
  if (!pathname) return false;
  return /\/carrieres\/candidature(\/|$)/.test(pathname);
}

function isInternalLabPath(pathname: string | null) {
  if (!pathname) return false;
  return /\/design-system(\/|$)/.test(pathname);
}

/** Masque nav/footer/cookies sur le parcours candidature isolé et le lab interne. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isolated =
    isCareersApplyPath(pathname) || isInternalLabPath(pathname);

  if (isolated) {
    return (
      <>
        <SkipLink />
        <main id="contenu">{children}</main>
      </>
    );
  }

  return (
    <>
      <SkipLink />
      <SiteNav />
      <main id="contenu">{children}</main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </>
  );
}
