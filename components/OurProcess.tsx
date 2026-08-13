"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

/**
 * OurProcess
 * ----------------------------------------------------------------------
 * Bordered, row-based process section (01 / 02 / 03 / 04...).
 * Each row: number + title + description on the left, image panel on
 * the right. Divided by horizontal borders, wrapped in one outer box.
 *
 * - Mobile: stacks vertically (text on top, image below)
 * - Desktop (md+): text left (~40%), image right (~60%)
 * - GSAP ScrollTrigger: each row fades/slides in as it enters viewport
 * ----------------------------------------------------------------------
 */

type ProcessStep = {
  number: string;
  title: string;
  description: string; // use "\n\n" for paragraph breaks
  image: string;
  alt: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "This stage focuses on understanding the market, the user, and the opportunity. Through Brand Discovery, Brand Analysis, and Competitor Analysis.\n\nWe uncover insights about the brand's current position, audience perceptions, and category dynamics to identify what's working, what's missing, and where your brand can own space.",
    image: "../projects/pro-img01.png",
    alt: "Research and discovery brand analysis boards",
  },
  {
    number: "02",
    title: "Strategic Blueprint",
    description:
      "This stage defines the brand strategy. We begin by setting brand goals and analysing the target audience to identify clear opportunities.\n\nFrom there, we define the mission, vision, purpose, and core values that shape belief and direction for the brand.",
    image: "../projects/pro-img02.png",
    alt: "Strategic blueprint brand strategy boards",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "This is where strategy becomes visual. We design brand identities, packaging concepts, dielines, and label systems — iterating through 3D mockups and physical prototypes until the design earns its place in-hand and on-shelf.\n\nEvery concept is tested against your brand strategy, production constraints, and target audience before it moves forward.",
    image: "../projects/pro-img03.png",
    alt: "Packaging design and 3D mockup prototypes",
  },
  {
    number: "04",
    title: "Refinement & Delivery",
    description:
      "We refine the chosen direction based on your feedback, finalize print-ready files, and prepare complete brand and packaging guidelines.\n\nYou walk away with production-ready assets, source files, and a system built to scale cleanly across your entire product range.",
    image: "../projects/pro-img04.png",
    alt: "Final packaging design files ready for production",
  },
];

export default function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const rows = rowRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (rows.length === 0) return;

      if (prefersReducedMotion) {
        gsap.set(rows, { clearProps: "all" });
        return;
      }

      rows.forEach((row) => {
        const textEl = row.querySelector<HTMLElement>("[data-process-text]");
        const imgEl = row.querySelector<HTMLElement>("[data-process-image]");

        gsap.set(textEl, { x: -30, opacity: 0 });
        gsap.set(imgEl, { y: 40, opacity: 0 });

        gsap.to(textEl, {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(imgEl, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-[1780px] border border-white/15 bg-black md:py-12"
    >

      <div className="px-6 pt-10 sm:px-8 md:px-12 md:pt-0">
        <SectionHeading redText="Our Design" whiteText="Process" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-white/70">
          A structured, collaborative journey from first insight to shelf-ready
          packaging — every step built to turn strategy into a brand people
          notice.
        </p>
      </div>
      {PROCESS_STEPS.map((step, i) => (
        <div
          key={step.number}
          ref={(el) => {
            rowRefs.current[i] = el;
          }}
          className={`flex flex-col md:flex-row items-stretch gap-8 md:gap-10 p-6 sm:p-8 md:p-12 ${
            i !== 0 ? "border-t border-white/15" : ""
          }`}
        >
          {/* Left: text */}
          <div
            data-process-text
            className="flex w-full flex-col justify-center md:w-[38%]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#FF0000]">
                {step.title}
              </h3>
              <span className="shrink-0 text-3xl sm:text-4xl font-light text-white/40">
                {step.number}
              </span>
            </div>

            {step.description.split("\n\n").map((para, idx) => (
              <p
                key={idx}
                className="mt-4 text-sm sm:text-base leading-relaxed text-white/80"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right: image panel */}
          <div
            data-process-image
            className="relative w-full overflow-hidden rounded-lg md:w-[62%] aspect-[16/10] md:aspect-[16/9]"
          >
            <Image
              src={step.image}
              alt={step.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 62vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}