"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

/**
 * OurWork
 * ----------------------------------------------------------------------
 * Full-bleed black section with "Our Work" heading + "Explore Projects"
 * link, and a Swiper marquee below: infinite, smooth, continuous
 * autoplay scroll (not slide-by-slide). Cards have varying widths
 * based on their image aspect ratio.
 *
 * - Pauses on hover (disableOnInteraction: false keeps it resuming)
 * - loop: true + enough slides for Swiper to duplicate cleanly
 * ----------------------------------------------------------------------
 */

type WorkItem = {
  id: string;
  image: string;
  alt: string;
  // relative width vs height, controls slide width at fixed height
  aspect: string; // e.g. "820 / 588"
};

const WORK_ITEMS: WorkItem[] = [
  {
    id: "millet-matters",
    image: "../projects/pro-img01.png",
    alt: "Millet Matters packaging range",
    aspect: "820 / 588",
  },
  {
    id: "vamshi-farms",
    image: "../projects/pro-img02.png",
    alt: "Vamshi Farms honey and ghee packaging",
    aspect: "1200 / 588",
  },
  {
    id: "era-aura",
    image: "../projects/pro-img03.png",
    alt: "Era Aura product styling",
    aspect: "1000 / 588",
  },
  {
    id: "project-4",
    image: "../projects/pro-img04.png",
    alt: "Replace with alt text",
    aspect: "820 / 588",
  },
  {
    id: "project-5",
    image: "../projects/pro-img05.png",
    alt: "Replace with alt text",
    aspect: "1000 / 588",
  },
];

export default function OurWork() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full bg-black py-10 sm:py-14">
      {/* Header row */}
      <div className="flex items-center justify-between px-6 sm:px-10 mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Our <span className="font-serif italic font-normal">Work</span>
        </h2>
        <Link
          href="/work"
          className="hidden sm:inline-flex items-center gap-1 text-sm tracking-wide text-[#a78bfa] underline underline-offset-4 hover:text-white transition-colors"
        >
          EXPLORE PROJECTS <span aria-hidden>›</span>
        </Link>
      </div>

      {/* Marquee */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        onSwiper={(s) => (swiperRef.current = s)}
        slidesPerView="auto"
        spaceBetween={4}
        loop
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={6000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        className="!px-6 sm:!px-10"
      >
        {WORK_ITEMS.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              width: "auto",
              height: "clamp(220px, 32vw, 588px)",
              aspectRatio: item.aspect,
            }}
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile explore link */}
      <div className="mt-6 px-6 sm:hidden">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm tracking-wide text-[#a78bfa] underline underline-offset-4"
        >
          EXPLORE PROJECTS <span aria-hidden>›</span>
        </Link>
      </div>
    </section>
  );
}