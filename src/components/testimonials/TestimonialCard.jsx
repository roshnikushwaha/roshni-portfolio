"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function TestimonialCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between h-full p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:shadow-[0_20px_50px_-10px_rgba(34,211,238,0.1)]"
    >
      {/* Dynamic Hover Glow Border Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        {/* Top Bar: Stars + Quote Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 text-amber-400 text-sm">
            {[...Array(item.rating || 5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <FaQuoteLeft className="text-2xl text-slate-700/60 group-hover:text-cyan-500/40 transition-colors duration-300" />
        </div>

        {/* Feedback Text */}
        <p className="text-slate-300 text-base leading-relaxed font-normal mb-8">
          "{item.feedback}"
        </p>
      </div>

      {/* Client Profile Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80 mt-5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 shrink-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 flex items-center justify-center font-bold text-cyan-300">
          {item.avatar ? (
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              className="object-cover"
            />
          ) : (
            item.name.charAt(0)
          )}
        </div>

        <div className="truncate">
          <h4 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors duration-200 truncate">
            {item.name}
          </h4>
          <p className="text-slate-400 text-xs font-medium truncate mt-0.5">
            {item.role} {item.company && `• ${item.company}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}