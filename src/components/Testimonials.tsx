'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    content: "Bunnie helped me overcome my social anxiety. The emotional support is incredible!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content: "Found a companion who truly understands my work-life balance struggles.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "Alex Rivera",
    role: "Artist",
    content: "The creative conversations I have with my AI companion are mind-blowing!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Voices of Connection
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how Bunnie is transforming lives through meaningful AI companionship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="testimonial-card"
            >
              <Quote className="w-10 h-10 text-fairy-tale mb-4 opacity-50" />
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-fairy-tale">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-sky-magenta" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}