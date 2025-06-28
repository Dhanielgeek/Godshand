import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import Mainlayouts from "./layouts/Mainlayouts";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@godhand.com",
      description: "Drop us a line anytime",
    },
    {
      icon: "📱",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Design Street, Creative City, CC 12345",
      description: "Our creative headquarters",
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support online",
    },
  ];

  return (
    <Mainlayouts>
      <section
        id="contact"
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
              <span className="text-red-300 font-medium">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Let&lsquo;s Create{" "}
              <span className="text-red-500">Something Amazing</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand? We&lsquo;d love to hear about your
              project and discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-red-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-red-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-red-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Project Subject"
                    required
                  />
                </div>
                <div>
                  <label className="block text-red-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-black/30 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors"
                    >
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {info.title}
                        </h4>
                        <p className="text-red-400 font-medium">
                          {info.details}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl p-6 border border-red-500/30 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-gray-300 text-sm">
                  We respond to all inquiries within 24 hours. Urgent projects?
                  We&lsquo;re available for immediate consultation.
                </p>
              </div>

              {/* Social Proof */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 text-center">
                <div className="flex justify-center items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-red-500 fill-current"
                    />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  5.0 Client Satisfaction
                </h4>
                <p className="text-gray-300 text-sm">
                  Based on 50+ completed projects and client reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Mainlayouts>
  );
};

export default ContactUs;
