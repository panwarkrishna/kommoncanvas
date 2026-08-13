"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * WhatWeDoDontDo
 * ----------------------------------------------------------------------
 * Two-column comparison: "What We Don't Do" (plain, muted) on the left,
 * "What We Do" (dark card, red accents) on the right. Each column is a
 * list of items with a bold heading line (partial red highlight) and a
 * description, separated by thin dividers.
 *
 * - Desktop: side-by-side columns
 * - Mobile: stacks vertically, "What We Do" first isn't required —
 *   keeps DOM order (Don't Do -> We Do)
 * - GSAP: rows fade/slide in with stagger as the section scrolls into view
 * ----------------------------------------------------------------------
 */

type ListItem = {
  heading: React.ReactNode; // JSX so parts can be colored
  description: string;
};

const DONT_DO: ListItem[] = [
  {
    heading: (
      <>
        <span className="text-white">Create Logos in</span>{" "}
        <span className="text-white/50">isolation</span>
      </>
    ),
    description: "A logo without a strategy or system isn't design; it's decoration.",
  },
  {
    heading: (
      <>
        <span className="text-white">Chasing</span>{" "}
        <span className="text-white/50">trends</span>
      </>
    ),
    description:
      "Design should be timeless, functional, and aligned with long-term brand goals, not momentary aesthetics.",
  },
  {
    heading: (
      <>
        <span className="text-white">Just</span>{" "}
        <span className="text-white/50">hand over</span>{" "}
        <span className="text-white">files</span>
      </>
    ),
    description:
      "Every deliverable comes with guidance and context so it can be used with consistency and purpose.",
  },
  {
    heading: (
      <>
        <span className="text-white/50">Cut corners</span>{" "}
        <span className="text-white">in production</span>
      </>
    ),
    description:
      "From dielines to color accuracy, we ensure the final output matches the approved design.",
  },
  {
    heading: (
      <>
        <span className="text-white">Treat projects</span>{" "}
        <span className="text-white/50">as transactions</span>
      </>
    ),
    description:
      "We build partnerships, working alongside founders and teams to grow brands that last.",
  },
];

const WE_DO: ListItem[] = [
  {
    heading: (
      <>
        <span className="text-[#FF0000]">Build brands</span>{" "}
        <span className="text-white">from the ground up</span>
      </>
    ),
    description:
      "from positioning and brand narrative to identity systems and packaging. Every brand we design is made to feel confident, cohesive and distinct.",
  },
  {
    heading: (
      <>
        <span className="text-[#FF0000]">Design with strategy,</span>{" "}
        <span className="text-white">not guesswork</span>
      </>
    ),
    description:
      "Our process starts with research, discovery, and a clear brand strategy ensuring every visual choice has intent and impact.",
  },
  {
    heading: (
      <>
        <span className="text-white">Create packaging that</span>{" "}
        <span className="text-[#FF0000]">performs</span>
      </>
    ),
    description:
      "Beyond aesthetics, we design packaging that stands out, communicates clearly and works seamlessly across real-world scenarios.",
  },
  {
    heading: (
      <>
        <span className="text-white">Deliver</span>{" "}
        <span className="text-[#FF0000]">end-to-end</span>
      </>
    ),
    description:
      "You don't just get design files, you get systems, guidelines, and tools that make your brand scalable and ready for growth.",
  },
  {
    heading: (
      <>
        <span className="text-white">Bring</span>{" "}
        <span className="text-[#FF0000]">clarity</span>
      </>
    ),
    description:
      'Every decision is explained and intentional, so you always understand the "why" behind the work.',
  },
];

function ListColumn({
  items,
  rowRefsCollector,
}: {
  items: ListItem[];
  rowRefsCollector: (el: HTMLDivElement | null, idx: number) => void;
}) {
  return (
    <div>
      {items.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => rowRefsCollector(el, idx)}
          className={`py-4 sm:py-5 ${
            idx !== 0 ? "border-t border-white/10" : ""
          }`}
        >
          <h4 className="text-base sm:text-lg font-semibold">
            {item.heading}
          </h4>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/60">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function WhatWeDoDontDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const dontRowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const doRowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const allRows = [
        ...dontRowRefs.current,
        ...doRowRefs.current,
      ].filter((el): el is HTMLDivElement => el !== null);

      if (allRows.length === 0) return;

      if (prefersReducedMotion) {
        gsap.set(allRows, { clearProps: "all" });
        return;
      }

      gsap.set(allRows, { y: 24, opacity: 0 });

      [dontRowRefs.current, doRowRefs.current].forEach((rows) => {
        const validRows = rows.filter(
          (el): el is HTMLDivElement => el !== null
        );
        gsap.to(validRows, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-2 lg:gap-10">
        {/* What We Don't Do */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            What We{" "}
            <span className="font-serif italic font-normal text-white/50">
              Don&apos;t Do
            </span>
          </h2>
          <ListColumn
            items={DONT_DO}
            rowRefsCollector={(el, idx) => (dontRowRefs.current[idx] = el)}
          />
        </div>

        {/* What We Do */}
        <div className="rounded-xl bg-[#0d0d0d] p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            What <span className="font-serif italic font-normal">We Do</span>
          </h2>
          <ListColumn
            items={WE_DO}
            rowRefsCollector={(el, idx) => (doRowRefs.current[idx] = el)}
          />
        </div>
      </div>
    </section>
  );
}