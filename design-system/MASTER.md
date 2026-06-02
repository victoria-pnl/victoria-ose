# Design System — Victoria OSE
> Source de vérité pour la landing page de l'accompagnement OSE.
> Inspiré de l'analyse des 22 screenshots Instagram @victoria.coachpnl.

---

**Projet :** Victoria OSE — Landing page coaching PNL
**Généré :** 2026-06-02
**Style :** Minimal éditorial · Slow living · Féminin doux

---

## Palette de couleurs

| Token Tailwind | Hex | Usage |
|---|---|---|
| `cream` | `#FAF7F2` | Background principal, fond sections |
| `warm-beige` | `#F0E9DF` | Fond sections alternées, fond cards |
| `light-beige` | `#E8DDD0` | Bordures, dividers, fond badges |
| `warm-brown` | `#7B5230` | CTA primaire, arches, accents forts |
| `dark-brown` | `#2C1A0E` | Texte principal, footer bg |
| `mid-brown` | `#A67C52` | Texte secondaire, icônes, sous-titres |
| `dusty-rose` | `#C9908A` | Tag Caveat, accents féminins, hover |
| `sage-green` | `#7A9685` | Accent nature (utilisation rare) |
| `muted-blue` | `#8BA5B3` | Accent froid (utilisation très rare) |
| `off-white` | `#FEFCFA` | Texte sur fond sombre, cartes légères |

**Contraste vérifié :** `dark-brown` (#2C1A0E) sur `cream` (#FAF7F2) → ratio ~15:1 ✓

---

## Typographie

| Rôle | Police | Google Fonts | Usage |
|---|---|---|---|
| Display / Titres | **Cormorant Garamond** | Oui | H1, H2, H3, citations |
| Corps | **Raleway** | Oui | Paragraphes, boutons, labels |
| Script accent | **Caveat** | Oui | Tags, détails décoratifs uniquement |

**Import Next.js :** via `next/font/google` dans `layout.tsx`

**Échelle typographique :**
- H1 : `text-5xl` → `text-7xl` (Cormorant, `font-serif`)
- H2 : `text-4xl` → `text-6xl` (Cormorant)
- H3 : `text-xl` → `text-2xl` (Cormorant)
- Body : `text-base` → `text-lg` (Raleway, line-height 1.6)
- Small : `text-sm` (Raleway)
- Script : `text-xl` → `text-2xl` (Caveat, color: dusty-rose)

---

## Style UI

**Inspiré par l'Instagram de Victoria :**
- Arches semi-circulaires (`border-radius: 50% 50% 1.5rem 1.5rem / 3rem 3rem 1.5rem 1.5rem`)
- Ombres douces, chaudes : `0 4-16px rgba(123,82,48, 0.08-0.16)`
- Fond principal très clair, crème
- Beaucoup d'espace blanc/beige entre les sections
- Texture grain subtile sur le body (CSS SVG noise, opacity 2.5%)
- Cards arrondies : `rounded-3xl` (24px)
- Boutons : `rounded-full`

---

## Animations (Framer Motion)

Tous les variants sont dans `src/lib/animations.ts` :

| Variant | Usage |
|---|---|
| `fadeInUp` | Apparition en montant (delay 0) |
| `fadeIn` | Simple fondu |
| `staggerContainer` | Conteneur pour entrées décalées (stagger 120ms) |
| `slideInLeft / Right` | Section about, split layout |
| `scaleIn` | Arch cards |

**Règles :**
- `whileInView` avec `viewport={{ once: true, amount: 0.2 }}`
- Duration : 0.5–0.7s, easing `[0.22, 1, 0.36, 1]`
- Hover sur cards : `y: -4` (translateY), pas de scale agressif
- Hover sur boutons : `scale: 1.02`
- `prefers-reduced-motion` : géré via CSS dans globals.css

---

## Composants

| Composant | Chemin | Notes |
|---|---|---|
| `CTAButton` | `components/ui/CTAButton.tsx` | variant: primary / outline / ghost |
| `SectionHeading` | `components/ui/SectionHeading.tsx` | prop tag (Caveat), title (serif), subtitle |
| `ArchCard` | `components/ui/ArchCard.tsx` | variant: brown / beige / cream |
| `StickyMobileCTA` | `components/ui/StickyMobileCTA.tsx` | Visible après 400px scroll, mobile only |

---

## Structure page

```
HeroSection       → cream bg, arch avatar, double CTA
ProblemSection    → warm-beige bg, 6 cards problèmes, citation
TransformationSection → cream bg, liste Avant → Vers
AudienceSection   → warm-beige bg, 4 ArchCards
ProgramContentSection → cream bg, 5 cards contenu
MethodSection     → warm-beige bg, 4 ArchCards numérotées
AboutSection      → cream bg, split photo + texte, citation
OfferSection      → warm-brown bg (inversé), offre + CTA
FAQSection        → cream bg, accordion Framer Motion
FooterSection     → dark-brown bg
StickyMobileCTA   → fixed bottom, md:hidden
```

---

## Configuration (site.ts)

Tous les liens et textes modifiables dans `src/config/site.ts` :
- `paymentUrl` → lien Stripe/SumUp de Victoria ⚠️
- `whatsappUrl` → numéro WhatsApp ⚠️
- `price` → prix définitif ⚠️
- `priceSubtitle` → mention sous le prix
- URLs réseaux sociaux

---

## Anti-patterns (à ne jamais faire)

- ❌ Gradient agressif (purple/pink SaaS)
- ❌ Design startup tech / dark mode par défaut
- ❌ Typographie 100% sans-serif (perd l'élégance)
- ❌ Couleurs trop saturées ou flashy
- ❌ Animations trop longues (> 400ms) ou trop nombreuses
- ❌ Emojis comme icônes → SVG Lucide uniquement
- ❌ Texte trop petit (< 16px body)
- ❌ Contrastes insuffisants (< 4.5:1)
- ❌ Horizontal scroll sur mobile

---

## Checklist pré-livraison

- [x] Palette custom Tailwind configurée
- [x] Fonts Cormorant + Raleway + Caveat via next/font
- [x] Build `npm run build` sans erreur
- [x] Animations Framer Motion avec `whileInView`
- [x] `prefers-reduced-motion` respecté (globals.css)
- [x] StickyMobileCTA masqué desktop
- [x] Tous les liens via `siteConfig`
- [ ] Vérifier rendu 375px / 768px / 1440px
- [ ] Remplacer placeholders photo Victoria
- [ ] Mettre à jour prix et lien paiement
