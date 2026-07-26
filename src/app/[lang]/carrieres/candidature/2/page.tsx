import type { Metadata } from "next";
import CareersApplyStep2 from "@/components/careers/CareersApplyStep2";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  return createPageMetadata({
    title: lang === "en" ? "Application · Step 2" : "Candidature · Étape 2",
    description:
      lang === "en"
        ? "Remparia careers — written questions."
        : "Carrières Remparia — questions écrites.",
    path: "/carrieres/candidature/2",
    lang,
    noIndex: true,
  });
}

export default function Page() {
  return <CareersApplyStep2 />;
}
