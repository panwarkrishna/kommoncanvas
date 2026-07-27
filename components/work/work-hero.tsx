import { RevealText } from "@/components/animations/reveal-text";

export function WorkHero() {
  return (
    <section className="relative bg-ink pb-10 pt-36 text-center text-ink-foreground md:pt-44">
      <div className="container-outer flex items-start justify-center gap-3">
        <h1 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
          <RevealText text="Impactful Design – Where" />
          <br />
          <RevealText text="Companies" delay={0.2} />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Become Brands." delay={0.35} />
          </span>
        </h1>
        <span className="mt-2 hidden h-2.5 w-2.5 shrink-0 rounded-full bg-lavender sm:block" aria-hidden="true" />
      </div>
    </section>
  );
}
