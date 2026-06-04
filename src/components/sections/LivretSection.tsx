"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const points = [
  "Comprendre que la procrastination n'est pas un manque de motivation",
  "Identifier ce qui te bloque : peur, perfectionnisme, manque de clarté ou surcharge mentale",
  "Tester un défi simple de 3 jours pour commencer à agir",
];

export function LivretSection() {
  return (
    <section
      className="relative py-20 md:py-24 bg-warm-beige overflow-hidden"
      aria-labelledby="livret-heading"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-dusty-rose/15 text-dusty-rose font-sans text-sm px-4 py-1.5 rounded-full mb-6"
          >
            <BookOpen size={15} aria-hidden="true" />
            Offert gratuitement
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-script text-dusty-rose text-2xl md:text-3xl mb-3"
          >
            Commence par le livret découverte
          </motion.p>

          <motion.h2
            id="livret-heading"
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl text-dark-brown leading-tight mb-4"
          >
            Pourquoi tu procrastines ?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-base text-mid-brown leading-relaxed mb-8 max-w-xl mx-auto"
          >
            Le vrai déclic pour arrêter de repousser ce qui compte pour toi. Un livret court, concret, avec un défi de 3 jours pour te remettre en mouvement.
          </motion.p>

          <motion.ul variants={staggerContainer} className="space-y-3 mb-8 text-left max-w-md mx-auto">
            {points.map((p) => (
              <motion.li key={p} variants={fadeInUp} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-dusty-rose flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-sans text-sm text-mid-brown leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp}>
            <CTAButton
              href={siteConfig.livretUrl}
              variant="primary"
              size="lg"
              external
              icon={<BookOpen size={18} aria-hidden="true" />}
            >
              Télécharger le livret gratuit
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
