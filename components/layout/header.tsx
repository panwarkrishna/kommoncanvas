"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Header
 * ----------------------------------------------------------------------
 * - Desktop: black page background with a floating, semi-transparent
 *   "pill" nav bar (logo mark + wordmark + centered links) plus a
 *   separate red rounded "BOOK A CALL" button sitting to its right —
 *   matches the reference screenshot exactly.
 * - Mobile: hamburger opens a right-side drawer (dark, with red
 *   accents to match the brand) with stacked nav links and a red pill
 *   "Book a Call" CTA at the bottom.
 *
 * Drop in components/Header.tsx and render once, e.g. in app/layout.tsx.
 * Tailwind only — no extra libraries needed.
 * ----------------------------------------------------------------------
 */

const BRAND_RED = "#FF1E1E";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Service", href: "/service" },
  { label: "About", href: "/about" },
];

// same links, labelled to match the mobile drawer mock ("Services", "About Us")
const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/service" },
  { label: "About Us", href: "/about" },
];

function LogoMark() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      data-cursor="hover"
    >
      <Image
          src="./kommoncanvas-w-logo.png"
          alt="Kommon Canvas"
          width={160}
          height={44}
          className="h-10 w-auto"
        />
    </Link>
  );
}

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open menu"
      className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 lg:hidden"
    >
      <span className="h-0.5 w-5 bg-white" />
      <span className="h-0.5 w-5 bg-white" />
    </button>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // lock background scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={[
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={[
          "fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col justify-between",
          "bg-[#0d0d0d]",
          "px-6 py-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <span className="font-serif text-sm font-bold italic text-black">
                  KC
                </span>
              </span>
              <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                Kommon Canvas
              </span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <span className="text-lg leading-none">&times;</span>
            </button>
          </div>

          <nav className="mt-8 flex flex-col">
            {MOBILE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="border-b border-white/10 py-5 text-2xl font-semibold tracking-tight text-white transition-colors first:pt-0 hover:text-[#FF1E1E]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 flex w-full items-center justify-center rounded-full py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: BRAND_RED }}
        >
          Book a Call
        </Link>
      </div>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-black px-3 pt-4 pb-3 sm:px-6">
      <div className="mx-auto flex max-w-[730px] items-center justify-center gap-8">
        {/* floating gray pill: logo + desktop nav */}
        <div className="flex min-w-0 flex-1 items-center justify-around gap-4 rounded-full border border-white/80 bg-[#7c7c7ca3] py-3 px-3 backdrop-blur-sm lg:gap-10">
          <LogoMark />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "whitespace-nowrap text-base transition-colors",
                  i === 0
                    ? "font-bold text-white"
                    : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <HamburgerButton onClick={() => setOpen(true)} />
        </div>

        {/* standalone red CTA, separate rounded pill next to the gray one */}
        <Link
          href="/contact"
          className="hidden shrink-0 whitespace-nowrap rounded-full px-10 py-6 text-sm font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 lg:inline-flex lg:items-center"
          style={{ backgroundColor: BRAND_RED }}
        >
          Book a Call
        </Link>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
