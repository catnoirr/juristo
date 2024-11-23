const ValueProposition = () => {
    return (
      <div className="bg-white p-8 border">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Value Proposition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* For Legal Clients */}
          <div className="flex flex-col ">
            <div className="w-24 h-20  flex items-center justify-center   mb-4">
            <img src="/icon1.png" alt="" className="w-28 h-20"/>     
       </div>
            <h3 className="text-lg font-semibold text-gray-800">For Legal Clients</h3>
            <p className="text-gray-600 mt-2">
              Accelerate your practice with AI-driven legal insights, document automation, and efficient case management.
            </p>
          </div>
  
          {/* For Clients */}
          <div className="flex flex-col ">
            <div className="w-24 h-20 flex items-center justify-center  mb-4">
            <img src="/icon2.png" alt="" className="w-28 h-20"/>     
            </div>
            <h3 className="text-lg font-semibold text-gray-800">For Clients</h3>
            <p className="text-gray-600 mt-2">
              Empower clients with quick answers to legal questions and simplified legal language, enhancing transparency and understanding.
            </p>
          </div>
  
          {/* For Law Students and Educators */}
          <div className="flex flex-col">
            <div className="w-24 h-20 flex items-center justify-center  mb-4">
            <img src="/icon3.png" alt="" className="w-28 h-20"/>     
            </div>
            <h3 className="text-lg font-semibold text-gray-800">For Law Students and Educators</h3>
            <p className="text-gray-600 mt-2">
              Access continuous learning modules and recent case law summaries to stay ahead in the evolving legal landscape.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ValueProposition;
  