"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-cream"
      aria-label="Présentation de l'accompagnement OSE"
    >
      <BlurBlobs variant="cream" />

      {/* Grande illustration de fond — grande_1, pleine hauteur droite */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/grande_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto max-w-[55%] object-cover object-left pointer-events-none select-none opacity-[0.08]"
      />

      {/* Feuilles */}

      {/* Cercles doux */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #F0E9DF 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-80px] right-[-80px] w-[600px] h-[600px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8DDD0 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-28 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.p
              variants={fadeInUp}
              className="font-script text-dusty-rose text-xl mb-4"
            >
              Accompagnement PNL · Développement personnel
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-dark-brown leading-[1.1] tracking-tight mb-6"
            >
              OSE avancer.
              <br />
              <span className="text-warm-brown italic">Sans pression,</span>
              <br />
              sans perfection.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-lg md:text-xl text-mid-brown leading-relaxed mb-8 max-w-lg"
            >
              Un accompagnement doux et personnalisé pour aider les femmes
              débordées à sortir de la procrastination, retrouver de la clarté
              et passer à l&apos;action, à leur rythme.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-row flex-wrap gap-3 mb-8"
            >
              <CTAButton
                href={siteConfig.paymentUrl}
                variant="primary"
                size="lg"
                external
                className="whitespace-nowrap"
                icon={<ArrowRight size={18} aria-hidden="true" />}
              >
                Rejoindre l&apos;accompagnement
              </CTAButton>
              <CTAButton
                href={siteConfig.whatsappUrl}
                variant="outline"
                size="lg"
                external
                className="whitespace-nowrap"
                icon={<MessageCircle size={18} aria-hidden="true" />}
              >
                Poser une question
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div
                className="w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px] overflow-hidden shadow-soft-md relative"
                style={{
                  borderRadius:
                    "50% 50% 1.5rem 1.5rem / 3rem 3rem 1.5rem 1.5rem",
                }}
              >
                <Image
                  src="/victoria.jpg"
                  alt="Victoria, coach PNL"
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-4 -left-8 bg-off-white rounded-2xl px-4 py-3 shadow-soft-md border border-light-beige"
              >
                <p className="font-script text-warm-brown text-base">
                  Commence à ton rythme
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="absolute -top-3 right-4 bg-warm-brown rounded-full px-4 py-2 shadow-soft"
              >
                <p className="font-sans text-off-white text-xs font-medium tracking-wide">
                  Coach PNL
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
