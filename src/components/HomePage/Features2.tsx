"use client";

import React from "react";
import Image from "next/image";

const Features2: React.FC = () => {
  return (
    <section className="relative bg-[#0C0B0D] text-white min-h-screen flex items-end md:items-center justify-center px-6 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="man.jpg" // Replace with your image URL
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay for Mobile */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0C0B0D] via-[#0C0B0D]/80 to-transparent md:hidden"
          aria-hidden="true"
        />
        {/* Gradient Overlay for PC (Darkness on the right) */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-[#0C0B0D] via-[#0C0B0D]/100 to-transparent hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-end justify-end gap-10 z-10 pb-20 md:pb-0 md:pr-10">
        {/* Right Content (on the dark side) */}
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F2C0D3]">
            Empower:{" "}
            <span className="bg-gradient-to-r from-[#F2C0D3] to-[#A07DF4] bg-clip-text text-transparent">
              Your Journey to Strength
            </span>
            <br />
            <span className="text-[#A07DF4]">Mind, Body, and Spirit</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Empower is more than just a platform—it’s your guide to becoming the best version of yourself. Whether you’re looking to build muscle, improve mental health, or find balance in life, Empower is here to support you.
          </p>
          <p className="mt-4 text-gray-400">
            Join a community of men who are committed to growth, resilience, and success. With personalized plans, expert advice, and a supportive network, you’ll achieve your goals and transform your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features2;