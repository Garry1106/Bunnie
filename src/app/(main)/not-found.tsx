"use client";

import Link from "next/link"; // Use Link for client-side navigation
import { motion } from "framer-motion"; // Add animations
import { ArrowRight } from "lucide-react"; // Add an icon for the button

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0C0B0D]">
            {/* Message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-[#F2C0D3] mb-4">
                    404 - Page Not Found
                </h1>
                <p className="text-lg text-[#A07DF4] max-w-2xl mx-auto opacity-80 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                {/* Link to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-[#A07DF4] text-[#0C0B0D] font-semibold rounded-lg hover:bg-[#A07DF4]/90 hover:scale-105 transition-all"
                >
                    <span>Go Back to Home</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </motion.div>
        </div>
    );
}