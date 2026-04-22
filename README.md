# public-info-gripe-site

> **Independent public-interest / gripe-site template**  
> Managed by Harmony Resource Hub Alberta Inc. — April 4, 2026

---

## What this repository is

A ready-to-deploy, GitHub Pages–compatible static website template for
publishing an independent public-interest information notice (commonly called
a "gripe site"). The design is conservative, factual, and professionally
presented. The site:

- Makes clear it is **not affiliated with** any company discussed
- States it is **not** a login portal, product page, or official company site
- Documents a firm **publication policy** (what will and will not be published)
- Provides structured sections for Notice, Purpose, Status, Timeline,
  Evidence Policy, Editorial Position, and Contact
- Is managed by **Harmony Resource Hub Alberta Inc.**

All content in `index.html` currently contains `[PLACEHOLDER …]` markers.
Replace them with verified, documented factual content before going live.

---

## File structure

```
public-info-gripe-site/
├── index.html          ← Single-page homepage (all content lives here)
├── assets/
│   ├── styles.css      ← All visual styles (no external CSS dependencies)
│   └── main.js         ← Minimal JS: scroll-reveal, language switcher, year
├── README.md           ← This file
├── robots.txt          ← Allows full search-engine indexing
├── .gitignore          ← Excludes secrets, OS files, build artefacts
└── .nojekyll           ← Tells GitHub Pages to serve files as-is (no Jekyll)
```

No build tools, no package manager, no node_modules. Open `index.html`
directly in a browser to preview.

---

## How to deploy on GitHub Pages

1. Create a new **public** repository named `public-info-gripe-site`
   (or any name you prefer).
2. Upload / push all files in this folder to the `main` branch.
3. Go to **Settings → Pages → Source**, select `main` branch, root `/`.
4. GitHub Pages will serve your site at  
   `https://<your-username>.github.io/public-info-gripe-site/`

The `.nojekyll` file ensures GitHub Pages serves the static HTML directly
without attempting Jekyll processing.

---

## How to replace placeholders

Search for the string `[PLACEHOLDER` in `index.html`. Each occurrence is
marked with guidance about what factual content should go there.

| Placeholder location | What to replace it with |
|---|---|
| `§ 1 Notice` | Concise statement of the specific concern |
| `§ 2 Purpose` | Why this site exists; what accountability goal it serves |
| `§ 3 Current Status` | Present state (complaints filed, proceedings, etc.) |
| `§ 4 Timeline` | Chronological, sourced events with accurate dates |
| `§ 5 Evidence Policy` | Summary of evidence categories you hold |
| `§ 6 Editorial Position` | Your stated position and correction policy |
| `[Law Firm Name, if applicable]` | Name of legal counsel, or remove the line |

**Before publishing any factual allegation**, confirm it is:
- Supported by documentary evidence you hold
- Reviewed by qualified legal counsel
- Free of private personal information about uninvolved third parties
- Not subject to a publication ban or court order

---

## Language switcher

The top bar includes EN / FR / 中文 buttons wired to `main.js`. Currently
only English content exists. To add a French or Chinese version:

1. Duplicate the content sections in `index.html`
2. Add `data-lang="fr"` (or `"zh"`) attributes to those elements
3. Update the JS in `main.js` to show/hide sections by lang attribute

---

## Customisation notes

- **Colours and fonts**: all controlled by CSS custom properties at the top
  of `assets/styles.css`. Change `--navy`, `--amber`, etc. to retheme.
- **Fonts**: loaded from Google Fonts CDN in `styles.css`. Replace the
  `@import` with local font files for a fully offline/CDN-free build.
- **Contact email**: update `Admin@Harmonyresourcehub.ca` throughout
  `index.html` if the contact address changes.
- **Status badge**: change `pending` to `active` (class on `.status-badge`)
  once the matter is active/resolved.

---

## Legal notice

This template is provided for lawful public-interest expression. The operator
is solely responsible for all content published using this template. Nothing
in this repository constitutes legal advice.

**Managed by:** Harmony Resource Hub Alberta Inc.  
**Contact:** Admin@Harmonyresourcehub.ca  
**Established:** April 4, 2026
