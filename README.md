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

- Metadata + Open Graph + Twitter Cards par page
- `sitemap.xml` et `robots.txt`
- JSON-LD Organization / WebSite / Service / Breadcrumb
- Manifest PWA léger
- Headers sécurité (nosniff, frame-options, referrer)
- Skip link accessibilité

## Vercel

Le projet est à la racine du repo. Déploie `main` et renseigne `NEXT_PUBLIC_SITE_URL` dans les variables d’environnement du projet.
