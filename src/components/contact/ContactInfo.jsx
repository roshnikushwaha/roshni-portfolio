"use client";

import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "./ContactData.js";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {contactInfo.map((item) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.id}
            href={item.link}
            whileHover={{ x: 8 }}
            className="flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500 duration-300"
          >
            <Icon className="text-blue-400" size={28} />

            <div>
              <h4 className="text-white font-semibold">
                {item.title}
              </h4>

              <p className="text-gray-400">
                {item.value}
              </p>
            </div>
          </motion.a>
        );
      })}

      <div className="flex gap-4 pt-6">

        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 duration-300"
            >
              <Icon />
            </a>
          );
        })}

      </div>

    </div>
  );
}