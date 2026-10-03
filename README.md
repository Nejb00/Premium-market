# Premium Market

**🇬🇧 English** | [🇫🇷 Français](README.fr.md)

Premium / streamlined edition of the NRJ marketplace.

Public catalogue + admin panel, cart, favorites, search and WhatsApp ordering.

**Live:** https://premium-market-steel.vercel.app

---

## Stack

- **Frontend:** Vite 5, vanilla HTML/CSS/JS (ES modules)
- **Backend:** Supabase
- **Deployment:** Vercel
- **PWA:** Service Worker + Web Manifest

---

## Project structure

```
├── index.html              → Public catalogue
├── admin.html              → Admin panel (login + product management)
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
│   │   ├── main.css            → imports all catalogue styles
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
│       ├── config.js           → constants + Supabase client
│       ├── state.js            → global state (products, cart, favorites…)
│       ├── utils.js            → helpers (formatting, fuzzy search, escaping…)
│       ├── api.js              → Supabase calls
│       ├── db.js               → local data layer
│       ├── cart.js             → cart, favorites, badges, WhatsApp order
│       ├── catalogue.js        → product grid, pagination, categories
│       ├── search.js           → search dropdown + voice search
│       ├── search-view.js      → dedicated search page
│       ├── product-modal.js    → product detail modal
│       ├── product-edit.js     → quick edit (pencil)
│       ├── visual-search.js    → image-based search
│       ├── reco.js             → recommendations
│       ├── lazy-loading.js
│       ├── sync.js             → auto synchronization
│       ├── admin.js            → admin logic
│       ├── main.js             → catalogue entry point
│       └── admin-main.js       → admin entry point
│
└── scripts/
    ├── sync_to_gdrive.py
    └── sync_to_notion.py
```

---

## Local setup

```bash
npm install
npm run dev          # http://localhost:5173
```

### Available scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Development server (hot-reload)          |
| `npm run build`   | Production build → `dist/`               |
| `npm run preview` | Preview the build locally                |

---

## Build & Deployment

```bash
npm run build
```

The project is configured for **Vercel** (`base: '/'`).

- Push to `main` → automatic deployment
- Both `index.html` and `admin.html` are included in the build

---

## Key features

- Catalogue with filters, categories and infinite pagination
- Text search + voice search + **visual search**
- Persistent cart + favorites (localStorage)
- Order sent directly to WhatsApp
- Customer account (order history, favorites…)
- Admin mode (add / edit / delete products)
- Light / dark theme
- Installable PWA + offline mode (Service Worker)
- Google Drive and Notion synchronization scripts

---

## Differences from nrj-marketplace

This version is lighter:
- No built-in chat
- No AI Edge Function
- Fewer CSS themes
- No Open Graph API route
- Smaller dependencies

---

## Technical notes

- Supabase client imported via npm (`@supabase/supabase-js`)
- Vendor code-splitting (`supabase` chunk)
- Automatic precache of hashed assets via Vite plugin + Service Worker
- Long-press on the logo → admin access
