import type { Metadata } from "next";
import SolutionPage from "@/components/pages/SolutionPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Remparia OS" : "Remparia OS",
    description: isEn
      ? "Remparia OS: the AI operating system for your company — specialized agents, data under control, governance and sovereign infrastructure."
      : "Remparia OS : le système d’exploitation IA de votre entreprise — agents spécialisés, données sous contrôle, gouvernance et infrastructure souveraine.",
    path: "/solution",
    lang,
  });
}

export default function Page() {
  return <SolutionPage />;
}
