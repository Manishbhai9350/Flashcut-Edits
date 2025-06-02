"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "../_components/Footer";
import { useEffect, useRef } from "react";
import { Play, Users, Award, Heart, Zap, Target, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const brands = [
  { id: 1, src: "/brands/first-cry.jpg", alt: "First Cry" },
  { id: 2, src: "/brands/grow-diesel.jpg", alt: "Grow Diesel" },
  { id: 3, src: "/brands/dinway.jpg", alt: "Dinway" },
  { id: 4, src: "/brands/Krafter.jpg", alt: "Krafter" },
  { id: 5, src: "/brands/ambition.jpg", alt: "Ambition" },
];

export default function About() {

  return (
    <ReactLenis root>
      <main className="relative font-sans overflow-x-hidden">
           {/* Hero Section */}
        <section className="relative z-20 bg-white text-[#0d1117] py-32 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 pop">
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                About
              </span>{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                FlashCut Edits
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-80 pop max-w-4xl mx-auto leading-relaxed">
              We're not just video editors – we're visual storytellers passionate about
              transforming your ideas into captivating content that resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='/services' className="px-8 py-3 text-white rounded-lg transition-all duration-300 cursor-pointer font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-xl hover:opacity-80">
                Our Portfolio
              </Link>
              <Link href="https://wa.me/919867009961"
                target="_blank" className="px-8 py-3 border-2 border-gray-300 text-[#0d1117] rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-pointer font-medium text-xl">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-gray-50 text-[#0d1117] py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-semibold mb-2 opacity-70 pop">OUR JOURNEY</h2>
                <h3 className="text-4xl md:text-5xl mb-6 pop font-bold">
                  From Vision to{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                    Reality
                  </span>
                </h3>
                <div className="space-y-4 text-lg opacity-80 leading-relaxed">
                  <p>
                    Founded in 2024, FlashCut Edits began as a small creative studio with a big dream:
                    to democratize professional video editing and make it accessible to creators worldwide.
                  </p>
                  <p>
                    What started as a passion project has evolved into a full-service
                    creative agency trusted by clients globally. We've edited countless
                    minutes of content, generated millions of views, and helped brands
                    tell their stories.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of digital content creation, combining
                    cutting-edge technology with timeless storytelling principles to deliver
                    extraordinary results.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">100+</div>
                      <div className="text-sm opacity-90">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">1K+</div>
                      <div className="text-sm opacity-90">Videos Edited</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">10M+</div>
                      <div className="text-sm opacity-90">Views Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">1+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team Section */}
        <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
              LEADERSHIP
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                Management Team
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-14">
              Our leadership team brings together diverse expertise to guide FlashCut Edits
              towards excellence in video editing and client satisfaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-white transition">Tanishq Jain</h4>
                <p className="text-blue-500 font-medium mb-3 group-hover:text-blue-400 transition">Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition">
                  The visionary Founder of FlashCut Edits, leads the agency with a deep passion for 
                  content creation and innovation in digital storytelling.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-white transition">Anant</h4>
                <p className="text-purple-500 font-medium mb-3 group-hover:text-purple-400 transition">Head of Management</p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition">
                  Ensures smooth coordination across departments, keeping every project 
                  aligned, efficient, and on schedule.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-white transition">Shravani</h4>
                <p className="text-pink-500 font-medium mb-3 group-hover:text-pink-400 transition">Manager</p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition">
                  Plays a key role in daily operations and client communication, helping us 
                  deliver a seamless experience from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-white text-[#0d1117] py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-sm font-semibold mb-2 opacity-70 pop">OUR VALUES</h2>
            <h3 className="text-4xl md:text-5xl mb-6 pop font-bold">
              What Drives{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                Us Forward
              </span>
            </h3>
            <p className="text-lg opacity-80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our core values shape everything we do, from the way we approach projects
              to how we build relationships with our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Passion</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  We pour our heart into every project, treating your content as if it were our own.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Innovation</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  We stay ahead of trends and embrace new technologies to deliver cutting-edge results.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Excellence</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  We never settle for good enough. Every frame is crafted with meticulous attention to detail.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition">Collaboration</h4>
                <p className="text-gray-600 group-hover:text-white/80 transition">
                  We believe the best results come from working closely with our clients as partners.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Brands We've Worked With - GSAP Marquee */}
        <section className="bg-gray-50 text-[#0d1117] py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
              TRUSTED BY
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Brands We've{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                Worked With
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-14">
              From startups to Fortune companies, we've helped brands across industries
              create compelling video content that drives results.
            </p>

            {/* Marquee Container */}
            <div
              className="relative w-full overflow-hidden py-4"
            >
              {/* Marquee Content - Duplicated for seamless looping */}
              <div
                className="flex w-max whitespace-nowrap"
              >
               
                {[...brands].map((brand, i) => (
                  <div 
                    key={`${brand.id}-${i}`}
                    className="marquee-infinite-child inline-flex items-center justify-center mx-8"
                    style={{ minWidth: '150px' }}
                  >
                    <div className="relative h-16 w-full" style={{ maxWidth: '200px' }}>
                      <Image
                        src={brand.src}
                        alt={brand.alt}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fallback Grid for Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 md:hidden">
              {brands.map((brand) => (
                <div key={brand.id} className="relative h-16">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </ReactLenis>
  );
}