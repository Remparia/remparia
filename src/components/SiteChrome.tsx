"use client";

import { usePathname } from "next/navigation";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import SkipLink from "@/components/SkipLink";

function isCareersApplyPath(pathname: string | null) {
  if (!pathname) return false;
  return /\/carrieres\/candidature(\/|$)/.test(pathname);
}

/** Masque nav/footer/cookies sur le parcours candidature isolé. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isolated = isCareersApplyPath(pathname);

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
