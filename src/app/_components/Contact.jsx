'use client'
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="text-[#0d1117] bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
            Get In Touch
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
              Transform
            </span>{" "}
            Your Content?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's discuss your project and bring your vision to life. Get in touch with our team today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#0d1117]">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need video editing, graphic design, or a complete content strategy,
                we're here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d1117]">Phone</h4>
                  <p className="text-gray-600">+91 9867009961</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d1117]">WhatsApp</h4>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0d1117]">Email</h4>
                  <p className="text-gray-600">flashcutedits@gmail.com</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://wa.me/919867009961"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a
                                  href="https://calendly.com/jaitanishq222/video-editing-consultation"

                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-black border border-black/30 hover:border-green-500 hover:bg-green-500 hover:text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <MessageCircle size={20} />
                Book a Call
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl text-center sm:text-start font-bold mb-6 text-[#0d1117]">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0d1117] text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
