"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const transformations = [
  {
    before: "Listes infinies qui paralysent",
    after: "Un plan simple et actionnable",
  },
  {
    before: "Tête surchargée en permanence",
    after: "Plus de clarté, moins de bruit mental",
  },
  {
    before: "Doute et comparaison constante",
    after: "Confiance retrouvée en toi",
  },
  {
    before: "Objectifs flous et inaccessibles",
    after: "Des objectifs réalistes, à ta mesure",
  },
  {
    before: "Procrastination en boucle",
    after: "Des petits pas qui font avancer",
  },
  {
    before: "L'impression de tout porter seule",
    after: "Un espace pour toi, rien que toi",
  },
];

export function TransformationSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
      aria-labelledby="transformation-heading"
    >
      <BlurBlobs variant="cream" />
      {/* Illustration femme — grande, bas droite */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/reflexion.svg"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-14 -right-10 w-80 md:w-[400px] pointer-events-none select-none"
      />

      {/* Grande illustration de fond — grande_3, gauche */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/grande_3.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[35%] opacity-[0.12] pointer-events-none select-none"
      />

      {/* Feuilles */}

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            tag="Ce que l'accompagnement change"
            title="Ce que tu vas retrouver"
            subtitle="Pas une transformation magique. Une progression douce, à ton rythme, vers une version de toi plus alignée."
          />
          <motion.div variants={staggerContainer} className="space-y-4">
            {transformations.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-warm-beige rounded-2xl px-6 py-5 border border-light-beige/60"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm text-mid-brown/70 mb-0.5 uppercase tracking-wide">
                    Avant
                  </p>
                  <p className="font-sans text-base text-mid-brown line-through decoration-dusty-rose/60">
                    {t.before}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-dusty-rose flex-shrink-0 hidden sm:block"
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm text-warm-brown mb-0.5 uppercase tracking-wide">
                    Vers
                  </p>
                  <p className="font-serif text-lg text-dark-brown font-medium">
                    {t.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
