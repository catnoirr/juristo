import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DraftingDocs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-md">
      {/* Carousel Section */}
      <div className="flex items-center space-x-4 w-full md:w-2/3">
        {/* Previous Button */}
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-2xl" />
        </button>

        {/* Image Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <img
              src="/path-to-image-1.jpg"
              alt="Document Drafting"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white font-semibold text-lg">
                Document Drafting
              </p>
            </div>
          </div>
          <div>
            <img
              src="/path-to-image-2.jpg"
              alt="Drafting Process"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Drafting <br />
          <span className="text-gray-600">Automated Docs</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Draft precise contracts, agreements, and other legal documents
          effortlessly. Ensure compliance and detect inconsistencies with
          automated document creation.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started <span className="ml-2">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default DraftingDocs;
