import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";
import type { ArtworkTheme } from "@/types";

const STRIP_THEMES: ArtworkTheme[] = ["slate", "ember", "gold", "mint", "violet"];

export function TeamCulture() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-outer text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          <RevealText text="Team" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Culture" delay={0.15} />
          </span>
        </h2>
        <FadeIn delay={0.25} className="mx-auto mt-5 max-w-2xl">
          <p className="text-base leading-relaxed text-muted">
            Kommon Canvas operates without walls, in remote-first teams led by
            chartered ambition and exceptional standards. We work globally,
            think collectively, and design with purpose — our culture thrives
            on independence and interdependence, in equal measure.
          </p>
        </FadeIn>
      </div>

      <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
        {STRIP_THEMES.map((theme, i) => (
          <StaggerItem key={i}>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <StillLife theme={theme} className="h-full w-full grayscale" rounded="rounded-none" />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
