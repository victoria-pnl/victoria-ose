"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { Brain, Clock, Target, Heart, Layers, MoveRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const problems = [
  { icon: Clock, title: "Tu repousses tout au lendemain", desc: "Les tâches s'accumulent, la liste ne raccourcit jamais, et tu te sens toujours en retard sur toi-même." },
  { icon: Brain, title: "Ta tête est constamment pleine", desc: "La charge mentale est épuisante. Tu penses à tout, tu gères tout, mais tu avances peu." },
  { icon: Layers, title: "L'organisation te résiste", desc: "Tu essaies des méthodes, des planners, des apps rien ne tient sur la durée." },
  { icon: Heart, title: "La confiance n'est plus là", desc: "Tu doutes de toi, tu te compares, tu attends d'être « prête » pour commencer." },
  { icon: Target, title: "Tes objectifs restent flous", desc: "Tu sais que tu veux autre chose, mais tu n'arrives pas à nommer ce que c'est vraiment." },
  { icon: MoveRight, title: "Passer à l'action bloque", desc: "Tu analyses, tu réfléchis, tu planifies… mais le premier pas reste le plus dur." },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 bg-warm-beige overflow-hidden" aria-labelledby="problem-heading">

      {/* Illustration femme — grande, bas gauche */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/depressed.svg" alt="" aria-hidden="true"
        className="absolute -bottom-10 -left-12 w-72 md:w-96 pointer-events-none select-none" />
      <BlurBlobs variant="beige" />

      {/* Grande illustration de fond — grande_2, droite */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/grande_2.svg" alt="" aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto max-w-[40%] opacity-[0.12] pointer-events-none select-none" />

      {/* Feuilles */}



      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading tag="Et si ce n'était pas un manque de volonté ?" title="Tu te reconnais dans ces situations ?" subtitle="Ces blocages sont bien réels et ils ne disent rien sur ta valeur ni tes capacités." />
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <motion.div key={p.title} variants={fadeInUp} className="bg-cream rounded-3xl p-6 shadow-soft border border-light-beige/60 hover:shadow-soft-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-2xl bg-warm-beige flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-warm-brown" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-dark-brown mb-2 leading-snug">{p.title}</h3>
                <p className="font-sans text-sm text-mid-brown leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.blockquote variants={fadeInUp} className="mt-14 max-w-2xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-dark-brown italic leading-relaxed">
              &ldquo;La peur ne signifie pas que tu n&apos;es pas capable. Elle signifie souvent que tu es en train de sortir de ta zone de confort.&rdquo;
            </p>
            <footer className="mt-3 font-script text-dusty-rose text-lg">Victoria</footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
