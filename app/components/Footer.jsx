"use client"
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  // Function to handle navigation
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className="py-20 md:p-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-8 pl-10 md:pl-0">
          {/* Legal Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Legal Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/services/mental-health-law")}>
                Mental Health Law
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/services/disability-rights")}>
                Disability Rights
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/services/workplace")}>
                Workplace Accommodation
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/services/healthcare")}>
                Healthcare Law
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/services/crisis-support")}>
                Crisis Legal Support
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/practice/individual")}>
                Individual Advocacy
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/practice/compliance")}>
                Institutional Compliance
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/practice/documentation")}>
                Legal Documentation
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/practice/consultation")}>
                Legal Consultation
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/resources/rights-guide")}>
                Legal Rights Guide
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/resources/blog")}>
                Legal Insights Blog
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/resources/faqs")}>
                FAQs
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/resources/newsletter")}>
                Legal Newsletter
              </li>
            </ul>
          </div>

          {/* Client Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Client Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/support/contact")}>
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/support/emergency")}>
                Emergency Support
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/support/portal")}>
                Client Portal
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/support/appointments")}>
                Schedule Appointment
              </li>
            </ul>
          </div>

          {/* About Firm */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">About Firm</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/firm/about")}>
                Our Story
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/firm/attorneys")}>
                Our Attorneys
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/firm/locations")}>
                Office Locations
              </li>
              <li className="cursor-pointer hover:text-[#8cb9cf]" onClick={() => handleNavigation("/firm/careers")}>
                Legal Careers
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-800">
            <span className="font-bold text-2xl cursor-pointer flex gap-2 items-center" onClick={() => handleNavigation("/")}>
              <img src="/aayu.png" alt="LegalMind Counsel logo " className="w-20 h-20" />
              <p>Aayu</p>
            </span>
            <span className="text-gray-500">© 2024 Aayu. All rights reserved.</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="cursor-pointer text-gray-600 hover:text-[#8cb9cf]" onClick={() => handleNavigation("/linkedin")}>
              <FaLinkedin size={20} />
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-[#8cb9cf]" onClick={() => handleNavigation("/twitter")}>
              <FaTwitter size={20} />
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-[#8cb9cf]" onClick={() => handleNavigation("/facebook")}>
              <FaFacebook size={20} />
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-[#8cb9cf]" onClick={() => handleNavigation("/youtube")}>
              <FaYoutube size={20} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
