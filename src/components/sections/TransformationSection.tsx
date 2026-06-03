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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/reflexion.svg"
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute -bottom-14 -right-10 w-80 md:w-[400px] pointer-events-none select-none"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/grande_3.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[35%] opacity-[0.12] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
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

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Définition PNL */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <div>
                <p className="font-script text-dusty-rose text-2xl md:text-3xl mb-3">
                  La PNL, c&apos;est quoi ?
                </p>
                <p className="font-sans text-base text-mid-brown leading-relaxed">
                  La{" "}
                  <strong className="text-dark-brown font-medium">
                    Programmation Neuro-Linguistique
                  </strong>{" "}
                  est une approche qui explore le lien entre tes pensées, tes
                  émotions et tes comportements.
                </p>
              </div>
              <p className="font-sans text-base text-mid-brown leading-relaxed">
                Elle permet de repérer les schémas mentaux qui te freinent
                (comme la procrastination, le doute ou la surcharge) et de les
                transformer en douceur, sans forcer.
              </p>
              <p className="font-sans text-base text-mid-brown leading-relaxed">
                Pas de recette miracle. Juste une meilleure compréhension de{" "}
                <em>toi</em>, pour avancer avec plus de clarté et moins de
                résistance.
              </p>
            </motion.div>

            {/* Liste avant / après */}
            <motion.div variants={staggerContainer} className="space-y-3">
              {transformations.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-warm-beige rounded-xl px-4 py-3 border border-light-beige/60"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs text-mid-brown/60 uppercase tracking-wide mb-0.5">
                      Avant
                    </p>
                    <p className="font-sans text-sm text-mid-brown line-through decoration-dusty-rose/60">
                      {t.before}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-dusty-rose flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs text-warm-brown uppercase tracking-wide mb-0.5">
                      Vers
                    </p>
                    <p className="font-serif text-[0.9375rem] text-dark-brown font-medium">
                      {t.after}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
