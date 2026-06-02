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
    title: "Séances personnalisées",
    // ⚠️ À MODIFIER : nombre de séances, durée, format (visio/téléphone/présentiel)
    description:
      "Des séances individuelles adaptées à ton rythme et tes besoins, pour avancer pas à pas.",
  },
  {
    icon: MessageSquare,
    title: "Suivi entre les séances",
    // ⚠️ À MODIFIER : format du suivi (WhatsApp, email, fréquence...)
    description:
      "Un accompagnement continu pour que tu ne restes jamais bloquée trop longtemps.",
  },
  {
    icon: BookOpen,
    title: "Livrets et supports",
    // ⚠️ À MODIFIER : détail des livrets/ressources fournis
    description:
      "Des ressources concrètes pour ancrer les apprentissages et avancer entre les séances.",
  },
  {
    icon: PenLine,
    title: "Exercices pratiques",
    // ⚠️ À MODIFIER : type d'exercices PNL proposés
    description:
      "Des outils issus de la PNL pour comprendre tes schémas et les transformer en douceur.",
  },
  {
    icon: Star,
    title: "Un suivi adapté à toi",
    // ⚠️ À MODIFIER : durée totale de l'accompagnement, nombre de semaines/mois
    description:
      "Chaque parcours est unique. L'accompagnement s'adapte à ta situation et tes objectifs.",
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
        className="absolute -bottom-14 -right-10 w-72 md:w-[380px] pointer-events-none select-none"
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
                <div className="w-12 h-12 rounded-2xl bg-cream group-hover:bg-warm-beige flex items-center justify-center mb-5 transition-colors duration-300">
                  <c.icon
                    size={22}
                    className="text-warm-brown"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-xl text-dark-brown mb-2 leading-snug">
                  {c.title}
                </h3>
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
