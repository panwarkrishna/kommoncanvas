"use client";

import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { StillLife, Portrait } from "@/components/ui/artwork";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { contactHref } from "@/lib/constants";
import type { ArtworkTheme } from "@/types";

const COLLAGE_TILES: {
  theme: ArtworkTheme;
  className: string;
  rotate: number;
  delay: number;
}[] = [
  { theme: "gold", className: "left-0 top-0 h-40 w-40 sm:h-48 sm:w-48", rotate: -4, delay: 0.1 },
  { theme: "ember", className: "right-0 top-6 h-32 w-56 sm:h-36 sm:w-64", rotate: 3, delay: 0.2 },
  { theme: "violet", className: "left-4 top-48 h-36 w-52 sm:h-40 sm:w-60 sm:top-56", rotate: -2, delay: 0.3 },
  { theme: "mint", className: "right-4 top-52 h-44 w-36 sm:h-52 sm:w-44 sm:top-60", rotate: 5, delay: 0.4 },
  { theme: "sunset", className: "left-20 top-[19rem] h-32 w-32 sm:left-24 sm:top-[24rem] sm:h-40 sm:w-40", rotate: -6, delay: 0.5 },
];

export function Hero() {
  const { ref, x, y } = useMouseParallax();
  const moveX = useTransform(x, (value) => value * 10);
  const moveY = useTransform(y, (value) => value * 10);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pb-16 pt-36 md:pt-44">
      <div className="container-outer grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <h1 className="max-w-xl font-display text-[11vw] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[3.6vw]">
            <RevealText text="Strategic branding &" />{" "}
            <RevealText text="packaging design to make" />{" "}
            <RevealText text="your brand a" />{" "}
            <RevealText text="household name." delay={0.4} className="font-accent font-normal" />
          </h1>

          <FadeIn delay={0.7} className="mt-8 max-w-md">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              We partner with founders to build brand identity and packaging
              systems that make products impossible to ignore — on the shelf
              and online.
            </p>
          </FadeIn>

          <FadeIn delay={0.85} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button size="lg" variant="lavender" asChild data-cursor="hover">
                <Link href={contactHref}>Let&apos;s Talk</Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button size="lg" asChild data-cursor="hover">
                <Link href={contactHref}>Book a Call</Link>
              </Button>
            </MagneticButton>
          </FadeIn>

          <FadeIn delay={1} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden="true">
              {(["gold", "mint", "violet"] as ArtworkTheme[]).map((theme, i) => (
                <div key={i} className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-paper">
                  <Portrait theme={theme} />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted">
              Trusted by <span className="font-medium text-ink">75+</span> ambitious brands
            </p>
          </FadeIn>
        </div>

        <div className="relative h-[26rem] sm:h-[30rem] lg:col-span-6 lg:h-[34rem]">
          {COLLAGE_TILES.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: tile.rotate }}
              transition={{ duration: 0.8, delay: tile.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: moveX, y: moveY }}
              className={`absolute shadow-xl ${tile.className}`}
            >
              <StillLife theme={tile.theme} className="h-full w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
