"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, CalendarDays, MapPin, Monitor } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const sessions = [
  {
    label: "En ligne",
    sublabel: "Séance à distance",
    icon: Monitor,
    href: siteConfig.calendlyOnlineUrl,
  },
  {
    label: "Cabinet Grez-Doiceau",
    sublabel: "Place Joseph Hallaux 3",
    icon: MapPin,
    href: siteConfig.calendlyGrezUrl,
  },
  {
    label: "Cabinet Hélécine",
    sublabel: "Rue du Pont Neuf 60A",
    icon: MapPin,
    href: siteConfig.calendlyHelecineUrl,
  },
];

// ⚠️ À MODIFIER : liste des éléments inclus dans l'offre quand Victoria confirme
const included = [
  "Séances individuelles personnalisées",
  "Suivi entre les séances",
  "Livrets et supports exclusifs",
  "Exercices pratiques PNL",
  "Accompagnement adapté à ton rythme",
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
            className="font-script text-dusty-rose text-3xl mb-4"
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
              <p className="font-script text-dusty-rose text-3xl mb-2">
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

            {/* CTA secondaire — consultation gratuite */}
            <div className="mt-5">
              <a
                href={siteConfig.calendlyOseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-off-white/70 hover:text-off-white transition-colors duration-200 underline underline-offset-4 decoration-off-white/30 hover:decoration-off-white/60"
              >
                <CalendarDays size={15} aria-hidden="true" />
                Pas encore sûre&nbsp;? Réserve une consultation gratuite de 30 min ✨
              </a>
            </div>
          </motion.div>

          {/* Séances de coaching individuelles */}
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="font-script text-dusty-rose text-3xl mb-1">
              Tu préfères une séance individuelle ?
            </p>
            <p className="font-sans text-sm text-light-beige/70 mb-5">
              Coaching motivationnel PNL · 20 min
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {sessions.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-off-white/15 hover:border-dusty-rose/40 hover:bg-cream/15 transition-all duration-200"
                >
                  <span className="w-11 h-11 rounded-full bg-off-white/10 flex items-center justify-center text-off-white/60 group-hover:text-dusty-rose group-hover:bg-dusty-rose/10 transition-colors duration-200">
                    <s.icon size={20} aria-hidden="true" />
                  </span>
                  <p className="font-serif text-off-white text-base leading-snug">
                    {s.label}
                  </p>
                  <p className="font-sans text-sm text-off-white/50">
                    {s.sublabel}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 font-sans text-sm text-dusty-rose/80 group-hover:text-dusty-rose transition-colors duration-200">
                    <CalendarDays size={13} aria-hidden="true" />
                    Réserver
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mention paiement sécurisé */}
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm text-light-beige/70 flex items-center justify-center gap-2"
          >
            <Shield size={14} aria-hidden="true" />
            Le paiement est sécurisé et s&apos;effectue via notre prestataire
            externe.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
