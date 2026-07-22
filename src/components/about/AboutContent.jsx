"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
        ABOUT ME
      </p>

      <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
        Passionate Full Stack
        <br />
        Developer
      </h2>

      <p className="text-gray-400 mt-8 leading-8 text-lg">
        I'm Roshni Kushwaha, a Full Stack Developer specializing in the
        MERN Stack and Next.js. I enjoy building responsive,
        high-performance web applications with modern UI, smooth
        animations, and clean backend architecture.
      </p>

      <p className="text-gray-400 mt-6 leading-8 text-lg">
        I have worked as a Frontend Developer Intern, ERP Intern, and
        Full Stack Developer, where I developed real-world applications
        and collaborated with professional teams.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <button className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold flex items-center gap-3">
          <Download size={20} />
          Download CV
        </button>

        <button className="px-7 py-4 rounded-xl border border-white/10 hover:border-blue-500 transition text-white font-semibold flex items-center gap-3 backdrop-blur-xl bg-white/5">
          <Mail size={20} />
          Hire Me
        </button>
<div className="flex flex-wrap gap-3 mt-10">

  {[
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ].map((tech) => (

    <span
      key={tech}
      className="
      px-4
      py-2
      rounded-full
      border
      border-white/10
      bg-white/5
      text-sm
      text-gray-300
      hover:border-blue-500
      hover:text-white
      duration-300
      cursor-default
      "
    >
      {tech}
    </span>

  ))}

</div>
      </div>

    </motion.div>
  );
}