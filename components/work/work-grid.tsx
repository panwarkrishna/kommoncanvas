"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { StillLife } from "@/components/ui/artwork";
import { contactHref, portfolioProjects, workCategories } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Category = (typeof workCategories)[number];

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative bg-ink pb-24 pt-8 text-ink-foreground md:pb-32">
      <div className="container-outer">
        <div
          className="flex flex-wrap justify-center gap-2 border-b border-ink-foreground/10 pb-8"
          role="group"
          aria-label="Filter work by category"
        >
          {workCategories.map((category) => (
            <button
              key={category}
              type="button"
              data-cursor="hover"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                activeCategory === category
                  ? "border-lavender bg-lavender text-lavender-foreground"
                  : "border-ink-foreground/15 text-muted-invert hover:border-lavender hover:text-lavender",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={contactHref} className="group block" data-cursor="hover">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                      <StillLife theme={project.theme} className="h-full w-full" rounded="rounded-none" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-lg font-medium tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-invert">{project.category}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
