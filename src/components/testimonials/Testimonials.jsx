"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import TestimonialForm from "./TestimonialForm";
import { initialTestimonials } from "./testimonialsData";
import { FaTrash, FaLock, FaUnlock } from "react-icons/fa";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem("portfolio_testimonials");
    if (savedReviews) {
      setTestimonials(JSON.parse(savedReviews));
    }
  }, []);

  const saveReviewsToStorage = (updatedList) => {
    setTestimonials(updatedList);
    localStorage.setItem("portfolio_testimonials", JSON.stringify(updatedList));
  };

  const handleAddTestimonial = (newReview) => {
    const updatedList = [newReview, ...testimonials];
    saveReviewsToStorage(updatedList);
  };

  const handleDeleteTestimonial = (id) => {
    const updatedList = testimonials.filter((item) => item.id !== id);
    saveReviewsToStorage(updatedList);
  };

  const toggleAdminMode = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      const pass = prompt("Enter Password to Enable Delete Mode:");
      if (pass === "vicky@11") {
        setIsAdmin(true);
      } else if (pass !== null) {
        alert("Wrong Password!");
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#030712] text-slate-100 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Simple & Clean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <span className="px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Client Endorsements
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            What{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              People Say
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl text-base leading-relaxed">
            Direct feedback from engineering leaders, product owners, and
            founders I’ve collaborated with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, index) => (
            <div key={item.id} className="relative group">
              <TestimonialCard item={item} index={index} />

              {/* Secret Delete Icon (Admin Mode Only) */}
              {isAdmin && (
                <button
                  onClick={() => handleDeleteTestimonial(item.id)}
                  className="absolute top-4 right-4 z-20 p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all shadow-lg"
                  title="Delete Review"
                >
                  <FaTrash size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Clean Center Action Button */}
        <div className="mt-16 flex flex-col items-center justify-center">
          {/* Clean Center Action Button */}
          <div
            style={{ marginTop: "24px" }}
            className="flex justify-center items-center w-full"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: "16px 36px",
                marginTop: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95 cursor-pointer leading-normal"
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Secret Owner Access Button at Bottom Right */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={toggleAdminMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              isAdmin
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "text-gray-700 hover:text-gray-500"
            }`}
          >
            {isAdmin ? <FaUnlock size={10} /> : <FaLock size={10} />}
            {isAdmin ? "Admin Mode Active" : "Owner Access"}
          </button>
        </div>
      </div>

      {/* Review Form Modal */}
      <TestimonialForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTestimonial={handleAddTestimonial}
      />
    </section>
  );
}
