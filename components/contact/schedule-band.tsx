import { Calendar, Clock } from "lucide-react";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";

const TIME_SLOTS = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

export function ScheduleBand() {
  return (
    <section className="relative bg-lavender py-24 text-lavender-foreground md:py-32">
      <div className="container-outer text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          <RevealText text="Let's talk about your Next" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="big project!" delay={0.2} />
          </span>
        </h2>

        {/* Scheduling placeholder — swap for a live Calendly / Cal.com embed when ready */}
        <FadeIn direction="scale" delay={0.3} className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-3xl bg-paper p-8 text-ink shadow-xl md:p-10">
            <div className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-muted">
              <Calendar className="h-4 w-4 text-lavender-deep" />
              Pick a time that works for you
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {TIME_SLOTS.map((slot) => (
                <span
                  key={slot}
                  className="flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm text-ink/80"
                >
                  <Clock className="h-3.5 w-3.5 text-lavender-deep" />
                  {slot}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">
              Live scheduling coming soon — for now, use the form above and we&apos;ll follow up directly.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
