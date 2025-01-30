'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Heart, MessageCircle } from 'lucide-react';

const stats = [
  {
    number: "100+",
    label: "AI Companions",
    icon: Users,
    color: "text-[#F2C0D3]", // Primary color
  },
  {
    number: "750K+",
    label: "Active Users",
    icon: Heart,
    color: "text-[#F2C0D3]", // Secondary color
  },
  {
    number: "5M+",
    label: "Support Hours",
    icon: Clock,
    color: "text-[#F2C0D3]", // Primary color
  },
  {
    number: "10M+",
    label: "Messages Exchanged",
    icon: MessageCircle,
    color: "text-[#F2C0D3]", // Secondary color
  },
];

export default function Stats() {
  return (
    <div className="min-h-fit pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-[#FFFFFF] mb-6"
          >
            Our Impact in{' '}
            <span className="bg-gradient-to-br from-[#F2C0D3] to-[#A07DF4] bg-clip-text text-transparent font-semibold">
              Numbers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Making a difference in lives across the globe
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover animation
              className="rounded-2xl p-8 text-center border border-[#2E2A31] hover:border-[#A07DF4] transition-all duration-300"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <h2 className="text-4xl font-bold text-[#FFFFFF] mb-2">
                {stat.number}
              </h2>
              <p className="text-[#A07DF4]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}