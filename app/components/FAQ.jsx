"use client"
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
  ];

  return (
    <div className=" mx-auto md:p-20 p-8">
      <h1 className="md:text-5xl text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="border-b border-gray-300 rounded-md"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {question}
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
