// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert("Message Sent Successfully 🚀");

//     setForm({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0, x: 80 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//       className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
//     >
//       <div>
//         <label className="text-gray-300 block mb-2">
//           Full Name
//         </label>

//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required
//           className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
//         />
//       </div>

//       <div>
//         <label className="text-gray-300 block mb-2">
//           Email
//         </label>

//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//           required
//           className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
//         />
//       </div>

//       <div>
//         <label className="text-gray-300 block mb-2">
//           Subject
//         </label>

//         <input
//           type="text"
//           name="subject"
//           value={form.subject}
//           onChange={handleChange}
//           placeholder="Project Subject"
//           required
//           className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
//         />
//       </div>

//       <div>
//         <label className="text-gray-300 block mb-2">
//           Message
//         </label>

//         <textarea
//           rows="6"
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Write your message..."
//           required
//           className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none resize-none focus:border-blue-500"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 duration-300 text-white font-semibold"
//       >
//         Send Message
//       </button>
//     </motion.form>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatusMsg("Message Sent Successfully 🚀");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMsg("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
    >
      <div>
        <label className="text-gray-300 block mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="text-gray-300 block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="text-gray-300 block mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project Subject"
          required
          className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="text-gray-300 block mb-2">Message</label>
        <textarea
          rows="6"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
          className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none resize-none focus:border-blue-500"
        />
      </div>

      {statusMsg && (
        <p className="text-sm text-center text-blue-400 font-medium">
          {statusMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 duration-300 text-white font-semibold disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}