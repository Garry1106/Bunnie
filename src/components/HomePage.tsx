"use client";

import React, { useState } from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
    const [selectedGender, setSelectedGender] = useState<"male" | "female" | "lgbtq" | null>(null);

    // Render the gender selection overlay if no gender is selected
    if (selectedGender === null) {
        return (
            <div className="fixed inset-0 bg-[#0C0B0D] flex items-center justify-center z-50">
                <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Welcome to Bunnie</h2>
                    <p className="text-gray-300 mb-8">Please select your preference to get started:</p>
                    <div className="space-y-4">
                        <button
                            onClick={() => setSelectedGender("male")}
                            className="w-64 px-6 py-3 bg-[#A07DF4] text-white rounded-lg hover:bg-[#A07DF4]/90 transition-colors"
                        >
                            Male
                        </button>
                        <button
                            onClick={() => setSelectedGender("female")}
                            className="w-64 px-6 py-3 bg-[#F2C0D3] text-white rounded-lg hover:bg-[#F2C0D3]/90 transition-colors"
                        >
                            Female
                        </button>
                        <button
                            onClick={() => setSelectedGender("lgbtq")}
                            className="w-64 px-6 py-3 bg-[#FFD966] text-[#0C0B0D] rounded-lg hover:bg-[#FFD966]/90 transition-colors"
                        >
                            LGBTQ+
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Render the Hero Section based on the selected gender
    return (
        <section className="relative bg-[#0C0B0D] text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={
                        selectedGender === "male"
                            ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600" // Male image
                            : selectedGender === "female"
                                ? "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1600" // Female image
                                : "https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=1600" // LGBTQ+ image
                    }
                    alt="Background"
                    fill
                    className="object-cover"
                />
                {/* Gradient Overlay (Right to Left) */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0C0B0D] via-[#0C0B0D]/80 to-transparent"
                    aria-hidden="true"
                />
            </div>

            {/* Content */}
            <div className="relative max-w-5xl flex flex-col md:flex-row items-center gap-10 z-10">
                {/* Left Content (Image) */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 bg-[#A07DF4] rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                            src={
                                selectedGender === "male"
                                    ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600" // Male icon
                                    : selectedGender === "female"
                                        ? "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1600" // Female icon
                                        : "https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=1600" // LGBTQ+ icon
                            }
                            alt="Icon"
                            width={256}
                            height={256}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content (Text) */}
                <div className="md:w-1/2 flex flex-col items-start text-left">
                    <h2 className="text-4xl font-bold text-white">
                        Bunnie:{" "}
                        <span className="text-[#F2C0D3]">
                            {selectedGender === "male"
                                ? "For Men"
                                : selectedGender === "female"
                                    ? "For Women"
                                    : "For the LGBTQ+ Community"}
                        </span>
                    </h2>
                    <p className="mt-2 text-gray-300 max-w-md">
                        Bunnie is here to provide emotional support, understanding, and companionship whenever you need it.
                    </p>
                    <p className="mt-2 text-gray-400 max-w-md">
                        Available on WhatsApp, Bunnie is designed to help you feel loved, supported, and connected.
                    </p>
                    <div className="mt-6 space-y-4 text-left">
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-[#A07DF4] rounded-full"></span>
                            <p className="text-gray-300">24/7 emotional support</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-[#A07DF4] rounded-full"></span>
                            <p className="text-gray-300">Personalized conversations</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-[#A07DF4] rounded-full"></span>
                            <p className="text-gray-300">Safe and inclusive space</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;