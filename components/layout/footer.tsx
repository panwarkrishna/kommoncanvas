"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/lib/constants";
import { useLenis } from "@/hooks/use-lenis";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { RevealText } from "@/components/animations/reveal-text";

export function Footer() {
  const lenis = useLenis();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#") || !isHome) return;
    event.preventDefault();
    const hash = href.replace("/", "");
    if (lenis) {
      lenis.scrollTo(hash, { offset: -88, duration: 1.2 });
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="relative bg-ink text-ink-foreground">
      <div className="scallop-edge bg-paper" aria-hidden="true" />

      <div className="container-outer py-16 md:py-20">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight">
                {siteConfig.name}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-invert">
                {siteConfig.tagline}
              </p>
              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    data-cursor="hover"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/15 text-xs font-medium text-muted-invert transition-all duration-300 hover:-translate-y-1 hover:border-lavender hover:text-lavender"
                  >
                    {social.label.slice(0, 2).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-invert">
                Navigate
              </p>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-ink-foreground/80 transition-colors hover:text-lavender"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-invert">
                Contact
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-foreground/80">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-lavender">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-lavender">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="text-muted-invert">{siteConfig.location}</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-invert">
                Stay in the loop
              </p>
              <p className="mt-6 text-sm text-muted-invert">
                Occasional notes on brand, product, and craft. No spam.
              </p>
              {subscribed ? (
                <p className="mt-4 text-sm font-medium text-lavender">
                  You&apos;re subscribed — thank you.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-4 flex gap-2" noValidate>
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-ink-foreground/15 text-sm text-ink-foreground placeholder:text-muted-invert"
                  />
                  <Button type="submit" variant="lavender" size="icon" aria-label="Subscribe" className="shrink-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="border-t border-ink-foreground/10 py-10 text-center md:py-14">
        <h3 className="font-display text-4xl font-medium tracking-tight sm:text-6xl md:text-7xl">
          <span className="font-accent font-normal">
            <RevealText text="let's work together" />
          </span>
        </h3>
      </div>

      <div className="container-outer flex flex-col items-start justify-between gap-4 border-t border-ink-foreground/10 py-8 text-xs text-muted-invert md:flex-row md:items-center">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="transition-colors hover:text-ink-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="transition-colors hover:text-ink-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
