import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { clientNames } from "@/lib/constants";

export function Clients() {
  return (
    <section aria-label="Clients" className="relative bg-ink pb-24 pt-4 text-ink-foreground md:pb-32">
      <div className="container-outer">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-invert">
            Businesses We&apos;ve Worked With
          </p>
        </FadeIn>

        <StaggerGroup
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/10 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.03}
        >
          {clientNames.map((name) => (
            <StaggerItem key={name}>
              <div className="flex h-24 items-center justify-center bg-ink px-4 transition-colors duration-300 hover:bg-ink-elevated">
                <span className="font-display text-sm font-medium text-muted-invert transition-colors duration-300 hover:text-ink-foreground">
                  {name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
