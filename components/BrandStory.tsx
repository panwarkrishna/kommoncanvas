"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * BrandStory
 * ----------------------------------------------------------------------
 * Black section: bold heading top-left, full-width black & white image
 * below with a rotating circular "Design & Branding Agency" badge
 * pinned to the bottom-right corner.
 *
 * - Heading fades/slides in on scroll
 * - Image scales in slightly (subtle reveal) on scroll
 * - Badge rotates continuously (infinite, respects reduced motion)
 * - Fully responsive: badge shrinks on mobile, heading font scales down
 * ----------------------------------------------------------------------
 */

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([headingRef.current, imageWrapRef.current], {
          clearProps: "all",
        });
        return;
      }

      gsap.set(headingRef.current, { y: 30, opacity: 0 });
      gsap.set(imageWrapRef.current, { scale: 1.08, opacity: 0 });

      gsap.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(imageWrapRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Continuous badge rotation
      gsap.to(badgeRef.current, {
        rotate: 360,
        duration: 14,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-14 sm:py-20">
      {/* Heading */}
      <div className="px-6 sm:px-10 mb-8 sm:mb-10">
        <h2
          ref={headingRef}
          className="max-w-4xl text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
        >
          Every brand has a story; we make sure yours is{" "}
          <span className="text-[#FF0000]">seen</span> and appreciated
        </h2>
      </div>

      {/* Image with rotating badge */}
      <div className="px-6 sm:px-10">
        <div
          ref={imageWrapRef}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-md"
        >
          <Image
            src="../projects/pro-img05.png"
            alt="Brand identity design process — mood boards, typography, and sketches"
            fill
            className="object-cover grayscale"
            sizes="100vw"
            priority
          />

          {/* Rotating badge */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 h-16 w-16 sm:h-24 sm:w-24">
            <svg
              ref={badgeRef}
              viewBox="0 0 100 100"
              className="h-full w-full"
            >
              <defs>
                <path
                  id="badge-circle-path"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>

              {/* Outer ring */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#FF0000"
                strokeWidth="1"
              />

              {/* Curved text */}
              <text fontSize="7.2" fill="#FF0000" letterSpacing="1.5">
                <textPath href="#badge-circle-path" startOffset="0%">
                  PACKAGING &amp; BRAND DESIGN STUDIO • PACKAGING &amp; BRAND DESIGN STUDIO •
                </textPath>
              </text>

              {/* Center arrow icon */}
              <g stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="38" y1="62" x2="62" y2="38" />
                <polyline points="44,38 62,38 62,56" fill="none" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}