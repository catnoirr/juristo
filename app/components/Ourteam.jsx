import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Legal Consultant",
      expertise: "Mental Health Law & Advocacy",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
      description: "Specialized in mental health law with 15+ years of experience in advocating for patients' rights and workplace accommodations."
    },
    {
      name: "James Anderson",
      role: "AI Technology Director",
      expertise: "Legal Tech & AI Systems",
      image: "/team2.jpg",
      description: "Expert in developing AI-powered legal solutions with a focus on privacy and mental health case management."
    },
    {
      name: "Dr. Emily Chen",
      role: "Mental Health Advisor",
      expertise: "Clinical Psychology & Legal Rights",
      image: "/team3.jpg",
      description: "Bridges the gap between mental health care and legal support, ensuring comprehensive client advocacy."
    },
    {
      name: "Michael Roberts",
      role: "Senior Legal Counsel",
      expertise: "Disability Rights & Employment Law",
      image: "/team4.jpg",
      description: "Specializes in workplace discrimination and anxiety-related accommodation cases."
    }
  ];

  return (
    <div className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600">
            Combining legal expertise with mental health advocacy for comprehensive support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-[#8cb9cf] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-500 text-sm">
                  {member.description}
                </p>
              </div>
              <div className="px-6 pb-4">
                <button className="text-[#8cb9cf] hover:text-blue-800 font-medium text-sm">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Our team combines expertise in legal consultation, mental health advocacy, and AI technology
            to provide you with the best possible support.
          </p>
          <button className="bg-[#8cb9cf] text-black px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 hover:text-white">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
