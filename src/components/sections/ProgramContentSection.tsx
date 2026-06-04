"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { Video, BookOpen, PenLine, MessageSquare, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ⚠️ À MODIFIER quand Victoria confirmera les détails exacts du programme
const contents = [
  {
    icon: Video,
    title: "90 jours d'accompagnement",
    description:
      "12 semaines avec un thème, un plan d'action et des exercices concrets à appliquer dans ton quotidien.",
  },
  {
    icon: Star,
    title: "3 appels personnalisés",
    description:
      "Au début, au milieu et à la fin, pour débloquer ce qui te freine et booster ta progression.",
  },
  {
    icon: BookOpen,
    title: "Un livret hebdomadaire PDF",
    description:
      "Des outils concrets issus de la PNL pour passer à l'action rapidement.",
  },
  {
    icon: MessageSquare,
    title: "Accompagnement WhatsApp",
    description:
      "Tu n'es jamais seule. Je suis là pour t'encourager et te rappeler que tu en es capable.",
  },
  {
    icon: PenLine,
    title: "Des défis d'action chaque semaine",
    description:
      "Pour installer des victoires, reprendre confiance et surtout… avancer.",
  },
];

export function ProgramContentSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
      aria-labelledby="program-heading"
    >
      <BlurBlobs variant="cream" />
      {/* Illustration femme */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/love.svg"
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute -bottom-14 -right-10 w-72 md:w-[380px] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            tag="À l'intérieur"
            title="Ce que contient l'accompagnement"
            subtitle="Un cadre pensé pour t'aider à avancer sans te sentir submergée."
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {contents.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-warm-beige rounded-3xl p-6 border border-light-beige/60 hover:bg-off-white hover:shadow-soft-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 sm:flex-col sm:items-start sm:gap-0">
                  <div className="w-12 h-12 rounded-2xl bg-cream group-hover:bg-warm-beige flex items-center justify-center flex-shrink-0 sm:mb-5 transition-colors duration-300">
                    <c.icon
                      size={22}
                      className="text-warm-brown"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-dark-brown leading-snug sm:mb-2">
                    {c.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-mid-brown leading-relaxed">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
