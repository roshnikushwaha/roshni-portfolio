"use client";

import { skills } from "./skillsData";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#030712] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[6px] mb-4">
            My Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Technologies I Work With
          </h2>
          <br/>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}