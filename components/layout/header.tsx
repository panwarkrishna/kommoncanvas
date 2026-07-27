"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { contactHref, navLinks, siteConfig } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLenis } from "@/hooks/use-lenis";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = navLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.replace("/#", ""));

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const lenis = useLenis();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  /**
   * Anchor links (e.g. "/#work") smooth-scroll when already on the
   * homepage; everywhere else (real routes like "/about-us" or
   * "/contact-us") we let Next.js's <Link> perform a normal navigation.
   */
  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#") || !isHome) {
      setIsMenuOpen(false);
      return;
    }
    event.preventDefault();
    setIsMenuOpen(false);
    const hash = href.replace("/", "");
    if (lenis) {
      lenis.scrollTo(hash, { offset: -88, duration: 1.2 });
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        isScrolled || isMenuOpen || !isHome
          ? "border-ink/10 bg-paper/85 py-3 backdrop-blur-xl"
          : "border-transparent bg-transparent py-6",
      )}
    >
      <div className="container-outer flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          data-cursor="hover"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {navLinks
            .filter((link) => link.href !== contactHref)
            .map((link) => {
              const isActive = link.href.startsWith("/#")
                ? isHome && activeId === link.href.replace("/#", "")
                : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-cursor="hover"
                  className={cn(
                    "relative text-sm font-medium tracking-tight text-ink/70 transition-colors hover:text-ink",
                    isActive && "text-ink",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-lavender-deep transition-transform duration-300",
                      isActive && "scale-x-100",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
        </nav>

        <div className="hidden lg:block">
          <Button size="sm" asChild data-cursor="hover">
            <Link href={contactHref}>Book a Call</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-outer flex flex-col gap-1 pb-8 pt-6">
              {navLinks
                .filter((link) => link.href !== contactHref)
                .map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block border-b border-ink/10 py-4 font-display text-2xl font-medium text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="pt-6"
              >
                <Button asChild className="w-full">
                  <Link href={contactHref} onClick={() => setIsMenuOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
