import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const HandIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M8 16c0-1.5 1-3 2.5-3s2.5 1.5 2.5 3v8c0 1.5-1 3-2.5 3S8 25.5 8 24v-8z"
      fill="white"
    />
    <path
      d="M11 12c0-1.5 1-3 2.5-3s2.5 1.5 2.5 3v12c0 1.5-1 3-2.5 3S11 25.5 11 24V12z"
      fill="white"
    />
    <path
      d="M14 10c0-1.5 1-3 2.5-3s2.5 1.5 2.5 3v14c0 1.5-1 3-2.5 3S14 25.5 14 24V10z"
      fill="white"
    />
    <path
      d="M17 12c0-1.5 1-3 2.5-3s2.5 1.5 2.5 3v12c0 1.5-1 3-2.5 3S17 25.5 17 24V12z"
      fill="white"
    />
    <path
      d="M6 20c-1.5 0-3 1-3 2.5S4.5 25 6 25h2v-2c0-1.5-1-3-2-3z"
      fill="white"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <HandIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                GodHand
              </span>
              <span className="text-xs text-red-600 font-medium">
                Crafted with Precision
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative transition-all duration-200 font-bold group ${
                  scrollY > 50
                    ? "text-white hover:text-red-400"
                    : "text-white hover:text-red-600"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2.5 rounded-full font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-red-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                size={24}
                className={scrollY > 50 ? "text-white" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={scrollY > 50 ? "text-white" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/95 backdrop-blur-md border-t border-red-900`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-3 text-white hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-red-900">
            <button className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2.5 rounded-full font-medium hover:from-red-600 hover:to-red-800 transition-all duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
