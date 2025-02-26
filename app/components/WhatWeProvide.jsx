"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className=" md:p-20 space-y-10 ">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {/* Slide 1: AI Mental Health Legal Assistant */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden p-6 py-8 items-center">
            <div className="w-[600px] h-[500px] flex-shrink-0">
              <img
                src="/ai.jpg"
                alt="AI Assistant interface"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl md:ml-6 mt-6 md:mt-0 h-[250px] relative md:-left-28 md:-top-0 -top-10 w-80 md:w-full">
              <h3 className="text-gray-800 text-lg font-bold mb-4">AI Mental Health Legal Assistant</h3>
              <p className="text-gray-600 text-sm">
                Get instant preliminary legal guidance for mental health-related concerns through our AI-powered assistant. Available 24/7 to help you understand your rights and options in a confidential environment.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium mt-4 inline-flex items-center"
              >
                Start Consultation <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Expert Legal Consultation */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden p-6 py-8 items-center">
            <div className="w-[600px] h-[500px] flex-shrink-0">
              <img
                src="/expert.jpg"
                alt="Legal consultation"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl md:ml-6 mt-6 md:mt-0 h-[250px] relative md:-left-28 md:-top-0 -top-10 w-80 md:w-full">
              <h3 className="text-gray-800 text-lg font-bold mb-4">Expert Legal Consultation</h3>
              <p className="text-gray-600 text-sm">
                Connect with specialized legal professionals who understand both mental health challenges and legal requirements. Get personalized guidance for anxiety-related legal matters with compassion and expertise.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium mt-4 inline-flex items-center"
              >
                Book Consultation <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Document Analysis & Support */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden p-6 py-8 items-center">
            <div className="w-[600px] h-[500px] flex-shrink-0">
              <img
                src="/ai2.jpg"
                alt="Document analysis"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl md:ml-6 mt-6 md:mt-0 h-[250px] relative md:-left-10 md:-top-0 -top-10 w-80 md:w-full">
              <h3 className="text-gray-800 text-lg font-bold mb-4">Document Analysis & Support</h3>
              <p className="text-gray-600 text-sm">
                Our AI-powered system helps analyze legal documents related to mental health cases, making complex legal language easier to understand and ensuring your rights are protected.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium mt-4 inline-flex items-center"
              >
                Upload Documents <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
