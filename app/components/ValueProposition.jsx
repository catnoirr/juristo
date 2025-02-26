const ValueProposition = () => {
    return (
      <div className="bg-white p-8  md:p-20  ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ">Why Choose Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Expert Legal Support */}
          <div className="flex flex-col  ">
            <div className="w-24 h-20  flex items-center justify-center   mb-4">
            <img src="/icon1.png" alt="" className="w-28 h-20"/>     
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Expert Legal Support</h3>
            <p className="text-gray-600 mt-2">
              Access specialized legal consultants who understand mental health challenges and provide compassionate guidance for your situation.
            </p>
          </div>
  
          {/* AI-Powered Assistance */}
          <div className="flex flex-col ">
            <div className="w-24 h-20 flex items-center justify-center  mb-4">
            <img src="/icon2.png" alt="" className="w-28 h-20"/>     
            </div>
            <h3 className="text-lg font-semibold text-gray-800">AI-Powered Solutions</h3>
            <p className="text-gray-600 mt-2">
              Benefit from our advanced AI technology that helps analyze cases, provide preliminary assessments, and streamline the legal consultation process.
            </p>
          </div>
  
          {/* Mental Health Focus */}
          <div className="flex flex-col">
            <div className="w-24 h-20 flex items-center justify-center  mb-4">
            <img src="/icon3.png" alt="" className="w-28 h-20"/>     
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Mental Health Advocacy</h3>
            <p className="text-gray-600 mt-2">
              Get specialized support for anxiety-related legal matters with professionals who understand both legal requirements and mental health sensitivities.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ValueProposition;
  