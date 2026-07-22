"use client";

import { motion } from "framer-motion";
import { experience } from "./experienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-[#030712] text-gray-100 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header (Centered properly using Flexbox) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Career Journey
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Professional <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">Experience</span>
          </h2>

          <p className="text-gray-400 mt-5 w-full max-w-2xl text-center text-base sm:text-lg leading-relaxed">
            A chronological breakdown of my software engineering roles, internships, and core technical impact.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center z-20">
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-cyan-400 opacity-20" />
                      <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                    </div>
                  </div>

                  {/* Card Content Block */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="
                        group relative overflow-hidden rounded-2xl
                        border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8
                        transition-all duration-300
                        hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-[0_20px_50px_rgba(8,112,184,0.15)]
                      "
                    >
                      {/* Top Accent Gradient Border Glow */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Header Row: Company Icon, Title & Duration */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg font-bold text-cyan-400 group-hover:scale-105 transition-transform duration-300 shrink-0">
                            {item.company.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                              {item.role}
                            </h3>
                            <p className="text-sm font-medium text-blue-400/90 mt-0.5">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/80 text-gray-300 border border-slate-700/60">
                          {item.duration}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="
                              px-3 py-1 rounded-md text-xs font-medium
                              bg-slate-800/50 text-slate-300 border border-slate-700/50
                              transition-all duration-200
                              group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-300
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Year Indicator Pill */}
                      <div className="mt-4 sm:mt-0 sm:absolute sm:top-6 sm:right-6 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-400/70">
                          {item.year}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}