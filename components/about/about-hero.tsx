"use client";

import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";

export function AboutHero() {
  return (
    <section className="relative pb-16 pt-36 md:pt-44">
      <div className="container-outer">
        <div className="flex items-start gap-4">
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealText text="Every brand has a story; we make" />{" "}
            <RevealText text="sure yours is seen and appreciated." delay={0.3} />
          </h1>
          <span className="mt-4 hidden h-2.5 w-2.5 shrink-0 rounded-full bg-lavender-deep sm:block" aria-hidden="true" />
        </div>

        <FadeIn direction="scale" delay={0.3} className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-3xl">
          <StillLife theme="slate" className="h-full w-full grayscale contrast-125" rounded="rounded-none" />
        </FadeIn>
      </div>
    </section>
  );
}
