import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiPostman,
  SiCloudinary,
  SiVercel,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    color: "blue",
    items: [
      {
        name: "React",
        icon: FaReact,
        level: "Advanced",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        level: "Advanced",
        color: "text-white",
        bg: "bg-white/10",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: "Advanced",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        level: "Advanced",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: "Advanced",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Advanced",
        color: "text-sky-400",
        bg: "bg-sky-500/10",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        level: "Intermediate",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
      },
    ],
  },

  {
    title: "Backend",
    color: "green",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: "Advanced",
        color: "text-green-400",
        bg: "bg-green-500/10",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: "Advanced",
        color: "text-gray-200",
        bg: "bg-white/10",
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
        level: "Intermediate",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
      },
    ],
  },

  {
    title: "Database",
    color: "purple",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Advanced",
        color: "text-green-500",
        bg: "bg-green-500/10",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        level: "Intermediate",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
        level: "Advanced",
        color: "text-red-400",
        bg: "bg-red-500/10",
      },
    ],
  },

  {
    title: "Tools",
    color: "orange",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        level: "Advanced",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        level: "Advanced",
        color: "text-white",
        bg: "bg-white/10",
      },
      {
        name: "Postman",
        icon: SiPostman,
        level: "Intermediate",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        level: "Intermediate",
        color: "text-white",
        bg: "bg-white/10",
      },
    ],
  },
];