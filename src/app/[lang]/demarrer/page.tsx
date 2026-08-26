import type { Metadata } from "next";
import PremiumKeyedPage from "@/components/premium/PremiumKeyedPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Get started" : "Démarrer",
    description: isEn
      ? "Three ways to start with Remparia: SIGNAL session, diagnostic, or first agent — framed fees."
      : "Trois façons de démarrer avec Remparia : session SIGNAL, diagnostic ou premier agent — forfaits cadrés.",
    path: "/demarrer",
    lang,
  });
}

export default function Page() {
  return <PremiumKeyedPage pageKey="demarrer" />;
}
