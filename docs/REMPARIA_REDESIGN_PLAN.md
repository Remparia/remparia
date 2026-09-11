# Plan d’implémentation Cursor — Refonte Remparia Premium

## 1. OBJECTIF GLOBAL

Refondre progressivement le site Remparia pour passer d’un positionnement de société de conseil / intégration IA à une marque premium de **transformation IA d’entreprise**.

Remparia doit être perçu comme une combinaison de :

**SIGNAL → STUDIO → OS → GOVERNANCE**

La promesse centrale :

> Remparia transforme l’IA en capacité opérationnelle gouvernée pour l’entreprise.

La marque ne vend pas simplement des agents IA.

Elle vend un système complet permettant de :

- identifier les bons cas d’usage ;
- mesurer leur valeur ;
- construire les agents ;
- orchestrer agents, données et outils ;
- gouverner les usages ;
- exploiter le système dans la durée ;
- mesurer le ROI.

---

# 2. RÈGLE DE TRAVAIL POUR CURSOR

Avant chaque modification :

1. Lire `AGENTS.md`.
2. Lire les fichiers concernés avant de modifier quoi que ce soit.
3. Identifier les composants déjà réutilisables.
4. Ne pas dupliquer inutilement du code.
5. Respecter l’architecture Next.js existante.
6. Ne jamais casser les routes FR/EN.
7. Vérifier responsive desktop/tablette/mobile.
8. Lancer au minimum :
   - `npm run lint`
   - `npm run build`
9. Corriger les erreurs avant de considérer une étape terminée.
10. Ne jamais modifier toute l’application d’un seul coup.

La refonte doit se faire **section par section, page par page**.

---

# 3. BRANCHING

Créer une branche dédiée :

`design/remparia-premium`

Ne jamais travailler directement sur `main`.

Chaque grande étape doit produire un commit identifiable.

Exemples :

`feat(home): build premium hero`

`feat(home): add AI operating model`

`feat(platform): add Remparia OS page`

`feat(method): rebuild SIGNAL journey`

---

# 4. DIRECTION DE MARQUE

## Palette

Couleurs principales :

- Noir
- Blanc / blanc cassé
- Lime Remparia

Aucun bleu.

Le lime ne doit jamais devenir une couleur dominante.

Il sert principalement à :

- CTA ;
- états actifs ;
- liens ;
- mouvements dans les diagrammes ;
- glow ;
- chiffres clés ;
- micro-interactions ;
- détails graphiques.

Règle approximative :

**90 % noir/blanc / 10 % lime**

---

# 5. STYLE VISUEL

Le site doit avoir une esthétique :

- SaaS enterprise ;
- IA / infrastructure ;
- souveraineté ;
- produit technologique ;
- très premium ;
- minimaliste ;
- international.

Références stylistiques générales :

- Linear
- Vercel
- Stripe
- Palantir
- OpenAI
- Anthropic
- Ramp

Ne jamais copier un concurrent.

S’inspirer du niveau de sophistication et non du branding.

---

# 6. CE QU’IL FAUT ÉVITER

Ne pas utiliser :

- robots humanoïdes ;
- cerveaux IA ;
- poignées de main corporate ;
- personnes devant un laptop en banque d’image ;
- Lego ;
- illustrations génériques ;
- gros aplats lime ;
- gradients multicolores ;
- bleu tech générique ;
- effets futuristes gratuits.

Le côté technologique doit venir de :

- diagrammes ;
- interfaces ;
- données ;
- flux ;
- agents ;
- logs ;
- architecture ;
- micro-animations.

---

# 7. DESIGN SYSTEM

Créer progressivement un système de composants communs.

## Layout

Largeur max :

`1280px – 1440px`

Sections très aérées.

Desktop :

`padding-block: 120–160px`

Mobile :

`padding-block: 72–96px`

---

## Typographie

Très gros titres.

Hero desktop :

`64–88px`

Sections :

`48–64px`

Body :

`17–20px`

Le wording doit rester court.

Une idée forte par écran.

---

# 8. COMPOSANTS À CRÉER

Créer une bibliothèque de composants réutilisables :

`SectionEyebrow`

`SectionTitle`

`SectionDescription`

`PrimaryCTA`

`SecondaryCTA`

`FeatureCard`

`AgentCard`

`ArchitectureNode`

`ArchitectureConnector`

`MetricCard`

`WorkflowDiagram`

`LogoStrip`

`IndustryCard`

`DeploymentTabs`

`ROIWidget`

`AuditLog`

`AgentNetwork`

`SectionDivider`

---

# 9. ANIMATIONS

Les animations doivent expliquer le produit.

Jamais animer uniquement pour décorer.

Priorités :

### Animation 1
Flux agent → Remparia OS.

### Animation 2
Remparia OS → outils.

### Animation 3
Agent → agent.

### Animation 4
Validation humaine.

### Animation 5
Changement d’architecture Cloud / Sovereign / On-Premise.

### Animation 6
Calcul du ROI.

### Animation 7
Audit trail / logs.

Utiliser essentiellement :

- CSS animations ;
- transitions ;
- IntersectionObserver ;
- SVG.

Éviter d’ajouter une grosse librairie tant qu’elle n’est pas nécessaire.

---

# 10. ARCHITECTURE GLOBALE DU SITE

Navigation cible :

## PLATFORM

Remparia OS

Studio

Governance

Integrations

Sovereignty

---

## METHOD

SIGNAL

AI Operating Model

Deployment

---

## SOLUTIONS

Real Estate

Legal

Financial Services

Retail

Industry

Professional Services

---

## RESOURCES

Insights

Customer Stories

AI Library

Security

---

## COMPANY

About

Partners

Careers

Contact

---

CTA principal :

**Book a SIGNAL Session**

---

# 11. HOME PAGE

La Home ne doit pas tout expliquer.

Elle doit faire comprendre Remparia en moins de 30 secondes.

---

# SECTION 01 — HERO

## Message

**AI shouldn't be another tool.**

**It should transform how your company operates.**

Sous-titre :

**From strategy to execution, Remparia turns AI into a governed operating system for your business.**

CTA 1 :

**Build your AI operating model**

CTA 2 :

**See Remparia in action**

Badges :

- Sovereign-ready
- Model agnostic
- Human controlled
- Enterprise governed

---

## VISUEL HERO

À droite :

Remparia OS au centre.

Autour :

Research Agent

Document Agent

Finance Agent

Sales Agent

Operations Agent

Les agents sont connectés au centre par des lignes animées lime.

Pas d’illustration statique si une construction CSS/SVG est possible.

---

# SECTION 02 — LE PROBLÈME

Titre :

**Everyone is experimenting with AI.  
Few companies are operating with it.**

Comparatif :

| Today | With Remparia |
|---|---|
| Chatbots | AI Workers |
| Isolated PoCs | Connected workflows |
| 10 different tools | One operating layer |
| Shadow AI | Governed AI |
| Unclear ROI | Measured outcomes |

Message secondaire :

**The challenge isn't accessing AI anymore.  
It's turning AI into an operating capability.**

---

# SECTION 03 — AI OPERATING MODEL

Titre :

**Our method. Your AI operating model.**

Présenter quatre blocs connectés :

### 01 SIGNAL

**Find the value.**

Discover

Score

Prioritize

ROI

---

### 02 STUDIO

**Build the workforce.**

Agents

Skills

Workflows

Tools

---

### 03 OS

**Run the system.**

Models

Agents

Data

Connectors

---

### 04 GOVERNANCE

**Stay in control.**

Identity

Policies

Audit

Observability

---

Les quatre blocs doivent visuellement constituer un seul système.

---

# SECTION 04 — AI ORGANIZATION

Titre :

**See an AI organization at work.**

Créer un workflow interactif.

Architecture :

Human

↓

Orchestrator

↓

Sales AI / Document AI / Finance AI

↓

Remparia OS

↓

CRM / ERP / Email / Documents / APIs

Ajouter à gauche un log temps réel :

Mission received

Sales agent started

Document agent called

CRM tool used

Human approval

Task completed

Puis :

**14 min saved**

Le but est de montrer une organisation IA au travail.

---

# SECTION 05 — AI WORKFORCE

Titre :

**Don't add another chatbot.  
Build an AI workforce.**

Cartes :

Research Agent

Sales Agent

Document Agent

Operations Agent

Finance Agent

Custom Agent

Chaque carte doit afficher :

- rôle ;
- mission ;
- exemples de capacités.

Important :

Expliquer que les agents ne sont pas des assistants isolés.

Ils coopèrent dans des workflows.

---

# SECTION 06 — SOVEREIGNTY

Titre :

**Your AI.  
Your infrastructure.  
Your rules.**

Créer trois tabs :

### Remparia Cloud

### Sovereign Cloud

### On-Premise

L’architecture affichée doit changer selon le tab.

Structure :

Models

↓

Remparia OS

↓

Enterprise Data

↓

Agents

Models possibles :

Mistral

Llama

OpenAI

Anthropic

Private models

Bénéfices :

Model agnostic

Infrastructure agnostic

Fully secure

Data remains under customer control

Sovereign-ready

---

# SECTION 07 — INDUSTRY PACKS

Titre :

**Built for your industry.  
Not from scratch.**

Secteurs :

Real Estate

Legal

Financial Services

Retail

Industry

Professional Services

Lorsqu’un utilisateur sélectionne un secteur :

afficher son AI Workforce.

---

## Exemple Real Estate

Lead Qualification Agent

Property Matching Agent

Document Agent

Tenant Support Agent

Reporting Agent

Operations Agent

↓

Orchestrator

↓

CRM / Email / ERP / Documents / APIs

Cette section doit communiquer l’industrialisation métier.

Objectif stratégique :

ne pas recréer chaque projet de zéro.

Les packs Remparia doivent devenir une propriété intellectuelle réutilisable.

---

# SECTION 08 — ROI

Titre :

**AI that pays for itself.**

Créer un mini calculateur.

Inputs :

Employees

Hours spent on repetitive work/week

Average hourly cost

Outputs :

Potential automated capacity

Potential FTE equivalent

Annual operational value

Estimated Remparia investment

Potential ROI

Ne jamais inventer une promesse de ROI fixe.

Utiliser des estimations et préciser les hypothèses.

---

# SECTION 09 — AI OPERATIONS

Ne pas parler principalement de **TMA**.

Nom commercial :

# AI Operations

Message :

**Your AI workforce doesn't stop after deployment. Neither do we.**

Afficher :

Monitoring

Model & prompt updates

Incident management

Connector maintenance

Security patches

Usage optimization

Performance monitoring

Continuous improvement

Objectif :

faire comprendre que le coût récurrent correspond à l’exploitation d’un système IA en production.

---

# SECTION 10 — FINAL CTA

Fond plus sombre.

Glow lime subtil.

Titre :

**AI experimentation is over.  
It's time to operate.**

CTA :

**Start with SIGNAL**

Tagline :

**Human intelligence. Artificial scale.**

---

# 12. PAGE SIGNAL

Objectif :

vendre la méthode avant de vendre la technologie.

Titre :

**Find where AI actually matters.**

SIGNAL doit permettre de :

Discover

Map

Score

Prioritize

Quantify ROI

Create AI roadmap

Livrables possibles :

Process map

AI opportunity map

ROI matrix

Risk assessment

Prioritized backlog

Architecture recommendations

AI roadmap

CTA :

**Run a SIGNAL Assessment**

---

# 13. PAGE STUDIO

Titre :

**Build your AI workforce.**

Expliquer :

Agents

Skills

Tools

Knowledge

Workflows

Human approvals

Créer une interface de type builder.

Exemple :

Research Agent

↓

Document Agent

↓

Human validation

↓

CRM update

---

# 14. PAGE REMPARIA OS

Titre :

**The operating system for enterprise AI.**

OS doit être présenté comme le centre du système.

Il orchestre :

Models

Agents

Tools

Enterprise Data

Identity

Policies

Observability

Human approvals

L’OS doit apparaître comme un **control plane**, pas comme un chatbot.

---

# 15. PAGE GOVERNANCE

Titre :

**Stay in control.**

Présenter :

Identity

RBAC

Audit

Agent permissions

Human approvals

Logs

Observability

Policies

Cost monitoring

Security

Compliance

Créer visuellement un audit log.

Exemple :

Agent

Action

Resource

Decision

Timestamp

Status

---

# 16. PAGE SOVEREIGNTY

Titre :

**Sovereignty by architecture.**

Présenter :

Remparia Cloud

Sovereign Cloud

Private Cloud

On-Premise

Air-gapped lorsque pertinent

Expliquer clairement :

où sont les données ;

où tourne le LLM ;

où tourne Remparia OS ;

où tournent les agents ;

où restent les logs ;

qui possède les clés ;

qui contrôle les accès.

---

# 17. PAGES INDUSTRIES

Créer un template commun.

Exemple :

`/solutions/real-estate`

Chaque page contient :

Hero métier

Pain points

AI Workforce

Workflow

Integrations

Expected operational value

Deployment architecture

Governance

CTA SIGNAL

Le template doit être réutilisable pour tous les secteurs.

---

# 18. REAL ESTATE PACK

Premier vertical à industrialiser.

Inclure potentiellement :

Lead Qualification Agent

Property Matching Agent

Document Agent

Tenant Support Agent

Operations Agent

Reporting Agent

Finance / Rent Agent

Orchestrator

Connecteurs possibles :

CRM

Email

ERP

GED

Calendar

Property platforms

APIs

Cette page peut servir de démonstrateur concret de la stratégie Remparia.

---

# 19. CAS CLIENT

Ne pas créer de faux témoignages ou faux chiffres.

Lorsqu’un chiffre n’est pas validé :

utiliser une formulation comme :

**Potential**

**Estimated**

**Illustrative**

**Based on client inputs**

Prévoir ensuite une vraie section :

Before

After

Hours saved

Processes automated

Agents deployed

ROI

---

# 20. POSITIONNEMENT À PRÉSERVER

Cursor doit toujours vérifier qu’un contenu respecte cette idée :

Remparia n’est pas :

- une agence de chatbot ;
- un intégrateur n8n ;
- une société de développement sur mesure ;
- un revendeur de LLM.

Remparia est :

### une plateforme + une méthode + une capacité d’exploitation.

SIGNAL décide.

Studio construit.

OS orchestre.

Governance contrôle.

AI Operations maintient.

---

# 21. SOUVERAINETÉ

Ne jamais écrire que Remparia est automatiquement souverain dans toutes les configurations.

La souveraineté dépend de :

- l’hébergement ;
- le LLM ;
- la localisation des données ;
- les connecteurs ;
- les logs ;
- les sous-traitants.

Le site doit donc utiliser des formulations précises comme :

**Sovereign-ready**

ou

**Deployable in sovereign environments**

lorsque nécessaire.

---

# 22. RESPONSIVE

Chaque section doit être pensée mobile dès sa création.

Sur mobile :

- diagrammes transformés verticalement ;
- pas de texte minuscule ;
- boutons full width si nécessaire ;
- cartes empilées ;
- animations simplifiées ;
- aucune dépendance au hover.

---

# 23. PERFORMANCE

Objectifs :

Lighthouse élevé.

Éviter :

- vidéos lourdes en autoplay ;
- gros fichiers WebGL ;
- images PNG gigantesques ;
- JS inutile ;
- dépendances non nécessaires.

Préférer :

SVG

CSS

Next Image

lazy loading

server components lorsque possible.

---

# 24. ACCESSIBILITÉ

Respecter :

navigation clavier

focus visible

contraste

aria labels

prefers-reduced-motion

alt text

structure H1/H2/H3 cohérente

---

# 25. SEO

Chaque nouvelle page doit avoir :

title

description

canonical

OpenGraph

lang FR/EN

H1 unique

structure sémantique

Ne pas casser le système SEO existant.

---

# 26. INTERNATIONALISATION

Le site reste bilingue :

FR

EN

Ne jamais mettre du texte hardcodé uniquement en anglais dans un composant partagé.

Centraliser les textes ou suivre le système i18n existant.

---

# 27. ORDRE DE DÉVELOPPEMENT

Ne pas tout développer en parallèle.

## Sprint 0

Design tokens

Header

Navigation

Buttons

Cards

Typography

Layout

Responsive foundations

---

## Sprint 1

Home Hero

---

## Sprint 2

Problem

AI Operating Model

---

## Sprint 3

AI Organization Demo

AI Workforce

---

## Sprint 4

Sovereignty

Industry Packs

---

## Sprint 5

ROI calculator

AI Operations

Final CTA

---

## Sprint 6

SIGNAL

---

## Sprint 7

Studio

---

## Sprint 8

OS

---

## Sprint 9

Governance

---

## Sprint 10

Sovereignty page

---

## Sprint 11

Solutions template

Real Estate first

---

## Sprint 12

Other industry pages

---

## Sprint 13

Resources

About

Partners

Careers

Contact

---

# 28. DEFINITION OF DONE

Cursor ne doit jamais considérer une section terminée uniquement parce qu’elle « ressemble à la maquette ».

Une section est terminée uniquement si :

- desktop OK ;
- tablet OK ;
- mobile OK ;
- FR OK ;
- EN OK ;
- dark/light contrast OK selon section ;
- animations fluides ;
- reduced-motion géré ;
- aucune erreur console ;
- aucun lien cassé ;
- lint OK ;
- build OK ;
- pas de contenu factice présenté comme réel ;
- design cohérent avec Remparia.

---

# 29. RÈGLE POUR CHAQUE PROMPT CURSOR

À chaque nouvelle tâche, Cursor doit répondre mentalement à cinq questions :

1. Quelle partie du système Remparia cette section explique-t-elle ?
2. Quel message business doit être compris en moins de cinq secondes ?
3. Quelle interaction permet de montrer plutôt que raconter ?
4. Quels composants existants pouvons-nous réutiliser ?
5. Est-ce cohérent avec SIGNAL → Studio → OS → Governance ?

---

# 30. PROMPT PERMANENT POUR CURSOR

Tu travailles sur la refonte premium de Remparia.

Avant toute modification, lis `AGENTS.md`, les fichiers concernés et les composants existants.

Ne modifie pas des fichiers sans comprendre leur rôle.

Respecte l’architecture Next.js du projet, le système i18n FR/EN, le SEO et les composants existants.

La direction de marque est :

- noir ;
- blanc ;
- lime Remparia ;
- aucun bleu ;
- design enterprise AI premium ;
- minimal ;
- technique ;
- beaucoup d’espace ;
- interfaces et diagrammes plutôt qu’illustrations génériques.

Le positionnement Remparia est :

SIGNAL → identifier et quantifier la valeur.

STUDIO → construire les agents et workflows.

OS → orchestrer modèles, agents, outils et données.

GOVERNANCE → contrôler, auditer et sécuriser.

AI OPERATIONS → exploiter et améliorer le système en production.

Remparia ne doit jamais apparaître comme une simple agence IA ou un fabricant de chatbots.

La narration centrale est :

From AI experimentation to AI operations.

Chaque nouvelle section doit soit :

- démontrer le produit ;
- expliquer la méthode ;
- prouver la valeur ;
- expliquer la gouvernance ;
- montrer la souveraineté ;
- conduire vers SIGNAL.

Ne crée pas de faux chiffres clients, faux logos, faux témoignages ou fausses certifications.

Pour chaque tâche :

1. analyse les fichiers existants ;
2. annonce brièvement les fichiers que tu vas modifier ;
3. implémente uniquement le périmètre demandé ;
4. réutilise les composants existants ;
5. vérifie responsive ;
6. vérifie FR/EN ;
7. lance lint ;
8. lance build ;
9. corrige les erreurs ;
10. résume ce qui a été modifié.

Ne refonds jamais plusieurs pages à la fois sauf instruction explicite.

Nous avançons section par section et page par page.
