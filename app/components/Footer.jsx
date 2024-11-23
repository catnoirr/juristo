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
    <footer className=" py-20">
      <div className="max-w-7xl mx-auto flex flex-col ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 md:gap-8  pl-10 md:pl-0">
          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/categories/ui")}>
                User Interface
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/categories/ux")}>
                User Experience
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/categories/digital-media")}>
                Digital Media
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/categories/lifestyle")}>
                Lifestyle
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/categories/programming")}>
                Programming
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/product/pricing")}>
                Pricing
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/product/overview")}>
                Overview
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/product/browse")}>
                Browse
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/product/accessibility")}>
                Accessibility
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/solutions/brainstorming")}>
                Brainstorming
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/solutions/ideation")}>
                Ideation
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/solutions/wireframing")}>
                Wireframing
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/solutions/research")}>
                Research
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/solutions/design")}>
                Design
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/resources/help-center")}>
                Help Center
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/resources/blog")}>
                Blog
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/resources/tutorials")}>
                Tutorials
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/resources/faqs")}>
                FAQs
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/support/contact-us")}>
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/support/developers")}>
                Developers
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/support/documentation")}>
                Documentation
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/company/about")}>
                About
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/company/press")}>
                Press
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/company/events")}>
                Events
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/company/careers")}>
                Careers
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/company/customers")}>
                Customers
              </li>
              <li className="cursor-pointer hover:text-gray-800" onClick={() => handleNavigation("/company/partners")}>
                Partners
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-800">
            <span className="font-bold text-lg cursor-pointer" onClick={() => handleNavigation("/")}>
              Juristo
            </span>
            <span className="text-gray-500">@ 2025 Juristo. All rights reserved.</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => handleNavigation("/youtube")}>
             <FaYoutube />  
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => handleNavigation("/facebook")}>
                <FaFacebook />
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => handleNavigation("/twitter")}>
                <FaTwitter />
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => handleNavigation("/instagram")}>
                <FaInstagram />
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => handleNavigation("/linkedin")}>
                <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
