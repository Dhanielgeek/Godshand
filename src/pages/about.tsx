import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Mainlayouts from "./layouts/Mainlayouts";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "10+ years of experience in brand identity and visual storytelling.",
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1a7?w=300&h=300&fit=crop&crop=face",
      description:
        "Specialized in digital branding and user experience design.",
    },
    {
      name: "Mike Rodriguez",
      role: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Full-stack developer passionate about creating seamless web experiences.",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <Mainlayouts>
      <section
        id="about"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-black via-red-950 to-black"
      >
        {/* Background Elements */}
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
              <span className="text-red-300 font-medium">About GodHand</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Meet the <span className="text-red-500">Creative Minds</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a passionate team of designers and developers dedicated to
              transforming your vision into extraordinary digital experiences
              that leave lasting impressions.
            </p>
          </div>

          {/* Our Story */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">
                Our Story
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Founded with a vision to bridge the gap between creativity
                    and technology, GodHand has grown from a small design studio
                    to a comprehensive digital agency. We believe that great
                    design isn&lsquo;t just about making things look
                    beautiful—it&lsquo;s about creating meaningful connections
                    between brands and their audiences.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our journey began with a simple mission: to help businesses
                    of all sizes establish a strong digital presence that drives
                    growth and success. Today, we continue that mission with the
                    same passion and dedication that started it all.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-6 border border-red-500/30">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">🚀</div>
                      <h4 className="text-2xl font-bold text-white">
                        Our Mission
                      </h4>
                      <p className="text-gray-300">
                        Empowering brands through exceptional design and
                        innovative digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`mb-20 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Meet Our Team
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-center space-y-4">
                    <div className="relative mx-auto w-24 h-24">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-red-400 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div
            className={`mt-20 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Our Values
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="text-4xl">💡</div>
                  <h4 className="text-xl font-bold text-white">Innovation</h4>
                  <p className="text-gray-300 text-sm">
                    We stay ahead of trends and embrace new technologies to
                    deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl">🤝</div>
                  <h4 className="text-xl font-bold text-white">
                    Collaboration
                  </h4>
                  <p className="text-gray-300 text-sm">
                    We work closely with our clients as partners, ensuring every
                    project reflects their vision.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl">⭐</div>
                  <h4 className="text-xl font-bold text-white">Excellence</h4>
                  <p className="text-gray-300 text-sm">
                    We&lsquo;re committed to delivering exceptional quality in
                    every project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Mainlayouts>
  );
};

export default AboutUs;
