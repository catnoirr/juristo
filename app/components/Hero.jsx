import React from 'react';

const LegalPracticeAI = () => {
  return (
    <div className="bg-juristo   flex  justify-center">
      <div className=" mx-auto flex flex-col lg:flex-row   items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-10 md:pl-28 pl-4  w-full">
        {/* Left Section */}
        <div className=" lg:text-left mt-7 px-4  ">
          <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Juristo</h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mt-2 ">
            Simplify Legal Practice <br /> <span className="text-4xl">with AI</span>
          </h1>
          <p className="mt-4 text-chatButton ">
            Empower law students and professionals with real-time learning. Simplify complex cases and stay updated with AI-generated summaries.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-chatButton text-white rounded-md  focus:outline-none font-semibold">
              Chat Now
            </button>
            <button className="px-6 py-3 border-2 border-chatButtonBorder font-semibold rounded-md hover:bg-indigo-50 focus:outline-none">
              API Docs
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
