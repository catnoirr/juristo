import React from "react";

const LegalServices = () => {
  return (
    <div className=" md:px-8 rounded-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src="/image.png"
          alt="Gavel"
          className="w-full rounded-t-lg"
        />
      </div>

      {/* Service Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-10 rounded-3xl shadow-md relative bottom-10 md:ml-20 ml-4 mr-4 md:mr-20 ">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Research Assistance</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Document Drafting</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />

          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Case Prediction</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Multijurisdictional Support</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />

          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default LegalServices;
