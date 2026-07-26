import type { Metadata } from "next";
import AProposPage from "@/components/pages/AProposPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "À propos",
  description:
    "Remparia est un collectif IA souveraine. L'humain décide, l'agent exécute — jusqu'à la production quotidienne.",
  path: "/a-propos",
});

export default function Page() {
  return <AProposPage />;
}
