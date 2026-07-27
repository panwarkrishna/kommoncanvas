import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { StillLife } from "@/components/ui/artwork";
import { Badge } from "@/components/ui/badge";
import { articles, contactHref } from "@/lib/constants";

export function Articles() {
  return (
    <section id="articles" className="relative bg-paper py-24 text-ink md:py-32">
      <div className="container-outer">
        <FadeIn className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Journal</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Latest News &amp; Articles
          </h2>
        </FadeIn>

        <StaggerGroup className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.1}>
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <Link href={contactHref} className="group block" data-cursor="hover">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <StillLife theme={article.theme} className="h-full w-full" rounded="rounded-none" />
                  </div>
                  <Badge className="absolute left-4 top-4 border-none bg-paper/90 text-ink">
                    {article.category}
                  </Badge>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted">{article.date}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender-deep" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
