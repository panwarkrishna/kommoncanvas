import Link from "next/link";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactHref, faqs } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="relative bg-ink py-24 text-ink-foreground md:py-32">
      <div className="container-outer">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-invert">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              <RevealText text="Frequently" />
              <br />
              <span className="font-accent font-normal">
                <RevealText text="Asked" delay={0.15} />
              </span>{" "}
              <RevealText text="Questions." delay={0.25} />
            </h2>
            <FadeIn delay={0.3} className="mt-8">
              <MagneticButton>
                <Button variant="lavender" size="lg" asChild data-cursor="hover">
                  <Link href={contactHref}>Book a Call</Link>
                </Button>
              </MagneticButton>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
