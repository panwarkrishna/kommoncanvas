"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        logoRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black text-white px-3 pt-8 md:pt-30 overflow-hidden"
    >
      <div className="max-w-[1366px] mx-auto flex flex-col">
        
        {/* Headline */}
        <h2
          ref={headingRef}
          className="text-4xl sm:text-6xl text-left md:text-7xl font-extrabold tracking-tight mb-16 text-center leading-[1.05]"
        >
          Let&apos;s create something <br />
          <span className="text-[#FF0000]">unforgettable.</span>
        </h2>

        {/* Contact Info (Flex Row Layout with Borders) */}
        <div
          ref={infoRef}
          className="con_info w-full border-t border-b border-zinc-700  my-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left"
        >
          {/* Email */}
          <div className="flex flex-col items-start ">
            <span className="text-zinc-400 text-sm font-normal mb-1">
              Email
            </span>
            <a
              href="mailto:hello@emergenxt.com"
              className="text-white text-xl sm:text-2xl font-bold hover:text-[#FF0000] transition-colors tracking-tight"
            >
              hello@emergenxt.com
            </a>
          </div>

          {/* Call */}
          <div className="flex flex-col items-start ">
            <span className="text-zinc-400 text-sm font-normal mb-1">
              Call
            </span>
            <a
              href="tel:+919876543210"
              className="text-white text-xl sm:text-2xl font-bold hover:text-[#FF0000] transition-colors tracking-tight"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-start ">
            <span className="text-zinc-400 text-sm font-normal mb-1">
              Location
            </span>
            <p className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              New Delhi, India
            </p>
          </div>
        </div>

        {/* Public Logo & Nav Links */}
        <div
          ref={logoRef}
          className="mt-10 flex flex-col items-center space-y-10"
        >
          {/* Public Folder Image Logo */}
          <div className="flex items-center justify-center my-6">
            <Image
              src="./kommoncanvas-w-logo.png"
              alt="Kommon Canvas Logo"
              width={350}
              height={100}
              className="max-w-[350px] object-contain"
              priority
            />
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-8 sm:gap-12 text-zinc-300 text-lg sm:text-xl font-medium mt-5 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Service
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}