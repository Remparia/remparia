import type { Metadata } from "next";
import RealisationsPage from "@/components/pages/RealisationsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Réalisations",
  description:
    "Comment Remparia fait passer les projets IA du POC à la valeur mesurable : agents en production, RAG souverain, automatisation réglementée.",
  path: "/realisations",
});

export default function Page() {
  return <RealisationsPage />;
}
