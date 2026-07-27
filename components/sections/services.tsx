import Link from "next/link";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { StillLife } from "@/components/ui/artwork";
import { contactHref, services } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 text-ink-foreground md:py-32">
      <div className="container-outer grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-invert">
            Our Services
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            <RevealText text="Services that help you cut" />
            <br />
            <RevealText text="through the noise &" />{" "}
            <RevealText text="grab attention." delay={0.3} className="font-accent font-normal" />
          </h2>

          <StaggerGroup className="mt-14 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10" stagger={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="font-display text-sm text-muted-invert sm:w-10">
                    {service.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-invert">
                      {service.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeIn delay={0.2} className="mt-10">
            <MagneticButton>
              <Button variant="lavender" size="lg" asChild data-cursor="hover">
                <Link href={contactHref}>Book a Call</Link>
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <FadeIn direction="scale" delay={0.2} className="relative mx-auto max-w-xs -rotate-3">
            <div className="overflow-hidden rounded-3xl bg-paper p-3 shadow-2xl">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <StillLife theme="gold" className="h-full w-full" rounded="rounded-none" />
              </div>
              <p className="px-2 py-3 text-center font-display text-sm font-medium text-ink">
                Creative Partnership Plans
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
