"use client";
import SectionHeading from "@/components/SectionHeading";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "./projects/pro-img01.png", 
    category: "Branding",
  },
  {
    id: 2,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "./projects/pro-img03.png", 
    category: "Design",
  },
  {
    id: 3,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "./projects/pro-img02.png",
    category: "Branding",
  },
  {
    id: 4,
    title: "Social Media",
    description: "We help businesses grow through strategic branding",
    image: "./projects/pro-img04.png",
    category: "Design",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function LatestProjects() {
  return (
    <section className="bg-black text-white px-3 pt-8 md:pt-20">
      <div className="mx-auto max-w-[1366px]">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
        <SectionHeading redText="Latest" whiteText="Projects" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom & Rounded Corners */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={project.id <= 2}
                />
                
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Info */}
              <div className="mt-4 sm:mt-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide group-hover:text-[#FF0000] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-md font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium text-base sm:text-lg transition-all duration-300 group"
          >
            <span>Vew All My Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 text-zinc-400 group-hover:text-white" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}