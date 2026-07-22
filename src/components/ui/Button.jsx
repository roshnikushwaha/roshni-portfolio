"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  href,
  primary = true,
}) {
  const baseStyle =
    "px-7 py-3 rounded-full font-semibold transition-all duration-300";

  const primaryStyle =
    "bg-blue-600 hover:bg-blue-700 text-white";

  const secondaryStyle =
    "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white";

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        href={href}
        className={`${baseStyle} ${
          primary ? primaryStyle : secondaryStyle
        }`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`${baseStyle} ${
        primary ? primaryStyle : secondaryStyle
      }`}
    >
      {children}
    </motion.button>
  );
}