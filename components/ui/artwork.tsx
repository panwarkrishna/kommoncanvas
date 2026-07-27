import type { ArtworkTheme } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Original, generative "cover art" standing in for real photography.
 * Nothing here references or resembles any third-party image — it's
 * abstract shape composition only. Swap for real photos later by
 * replacing <StillLife>/<Portrait> with next/image in the sections
 * below; the props (theme, className) are intentionally image-shaped.
 */
const THEME_STYLES: Record<ArtworkTheme, { bg: string; shape: string; shadow: string }> = {
  sunset: { bg: "#f4d9c6", shape: "#e08a4b", shadow: "#c96a2e" },
  violet: { bg: "#e3d9f8", shape: "#8b6ff0", shadow: "#5a3fc0" },
  ember: { bg: "#f6ded6", shape: "#d9603f", shadow: "#a83f26" },
  mint: { bg: "#d9ecdf", shape: "#4a9e6f", shadow: "#2f6e4a" },
  slate: { bg: "#dfe1e6", shape: "#5b6270", shadow: "#33373f" },
  gold: { bg: "#f3e6c4", shape: "#d1a437", shadow: "#9c7620" },
  lavender: { bg: "#ece5fb", shape: "#c3b2f5", shadow: "#8b6ff0" },
};

interface StillLifeProps {
  theme: ArtworkTheme;
  className?: string;
  rounded?: string;
}

/** Abstract still-life composition — stands in for product photography. */
export function StillLife({ theme, className, rounded = "rounded-[1.75rem]" }: StillLifeProps) {
  const s = THEME_STYLES[theme];
  return (
    <div
      className={cn("relative isolate flex h-full w-full items-end overflow-hidden", rounded, className)}
      style={{ backgroundColor: s.bg }}
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <ellipse cx="200" cy="430" rx="230" ry="70" fill={s.shadow} opacity="0.18" />
        <rect x="120" y="120" width="160" height="220" rx="26" fill={s.shape} />
        <circle cx="200" cy="120" r="60" fill={s.shape} opacity="0.85" />
        <rect x="150" y="60" width="100" height="40" rx="14" fill={s.shadow} opacity="0.7" />
        <circle cx="300" cy="300" r="46" fill={s.shadow} opacity="0.5" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.5),transparent_55%)]" />
    </div>
  );
}

interface PortraitProps {
  theme: ArtworkTheme;
  className?: string;
}

/** Abstract portrait silhouette — stands in for a headshot photo. */
export function Portrait({ theme, className }: PortraitProps) {
  const s = THEME_STYLES[theme];
  return (
    <div
      className={cn("relative isolate flex h-full w-full items-end overflow-hidden rounded-full", className)}
      style={{ backgroundColor: s.bg }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="100" cy="80" r="42" fill={s.shape} />
        <path d="M30 190 C30 130 60 110 100 110 C140 110 170 130 170 190 Z" fill={s.shape} />
        <circle cx="100" cy="80" r="42" fill={s.shadow} opacity="0.25" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
    </div>
  );
}
