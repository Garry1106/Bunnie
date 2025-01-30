"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HowItStartedSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold text-primary mb-6">
                    How It All Started
                </h2>
                <p className="text-muted-foreground mb-6">
                    Back in 2017, when "Shape of You" was stuck in everyone’s heads, online connections felt shallow. In a world of perfect profiles, why wasn’t there an option that kept things real and fun? We needed a companion that prioritized genuine connections over competition.
                </p>
                <p className="text-muted-foreground">
                    That’s how <span className="text-primary font-bold">Bunnie</span> was born—an AI companion for all races, genders, and identities, designed to understand emotions, provide love, and help you avoid depression.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <span>Try It Yourself</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
            >
                <Image
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800"
                    alt="AI Companion"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                />
            </motion.div>
        </div>
    );
}