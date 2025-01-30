"use client";

import { motion } from "framer-motion";
import { Users, Smile, Star } from "lucide-react";

export function ThreeReasonsSection() {
    const reasons = [
        {
            icon: Users,
            title: "35M+ People Are Already In",
            description: "Join a growing community of real and fun individuals.",
        },
        {
            icon: Smile,
            title: "Gorgeous Folks Near You",
            description: "Connect with people who are just as real and fun as you.",
        },
        {
            icon: Star,
            title: "Real and Fun Like You",
            description: "Bunnie is designed to keep things authentic and enjoyable.",
        },
    ];

    return (
        <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-primary mb-6">
                Three Worthy Reasons to Choose Bunnie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-muted p-6 rounded-xl shadow-lg"
                    >
                        <reason.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2 text-primary">
                            {reason.title}
                        </h3>
                        <p className="text-muted-foreground">{reason.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}