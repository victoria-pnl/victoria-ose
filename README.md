# Victoria Coach PNL — Programme OSE

Landing page du programme d'accompagnement **OSE** de Victoria Puttemans, coach PNL.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev) — icônes
- TypeScript

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le build de production |
| `npm run lint` | Linter ESLint |

## Configuration centrale

Tout ce qui peut changer (prix, liens Stripe, Calendly, WhatsApp, réseaux sociaux) se trouve dans un seul fichier :

```
src/config/site.ts
```

C'est le seul fichier à modifier pour mettre à jour ces données sans toucher aux composants.

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout racine (métadonnées, fonts)
│   ├── page.tsx            # Page principale (ordre des sections)
│   └── globals.css         # Styles globaux
├── components/
│   ├── sections/           # Sections de la page (Hero, Offer, FAQ…)
│   └── ui/                 # Composants réutilisables (CTAButton, SectionHeading…)
├── config/
│   └── site.ts             # Toutes les données configurables
└── lib/
    └── animations.ts       # Variantes Framer Motion partagées
```

## Design system

Les tokens de design (couleurs, typographie, espacements) sont documentés dans `design-system/`.
