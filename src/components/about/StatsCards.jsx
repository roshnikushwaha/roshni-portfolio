"use client";

import { motion } from "framer-motion";
import { stats } from "./aboutData";

export default function StatsCards() {
  return (
    <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
           
            className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-gradient-to-br
from-white/5
to-white/[0.02]
backdrop-blur-xl
p-8
transition-all
duration-500
hover:border-blue-500
hover:shadow-[0_20px_50px_rgba(59,130,246,.25)]
"
          >
            {/* Blue Glow */}

            <div
              className="
            absolute
            -top-16
            -right-16
            w-40
            h-40
            rounded-full
            bg-blue-500/10
            blur-3xl
            opacity-0
            group-hover:opacity-100
            duration-500
            "
            />

            {/* Icon */}

            <div
              className="
  w-16
  h-16
  mx-auto
  rounded-2xl
  bg-blue-500/10
  flex
  items-center
  justify-center
  mb-6
  transition-all
  duration-300
  group-hover:bg-blue-500/20
  "
            >
              <Icon
                size={28}
                className="
                text-blue-400
                group-hover:rotate-12
                duration-500
                "
              />
            </div>

            {/* Number */}

            <h2
              className="
text-5xl
font-black
text-white
text-center
transition-all
duration-500
group-hover:scale-110 
"
            >
              {item.number}
            </h2>

            {/* Title */}

            <p
              className="
mt-4
text-center
text-gray-400
leading-7
font-medium
px-2
"
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
