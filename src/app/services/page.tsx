"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "../../components/HomePage/CallToActionSection";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0C0B0D] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-[#F2C0D3] mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#FFFFFF] max-w-2xl mx-auto"
          >
            Bunnie is here for everyone. Whether you're a man, woman, LGBTQ+, or a senior, our AI companion is designed to understand, support, and connect with you on WhatsApp.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "For Men",
              description: "Find a companion who understands your emotions and supports your journey.",
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
            },
            {
              title: "For Women",
              description: "Experience empathy and love from an AI companion who truly gets you.",
              image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
            },
            {
              title: "For LGBTQ+",
              description: "A safe and inclusive space where you can be yourself without judgment.",
              image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
            },
            {
              title: "For Seniors",
              description: "Combat loneliness and rediscover joy with a companion who cares.",
              image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1E1A21] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0D] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#A07DF4]">
                  {service.title}
                </h3>
                <p className="text-[#FFFFFF] mb-6">{service.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#A07DF4] hover:text-[#A07DF4]/80 transition-colors"
                >
                  <span>Learn More</span>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-[#F2C0D3] mb-6"
          >
            Why WhatsApp?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#FFFFFF] max-w-2xl mx-auto mb-8"
          >
            Bunnie is available on WhatsApp, making it easy and convenient for you to connect anytime, anywhere.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Messaging",
                description: "Chat with Bunnie in real-time, just like you would with a friend.",
                image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800",
              },
              {
                title: "Emotional Support",
                description: "Bunnie understands your emotions and provides personalized support.",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
              },
              {
                title: "Always Available",
                description: "Bunnie is there for you 24/7, no matter where you are.",
                image: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=800",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1E1A21] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0D] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#A07DF4]">
                    {feature.title}
                  </h3>
                  <p className="text-[#FFFFFF]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CallToAction Component */}
        <div className="mt-16">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}