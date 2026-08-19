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
      ? "Join Remparia's independent expert network for supervised AI agent deployments in specialized professions."
      : "Rejoindre le réseau d'experts indépendants Remparia pour des déploiements d'agents IA supervisés dans les métiers spécialisés.",
    path: "/carrieres",
    lang,
  });
}

export default function Page() {
  return <CareersPage />;
}
