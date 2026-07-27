"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, type SpringOptions } from "framer-motion";

const DEFAULT_SPRING: SpringOptions = { stiffness: 120, damping: 20, mass: 0.4 };

/**
 * Tracks pointer position relative to a container and exposes smoothed
 * (spring-eased) normalized values in the [-1, 1] range on each axis.
 * Used for subtle mouse-parallax effects (e.g. the hero image collage).
 */
export function useMouseParallax(spring: SpringOptions = DEFAULT_SPRING) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handlePointerMove(event: PointerEvent) {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      rawX.set(relativeX * 2);
      rawY.set(relativeY * 2);
    }

    function handlePointerLeave() {
      rawX.set(0);
      rawY.set(0);
    }

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [rawX, rawY]);

  return { ref, x, y };
}
