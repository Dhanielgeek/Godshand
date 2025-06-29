import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = ["Logo Design", "Digital Branding", "Website Design"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-900/10 to-red-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-red-900/20 backdrop-blur-sm border border-red-500 rounded-full px-6 py-3 shadow-lg transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles size={16} className="text-red-400" />
            <span className="text-red-300 font-medium">
              Your brand, perfected by Godhand
            </span>
          </div>

          {/* Main Heading */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="block text-white">Elevate Your</span>
              <span className="block mt-2 text-red-500">Brand with</span>
              <span className="block mt-2 relative text-white">
                {rotatingTexts[currentText]}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your vision into stunning digital experiences. From
              memorable logos to captivating websites, we craft designs that
              resonate with your audience and drive results.
            </p>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                150+
              </div>
              <div className="text-white font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                50+
              </div>
              <div className="text-white font-medium">Happy Clients</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-red-500 fill-current"
                  />
                ))}
              </div>
              <span className="text-white font-medium ml-2">5.0 Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="group bg-black/30 backdrop-blur-sm text-red-300 px-8 py-4 rounded-full font-semibold text-lg border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Our Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`pt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-red-300 text-sm font-medium">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
