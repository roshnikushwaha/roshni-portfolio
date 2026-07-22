// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

// export default function ProjectCard({ project, reverse }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//       className={`
//       grid
//       lg:grid-cols-2
//       gap-14
//       items-center

//       ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
//       `}
//     >
//       {/* IMAGE */}

//       <motion.div
//         whileHover={{
//           scale: 1.02,
//           y: -8,
//         }}
//         transition={{
//           duration: 0.35,
//         }}
//         className="
//   group
//   relative
//   rounded-[32px]
//   overflow-hidden
//   border
//   border-white/10
//   bg-gradient-to-br
//   from-[#111827]
//   to-[#030712]
//   backdrop-blur-xl
//   shadow-[0_20px_60px_rgba(0,0,0,.45)]
//   transition-all
//   duration-500
//   hover:border-blue-500/40
//   hover:shadow-[0_0_60px_rgba(59,130,246,.18)]
//   "
//       >
//         <div
//           className="
//   h-10
//   border-b
//   border-white/10
//   bg-white/[0.03]
//   flex
//   items-center
//   px-5
//   gap-2
//   "
//         >
//           <span className="w-3 h-3 rounded-full bg-red-500"></span>
//           <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
//           <span className="w-3 h-3 rounded-full bg-green-500"></span>
//         </div>
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={900}
//           height={600}
//           className="
// w-full
// h-auto
// duration-700
// ease-out
// group-hover:scale-110
// "
//         />

//         <div
// className="
// absolute
// inset-0
// bg-gradient-to-t
// from-[#020617]
// via-[#020617]/20
// to-transparent
// opacity-90
// "
// />
//       </motion.div>

//       {/* CONTENT */}

//       <div>
//         <p className="text-blue-400 uppercase tracking-[4px]">
//           Featured Project
//         </p>

//         <h2 className="text-4xl font-bold text-white mt-4">{project.title}</h2>

//         <p className="text-gray-400 leading-8 mt-6">{project.description}</p>

//         {/* TECH */}

//         <div className="flex flex-wrap gap-3 mt-8">
//           {project.tech.map((item) => (
//             <span
//               key={item}
//               className="
//               px-4
//               py-2
//               rounded-full
//               bg-white/5
//               border
//               border-white/10
//               text-gray-300
//               hover:border-blue-500
//               hover:bg-blue-500/10
//               duration-300
//               "
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* BUTTONS */}

//         <div className="flex gap-5 mt-10">
//           <Link
//             href={project.github}
//             className="
//             flex
//             items-center
//             gap-2
//             px-6
//             py-3
//             rounded-xl
//             border
//             border-white/10
//             hover:border-blue-500
//             hover:bg-blue-500/10
//             duration-300
//             "
//           >
//             <FaGithub />
//             Github
//           </Link>

//           <Link
//             href={project.live}
//             className="
//             flex
//             items-center
//             gap-2
//             px-6
//             py-3
//             rounded-xl
//             bg-blue-600
//             hover:bg-blue-500
//             duration-300
//             "
//           >
//             Live Demo
//             <HiOutlineArrowTopRightOnSquare />
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ProjectCard({ project, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
    >
      {/* Background Ambient Glow on Hover */}
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div
        className={`
          relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center
          p-6 sm:p-8 lg:p-10 rounded-[28px]
          border border-slate-800/80 bg-slate-900/40 backdrop-blur-2xl
          transition-colors duration-500 hover:border-slate-700/80
        `}
      >
        {/* IMAGE / MOCKUP SECTION */}
        <div
          className={`
            lg:col-span-7
            ${reverse ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <div className="relative group/img overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950 shadow-2xl">
            {/* Browser Header Bar */}
            <div className="h-9 px-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-3 py-0.5 rounded-full border border-slate-700/50">
                {project.title.toLowerCase().replace(/\s+/g, "")}.com
              </span>
              <div className="w-10" />
            </div>

            {/* Image Wrapper */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="
                  object-cover object-top
                  transition-transform duration-700 ease-out
                  group-hover/img:scale-105
                "
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div
          className={`
            lg:col-span-5 flex flex-col justify-center
            ${reverse ? "lg:order-1" : "lg:order-2"}
          `}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Featured Work
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mt-4 font-normal">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  px-3 py-1 text-xs font-medium rounded-lg
                  bg-slate-800/80 border border-slate-700/60 text-slate-200
                  transition-all duration-300
                  hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800/80">
            <Link
              href={project.live}
              target="_blank"
              className="
                group/btn flex items-center gap-2 px-6 py-2.5 rounded-xl
                bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm
                shadow-lg shadow-cyan-500/20 transition-all duration-300
                hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]
              "
            >
              <span>Live Preview</span>
              <HiArrowUpRight className="text-base transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="
                flex items-center gap-2 px-5 py-2.5 rounded-xl
                bg-slate-800/60 border border-slate-700/80 text-slate-200 font-semibold text-sm
                transition-all duration-300
                hover:border-slate-500 hover:bg-slate-800 hover:text-white
              "
            >
              <FaGithub className="text-base" />
              <span>Source Code</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}