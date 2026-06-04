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

const livretPoints = [
  "Comprendre pourquoi tu procrastines vraiment",
  "Identifier ton profil de blocage",
  "Un défi de 3 jours pour te remettre en mouvement",
];

export function OfferSection() {
  return (
    <section
      id="offre"
      className="relative py-20 md:py-28 bg-warm-brown overflow-hidden"
      aria-labelledby="offer-heading"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/grande_3.svg" alt="" aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[30%] pointer-events-none select-none"
        style={{ filter: "brightness(10) saturate(0)", opacity: 0.2 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/illustrations/grande_1.svg" alt="" aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto max-w-[28%] pointer-events-none select-none"
        style={{ filter: "brightness(10) saturate(0)", opacity: 0.2 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          {/* Tag */}
          <motion.p variants={fadeInUp} className="font-script text-dusty-rose text-2xl md:text-3xl mb-4">
            Prête à commencer ?
          </motion.p>

          {/* Titre */}
          <motion.h2 id="offer-heading" variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl text-off-white leading-tight mb-4">
            {siteConfig.programName}
          </motion.h2>

          {/* Sous-titre */}
          <motion.p variants={fadeInUp}
            className="font-sans text-lg text-light-beige mb-10 max-w-xl mx-auto leading-relaxed">
            Un accompagnement humain, doux et personnalisé pour sortir de la procrastination et avancer à ton rythme sans te juger, sans te brusquer.
          </motion.p>

          {/* 2 cards */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-5 mb-5">

            {/* Card livret découverte */}
            <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-7 border border-off-white/20 flex flex-col text-left">
              <div className="mb-5">
                <p className="font-script text-dusty-rose text-2xl mb-1">Livret découverte</p>
                <p className="font-serif text-xl text-off-white leading-snug mb-3">
                  Pourquoi tu procrastines ?
                </p>
                <span className="inline-flex items-center gap-1.5 bg-dusty-rose/20 text-dusty-rose font-sans text-xs px-3 py-1 rounded-full">
                  <BookOpen size={12} aria-hidden="true" />
                  Offert gratuitement
                </span>
              </div>
              <ul className="space-y-2.5 mt-4 mb-6">
                {livretPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-dusty-rose flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-sans text-sm text-off-white/80">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <motion.a
                  href={siteConfig.livretUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 font-sans font-medium text-base rounded-full bg-off-white text-warm-brown hover:bg-cream shadow-soft hover:shadow-soft-md transition-all duration-200 px-7 py-3.5"
                >
                  <BookOpen size={16} aria-hidden="true" />
                  Télécharger gratuitement
                </motion.a>
                <p className="mt-3 font-sans text-xs text-transparent text-center select-none" aria-hidden="true">placeholder</p>
              </div>
            </div>

            {/* Card programme OSE */}
            <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-7 border border-off-white/20 flex flex-col text-left">
              <div className="mb-5">
                <p className="font-script text-dusty-rose text-2xl mb-0">Pour nous rejoindre</p>
                <p className="font-serif text-5xl text-off-white mt-1">{siteConfig.price}</p>
                <p className="font-sans text-light-beige/70 text-sm mt-2">{siteConfig.priceSubtitle}</p>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-dusty-rose flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-sans text-sm text-off-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <CTAButton
                href={siteConfig.paymentUrl}
                variant="white"
                size="md"
                external
                className="w-full justify-center"
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                Rejoindre l&apos;accompagnement
              </CTAButton>
              <p className="mt-3 font-sans text-xs text-off-white/50 text-center">
                Tu hésites ?{" "}
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-off-white/80 transition-colors duration-200">
                  Écris-moi sur WhatsApp
                </a>
              </p>
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
          <motion.p variants={fadeInUp}
            className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center font-sans text-sm text-light-beige/70 text-center">
            <Shield size={22} className="flex-shrink-0" aria-hidden="true" />
            <span>Le paiement est sécurisé et s&apos;effectue via notre prestataire externe.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
