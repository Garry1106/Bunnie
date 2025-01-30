'use client';

import { motion } from 'framer-motion';

export default function FeaturesSection() {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 text-[#F2C0D3]"
                >
                    Why Choose Us?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl p-6 text-center border border-[#2E2A31] hover:border-[#A07DF4] transition-all duration-300"
                    >
                        <div className="w-10 h-10 mx-auto mb-4 bg-[#F2C0D3] rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#0C0B0D]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#F2C0D3]">Cutting-Edge Technology</h3>
                        <p className="text-gray-400">
                            Our product leverages the latest advancements in AI and machine learning to deliver unparalleled performance.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="rounded-2xl p-6 text-center border border-[#2E2A31] hover:border-[#A07DF4] transition-all duration-300"
                    >
                        <div className="w-10 h-10 mx-auto mb-4 bg-[#A07DF4] rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#0C0B0D]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#F2C0D3]">Seamless Integration</h3>
                        <p className="text-gray-400">
                            Designed to work effortlessly with your existing systems, ensuring a smooth and hassle-free experience.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="rounded-2xl p-6 text-center border border-[#2E2A31] hover:border-[#A07DF4] transition-all duration-300"
                    >
                        <div className="w-10 h-10 mx-auto mb-4 bg-[#F2C0D3] rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#0C0B0D]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#F2C0D3]">Future-Proof Solutions</h3>
                        <p className="text-gray-400">
                            Stay ahead of the curve with a product that evolves and adapts to meet the demands of tomorrow.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}