"use client";

import { motion } from "framer-motion";
import { techStack } from "./constants";

const positions = [
  "top-2 left-1/2 -translate-x-1/2",
  "top-20 right-2",
  "bottom-24 right-4",
  "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-24 left-4",
  "top-20 left-2",
  "top-1/2 -right-6 -translate-y-1/2",
];

export default function TechOrbit() {
  return (
    <>
      {techStack.map(({ Icon, name, color }, index) => (
        <motion.div
          key={name}
          className={`absolute ${positions[index]}`}
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            rotate: 12,
          }}
        >
          <div
            className="
              group
              w-14
              h-14
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              shadow-lg
              transition-all
              duration-300
              hover:border-blue-500
              hover:shadow-[0_0_25px_rgba(59,130,246,.35)]
            "
          >
            <Icon
              size={28}
              style={{ color }}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            {/* Tooltip */}
            <span className="absolute -bottom-8 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {name}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}