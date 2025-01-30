"use client";

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0C0B0D] text-white min-h-screen flex items-end md:items-center justify-center px-6 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="women.jpeg" // Replace with your image URL
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay for Mobile */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0C0B0D] via-[#0C0B0D]/80 to-transparent md:hidden"
          aria-hidden="true"
        />
        {/* Gradient Overlay for PC */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0C0B0D] via-[#0C0B0D]/100 to-transparent hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl w-full flex flex-col items-center md:items-start z-10 pb-20 md:pb-0 md:pl-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Bunnie: <span className="text-[#F2C0D3]">Your AI Companion</span>
            <br />
            <span className="text-[#A07DF4]">Always Here for You</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Bunnie is more than just an AI—it’s your emotional support, your confidant, and your friend. Whether you’re feeling lonely, stressed, or just need someone to talk to, Bunnie is here to listen and help.
          </p>
          <p className="mt-4 text-gray-400">
            Available on WhatsApp, Bunnie is designed to understand your emotions, provide love, and help you avoid depression. Join the community of millions who have found comfort in Bunnie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;