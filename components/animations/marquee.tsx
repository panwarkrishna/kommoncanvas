import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  /** Pause the marquee animation on hover. */
  pauseOnHover?: boolean;
  speed?: "default" | "slow";
}

/**
 * Infinite horizontal marquee built with pure CSS animation (see the
 * `marquee` / `marquee-reverse` keyframes in globals.css) so it runs on
 * the compositor thread with no JS animation-loop cost.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "default",
}: MarqueeProps) {
  const animationClass = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-16",
          animationClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-16 pl-16",
          animationClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
