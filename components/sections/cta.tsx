import Link from "next/link";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { contactHref } from "@/lib/constants";

export function Cta() {
  return (
    <section className="relative bg-ink py-24 text-center text-ink-foreground md:py-32">
      <div className="container-outer">
        <FadeIn direction="scale">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            <RevealText text="Have a project for us?" />
          </h2>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-10 flex justify-center">
          <MagneticButton>
            <Button variant="lavender" size="lg" asChild data-cursor="hover">
              <Link href={contactHref}>Book a Call</Link>
            </Button>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
