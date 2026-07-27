import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { Portrait } from "@/components/ui/artwork";
import { valueWords } from "@/lib/constants";

export function ValuesIntro() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-outer grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <FadeIn direction="left" className="lg:col-span-3">
          <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
            <div className="absolute inset-0 -rotate-6 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <Portrait theme="slate" className="h-full w-full rounded-none grayscale" />
            </div>
            <div className="absolute inset-0 translate-x-6 translate-y-4 rotate-6 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <Portrait theme="ember" className="h-full w-full rounded-none grayscale" />
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-9">
          <StaggerGroup stagger={0.06}>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {valueWords.map((v, i) => (
                <StaggerItem key={v.id} className="inline-block">
                  <span className={i % 2 === 1 ? "font-accent font-normal" : ""}>{v.word}.</span>{" "}
                </StaggerItem>
              ))}
            </h2>
          </StaggerGroup>

          <FadeIn delay={0.2} className="mt-8 max-w-2xl">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              At Kommon Canvas, these six words aren&apos;t a mission-statement
              poster — they&apos;re the standard we hold every deliverable to.
              We help founders and brands find the story worth telling, then
              give that story a design system disciplined enough to carry it
              anywhere.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
