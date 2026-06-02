"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function StickyMobileCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-6 pt-3"
      style={{
        background:
          "linear-gradient(to top, rgba(250,247,242,0.98) 60%, transparent)",
      }}
    >
      <Link
        href={siteConfig.paymentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-warm-brown text-off-white text-center font-sans font-medium py-4 rounded-full shadow-soft-md text-base active:scale-95 transition-transform duration-150"
        aria-label="Rejoindre l'accompagnement OSE"
      >
        Rejoindre l&apos;accompagnement
      </Link>
    </motion.div>
  );
}
