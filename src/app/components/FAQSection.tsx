"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is your approach to API design?",
    answer:
      "I always highlight what I learned from the code or what was done well, not just issues. When receiving feedback, I ask clarifying questions if I don't understand suggestions and view it as a learning opportunity rather than criticism.",
  },
  {
    question: "How do you approach learning new technologies?",
    answer:
      "I set small goals, build quick prototypes, and explore real-world use cases. I also follow trusted blogs and document my findings.",
  },
  {
    question: "What is your approach to code review and collaboration?",
    answer:
      "I focus on clear communication, explaining decisions in pull requests, and staying open to team feedback for better solutions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-12 max-w-md mx-auto text-left">
      <div className="mb-6">
        <span className="bg-gray-300 px-4 py-1 rounded-full text-sm font-medium">
          FQA’s
        </span>
        <h2 className="text-2xl font-bold mt-4 text-black-1">What You Might Wonder</h2>
        <p className="text-gray-600 mt-2">
          Find the answers to our most common questions here, but if you still
          need help, feel free to contact me.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 transition-all overflow-hidden"
            >
              <div
                className="flex justify-between items-start cursor-pointer "
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold">{faq.question}</p>
                {isOpen ? <X size={20} /> : <Plus size={20} />}
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    className="mt-2 text-gray-700 text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
