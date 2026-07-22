"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full top-20 left-10"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[170px] rounded-full bottom-10 right-10"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}