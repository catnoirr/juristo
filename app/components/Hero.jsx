import React from 'react';

const LegalPracticeAI = () => {
  return (
    <div className="bg-juristo   flex  justify-center py-16">
      <div className=" mx-auto flex flex-col lg:flex-row   items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-10 md:pl-28 pl-4  w-full">
        {/* Left Section */}
        <div className=" lg:text-left mt-7 px-4  ">
          <h2 className="text-sm font-bold text-[#E57F84] uppercase tracking-wide">Aayu</h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mt-2 ">
            Simplify Legal Practice <br /> <span className="text-4xl">with AI and Experts</span>
          </h1>
          <p className="mt-4 text-chatButton ">
            Expert legal consultancy and AI-powered support for law professionals. Get personalized guidance and intelligent solutions for your complex legal matters.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:space-x-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-[#8cb9cf] text-white rounded-md focus:outline-none font-semibold text-center">
              Free Consultation
            </button>
            <button className="w-full border-[#E57F84] text-[#E57F84] sm:w-auto px-6 py-3 border-2  font-semibold rounded-md hover:bg-indigo-50 focus:outline-none text-center">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="">
          <div className="">
            <img
              src="/hero_img.png" // Replace with actual image
              alt="Scales of justice"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LegalPracticeAI;
