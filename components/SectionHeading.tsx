"use client";

import { motion } from 'framer-motion';

export default function SectionHeading({ 
  redText, 
  whiteText, 
  className = "",
  align = "center" // "center" | "left" | "right"
}) {
  const alignmentClass = align === "left" ? "text-left items-start" : align === "right" ? "text-right items-end" : "text-center items-center";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignmentClass} ${className}`}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        <span className="text-[#FF0000]">{redText} </span>
        <span className="text-white">{whiteText}</span>
      </h2>

      {/* Underline: Half Red + Half White */}
      <div className="w-24 sm:w-28 h-[3px] flex mt-3 rounded-full overflow-hidden">
        <div className="w-1/2 bg-[#FF0000]" />
        <div className="w-1/2 bg-white" />
      </div>
    </motion.div>
  );
}