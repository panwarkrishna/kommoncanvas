"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Services
 * ----------------------------------------------------------------------
 * 3-column numbered service cards (01 / 02 / 03) on black background.
 * Each card: index number (top-left, italic serif), image, bold title,
 * light description below.
 *
 * - Fully responsive: 1 column on mobile, 3 columns from md breakpoint up.
 * - Normal GSAP entrance animation on mount: cards fade + slide up one
 *   by one (stagger). Respects prefers-reduced-motion.
 * ----------------------------------------------------------------------
 */

type Service = {
  index: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    index: "01",
    image: "../projects/pro-img01.png",
    alt: "Loam bistro and artisanal cheese brand identity",
    title: "Brand Identity",
    description: "Make your brand unforgettable.",
  },
  {
    index: "02",
    image: "../projects/pro-img02.png",
    alt: "Wild Orchard sparkling water packaging design",
    title: "Packaging Design",
    description: "Turn your product into a brand magnet.",
  },
  {
    index: "03",
    image: "../projects/pro-img03.png",
    alt: "Creative partnership product styling",
    title: "Creative Partnership Plans",
    description: "Design support that grows with you.",
  },
];

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (cards.length === 0) return; // guard: refs not ready

      if (prefersReducedMotion) {
        gsap.set(cards, { clearProps: "all" });
        return;
      }

      gsap.set(cards, { y: 40, opacity: 0 });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1366px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {SERVICES.map((service, i) => (
            <div
              key={service.index}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="flex flex-col"
            >
              {/* Index number */}
              <span className="mb-4 font-serif text-3xl italic text-white sm:text-4xl">
                {service.index}
              </span>

              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Title + description */}
              <h3 className="mt-6 text-xl font-extrabold text-white sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}