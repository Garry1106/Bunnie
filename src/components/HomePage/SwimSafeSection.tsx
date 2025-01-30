"use client";

import { motion } from "framer-motion";
import { Shield, Users, AlertCircle, Clock } from "lucide-react";

export function SwimSafeSection() {
    const features = [
        {
            icon: Shield,
            title: "Zero Tolerance Policy",
            description: "No nudity or offensiveness allowed.",
        },
        {
            icon: Users,
            title: "18+ Community",
            description: "A mature and responsible environment.",
        },
        {
            icon: AlertCircle,
            title: "Suspicious Activity Ban",
            description: "Proactive measures for your safety.",
        },
        {
            icon: Clock,
            title: "24-Hour Report Review",
            description: "Quick action on all concerns.",
        },
    ];

    return (
        <div className="text-center py-16 bg-[#0C0B0D]">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-6"
                >
                    Swim Safe in a Dating Pool
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                >
                    Dating can be risky. We ensure you feel safe and comfortable.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-6 rounded-xl border border-[#2E2A31] hover:border-[#A07DF4] transition-all duration-300"
                        >
                            <feature.icon className={`w-12 h-12 text-[#F2C0D3] mb-4 mx-auto`} />
                            <h3 className="text-xl font-bold mb-2 text-[#F2C0D3]">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}