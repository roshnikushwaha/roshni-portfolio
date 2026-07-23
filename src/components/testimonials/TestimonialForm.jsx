"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTimes } from "react-icons/fa";

export default function TestimonialForm({ isOpen, onClose, onAddTestimonial }) {
  // Default 1 Star Selected
  const [rating, setRating] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);

  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.feedback) return;

    const newTestimonial = {
      id: Date.now(),
      ...form,
      rating,
      avatar: "",
    };

    onAddTestimonial(newTestimonial);
    setForm({ name: "", role: "", company: "", feedback: "" });
    setRating(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0B0F17] p-6 sm:p-8 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-2"
          >
            <FaTimes size={18} />
          </button>

          <h3 className="text-2xl font-bold text-white mb-1">Write a Review</h3>
          <p className="text-gray-400 text-sm mb-6">
            Share your feedback about our experience working together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Dynamic Star Selection */}
            <div>
              <label className="text-gray-300 text-sm block mb-2 font-medium">
                Rating <span className="text-cyan-400">({hoverRating || rating} Star)</span>
              </label>

              <div className="flex gap-2 text-3xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform duration-150 hover:scale-125 focus:outline-none"
                  >
                    <FaStar
                      className={
                        (hoverRating || rating) >= star
                          ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                          : "text-gray-700"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-1 font-medium">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full rounded-xl bg-[#111827] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-300 text-sm block mb-1 font-medium">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="e.g. Product Manager"
                  className="w-full rounded-xl bg-[#111827] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-1 font-medium">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="e.g. Startup"
                  className="w-full rounded-xl bg-[#111827] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-1 font-medium">
                Feedback *
              </label>
              <textarea
                rows="4"
                name="feedback"
                required
                value={form.feedback}
                onChange={handleChange}
                placeholder="Write your review here..."
                className="w-full rounded-xl bg-[#111827] border border-white/10 px-4 py-3 text-white outline-none resize-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-95"
            >
              Submit Review
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}