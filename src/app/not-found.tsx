import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Page introuvable",
  description: "La page demandée n'existe pas ou a été déplacée.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="page page--inner">
      <header className="page-hero">
        <div className="page-hero__eyebrow">// 404</div>
        <h1 className="page-hero__title">Page introuvable</h1>
        <p className="page-hero__sub">
          Cette URL n&apos;existe pas. Revenez à l&apos;accueil ou explorez nos
          services.
        </p>
        <div className="hero__actions" style={{ marginTop: 28 }}>
          <Link href="/" className="btn-primary">
            Accueil →
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact →
          </Link>
        </div>
      </header>
    </div>
  );
}
