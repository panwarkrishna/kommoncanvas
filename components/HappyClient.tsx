"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function ClientSlider() {
  const logos = [
    { id: 1, src: './logos/our-client-logo01.svg', alt: 'Vamshi Farms' },
    { id: 2, src: './logos/our-client-logo02.svg', alt: 'Loam' },
    { id: 3, src: './logos/our-client-logo03.svg', alt: 'Hyuman' },
    { id: 4, src: './logos/our-client-logo04.svg', alt: 'Pawsible Foods' },
    { id: 5, src: './logos/our-client-logo05.svg', alt: 'Cumin Co' },
    { id: 6, src: './logos/our-client-logo06.svg', alt: 'Pawsible Foods' },
    { id: 7, src: './logos/our-client-logo07.svg', alt: 'Cumin Co' },
    { id: 8, src: './logos/our-client-logo08.svg', alt: 'Cumin Co' },
    { id: 9, src: './logos/our-client-logo09.svg', alt: 'Cumin Co' },
    { id: 10, src: './logos/our-client-logo10.svg', alt: 'Cumin Co' },
  ];

  return (
    <section className="bg-black w-full px-3 pt-8 md:pt-20">
      <div className="mx-auto max-w-[1366px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Side: Text Area */}
          <div className="flex-shrink-0 text-center md:text-left min-w-[200px]">
            <h2 className="text-[#FF0000] text-6xl md:text-7xl font-bold tracking-tight">
              90+
            </h2>
            <p className="text-white text-2xl md:text-3xl font-medium mt-1">
              Happy Clients
            </p>
          </div>

          {/* Right Side: Swiper Slider */}
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 40 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
              className="client-swiper"
            >
              {logos.map((logo) => (
                <SwiperSlide key={logo.id} className="flex items-center justify-center">
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      /* 
                        `brightness-0 invert` se dark/black SVGs poori tarah pure white ho jayenge.
                        `opacity-80 hover:opacity-100` se smooth hover contrast milega.
                      */
                      className="w-full h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        </div>
      </div>
    </section>
  );
}