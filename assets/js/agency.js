/* ==========================================================================
   Jongoma Tech — contenus « agence » du site vitrine et leur affichage :
   pôles de services, méthodologie, domaines, portfolio, ressources, blog,
   formulaire « J'ai un projet ».
   Règle : aucun chiffre d'impact, aucun client ni projet inventé.
   ========================================================================== */

/* ---------- Pôles de services ---------- */
const POLES = window.JG_EN?.POLES || [
  {
    id: "logiciel",
    icon: "bi-code-slash",
    photo: "pro-laptop.jpg",
    title: "Ingénierie logicielle",
    lead: "Sites, applications et plateformes pensés pour celles et ceux qui les utilisent.",
    text: "Tout le monde se digitalise, mais un outil numérique n'a de valeur que s'il est réellement utilisé. Nous concevons et développons vos produits avec une méthode centrée sur les personnes : vos clientes, vos équipes, vos bénéficiaires. Nous livrons des produits sobres, rapides même avec un petit forfait, et faciles à prendre en main.",
    items: [
      "Applications web : site vitrine, boutique en ligne, portail, gestion de contenu",
      "Applications mobiles natives ou hybrides, jusqu'à la publication sur Play Store et App Store",
      "Plateformes web et mobile au parcours court et intuitif",
      "Applications modulables, prêtes à grandir avec vos utilisateurs",
      "Développement cloud native",
      "Sites sous WordPress, Drupal ou Joomla",
    ],
  },
  {
    id: "design",
    icon: "bi-vector-pen",
    photo: "tech-clic.jpg",
    title: "UX/UI Design",
    lead: "L'utilisatrice finale au cœur du projet, avant la première ligne de code.",
    text: "Avant de concevoir, nous écoutons. Nous allons à la rencontre des futures utilisatrices, sur le terrain si besoin, pour comprendre leurs usages réels : lecture, langue, téléphone, connexion. Nous auditons l'existant ou concevons le prototype interactif de votre produit, pour que vous voyiez et testiez son apparence finale avant tout développement.",
    items: [
      "Recherche utilisateur et entretiens sur le terrain",
      "Audit de l'expérience utilisateur existante",
      "Parcours et architecture de l'information",
      "Maquettes et prototype interactif",
      "Tests avec de vraies utilisatrices",
      "Accessibilité : messages vocaux, pictogrammes, langues locales",
    ],
  },
  {
    id: "marketing",
    icon: "bi-megaphone",
    photo: "pro-equipe.jpg",
    title: "Marketing digital",
    lead: "Faire connaître vos produits et services, là où se trouve votre public.",
    text: "Nous accompagnons vos projets de marketing et de communication : affirmer votre identité, lancer un produit, trouver de nouveaux clients, générer des contacts qualifiés ou faire vivre un événement. Nous savons aussi parler aux publics que les campagnes classiques oublient, dans leur langue et sur les canaux qu'ils utilisent vraiment, comme WhatsApp.",
    items: [
      "Stratégie marketing et éditoriale",
      "Contenus écrits, audio et vidéo",
      "Audit et accompagnement web marketing",
      "Référencement naturel et payant (SEO, SEA)",
      "Content marketing et animation de communauté",
      "Campagnes WhatsApp et SMS",
      "Webmastering",
    ],
  },
  {
    id: "creation",
    icon: "bi-camera-reels",
    photo: "numerique.jpg",
    title: "Infographie & vidéo",
    lead: "Une identité graphique forte et des contenus qui se remarquent.",
    text: "Sur internet, une entreprise se reconnaît d'abord à son image. Images, infographies, podcasts, vidéos : nous créons avec vous les supports de communication qui portent votre message et atteignent vos objectifs.",
    items: [
      "Logo et identité visuelle",
      "Affiches, flyers, cartes de visite",
      "Visuels pour les réseaux sociaux",
      "Écriture de script et tournage de spots",
      "Montage vidéo et motion design",
      "Podcasts et capsules audio",
    ],
  },
  {
    id: "cloud",
    icon: "bi-cloud-check",
    photo: "tech-start.jpg",
    title: "Cloud factory",
    lead: "Des architectures solides pour les projets exigeants.",
    text: "Les projets innovants arrivent avec des exigences élevées : beaucoup d'utilisateurs, des données sensibles, une disponibilité sans faille. Ce pôle est entièrement dédié aux projets qui s'appuient sur le cloud, de l'architecture à la mise en production.",
    items: [
      "Plateformes web prêtes pour la montée en charge",
      "Conception d'API et intégrations : mobile money, SMS, WhatsApp",
      "Architecture des systèmes d'information",
      "Développement cloud native",
      "Hébergement, sauvegardes et supervision",
    ],
  },
  {
    id: "data-ia",
    icon: "bi-stars",
    photo: "ai-voix.jpg",
    title: "Data & Intelligence artificielle",
    lead: "Des données vraies et une IA qui n'oublie ni les femmes ni les langues locales.",
    text: "On décide trop souvent sans connaître la réalité. Nous collectons des données fiables sur le terrain, les transformons en tableaux de bord clairs, et concevons des outils d'intelligence artificielle utiles, y compris pour celles qui lisent peu.",
    items: [
      "Enquêtes de terrain et tableaux de bord",
      "Suivi-évaluation avec preuves horodatées",
      "Assistants vocaux et outils d'IA en français et en langues locales",
      "Analyse de données et rapports",
      "Formation de vos équipes à l'IA",
    ],
    services: ["ai", "insights", "mel"],
  },
  {
    id: "cyber",
    icon: "bi-shield-lock",
    photo: "cyber.jpg",
    title: "Cybersécurité & confiance",
    lead: "Protéger vos données, vos clientes et vos documents.",
    text: "Arnaques, piratages, faux documents : la confiance se perd vite. Nous vous aidons à sécuriser vos outils, à protéger les données de vos utilisateurs conformément à la loi sénégalaise et au RGPD, et à vérifier l'authenticité des documents.",
    items: [
      "Audit de sécurité de vos outils",
      "Sensibilisation des équipes aux arnaques",
      "Mise en conformité : CDP et RGPD",
      "Authentification de documents",
      "Plan de réponse aux incidents",
    ],
    services: ["cyber", "authentification"],
  },
  {
    id: "support",
    icon: "bi-headset",
    photo: "pro-bureau.jpg",
    title: "Infogérance & support IT",
    lead: "Vos outils à jour et suivis, pour que vous restiez concentrée sur votre métier.",
    text: "Tout produit numérique a besoin d'être entretenu, mis à jour et corrigé rapidement en cas de problème. Externalisez votre support et votre maintenance : nous suivons vos outils régulièrement pour anticiper les pannes, et vous suivez chaque intervention dans votre Espace client.",
    items: [
      "Gestion et suivi de vos sites internet",
      "Noms de domaine et messagerie professionnelle",
      "Formation à la prise en main et au webmastering",
      "Surveillance du parc informatique et configuration des postes",
      "Suivi des incidents dans votre Espace client",
    ],
  },
];

/* ---------- Domaines d'intervention ---------- */
const DOMAINS = window.JG_EN?.DOMAINS || [
  ["bi-stars", "Intelligence artificielle"],
  ["bi-graph-up-arrow", "Data & analyse"],
  ["bi-shield-lock", "Cybersécurité"],
  ["bi-cloud-check", "Cloud & infrastructures IT"],
  ["bi-bag-heart", "E-commerce"],
  ["bi-mortarboard", "Éducation & e-learning"],
  ["bi-heart-pulse", "Santé & bien-être"],
  ["bi-people", "Réseaux sociaux & communautés"],
  ["bi-controller", "Jeux & gamification"],
  ["bi-airplane", "Voyage & hospitalité"],
  ["bi-truck", "Logistique & transport"],
  ["bi-megaphone", "Marketing & community management"],
  ["bi-bezier2", "Design & prototypage"],
  ["bi-puzzle", "Solutions sur mesure"],
  ["bi-cup-hot", "Restauration"],
  ["bi-buildings", "Immobilier & foncier"],
  ["bi-wallet2", "Finance & mobile money"],
  ["bi-flower1", "Agriculture"],
  ["bi-bank", "ONG, bailleurs & institutions"],
  ["bi-globe-europe-africa", "Diaspora"],
  ["bi-person-vcard", "E-gouvernement & état civil"],
  ["bi-bank2", "Justice & juridique"],
  ["bi-scissors", "Mode, artisanat & textile"],
  ["bi-sun", "Énergie & environnement"],
];

/* ---------- Méthodologie ---------- */
const METHOD = window.JG_EN?.METHOD || [
  { t: "Écouter", d: "Un premier échange pour comprendre votre besoin, votre public et vos contraintes. Une responsable vous répond sous 48 heures.", out: "Note de cadrage" },
  { t: "Comprendre le terrain", d: "Entretiens, enquêtes, visites : nous partons de la réalité de vos utilisatrices, pas de suppositions.", out: "Synthèse terrain" },
  { t: "Concevoir", d: "Parcours, maquettes et prototype interactif, validés avec vous avant de développer quoi que ce soit.", out: "Prototype et devis détaillé" },
  { t: "Réaliser", d: "Développement par étapes courtes avec une démonstration à chaque étape. Pour les missions de terrain, nos agentes interviennent sur place.", out: "Démonstrations régulières" },
  { t: "Prouver", d: "Tests avec de vraies utilisatrices, recette, preuves horodatées. Rien n'est livré sans avoir été vérifié.", out: "Rapport de recette" },
  { t: "Accompagner", d: "Mise en ligne, formation de vos équipes, maintenance et suivi de chaque intervention dans votre Espace client.", out: "Formation et support" },
];

/* ---------- Nos réalisations : sites livrés et en ligne (captures dans assets/img/real-*.jpg) ---------- */
const REALISATIONS = window.JG_EN?.REALISATIONS || [
  { name: "Colombe Academy of Technology", url: "https://www.cat.sn/", shot: "real-cat.jpg",
    sector: "Éducation", kind: "Site institutionnel", poles: ["logiciel", "design"],
    text: "Le site de la CAT, école de technologie à Dakar : formations, certifications, cyber-range, blog et admissions." },
  { name: "Scolarité CAT", url: "https://scolarite.cat-sn.com/", shot: "real-scolarite.jpg",
    sector: "Éducation", kind: "Plateforme de gestion", poles: ["logiciel", "design", "cloud"],
    text: "La plateforme de suivi des inscriptions de la CAT : dossiers de la Licence 1 au Master 2, frais et comptes, fiches, reçus et attestations prêts à imprimer." },
  { name: "OpenMove", url: "https://openmove.sn/", shot: "real-openmove.jpg",
    sector: "Mobilité & transport", kind: "Site vitrine", poles: ["logiciel", "design"],
    text: "La vitrine d'OpenMove, plateforme de mobilité au Sénégal : courses, livraisons et colis express, réservés en un geste." },
  { name: "Application OpenMove", url: null, app: true, shot: "app-openmove-1.jpg", screens: ["app-openmove-1.jpg", "app-openmove-2.jpg"],
    sector: "Mobilité & transport", kind: "Application mobile", poles: ["logiciel", "design", "cloud"],
    text: "L'application mobile OpenMove : réservation d'un trajet Standard, Eco ou Premium, suivi de la course en direct sur la carte, contact du chauffeur, wallet et points de fidélité." },
  { name: "OpenFabrics", url: "https://openfabrics.sn/", shot: "real-openfabrics.jpg",
    sector: "E-commerce", kind: "Boutique en ligne", poles: ["logiciel", "design"],
    text: "La boutique en ligne d'OpenFabrics à Dakar : collections et catégories de tissus haut de gamme, compte client et commande en ligne." },
  { name: "OpenCloud", url: "https://www.opencloud.sn/", shot: "real-opencloud.jpg",
    sector: "Cybersécurité & IT", kind: "Site institutionnel", poles: ["logiciel", "design"],
    text: "Le site d'OpenCloud, intégrateur cybersécurité et infrastructures IT à Dakar : pôles d'expertise, services, ressources et demande de devis." },
  { name: "AFATECH", url: null, shot: "real-afa.jpg",
    sector: "Femmes & technologie", kind: "Site associatif", poles: ["logiciel", "design"],
    text: "Le site d'AFATECH, Association des Femmes Africaines en Technologies basée à Dakar : programmes, volontariat, Femmes Tech, activités et dons." },
  { name: "SamaLearn", url: null, shot: "real-machine.jpg",
    sector: "Éducation & IA", kind: "Plateforme d'apprentissage", poles: ["logiciel", "design", "data-ia"],
    text: "SamaLearn, une plateforme d'apprentissage adaptatif : une intelligence artificielle construit un parcours unique pour chaque apprenant et l'ajuste en temps réel selon ses résultats." },
];

/* ---------- Portfolio : réalisations Jongoma et projets types (pas des références clients) ---------- */
const WORKS = [
  ...REALISATIONS.map((r) => ({ real: true, title: r.name, poles: r.poles, domain: r.sector, photo: r.shot, text: r.text, link: r.url, soon: !r.url })),
  ...(window.JG_EN?.WORKS_EXTRA || [
  { real: true, title: "La plateforme Jongoma", poles: ["logiciel", "design", "cloud"], domain: "Réseaux sociaux & communautés", photo: "communaute.jpg",
    text: "Espace client complet : demandes et dossiers suivis étape par étape, devis et reçus, pièces jointes, Communauté entre femmes et Discussions avec messages vocaux.", link: "plateforme.html" },
  { real: true, title: "Le site Jongoma Tech", poles: ["design", "logiciel", "creation"], domain: "Design & prototypage", photo: "hero.jpg",
    text: "Le site que vous visitez : direction artistique éditoriale, quiz d'orientation en deux questions, catalogue filtrable de nos services.", link: "index.html" },
  { title: "Boutique en ligne d'une coopérative de transformatrices", poles: ["logiciel", "marketing"], domain: "E-commerce", photo: "commercante.jpg",
    text: "Catalogue, commande sur mobile, paiement Wave et Orange Money, suivi des livraisons et campagne de lancement sur WhatsApp." },
  { title: "Suivi de grossesse par messages vocaux", poles: ["design", "data-ia"], domain: "Santé & bien-être", photo: "maternite.jpg",
    text: "Rappels de consultation et conseils en messages vocaux, pensés avec des femmes qui lisent peu, sur n'importe quel téléphone." },
  { title: "Tableau de bord de suivi-évaluation", poles: ["data-ia", "cloud"], domain: "ONG, bailleurs & institutions", photo: "audit.jpg",
    text: "Collecte hors ligne par des enquêtrices, preuves horodatées et géolocalisées, indicateurs consultables en direct par le bailleur." },
  { title: "Plateforme de formation au numérique", poles: ["logiciel", "design"], domain: "Éducation & e-learning", photo: "formation.jpg",
    text: "Parcours courts, vidéos légères adaptées aux petits forfaits, quiz et attestations pour des femmes qui se lancent dans le numérique." },
  { title: "Campagne contre les arnaques au mobile money", poles: ["marketing", "creation", "cyber"], domain: "Finance & mobile money", photo: "appel.jpg",
    text: "Spots vidéo, visuels et capsules audio en français et en wolof, diffusés sur les réseaux sociaux et WhatsApp." },
  { title: "Identité visuelle d'une entrepreneure", poles: ["creation", "marketing"], domain: "Restauration", photo: "portrait-femme.jpg",
    text: "Logo, charte graphique, menus, visuels pour les réseaux sociaux et site vitrine pour lancer son activité." },
  { title: "Suivi de chantier pour la diaspora", poles: ["logiciel", "data-ia"], domain: "Immobilier & foncier", photo: "terrain.jpg",
    text: "Chaque visite, chaque dépense et chaque photo du chantier accessibles depuis l'étranger, avec reçus et position GPS." },
  { title: "Infogérance d'une petite entreprise", poles: ["support", "cyber"], domain: "Solutions sur mesure", photo: "equipe.jpg",
    text: "Messagerie professionnelle, postes configurés, sauvegardes, formation de l'équipe et suivi des incidents." },
  ]),
];

/* ---------- Ressources ---------- */
const RESOURCES = window.JG_EN?.RESOURCES || [
  { id: "brief", type: "Modèle", icon: "bi-file-earmark-text", title: "Le brief de projet en 10 questions",
    desc: "Les questions à vous poser avant de lancer un site, une application ou une campagne.",
    body: `<ol>
      <li>Quel problème voulez-vous résoudre, en une phrase ?</li>
      <li>Pour qui ? Décrivez vos utilisatrices et utilisateurs : âge, langue, téléphone, connexion.</li>
      <li>Que doivent-ils pouvoir faire, du plus important au moins important ?</li>
      <li>Qu'existe-t-il déjà : site, page Facebook, fichier Excel, application ?</li>
      <li>Quels outils doivent être reliés : paiement mobile, SMS, WhatsApp, comptabilité ?</li>
      <li>Quelles sont les références que vous aimez, et pourquoi ?</li>
      <li>Qui, chez vous, valide les étapes et fournit les contenus ?</li>
      <li>Quelle est votre date idéale de lancement, et pourquoi cette date ?</li>
      <li>Quel budget envisagez-vous, même approximatif ?</li>
      <li>Comment saurez-vous que le projet est réussi ?</li>
    </ol><p>Vous pouvez répondre directement en ligne : notre formulaire « J'ai un projet » reprend ces questions.</p>`,
    cta: ["projet.html", "Remplir mon brief"] },
  { id: "momo", type: "Guide", icon: "bi-shield-exclamation", title: "Mobile money : 8 réflexes contre les arnaques",
    desc: "Les pièges les plus courants et comment les éviter, à partager autour de vous.",
    body: `<ul>
      <li><strong>Ne donnez jamais votre code secret</strong>, à personne, même à quelqu'un qui dit appeler de l'opérateur.</li>
      <li>Un « dépôt par erreur » sur votre compte ? Ne renvoyez rien vous-même : contactez le service client officiel.</li>
      <li>Méfiez-vous des gains, loteries et promotions que vous n'avez pas demandés.</li>
      <li>Vérifiez le nom du destinataire affiché avant de valider un transfert.</li>
      <li>Ne cliquez pas sur les liens reçus par SMS ou WhatsApp pour « débloquer » votre compte.</li>
      <li>Activez le verrouillage de votre téléphone et de l'application.</li>
      <li>Gardez les messages de confirmation : ils servent de preuve.</li>
      <li>En cas de doute, raccrochez et rappelez vous-même le numéro officiel.</li>
    </ul>` },
  { id: "chantier", type: "Guide", icon: "bi-house-check", title: "Suivre un chantier au pays depuis l'étranger",
    desc: "Comment éviter les mauvaises surprises quand on construit à distance.",
    body: `<ul>
      <li>Faites établir un devis détaillé par poste : fondations, murs, toiture, finitions.</li>
      <li>Versez l'argent par étape, une fois l'étape précédente constatée.</li>
      <li>Demandez des photos datées et localisées, pas seulement des photos envoyées par WhatsApp.</li>
      <li>Exigez un reçu pour chaque achat de matériaux.</li>
      <li>Faites vérifier les documents du terrain avant de commencer.</li>
      <li>Prévoyez une personne de confiance indépendante pour des visites surprises.</li>
    </ul><p>C'est exactement ce que fait le service Jongoma Diaspora, avec des agentes vérifiées et un suivi dans votre dossier.</p>`,
    cta: ["services.html?pole=impact", "Découvrir Jongoma Diaspora"] },
  { id: "lancement", type: "Checklist", icon: "bi-check2-square", title: "Avant de mettre un site en ligne",
    desc: "Les vérifications indispensables le jour du lancement.",
    body: `<ul>
      <li>Le site s'affiche bien sur un petit téléphone et avec une connexion lente.</li>
      <li>Tous les formulaires envoient bien leurs messages, et quelqu'un les reçoit.</li>
      <li>Le nom de domaine et le certificat de sécurité (https) sont actifs.</li>
      <li>Les mentions légales et la politique de protection des données sont publiées.</li>
      <li>Les textes ont été relus, les numéros de téléphone et adresses vérifiés.</li>
      <li>Une sauvegarde automatique est en place.</li>
      <li>La mesure d'audience est installée, dans le respect du consentement.</li>
      <li>Une personne sait mettre à jour les contenus.</li>
    </ul>` },
  { id: "donnees", type: "Fiche", icon: "bi-lock", title: "Protéger les données de vos bénéficiaires",
    desc: "Les bases de la protection des données pour une ONG ou une entreprise.",
    body: `<ul>
      <li>Ne collectez que les informations dont vous avez réellement besoin.</li>
      <li>Expliquez simplement pourquoi vous les collectez et qui y aura accès.</li>
      <li>Isolez les données sensibles : santé, violences, situation familiale.</li>
      <li>Limitez l'accès aux seules personnes concernées, et gardez une trace des consultations.</li>
      <li>Fixez une durée de conservation, puis supprimez.</li>
      <li>Au Sénégal, renseignez-vous auprès de la Commission de protection des données personnelles (CDP) ; en Europe, le RGPD s'applique.</li>
    </ul>` },
  { id: "documents", type: "Fiche", icon: "bi-patch-question", title: "Un document vous semble douteux ?",
    desc: "Les premiers réflexes face à un acte, un diplôme ou un titre suspect.",
    body: `<ul>
      <li>Ne vous fiez pas à l'apparence : un faux peut être très bien imité.</li>
      <li>Vérifiez auprès de l'autorité qui a délivré le document : mairie, tribunal, université, service des domaines.</li>
      <li>Comparez les noms, dates et numéros avec d'autres documents officiels.</li>
      <li>Ne versez pas d'argent sur la seule base d'une copie.</li>
      <li>Conservez les échanges et les copies : ils pourront servir de preuve.</li>
    </ul><p>Notre service d'authentification des documents vérifie pour vous auprès des sources officielles.</p>`,
    cta: ["services.html?pole=pro", "Voir le service"] },
  { id: "glossaire", type: "Glossaire", icon: "bi-book", title: "Le numérique en mots simples",
    desc: "Les mots qu'on entend dans un projet digital, expliqués sans jargon.",
    body: `<dl>
      <dt>UX (expérience utilisateur)</dt><dd>Tout ce que ressent une personne en utilisant votre outil : est-ce simple, rapide, rassurant ?</dd>
      <dt>UI (interface)</dt><dd>Ce qu'on voit à l'écran : couleurs, boutons, textes, images.</dd>
      <dt>Prototype</dt><dd>Une maquette cliquable pour tester l'outil avant de le construire.</dd>
      <dt>API</dt><dd>Une « prise » qui permet à deux logiciels d'échanger, par exemple votre site et Wave.</dd>
      <dt>Cloud</dt><dd>Des serveurs loués à distance pour héberger vos outils et vos données.</dd>
      <dt>Nom de domaine</dt><dd>L'adresse de votre site, par exemple monentreprise.sn.</dd>
      <dt>SEO</dt><dd>Les techniques pour apparaître dans les résultats de Google sans payer.</dd>
      <dt>Application hybride</dt><dd>Une seule application qui fonctionne sur Android et sur iPhone.</dd>
    </dl>` },
  { id: "presse", type: "Kit", icon: "bi-images", title: "Kit presse et partenaires",
    desc: "Logos, présentation et photos officielles de Jongoma Tech.", soon: true },
];

/* ---------- Blog ---------- */
const POSTS = window.JG_EN?.POSTS || [
  { slug: "startup-feminine", cat: "Jongoma", photo: "equipe.jpg", read: 4,
    title: "Pourquoi une startup tech 100 % féminine ?",
    excerpt: "Les femmes sont les premières touchées par les maux de notre société et les dernières servies par la technologie. Nous avons décidé de changer cela, de l'intérieur.",
    body: [
      "Santé des mamans, violences, accès aux terres, école des filles, emploi, banque : les difficultés pèsent d'abord sur les femmes. Pourtant, les outils numériques sont rarement pensés pour elles, ni dans leur langue, ni pour leur téléphone, ni pour leur quotidien.",
      ["h", "Concevoir avec, pas pour"],
      "Une équipe entièrement féminine, du terrain à la direction, ne garantit pas tout. Mais elle change la manière de poser les questions. Qui va utiliser cet outil ? Sait-elle lire ? A-t-elle un smartphone, du crédit, du temps ? Ces questions deviennent la base de chaque projet.",
      ["h", "Une entreprise, pas une association"],
      "Jongoma Pro vend des services technologiques aux entreprises, aux ONG et aux institutions. Ces revenus, avec ceux des bailleurs, financent Jongoma Impact, nos programmes gratuits ou presque pour les femmes et les familles. C'est ce modèle qui nous permet de durer.",
      "Notre devise résume notre exigence : ce que Jongoma promet, Jongoma le prouve.",
    ] },
  { slug: "site-ou-application", cat: "Ingénierie", photo: "tech-code.jpg", read: 5,
    title: "Site vitrine, application ou plateforme : que choisir ?",
    excerpt: "Avant de parler technique, parlons de vos utilisateurs. Trois questions simples pour choisir le bon outil, sans dépenser trop.",
    body: [
      "« Il nous faut une application. » C'est souvent la première phrase d'un projet. Mais une application n'est pas toujours la bonne réponse. Avant de choisir, posez-vous trois questions.",
      ["h", "1. Que doivent faire vos utilisateurs ?"],
      "S'ils doivent seulement vous découvrir et vous contacter, un site vitrine suffit. S'ils doivent commander, payer, suivre un dossier ou échanger entre eux, il faut une plateforme avec des comptes.",
      ["h", "2. À quelle fréquence reviendront-ils ?"],
      "Une application mobile se justifie quand on l'ouvre souvent. Pour un usage ponctuel, une plateforme web bien conçue pour le téléphone évite le téléchargement et coûte moins cher à maintenir.",
      ["h", "3. Quel téléphone et quelle connexion ont-ils ?"],
      "Si votre public a des téléphones modestes et des forfaits limités, la légèreté passe avant tout. Une page qui charge vite vaut mieux qu'une belle animation que personne ne verra.",
      "Vous hésitez encore ? Décrivez-nous votre projet : nous vous conseillons la solution la plus simple qui répond vraiment au besoin.",
    ] },
  { slug: "ux-afrique", cat: "Design", photo: "tech-clic.jpg", read: 4,
    title: "Concevoir pour le vocal, le wolof et les petits forfaits",
    excerpt: "Ce que nous apprenons en concevant des outils pour des femmes qui lisent peu ou parlent surtout wolof.",
    body: [
      "Beaucoup d'outils numériques supposent qu'on lit facilement le français et qu'on a une bonne connexion. Pour une grande partie des femmes que nous servons, ce n'est pas le cas.",
      ["h", "La voix d'abord"],
      "Un message vocal est souvent plus naturel qu'un formulaire. Sur la plateforme Jongoma, on peut nous écrire, mais aussi nous parler.",
      ["h", "Des images qui parlent"],
      "Pictogrammes, couleurs et photos réelles aident à comprendre sans lire. Chaque icône est testée avec de vraies utilisatrices.",
      ["h", "Léger, toujours"],
      "Des pages qui chargent vite, des images compressées, des fonctions qui marchent hors ligne et se synchronisent ensuite. C'est moins spectaculaire, mais c'est ce qui fait qu'un outil est utilisé.",
    ] },
  { slug: "arnaques-mobile-money", cat: "Cybersécurité", photo: "cyber.jpg", read: 3,
    title: "Arnaques au mobile money : les reconnaître pour s'en protéger",
    excerpt: "Faux dépôts, faux agents, faux gains : les arnaques se ressemblent. Voici comment les déjouer.",
    body: [
      "Le mobile money a transformé la vie quotidienne. Les escrocs l'ont bien compris, et leurs méthodes reposent presque toujours sur la précipitation et la confiance.",
      ["h", "Le faux dépôt"],
      "Vous recevez un SMS annonçant un dépôt, puis un appel : « Je me suis trompé, renvoyez-moi l'argent. » Vérifiez votre solde réel dans l'application avant tout. En cas de doute, ne renvoyez rien et contactez le service client officiel.",
      ["h", "Le faux agent"],
      "Quelqu'un se présente comme employé de l'opérateur et vous demande votre code. Aucun opérateur ne vous demandera jamais votre code secret.",
      ["h", "Le faux gain"],
      "Vous avez « gagné » sans avoir joué ? Il faudra payer des « frais » pour recevoir le lot. C'est toujours une arnaque.",
      "Retrouvez nos 8 réflexes à partager dans la page Ressources.",
    ] },
  { slug: "prouver-impact", cat: "Data & IA", photo: "audit.jpg", read: 4,
    title: "Prouver l'impact : ce que la preuve horodatée change",
    excerpt: "Un rapport ne suffit plus. Bailleurs et donateurs veulent voir ce qui a changé, et pouvoir le vérifier.",
    body: [
      "Beaucoup de programmes sociaux peinent à montrer ce qu'ils ont réellement changé. Ce n'est pas toujours un manque de résultats, c'est souvent un manque de preuves.",
      ["h", "Collecter au moment où ça se passe"],
      "Une photo prise sur place, avec la date, l'heure et la position, vaut plus qu'un tableau rempli après coup. Nos enquêtrices collectent ces preuves même sans réseau.",
      ["h", "Rendre la preuve consultable"],
      "Le bailleur ou le donateur suit l'avancement dans son espace, sans attendre le rapport final.",
      ["h", "Ne jamais embellir"],
      "Notre règle : un seul chiffre faux peut détruire la confiance. Nous préférons un résultat modeste et vrai à une promesse spectaculaire.",
    ] },
  { slug: "faux-documents", cat: "Confiance", photo: "pro.jpg", read: 3,
    title: "Faux documents : pourquoi l'authentification devient indispensable",
    excerpt: "Actes d'état civil, diplômes, titres fonciers : avant de signer ou d'embaucher, vérifier n'est plus une option.",
    body: [
      "Un faux document peut coûter une maison, un emploi ou des années de procédure. Avec les outils d'aujourd'hui, une copie peut être très convaincante.",
      ["h", "Vérifier à la source"],
      "La seule vérification fiable se fait auprès de l'autorité qui a délivré le document : mairie, tribunal, université, service des domaines. C'est long quand on est loin, ou quand on ne sait pas à qui s'adresser.",
      ["h", "Ce que nous faisons"],
      "Notre service d'authentification se charge de ces vérifications pour vous et vous remet une réponse documentée. Il s'adresse aux particuliers, aux entreprises qui recrutent et aux institutions.",
    ] },
];

/* ========================================================================== */
const escA = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const pad = (n) => String(n).padStart(2, "0");
const poleById = (id) => POLES.find((p) => p.id === id);

/** Section « Ce que nous proposons » : lignes dépliables, titre qui roule au survol. */
function renderPoles() {
  document.querySelectorAll("[data-poles]").forEach((root, k) => {
    root.innerHTML = POLES.map((p, i) => {
      const id = `pole-${k}-${p.id}`;
      return `
      <article class="pole">
        <button class="pole-head" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">
          <span class="pole-n">${pad(i + 1)}</span>
          <span class="pole-title"><span class="roll"><span>${escA(p.title)}</span><span aria-hidden="true">${escA(p.title)}</span></span></span>
          <span class="pole-lead">${escA(p.lead)}</span>
          <span class="pole-more"><span class="label-more">${tr("Voir plus", "See more")}</span><span class="label-less">${tr("Voir moins", "See less")}</span><i class="bi bi-plus-lg"></i></span>
        </button>
        <div class="collapse" id="${id}">
          <div class="pole-body row g-4">
            <div class="col-lg-6">
              <p class="fs-5 text-cream d-lg-none">${escA(p.lead)}</p>
              <p class="text-soft">${escA(p.text)}</p>
              <div class="d-flex flex-wrap gap-2 mt-4">
                <a class="btn btn-gold" href="${page("projet.html")}?pole=${p.id}">${tr("Lancer un projet", "Start a project")}</a>
                <a class="btn btn-ghost" href="${page("portfolio.html")}?pole=${p.id}">${tr("Exemples de projets", "Project examples")}</a>
              </div>
            </div>
            <div class="col-lg-4">
              <p class="kicker mb-3">${tr("Ce que nous faisons", "What we do")}</p>
              <ul class="pole-items">${p.items.map((x) => `<li>${escA(x)}</li>`).join("")}</ul>
            </div>
            <div class="col-lg-2 d-none d-lg-block"><div class="arch h-100" style="min-height:14rem"><img src="assets/img/${p.photo}" alt="" loading="lazy"></div></div>
          </div>
        </div>
      </article>`;
    }).join("");
    root.querySelectorAll(".collapse").forEach((c) => {
      c.addEventListener("show.bs.collapse", () => c.closest(".pole").classList.add("open"));
      c.addEventListener("hide.bs.collapse", () => c.closest(".pole").classList.remove("open"));
    });
  });
}

/** Nos réalisations : chaque site dans son propre cadre, l'un après l'autre (capture et texte en alternance). */
function renderRealisations() {
  document.querySelectorAll("[data-realisations]").forEach((root) => {
    const host = (url) => new URL(url).hostname.replace(/^www\./, "");
    const total = pad(REALISATIONS.length);
    root.innerHTML = REALISATIONS.map((r, i) => {
      if (r.app) return `
      <article class="rc rc-app ${i % 2 ? "rc-flip" : ""} reveal">
        <div class="rc-phones">
          ${r.screens.map((src, k) => `<div class="rc-phone ${k ? "back" : "front"}"><img src="assets/img/${src}" alt="${tr("Écran de l'application", "Screen of the app")} ${escA(r.name)}" loading="lazy"></div>`).join("")}
        </div>
        <div class="rc-info">
          <div class="sc-count"><b>${pad(i + 1)}</b><span>/ ${total}</span></div>
          <p class="small-label mt-3 mb-2">${escA(r.kind)} · ${escA(r.sector)}</p>
          <h3 class="font-display text-cream mb-3">${escA(r.name)}</h3>
          <p class="text-soft mb-4">${escA(r.text)}</p>
          <div class="d-flex flex-wrap gap-2 mb-4">${r.poles.map((id) => `<span class="tag-ed">${escA(poleById(id).title)}</span>`).join("")}</div>
          <div class="stores">
            <span class="store" aria-disabled="true"><i class="bi bi-apple"></i><span><small>${tr("Bientôt sur", "Coming soon on")}</small>App Store</span></span>
            <span class="store" aria-disabled="true"><i class="bi bi-google-play"></i><span><small>${tr("Bientôt sur", "Coming soon on")}</small>Google Play</span></span>
          </div>
        </div>
      </article>`;
      const frameInner = `
          <span class="sc-bar"><i></i><i></i><i></i><span class="sc-url">${r.url ? `<i class="bi bi-lock-fill"></i> ${host(r.url)}` : `<i class="bi bi-hourglass-split"></i> ${tr("Bientôt en ligne", "Coming online soon")}`}</span></span>
          <span class="rc-shot"><img src="assets/img/${r.shot}" alt="${tr("Page d'accueil de", "Home page of")} ${escA(r.name)}" loading="lazy"></span>
          ${r.url ? `<span class="sc-visit">${tr("Visiter le site", "Visit the site")} <i class="bi bi-arrow-up-right"></i></span>` : `<span class="sc-visit rc-soon">${tr("Bientôt disponible", "Coming soon")}</span>`}`;
      return `
      <article class="rc ${i % 2 ? "rc-flip" : ""} reveal">
        ${r.url ? `<a class="rc-frame" href="${r.url}" target="_blank" rel="noopener" aria-label="${tr("Visiter", "Visit")} ${escA(r.name)} (${tr("nouvel onglet", "new tab")})">${frameInner}</a>` : `<div class="rc-frame">${frameInner}</div>`}
        <div class="rc-info">
          <div class="sc-count"><b>${pad(i + 1)}</b><span>/ ${total}</span></div>
          <p class="small-label mt-3 mb-2">${escA(r.kind)} · ${escA(r.sector)}</p>
          <h3 class="font-display text-cream mb-3">${escA(r.name)}</h3>
          <p class="text-soft mb-4">${escA(r.text)}</p>
          <div class="d-flex flex-wrap gap-2 mb-4">${r.poles.map((id) => `<span class="tag-ed">${escA(poleById(id).title)}</span>`).join("")}</div>
          ${r.url ? `<a class="btn btn-gold" href="${r.url}" target="_blank" rel="noopener">${tr("Visiter", "Visit")} ${escA(host(r.url))} <i class="bi bi-arrow-up-right ms-1"></i></a>` : `<span class="btn btn-ghost disabled" aria-disabled="true"><i class="bi bi-hourglass-split me-1"></i> ${tr("Lien bientôt disponible", "Link coming soon")}</span>`}
        </div>
      </article>`;
    }).join("");
  });
}

/** Domaines d'intervention. */
function renderDomains() {
  document.querySelectorAll("[data-domains]").forEach((root) => {
    root.innerHTML = DOMAINS.map(
      ([icon, label]) => `
      <div class="domain reveal"><i class="bi ${icon}"></i><span class="small-label">${tr("Domaine", "Sector")}</span><strong>${escA(label)}</strong></div>`,
    ).join("");
  });
}

/** Méthodologie : frise verticale dont la ligne dorée avance au défilement. */
function renderMethod() {
  document.querySelectorAll("[data-method]").forEach((root) => {
    root.innerHTML = `<span class="method-line"><span></span></span>` +
      METHOD.map(
        (m, i) => `
        <div class="mstep reveal">
          <span class="mdot"></span>
          <span class="mnum">${pad(i + 1)}</span>
          <div>
            <h3 class="font-display h4 text-cream mb-2">${escA(m.t)}</h3>
            <p class="text-soft mb-2">${escA(m.d)}</p>
            <span class="mout"><i class="bi bi-box-seam me-1"></i>${escA(m.out)}</span>
          </div>
        </div>`,
      ).join("");
    const fill = root.querySelector(".method-line span");
    const update = () => {
      const r = root.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      fill.style.height = `${p * 100}%`;
      root.querySelectorAll(".mstep").forEach((s) => s.classList.toggle("lit", s.getBoundingClientRect().top < window.innerHeight * 0.6));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  });
}

/** Portfolio filtrable par pôle. */
function renderPortfolio() {
  const grid = document.getElementById("works");
  if (!grid) return;
  const filters = document.getElementById("work-filters");
  let current = new URLSearchParams(location.search).get("pole") || "all";
  if (current !== "all" && !poleById(current)) current = "all";
  filters.innerHTML = [["all", tr("Tout", "All")], ...POLES.map((p) => [p.id, p.title])]
    .map(([id, label]) => `<button type="button" class="tab-ed" data-work="${id}">${escA(label)}</button>`)
    .join("");
  const draw = () => {
    filters.querySelectorAll("[data-work]").forEach((b) => b.classList.toggle("active", b.dataset.work === current));
    const list = WORKS.filter((w) => current === "all" || w.poles.includes(current));
    grid.innerHTML = list
      .map(
        (w, i) => `
      <article class="work reveal">
        <div class="work-ph"><img src="assets/img/${w.photo}" alt="" loading="lazy">
          <span class="work-badge ${w.real ? "real" : ""}">${w.real ? `<i class="bi bi-patch-check-fill me-1"></i>${tr("Réalisation Jongoma", "Built by Jongoma")}` : tr("Projet type", "Sample project")}</span></div>
        <div class="work-body">
          <p class="small-label mb-2">${escA(w.domain)}</p>
          <h3 class="font-display h5 text-cream">${escA(w.title)}</h3>
          <p class="small text-soft">${escA(w.text)}</p>
          <div class="d-flex flex-wrap gap-1 mb-3">${w.poles.map((id) => `<span class="tag-ed">${escA(poleById(id).title)}</span>`).join("")}</div>
          ${w.soon ? `<span class="link-gold opacity-75"><i class="bi bi-hourglass-split me-1"></i>${tr("Bientôt en ligne", "Coming online soon")}</span>` : w.link ? (w.link.startsWith("http") ? `<a class="link-gold" href="${w.link}" target="_blank" rel="noopener">${tr("Visiter le site", "Visit the site")} <i class="bi bi-box-arrow-up-right"></i></a>` : `<a class="link-gold" href="${page(w.link)}">${tr("Voir", "View")} <i class="bi bi-arrow-right"></i></a>`) : `<a class="link-gold" href="${page("projet.html")}?pole=${w.poles[0]}">${tr("Un projet similaire ?", "A similar project?")} <i class="bi bi-arrow-right"></i></a>`}
        </div>
      </article>`,
      )
      .join("");
    observeReveals();
  };
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("[data-work]");
    if (!b) return;
    current = b.dataset.work;
    draw();
  });
  draw();
}

/** Ressources : filtre par type, lecture dans une fenêtre. */
function renderResources() {
  const grid = document.getElementById("resources");
  if (!grid) return;
  const filters = document.getElementById("res-filters");
  const ALL = tr("Tout", "All");
  const types = [ALL, ...new Set(RESOURCES.map((r) => r.type))];
  let current = ALL;
  filters.innerHTML = types.map((t) => `<button type="button" class="tab-ed" data-type="${t}">${t}</button>`).join("");
  const draw = () => {
    filters.querySelectorAll("[data-type]").forEach((b) => b.classList.toggle("active", b.dataset.type === current));
    grid.innerHTML = RESOURCES.filter((r) => current === ALL || r.type === current)
      .map(
        (r) => `
      <div class="col-md-6 col-lg-4">
        <button type="button" class="res reveal" ${r.soon ? "disabled" : `data-res="${r.id}"`}>
          <span class="res-top"><span class="res-icon"><i class="bi ${r.icon}"></i></span><span class="tag-ed">${r.type}</span></span>
          <strong class="font-display fs-5 text-cream d-block mt-4">${escA(r.title)}</strong>
          <span class="small text-soft d-block mt-2">${escA(r.desc)}</span>
          <span class="link-gold mt-auto pt-3">${r.soon ? tr("Bientôt disponible", "Coming soon") : `${tr("Lire", "Read")} <i class="bi bi-arrow-right"></i>`}</span>
        </button>
      </div>`,
      )
      .join("");
    observeReveals();
  };
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("[data-type]");
    if (!b) return;
    current = b.dataset.type;
    draw();
  });
  const modalEl = document.getElementById("resModal");
  const modal = new bootstrap.Modal(modalEl);
  grid.addEventListener("click", (e) => {
    const b = e.target.closest("[data-res]");
    if (!b) return;
    const r = RESOURCES.find((x) => x.id === b.dataset.res);
    modalEl.querySelector(".modal-content").innerHTML = `
      <div class="modal-header border-0 pb-0">
        <div><span class="badge rounded-pill text-bg-primary">${r.type}</span><h2 class="modal-title h3 mt-2 font-display">${escA(r.title)}</h2></div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="${tr("Fermer", "Close")}"></button>
      </div>
      <div class="modal-body res-body">${r.body}</div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-soft" onclick="window.print()"><i class="bi bi-printer me-1"></i>${tr("Imprimer", "Print")}</button>
        ${r.cta ? `<a class="btn btn-primary" href="${page(r.cta[0])}">${r.cta[1]} <i class="bi bi-arrow-right ms-1"></i></a>` : ""}
      </div>`;
    modal.show();
  });
  draw();
}

/** Blog : liste des articles, ou un article si l'adresse contient ?article=… */
function renderBlog() {
  const root = document.getElementById("blog");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("article");
  const post = POSTS.find((p) => p.slug === slug);
  const card = (p) => `
    <a class="post reveal" href="${page("blog.html")}?article=${p.slug}">
      <span class="post-ph"><img src="assets/img/${p.photo}" alt="" loading="lazy"></span>
      <span class="d-flex gap-2 align-items-center small mt-3"><span class="tag-ed">${escA(p.cat)}</span><span class="text-soft">${p.read} ${tr("min de lecture", "min read")}</span></span>
      <strong class="font-display fs-5 text-cream d-block mt-2">${escA(p.title)}</strong>
      <span class="small text-soft d-block mt-2">${escA(p.excerpt)}</span>
    </a>`;

  if (!post) {
    const ALLC = tr("Tous", "All");
    const cats = [ALLC, ...new Set(POSTS.map((p) => p.cat))];
    let current = ALLC;
    const [first, ...rest] = POSTS;
    root.innerHTML = `
      <a class="post-feature reveal" href="${page("blog.html")}?article=${first.slug}">
        <span class="post-ph"><img src="assets/img/${first.photo}" alt=""></span>
        <span class="p-4 p-lg-5 d-flex flex-column justify-content-center">
          <span class="kicker mb-3">${tr("À la une", "Featured")}</span>
          <strong class="display-ed text-cream" style="font-size:clamp(1.7rem,3vw,2.6rem)">${escA(first.title)}</strong>
          <span class="text-soft mt-3">${escA(first.excerpt)}</span>
          <span class="link-gold mt-4">${tr("Lire l'article", "Read the article")} <i class="bi bi-arrow-right"></i></span>
        </span>
      </a>
      <div class="d-flex flex-wrap gap-2 tabs-ed my-5" id="blog-cats">${cats.map((c) => `<button type="button" class="tab-ed" data-cat="${c}">${c}</button>`).join("")}</div>
      <div class="row g-4" id="blog-list"></div>`;
    const draw = () => {
      root.querySelectorAll("[data-cat]").forEach((b) => b.classList.toggle("active", b.dataset.cat === current));
      root.querySelector("#blog-list").innerHTML = (current === ALLC ? rest : POSTS.filter((p) => p.cat === current))
        .map((p) => `<div class="col-md-6 col-lg-4">${card(p)}</div>`)
        .join("");
      observeReveals();
    };
    root.querySelector("#blog-cats").addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]");
      if (!b) return;
      current = b.dataset.cat;
      draw();
    });
    draw();
    return;
  }

  document.title = `${post.title} — Blog Jongoma Tech`;
  document.querySelector("[data-blog-hero]")?.remove();
  document.body.classList.add("nav-solid"); // plus d'en-tête sombre derrière le menu
  root.closest("section").style.setProperty("padding-top", "9rem", "important");
  const others = POSTS.filter((p) => p !== post).slice(0, 3);
  root.innerHTML = `
    <article class="article mx-auto">
      <a href="${page("blog.html")}" class="link-gold small"><i class="bi bi-arrow-left"></i> ${tr("Tous les articles", "All articles")}</a>
      <p class="d-flex gap-2 align-items-center small mt-4 mb-3"><span class="tag-ed">${escA(post.cat)}</span><span class="text-soft">${post.read} ${tr("min de lecture · L'équipe Jongoma", "min read · The Jongoma team")}</span></p>
      <h1 class="display-ed text-cream" style="font-size:clamp(2rem,4.5vw,3.4rem)">${escA(post.title)}</h1>
      <p class="fs-5 text-soft mt-3">${escA(post.excerpt)}</p>
      <div class="arch-wide my-5"><img src="assets/img/${post.photo}" alt=""></div>
      ${post.body.map((b) => (Array.isArray(b) ? `<h2 class="font-display h4 text-cream mt-5 mb-3">${escA(b[1])}</h2>` : `<p>${escA(b)}</p>`)).join("")}
      <div class="share mt-5 pt-4 d-flex flex-wrap align-items-center gap-2">
        <span class="small text-soft me-2">${tr("Partager", "Share")}</span>
        <a class="share-btn" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`${post.title} ${location.href}`)}" aria-label="${tr("Partager sur", "Share on")} WhatsApp"><i class="bi bi-whatsapp"></i></a>
        <a class="share-btn" target="_blank" rel="noopener" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}" aria-label="${tr("Partager sur", "Share on")} LinkedIn"><i class="bi bi-linkedin"></i></a>
        <button class="share-btn" type="button" data-copy aria-label="${tr("Copier le lien", "Copy link")}"><i class="bi bi-link-45deg"></i></button>
      </div>
    </article>
    <div class="mt-5 pt-5">
      <p class="kicker mb-4">${tr("À lire aussi", "Read next")}</p>
      <div class="row g-4">${others.map((p) => `<div class="col-md-4">${card(p)}</div>`).join("")}</div>
    </div>`;
  root.querySelector("[data-copy]").addEventListener("click", (e) => {
    navigator.clipboard?.writeText(location.href);
    e.currentTarget.innerHTML = '<i class="bi bi-check-lg"></i>';
  });
  observeReveals();
}

/** Formulaire « J'ai un projet » : résumé en direct, puis demande sur la plateforme. */
function wireProjectForm() {
  const form = document.getElementById("project-form");
  if (!form) return;
  const poleBox = document.getElementById("pf-poles");
  poleBox.innerHTML = POLES.map(
    (p) => `<label class="pick"><input type="checkbox" name="poles" value="${p.id}"><span><i class="bi ${p.icon}"></i>${escA(p.title)}</span></label>`,
  ).join("");
  const domain = document.getElementById("pf-domain");
  DOMAINS.forEach(([, label]) => domain.append(new Option(label, label)));
  const preset = new URLSearchParams(location.search).get("pole");
  if (preset) poleBox.querySelector(`input[value="${CSS.escape(preset)}"]`)?.setAttribute("checked", "");

  const summary = document.getElementById("pf-summary");
  const compose = () => {
    const d = new FormData(form);
    const poles = d.getAll("poles").map((id) => poleById(id).title);
    const lines = [
      `[${tr("Projet", "Project")}] ${d.get("description") || ""}`.trim(),
      poles.length ? `${tr("Type", "Type")}${tr(" :", ":")} ${poles.join(", ")}` : "",
      d.get("domain") ? `${tr("Domaine", "Sector")}${tr(" :", ":")} ${d.get("domain")}` : "",
      d.get("when") ? `${tr("Délai", "Timing")}${tr(" :", ":")} ${d.get("when")}` : "",
      d.get("budget") ? `Budget : ${d.get("budget")}` : "",
      d.get("org") ? `${tr("Organisation", "Organisation")}${tr(" :", ":")} ${d.get("org")}` : "",
      d.get("name") ? `Contact${tr(" :", ":")} ${d.get("name")}${d.get("email") ? ` · ${d.get("email")}` : ""}` : "",
    ].filter(Boolean);
    return { poles, lines };
  };
  const refresh = () => {
    const { poles, lines } = compose();
    summary.innerHTML = lines.length > 1 || poles.length
      ? `<ul class="list-unstyled d-grid gap-2 mb-0">${lines.map((l) => `<li><i class="bi bi-check2 text-gold-light me-2"></i>${escA(l)}</li>`).join("")}</ul>`
      : `<p class="text-soft mb-0">${tr("Votre résumé s'affichera ici au fur et à mesure.", "Your summary will appear here as you go.")}</p>`;
  };
  form.addEventListener("input", refresh);
  form.addEventListener("change", refresh);
  refresh();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const params = new URLSearchParams({ besoin: compose().lines.join("\n") });
    window.location.href = platform(`/demande?${params}`);
  });
}

/** Formulaire « Devenez notre partenaire » : la proposition s'ouvre sur la plateforme, déjà rédigée. */
const PARTNER_TYPES = window.JG_EN?.PARTNER_TYPES || [
  ["bi-bank", "Bailleur / fondation"],
  ["bi-building", "Entreprise / RSE"],
  ["bi-globe2", "ONG / institution"],
  ["bi-cpu", "Partenaire technologique"],
  ["bi-mortarboard", "École / université"],
  ["bi-megaphone", "Média / événement"],
];
function wirePartnerForm() {
  const form = document.getElementById("partner-form");
  if (!form) return;
  form.querySelector("#pt-types").innerHTML = PARTNER_TYPES.map(
    ([icon, label], i) => `<label class="pt-chip"><input type="radio" name="type" value="${escA(label)}" ${i === 0 ? "checked" : ""}><span><i class="bi ${icon}"></i>${escA(label)}</span></label>`,
  ).join("");
  const error = form.querySelector(".partner-error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      error.hidden = false;
      error.textContent = tr("Merci de remplir les champs marqués d'un astérisque et d'accepter la mention.", "Please fill in the fields marked with an asterisk and accept the notice.");
      return;
    }
    error.hidden = true;
    const d = new FormData(form);
    const line = (label, key) => (d.get(key) ? `${label}${tr(" :", ":")} ${String(d.get(key)).trim()}` : "");
    const besoin = [
      `[${tr("Partenariat", "Partnership")}] ${d.get("type")}`,
      String(d.get("message")).trim(),
      line("Organisation", "org"),
      `Contact${tr(" :", ":")} ${d.get("name")}${d.get("role") ? `, ${d.get("role")}` : ""}`,
      line(tr("Pays", "Country"), "country"),
      line("E-mail", "email"),
      line(tr("Téléphone", "Phone"), "phone"),
    ].filter(Boolean).join("\n");
    window.location.href = platform(`/demande?${new URLSearchParams({ besoin })}`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPoles();
  renderRealisations();
  renderDomains();
  renderMethod();
  renderPortfolio();
  renderResources();
  renderBlog();
  wireProjectForm();
  wirePartnerForm();
  observeReveals();
});
