"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>

      {show && (

        <motion.button
          onClick={scrollTop}
          initial={{
            opacity: 0,
            scale: .5,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: .5,
            y: 50,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: .9,
          }}
          className="
          fixed
          bottom-8
          right-8
          w-14
          h-14
          rounded-full
          bg-blue-600
          hover:bg-blue-500
          shadow-[0_10px_40px_rgba(59,130,246,.5)]
          text-white
          flex
          items-center
          justify-center
          z-[999]
          "
        >
          <FaArrowUp size={20} />
        </motion.button>

      )}

    </AnimatePresence>
  );
}