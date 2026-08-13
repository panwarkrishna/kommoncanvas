"use client";
import SectionHeading from "@/components/SectionHeading";
import { motion } from 'framer-motion';


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles import
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "The team understood our product from day one and designed packaging that truly stands out on the shelf. Every detail, from the die-line to the finish, was thoughtfully crafted.",
      author: "Arjun Mehta",
      role: "Founder, Pixel Foods",
    },
    {
      id: 2,
      quote:
        "Working with this design team transformed our packaging line. Their structural design and print-ready files exceeded our expectations and saved us weeks in production.",
      author: "Rohan Sharma",
      role: "Co-Founder, TechFlow Snacks",
    },
    {
      id: 3,
      quote:
        "Exceptional creativity and flawless execution! They delivered a complete packaging design system across our entire product range, ahead of schedule.",
      author: "Priya Verma",
      role: "Product Lead, Innovate Labs",
    },
    {
      id: 4,
      quote:
        "Highly professional service! The new packaging design and brand positioning completely refreshed how customers see us on the shelf.",
      author: "Karan Patel",
      role: "CEO, Nexa Packaging",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Fade Up Animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Red Line Expand Animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Slider Cards Stagger Animation
      gsap.fromTo(
        sliderRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white px-3 pt-8 md:pt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1366px] flex flex-col items-center">
        
          {/* Section Heading */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
          <SectionHeading redText="Voices of" whiteText="Our Clients" />
           </motion.div>

        {/* Testimonial Swiper Slider */}
        <div ref={sliderRef} className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="bg-[#3A3A3A]/80 hover:bg-[#3A3A3A] transition-all duration-300 border-2 border-white/80 rounded-[28px] p-8 sm:p-9 flex flex-col justify-between w-full h-full shadow-xl relative group">
                  
                  {/* Content Top Part */}
                  <div>
                    {/* Top Quote Icon - Bada size (6xl) */}
                    <div className="text-white text-5xl sm:text-6xl font-serif leading-none select-none opacity-70 -mb-2">
                      “
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-normal my-5">
                      {item.quote}
                    </p>

                    {/* Bottom Right Quote Icon - Bada size (6xl) */}
                    <div className="text-white text-5xl sm:text-6xl font-serif leading-none text-right -mt-4 select-none opacity-70">
                      ”
                    </div>
                  </div>

                  {/* Author Details - Always sticks to bottom */}
                  <div className="pt-4">
                    <h4 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                      <span className="text-zinc-400 font-normal">—</span> {item.author}
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 font-medium">
                      {item.role}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}