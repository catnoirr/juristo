"use client"
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does AI assist in mental health legal consultancy?",
      answer: "Our AI system helps by providing initial legal guidance, analyzing documents, and identifying relevant legal precedents specific to mental health cases. It works alongside our expert legal professionals to offer faster, more accurate support while maintaining confidentiality."
    },
    {
      question: "What types of mental health-related legal issues do you handle?",
      answer: "We handle a wide range of cases including workplace discrimination, disability rights, insurance claims, healthcare access, treatment consent issues, and anxiety-related workplace accommodations. Our team provides comprehensive support for both individual and systemic advocacy."
    },
    {
      question: "How do you ensure confidentiality of mental health information?",
      answer: "We employ advanced encryption protocols and secure communication channels. All consultations are protected by attorney-client privilege, and our AI systems are designed with privacy-first architecture to ensure your sensitive information remains confidential."
    },
    {
      question: "Can I access legal support during a mental health crisis?",
      answer: "Yes, our 24/7 AI-powered platform provides immediate preliminary guidance and can connect you with emergency legal support when needed. We also maintain partnerships with mental health crisis services to ensure comprehensive care."
    },
    {
      question: "How do I start the legal consultation process?",
      answer: "You can begin by using our AI assistant for initial guidance, schedule a confidential consultation with our legal experts, or upload relevant documents for review. We'll guide you through each step and ensure you receive the most appropriate support for your situation."
    }
  ];

  return (
    <div className=" mx-auto md:p-20 p-8">
      <h1 className="md:text-5xl text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 rounded-md"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
