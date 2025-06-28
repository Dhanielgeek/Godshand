import {
  ArrowRight,
  Check,
  Globe,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Logo Design",
      icon: <Palette size={32} className="text-red-400" />,
      emoji: "🎨",
      description:
        "Create a lasting first impression with unique, memorable logos that capture your brand's essence.",
      features: [
        "Unique, memorable logos tailored to your brand",
        "Monogram, icon, primary & secondary logo variations",
        "Delivered in all standard formats (PNG, SVG, PDF)",
      ],
      color: "from-red-400 to-red-600",
    },
    {
      id: 2,
      title: "Digital Branding",
      icon: <Globe size={32} className="text-red-400" />,
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
      color: "from-red-500 to-red-400",
    },
    {
      id: 3,
      title: "Website Design",
      icon: <Monitor size={32} className="text-red-400" />,
      emoji: "💻",
      description:
        "Functional, aesthetic websites that convert visitors into customers.",
      features: [
        "Portfolio Website – showcase your work with elegance",
        "Business Website – present your brand and services",
        "Landing Page Design – focused campaigns & promotions",
        "Fully responsive, mobile-friendly, and optimized",
      ],
      color: "from-red-600 to-red-500",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-900/10 to-red-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-red-900/20 backdrop-blur-sm border border-red-500 rounded-full px-6 py-3 shadow-lg">
            <Sparkles size={16} className="text-red-400" />
            <span className="text-red-300 font-medium">GodHand Services</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            What We <span className="text-red-500">Create</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            &rdquo;Crafted with Precision. Powered by Purpose.&ldquo; - We
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
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-red-500/20 hover:border-red-500/40 ${
                visibleCards.has(service.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Background Accent Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
              ></div>

              <div className="p-8 space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{service.emoji}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group/btn w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span>Learn More</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-400/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&lsquo;s discuss your project and create something
              extraordinary together. Your success story starts with a single
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Free Consultation
              </button>
              <button className="bg-black/30 backdrop-blur-sm text-red-300 px-8 py-3 rounded-full font-semibold border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
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
