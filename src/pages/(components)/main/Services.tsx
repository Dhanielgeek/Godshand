import React, { useState, useEffect, useRef } from "react";
import { Check, ArrowRight, Palette, Globe, Monitor } from "lucide-react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Logo Design",
      icon: <Palette size={32} className="text-gray-500" />,
      emoji: "🎨",
      description:
        "Create a lasting first impression with unique, memorable logos that capture your brand's essence.",
      features: [
        "Unique, memorable logos tailored to your brand",
        "Monogram, icon, primary & secondary logo variations",
        "Delivered in all standard formats (PNG, SVG, PDF)",
      ],
      color: "from-gray-400 to-orange-500",
    },
    {
      id: 2,
      title: "Digital Branding",
      icon: <Globe size={32} className="text-gray-500" />,
      emoji: "🌐",
      description:
        "Comprehensive solutions to elevate your digital presence across all platforms.",
      features: [
        "Social Media Management & Analytics",
        "Content Strategy & Brand Voice Development",
        "Caption Writing & Instagram Page Makeover",
        "Social Media Templates & Content Ideas",
        "Business Card Design & Print Materials",
      ],
      color: "from-gray-500 to-yellow-500",
    },
    {
      id: 3,
      title: "Website Design",
      icon: <Monitor size={32} className="text-gray-500" />,
      emoji: "💻",
      description:
        "Functional, aesthetic websites that convert visitors into customers.",
      features: [
        "Portfolio Website – showcase your work with elegance",
        "Business Website – present your brand and services",
        "Landing Page Design – focused campaigns & promotions",
        "Fully responsive, mobile-friendly, and optimized",
      ],
      color: "from-yellow-400 to-gray-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(
              (entry.target as HTMLElement).dataset.cardId!
            );
            setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-2">
            <span className="text-2xl">🛠</span>
            <span className="text-gray-700 font-semibold">
              GodHand Services
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
            What We Create
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            &ldquo;Crafted with Precision. Powered by Purpose.&ldquo; - We
            transform your ideas into powerful digital experiences that drive
            growth and inspire action.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 ${
                visibleCards.has(service.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
              ></div>

              {/* Card Content */}
              <div className="p-8 space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{service.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group/btn w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span>Learn More</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Let&lsquo;s discuss your project and create something
              extraordinary together. Your success story starts with a single
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
