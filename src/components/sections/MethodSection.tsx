"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  { number: "01", title: "Clarifier ce qui bloque", description: "On met des mots sur ce qui te freine vraiment, sans jugement, sans pression." },
  { number: "02", title: "Identifier les schémas", description: "Grâce à la PNL, on repère ensemble les patterns de procrastination qui se répètent." },
  { number: "03", title: "Reconnecter tes objectifs", description: "On clarifie ce que tu veux vraiment et on redonne du sens à l'action." },
  { number: "04", title: "Avancer avec douceur", description: "Un plan simple, réaliste et adapté à ta réalité, pas à un idéal inaccessible." },
];

export function MethodSection() {
  return (
    <section className="relative py-20 md:py-28 bg-warm-beige overflow-hidden" aria-labelledby="method-heading">

      {/* Illustration femme — yoga, gauche centre */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/yoga.svg" alt="" aria-hidden="true"
        className="hidden sm:block absolute -left-12 top-1/2 -translate-y-1/2 w-64 md:w-80 pointer-events-none select-none" />
      <BlurBlobs variant="beige" />

      {/* Grande illustration de fond — grande_1, droite */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/grande_1.svg" alt="" aria-hidden="true"
        className="hidden sm:block absolute right-0 top-0 h-full w-auto max-w-[35%] opacity-[0.12] pointer-events-none select-none" />

      {/* Feuilles */}



      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading tag="Ma méthode" title="Comment on avance ensemble" subtitle="Pas de formule magique. Un processus humain, adapté à toi." />
          <motion.div variants={staggerContainer} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-light-beige z-0" aria-hidden="true" />
            {steps.map((step, i) => (
              <motion.div key={step.number} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 rounded-full bg-warm-brown flex items-center justify-center mb-5 shadow-soft flex-shrink-0">
                  <span className="font-serif text-off-white text-xl">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-brown mb-3 leading-snug">{step.title}</h3>
                <p className="font-sans text-sm text-mid-brown leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && <div className="lg:hidden mt-4 text-warm-brown text-2xl" aria-hidden="true">↓</div>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
