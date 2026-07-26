# Remparia

Site Next.js (App Router) — IA souveraine.

## Local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Environnement

Copie `.env.example` vers `.env.local` et définis l’URL publique :

```bash
NEXT_PUBLIC_SITE_URL=https://remparia.vercel.app
```

Utilisé pour canonical, sitemap, Open Graph et JSON-LD.

## SEO inclus

- Metadata + Open Graph + Twitter Cards sur chaque page
- Canonical URLs + `metadataBase`
- `sitemap.xml` et `robots.txt`
- JSON-LD : Organization, WebSite, ProfessionalService, Service, ItemList, HowTo (SIGNAL), ContactPage, Breadcrumb
- Manifest PWA léger (`/manifest.webmanifest`)
- Headers sécurité (nosniff, frame-options, referrer, HSTS, cache assets)
- Skip link accessibilité + `lang="fr"` + `main#contenu`
- Images AVIF/WebP via Next.js

### Après déploiement

1. Vérifie https://remparia.vercel.app/sitemap.xml
2. Vérifie https://remparia.vercel.app/robots.txt
3. Soumets le sitemap dans [Google Search Console](https://search.google.com/search-console)
4. Teste les rich results : https://search.google.com/test/rich-results
5. Définis `NEXT_PUBLIC_SITE_URL` dans Vercel (ex. `https://remparia.vercel.app` ou ton domaine custom)

## Vercel

Le projet est à la racine du repo. Déploie `main` et renseigne `NEXT_PUBLIC_SITE_URL` dans les variables d’environnement du projet.
