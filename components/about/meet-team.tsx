"use client";

import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Portrait } from "@/components/ui/artwork";
import { teamMembers } from "@/lib/constants";

export function MeetTeam() {
  const founder = teamMembers.find((member) => member.isFounder);
  const rest = teamMembers.filter((member) => !member.isFounder);

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-outer">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          <RevealText text="Meet the" />{" "}
          <span className="font-accent font-normal">
            <RevealText text="Team" delay={0.15} />
          </span>
        </h2>

        {founder && (
          <FadeIn direction="scale" delay={0.2} className="mt-14">
            <div className="grid gap-8 rounded-3xl bg-lavender p-8 text-lavender-foreground sm:grid-cols-[auto_1fr] sm:items-center md:p-12">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-2xl shadow-lg sm:mx-0 sm:h-40 sm:w-40">
                <Portrait theme={founder.theme} className="h-full w-full rounded-2xl" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold">{founder.name}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-widest text-lavender-foreground/70">
                  {founder.role}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-lavender-foreground/85">
                  {founder.bio}
                </p>
              </div>
            </div>
          </FadeIn>
        )}

        <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3" stagger={0.08}>
          {rest.map((member) => (
            <StaggerItem key={member.id}>
              <div className="overflow-hidden rounded-2xl">
                <div className="aspect-square overflow-hidden">
                  <Portrait theme={member.theme} className="h-full w-full rounded-none grayscale" />
                </div>
              </div>
              <p className="mt-3 font-display text-sm font-semibold">{member.name}</p>
              <p className="text-xs text-muted">{member.role}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn delay={0.2} className="mt-8">
          <MagneticButton className="block w-full">
            <a
              href="mailto:careers@kommoncanvas.com"
              data-cursor="hover"
              className="flex items-center justify-between rounded-full bg-ink px-8 py-5 text-ink-foreground transition-colors hover:bg-ink/90"
            >
              <span className="font-display text-lg font-medium">Join our team of creatives</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
