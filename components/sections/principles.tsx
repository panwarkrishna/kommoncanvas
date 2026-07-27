"use client";

import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { principles } from "@/lib/constants";
import { useLenis } from "@/hooks/use-lenis";

export function Principles() {
  const lenis = useLenis();

  function scrollToAbout(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (lenis) {
      lenis.scrollTo("#about", { offset: -88, duration: 1.2 });
    } else {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative bg-paper py-24 text-ink md:py-32">
      <div className="container-outer grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            <RevealText text="Your brand deserves" />
            <br />
            <span className="font-accent font-normal">
              <RevealText text="the complete craft." delay={0.2} />
            </span>
          </h2>
          <FadeIn delay={0.3} className="mt-6 max-w-sm">
            <p className="text-base leading-relaxed text-muted">
              Great design isn&apos;t decoration bolted on at the end — it&apos;s the
              discipline we apply from day one, on every deliverable, for every client.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="mt-8">
            <MagneticButton>
              <Button variant="outline" size="lg" asChild data-cursor="hover">
                <a href="#about" onClick={scrollToAbout}>
                  About Us
                </a>
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>

        <StaggerGroup className="grid grid-cols-2 gap-4 lg:col-span-7" stagger={0.1}>
          {principles.map((principle) => (
            <StaggerItem key={principle.id}>
              <div className="group flex h-full flex-col justify-between rounded-3xl bg-lavender/25 p-6 transition-colors duration-500 hover:bg-lavender/40 sm:p-8">
                <span
                  className="font-display text-6xl font-bold text-lavender-deep/50 transition-colors duration-500 group-hover:text-lavender-deep sm:text-7xl"
                  aria-hidden="true"
                >
                  {principle.letter}
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{principle.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
