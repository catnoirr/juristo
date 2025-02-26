import React from 'react';

const Benefits = () => {
  return (
    <div className="md:p-20  p-6">
      <h2 className="text-5xl font-bold text-center text-black mb-8">Benefits of AI-Powered Mental Health Legal Support</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gridcolor  rounded-3xl shadow-lg pb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card.png" alt="Confidential Support" className="rounded-t-3xl object-cover w-full" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold  text-white mb-4">Confidential Support</h3>
          <p className="text-gray-600 ">
            Access private and secure legal consultation for mental health matters with our AI-enhanced confidentiality protocols.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor  rounded-3xl shadow-lg">
          <div className="flex items-center justify-center mb-4 object-fill">
            <img src="/div-card.png" alt="24/7 Accessibility" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold  text-white mb-4">24/7 Accessibility</h3>
          <p className="text-gray-600 ">
            Get immediate support for anxiety-related legal concerns at any time through our AI assistant, ensuring help when you need it most.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor rounded-3xl shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card2.png" alt="Expert Guidance" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold  text-white mb-4">Expert Guidance</h3>
          <p className="text-gray-600 ">
            Connect with legal professionals specialized in mental health advocacy, supported by AI-driven insights for better outcomes.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor  rounded-3xl shadow-lg pb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card3.png" alt="Simplified Process" className="w-full rounded-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold text-white mb-4">Simplified Process</h3>
          <p className="text-gray-600 ">
            Navigate complex legal procedures with ease through our AI-powered system that breaks down complicated legal terms and processes.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor rounded-3xl shadow-lg ">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card4.png" alt="Personalized Care" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold text-white mb-4">Personalized Care</h3>
          <p className="text-gray-600">
            Receive tailored legal support that considers your unique mental health circumstances and specific legal requirements.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor rounded-3xl shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card5.png" alt="Comprehensive Support" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold text-white mb-4">Comprehensive Support</h3>
          <p className="text-gray-600">
            Access a full range of legal services for mental health advocacy, from documentation to representation, all enhanced by AI technology.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
