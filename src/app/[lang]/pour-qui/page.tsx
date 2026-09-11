import type { Metadata } from "next";
import PourQuiPage from "@/components/pages/PourQuiPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Who it is for" : "Pour qui",
    description: isEn
      ? "Where Remparia is legitimate — commerce networks, accountability professions and sensitive data."
      : "Là où Remparia est légitime — réseaux commerce, métiers à responsabilité et données sensibles.",
    path: "/pour-qui",
    lang,
  });
}

export default function Page() {
  return <PourQuiPage />;
}
