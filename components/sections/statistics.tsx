import { Feather, MapPin, Award } from "lucide-react";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import { stats } from "@/lib/constants";

const ICONS = { feather: Feather, "map-pin": MapPin, award: Award } as const;

export function Statistics() {
  return (
    <section className="relative bg-lavender py-24 text-lavender-foreground md:py-32">
      <div className="container-outer text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
          <RevealText text="Partnering with visionary founders to shape brands" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="customers love, trust, and remember." delay={0.3} />
          </span>
        </h2>

        <FadeIn delay={0.3} className="mt-16">
          <StaggerGroup
            className="mx-auto grid max-w-3xl grid-cols-1 gap-10 rounded-[2rem] bg-paper p-10 text-ink shadow-xl sm:grid-cols-3 md:p-14"
            stagger={0.12}
          >
            {stats.map((stat) => {
              const Icon = ICONS[stat.icon];
              return (
                <StaggerItem key={stat.id} className="flex flex-col items-center gap-3">
                  <Icon className="h-6 w-6 text-lavender-deep" aria-hidden="true" />
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-display text-4xl font-semibold tracking-tight"
                  />
                  <p className="text-xs uppercase tracking-widest text-muted">{stat.label}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </FadeIn>
      </div>
    </section>
  );
}
