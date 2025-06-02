"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "../_components/Footer";
import { useEffect } from "react";
import { Play, Palette, Users, Zap, Clock, TrendingUp, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function Hiring() {
    const [IsClient, setIsClient] = useState(false);
      useEffect(() => {
          setIsClient(true);
          return () => {};
        }, []);
      
        if (!IsClient) return <></>;

  return (
    <ReactLenis root>
      <main className="relative font-sans overflow-x-hidden bg-white text-[#0d1117]">
        {/* Hero Section */}
        <section className="relative z-20 py-32 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 pop">
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                Join the
              </span>{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                FlashCut Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-80 pop max-w-4xl mx-auto leading-relaxed">
              We're building a world-class creative team to deliver high-impact video and graphic content. 
              If you're passionate, talented, and driven, we want you!
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#open-roles" className="px-8 py-3 text-white rounded-lg transition-all duration-300 cursor-pointer font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-xl hover:opacity-80">
                View Open Roles
              </a>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 px-6 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold mb-2 opacity-70 pop">WHY JOIN US</h2>
              <h3 className="text-4xl md:text-5xl mb-6 pop font-bold">
                Grow Your Career at{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                  FlashCut
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">100% Remote</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  Work from anywhere with flexible schedules that fit your life.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Growth Focused</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  Opportunities to expand your skills and take on leadership roles.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Dynamic Team</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  Collaborate with passionate creatives in a fast-paced environment.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Steady Projects</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  Consistent workflow with diverse clients and creative challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className="py-20 px-6 md:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold mb-2 opacity-70 pop">CAREER OPPORTUNITIES</h2>
              <h3 className="text-4xl md:text-5xl mb-6 pop font-bold">
                Current <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">Open Roles</span>
              </h3>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Whether you're a creative, manager, or sales pro - help us shape the future of visual storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video Editor */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Play className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Video Editor</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Craft engaging content across YouTube, Instagram, ads, and more with your storytelling eye and technical skills.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Edit high-quality videos with pacing that hooks viewers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Manage deadlines for multiple projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Stay updated on platform trends and editing techniques</span>
                    </li>
                  </ul>
                  <a 
                    href="[YOUR_VIDEO_EDITOR_APPLICATION_LINK]" 
                    target="_blank"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Graphic Designer */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Graphic Designer</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Create thumbnails, social graphics, and branding that converts viewers into followers and customers.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Design eye-catching thumbnails and social media assets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain brand consistency across all visuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Understand design principles that drive engagement</span>
                    </li>
                  </ul>
                  <a 
                    href="[YOUR_DESIGNER_APPLICATION_LINK]" 
                    target="_blank"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Creative Manager */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Creative Manager</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Lead our creative team, manage workflows, and bring strategic direction to our content production.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Oversee creative projects from concept to delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Coordinate between editors, designers, and clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Develop content strategies that align with client goals</span>
                    </li>
                  </ul>
                  <a 
                    href="[YOUR_MANAGER_APPLICATION_LINK]" 
                    target="_blank"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Sales/Client Coordinator */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Sales/Client Coordinator</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Build client relationships, close deals, and help grow our business through exceptional communication.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Identify and onboard new clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Manage client communications and expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Upsell services and maintain long-term relationships</span>
                    </li>
                  </ul>
                  <a 
                    href="[YOUR_SALES_APPLICATION_LINK]" 
                    target="_blank"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join Our Creative Revolution?</h2>
            <p className="text-xl opacity-90 mb-8">
              Don't see your perfect role? We're always looking for talented individuals. 
              Send us your resume and tell us how you can contribute!
            </p>
            <a 
              href="mailto:careers@flashcutedits.com" 
              className="inline-block px-8 py-3 bg-white text-[#0d1117] rounded-lg font-medium text-lg hover:bg-gray-100 transition duration-300"
            >
              Send Your Resume
            </a>
          </div>
        </section> */}

        {/* Footer */}
        <Footer />
      </main>
    </ReactLenis>
  );
}