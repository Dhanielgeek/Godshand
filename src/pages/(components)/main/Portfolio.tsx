/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

// Updated Portfolio Component
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "logo", label: "Logo Design" },
    { id: "branding", label: "Digital Branding" },
    { id: "website", label: "Website Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow Startup",
      category: "logo",
      type: "Logo Design",
      description:
        "Modern, minimalist logo for a tech startup focused on workflow automation.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop",
      tags: ["Minimalist", "Tech", "Modern"],
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Bella Boutique",
      category: "branding",
      type: "Digital Branding",
      description:
        "Complete brand identity and social media presence for a luxury fashion boutique.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop",
      tags: ["Luxury", "Fashion", "Elegant"],
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 3,
      title: "GreenEarth Portfolio",
      category: "website",
      type: "Website Design",
      description:
        "Eco-friendly portfolio website with interactive animations and sustainable theme.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=400&fit=crop",
      tags: ["Eco-friendly", "Interactive", "Portfolio"],
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      title: "Urban Café",
      category: "logo",
      type: "Logo Design",
      description:
        "Warm, inviting logo design for a local coffee shop with handcrafted feel.",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop",
      tags: ["Handcrafted", "Warm", "Local"],
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 5,
      title: "FitLife Gym",
      category: "branding",
      type: "Digital Branding",
      description:
        "Dynamic branding package for a fitness center including social media templates.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop",
      tags: ["Dynamic", "Fitness", "Energetic"],
      color: "from-red-400 to-pink-500",
    },
    {
      id: 6,
      title: "Digital Agency Landing",
      category: "website",
      type: "Website Design",
      description:
        "High-converting landing page for a digital marketing agency with modern animations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
      tags: ["Modern", "Converting", "Agency"],
      color: "from-purple-400 to-indigo-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-black via-red-950 to-black"
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
            <span className="text-red-300 font-medium">Our Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Featured <span className="text-red-500">Works</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of projects that showcase
            our passion for exceptional design and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                  : "bg-black/30 backdrop-blur-sm text-red-300 border-2 border-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                ></div>

                {/* Hover Content */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-900/20 backdrop-blur-sm border border-red-500 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-red-900/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium border border-red-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                  <span>View Details</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to See More Work?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from our portfolio. We&apos;d love
              to show you more examples and discuss how we can bring your vision
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Full Portfolio
              </button>
              <button className="bg-black/30 backdrop-blur-sm text-red-300 px-8 py-3 rounded-full font-semibold border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
