"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex-1"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-blue-400 uppercase tracking-[6px] mb-4"
      >
        Welcome To My Portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl md:text-7xl font-black leading-tight"
      >
        Hi,
        <br />
        I'm
        <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Roshni
        </span>
        Kushwaha
      </motion.h1>

      <div className="text-2xl md:text-3xl mt-7 font-semibold text-gray-300 h-12">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,

            "MERN Stack Developer",
            2000,

            "Next.js Developer",
            2000,

            "Frontend Developer",
            2000,

            "Freelancer",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
        />
      </div>

      <p className="mt-8 text-gray-400 leading-8 max-w-xl">
        Passionate Full Stack Developer with experience in React.js, Next.js,
        Node.js, Express.js, MongoDB, Tailwind CSS and REST APIs. I build
        modern, scalable and beautiful web applications with high performance
        and clean code.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">
        <motion.a
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href="#contact"
          className="
inline-flex
items-center
justify-center
gap-3

w-[180px]
h-[56px]

rounded-xl
bg-blue-600
text-white

text-[17px]
font-semibold

hover:bg-blue-700
transition-all
duration-300
"
        >
          Hire Me
          <ArrowRight size={20} className="shrink-0" />
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href="/resume/resume.pdf"
          className="
inline-flex
items-center
justify-center
gap-3

w-[180px]
h-[56px]

rounded-xl
border
border-blue-500

text-white

text-[17px]
font-semibold

hover:bg-blue-500/10
transition-all
duration-300
"
        >
          Resume
          <Download size={20} className="shrink-0" />
        </motion.a>
      </div>
    </motion.div>
  );
}
