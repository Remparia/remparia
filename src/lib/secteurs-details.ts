export type SecteurDetail = {
  slug: string;
  heroH: string;
  heroP: string;
  signals: { value: string; label: string }[];
  pains: { title: string; desc: string }[];
  deliverables: string[];
  scenarios: { who: string; need: string; remparia: string }[];
  serviceSlugs: string[];
  faqs: { q: string; a: string }[];
};

const FR: Record<string, SecteurDetail> = {
  "finance-assurance": {
    slug: "finance-assurance",
    heroH: "Solutions souveraines pour la finance & l'assurance",
    heroP:
      "Des agents supervisés pour absorber le documentaire et les contrôles, pendant que vos équipes gardent le jugement, la responsabilité et la relation client.",
    signals: [
      { value: "SIGNAL", label: "Protocole de bout en bout" },
      { value: "FR", label: "Données en France" },
      { value: "HITL", label: "Humain dans la boucle" },
      { value: "Audit", label: "Traçabilité native" },
    ],
    pains: [
      {
        title: "Des pilotes qui n'atteignent jamais la prod",
        desc: "Les démos impressionnent le COMEX, puis se heurtent au SI, à la DSI et à la conformité. Sans intégration métier, la valeur reste théorique.",
      },
      {
        title: "La conformité freine plus qu'elle n'oriente",
        desc: "RGPD, secret bancaire, exigences ACPR : sans gouvernance des agents dès le cadrage, chaque cas d'usage devient un projet de risque.",
      },
      {
        title: "Back-office saturé, expertise sous-exploitée",
        desc: "Analyse documentaire, KYC, sinistres, contrôles : vos équipes perdent du temps sur le répétitif au lieu du jugement métier.",
      },
    ],
    deliverables: [
      "Cadrage SIGNAL des cas d'usage à ROI réel (back-office, conformité, documentaire)",
      "Agents métier intégrés à vos outils existants, avec validation humaine",
      "RAG souverain sur politiques, procédures et corpus réglementaires",
      "Gouvernance, observabilité et pistes d'audit pour la conformité",
      "Passage en production : monitoring, itération, mesure des gains",
      "Transfert de compétences vers vos équipes data / métier / risque",
    ],
    scenarios: [
      {
        who: "Direction opérations assurance",
        need: "Réduire le délai de traitement des dossiers sinistres sans perdre le contrôle métier.",
        remparia:
          "Nous industrialisons un agent de pré-analyse documentaire branché sur votre GED, avec validation humaine sur les cas ambigus et traçabilité complète.",
      },
      {
        who: "Conformité / risque",
        need: "Accélérer les contrôles documentaires tout en restant auditables.",
        remparia:
          "Nous concevons un pipeline agent gouverné : règles métier explicites, logs d'audit, hébergement souverain et critères de sortie humaine.",
      },
      {
        who: "Innovation / DSI",
        need: "Sortir d'un POC ChatGPT isolé et le brancher au SI réel.",
        remparia:
          "Nous reprenons le cas d'usage via SIGNAL : intégration outils, data readiness, garantie conformité, puis industrialisation.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "agents-metier",
      "infra-souveraine",
      "equipes-embarquees",
    ],
    faqs: [
      {
        q: "Travaillez-vous avec nos contraintes ACPR / secret bancaire ?",
        a: "Oui. La conformité n'est pas un add-on : elle structure le cadrage SIGNAL (données autorisées, traçabilité, human-in-the-loop, hébergement). Nous concevons avec vos équipes risque et juridique, pas contre elles.",
      },
      {
        q: "Nos données quittent-elles la France ?",
        a: "Non par défaut. Nous privilégions une infra souveraine et des architectures où vos données restent sous votre contrôle. Le choix de modèles est agnostique et adapté à la sensibilité des traitements.",
      },
      {
        q: "Combien de temps avant un premier livrable utile ?",
        a: "Un diagnostic SIGNAL identifie rapidement où la valeur est réelle. Un prototype guidé valide ensuite un cas à faible risque avant industrialisation — sans promettre de magie en dix minutes.",
      },
      {
        q: "Remplacez-vous nos équipes métier ?",
        a: "Non. Notre conviction : l'humain décide, l'agent exécute. Nous augmentons vos équipes sur le répétitif ; le jugement, la responsabilité et la relation client restent les vôtres.",
      },
    ],
  },
  sante: {
    slug: "sante",
    heroH: "Agents pour la santé & les professions réglementées",
    heroP:
      "Alléger la charge administrative sans déléguer la décision clinique : secret professionnel, validation humaine et outils existants structurent chaque usage.",
    signals: [
      { value: "Secret", label: "Professionnel respecté" },
      { value: "FR", label: "Hébergement souverain" },
      { value: "HITL", label: "Validation humaine" },
      { value: "RGPD", label: "Données de santé" },
    ],
    pains: [
      {
        title: "Charge administrative qui écrase le soin",
        desc: "Comptes-rendus, planification, parcours documentaires : le temps clinique se dilue dans le process.",
      },
      {
        title: "Outils génériques du marché incompatibles",
        desc: "Les assistants génériques ne tiennent ni le secret professionnel ni les exigences d'hébergement des données de santé.",
      },
      {
        title: "Pilotes isolés sans adoption terrain",
        desc: "Sans intégration aux logiciels métier et sans gouvernance, l'automatisation reste une expérimentation hors du quotidien.",
      },
    ],
    deliverables: [
      "Cadrage des cas d'usage à impact (admin, parcours, documentaire) sous contrainte légale",
      "Agents et automatisations avec validation humaine systématique sur le sensible",
      "Architectures souveraines adaptées aux données de santé",
      "Intégration aux outils existants plutôt que remplacement brutal",
      "Gouvernance, traçabilité et documentation pour vos DPO / direction",
      "Accompagnement au changement pour les équipes soignantes et admin",
    ],
    scenarios: [
      {
        who: "Direction d'établissement",
        need: "Alléger le back-office sans exposer les dossiers patients à des outils non maîtrisés.",
        remparia:
          "Nous construisons des agents sur vos flux autorisés, avec hébergement adapté, logs d'accès et validation humaine sur tout ce qui touche au soin.",
      },
      {
        who: "Profession réglementée (cabinet / réseau)",
        need: "Accélérer la production documentaire sans diluer la responsabilité professionnelle.",
        remparia:
          "Nous industrialisons des assistants de rédaction / synthèse où le professionnel valide avant envoi — jamais d'autonomie opaque sur le sensible.",
      },
      {
        who: "DSI / DPO santé",
        need: "Encadrer l'usage des agents au-delà des shadow IT.",
        remparia:
          "Nous posons une feuille de route SIGNAL : cas autorisés, modèles, données, audit — et un premier cas en production contrôlée.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "agents-metier",
      "infra-souveraine",
    ],
    faqs: [
      {
        q: "Comment gérez-vous le secret professionnel ?",
        a: "En limitant les données exposées, en isolant les traitements, en traçant les accès et en gardant une validation humaine sur tout output sensible. L'architecture suit le cadre légal, pas l'inverse.",
      },
      {
        q: "Hébergez-vous des données de santé ?",
        a: "Nous concevons des architectures souveraines adaptées à votre contexte (y compris exigences HDS quand pertinent) et travaillons avec vos contraintes d'infra existantes.",
      },
      {
        q: "L'agent décide-t-elle à la place du professionnel ?",
        a: "Non. Remparia augmente : l'agent prépare, synthétise, oriente ; le professionnel décide et reste responsable.",
      },
      {
        q: "Par quoi commencer ?",
        a: "Un diagnostic SIGNAL pour séparer les cas à fort impact / faible risque des usages interdits ou trop précoces — puis un prototype guidé.",
      },
    ],
  },
  industrie: {
    slug: "industrie",
    heroH: "Agents pour l'industrie & les opérations",
    heroP:
      "Donner aux techniciens un accès plus rapide au savoir opérationnel et absorber les exceptions répétitives — sans contourner vos systèmes ni leur expertise.",
    signals: [
      { value: "OT/IT", label: "Intégration systèmes" },
      { value: "Prod", label: "Jusqu'à la production" },
      { value: "Mesure", label: "Gains suivis" },
      { value: "FR", label: "Souveraineté data" },
    ],
    pains: [
      {
        title: "Savoir expert dispersé et fragile",
        desc: "Procédures, retours d'expérience, historiques machines : la connaissance critique vit dans des têtes et des fichiers.",
      },
      {
        title: "POC technologiques déconnectés du shopfloor",
        desc: "Sans branchement MES/ERP/GMAO et sans adoption opérateurs, l'automatisation reste un slide.",
      },
      {
        title: "Qualité et maintenance sous pression",
        desc: "Les équipes traitent trop d'exceptions manuellement ; le signal utile se noie dans le bruit.",
      },
    ],
    deliverables: [
      "Identification des cas d'usage opérationnels à ROI (maintenance, qualité, supply)",
      "Agents et assistants branchés sur vos outils (ERP, GMAO, documentation technique)",
      "RAG sur procédures et historiques pour accélérer le diagnostic",
      "Industrialisation avec monitoring et critères de succès terrain",
      "Gouvernance data et souveraineté selon la criticité des flux",
      "Équipes embarquées pour accélérer sans courbe d'apprentissage externe",
    ],
    scenarios: [
      {
        who: "Responsable maintenance",
        need: "Réduire le temps de diagnostic sur pannes récurrentes.",
        remparia:
          "Nous connectons un agent à vos historiques et procédures, pour proposer des hypothèses et checklists — validées par vos techniciens.",
      },
      {
        who: "Qualité / industrialisation",
        need: "Accélérer le traitement des non-conformités documentées.",
        remparia:
          "Nous automatisons la pré-qualification et la synthèse des dossiers, avec revue humaine et traçabilité pour vos audits.",
      },
      {
        who: "Direction digitale usine",
        need: "Transformer un POC vision / LLM en usage quotidien.",
        remparia:
          "Nous reprenons le déploiement via SIGNAL : intégration SI, garanties, normalisation, mesure des gains sur ligne.",
      },
    ],
    serviceSlugs: [
      "agents-metier",
      "infra-souveraine",
      "equipes-embarquees",
      "strategie-ia",
    ],
    faqs: [
      {
        q: "Travaillez-vous avec nos contraintes OT / cybersécurité ?",
        a: "Oui. Nous concevons des architectures qui respectent la segmentation des réseaux et les politiques sécurité — les agents ne contournent pas votre SI.",
      },
      {
        q: "Faut-il tout migrer vers le cloud ?",
        a: "Non. Nous sommes agnostiques : on-prem, cloud souverain ou hybride selon criticité, latence et politique data.",
      },
      {
        q: "Comment mesurez-vous le succès ?",
        a: "Dès le cadrage : indicateurs métier (temps de diagnostic, taux de reprise, délais qualité) — pas des métriques de démo.",
      },
      {
        q: "Vos équipes viennent-elles sur site ?",
        a: "Selon le besoin : missions embarquées, pods agents dédiés, transfert de compétences vers vos équipes usine et IT.",
      },
    ],
  },
  "services-conseil": {
    slug: "services-conseil",
    heroH: "Agents pour les services & le conseil",
    heroP:
      "Retrouver de la capacité sur la recherche, la synthèse et les livrables — sans standardiser le jugement ni exposer la confidentialité client.",
    signals: [
      { value: "Expert", label: "Humain au centre" },
      { value: "Conf.", label: "Confidentialité client" },
      { value: "Livrables", label: "Qualité accélérée" },
      { value: "SIGNAL", label: "Méthode répétable" },
    ],
    pains: [
      {
        title: "Production intellectuelle trop lente à scaler",
        desc: "Recherche, synthèse, drafts, revues : les équipes senior passent trop de temps sur le répétitif.",
      },
      {
        title: "Savoir projet qui s'évapore",
        desc: "Chaque mission réinvente la roue ; le knowledge management reste un dossier SharePoint mort.",
      },
      {
        title: "Outils grand public = risque client",
        desc: "Coller des données clients dans un chatbot public est un risque contractual et réputationnel.",
      },
    ],
    deliverables: [
      "Assistants de production (recherche, synthèse, drafts) sous gouvernance",
      "RAG souverain sur vos méthodes, livrables types et retours d'expérience",
      "Intégration aux outils de travail (docs, ticketing, CRM) existants",
      "Règles de confidentialité et cloisonnement par client / mission",
      "Mesure du temps gagné et de la qualité (revues, reprises)",
      "Montée en compétences des équipes sur les usages responsables",
    ],
    scenarios: [
      {
        who: "Associé / partner",
        need: "Accélérer les propositions et livrables sans baisser le niveau.",
        remparia:
          "Nous industrialisons des agents de pré-rédaction branchés sur votre corpus maison, avec revue humaine obligatoire avant envoi client.",
      },
      {
        who: "Knowledge / ops cabinet",
        need: "Rendre le savoir des missions réellement réutilisable.",
        remparia:
          "Nous mettons en place un RAG souverain sur vos livrables et méthodes, avec droits d'accès et traçabilité.",
      },
      {
        who: "Direction innovation",
        need: "Encadrer l'usage des agents des consultants au-delà du shadow ChatGPT.",
        remparia:
          "Feuille de route SIGNAL + premier cas en production contrôlée + charte d'usage alignée sur vos engagements clients.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "agents-metier",
      "infra-souveraine",
    ],
    faqs: [
      {
        q: "Les données clients sont-elles isolées ?",
        a: "Oui. Nous concevons cloisonnement, droits et politiques d'usage pour que les agents respectent vos engagements contractuels — pas un pot commun opaque.",
      },
      {
        q: "L'automatisation va-t-elle standardiser nos livrables au point de les uniformiser ?",
        a: "Elle accélère le socle ; vos experts apportent le jugement et la différenciation. C'est précisément le modèle « humain décide, agent exécute ».",
      },
      {
        q: "Combien de temps pour un premier usage utile ?",
        a: "Un diagnostic cible 1–2 cas à fort levier (souvent rédaction / knowledge). Un prototype guidé suit avant industrialisation.",
      },
      {
        q: "Formez-vous nos équipes ?",
        a: "Oui : transfert de compétences et usages responsables font partie de l'industrialisation, pas un atelier one-shot.",
      },
    ],
  },
  "tech-produit": {
    slug: "tech-produit",
    heroH: "Agents pour la tech & le produit",
    heroP:
      "Fiabiliser les fonctions agentiques et les processus internes avec des garde-fous, des preuves et un transfert progressif vers vos équipes produit et engineering.",
    signals: [
      { value: "LLM", label: "Agnostique modèles" },
      { value: "Prod", label: "Fiabilité produit" },
      { value: "Obs.", label: "Observabilité" },
      { value: "Squad", label: "Équipes embarquées" },
    ],
    pains: [
      {
        title: "Fonctionnalités agent fragiles en production",
        desc: "Latence, hallucinations, coûts tokens, dérive : le POC produit ne survit pas au trafic réel.",
      },
      {
        title: "Dette d'intégration et de gouvernance",
        desc: "Prompts en dur, pas d'eval, pas de fallback, data pipelines improvisés.",
      },
      {
        title: "Écart produit / plateforme / métier",
        desc: "Sans cadrage commun, chaque squad réinvente une stack agent incompatible.",
      },
    ],
    deliverables: [
      "Stratégie produit : cas d'usage, architecture, choix de modèles",
      "Industrialisation d'agents et features (eval, monitoring, coûts)",
      "RAG et data readiness sur vos données propriétaires",
      "Infra et patterns souverains ou hybrides selon votre politique",
      "Pods / équipes embarquées pour accélérer la roadmap",
      "Transfert vers vos squads engineering & product",
    ],
    scenarios: [
      {
        who: "Head of Product",
        need: "Passer d'une démo impressionnante à une feature stable.",
        remparia:
          "Nous posons evals, garde-fous, observabilité et critères de sortie — puis industrialisons avec vos squads.",
      },
      {
        who: "CTO / plateforme",
        need: "Éviter la jungle de stacks agentiques par équipe.",
        remparia:
          "Nous définissons une architecture de référence, des patterns d'agents et une gouvernance data/modèles réutilisable.",
      },
      {
        who: "Équipe data / ML",
        need: "Accélérer sans recruter toute une armée agentique.",
        remparia:
          "Équipes embarquées Remparia pour livrer, documenter et transférer — pas une boîte noire externe.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "agents-metier",
      "infra-souveraine",
      "equipes-embarquees",
    ],
    faqs: [
      {
        q: "Êtes-vous lock-in sur un fournisseur de modèles ?",
        a: "Non. Agnostiques LLM : le meilleur modèle par tâche, avec possibilité de bascule selon coût, perf et souveraineté.",
      },
      {
        q: "Intervenez-vous dans notre codebase ?",
        a: "Oui, en mode embarqué ou en co-delivery, avec standards engineering, tests et ownership progressif de vos équipes.",
      },
      {
        q: "Comment gérez-vous coûts et latence ?",
        a: "Dès le design : routing de modèles, cache, truncation, evals de régression et budgets — pas après la facture cloud.",
      },
      {
        q: "Pouvez-vous auditer un stack agent existant ?",
        a: "Oui. Diagnostic SIGNAL : risques, dette, quick wins, puis feuille de route d'industrialisation.",
      },
    ],
  },
  "secteur-public": {
    slug: "secteur-public",
    heroH: "Agents pour le secteur public",
    heroP:
      "Réduire les délais administratifs tout en préservant la décision publique, la traçabilité et la maîtrise des données d'intérêt général.",
    signals: [
      { value: "Souverain", label: "Données & hébergement" },
      { value: "Audit", label: "Traçabilité" },
      { value: "Intérêt", label: "Missions générales" },
      { value: "SIGNAL", label: "Cadre répétable" },
    ],
    pains: [
      {
        title: "Pression sur les délais de traitement",
        desc: "Volumes documentaires et demandes usagers saturent les équipes ; les outils génériques ne passent pas la barre conformité.",
      },
      {
        title: "Exigences de souveraineté non négociables",
        desc: "Cloud public opaque, modèles hors cadre, absence de piste d'audit : les expérimentations s'arrêtent au juridique.",
      },
      {
        title: "Projets agents sans industrialisation",
        desc: "Appels à projets et POC s'enchaînent ; peu atteignent un usage quotidien mesurable.",
      },
    ],
    deliverables: [
      "Cadrage SIGNAL des cas d'usage prioritaires (documentaire, orientation, back-office)",
      "Agents et automatisations avec gouvernance et validation humaine",
      "Architectures souveraines et traçables",
      "Intégration aux SI existants et aux process métiers",
      "Documentation pour DSI, DPO, direction et contrôle",
      "Accompagnement au changement des agents publics",
    ],
    scenarios: [
      {
        who: "Direction du numérique",
        need: "Industrialiser un cas d'usage documentaire sans risque souveraineté.",
        remparia:
          "Nous déployons un pipeline RAG / agent sur infra adaptée, avec logs, droits et human-in-the-loop.",
      },
      {
        who: "Métier / back-office",
        need: "Réduire les délais de traitement tout en gardant la décision humaine.",
        remparia:
          "L'agent prépare et oriente ; l'agent public valide. Mesure des délais et de la qualité de décision.",
      },
      {
        who: "DPO / juridique",
        need: "Encadrer l'expérimentation technologique dans l'administration.",
        remparia:
          "Cadre SIGNAL : finalités, bases légales, minimisation, audit — puis premier cas contrôlé en production.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "infra-souveraine",
      "agents-metier",
      "equipes-embarquees",
    ],
    faqs: [
      {
        q: "Êtes-vous compatibles avec les exigences de souveraineté ?",
        a: "Oui. Souveraineté et traçabilité sont des defaults Remparia, pas des options marketing. Nous concevons avec vos contraintes d'hébergement et de marché public.",
      },
      {
        q: "Intervenez-vous en marché public / prestation ?",
        a: "Nous adaptons le mode d'engagement à votre cadre (prestation, assistance à maîtrise d'ouvrage, équipes embarquées). Parlons-en dès le diagnostic.",
      },
      {
        q: "L'agent remplace-t-elle des agents publics ?",
        a: "Non. Elle absorbe le répétitif pour libérer du temps sur le jugement et la relation usager. La responsabilité reste humaine.",
      },
      {
        q: "Par quoi commencer concrètement ?",
        a: "Un diagnostic SIGNAL : cartographier cas d'usage, risques, data et SI — puis un prototype guidé sur un périmètre à fort impact / risque maîtrisé.",
      },
    ],
  },
};

const EN: Record<string, SecteurDetail> = {
  "finance-assurance": {
    slug: "finance-assurance",
    heroH: "Sovereign agents for finance & insurance",
    heroP:
      "Supervised agents absorb document work and controls while your teams keep judgment, accountability and client relationships.",
    signals: [
      { value: "SIGNAL", label: "End-to-end protocol" },
      { value: "FR", label: "Data in France" },
      { value: "HITL", label: "Human in the loop" },
      { value: "Audit", label: "Native traceability" },
    ],
    pains: [
      {
        title: "Pilots that never reach production",
        desc: "Demos impress the board, then hit IT, security and compliance. Without business integration, value stays theoretical.",
      },
      {
        title: "Compliance slows more than it guides",
        desc: "GDPR, banking secrecy, supervisory expectations: without agent governance from day one, every use case becomes a risk project.",
      },
      {
        title: "Back-office overload, expertise underused",
        desc: "Document analysis, KYC, claims, controls: teams drown in repetitive work instead of applying judgment.",
      },
    ],
    deliverables: [
      "SIGNAL scoping of real-ROI use cases (back-office, compliance, documents)",
      "Business agents integrated into your existing tools, with human validation",
      "Sovereign RAG on policies, procedures and regulatory corpora",
      "Governance, observability and audit trails for compliance",
      "Production launch: monitoring, iteration, outcome measurement",
      "Skills transfer to your data / business / risk teams",
    ],
    scenarios: [
      {
        who: "Insurance operations leadership",
        need: "Cut claims handling time without losing business control.",
        remparia:
          "We industrialize a document pre-analysis agent on your DMS, with human validation on ambiguous cases and full traceability.",
      },
      {
        who: "Compliance / risk",
        need: "Speed up document controls while staying auditable.",
        remparia:
          "We design a governed agent pipeline: explicit business rules, audit logs, sovereign hosting and human exit criteria.",
      },
      {
        who: "Innovation / IT",
        need: "Move beyond an isolated ChatGPT POC into the real stack.",
        remparia:
          "We re-run the use case through SIGNAL: tool integration, data readiness, compliance guarantees, then industrialization.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "agents-metier",
      "infra-souveraine",
      "equipes-embarquees",
    ],
    faqs: [
      {
        q: "Do you work under banking secrecy / supervisory constraints?",
        a: "Yes. Compliance is not an add-on: it shapes SIGNAL scoping (allowed data, traceability, human-in-the-loop, hosting). We design with your risk and legal teams.",
      },
      {
        q: "Does our data leave France?",
        a: "Not by default. We favour sovereign infra and architectures where your data stays under your control. Model choice is agnostic and matched to sensitivity.",
      },
      {
        q: "How soon is a first useful deliverable?",
        a: "A SIGNAL diagnostic quickly finds where value is real. A guided prototype then validates a low-risk case before industrialization — no magic in ten minutes.",
      },
      {
        q: "Do you replace our business teams?",
        a: "No. Humans decide, agents execute. We augment teams on repetitive load; judgment, accountability and client relationships stay yours.",
      },
    ],
  },
  sante: {
    slug: "sante",
    heroH: "Agents for healthcare & regulated professions",
    heroP:
      "Ease administrative load without delegating clinical decisions: professional secrecy, human validation and existing tools shape every use.",
    signals: [
      { value: "Secrecy", label: "Professional respect" },
      { value: "FR", label: "Sovereign hosting" },
      { value: "HITL", label: "Human validation" },
      { value: "GDPR", label: "Health data" },
    ],
    pains: [
      {
        title: "Admin load crushing care time",
        desc: "Reports, scheduling, document pathways: clinical time dissolves into process.",
      },
      {
        title: "Generic consumer tools are incompatible",
        desc: "Generic assistants fail professional secrecy and health-data hosting requirements.",
      },
      {
        title: "Isolated pilots without field adoption",
        desc: "Without integration into clinical software and governance, Automation stays an experiment outside daily work.",
      },
    ],
    deliverables: [
      "Scoping of high-impact use cases (admin, pathways, documents) under legal constraints",
      "Agents and automations with systematic human validation on sensitive outputs",
      "Sovereign architectures suited to health data",
      "Integration into existing tools rather than blunt replacement",
      "Governance, traceability and documentation for DPOs / leadership",
      "Change support for clinical and admin teams",
    ],
    scenarios: [
      {
        who: "Facility leadership",
        need: "Ease back-office load without exposing patient files to unmanaged tools.",
        remparia:
          "We build agents on authorized flows, with appropriate hosting, access logs and human validation on anything care-related.",
      },
      {
        who: "Regulated practice / network",
        need: "Speed document production without diluting professional responsibility.",
        remparia:
          "We industrialize drafting / synthesis assistants where the professional validates before send — never opaque autonomy on sensitive matter.",
      },
      {
        who: "Health IT / DPO",
        need: "Govern agent usage beyond shadow IT.",
        remparia:
          "We set a SIGNAL roadmap: allowed cases, models, data, audit — then a first controlled production case.",
      },
    ],
    serviceSlugs: ["strategie-ia", "agents-metier", "infra-souveraine"],
    faqs: [
      {
        q: "How do you handle professional secrecy?",
        a: "By limiting exposed data, isolating processing, tracing access and keeping human validation on sensitive outputs. Architecture follows the legal frame.",
      },
      {
        q: "Do you host health data?",
        a: "We design sovereign architectures suited to your context (including health-data hosting requirements when relevant) and work with your existing infra constraints.",
      },
      {
        q: "Does the agent decide instead of the professional?",
        a: "No. Remparia augments: the agent prepares, synthesizes, routes; the professional decides and remains accountable.",
      },
      {
        q: "Where do we start?",
        a: "A SIGNAL diagnostic to separate high-impact / low-risk cases from forbidden or premature ones — then a guided prototype.",
      },
    ],
  },
  industrie: {
    slug: "industrie",
    heroH: "Agents for industry & operations",
    heroP:
      "Give technicians faster access to operational knowledge and absorb repetitive exceptions — without bypassing your systems or their expertise.",
    signals: [
      { value: "OT/IT", label: "Systems integration" },
      { value: "Prod", label: "Through to production" },
      { value: "Measure", label: "Tracked gains" },
      { value: "FR", label: "Data sovereignty" },
    ],
    pains: [
      {
        title: "Fragile, scattered expert knowledge",
        desc: "Procedures, field experience, machine history: critical know-how lives in heads and files.",
      },
      {
        title: "Technology POCs disconnected from the shopfloor",
        desc: "Without MES/ERP/CMMS wiring and operator adoption, Automation stays a slide.",
      },
      {
        title: "Quality and maintenance under pressure",
        desc: "Teams handle too many exceptions manually; useful signal drowns in noise.",
      },
    ],
    deliverables: [
      "Identification of operational ROI use cases (maintenance, quality, supply)",
      "Agents and assistants plugged into your tools (ERP, CMMS, technical docs)",
      "RAG on procedures and history to speed diagnosis",
      "Industrialization with monitoring and field success criteria",
      "Data governance and sovereignty by flow criticality",
      "Embedded teams to accelerate without an external learning curve",
    ],
    scenarios: [
      {
        who: "Maintenance lead",
        need: "Cut diagnosis time on recurring failures.",
        remparia:
          "We connect an agent to your history and procedures to propose hypotheses and checklists — validated by your technicians.",
      },
      {
        who: "Quality / industrialization",
        need: "Speed handling of documented non-conformities.",
        remparia:
          "We automate pre-qualification and dossier synthesis, with human review and audit traceability.",
      },
      {
        who: "Plant digital leadership",
        need: "Turn a vision / LLM POC into daily usage.",
        remparia:
          "We re-run deployment through SIGNAL: systems integration, guarantees, normalization, line-level outcome tracking.",
      },
    ],
    serviceSlugs: [
      "agents-metier",
      "infra-souveraine",
      "equipes-embarquees",
      "strategie-ia",
    ],
    faqs: [
      {
        q: "Do you work with OT / cyber constraints?",
        a: "Yes. We design architectures that respect network segmentation and security policy — Agents do not bypass your stack.",
      },
      {
        q: "Must everything move to the cloud?",
        a: "No. We are agnostic: on-prem, sovereign cloud or hybrid by criticality, latency and data policy.",
      },
      {
        q: "How do you measure success?",
        a: "From scoping: business indicators (diagnosis time, rework rate, quality lead times) — not demo metrics.",
      },
      {
        q: "Do your teams come on site?",
        a: "As needed: embedded missions, dedicated agent pods, skills transfer to plant and IT teams.",
      },
    ],
  },
  "services-conseil": {
    slug: "services-conseil",
    heroH: "Agents for services & consulting",
    heroP:
      "Recover capacity across research, synthesis and deliverables — without standardizing judgment or exposing client confidentiality.",
    signals: [
      { value: "Expert", label: "Humans at the center" },
      { value: "Conf.", label: "Client confidentiality" },
      { value: "Output", label: "Faster quality" },
      { value: "SIGNAL", label: "Repeatable method" },
    ],
    pains: [
      {
        title: "Knowledge work too slow to scale",
        desc: "Research, synthesis, drafts, reviews: senior time burns on repetitive load.",
      },
      {
        title: "Project knowledge evaporates",
        desc: "Every engagement reinvents the wheel; knowledge management stays a dead SharePoint folder.",
      },
      {
        title: "Consumer tools = client risk",
        desc: "Pasting client data into a public chatbot is a contractual and reputational risk.",
      },
    ],
    deliverables: [
      "Production assistants (research, synthesis, drafts) under governance",
      "Sovereign RAG on your methods, templates and lessons learned",
      "Integration with existing work tools (docs, ticketing, CRM)",
      "Confidentiality rules and isolation by client / engagement",
      "Measurement of time saved and quality (reviews, rework)",
      "Team upskilling on responsible usage",
    ],
    scenarios: [
      {
        who: "Partner / principal",
        need: "Speed proposals and deliverables without lowering the bar.",
        remparia:
          "We industrialize pre-draft agents on your proprietary corpus, with mandatory human review before client send.",
      },
      {
        who: "Knowledge / firm ops",
        need: "Make engagement knowledge actually reusable.",
        remparia:
          "We set up sovereign RAG on deliverables and methods, with access rights and traceability.",
      },
      {
        who: "Innovation leadership",
        need: "Govern consultant agent use beyond shadow ChatGPT.",
        remparia:
          "SIGNAL roadmap + first controlled production case + usage charter aligned to client commitments.",
      },
    ],
    serviceSlugs: ["strategie-ia", "agents-metier", "infra-souveraine"],
    faqs: [
      {
        q: "Are client data isolated?",
        a: "Yes. We design isolation, rights and usage policies so Agents respect your contractual commitments — not an opaque shared pot.",
      },
      {
        q: "Will automation flatten our deliverables?",
        a: "It accelerates the base layer; your experts bring judgment and differentiation. That is “humans decide, agents execute”.",
      },
      {
        q: "How soon for a first useful usage?",
        a: "A diagnostic targets 1–2 high-leverage cases (often drafting / knowledge). A guided prototype follows before industrialization.",
      },
      {
        q: "Do you train our teams?",
        a: "Yes: skills transfer and responsible usage are part of industrialization, not a one-off workshop.",
      },
    ],
  },
  "tech-produit": {
    slug: "tech-produit",
    heroH: "Agents for tech & product",
    heroP:
      "Make agent features and internal workflows reliable through guardrails, evidence and progressive transfer to product and engineering teams.",
    signals: [
      { value: "LLM", label: "Model-agnostic" },
      { value: "Prod", label: "Product reliability" },
      { value: "Obs.", label: "Observability" },
      { value: "Squad", label: "Embedded teams" },
    ],
    pains: [
      {
        title: "Fragile agent features in production",
        desc: "Latency, hallucinations, token cost, drift: the product POC does not survive real traffic.",
      },
      {
        title: "Integration and governance debt",
        desc: "Hard-coded prompts, no evals, no fallbacks, improvised data pipelines.",
      },
      {
        title: "Product / platform / business gap",
        desc: "Without shared framing, every squad reinvents an incompatible agent stack.",
      },
    ],
    deliverables: [
      "Product Agent strategy: use cases, architecture, model choices",
      "Industrialization of agents and features (eval, monitoring, cost)",
      "RAG and data readiness on proprietary data",
      "Sovereign or hybrid infra patterns by policy",
      "Embedded pods / teams to accelerate the roadmap",
      "Transfer to your engineering & product squads",
    ],
    scenarios: [
      {
        who: "Head of Product",
        need: "Move from impressive demo to stable feature.",
        remparia:
          "We set evals, guardrails, observability and exit criteria — then industrialize with your squads.",
      },
      {
        who: "CTO / platform",
        need: "Avoid an agent stack jungle per team.",
        remparia:
          "We define a reference architecture, agent patterns and reusable data/model governance.",
      },
      {
        who: "Data / ML team",
        need: "Accelerate without hiring a full agentic army.",
        remparia:
          "Embedded Remparia teams to ship, document and transfer — not an external black box.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "agents-metier",
      "infra-souveraine",
      "equipes-embarquees",
    ],
    faqs: [
      {
        q: "Are you locked to one model vendor?",
        a: "No. LLM-agnostic: best model per task, with switchability by cost, performance and sovereignty.",
      },
      {
        q: "Do you work in our codebase?",
        a: "Yes — embedded or co-delivery, with engineering standards, tests and progressive ownership by your teams.",
      },
      {
        q: "How do you handle cost and latency?",
        a: "From design: model routing, cache, truncation, regression evals and budgets — not after the cloud bill.",
      },
      {
        q: "Can you audit an existing agent stack?",
        a: "Yes. SIGNAL diagnostic: risks, debt, quick wins, then an industrialization roadmap.",
      },
    ],
  },
  "secteur-public": {
    slug: "secteur-public",
    heroH: "Agents for the public sector",
    heroP:
      "Shorten administrative lead times while preserving public decisions, traceability and control of public-interest data.",
    signals: [
      { value: "Sovereign", label: "Data & hosting" },
      { value: "Audit", label: "Traceability" },
      { value: "Public", label: "General interest" },
      { value: "SIGNAL", label: "Repeatable frame" },
    ],
    pains: [
      {
        title: "Pressure on processing times",
        desc: "Document volumes and citizen requests saturate teams; consumer tools fail the compliance bar.",
      },
      {
        title: "Non-negotiable sovereignty requirements",
        desc: "Opaque public cloud, out-of-frame models, no audit trail: experiments die in legal review.",
      },
      {
        title: "Agent projects without industrialization",
        desc: "Calls for projects and POCs pile up; few reach measurable daily use.",
      },
    ],
    deliverables: [
      "SIGNAL scoping of priority use cases (documents, routing, back-office)",
      "Agents and automations with governance and human validation",
      "Sovereign and traceable architectures",
      "Integration with existing systems and business processes",
      "Documentation for IT, DPO, leadership and control",
      "Change support for public servants",
    ],
    scenarios: [
      {
        who: "Digital leadership",
        need: "Industrialize a document use case without sovereignty risk.",
        remparia:
          "We deploy a RAG / agent pipeline on suitable infra, with logs, rights and human-in-the-loop.",
      },
      {
        who: "Business / back-office",
        need: "Cut processing times while keeping human decisions.",
        remparia:
          "The agent prepares and routes; the public servant validates. We measure lead times and decision quality.",
      },
      {
        who: "DPO / legal",
        need: "Govern technology experimentation in administration.",
        remparia:
          "SIGNAL frame: purposes, legal bases, minimization, audit — then a first controlled production case.",
      },
    ],
    serviceSlugs: [
      "strategie-ia",
      "infra-souveraine",
      "agents-metier",
      "equipes-embarquees",
    ],
    faqs: [
      {
        q: "Are you compatible with sovereignty requirements?",
        a: "Yes. Sovereignty and traceability are Remparia defaults, not marketing options. We design within your hosting and procurement constraints.",
      },
      {
        q: "Do you work under public procurement / services?",
        a: "We adapt engagement mode to your frame (services, project assistance, embedded teams). Let's discuss it at diagnostic time.",
      },
      {
        q: "Does the agent replace public servants?",
        a: "No. It absorbs repetitive load to free time for judgment and citizen relationships. Accountability stays human.",
      },
      {
        q: "Where do we start concretely?",
        a: "A SIGNAL diagnostic: map use cases, risks, data and systems — then a guided prototype on a high-impact / controlled-risk scope.",
      },
    ],
  },
};

import {
  EXTRA_DETAILS_EN,
  EXTRA_DETAILS_FR,
} from "./secteurs-extra";

const BY_LANG = {
  fr: { ...FR, ...EXTRA_DETAILS_FR },
  en: { ...EN, ...EXTRA_DETAILS_EN },
} as const;

export function getSecteurDetail(
  slug: string,
  lang: "fr" | "en" = "fr",
): SecteurDetail | null {
  const detail = BY_LANG[lang][slug];
  if (!detail) return null;

  const scenarioLabel =
    lang === "fr" ? "Déploiement possible" : "Possible deployment";
  const objectiveLabel =
    lang === "fr" ? "Objectif à cadrer" : "Target to define";

  return {
    ...detail,
    scenarios: detail.scenarios.map((scenario) => ({
      ...scenario,
      need: `${objectiveLabel} — ${scenario.need}`,
      remparia: `${scenarioLabel} — ${scenario.remparia}`,
    })),
  };
}
