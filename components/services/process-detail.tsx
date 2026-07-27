import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";
import { processDetailSteps } from "@/lib/constants";

export function ProcessDetail() {
  return (
    <section className="relative bg-ink py-24 text-ink-foreground md:py-32">
      <div className="container-outer text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          <RevealText text="Our" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Process" delay={0.15} />
          </span>
        </h2>
        <FadeIn delay={0.2} className="mt-4">
          <p className="text-sm text-muted-invert">Here&apos;s how we craft your vision.</p>
        </FadeIn>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {processDetailSteps.map((step, index) => (
          <FadeIn key={step.id} direction={index % 2 === 0 ? "left" : "right"} amount={0.15}>
            <div className="container-outer grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-lavender sm:text-3xl">
                    {step.title}
                  </h3>
                  <span className="font-display text-lg text-muted-invert">{step.number}</span>
                </div>
                <div className="mt-5 space-y-4">
                  {step.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-invert">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className={`aspect-[4/3] overflow-hidden rounded-3xl ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <StillLife theme={step.theme} className="h-full w-full" rounded="rounded-none" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
