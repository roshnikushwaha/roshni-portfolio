"use client";

import SkillCard from "./SkillCard";

export default function SkillCategory({ category }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h3 className="text-3xl font-bold text-white mb-8">
        {category.title}
      </h3>

      <div className="grid sm:grid-cols-2 gap-5">
        {category.items.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
            color={skill.color}
            bg={skill.bg}
          />
        ))}
      </div>
    </div>
  );
}