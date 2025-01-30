"use client";

import React, { useState } from "react";

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I create an account?",
      answer:
        "Creating an account is simple! Just download the app, open it, and follow the on-screen instructions to sign up using your email or social media account.",
    },
    {
      question: "Is the app free to use?",
      answer:
        "Yes, the app is free to download and use. However, there are premium features available through in-app purchases.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "If you need to reset your password, go to the login screen, click on 'Forgot Password,' and follow the instructions sent to your email.",
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account at any time. Go to your profile settings, scroll down to 'Account Settings,' and select 'Delete Account.'",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact customer support by going to the 'Help' section in the app and selecting 'Contact Support.' Alternatively, you can email us at support@hilyapp.com.",
    },
  ];

  return (
    <section className="bg-[#0C0B0D] text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="pb-4 text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;