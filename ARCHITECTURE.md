# Architecture du projet

Site vitrine **Evently** : React 19 + Vite + Tailwind CSS v4.

## Arborescence

```
Evently-Website/
├── ARCHITECTURE.md          ← ce fichier
└── Evently-website/         ← l'application (lancer les commandes npm ici)
    ├── index.html           Page HTML d'entrée (chargement des polices Google Fonts)
    ├── package.json         Dépendances et scripts npm
    ├── vite.config.js       Config Vite (plugins React + Tailwind)
    ├── .oxlintrc.json       Règles du linter
    ├── public/              Fichiers servis tels quels, sans traitement
    └── src/
        ├── main.jsx         Point d'entrée JS : monte <App /> dans le DOM
        ├── App.jsx          Composant racine
        ├── index.css        Tailwind + design tokens (couleurs, polices, thèmes)
        ├── assets/
        │   ├── images/      Photos, images de contenu
        │   ├── visuals/     Visuels de la DA (ASCII / pixel art violet)
        │   ├── models/      Nuages de points 3D (.bin) de la scène d'accueil
        │   └── icons/       Icônes SVG (affichées avec le composant <Icon />)
        ├── components/
        │   ├── ui/          Petits composants réutilisables (Button, Tag, Card…)
        │   └── layout/      Morceaux de structure (Header, Footer, Nav…)
        ├── layouts/         Gabarits de page (ex. MainLayout = Header + contenu + Footer)
        ├── pages/           Une page = un fichier (Home, Events, Contact…)
        ├── hooks/           Hooks React personnalisés (useXxx)
        ├── utils/           Fonctions utilitaires sans React (formatage de dates…)
        └── data/            Données statiques (liste d'événements, textes…)
```

## Où ranger quoi ?

| Je crée… | Je le mets dans |
|---|---|
| Un bouton, un tag, une carte réutilisable | `src/components/ui/` |
| Le header, le footer, le menu | `src/components/layout/` |
| Une page complète | `src/pages/` |
| Un gabarit commun à plusieurs pages | `src/layouts/` |
| Une fonction `useQuelqueChose()` | `src/hooks/` |
| Une fonction JS pure | `src/utils/` |
| Un tableau/objet de contenu (JSON ou JS) | `src/data/` |
| Une image importée dans un composant | `src/assets/…` |
| Une icône SVG | `src/assets/icons/`, puis `<Icon src={…} />` (elle prend la couleur du texte) |
| Favicon, `robots.txt`, fichier à URL fixe | `public/` |

**`assets/` ou `public/` ?** Une image dans `src/assets/` s'importe dans le code (`import logo from '../assets/icons/logo.svg'`) et Vite l'optimise. Un fichier dans `public/` est copié tel quel et s'utilise par son chemin absolu (`/favicon.svg`).

## Conventions de nommage

- Composants et pages : `PascalCase.jsx` (`EventCard.jsx`, `Home.jsx`)
- Hooks : `camelCase.js` préfixé par `use` (`useScroll.js`)
- Utils et data : `camelCase.js` (`formatDate.js`, `events.js`)
- Dossiers : minuscules

## Styles

Tout le style passe par les classes Tailwind. Les design tokens sont définis dans [`src/index.css`](Evently-website/src/index.css) :

| Classe | Rôle | Sombre (défaut) | Clair |
|---|---|---|---|
| `bg-background` | Fond principal | #0A0316 | #FBF8FF |
| `bg-surface` / `border-surface` | Fond secondaire, bordures | #6F34B2 | #B287DE |
| `text-accent` | Accent / texte secondaire | #B287DE | #6F34B2 |
| `text-foreground` | Texte principal | #FBF8FF | #0A0316 |

- Le thème clair s'active avec `data-theme="light"` sur `<html>`.
- Polices : `font-title` (Readex Pro, titres) et `font-body` (Manrope, texte). Les `h1`–`h6` sont déjà en Readex Pro.
- Classes maison : `label` (capitales espacées pour catégories et menu) et `logo` (Readex Pro 600).
- Les couleurs brutes `night`, `deep`, `light`, `lavender` existent aussi, mais elles ne changent pas avec le thème : à réserver aux cas où la couleur doit rester fixe.

## Commandes

À lancer dans `Evently-website/` :

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement
npm run build    # build de production (dans dist/)
npm run lint     # vérifier le code
```
