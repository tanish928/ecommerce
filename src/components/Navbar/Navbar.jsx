import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSearch,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      {/* Top Bar with About & Contact */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-2 px-4 text-sm border-b border-gray-300 dark:border-gray-700">
        <div className="container mx-auto flex justify-end gap-6 text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-primary dark:hover:text-white">
            About Us
          </a>
          <a href="#contact" className="hover:text-primary dark:hover:text-white">
            Contact Us
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center flex-wrap">
          {/* Left: Logo and Main Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a
              href="/"
              className="text-3xl font-extrabold text-primary dark:text-white tracking-wide"
            >
              Shop<span className="text-secondary">Smart</span>
            </a>

            {/* Main Links */}
            <nav className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200 text-sm font-medium">
              <a href="#everything" id="everything" className="hover:text-primary">
                Everything
              </a>
              <a href="#women" id="women" className="hover:text-primary">
                Women
              </a>
              <a href="#men" id="men" className="hover:text-primary">
                Men
              </a>
              <a href="#accessories" id="accessories" className="hover:text-primary">
                Accessories
              </a>
            </nav>
          </div>

          {/* Right Side: Search + Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white dark:bg-gray-800">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400"
              />
            </div>

            {/* Cart Icon */}
            <button className="relative">
              <FiShoppingCart className="text-2xl text-gray-800 dark:text-gray-200" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Admin Icon */}
            <button className="text-2xl text-gray-800 dark:text-gray-200">
              <FiUser />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-3xl text-gray-700 dark:text-gray-200"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900 space-y-4 text-gray-800 dark:text-gray-300">
          <a href="#everything" id="everything-mobile" className="block hover:text-primary">
            Everything
          </a>
          <a href="#women" id="women-mobile" className="block hover:text-primary">
            Women
          </a>
          <a href="#men" id="men-mobile" className="block hover:text-primary">
            Men
          </a>
          <a href="#accessories" id="accessories-mobile" className="block hover:text-primary">
            Accessories
          </a>
          <a
            href="#about"
            className="block px-6 py-3 border border-primary text-primary dark:text-white dark:border-white rounded-full text-center hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-6 py-3 bg-primary text-white rounded-full text-center hover:bg-secondary"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
