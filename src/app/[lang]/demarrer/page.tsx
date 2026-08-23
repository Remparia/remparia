import type { Metadata } from "next";
import DemarrerPage from "@/components/pages/DemarrerPage";
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
      ? "Three ways to start with Remparia: the scoping hour, the diagnostic, or the first agent — framed fees, no open-ended billing."
      : "Trois façons de démarrer avec Remparia : l’heure de cadrage, le diagnostic ou le premier agent — forfaits cadrés, pas de régie ouverte.",
    path: "/demarrer",
    lang,
  });
}

export default function Page() {
  return <DemarrerPage />;
}
