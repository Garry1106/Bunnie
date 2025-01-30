'use client';

import { motion } from 'framer-motion';

export default function MainBannerSection() {
    return (
        <section className="relative flex items-center justify-center px-6 py-24 overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {/* Text Background */}
                <div
                    className="absolute inset-0 bg-[url('/path/to/your/text-pattern.svg')] opacity-10"
                    aria-hidden="true"
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0C0B0D] via-[#0C0B0D]/80 to-transparent"
                    aria-hidden="true"
                />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl font-bold mb-6"
                >
                    Revolutionize Your World with{' '}
                    <span className="bg-gradient-to-r from-[#F2C0D3] to-[#A07DF4] bg-clip-text text-transparent">
                        Our Product
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Discover the future of innovation with a product designed to empower, inspire, and transform.
                </motion.p>
            </div>
        </section>
    );
}