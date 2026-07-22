"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#030712] overflow-hidden"
    >
      <div className="absolute left-0 top-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 w-96 h-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-400 mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            Have a project in mind? Feel free to contact me. I'll reply as soon
            as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          <ContactInfo />
          <ContactForm />
        </div>

      </div>
    </section>
  );
}