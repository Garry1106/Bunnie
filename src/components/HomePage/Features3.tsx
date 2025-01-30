"use client";

import React from "react";
import Image from "next/image";

const Features3: React.FC = () => {
    return (
        <section className="relative bg-[#0C0B0D] text-white min-h-screen flex items-end md:items-center justify-center px-6 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="lgbtq.jpg" // Replace with your image URL
                    alt="Background"
                    fill
                    className="object-cover"
                />
                {/* Gradient Overlay for Mobile */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0C0B0D] via-[#0C0B0D]/80 to-transparent md:hidden"
                    aria-hidden="true"
                />
                {/* Gradient Overlay for PC (Darkness on the left) */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0C0B0D] via-[#0C0B0D]/100 to-transparent hidden md:block"
                    aria-hidden="true"
                />
            </div>

            {/* Content */}
            <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 z-10 pb-20 md:pb-0 md:pl-10">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F2C0D3]">
                        PrideSpace:{" "}
                        <span className="bg-gradient-to-r from-[#F2C0D3] to-[#A07DF4] bg-clip-text text-transparent">
                            Your Safe Haven
                        </span>
                        <br />
                        <span className="text-[#A07DF4]">Celebrate Love and Diversity</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        PrideSpace is more than just a platform—it’s your sanctuary for acceptance, support, and community. Whether you’re seeking advice, friendship, or resources, PrideSpace is here to uplift and empower you.
                    </p>
                    <p className="mt-4 text-gray-400">
                        Join a vibrant community of LGBTQ+ individuals and allies who celebrate love, diversity, and inclusion. With access to events, resources, and a supportive network, you’ll find the connection and strength you need.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features3;