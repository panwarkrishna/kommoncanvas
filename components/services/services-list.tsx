import { RevealText } from "@/components/animations/reveal-text";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";
import { services } from "@/lib/constants";

export function ServicesList() {
  return (
    <section className="relative bg-paper py-24 text-ink md:py-32">
      <div className="container-outer">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          <RevealText text="Our" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Services" delay={0.15} />
          </span>
        </h2>

        <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-3" stagger={0.12}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <span className="font-display text-sm text-muted">{service.index}</span>
              <div className="mt-3 aspect-[4/3] overflow-hidden rounded-2xl">
                <StillLife theme={service.theme} className="h-full w-full" rounded="rounded-none" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{service.tagline}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
