import type { Metadata } from "next";
import CareersApplyStep3 from "@/components/careers/CareersApplyStep3";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  return createPageMetadata({
    title: lang === "en" ? "Application · Step 3" : "Candidature · Étape 3",
    description:
      lang === "en"
        ? "Remparia careers — intro video recording."
        : "Carrières Remparia — enregistrement vidéo.",
    path: "/carrieres/candidature/3",
    lang,
    noIndex: true,
  });
}

export default function Page() {
  return <CareersApplyStep3 />;
}
