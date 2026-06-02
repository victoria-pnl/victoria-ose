"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AboutSection() {
  return (
    <section className="relative py-20 md:py-28 bg-cream overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #F0E9DF 0%, transparent 70%)" }} aria-hidden="true" />
      <BlurBlobs variant="cream" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #F0E9DF 0%, transparent 70%)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.p variants={fadeInUp} className="font-script text-dusty-rose text-2xl md:text-3xl">
            Bonjour, moi c&apos;est Victoria
          </motion.p>

          <motion.h2
            id="about-heading"
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-tight"
          >
            Coach en Programmation<br />Neuro-Linguistique
          </motion.h2>

          <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl text-mid-brown leading-relaxed">
            J&apos;accompagne les femmes débordées à sortir de la procrastination
            et à retrouver une manière plus douce, plus claire et plus alignée d&apos;avancer.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base md:text-lg text-mid-brown leading-relaxed">
            Parce que j&apos;ai moi-même connu ces moments où tout semble urgent,
            où la tête est pleine et les jambes ne bougent plus. La PNL m&apos;a aidée
            à comprendre mes schémas et aujourd&apos;hui j&apos;accompagne d&apos;autres
            femmes à faire de même.
          </motion.p>

          <motion.blockquote
            variants={fadeInUp}
            className="italic font-serif text-2xl md:text-3xl text-warm-brown leading-relaxed py-4"
          >
            &ldquo;Tu n&apos;as pas besoin d&apos;être prête à 100 % pour commencer.
            Les choses prennent forme en avançant.&rdquo;
          </motion.blockquote>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <CTAButton href={siteConfig.whatsappUrl} variant="outline" external
              icon={<MessageCircle size={18} aria-hidden="true" />}>
              Me poser une question
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
