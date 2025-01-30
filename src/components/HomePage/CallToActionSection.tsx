'use client';

import { motion } from 'framer-motion';

export default function CallToActionSection() {
    return (
        <section className="py-16 bg-[#0C0B0D]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-6"
                >
                    Ready to Transform Your Future?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-gray-400 mb-8"
                >
                    Join thousands of innovators who are already shaping the future with our product.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-[#A07DF4] text-[#0C0B0D] font-bold py-3 px-8 rounded-full hover:bg-[#A07DF4]/90 transition-all duration-300"
                >
                    Get Started Now
                </motion.button>
            </div>
        </section>
    );
}