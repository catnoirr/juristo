import React from 'react';

const Benefits = () => {
  return (
    <div className="px-4 py-8 ">
      <h2 className="text-5xl font-bold text-center text-black mb-8">Benefits  with smart indicators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gridcolor  rounded-3xl shadow-lg pb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card.png" alt="AI" className="rounded-t-3xl object-cover w-full" />
          </div>
          <div className='px-6'>

          <h3 className="text-2xl font-semibold  text-white mb-4">Enhanced Accuracy</h3>
          <p className="text-gray-600 ">
            Reduce errors with an AI-driven review process that highlights discrepancies and suggests corrections.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor  rounded-3xl shadow-lg">
          <div className="flex items-center justify-center mb-4 object-fill">
            <img src="/div-card.png" alt="AI" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold  text-white mb-4">Enhanced Accuracy</h3>
          <p className="text-gray-600 ">
            Reduce errors with an AI-driven review process that highlights discrepancies and suggests corrections.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor rounded-3xl shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card2.png" alt="Cost Savings" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold  text-white mb-4">Cost Savings</h3>
          <p className="text-gray-600 ">
            Automate routine legal tasks, reducing operational costs without compromising service quality.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor  rounded-3xl shadow-lg pb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card3.png" alt="Increased Accessibility" className="w-full rounded-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold text-white mb-4">Increased Accessibility</h3>
          <p className="text-gray-600 ">
            Provide clients and the general public with basic legal insights, promoting better access to justice.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor rounded-3xl shadow-lg ">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card4.png" alt="Informed Decision-Making" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold text-white mb-4">Informed Decision-Making</h3>
          <p className="text-gray-600">
            Gain predictive insights to develop more strategic case approaches and anticipate outcomes.
          </p>
          </div>
        </div>

        <div className="bg-gridcolor rounded-3xl shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <img src="/div-card5.png" alt="Global Reach" className="w-full rounded-t-3xl" />
          </div>
          <div className='px-6'>
          <h3 className="text-2xl font-semibold text-white mb-4">Global Reach</h3>
          <p className="text-gray-600">
            From Indian law to international standards, stay compliant and informed across jurisdictions.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
