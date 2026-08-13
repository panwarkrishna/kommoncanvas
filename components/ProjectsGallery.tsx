"use client";
import SectionHeading from "@/components/SectionHeading";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * ProjectsGallery
 * ----------------------------------------------------------------------
 * Same card layout/animations as LatestProjects, but with filter tabs
 * on top ("All" + category tabs) so visitors can narrow the grid by
 * project type. Filtering re-triggers the stagger/entrance animation
 * via AnimatePresence + a `key` tied to the active tab.
 *
 * Drop in components/ProjectsGallery.tsx and render wherever you want
 * the full filterable project list (e.g. on a /work page), separate
 * from the shorter "Latest Projects" teaser on the homepage.
 * ----------------------------------------------------------------------
 */

const BRAND_RED = "#FF0000";

const TABS = ["All", "Branding", "Design", "Social Media", "Web Design"] as const;
type Tab = (typeof TABS)[number];

const projects: {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<Tab, "All">;
}[] = [
  {
    id: 1,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img01.png",
    category: "Branding",
  },
  {
    id: 2,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img03.png",
    category: "Design",
  },
  {
    id: 3,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img02.png",
    category: "Branding",
  },
  {
    id: 4,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img04.png",
    category: "Design",
  },
  {
    id: 5,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img01.png",
    category: "Social Media",
  },
  {
    id: 6,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img03.png",
    category: "Social Media",
  },
  {
    id: 7,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img02.png",
    category: "Web Design",
  },
  {
    id: 8,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "../projects/pro-img04.png",
    category: "Web Design",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function TabBar({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <div className="mb-10 flex justify-start gap-2 overflow-x-auto pb-2 sm:mb-14 sm:justify-center sm:gap-3 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={[
              "relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 sm:px-5 sm:py-2.5 sm:text-sm",
              isActive
                ? "text-white"
                : "text-zinc-400 hover:text-white",
            ].join(" ")}
          >
            {isActive && (
              <motion.span
                layoutId="projects-tab-pill"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: BRAND_RED }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = useMemo(
    () =>
      activeTab === "All"
        ? projects
        : projects.filter((p) => p.category === activeTab),
    [activeTab]
  );

  return (
    <section className="bg-black px-3 pt-8 text-white md:pt-20">
      <div className="mx-auto max-w-[1366px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10"
        >
          <SectionHeading redText="All" whiteText="Projects" />
        </motion.div>

        {/* Filter tabs */}
        <TabBar active={activeTab} onChange={setActiveTab} />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group flex cursor-pointer flex-col"
              >
                {/* Image Container with Zoom & Rounded Corners */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Category chip */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:left-4 sm:top-4"
                    style={{ backgroundColor: BRAND_RED }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Text Info */}
                <div className="mt-4 sm:mt-5">
                  <h3 className="text-2xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-[#FF0000] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-zinc-500">
            No projects in this category yet.
          </p>
        )}

        {/* Bottom CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center md:mt-16"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-base font-medium text-zinc-300 transition-all duration-300 hover:text-white sm:text-lg"
          >
            <span>View All My Projects</span>
            <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
