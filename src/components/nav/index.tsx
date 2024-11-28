import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              MogRex
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-300">
              Software Development
            </a>
            <a href="#" className="hover:text-blue-300">
              Training
            </a>
            <a href="#" className="hover:text-blue-300">
              Consulting
            </a>
            <a href="#" className="hover:text-blue-300">
              Hardware Supplies
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-2 py-2">
              <a href="#" className="block px-3 py-2 hover:bg-blue-700">
                Software Development
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-blue-700">
                Training
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-blue-700">
                Consulting
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-blue-700">
                Hardware Supplies
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
