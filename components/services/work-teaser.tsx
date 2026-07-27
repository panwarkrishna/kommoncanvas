import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";
import { portfolioProjects } from "@/lib/constants";

export function WorkTeaser() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="relative bg-paper py-24 text-ink md:py-32">
      <div className="container-outer">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            <RevealText text="Our" />{" "}
            <span className="font-accent font-normal">
              <RevealText text="Work" delay={0.15} />
            </span>
          </h2>
          <FadeIn delay={0.2}>
            <Link
              href="/work"
              data-cursor="hover"
              className="hidden items-center gap-1 text-sm font-medium text-lavender-deep underline-offset-4 hover:underline sm:flex"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3" stagger={0.1}>
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <Link href="/work" className="group block" data-cursor="hover">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <StillLife theme={project.theme} className="h-full w-full" rounded="rounded-none" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
