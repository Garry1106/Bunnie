"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import CallToAction from "@/components/HomePage/CallToActionSection"; // Import the CallToAction component
import FAQ from "@/components/Support/Faq"; // Import the FAQ component

export default function Support() {
  const contactOptions = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll get back to you within 24 hours.",
      link: "mailto:support@bunnie.com",
      linkText: "support@bunnie.com",
      color: "text-[#A07DF4]", // Purple accent
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time for quick assistance.",
      link: "#",
      linkText: "Start Chat",
      color: "text-[#A07DF4]", // Purple accent
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with a support representative during business hours.",
      link: "tel:+1234567890",
      linkText: "+1 (234) 567-890",
      color: "text-[#A07DF4]", // Purple accent
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0B0D] text-[#FFFFFF] flex flex-col pt-24 pb-16">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row flex-1 px-6 md:px-12">
        {/* Left Pane - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          {/* Support Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-[#F2C0D3] mb-4"
            >
              Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base text-[#FFFFFF]"
            >
              We're here to help! Whether you have questions, need assistance, or just want to share feedback, our team is ready to support you.
            </motion.p>
          </motion.div>

          {/* Contact Options Section */}
          <div className="space-y-8 mb-12">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4"
              >
                <option.icon className={`w-6 h-6 ${option.color}`} />
                <div>
                  <h3 className="text-lg font-semibold text-[#FFFFFF]">{option.title}</h3>
                  <p className="text-sm text-[#F2C0D3]">{option.description}</p>
                  <Link
                    href={option.link}
                    className="inline-flex items-center mt-1 text-[#A07DF4] hover:text-[#A07DF4]/80 transition-colors text-sm"
                  >
                    <span>{option.linkText}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Pane - Support Request Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-[#F2C0D3] mb-6"
            >
              Submit a Support Request
            </motion.h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F2C0D3]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 bg-[#1E1A21] border border-[#A07DF4] rounded-lg focus:ring-2 focus:ring-[#A07DF4] focus:border-[#A07DF4] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F2C0D3]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 bg-[#1E1A21] border border-[#A07DF4] rounded-lg focus:ring-2 focus:ring-[#A07DF4] focus:border-[#A07DF4] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F2C0D3]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 bg-[#1E1A21] border border-[#A07DF4] rounded-lg focus:ring-2 focus:ring-[#A07DF4] focus:border-[#A07DF4] outline-none"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-[#A07DF4] text-[#0C0B0D] font-semibold rounded-lg hover:bg-[#A07DF4]/90 transition-colors"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 md:px-12">
        <FAQ />
      </div>

      {/* CallToAction Component */}
      <div className="mt-16">
        <CallToAction />
      </div>
    </div>
  );
}