"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 md:mb-16`}>
      {tag && (
        <motion.p
          variants={fadeInUp}
          className={`font-script text-2xl md:text-3xl mb-4 ${light ? "text-dusty-rose" : "text-dusty-rose"}`}
        >
          {tag}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight ${
          light ? "text-off-white" : "text-dark-brown"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-lg md:text-xl max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-light-beige" : "text-mid-brown"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
