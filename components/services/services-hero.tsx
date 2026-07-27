"use client";

import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";

export function ServicesHero() {
  return (
    <section className="relative bg-ink pb-16 pt-36 text-ink-foreground md:pt-44">
      <div className="container-outer">
        <div className="flex items-start justify-center gap-3 text-center">
          <h1 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            <RevealText text="Our work isn't just about" />{" "}
            <RevealText text="aesthetics, it's" />
            <br />
            <RevealText text="about making your brand" delay={0.25} />{" "}
            <span className="font-accent font-normal">
              <RevealText text="unforgettable." delay={0.45} />
            </span>
          </h1>
          <span className="mt-2 hidden h-2.5 w-2.5 shrink-0 rounded-full bg-lavender sm:block" aria-hidden="true" />
        </div>

        <FadeIn direction="scale" delay={0.3} className="relative mt-14 aspect-[16/8] w-full overflow-hidden rounded-3xl">
          <StillLife theme="gold" className="h-full w-full" rounded="rounded-none" />
        </FadeIn>
      </div>
    </section>
  );
}
