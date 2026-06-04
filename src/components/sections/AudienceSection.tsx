"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArchCard } from "@/components/ui/ArchCard";
import { staggerContainer } from "@/lib/animations";

const profiles = [
  { title: "Tu te sens constamment débordée", description: "Les journées filent et tu as l'impression de courir après tout sans jamais vraiment avancer." },
  { title: "Tu repousses au lendemain", description: "Tu sais ce que tu dois faire, mais le moment de commencer n'arrive jamais vraiment." },
  { title: "Tu as plein d'idées… mais peu d'action", description: "Les projets s'accumulent dans ta tête. Tu réfléchis beaucoup, tu avances peu." },
  { title: "Tu veux reprendre ta place", description: "Tu sens que tu t'es perdue en chemin. Tu veux retrouver ton énergie, ta direction, toi." },
];

export function AudienceSection() {
  return (
    <section className="relative py-20 md:py-28 bg-warm-beige overflow-hidden" aria-labelledby="audience-heading">

      {/* Grande illustration de fond — grande_4, gauche bas */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/grande_4.svg" alt="" aria-hidden="true"
        className="absolute left-0 bottom-0 h-[80%] w-auto max-w-[35%] opacity-[0.12] pointer-events-none select-none" />
      <BlurBlobs variant="beige" />

      {/* Feuilles */}



      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading tag="Pour toi ?" title="OSE est fait pour toi si…" subtitle="Pas besoin d'être prête à 100 % pour commencer. Il suffit d'avoir envie de changer quelque chose." />
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profiles.map((p, i) => (
              <ArchCard key={i} number={`0${i + 1}`} title={p.title} description={p.description} variant="brown" />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
