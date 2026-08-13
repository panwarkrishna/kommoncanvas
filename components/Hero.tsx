"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero
 * ----------------------------------------------------------------------
 * ... (same as before)
 * Entrance animation now triggers on SCROLL (when hero enters viewport)
 * instead of on mount, using GSAP ScrollTrigger.
 * ----------------------------------------------------------------------
 */

const BRAND_RED = "#FF1E1E";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function GirlElement({
  innerRef,
}: {
  innerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={innerRef}
      className="relative mx-auto w-[170px] sm:w-[240px] md:w-[290px] lg:w-[380px] xl:w-[440px]"
    >
      <Image
        src="./girl-element.png"
        alt="Khushi Tyagi, Founder of Kommon Canvas"
        width={660}
        height={780}
        sizes="(min-width: 1280px) 440px, (min-width: 1024px) 380px, (min-width: 768px) 290px, (min-width: 640px) 240px, 170px"
        className="h-auto w-full select-none object-contain"
        priority
      />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const girlRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [line1Ref.current, line2Ref.current, girlRef.current, bottomRef.current],
          { clearProps: "all" }
        );
        return;
      }

      gsap.set(line1Ref.current, { yPercent: 110, opacity: 0 });
      gsap.set(line2Ref.current, { yPercent: 110, opacity: 0 });
      gsap.set(girlRef.current, { scale: 0.85, opacity: 0 });
      gsap.set(bottomRef.current, { y: 24, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // jab section ka top viewport ke 80% pr aaye tab trigger ho
          toggleActions: "play none none none", // ek baar play, reverse/repeat nahi
          // once: true, // agar chaho ki dubara scroll krne pr bhi na chale to ye bhi add kr sakte ho
        },
      });

      tl.to(line1Ref.current, { yPercent: 0, opacity: 1, duration: 0.8 })
        .to(
          line2Ref.current,
          { yPercent: 0, opacity: 1, duration: 0.8 },
          "-=0.55"
        )
        .to(
          girlRef.current,
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)" },
          "-=0.45"
        )
        .to(bottomRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-4 pb-2 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-[1366px]">
        {/* Headline */}
        <div className="overflow-hidden">
          <h1
            ref={line1Ref}
            className="select-none text-center font-extrabold uppercase leading-[0.92] tracking-tight text-white text-[clamp(2.2rem,11vw,7.5rem)]"
          >
            Creative
          </h1>
        </div>

        {/* AGENCY line + overlapping girl element */}
        <div className="relative mt-1 sm:mt-0">
          <div className="overflow-hidden">
            <h1
              ref={line2Ref}
              className="select-none text-center font-extrabold uppercase leading-[0.92] tracking-tight text-[clamp(2.2rem,17vw,16.9rem)]"
              style={{ color: BRAND_RED }}
            >
              Agency
            </h1>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-full flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="pointer-events-auto">
              <GirlElement innerRef={girlRef} />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          ref={bottomRef}
          className="mt-20 flex flex-col items-center gap-6 sm:mt-24 sm:flex-row sm:items-end sm:justify-between sm:gap-8 lg:mt-28"
        >
          <p className="max-w-[280px] text-sm leading-relaxed text-white/80 sm:max-w-xs sm:text-base text-center md:text-left">
            Everything your brand needs—from identity and packaging to social
            media creatives all designed to make an impact.
          </p>

          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            style={{ backgroundColor: BRAND_RED }}
          >
            View Projects
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}