'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer professional video editing services including reels, promos, and YouTube content.",
  },
  {
    question: "How long does the editing process take?",
    answer: "Turnaround time depends on the complexity of your request but usually ranges from 2–5 business days.",
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely! We allow up to 2 free revisions with each project to ensure satisfaction.",
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
          Find answers to common inquiries about our video editing services and how we can assist you.
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
