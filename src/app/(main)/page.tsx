'use client'

import HomePage from "@/components/HomePage"; // Replace Hero with HomePage
import Features from "@/components/HomePage/Features";
import Pricing from "@/components/HomePage/Pricing";
import Stats from "@/components/HomePage/Stats";
import FAQPage from "@/components/Support/Faq";
import Features2 from "@/components/HomePage/Features2";
import Features3 from "@/components/HomePage/Features3";
import HeroSection from "@/components/HomePage/Hero";
import { SwimSafeSection } from "@/components/HomePage/SwimSafeSection";
import MainBannerSection from "@/components/MainBannerSection";
import CallToActionSection from "@/components/HomePage/CallToActionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0B0D] text-white">

      <HeroSection />

      <Stats />

      <Features />

      <MainBannerSection />

      <Features2 />

      <SwimSafeSection />

      <Features3 />

      <Pricing />

      <CallToActionSection />

    </div>
  );
}

