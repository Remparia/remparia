import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Parlons de ce qui est possible. Contactez Remparia pour un diagnostic SIGNAL ou une démo d'agents IA souverains.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
