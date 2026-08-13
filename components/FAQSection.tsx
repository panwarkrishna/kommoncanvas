"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, User, CheckCircle2, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  const faqs = [
    {
      question: "How do we get started?",
      answer:
        "We begin with a discovery call to understand your business, goals, target audience, and vision. From there, we create a tailored strategy and project roadmap.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer full-stack web development, custom UI/UX design, modern branding, and performance optimization tailored to your business needs.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines depend on complexity. Typically, standard landing pages take 1-2 weeks, while full web platforms require 4-6 weeks.",
    },
    {
      question: "Will I be involved during the design process?",
      answer:
        "Absolutely! We maintain full transparency through regular updates, design previews, and feedback loops throughout the project lifecycle.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "We offer up to 3 rounds of revisions during the design phase to ensure everything aligns perfectly with your expectations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Fade Up
      gsap.fromTo(
        leftColRef.current,
        { y: 60, opacity: 0 },
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

      // Right Column Fade Up with Delay
      gsap.fromTo(
        rightColRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white px-3 pt-8 md:pt-30"
    >
      <div className="mx-auto max-w-[1366px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Title & Accordions */}
        <div ref={leftColRef} className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-3">
              FAQ
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg mb-8 font-normal">
              Everything you need to know before starting your branding journey.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-[24px] transition-all duration-300 border border-white/20 overflow-hidden ${
                    isOpen
                      ? "bg-[#FF0000] text-white border-transparent"
                      : "bg-[#3A3A3A]/90 text-white hover:bg-[#3A3A3A]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-lg sm:text-xl font-bold leading-tight">
                      {faq.question}
                    </span>
                    <span className="text-2xl font-semibold flex items-center justify-center min-w-[28px]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-zinc-100 leading-relaxed font-normal transition-all duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Red CTA Banner */}
        <div
          ref={rightColRef}
          className="lg:col-span-5 bg-[#FF0000] rounded-[32px] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden min-h-[580px]"
        >
          {/* Background Watermark Question Mark */}
          <div className="absolute top-4 right-4 text-white/20 text-[140px] font-black leading-none select-none pointer-events-none">
            ?
          </div>

          <div className="relative z-10">
            {/* Header Text */}
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Still have <br /> questions
            </h3>

            <h4 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
              Let&apos;s build something <br /> remarkable together.
            </h4>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              Whether you&apos;re starting from scratch or ready to elevate your brand, we&apos;re here to guide you every step of the way.
            </p>

            {/* Feature List */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-base sm:text-lg leading-snug">
                  Free 30-minute <br className="hidden sm:block" /> strategy call
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-base sm:text-lg leading-snug">
                  Personalized project <br className="hidden sm:block" /> consultation
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-base sm:text-lg leading-snug">
                  No obligation, just <br className="hidden sm:block" /> expert advice
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Call Pill Button */}
          <div className="mt-8 relative z-10">
            <button className="w-full bg-[#3A3A3A]/90 hover:bg-[#3A3A3A] transition-colors border border-white/40 rounded-full p-2.5 pl-6 flex items-center justify-between group cursor-pointer">
              <span className="text-zinc-200 text-sm font-medium">
                Book a Free Discovery Call......
              </span>
              <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}