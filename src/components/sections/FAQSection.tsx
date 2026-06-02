"use client";

import { BlurBlobs } from "@/components/ui/BlurBlobs";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const faqs = [
  {
    q: "Est-ce que je dois déjà savoir exactement ce que je veux ?",
    a: "Pas du tout. Beaucoup de personnes qui rejoignent l'accompagnement ont justement du mal à définir leurs objectifs. C'est précisément ce qu'on clarifie ensemble au début. Tu as juste besoin d'avoir envie de changer quelque chose.",
  },
  {
    q: "Comment se déroule l'accompagnement ?",
    a: "L'accompagnement comprend des séances individuelles (en visio ou autre format), un suivi entre les séances, et des supports pratiques. Chaque parcours est adapté à ta situation. N'hésite pas à me contacter pour en savoir plus sur le déroulement exact.",
  },
  {
    q: "Est-ce adapté si je procrastine beaucoup ?",
    a: "C'est exactement pour ça que cet accompagnement existe. La procrastination n'est pas un défaut de caractère c'est souvent le symptôme d'un blocage plus profond. La PNL permet d'aller comprendre ce qui se passe vraiment et de créer un changement durable.",
  },
  {
    q: "Comment puis-je rejoindre le programme ?",
    a: 'Tu peux cliquer sur le bouton "Rejoindre l\'accompagnement" pour accéder au paiement sécurisé. Si tu as des questions avant de te lancer, tu peux aussi me contacter directement sur WhatsApp je réponds personnellement.',
  },
  {
    q: "Puis-je poser une question avant de payer ?",
    a: "Bien sûr ! Je t'invite même à le faire. Tu peux m'envoyer un message sur WhatsApp et on prend le temps d'échanger avant que tu prennes ta décision. Il n'y a aucune obligation.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeInUp} className="border-b border-light-beige">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl text-dark-brown group-hover:text-warm-brown transition-colors duration-200">
          {q}
        </span>
        <span className="flex-shrink-0 text-warm-brown">
          {open ? (
            <Minus size={20} aria-hidden="true" />
          ) : (
            <Plus size={20} aria-hidden="true" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-base text-mid-brown leading-relaxed pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <BlurBlobs variant="cream" />
      {/* Grande illustration fond — grande_2 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/grande_2.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto max-w-[40%] opacity-[0.12] pointer-events-none select-none"
      />

      {/* Feuilles */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/leaf_6.svg"
        alt=""
        aria-hidden="true"
        className="absolute -top-4 -left-14 w-48 opacity-45 pointer-events-none select-none rotate-[25deg]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/leaf_11.svg"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -right-16 w-56 opacity-42 pointer-events-none select-none -rotate-[40deg]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/leaf_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-1/3 -left-10 w-32 opacity-38 pointer-events-none select-none rotate-[70deg]"
      />
      {/* Feuilles */}

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            tag="Tu te poses des questions ?"
            title="Questions fréquentes"
          />

          <motion.div variants={staggerContainer}>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
