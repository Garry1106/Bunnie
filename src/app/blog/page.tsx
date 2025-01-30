"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import CallToAction from "../../components/HomePage/CallToActionSection"; // Import the CallToAction component

const posts = [
  {
    title: "The Future of AI Companionship",
    excerpt: "Exploring how AI companions are revolutionizing emotional support and mental health.",
    author: "Dr. Sarah Chen",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
  },
  {
    title: "Building Meaningful Connections in the Digital Age",
    excerpt: "How technology is helping people overcome loneliness and find support.",
    author: "Michael Roberts",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800",
  },
  {
    title: "The Science Behind AI Emotional Intelligence",
    excerpt: "Understanding the technology that powers empathetic AI responses.",
    author: "Dr. Emily Watson",
    date: "Mar 10, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "AI and Mental Health: A New Frontier",
    excerpt: "How AI is transforming mental health care and providing accessible support.",
    author: "Dr. James Lee",
    date: "Mar 8, 2024",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800",
  },
  {
    title: "The Ethics of AI Companionship",
    excerpt: "Exploring the ethical considerations of AI in emotional support roles.",
    author: "Dr. Rachel Adams",
    date: "Mar 5, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "How AI is Redefining Human Relationships",
    excerpt: "The impact of AI on how we form and maintain relationships.",
    author: "Sophia Martinez",
    date: "Mar 3, 2024",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
  },
  {
    title: "AI Companions for the Elderly",
    excerpt: "How AI is providing companionship and care for the elderly population.",
    author: "Dr. John Carter",
    date: "Mar 1, 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
  },
  {
    title: "The Role of AI in Reducing Loneliness",
    excerpt: "How AI is helping people combat loneliness in an increasingly digital world.",
    author: "Laura Bennett",
    date: "Feb 28, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  },
  {
    title: "AI and Emotional Well-being",
    excerpt: "The role of AI in promoting emotional well-being and mental health.",
    author: "Dr. Mark Taylor",
    date: "Feb 25, 2024",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
  },
  {
    title: "The Evolution of AI Companions",
    excerpt: "A look at how AI companions have evolved over the years.",
    author: "Dr. Lisa Wong",
    date: "Feb 22, 2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
  },
  {
    title: "AI and the Future of Therapy",
    excerpt: "How AI is being integrated into therapeutic practices.",
    author: "Dr. Robert Harris",
    date: "Feb 20, 2024",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
  },
  {
    title: "AI Companions for Children",
    excerpt: "The role of AI in providing educational and emotional support for children.",
    author: "Dr. Karen White",
    date: "Feb 18, 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  },
  {
    title: "The Psychology of AI Companionship",
    excerpt: "Understanding the psychological impact of AI companions on users.",
    author: "Dr. Steven Brown",
    date: "Feb 15, 2024",
    image: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=800",
  },
  {
    title: "AI and the Future of Social Interaction",
    excerpt: "How AI is shaping the way we interact with each other in the digital age.",
    author: "Dr. Olivia Green",
    date: "Feb 12, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
  },
  {
    title: "AI Companions in the Workplace",
    excerpt: "The role of AI in providing emotional support and reducing stress at work.",
    author: "Dr. Peter Clark",
    date: "Feb 10, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0C0B0D] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#F2C0D3] mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the latest developments in AI companionship and emotional support.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1E1A21] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#F2C0D3] mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#A07DF4]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#A07DF4]" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center mt-4 text-[#A07DF4] hover:text-[#A07DF4]/80 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CallToAction Component */}
        <div className="mt-16">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}