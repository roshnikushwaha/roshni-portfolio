"use client";

import { motion } from "framer-motion";

const badges = [
  {
    text: "⚛ React Expert",
    top: "8%",
    left: "-12%",
    delay: 0,
  },
  {
    text: "▲ Next.js",
    top: "20%",
    right: "-10%",
    delay: 0.3,
  },
  {
    text: "🚀 Full Stack",
    bottom: "18%",
    left: "-8%",
    delay: 0.5,
  },
  {
    text: "💼 Open To Work",
    bottom: "5%",
    right: "-10%",
    delay: 0.8,
  },
];

export default function HeroBadges() {
  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [-10, 10, -10],
          }}
          transition={{
            delay: badge.delay,
            duration: 5,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: badge.top,
            bottom: badge.bottom,
            left: badge.left,
            right: badge.right,
          }}
          whileHover={{
            scale: 1.12,
            y: -5,
          }}
          className="
          px-5
          py-3
          rounded-full
          backdrop-blur-xl
          bg-white/10
          border
          border-white/10
          text-white
          font-medium
          shadow-[0_0_30px_rgba(59,130,246,.25)]
          cursor-default
          "
        >
          {badge.text}
        </motion.div>
      ))}
    </>
  );
}