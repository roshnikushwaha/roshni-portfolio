"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-[#030712] text-slate-100 overflow-hidden"
    >
      {/* Background Lighting & Ambiance */}
      <div className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-20"
        >
          <span className="px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Client Endorsements
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            What <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">People Say</span>
          </h2>

          <p className="text-slate-400 mt-5 w-full max-w-2xl text-center text-base sm:text-lg leading-relaxed">
            Direct feedback from engineering leaders, product owners, and founders I’ve collaborated with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}