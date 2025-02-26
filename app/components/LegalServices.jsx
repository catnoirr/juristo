import React from "react";

const LegalServices = () => {
  return (
    <div className="md:px-20 px-2 rounded-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src="/image.png"
          alt="Legal AI Services"
          className="w-full rounded-t-lg"
        />
      </div>

      {/* Service Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white py-10 px-16 rounded-3xl shadow-md relative bottom-10 md:ml-20 ml-4 mr-4 md:mr-20 ">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">AI Legal Research</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />
          <p className="text-gray-600">Advanced AI-powered legal research backed by expert attorneys</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Expert Consultation</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />
          <p className="text-gray-600">Direct access to experienced lawyers enhanced by AI insights</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Smart Analysis</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />
          <p className="text-gray-600">Combined expertise of AI and legal professionals for case evaluation</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <hr className="w-16 h-1 font-semibold bg-black" />
          <p className="text-gray-600">Round-the-clock access to AI tools and legal experts</p>
        </div>
      </div>
    </div>
  );
};

export default LegalServices;
