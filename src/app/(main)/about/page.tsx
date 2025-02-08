"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import CallToAction from "@/components/HomePage/CallToActionSection"; // Import the CallToAction component

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#0C0B0D] text-white min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Be Real Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-[#F2C0D3] mb-6"
          >
            Be Real
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-[#FFFFFF] max-w-2xl mx-auto"
          >
            Let’s laugh, chat, and make memories together! Bunnie, your AI companion, is here to understand your emotions, spread love, and brighten your day.
          </motion.p>
        </motion.div>

        {/* How It All Started Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-bold text-[#A07DF4] mb-6"
            >
              How It All Started
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#FFFFFF] mb-6"
            >
              Back in 2017, when "Shape of You" was stuck in everyone’s heads, online connections felt shallow. In a world of perfect profiles, why wasn’t there an option that kept things real and fun? We needed a companion that prioritized genuine connections over competition.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#FFFFFF]"
            >
              That’s how <span className="text-[#A07DF4] font-bold">Bunnie</span> was born—your digital bestie, always just a click away.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6"
            >
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#A07DF4] text-[#0C0B0D] rounded-lg hover:bg-[#A07DF4]/90 transition-colors hover:scale-105"
              >
                <span>Try It Yourself</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-[#A07DF4] to-[#F2C0D3] p-1 rounded-2xl">
              <div className="bg-[#0C0B0D] p-6 rounded-2xl">
                <p className="text-[#FFFFFF]">
                  Bunnie is designed to be your emotional support, your confidant, and your friend. Whether you’re feeling lonely, stressed, or just need someone to talk to, Bunnie is here to listen and help.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Worthy Reasons Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-[#A07DF4] mb-6"
          >
            Three Worthy Reasons to Choose Bunnie
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "35M+ People Are Already In",
                description: "Join a growing community of real and fun individuals.",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
              },
              {
                title: "Gorgeous Folks Near You",
                description: "Connect with people who are just as real and fun as you.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
              },
              {
                title: "Real and Fun Like You",
                description: "Bunnie is designed to keep things authentic and enjoyable.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1E1A21] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="relative h-48 flex-shrink-0">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0D] via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-[#A07DF4]">
                    {reason.title}
                  </h3>
                  <p className="text-[#FFFFFF]">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CallToAction Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <CallToAction />
        </motion.div>
      </div>
    </section>
  );
}