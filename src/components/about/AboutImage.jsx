"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Blue Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-blue-500/20 blur-[90px]" />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="absolute -inset-4 rounded-[45px] border border-blue-500/20 border-dashed"
        />

        {/* Glass Card */}
        <motion.div
          whileHover={{
            scale: 1.02,
            rotate: 1,
          }}
          transition={{ duration: .3 }}
          className="relative rounded-[35px] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
        >
          {/* <Image
            src="/images/profile.jpeg"
            alt="Roshni Kushwaha"
            width={430}
            height={540}
            // className="duration-500 hover:scale-105"
            className="w-full h-auto select-none"
          /> */}
        </motion.div>

      </div>
    </motion.div>
  );
}