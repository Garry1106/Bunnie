"use client";

import { motion } from "framer-motion";
import { Heart, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component for the logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0B0D] text-[#FFFFFF] py-12 overflow-hidden ">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 mb-2">
              {/* Add your logo here */}
              <Image
                src="/logo.png" // Path to your logo in the public folder
                alt="Bunnie Logo"
                width={40} // Adjust width as needed
                height={40} // Adjust height as needed
                className="object-contain mb-2"
              />
              <span className="text-xl font-bold font-architects-daughter text-[#F2C0D3]">
                Bunnie
              </span>
            </Link>
            <p className="text-sm text-[#FFFFFF]/80 font-raleway">
              Your perfect AI companion for emotional support and meaningful
              connections.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F2C0D3] font-architects-daughter">
              Quick Links
            </h3>
            <ul className="space-y-2 font-raleway">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F2C0D3] font-architects-daughter">
              Contact
            </h3>
            <ul className="space-y-2 font-raleway">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F2C0D3]" />
                <span>support@bunnie.io</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F2C0D3]" />
                <span>+91 </span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-[#F2C0D3]" />
                <span>Live Chat Support</span>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F2C0D3] font-architects-daughter">
              Legal
            </h3>
            <ul className="space-y-2 font-raleway">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-[#F2C0D3] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Section (Frontend Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F2C0D3] font-architects-daughter">
              Newsletter
            </h3>
            <p className="text-sm text-[#FFFFFF]/80 mb-4 font-raleway">
              Stay updated with our latest features and announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#0C0B0D] border border-[#FFFFFF]/20 px-4 py-2 rounded-lg flex-grow text-sm font-raleway text-[#FFFFFF] placeholder-[#FFFFFF]/50 focus:outline-none focus:ring-2 focus:ring-[#F2C0D3]"
              />
              <button
                type="button"
                className="bg-[#F2C0D3] hover:bg-[#A07DF4] px-4 py-2 rounded-lg text-[#0C0B0D] transition-colors font-raleway"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-[#FFFFFF]/20 text-center text-sm text-[#FFFFFF]/80 font-raleway"
        >
          <p>© {currentYear} Bunnie. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;