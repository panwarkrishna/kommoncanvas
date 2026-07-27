"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeDirection = "up" | "down" | "left" | "right" | "scale" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const OFFSET = 48;

function buildVariants(direction: FadeDirection): Variants {
  const hidden: Record<string, number> = { opacity: 0 };
  if (direction === "up") hidden.y = OFFSET;
  if (direction === "down") hidden.y = -OFFSET;
  if (direction === "left") hidden.x = OFFSET;
  if (direction === "right") hidden.x = -OFFSET;
  if (direction === "scale") hidden.scale = 0.92;

  return {
    hidden,
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
  };
}

/**
 * Generic scroll-triggered reveal wrapper: fade + directional slide or
 * scale. Used to compose most section-level and card-level animations.
 */
export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={buildVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {},
};

/**
 * Wraps a list of <StaggerItem> children so they animate in sequence
 * as a group scrolls into view (used for grids of cards/services).
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.2,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: FadeDirection;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={buildVariants(direction)}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
