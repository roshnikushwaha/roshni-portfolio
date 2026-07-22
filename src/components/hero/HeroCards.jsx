"use client";

import { motion } from "framer-motion";
import { heroCards } from "./constants";

export default function HeroCards() {
  return (
    <>
      {heroCards.map((card, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + index,
          }}
          style={{
            position: "absolute",
            top: card.top,
            bottom: card.bottom,
            left: card.left,
            right: card.right,
          }}
          whileHover={{
            scale: 1.08,
          }}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl px-5 py-4 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-blue-400">
            {card.value}
          </h3>

          <p className="text-gray-300 mt-1">
            {card.title}
          </p>
        </motion.div>
      ))}
    </>
  );
}