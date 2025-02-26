"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Dropdown state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Mobile dropdown state
  const dropdownRef = useRef(null);
  const router = useRouter();

  const dropdownOptions = {
    Products: [
      { name: "Product 1", path: "/products/product-1" },
      { name: "Product 2", path: "/products/product-2" },
      { name: "Product 3", path: "/products/product-3" },
    ],
    Solutions: [
      { name: "Solution 1", path: "/solutions/solution-1" },
      { name: "Solution 2", path: "/solutions/solution-2" },
      { name: "Solution 3", path: "/solutions/solution-3" },
    ],
    Services: [
      { name: "Service 1", path: "/services/service-1" },
      { name: "Service 2", path: "/services/service-2" },
      { name: "Service 3", path: "/services/service-3" },
    ],
    "Help ": [
      { name: "FAQ", path: "/help-center/faq" },
      { name: "Contact Us", path: "/help-center/contact" },
      { name: "Support", path: "/help-center/support" },
    ],
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setDropdownOpen(null); // Close dropdowns
    setMobileDropdownOpen(null); // Close mobile dropdowns
    setMobileMenuOpen(false); // Close mobile menu
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#EDF4F8] to-[#FDF1F1] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-4 flex-shrink-0">
            <img src="/aayu.png" alt="" onClick={() => handleNavigation("/")} className="cursor-pointer w-16 h-16" />
            <button
              onClick={() => handleNavigation("/")}
              className="text-xl font-bold text-[#E57F84]"
            >
              Aayu
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center" ref={dropdownRef}>
            {Object.keys(dropdownOptions).map((menu, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center text-[#4A90A7] hover:text-[#2C5364] transition-colors duration-200"
                >
                  {menu}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {dropdownOpen === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                    {dropdownOptions[menu].map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleNavigation(option.path)}
                        className="block px-4 py-2 text-[#4A90A7] hover:bg-[#EDF4F8] w-full text-left transition-colors duration-200"
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNavigation("/pricing")}
              className="text-[#4A90A7] hover:text-[#2C5364] transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("/login")}
              className="text-[#4A90A7] hover:text-[#2C5364] transition-colors duration-200"
            >
              Log In
            </button>
            <button
              onClick={() => handleNavigation("/signup")}
              className="border-2 border-[#E57F84] text-[#E57F84] px-4 py-2 rounded-xl hover:bg-[#FDF1F1] transition-colors duration-200"
            >
              Sign Up Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#4A90A7] hover:text-[#2C5364] focus:outline-none transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-20 transition-transform transform translate-x-0">
          <div className="p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4A90A7] hover:text-[#2C5364] focus:outline-none mb-4 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-4">
              {Object.keys(dropdownOptions).map((menu, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="font-semibold text-[#4A90A7] hover:text-[#2C5364] flex justify-between w-full transition-colors duration-200"
                  >
                    {menu}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {mobileDropdownOpen === index && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {dropdownOptions[menu].map((option, optionIndex) => (
                        <li key={optionIndex}>
                          <button
                            onClick={() => handleNavigation(option.path)}
                            className="block text-[#4A90A7] hover:text-[#2C5364] transition-colors duration-200"
                          >
                            {option.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavigation("/pricing")}
                className="block text-[#4A90A7] hover:text-[#2C5364] transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation("/login")}
                className="block text-[#4A90A7] hover:text-[#2C5364] transition-colors duration-200"
              >
                Log In
              </button>
              <button
                onClick={() => handleNavigation("/signup")}
                className="block w-full text-[#E57F84] border-2 border-[#E57F84] px-4 py-2 rounded-xl hover:bg-[#FDF1F1] transition-colors duration-200"
              >
                Sign Up Now
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
