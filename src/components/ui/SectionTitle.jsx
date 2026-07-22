"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${center ? "text-center" : ""} mb-16`}
    >
      <p className="uppercase tracking-[6px] text-blue-400 text-sm mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      <div className="w-28 h-1 bg-blue-500 rounded-full mt-5 mx-auto"></div>
    </motion.div>
  );
}