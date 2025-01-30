"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "#0C0B0D" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Checkmark Icon */}
        <motion.div
          className="flex items-center justify-center mb-6" // Center the icon
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M20 6L9 17L4 12"
              stroke="#F2C0D3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#F2C0D3", fontFamily: "Sour Gummy, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Success!
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          Your submission has been successfully processed. We&apos;re excited to
          have you on board! Stay tuned for more updates and exclusive content.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <motion.button
            className="px-6 py-3 rounded-lg font-bold transition-all duration-300"
            style={{
              backgroundColor: "#A07DF4",
              color: "#0C0B0D",
              fontFamily: "Raleway, sans-serif",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>router.push('/')}
          >
            Continue
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Success;