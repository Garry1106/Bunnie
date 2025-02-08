import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-screen flex-col lg:flex-row"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0, 0, 0, 0.7)), url('/digital.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Section - Content */}
      <div className="w-full min-h-screen lg:w-1/2 relative flex items-center justify-center text-center">
        {/* Content Container with Framer Motion Animations */}
        <div className="relative z-10 text-white px-4 sm:px-8">
          {/* Logo and Heading */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo"
                height={200}
                width={100}
                objectFit="contain"
                quality={100}
                priority
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">Welcome to AI Companion</h1>
          </div>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg max-w-md mx-auto">
            Your ultimate AI buddy for all things fun, smart, and sassy. Whether you need advice, a laugh, or just someone to vibe with, we've got you covered. Let's level up your day! 🚀
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8">
        {children}
      </div>

      
    </div>
  );
}