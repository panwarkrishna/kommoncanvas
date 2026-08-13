"use client";

import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="bg-black text-white px-3 pt-8 md:pt-20 w-full">
      <div className="mx-auto max-w-[1366px] border-t border-b border-zinc-800 md:py-20 py-5 md-7">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Main Title - Italic, Bold, Uppercase */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold italic tracking-wider uppercase text-white">
            Who We Are
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-6 text-zinc-300 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-3xl">
            We help businesses grow through strategic branding, creative design, and visual experiences that people remember.
          </p>

          {/* Call to Action Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 md:mt-10"
          >
            <a
              href="#our-story"
              className="inline-block bg-[#FF0000] hover:bg-[#D90000] text-white font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-3.5 rounded-md transition-colors duration-300 shadow-lg"
            >
              Our Story
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}