"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, CalendarDays, Monitor, BookOpen } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";


const included = [
  "90 jours d'accompagnement (12 semaines)",
  "3 appels personnalisés (début, milieu, fin)",
  "1 livret PDF par semaine",
  "Suivi WhatsApp pendant 3 mois",
  "Défis d'action hebdomadaires",
];

export function OfferSection() {
  return (
    <section
      id="offre"
      className="relative py-20 md:py-28 bg-warm-brown overflow-hidden"
      aria-labelledby="offer-heading"
    >
      {/* Grandes feuilles claires gauche */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/grande_3.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[30%] pointer-events-none select-none"
        style={{ filter: "brightness(10) saturate(0)", opacity: 0.2 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/grande_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto max-w-[28%] pointer-events-none select-none"
        style={{ filter: "brightness(10) saturate(0)", opacity: 0.2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          {/* Tag */}
          <motion.p
            variants={fadeInUp}
            className="font-script text-dusty-rose text-2xl md:text-3xl mb-4"
          >
            Prête à commencer ?
          </motion.p>

          {/* Titre */}
          <motion.h2
            id="offer-heading"
            variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl text-off-white leading-tight mb-4"
          >
            {siteConfig.programName}
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-light-beige mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Un accompagnement humain, doux et personnalisé pour sortir de la
            procrastination et avancer à ton rythme sans te juger, sans te
            brusquer.
          </motion.p>

          {/* Carte offre */}
          <motion.div
            variants={fadeInUp}
            className="bg-cream/10 backdrop-blur-sm rounded-4xl p-8 md:p-10 border border-off-white/20 mb-8"
          >
            {/* Prix */}
            {/* ⚠️ À MODIFIER : prix définitif */}
            <div className="mb-8">
              <p className="font-script text-dusty-rose text-2xl md:text-3xl mb-2">
                Investissement
              </p>
              <p className="font-serif text-6xl text-off-white">
                {siteConfig.price}
              </p>
              <p className="font-sans text-light-beige text-base mt-2">
                {siteConfig.priceSubtitle}
              </p>
            </div>

            {/* Liste inclus */}
            <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-dusty-rose flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-off-white text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA principal */}
            <CTAButton
              href={siteConfig.paymentUrl}
              variant="white"
              size="lg"
              external
              className="w-full sm:w-auto justify-center"
              icon={<ArrowRight size={18} aria-hidden="true" />}
            >
              Rejoindre l&apos;accompagnement
            </CTAButton>

            {/* CTA contact WhatsApp */}
            <div className="mt-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-off-white/60 hover:text-off-white transition-colors duration-200"
              >
                Tu hésites encore ? Écris-moi sur WhatsApp, je te réponds personnellement.
              </a>
            </div>

            {/* CTA secondaire — livret découverte */}
            <div className="mt-5">
              <a
                href={siteConfig.livretUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-sans text-sm text-off-white/70 hover:text-off-white transition-colors duration-200 underline underline-offset-4 decoration-off-white/30 hover:decoration-off-white/60"
              >
                <BookOpen size={22} className="flex-shrink-0" aria-hidden="true" />
                Pas encore sûre&nbsp;? Télécharge le livret découverte gratuit ✨
              </a>
            </div>
          </motion.div>

          {/* Séance individuelle en ligne */}
          <motion.div variants={fadeInUp} className="mb-8">
            <a
              href={siteConfig.calendlyOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex flex-col items-center gap-3 bg-cream/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-off-white/15 hover:border-dusty-rose/40 hover:bg-cream/15 transition-all duration-200"
            >
              <span className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center text-off-white/60 group-hover:text-dusty-rose group-hover:bg-dusty-rose/10 transition-colors duration-200">
                <Monitor size={18} aria-hidden="true" />
              </span>
              <div className="text-center">
                <p className="font-script text-dusty-rose text-xl md:text-2xl leading-tight">
                  Tu préfères une séance individuelle ?
                </p>
                <p className="font-sans text-xs text-off-white/50 mt-0.5">
                  Coaching motivationnel PNL · 20 min · En ligne
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-sm text-dusty-rose/80 group-hover:text-dusty-rose transition-colors duration-200">
                <CalendarDays size={14} aria-hidden="true" />
                Réserver
              </span>
            </a>
          </motion.div>

          {/* Mention paiement sécurisé */}
          <motion.p
            variants={fadeInUp}
            className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center font-sans text-sm text-light-beige/70 text-center"
          >
            <Shield size={22} className="flex-shrink-0" aria-hidden="true" />
            <span>Le paiement est sécurisé et s&apos;effectue via notre prestataire externe.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
