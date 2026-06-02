"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  icon,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans font-medium rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown focus-visible:ring-offset-2";

  const variantStyles: Record<string, string> = {
    primary: "bg-warm-brown text-off-white hover:bg-dark-brown shadow-soft hover:shadow-soft-md",
    outline: "border border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-off-white",
    ghost: "text-warm-brown hover:bg-light-beige",
    white: "bg-off-white text-warm-brown hover:bg-cream shadow-soft hover:shadow-soft-md",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link
        href={href}
        {...linkProps}
        className={`${base} ${variantStyles[variant]} ${sizes[size]} ${className}`}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    </motion.div>
  );
}
