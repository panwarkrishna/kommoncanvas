"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/**
 * ShowcaseSlider
 * ----------------------------------------------------------------------
 * Full-bleed project/case-study slider where the active slide's image
 * slowly zooms in ("Ken Burns" effect) for the duration it's on screen,
 * then crossfades to the next slide. Built with Swiper (Autoplay +
 * EffectFade + Pagination).
 *
 * The zoom is pure CSS: each <img> has a `scale(1) -> scale(1.12)`
 * animation that runs only while its parent slide carries Swiper's
 * `.swiper-slide-active` class, and resets whenever the slide becomes
 * inactive again — so it restarts cleanly every time a slide re-enters.
 *
 * npm i swiper   (already assumed installed elsewhere in your project)
 *
 * Drop your real project photography into /public/work/ and update the
 * SLIDES array below.
 * ----------------------------------------------------------------------
 */

const BRAND_RED = "#FF1E1E";
const AUTOPLAY_DELAY = 5000; // ms per slide — keep in sync with the CSS zoom duration below

const SLIDES = [
  {
    id: 1,
    title: "Cumin Co.",
    category: "Packaging & Brand Identity",
    image: "../projects/pro-img01.png",
  },
  {
    id: 2,
    title: "Vamshi Farms",
    category: "Branding",
    image: "../projects/pro-img02.png",
  },
  {
    id: 3,
    title: "Loam",
    category: "Visual Identity",
    image: "../projects/pro-img03.png",
  },
  {
    id: 4,
    title: "Pawsible Foods",
    category: "Packaging Design",
    image: "../projects/pro-img04.png",
  },
];

export default function ShowcaseSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black px-3 py-10 sm:py-16">
      <style jsx global>{`
        .showcase-slider .swiper-slide img {
          transform: scale(1);
        }
        .showcase-slider .swiper-slide-active img {
          animation: showcase-zoom ${AUTOPLAY_DELAY + 800}ms ease-out forwards;
        }
        @keyframes showcase-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.14);
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={900}
            autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
            pagination={{ el: ".showcase-pagination", clickable: true }}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActive(s.realIndex)}
            className="showcase-slider"
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    className="object-cover will-change-transform"
                    priority={slide.id === 1}
                  />

                  {/* bottom gradient so caption text stays readable over any photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  {/* caption */}
                  <div className="absolute inset-x-4 bottom-5 flex flex-col gap-2 sm:inset-x-8 sm:bottom-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span
                        className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs"
                        style={{ backgroundColor: BRAND_RED }}
                      >
                        {slide.category}
                      </span>
                      <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* custom pagination dots, styled to match the brand */}
          <div className="showcase-pagination absolute bottom-5 right-4 z-10 flex w-fit gap-2 sm:bottom-8 sm:right-8" />
        </div>

        {/* slide counter / index list under the slider */}
        <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-8" : "w-4 bg-white/20 hover:bg-white/40",
              ].join(" ")}
              style={i === active ? { backgroundColor: BRAND_RED } : undefined}
              aria-label={`Go to ${slide.title}`}
            />
          ))}
        </div>
      </div>

      {/* pagination bullet styling (Swiper renders plain <span> bullets we theme here) */}
      <style jsx global>{`
        .showcase-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
        }
        .showcase-pagination .swiper-pagination-bullet-active {
          background: ${BRAND_RED};
          width: 20px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}