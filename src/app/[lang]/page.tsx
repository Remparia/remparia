import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Repetitive work to the agent. Decisions to the expert."
      : "Le répétitif à l’agent. La décision à l’expert.",
    description: isEn
      ? "A method to map the work, an operating system to carry it — without giving up decisions or control of your data."
      : "Une méthode pour cartographier le travail, un système d’exploitation pour le faire porter — sans céder la décision ni le contrôle de vos données.",
    path: "/",
    lang,
  });
}

export default function Home() {
  return <HomePage />;
}
