"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ContactUs
 * ----------------------------------------------------------------------
 * Two-column contact section matching the site's design system:
 * black background, bold white heading with italic serif red accent,
 * thin dividers, dark card form on a subtle off-black panel.
 *
 * Left: heading, description, contact details (email/phone/address),
 * social links.
 * Right: contact form in a dark card (#0d0d0d) with red focus accents.
 *
 * - GSAP: left column slides in from left, form card fades/scales in
 * - Fully responsive: stacks on mobile, form full-width
 * - Basic client-side state + submit handler stub (wire to your API)
 * ----------------------------------------------------------------------
 */

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/yourhandle" },
  { label: "LinkedIn", href: "https://linkedin.com/company/yourhandle" },
  { label: "Behance", href: "https://behance.net/yourhandle" },
  { label: "Dribbble", href: "https://dribbble.com/yourhandle" },
];

const CONTACT_DETAILS = [
  { label: "Email", value: "hello@kommoncanvas.com", href: "mailto:hello@kommoncanvas.com" },
  { label: "Phone", value: "+91 9310217956", href: "tel:+919310217956" },
  { label: "Location", value: "Noida, India (Remote-first)", href: undefined },
];

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([leftRef.current, formCardRef.current], { clearProps: "all" });
        return;
      }

      gsap.set(leftRef.current, { x: -30, opacity: 0 });
      gsap.set(formCardRef.current, { y: 30, opacity: 0 });

      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      };

      gsap.to(leftRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      gsap.to(formCardRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: trigger,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: replace with your actual API route / email service call
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      await new Promise((res) => setTimeout(res, 900));
      setStatus("sent");
      setFormData({ name: "", email: "", budget: "", message: "" });
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section ref={sectionRef} className="w-full bg-black py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Let&apos;s Build Something{" "}
            <span className="font-serif italic font-normal text-[#FF0000]">
              Worth Remembering
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-white/60">
            Have a project in mind? Tell us a bit about it and we&apos;ll get
            back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: contact info */}
          <div ref={leftRef}>
            <div className="space-y-6">
              {CONTACT_DETAILS.map((detail, idx) => (
                <div
                  key={detail.label}
                  className={`pb-6 ${
                    idx !== CONTACT_DETAILS.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {detail.label}
                  </p>
                  
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1 inline-block text-lg sm:text-xl font-semibold text-white transition-colors hover:text-[#FF0000]"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg sm:text-xl font-semibold text-white">
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                Follow
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-sm text-white/80 transition-colors hover:border-[#FF0000] hover:text-[#FF0000]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div
            ref={formCardRef}
            className="rounded-2xl bg-[#0d0d0d] p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-widest text-white/40"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border-b border-white/15 bg-transparent pb-3 text-sm sm:text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#FF0000]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-widest text-white/40"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full border-b border-white/15 bg-transparent pb-3 text-sm sm:text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#FF0000]"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-xs uppercase tracking-widest text-white/40"
                >
                  Budget (optional)
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g. $5k – $10k"
                  className="w-full border-b border-white/15 bg-transparent pb-3 text-sm sm:text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#FF0000]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-widest text-white/40"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none border-b border-white/15 bg-transparent pb-3 text-sm sm:text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#FF0000]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 w-full rounded-full bg-[#FF0000] py-3.5 text-sm sm:text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto sm:px-10"
              >
                {status === "submitting"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent ✓"
                  : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-white/60">
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}