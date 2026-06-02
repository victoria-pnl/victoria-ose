"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import type { ReactNode } from "react";

interface ArchCardProps {
  number?: string | number;
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "brown" | "beige" | "cream";
}

export function ArchCard({
  number,
  title,
  description,
  icon,
  variant = "brown",
}: ArchCardProps) {
  const variants = {
    brown: {
      bg: "bg-warm-brown",
      text: "text-off-white",
      sub: "text-light-beige",
      num: "text-dusty-rose",
    },
    beige: {
      bg: "bg-warm-beige",
      text: "text-dark-brown",
      sub: "text-mid-brown",
      num: "text-warm-brown",
    },
    cream: {
      bg: "bg-cream border border-light-beige",
      text: "text-dark-brown",
      sub: "text-mid-brown",
      num: "text-warm-brown",
    },
  };

  const v = variants[variant];

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`${v.bg} rounded-3xl overflow-hidden shadow-soft`}
      style={{
        borderRadius: "50% 50% 1.5rem 1.5rem / 2rem 2rem 1.5rem 1.5rem",
      }}
    >
      <div className="px-6 pt-8 pb-7">
        {number && (
          <p className={`font-serif text-5xl font-light mb-3 ${v.num}`}>
            {number}
          </p>
        )}
        {icon && (
          <div className={`mb-4 ${v.num}`}>{icon}</div>
        )}
        <h3 className={`font-serif text-2xl mb-3 leading-snug ${v.text}`}>
          {title}
        </h3>
        <p className={`font-sans text-sm leading-relaxed ${v.sub}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
