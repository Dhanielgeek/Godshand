import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                GodHand
              </span>
              <span className="text-xs text-amber-600 font-medium">
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
                className="relative text-amber-800 hover:text-amber-600 transition-all duration-200 font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-amber-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-amber-800" />
            ) : (
              <Menu size={24} className="text-amber-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-amber-100`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-3 text-amber-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-amber-100">
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
