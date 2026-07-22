// "use client";

// import { motion } from "framer-motion";
// import ProjectCard from "./ProjectCard";
// import { projects } from "./projectsData";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative py-28 overflow-hidden bg-[#030712]"
//     >
//       {/* Background Glow */}

//       <div className="absolute left-0 top-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[140px]" />

//       <div className="absolute right-0 bottom-20 w-96 h-96 rounded-full bg-purple-500/10 blur-[140px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: .7 }}
//           className="text-center mb-24"
//         >

//           <p className="uppercase tracking-[6px] text-blue-400 mb-4">
//             Portfolio
//           </p>

//           <h2 className="text-5xl md:text-6xl font-bold text-white">
//             Featured Projects
//           </h2>

//           <p className="max-w-3xl mx-auto text-gray-400 mt-6 leading-8">
//             Some of my recent Full Stack and Frontend projects built using
//             React, Next.js, Node.js, MongoDB and modern web technologies.
//           </p>

//         </motion.div>

//         {/* Projects */}

//         <div className="space-y-28">

//           {projects.map((project, index) => (

//             <ProjectCard
//               key={project.id}
//               project={project}
//               reverse={index % 2 !== 0}
//             />

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#030712] text-slate-100 overflow-hidden"
    >
      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute top-1/4 -left-40 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-24"
        >
          <span className="px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Selected Work
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 w-full max-w-2xl text-center text-base sm:text-lg leading-relaxed">
            Real-world web applications built with performance, responsive design, and clean architecture in mind.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}