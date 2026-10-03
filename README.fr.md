# Premium Market

[🇬🇧 English](README.md) | **🇫🇷 Français**


Version premium / allégée de la marketplace NRJ.

Catalogue public + panneau admin, panier, favoris, recherche et commande WhatsApp.

**Live :** https://premium-market-steel.vercel.app

---

## Stack

- **Frontend** : Vite 5, HTML/CSS/JS vanilla (modules ES)
- **Backend** : Supabase
- **Déploiement** : Vercel
- **PWA** : Service Worker + Web Manifest

---

## Structure du projet

```
├── index.html              → Catalogue public
├── admin.html              → Panneau admin (login + gestion produits)
├── vite.config.js
├── package.json
│
├── public/
│   ├── icon-*.png / icon.svg
│   ├── manifest.webmanifest
│   └── sw.js                 → Service Worker
│
├── src/
│   ├── css/
│   │   ├── base.css
│   │   ├── main.css            → importe tous les styles du catalogue
│   │   ├── admin.css
│   │   ├── search-bar.css
│   │   ├── filters.css
│   │   ├── product-card.css
│   │   ├── product-modal.css
│   │   ├── navigation.css
│   │   ├── cart-admin.css
│   │   ├── search-view.css
│   │   └── skeleton.css
│   │
│   └── js/
│       ├── config.js           → constantes + client Supabase
│       ├── state.js            → état global (produits, panier, favoris…)
│       ├── utils.js            → helpers (format, recherche floue, escape…)
│       ├── api.js              → appels Supabase
│       ├── db.js               → couche données locale
│       ├── cart.js             → panier, favoris, badges, commande WhatsApp
│       ├── catalogue.js        → grille produits, pagination, catégories
│       ├── search.js           → dropdown recherche + recherche vocale
│       ├── search-view.js      → page de recherche dédiée
│       ├── product-modal.js    → modale détail produit
│       ├── product-edit.js     → édition rapide (crayon)
│       ├── visual-search.js    → recherche par image
│       ├── reco.js             → recommandations
│       ├── lazy-loading.js
│       ├── sync.js             → synchronisation auto
│       ├── admin.js            → logique admin
│       ├── main.js             → point d’entrée catalogue
│       └── admin-main.js       → point d’entrée admin
│
└── scripts/
    ├── sync_to_gdrive.py
    └── sync_to_notion.py
```

---

## Démarrage local

```bash
npm install
npm run dev          # http://localhost:5173
```

### Scripts disponibles

| Commande          | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Serveur de développement (hot-reload)    |
| `npm run build`   | Build de production → `dist/`            |
| `npm run preview` | Prévisualiser le build localement        |

---

## Build & Déploiement

```bash
npm run build
```

Le projet est configuré pour **Vercel** (`base: '/'`).

- Push sur `main` → déploiement automatique
- Les fichiers `index.html` et `admin.html` sont tous les deux inclus dans le build

---

## Fonctionnalités principales

- Catalogue avec filtres, catégories et pagination infinie
- Recherche texte + vocale + **recherche visuelle**
- Panier + favoris persistants (localStorage)
- Commande envoyée directement sur WhatsApp
- Compte client (historique commandes, favoris…)
- Mode admin (ajout / modification / suppression produits)
- Thème clair / sombre
- PWA installable + mode hors-ligne (Service Worker)
- Scripts de synchronisation Google Drive et Notion

---

## Différences avec nrj-marketplace

Cette version est plus légère :
- Pas de chat intégré
- Pas d’Edge Function IA
- Moins de thèmes CSS
- Pas de route API Open Graph
- Dépendances plus minimales

---

## Notes techniques

- Client Supabase importé via npm (`@supabase/supabase-js`)
- Code-splitting des vendors (chunk `supabase`)
- Precache automatique des assets hashés via plugin Vite + Service Worker
- Long-press sur le logo → accès admin
