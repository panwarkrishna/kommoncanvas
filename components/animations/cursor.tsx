"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery, useReducedMotion } from "@/hooks/use-media-query";

/**
 * Optional custom cursor: a small dot plus a lagging ring that scales up
 * over interactive elements marked with `data-cursor="hover"`. Only
 * mounts on devices with a fine pointer (desktop) and is skipped
 * entirely for touch devices and reduced-motion users.
 */
export function CustomCursor() {
  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const prefersReducedMotion = useReducedMotion();
  const enabled = hasFinePointer && !prefersReducedMotion;

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    function handleMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!isVisible) setIsVisible(true);
      const target = event.target as HTMLElement;
      setIsHovering(Boolean(target.closest('[data-cursor="hover"], a, button')));
    }

    function handleLeaveWindow() {
      setIsVisible(false);
    }

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, [enabled, isVisible, x, y]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90]"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
      aria-hidden="true"
    >
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender-deep"
        style={{ x, y }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-ink/40 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          borderColor: isHovering ? "var(--lavender-deep)" : "rgba(13,13,14,0.35)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
        }}
      />
    </div>
  );
}
