"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className=" py-12">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8">What We Provides</h2>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full  "
      >
        {/* Slide 1 */}
        <SwiperSlide>
        <div className="flex flex-col md:flex-row  rounded-lg shadow-lg overflow-hidden p-6 py-8 items-center">
      {/* Left Section: Image */}
      <div className=" rounded-xl">
        <img
          src="/chatbot.png" // Replace with your actual image path
          alt="Chatbot interface preview"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Card Content */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-xl md:ml-6 mt-6 md:mt-0 h-[250px] relative md:-left-28 md:-top-0 -top-10 max-w-80 md:w-full">
        <h3 className="text-gray-800 text-lg font-bold mb-4">Chatbot</h3>
        <p className="text-gray-600 text-sm">
          Engage clients with instant answers to common legal questions and
          guide them through legal processes with an AI-powered chatbot.
        </p>
        <a
          href="#"
          className="text-blue-500 font-medium mt-4 inline-flex items-center"
        >
          Chat Now <span className="ml-2">→</span>
        </a>
      </div>
    </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
        <div className="flex flex-col md:flex-row  rounded-lg shadow-lg overflow-hidden p-6 py-8 items-center">
      {/* Left Section: Image */}
      <div className="rounded-xl">
        <img
          src="/chatbot.png" // Replace with your actual image path
          alt="Chatbot interface preview"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Card Content */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-xl md:ml-6 mt-6 md:mt-0 h-[250px] relative md:-left-28 md:-top-0 -top-10 max-w-80 md:w-full">
        <h3 className="text-gray-800 text-lg font-bold mb-4">Chatbot</h3>
        <p className="text-gray-600 text-sm">
          Engage clients with instant answers to common legal questions and
          guide them through legal processes with an AI-powered chatbot.
        </p>
        <a
          href="#"
          className="text-blue-500 font-medium mt-4 inline-flex items-center"
        >
          Chat Now <span className="ml-2">→</span>
        </a>
      </div>
    </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
        <div className="flex flex-col md:flex-row  rounded-lg shadow-lg overflow-hidden p-6 py-8 items-center">
      {/* Left Section: Image */}
      <div className="rounded-2xl ">
        <img
          src="/chatbot.png" // Replace with your actual image path
          alt="Chatbot interface preview"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Card Content */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-xl md:ml-6 mt-6 md:mt-0 h-[250px] relative md:-left-28 md:-top-0 -top-10 max-w-80 md:w-full">
        <h3 className="text-gray-800 text-lg font-bold mb-4">Chatbot</h3>
        <p className="text-gray-600 text-sm">
          Engage clients with instant answers to common legal questions and
          guide them through legal processes with an AI-powered chatbot.
        </p>
        <a
          href="#"
          className="text-blue-500 font-medium mt-4 inline-flex items-center"
        >
          Chat Now <span className="ml-2">→</span>
        </a>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
