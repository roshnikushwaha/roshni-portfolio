"use client";

import { motion } from "framer-motion";
import { quickLinks, socials } from "./footerData";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-black">

              <span className="text-blue-500">R</span>

              <span className="text-white">K</span>

            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              MERN Stack & Next.js Developer passionate about creating modern,
              responsive and user-friendly web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.id}>

                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 duration-300"
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white text-2xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex gap-4">

              {socials.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                    }}
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 duration-300"
                  >
                    <Icon size={22} />
                  </motion.a>

                );

              })}

            </div>

          </div>

        </div>

        <div className="w-full h-px bg-white/10 my-10" />

        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Roshni Kushwaha. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}