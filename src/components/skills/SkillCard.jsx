// "use client";

// import { motion } from "framer-motion";

// export default function SkillCard({
//   icon: Icon,
//   name,
//   level,
//   color = "text-blue-400",
//   bg = "bg-blue-500/10",
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//         scale: 1.02,
//       }}
//       transition={{ duration: 0.3 }}
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         backdrop-blur-xl
//         p-5
//         transition-all
//         duration-500
//         hover:border-blue-500/40
//         hover:shadow-[0_15px_40px_rgba(59,130,246,.18)]
//       "
//     >
//       {/* Glow */}
//       <div
//         className="
//           absolute
//           -top-16
//           -right-16
//           w-36
//           h-36
//           rounded-full
//           bg-blue-500/10
//           blur-3xl
//           opacity-0
//           transition-all
//           duration-500
//           group-hover:opacity-100
//         "
//       />

//       {/* Top */}
//       <div className="relative flex items-center justify-between">

//         <div
//           className={`
//             ${bg}
//             w-14
//             h-14
//             rounded-2xl
//             flex
//             items-center
//             justify-center
//           `}
//         >
//           <Icon
//             size={28}
//             className={`${color} transition-all duration-500 group-hover:rotate-12`}
//           />
//         </div>

//         <span
//           className="
//             text-xs
//             text-blue-300
//             border
//             border-blue-500/30
//             rounded-full
//             px-3
//             py-1
//           "
//         >
//           {level}
//         </span>

//       </div>

//       {/* Name */}
//       <h3 className="text-white text-xl font-semibold mt-6">
//         {name}
//       </h3>

//       {/* Line */}
//       <div className="mt-5 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">

//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "100%" }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="h-full bg-blue-500 rounded-full"
//         />

//       </div>

//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";

// Helper map to convert percentage to human-readable level if needed, or map levels to width
const levelToWidth = {
  Beginner: "40%",
  Intermediate: "70%",
  Advanced: "90%",
  Expert: "100%",
};

export default function SkillCard({
  icon: Icon,
  name,
  level = "Advanced",
  color = "text-blue-400",
  bg = "bg-blue-500/10",
}) {
  const progressWidth = levelToWidth[level] || "80%";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10 bg-slate-900/40 backdrop-blur-xl
        p-5 transition-all duration-500
        hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
      "
    >
      {/* Dynamic Background Hover Glow */}
      <div
        className={`
          absolute -top-12 -right-12 h-32 w-32 rounded-full
          ${bg} blur-2xl opacity-0 transition-opacity duration-500
          group-hover:opacity-100 pointer-events-none
        `}
      />

      {/* Card Header: Icon + Level Badge */}
      <div className="relative flex items-center justify-between">
        <div
          className={`
            ${bg} relative flex h-12 w-12 items-center justify-center
            rounded-xl border border-white/5 transition-transform duration-500
            group-hover:scale-110
          `}
        >
          <Icon
            size={26}
            className={`${color} transition-transform duration-500 group-hover:rotate-6`}
          />
        </div>

        <span
          className="
            rounded-full border border-white/10 bg-white/5
            px-3 py-1 text-[11px] font-medium tracking-wide text-gray-300
            backdrop-blur-md transition-colors duration-300
            group-hover:border-white/20 group-hover:text-white
          "
        >
          {level}
        </span>
      </div>

      {/* Skill Title */}
      <div className="mt-4 relative">
        <h4 className="text-base font-semibold text-gray-100 transition-colors duration-300 group-hover:text-white">
          {name}
        </h4>
      </div>

      {/* Animated Progress Bar */}
      <div className="mt-4 relative">
        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden p-[1px]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: progressWidth }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className={`h-full rounded-full ${bg.replace('/10', '/80')} shadow-[0_0_12px_rgba(255,255,255,0.2)]`}
          />
        </div>
      </div>
    </motion.div>
  );
}