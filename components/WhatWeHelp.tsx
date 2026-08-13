"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Image as ImageIcon, PenTool, Layout, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Custom Figma SVG Icon (Jab Icon mode use karna ho)
const FigmaIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 38 57"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" />
    <path d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.2533 33.7467 0 28.5 0H19Z" />
    <path d="M0 9.5C0 14.7467 4.2533 19 9.5 19H19V0H9.5C4.2533 0 0 4.2533 0 9.5Z" />
    <path d="M0 28.5C0 33.7467 4.2533 38 9.5 38H19V19H9.5C4.2533 19 0 23.2533 0 28.5Z" />
  </svg>
);

export default function WhatWeHelp() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Tools Array: isText property add kar di hai
  // Aap text mode aur icon mode dono easily mix or switch kar sakte hain
  const tools = [
    {
      name: "Ps",
      title: "Photoshop",
      isText: true, // Direct Text dikhane ke liye
      icon: <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Ai",
      title: "Illustrator",
      isText: true,
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Cdr",
      title: "CorelDraw",
      isText: true,
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Figma",
      title: "Figma",
      isText: false, // Icon dikhane ke liye false karein
      icon: <FigmaIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Xd",
      title: "Adobe XD",
      isText: true,
      icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Id",
      title: "InDesign",
      isText: true,
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const services = [
    {
      id: 1,
      title: "Brand Strategy",
      description:
        "A clear strategic foundation that defines your brand's purpose, positioning, audience, and direction.",
      tags: [
        "Brand Purpose",
        "Target Audience",
        "Business Goals",
        "Brand Positioning",
        "Market Research",
        "Visual Direction",
      ],
      bgColor: "bg-[#3A3A3A] text-white border-2 border-zinc-500",
      pillBorder: "border-zinc-400",
    },
    {
      id: 2,
      title: "Brand Identity",
      description:
        "A distinctive visual identity that gives your brand a consistent, recognizable, and memorable presence.",
      tags: [
        "Logo Design",
        "Typography",
        "Color System",
        "Brand Guidelines",
        "Visual Language",
        "Brand Assets",
      ],
      bgColor: "bg-[#FF0000] text-white border-2 border-red-500",
      pillBorder: "border-white/70",
    },
    {
      id: 3,
      title: "Packaging Design",
      description:
        "Packaging that combines creativity, functionality, and brand storytelling to make your product stand out.",
      tags: [
        "Packaging Concept",
        "Dieline Design",
        "Label Design",
        "Print Design",
        "Material Selection",
        "3D Mockups",
      ],
      bgColor: "bg-[#1E1E1E] text-white border-2 border-zinc-700",
      pillBorder: "border-zinc-500",
    },
    {
      id: 4,
      title: "Digital Experience",
      description:
        "Digital experiences designed to connect with your audience through intuitive, engaging, and impactful design.",
      tags: [
        "UI/UX Design",
        "Web Design",
        "Social Media",
        "Digital Campaigns",
        "User Experience",
        "Motion Design",
      ],
      bgColor: "bg-[#282828] text-white border-2 border-zinc-600",
      pillBorder: "border-zinc-400",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${services.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.fromTo(
          card,
          {
            yPercent: 120,
            rotation: i % 2 === 0 ? 5 : -7,
            scale: 0.9,
          },
          {
            yPercent: 0,
            rotation: i === cards.length - 1 ? -8 : 0,
            scale: 1,
            ease: "power2.out",
            duration: 1,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [services.length]);

  return (
    <div ref={containerRef} className="w-full bg-black text-white min-h-screen px-3 pt-5">
      <section className="h-screen w-full mx-auto max-w-[1366px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
        
        {/* Left Side: Static Text & Tools */}
        <div className="lg:col-span-5 flex flex-col justify-center z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">
            <span className="text-white block">What We Help</span>
            <span className="text-[#FF0000] block mt-1">You Shape...</span>
          </h2>

          <div className="mt-10 sm:mt-14">
            <p className="text-zinc-300 text-sm sm:text-base font-normal mb-4 flex items-center gap-2">
              Tools that we use 
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="w-11 h-11 sm:w-12 sm:h-12 border-2 border-white rounded-xl flex items-center justify-center hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-300 cursor-pointer group select-none"
                  title={tool.title}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300 font-bold text-sm sm:text-base leading-none">
                    {tool.isText ? tool.name : tool.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Pin Stacking Cards */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-[540px] h-[300px] sm:h-[330px]">
            {services.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{ zIndex: index + 10 }}
                className={`absolute inset-0 w-full h-full rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl ${item.bgColor}`}
              >
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="w-full pt-6 mt-5 border-t border-white">
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${item.pillBorder} truncate`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}