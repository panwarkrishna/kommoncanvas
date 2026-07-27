import { RevealText } from "@/components/animations/reveal-text";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { Portrait } from "@/components/ui/artwork";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-24 text-ink-foreground md:py-32">
      <div className="container-outer">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          <RevealText text="Real Stories," />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Real Results" delay={0.2} />
          </span>
        </h2>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-3" stagger={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Portrait theme={t.theme} className="h-full w-full rounded-3xl" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-paper p-4 text-ink shadow-lg">
                  <p className="font-display text-base font-semibold">{t.reaction}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{t.quote}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-widest text-lavender-deep">
                    {t.name} — {t.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
