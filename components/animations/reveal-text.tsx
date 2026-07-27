"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  wordClassName?: string;
  delay?: number;
  /** Stagger interval, in seconds, between each word. */
  stagger?: number;
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Splits `text` into words and reveals them with a masked, staggered
 * upward slide as the element scrolls into view — the hero / heading
 * "word-by-word" reveal used throughout the site.
 */
export function RevealText({
  text,
  as = "span",
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  once = true,
}: RevealTextProps) {
  const Component = motion[as];
  const words = text.split(" ");

  return (
    <Component
      className={cn("inline-block", className)}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="line-mask mr-[0.28em] inline-block pb-1">
          <motion.span
            variants={word}
            className={cn("inline-block will-change-transform", wordClassName)}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
