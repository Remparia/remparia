import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactPage from "@/components/pages/ContactPage";
import { contactPageJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Parlons de ce qui est possible. Contactez Remparia pour un diagnostic SIGNAL ou une discussion sur vos agents IA souverains.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <ContactPage />
    </>
  );
}
