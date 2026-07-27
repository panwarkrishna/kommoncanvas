import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { doList, dontList } from "@/lib/constants";
import type { DoDontItem } from "@/types";

function DoDontCard({ heading, items, accent }: { heading: string; items: DoDontItem[]; accent?: boolean }) {
  return (
    <div className="rounded-3xl bg-ink p-8 text-ink-foreground md:p-10">
      <h3 className="font-display text-2xl font-semibold tracking-tight">
        {heading.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="font-accent font-normal">{heading.split(" ").slice(-1)}</span>
      </h3>
      <StaggerGroup className="mt-8 divide-y divide-ink-foreground/10" stagger={0.06}>
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <div className="py-5">
              <p className={`font-display text-base font-medium ${accent ? "text-lavender" : "text-ink-foreground"}`}>
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-invert">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

export function DoDont() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-outer grid gap-6 lg:grid-cols-2">
        <DoDontCard heading="What We Don't Do" items={dontList} />
        <DoDontCard heading="What We Do" items={doList} accent />
      </div>
    </section>
  );
}
