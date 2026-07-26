import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "secteurs");
fs.mkdirSync(dir, { recursive: true });

const colors = {
  industries: { a: "#1a2e0a", b: "#0a0a0a", accent: "#c8ff00" },
  professions: { a: "#0f1f2e", b: "#0a0a0a", accent: "#c8ff00" },
  commerce: { a: "#2a1a0a", b: "#0a0a0a", accent: "#c8ff00" },
  operations: { a: "#0a1a1a", b: "#0a0a0a", accent: "#c8ff00" },
  organisation: { a: "#1a0a2a", b: "#0a0a0a", accent: "#c8ff00" },
};

const meta = {
  "finance-assurance": "industries",
  sante: "industries",
  industrie: "industries",
  "services-conseil": "industries",
  "tech-produit": "industries",
  "secteur-public": "industries",
  "cabinet-paramedical": "professions",
  "cabinet-avocat": "professions",
  "cabinet-dentaire": "professions",
  "etude-notariale": "professions",
  "expertise-comptable": "professions",
  "clinique-veterinaire": "professions",
  "courtier-assurance": "professions",
  "agence-immobiliere": "commerce",
  "salon-beaute": "commerce",
  "artisan-btp": "commerce",
  restaurant: "commerce",
  "garage-automobile": "commerce",
  "e-commerce": "commerce",
  "plombier-chauffagiste": "commerce",
  "hotel-tourisme": "commerce",
  "logistique-transport": "operations",
  "retail-distribution": "operations",
  "energie-utilities": "operations",
  "agriculture-agroalimentaire": "operations",
  "pharma-sciences-vie": "operations",
  "rh-recrutement": "organisation",
  "education-formation": "organisation",
  "media-contenu": "organisation",
};

function svg(slug, cat) {
  const c = colors[cat];
  const label = slug.replace(/-/g, " ").slice(0, 28).toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c.a}"/>
      <stop offset="100%" stop-color="${c.b}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <circle cx="980" cy="120" r="180" fill="${c.accent}" fill-opacity="0.08"/>
  <circle cx="160" cy="560" r="220" fill="${c.accent}" fill-opacity="0.05"/>
  <path d="M0 520 L1200 420 L1200 675 L0 675 Z" fill="${c.accent}" fill-opacity="0.06"/>
  <text x="64" y="96" fill="${c.accent}" font-family="ui-monospace, monospace" font-size="18" font-weight="700" letter-spacing="4">REMPARIA // SECTEUR</text>
  <text x="64" y="360" fill="#ffffff" font-family="Arial Black, Arial, sans-serif" font-size="42" font-weight="800">${label}</text>
  <rect x="64" y="392" width="72" height="4" fill="${c.accent}"/>
</svg>`;
}

fs.writeFileSync(path.join(dir, "_placeholder.svg"), svg("secteur", "industries"));
for (const [slug, cat] of Object.entries(meta)) {
  fs.writeFileSync(path.join(dir, `${slug}.svg`), svg(slug, cat));
}
console.log(`Wrote ${Object.keys(meta).length + 1} SVGs to ${dir}`);
