"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true after component mounts
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {isClient && ( // Only render video on the client
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            style={{ filter: "blur(8px)" }} // Blur effect
          >
            <source src="videos.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-[#A07DF4] to-[#F2C0D3] bg-clip-text text-transparent">
            Welcome to Bunnie
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Your AI companion for emotional support, meaningful connections, and
            unforgettable memories. Let’s laugh, chat, and grow together!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-[#A07DF4] hover:bg-[#F2C0D3] text-[#0C0B0D] px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}