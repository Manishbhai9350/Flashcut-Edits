'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the typical turnaround time for a project?",
    answer: "Turnaround times vary by package: Starter (48 hours), Pro (24 hours), Premium (12 hours). We also offer rush delivery options for urgent projects.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we offer unlimited revisions to ensure your complete satisfaction. We work closely with you until the final product exceeds your expectations.",
  },
  {
    question: "How do I provide my footage and requirements?",
    answer: "After booking, we'll share a secure link for you to upload your materials and project brief. Our team will review everything and contact you if we need any clarification.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and bank transfers. Payment is processed securely through our platform with industry-standard encryption.",
  },
  {
    question: "What types of videos do you edit?",
    answer: "We specialize in YouTube videos, social media content, promotional videos, corporate presentations, wedding films, and more. Our team adapts to any style or format you need.",
  },
  {
    question: "Can you work with footage from any camera?",
    answer: "Absolutely! We work with footage from smartphones, DSLRs, professional cameras, screen recordings, and any other video format. We'll optimize everything for the best quality output.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
            Questions
          </span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          We answer common inquiries about our video editing services and how we can assist you.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="border border-gray-200 overflow-hidden rounded-2xl divide-y divide-gray-200">
            {faqs.map((item, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-6 px-6 text-left text-lg font-semibold text-[#0d1117] focus:outline-none hover:bg-gray-50 transition duration-300"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    } text-gray-500 flex-shrink-0 ml-4`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-500 text-base text-left leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
