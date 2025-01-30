"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { useFormContext } from "@/context/FormContext"; // Import the custom hook
import { useRouter } from "next/navigation"; // Import useRouter for redirection

export default function Pricing() {
  const { setFormData } = useFormContext(); // Access the form context
  const router = useRouter(); // Initialize the router

  // Handle the "Get Started" button click
  const handleGetStarted = (plan: string) => {
    // Update the subscription plan in the form context
    setFormData((prevData) => ({
      ...prevData,
      subscriptionPlan: plan,
    }));

    // Redirect to the /get-started route
    router.push("/get-started");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0C0B0D]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#F2C0D3] mb-6">
            Choose Your Connection
          </h1>
          <p className="text-xl text-[#A07DF4] max-w-2xl mx-auto">
            Find the perfect plan to start your journey with an AI companion
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col p-8 rounded-xl bg-gradient-to-b ${plan.gradient} border border-[#2E2A31] hover:border-[#A07DF4] transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[#A07DF4] text-[#0C0B0D] px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-[#F2C0D3] mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#F2C0D3]">
                  ${plan.price}
                </span>
                <span className="text-[#A07DF4]">/{plan.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#F2C0D3]" />
                    <span className="text-[#FFFFFF]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <Button
                onClick={() => handleGetStarted(plan.name)} // Pass the plan name
                className="w-full bg-[#A07DF4] hover:bg-[#A07DF4]/90 text-[#0C0B0D] font-bold transition-all duration-300 mt-auto"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}