"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.26 8.26 0 004.83 1.56V6.85a4.86 4.86 0 01-1.06-.16z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: siteConfig.tiktokUrl,
    Icon: TikTokIcon,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsappUrl,
    Icon: MessageCircle,
  },
];

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-dark-brown py-14 md:py-16"
      aria-label="Pied de page Victoria Coach PNL"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          {/* Nom */}
          <motion.div variants={fadeInUp}>
            <p className="font-script text-dusty-rose text-2xl mb-1">
              Victoria
            </p>
            <p className="font-serif text-off-white text-xl tracking-wide">
              Ta Coach PNL
            </p>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div variants={fadeInUp} className="flex items-center gap-5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/70 hover:text-off-white hover:border-off-white/50 transition-all duration-200"
                aria-label={s.label}
              >
                <s.Icon size={18} />
              </Link>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeInUp}
            className="w-16 h-px bg-off-white/20"
            aria-hidden="true"
          />

          {/* Mentions */}
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm text-off-white/40 max-w-md leading-relaxed"
          >
            <br />© {year} {siteConfig.name}. Tous droits réservés.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
