import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] font-bold leading-none text-lavender/10 sm:text-[22rem]"
        style={{ WebkitTextStroke: "2px rgba(195,178,245,0.15)", WebkitTextFillColor: "transparent" }}
      >
        KC
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] font-bold leading-none text-lavender/10 sm:text-[22rem]"
        style={{ WebkitTextStroke: "2px rgba(195,178,245,0.15)", WebkitTextFillColor: "transparent" }}
      >
        KC
      </span>

      <FadeIn direction="scale" className="container-outer relative text-center">
        <p className="mx-auto max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl">
          <RevealText text="From strategy to shelf, we design" />{" "}
          <RevealText text="identities built to lead their categories." delay={0.2} />
        </p>
      </FadeIn>
    </section>
  );
}
