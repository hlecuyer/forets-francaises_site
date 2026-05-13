# Site Forêts françaises — code production

Vanilla HTML/CSS/JS. Pas de build step.

## Structure

```
docs/
├── index.html         # one-pager complet, 7 sections
├── styles.css         # design system + composants
├── script.js          # interactivité (lightbox, expand, scroll, hero video)
├── assets/            # images (compressées)
└── README.md          # ce fichier
```

## Développement local

```bash
cd docs/
python3 -m http.server 8765
# Ouvrir http://localhost:8765
```

## Choix techniques notables

- **Variante hero retenue** : A (Plein cadre forêt) avec **vidéo Vimeo en fond + mitigations** :
  - Image `hero-forest-top.jpg` chargée par défaut (LCP)
  - Vidéo Vimeo iframe injectée par JS après `load` si conditions OK : desktop ≥ 900px, pas de `prefers-reduced-motion`, pas mobile UA, pas de `Save-Data`, connexion ≥ 4G
  - Sinon : image fixe — pas de pénalité perf sur mobile/connexion lente
- **Pas de bundler, pas de framework** — adapté à la complexité (one-pager statique)
- **Polices Google Fonts** chargées avec `preconnect` (Newsreader serif + IBM Plex Sans + JetBrains Mono)
- **OKLCH** pour les couleurs (supporté Chrome 111+, Safari 15.4+, Firefox 113+)
- **Lightbox Vimeo** pour la bande-annonce (Echap pour fermer, focus trap basique)
- **IntersectionObserver** pour fade-in au scroll
- **Mailto** prérempli pour le CTA principal

## Assets

| Fichier | Taille | Usage |
|---|---|---|
| `hero-forest-top.jpg` | 57 K | Hero background (image), 2000×406 |
| `visuel.jpg` | 152 K | Gallery item lg (affiche) + OG image |
| `visuel-docu.jpg` | 171 K | Gallery item md (4 stills) |
| `film-still-01..04.jpg` | 150-220 K | Gallery items + Camille terrain/ciné-débat |

Toutes les images optimisées via ImageMagick (jpg q78-80, strip metadata, interlace).

## Déploiement Vercel

Drag-and-drop du dossier `docs/` dans le dashboard Vercel, ou :

```bash
npx vercel --prod
```

Configuration : aucune nécessaire, Vercel détecte un site statique.

## TODO avant livraison Camille

- [ ] Remplir les mentions légales (actuellement placeholder alert JS)
- [ ] QA selon checklist `framework-presta/checklists/qa-livraison.md`
- [ ] Tester sur iOS Safari (autoplay vidéo bloqué ? fallback image OK ?)
- [ ] Lighthouse score >= 80 perf, >= 90 a11y/seo
- [ ] Vérifier que la vidéo Vimeo en fond ne déclenche pas de console errors
- [ ] Choisir extension domaine + acheter (au nom Camille)
- [ ] Valider avec Camille la version (variante hero, copy, photos)

## Notes pour modifs faciles

- **Changer la variante hero** : modifier le markup `<section class="hero">` en s'inspirant de `handoff/camille-3/project/hero.jsx` (variants A/B/C)
- **Désactiver la vidéo en fond** : commenter le bloc `injectHeroVideo` dans `script.js`
- **Changer le mail de contact** : 2 endroits → `index.html` (.email + a.href) et `script.js` (MAILTO_URL)
- **Modifier les couleurs accent** : variables CSS `--fir`, `--fir-deep`, `--earth` dans `styles.css:5-20`
