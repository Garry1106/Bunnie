"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const menuVariants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/blogs", label: "Blogs" },
    { href: "/support", label: "Support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 text-foreground font-raleway transition-colors duration-300 ${hasBackground ? "bg-muted/80 backdrop-blur-md" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              {/* Logo Image */}
              <div className="flex items-center">
                <Image
                  src="/logo.png" // Path to your logo in the public folder
                  alt="Bunnie Logo"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="object-contain mb-2" // Add mb-2 here for margin-bottom
                />
                {/* Text "Bunnie" */}
                <span className="text-2xl font-extrabold text-primary font-sourGummy ml-2">
                  Bunnie
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300 font-raleway font-semibold text-sm m:text-base"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Started Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/get-started"
              className="inline-flex items-center px-4 py-2 bg-[#A07DF4] text-[#0C0B0D] font-semibold rounded-lg hover:bg-[#A07DF4]/90 transition-colors text-sm m:text-base"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="lg:hidden fixed inset-x-0 top-0 w-full bg-muted/95 backdrop-blur-lg shadow-lg font-raleway overflow-y-scroll"
        style={{ height: "100vh" }} // Full height and scrollable
      >
        <div className="flex flex-col h-full">
          {/* Close button at the top-right (same position as hamburger) */}
          <div className="flex justify-end p-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              <X className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center px-6">
            {links.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ x: 10 }}
                className="mb-4"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary block py-3 text-lg font-semibold" // Larger font size for mobile
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Get Started Button (Mobile) */}
            <motion.div whileHover={{ x: 10 }} className="mt-8">
              <Link
                href="/get-started"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#A07DF4] text-[#0C0B0D] font-semibold rounded-lg hover:bg-[#A07DF4]/90 transition-colors text-lg" // Larger button for mobile
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;