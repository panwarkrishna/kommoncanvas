"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * ServicesShowcase
 * ----------------------------------------------------------------------
 * Dark "services" section: a numbered list on the left with an
 * auto-advancing progress indicator (the left border bar fills and
 * moves down the list on its own), synced with a big number + title +
 * image panel on the right that crossfades in step with the active item.
 *
 * Drop this file anywhere in your Next.js app (e.g. /components/ServicesShowcase.tsx)
 * and use it like: <ServicesShowcase />
 *
 * Images: put your files inside the `public/` folder (e.g. `public/images/foo.jpg`)
 * and reference them starting with a leading slash: "/images/foo.jpg"
 * (do NOT include "public" in the path — Next.js serves that folder at "/").
 *
 * Tailwind only — no extra libraries needed.
 * ----------------------------------------------------------------------
 */

export type ServiceItem = {
  number: string; // e.g. "01"
  title: string;
  description: string;
  image: string; // path inside /public, e.g. "/images/brand-identity.jpg"
};

const DEFAULT_ITEMS: ServiceItem[] = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "We build brand systems that carry a clear point of view across every touchpoint, from logo to voice.",
    image: "./product-img/pro-img08.png",
  },
  {
    number: "02",
    title: "Packaging Design",
    description:
      "Packaging that earns a second look on the shelf and feels considered the moment it's opened.",
    image: "./product-img/pro-img04.png",
  },
  {
    number: "03",
    title: "Creative Partnership Plans",
    description:
      "Our creative partnership retainers are built for momentum. For brands expanding their footprint, we offer continuous, on-demand design support.",
    image: "./product-img/pro-img09.png",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function ServicesShowcase({
  items = DEFAULT_ITEMS,
  autoAdvanceMs = AUTO_ADVANCE_MS,
}: {
  items?: ServiceItem[];
  autoAdvanceMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoAdvanceMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, paused, autoAdvanceMs, items.length]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const active = items[activeIndex];

  return (
    <section className="w-full bg-black px-3 pt-8 md:pt-20">
      <div className="mx-auto max-w-[1366px] grid grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
            Our Services
          </span>

          <h2 className="mt-4 max-w-lg text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.15rem]">
            Services that help you cut through the noise &{" "}
            <span className="font-serif italic font-normal text-white/90">
              grab attention
            </span>
          </h2>

          {/* numbered list with animated progress border */}
          <ul
            className="mt-12 flex list-none flex-col"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={item.number} className="relative list-none pl-6">
                  {/* track (inactive background bar) */}
                  <div className="absolute left-0 top-0 h-full w-[8px] bg-white/10" />

                  {/* animated fill, only rendered for the active item.
                      key={activeIndex} forces a remount so the CSS
                      animation restarts every time this item becomes active */}
                  {isActive && (
                    <div
                      key={activeIndex}
                      className="absolute left-0 top-0 w-[8px] origin-top bg-violet-400 animate-fillbar"
                      style={{
                        height: "100%",
                        animationDuration: `${autoAdvanceMs}ms`,
                      }}
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => handleSelect(index)}
                    className="w-full py-4 text-left focus:outline-none"
                  >
                    <span
                      className={[
                        "block text-xs font-bold tracking-wide transition-colors duration-300",
                        isActive ? "text-violet-300" : "text-white/40",
                      ].join(" ")}
                    >
                      {item.number}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-base font-bold transition-colors duration-300 sm:text-lg",
                        isActive ? "text-white" : "text-white/60",
                      ].join(" ")}
                    >
                      {item.title}
                    </span>

                    {/* description only shown for the active item */}
                    <div
                      className={[
                        "grid overflow-hidden transition-all duration-500 ease-out",
                        isActive
                          ? "mt-2 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <p className="min-h-0 max-w-sm text-sm leading-relaxed text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <div key={activeIndex} className="animate-fadein">
            <span
              className="select-none text-6xl font-extrabold leading-none text-transparent sm:text-7xl lg:text-8xl [-webkit-text-stroke:1.5px_theme(colors.violet.400)]"
              aria-hidden="true"
            >
              {active.number}.
            </span>

            <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              {active.title}
            </h3>

            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 sm:aspect-[16/10]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fillbar {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
        .animate-fillbar {
          animation-name: fillbar;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadein {
          animation: fadein 0.5s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fillbar,
          .animate-fadein {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}