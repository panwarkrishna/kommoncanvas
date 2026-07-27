import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";
import { recognitions } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Recognition() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-outer text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          <RevealText text="Certifications &" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Recognition" delay={0.15} />
          </span>
        </h2>
        <FadeIn delay={0.2} className="mx-auto mt-4 max-w-md">
          <p className="text-sm text-muted">
            Our work has been recognized and featured by global creative communities.
          </p>
        </FadeIn>
      </div>

      <div className="mt-14 space-y-6">
        {recognitions.map((item) => (
          <FadeIn key={item.id} direction={item.imagePosition === "left" ? "left" : "right"}>
            <div
              className={cn(
                "container-outer grid gap-8 overflow-hidden rounded-3xl md:grid-cols-2 md:items-center",
                item.background === "ink" ? "bg-ink text-ink-foreground" : "bg-lavender text-lavender-foreground",
              )}
            >
              <div
                className={cn(
                  "aspect-[4/3] overflow-hidden",
                  item.imagePosition === "right" && "md:order-2",
                )}
              >
                <StillLife theme={item.theme} className="h-full w-full" rounded="rounded-none" />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  {item.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="font-accent font-normal">
                    {item.title.split(" ").slice(-2).join(" ")}
                  </span>
                </h3>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    item.background === "ink" ? "text-muted-invert" : "text-lavender-foreground/80",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
