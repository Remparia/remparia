import type { Metadata } from "next";
import CareersApplyStep1 from "@/components/careers/CareersApplyStep1";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  return createPageMetadata({
    title: lang === "en" ? "Application · Step 1" : "Candidature · Étape 1",
    description:
      lang === "en"
        ? "Remparia careers — identity and role."
        : "Carrières Remparia — identité et profil.",
    path: "/carrieres/candidature/1",
    lang,
    noIndex: true,
  });
}

export default function Page() {
  return <CareersApplyStep1 />;
}
