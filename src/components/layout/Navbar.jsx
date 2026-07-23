"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Cpu, Briefcase, FolderGit2, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Main Navbar Header */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-8 h-20">
          
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-extrabold tracking-wider"
          >
            <span className="text-blue-500">R</span>
            <span className="text-white">K</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 font-medium transition duration-300 text-sm uppercase tracking-widest"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer & Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-[#0b0f19] border-l border-white/10 z-50 md:hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                  <span className="text-xl font-bold text-white tracking-wide">
                    Navigation
                  </span>
                  <button
                    aria-label="Close Menu"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Nav Links with Separator Lines */}
                <ul className="px-4 py-4 divide-y divide-white/10">
                  {navLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className="py-1">
                        <a
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-4 px-4 py-3.5 text-gray-200 hover:text-blue-400 hover:bg-white/5 rounded-xl transition duration-200 text-lg font-medium group"
                        >
                          <Icon size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                          <span>{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Drawer Footer Note / Social Branding */}
              <div className="p-6 border-t border-white/10 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} RK Portfolio. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}