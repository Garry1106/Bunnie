"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, CreditCard, MessageCircle } from "lucide-react";
import CallToAction from "../../components/HomePage/CallToActionSection"; // Import the CallToAction component

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-[#A07DF4]" />,
      title: "Login & Authenticate",
      description:
        "Start by logging in and authenticating your account using your WhatsApp phone number. It's quick, secure, and hassle-free.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-[#A07DF4]" />,
      title: "Choose Your Plan & Pay",
      description:
        "Select a plan that suits your needs and complete the payment process. We offer flexible options to fit your preferences.",
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-[#A07DF4]" />,
      title: "Send Your First Message",
      description:
        "Once authenticated and subscribed, send your first message to the provided number. It's that simple!",
    },
  ];

  return (
    <section className="bg-[#0C0B0D] text-white min-h-screen flex items-center justify-center px-6 py-12 pt-24">
      {/* Added pt-24 for padding at the top */}
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#F2C0D3]"
        >
          How It Works
        </motion.h1>

        {/* Horizontal Steps */}
        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex-1 bg-[#1A1A1A] p-8 rounded-lg relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#A07DF4] rounded-full flex items-center justify-center text-2xl font-bold text-[#0C0B0D]">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-24 h-24 bg-[#1E1A21] rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-4 text-[#F2C0D3] text-center">
                {step.title}
              </h2>
              <p className="text-gray-300 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-gray-400 mt-10 text-lg"
        >
          That's it! A simple and easy process to get started.
        </motion.p>

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
};

export default HowItWorksPage;