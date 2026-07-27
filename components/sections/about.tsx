import { Sparkle } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { StillLife, Portrait } from "@/components/ui/artwork";

export function About() {
  return (
    <section id="about" className="relative bg-lavender py-20 text-lavender-foreground md:py-28">
      <div className="container-outer grid items-center gap-10 lg:grid-cols-12">
        <FadeIn direction="left" className="lg:col-span-2">
          <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32">
            <div className="h-full w-full overflow-hidden rounded-full shadow-lg">
              <Portrait theme="gold" />
            </div>
            <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-lavender shadow-md">
              <Sparkle className="h-4 w-4" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="text-center lg:col-span-8 lg:text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-lavender-foreground/70">
            So, we&apos;re off
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl">
            We&apos;re genuinely obsessed with building brands{" "}
            <span className="font-accent">everyday people fall for</span>.
          </p>
          <MagneticButton className="mt-8 inline-block">
            <Button size="lg" asChild data-cursor="hover">
              <Link href="/about-us">Our Story</Link>
            </Button>
          </MagneticButton>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="hidden gap-4 lg:col-span-2 lg:flex lg:flex-col">
          <div className="h-28 w-full -rotate-2 overflow-hidden rounded-2xl shadow-lg">
            <StillLife theme="mint" className="h-full w-full" />
          </div>
          <div className="h-28 w-full rotate-3 overflow-hidden rounded-2xl shadow-lg">
            <StillLife theme="slate" className="h-full w-full" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
