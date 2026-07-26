import type { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Careers" : "Carrières",
    description: isEn
      ? "Join Remparia. Spontaneous applications via a 30-minute journey with written questions and a 10-minute intro video."
      : "Rejoindre Remparia. Candidature spontanée via un parcours de 30 minutes : questions écrites et vidéo de présentation de 10 minutes.",
    path: "/carrieres",
    lang,
  });
}

export default function Page() {
  return <CareersPage />;
}
