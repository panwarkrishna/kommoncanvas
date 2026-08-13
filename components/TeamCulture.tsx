"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import SectionHeading from "./SectionHeading";

/**
 * TeamCulture
 * ----------------------------------------------------------------------
 * Black section: centered "Team Culture" heading + two-paragraph intro,
 * followed by an infinite, smooth-scrolling marquee of team photos.
 * On hover: marquee pauses AND the hovered card reveals a name +
 * designation overlay (gradient from bottom).
 *
 * - Marquee: continuous scroll (Swiper freeMode + near-zero delay trick)
 * - Pauses entirely when the mouse is over the marquee
 * - Fully responsive: card height scales with viewport, text scales down
 * ----------------------------------------------------------------------
 */

type TeamMember = {
  id: string;
  image: string;
  alt: string;
  name: string;
  designation: string;
  grayscale?: boolean;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    image: "../projects/pro-img01.png",
    alt: "Team member sketching at desk",
    name: "Replace Name",
    designation: "Replace Designation",
  },
  {
    id: "member-2",
    image: "../projects/pro-img02.png",
    alt: "Team member's desk setup with monitor",
    name: "Replace Name",
    designation: "Replace Designation",
  },
  {
    id: "member-3",
    image: "../projects/pro-img03.png",
    alt: "Team member sketching in notebook",
    name: "Apoorva Katkar",
    designation: "Lead Brand Designer",
  },
  {
    id: "member-4",
    image: "../projects/pro-img05.png",
    alt: "Two team members smiling together",
    name: "Replace Name",
    designation: "Replace Designation",
  },
  {
    id: "member-5",
    image: "../projects/pro-img06.png",
    alt: "Team member using stylus on tablet",
    name: "Replace Name",
    designation: "Replace Designation",
  },
  {
    id: "member-6",
    image: "../projects/pro-img07.png",
    alt: "Team member working, black and white photo",
    name: "Replace Name",
    designation: "Replace Designation",
    grayscale: true,
  },
];

export default function TeamCulture() {
  return (
    <section className="w-full bg-black py-14 sm:py-20">
      {/* Heading + description */}
      <div className="mx-auto max-w-3xl px-6 text-center mb-10 sm:mb-14">
        {/* <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          Team <span className="font-serif italic font-normal">Culture</span>
        </h2> */}
        <SectionHeading redText="Team" whiteText="Culture" />

        <p className="text-sm sm:text-base leading-relaxed text-white/80 mt-8">
          Studio Six F operates without walls, a remote-first team built on
          shared ambition and exceptional standards.
        </p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
          We work globally, think collectively, and design with purpose. Our
          culture thrives on independence and interdependence — where clarity
          guides decisions, curiosity drives discovery, and collaboration
          shapes outcomes.
        </p>
      </div>

      {/* Marquee */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={2}
        loop
        freeMode={{ enabled: true, momentum: false }}
        speed={7000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="!px-0"
      >
        {TEAM_MEMBERS.map((member) => (
          <SwiperSlide
            key={member.id}
            style={{
              width: "clamp(160px, 18vw, 300px)",
              height: "clamp(260px, 32vw, 460px)",
            }}
          >
            <div className="group relative h-full w-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  member.grayscale ? "grayscale" : ""
                }`}
                sizes="(max-width: 768px) 45vw, 18vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm sm:text-base font-semibold text-white">
                  {member.name}
                </p>
                <p className="text-xs sm:text-sm text-white/75">
                  {member.designation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}