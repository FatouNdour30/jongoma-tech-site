# Jongoma Tech — site vitrine (Bootstrap 5)

Site statique en HTML, CSS et JavaScript, sans outil de construction. Il présente Jongoma Tech et renvoie vers la **plateforme** (l'application Next.js à la racine du projet) pour tout ce qui demande un compte : faire une demande, suivre un dossier, la Communauté, les Discussions.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : quiz d'orientation, pôles « Ce que nous proposons », méthodologie, domaines d'intervention, services, plateforme |
| `qui-sommes-nous.html` | Nom, mission, vision, valeurs, modèle Pro / Impact, constat, méthodologie, engagements, questions fréquentes |
| `services.html` | Pôles d'expertise, méthodologie, domaines, puis le catalogue complet (filtres, recherche, fiche détaillée) |
| `portfolio.html` | Réalisations Jongoma et projets types, filtrables par pôle |
| `ressources.html` | Guides, fiches, modèles et checklists gratuits |
| `blog.html` | Articles ; `blog.html?article=…` affiche un article |
| `projet.html` | Formulaire « J'ai un projet » : le brief s'ouvre sur la plateforme |
| `plateforme.html` | Espace client, Communauté, Discussions |
| `a-propos.html`, `contact.html` | Anciennes adresses, redirigées vers `qui-sommes-nous.html` et `projet.html` |
| `index-v1.html` | Ancienne page d'accueil (claire), gardée pour comparaison |

Les pôles, domaines, étapes de méthode, projets du portfolio, ressources et articles se modifient dans `assets/js/agency.js`.

## Ouvrir le site

Double-cliquez sur `index.html`, ou servez le dossier :

```bash
npx serve site-bootstrap
```

## Relier le site à la plateforme

Dans `assets/js/main.js`, modifiez l'adresse de la plateforme :

```js
const JONGOMA_CONFIG = {
  platformUrl: "http://localhost:3000", // à remplacer par l'adresse en ligne, ex. https://app.jongoma.tech
  lang: "fr",
};
```

Tous les boutons « Espace client », « Faire une demande », « Créer mon compte » et les formulaires utilisent cette adresse.

## Mettre à jour le catalogue

`assets/js/data.js` est généré depuis `src/content/services.ts` et `src/content/service-details.ts`. Ne le modifiez pas à la main : modifiez les fichiers de la plateforme, puis régénérez-le (voir l'historique du projet, ou demandez à Claude de le refaire).

## Règles de contenu

- Aucun chiffre d'impact inventé : les nombres de services sont calculés depuis le catalogue.
- Les exemples de la page « La plateforme » (noms, dossiers, publication) sont signalés comme fictifs.
- Portfolio : seules les cartes « Réalisation Jongoma » sont de vrais projets. Les « Projets types » ne sont pas des références clients ; remplacez-les par de vraies études de cas, avec l'accord des clients.
- Les photos viennent d'Unsplash (crédits sur la plateforme, page Crédits photos).
