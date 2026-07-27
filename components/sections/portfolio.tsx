"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { Marquee } from "@/components/animations/marquee";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { StillLife } from "@/components/ui/artwork";
import { portfolioProjects } from "@/lib/constants";

const featuredProjects = portfolioProjects.slice(0, 6);

export function Portfolio() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 select-none opacity-[0.06]"
      >
        <Marquee pauseOnHover={false} speed="slow">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-[9rem] font-bold leading-none sm:text-[12rem]">
              Featured
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-outer relative">
        <FadeIn className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-invert">Our Work</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-invert">
            A glimpse at the brands we&apos;ve helped find their voice.
          </p>
        </FadeIn>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <Link href="/work" className="group block" data-cursor="hover">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <StillLife theme={project.theme} className="h-full w-full" rounded="rounded-none" />
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-ink" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg font-medium tracking-tight">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-invert">{project.category}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn delay={0.2} className="mt-14 flex justify-center">
          <MagneticButton>
            <Button variant="lavender" size="lg" asChild data-cursor="hover">
              <Link href="/work">View All</Link>
            </Button>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
