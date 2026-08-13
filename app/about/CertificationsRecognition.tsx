"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

/**
 * CertificationsRecognition
 * ----------------------------------------------------------------------
 * "Certifications & Recognition" heading + 4 stacking cards.
 * Each card is `position: sticky` inside a taller wrapper, so as user
 * scrolls, each new card slides up and sits on top of the previous one
 * (previous card stays pinned underneath, slightly scaled down/dimmed).
 * Cards do NOT disappear — they stack until all 4 are done scrolling.
 *
 * - Card content: icon, title (with italic accent word in #FF0000),
 *   description, and an image on the right.
 * - Fully responsive: image stacks below text on mobile, sticky offset
 *   adjusts, card padding/font sizes scale down.
 * ----------------------------------------------------------------------
 */

type CertCard = {
  id: string;
  icon: string; // path to small svg/png icon
  titleMain: string; // plain part
  titleAccent: string; // italic red part
  description: string;
  image: string;
  alt: string;
  bg: string; // tailwind bg class for this card
};

const CARDS: CertCard[] = [
  {
    id: "packaging-world",
    icon: "../projects/pro-img03.png",
    titleMain: "Packaging of the World",
    titleAccent: "Loves Us",
    description: "Featured for outstanding packaging creativity.",
    image: "../projects/pro-img03.png",
    alt: "Swap Orange Twist can packaging design",
    bg: "bg-[#141414]",
  },
  {
    id: "natural-honey",
    icon: "../projects/pro-img02.png",
    titleMain: "Recognised on",
    titleAccent: "Behance & Dribbble",
    description: "Showcased among the platform's top creative work.",
    image: "../projects/pro-img02.png",
    alt: "Natural honey packaging design",
    bg: "bg-[#1a1a1a]",
  },
  {
    id: "dieline-awards",
    icon: "../projects/pro-img01.png",
    titleMain: "Shortlisted at the",
    titleAccent: "Dieline Awards",
    description: "Recognised among the year's standout packaging concepts.",
    image: "../projects/pro-img01.png",
    alt: "Award-shortlisted packaging design concept",
    bg: "bg-[#1f1f1f]",
  },
  {
    id: "print-craft",
    icon: "../projects/pro-img04.png",
    titleMain: "Praised for",
    titleAccent: "Print Craft",
    description: "Noted for precision in dieline execution and material finish.",
    image: "../projects/pro-img04.png",
    alt: "Print-ready packaging with precise dieline execution",
    bg: "bg-[#242424]",
  },
];

export default function CertificationsRecognition() {
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
      if (cards.length === 0 || prefersReducedMotion) return;

      // Each card (except the last) scales down slightly and dims
      // as the next card scrolls over it, so the stack looks 3D.
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.94,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-14 sm:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-5xl px-6 text-center mb-10 sm:mb-14">
        {/* <h2 className="text-2xl sm:text-4xl font-bold text-white">
          Certifications &amp;{" "}
          <span className="font-serif italic font-normal">Recognition</span>
        </h2> */}
        <SectionHeading redText="Certifications" whiteText="&Recognition" />
        <p className="mt-3 text-sm sm:text-base text-white/60">
          Our work has been recognised and featured by global creative
          communities:
        </p>
      </div>

      {/* Stacking cards */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            className="sticky"
            style={{ top: `${80 + i * 16}px` }}
          >
            <div
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`${card.bg} rounded-2xl p-6 sm:p-10 md:p-14 mb-6 sm:mb-8 origin-top`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left: text */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 mb-6">
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                    {card.titleMain}{" "}
                    <span className="font-serif italic font-normal text-[#FF0000]">
                      {card.titleAccent}
                    </span>
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-white/70">
                    {card.description}
                  </p>
                </div>

                {/* Right: image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}