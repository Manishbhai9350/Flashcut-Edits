"use client";
import Pricing from "./_components/Pricing";
import UnicornEmbed from "./_components/Unicorn_3D";
import Expertise from "./_components/Expertise";
import Link from "next/link";
import FAQSection from "./_components/FAQ";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "./_components/Footer";
import WhyChooseUs from "./_components/WhyChooseUs";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ReactLenis root>
      <main className="relative font-sans overflow-x-hidden">
        {/* Navbar */}
        <nav className="text-[#0d1117] w-full z-50 fixed top-0 left-0 border-b border-gray-200 backdrop-blur-sm bg-white/95">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-xl font-bold text-[#0d1117]">
                Flashcut Edits
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex gap-8 text-sm font-medium">
                <li>
                  <Link href="#" className="text-[#0d1117]/70 hover:text-[#0d1117] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#0d1117]/70 hover:text-[#0d1117] transition-colors duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#0d1117]/70 hover:text-[#0d1117] transition-colors duration-200">
                    About
                  </Link>
                </li>
              </ul>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <button className="px-4 py-2 text-sm font-medium text-[#0d1117] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Book a Call
                </button>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-[#0d1117]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4 pt-4">
                  <Link href="#" className="text-[#0d1117]/70 hover:text-[#0d1117] transition-colors duration-200">
                    Home
                  </Link>
                  <Link href="#" className="text-[#0d1117]/70 hover:text-[#0d1117] transition-colors duration-200">
                    Services
                  </Link>
                  <Link href="#" className="text-[#0d1117]/70 hover:text-[#0d1117] transition-colors duration-200">
                    About
                  </Link>
                  <div className="flex flex-col gap-3 pt-4">
                    <button className="px-4 py-2 text-sm font-medium text-[#0d1117] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      Book a Call
                    </button>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero */}
        <section className="relative z-20 bg-white text-[#0d1117] h-fit w-full items-start px-6 py-32">
          <div className="relative z-30 w-full sm:w-[60%]">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              Elevate Your Brand with Professional Video Editing and Graphic
              Design
            </h1>
            <p className="text-sm md:text-xl mb-6 opacity-80">
              Professional Video Editing and Graphic Design services to elevate
              your brand and captivate your audience with stunning visual content.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-white border border-black hover:text-white hover:bg-black duration-150 cursor-pointer font-medium">
                Get Started
              </button>
              <button className="px-6 py-2 bg-white border border-black hover:text-white hover:bg-black duration-150 cursor-pointer font-medium">
                View Portfolio
              </button>
            </div>
          </div>
          {/* <img src="/hero-image.png" alt="Studio Setup" className="rounded-xl shadow-md" /> */}
          <div className="uncorn-3d-element w-full h-full z-20 absolute top-1/2 left-1/4 -translate-y-1/2">
            {/* <UnicornEmbed /> */}
          </div>
        </section>

        {/* About */}
        <section className="text-[#0d1117] bg-white px-6 pb-4 text-center md:text-left">
          <h2 className="text-sm font-semibold mb-2 opacity-70">Our Story</h2>
          <h3 className="text-3xl font-bold mb-4">About Flashcut Edits</h3>
          <p className="max-w-3xl mb-8 opacity-70">
            Our mission is to provide premium video editing solutions that
            resonate with your audience, ensuring every frame captures the
            essence of your story while maintaining a sleek, modern aesthetic.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-semibold">
            <div className="bg-black text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
              More Than 5 Years Of Experience
            </div>
            <div className="bg-black text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
              100+ Clients Trust With Our Service
            </div>
            <div className="bg-black text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
              Generated 50 Million+ Views
            </div>
            <div className="bg-black text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
              30+ Team Members
            </div>
          </div>
        </section>

        {/* Expertise */}
        <Expertise />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Pricing */}
        <Pricing />

        {/* Testimonials  */}
        <section className="bg-white text-gray-800 py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
              Client Testimonials
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                Clients
              </span>{" "}
              Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-14">
              Don’t just take our word for it. Here's what creators and
              businesses say about working with us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial Card 1 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    className="w-12 h-12 rounded-full border"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Sarah J.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Travel YouTuber
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Flashcut took my travel vlogs to the next level. My
                  subscribers keep commenting on how cinematic my videos look
                  now. My watch time increased by 40% after switching to them!"
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://i.pravatar.cc/100?img=13"
                    className="w-12 h-12 rounded-full border"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Mike T.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Fitness Coach
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "I was spending hours editing my workout videos. Flashcut not
                  only saves me time but makes my content look way more
                  professional. My Instagram following doubled in 2 months!"
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://i.pravatar.cc/100?img=14"
                    className="w-12 h-12 rounded-full border"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Jessica L.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      E-commerce Brand
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Our conversion rates on Facebook ads increased by 3x after
                  Flashcut redesigned our video creatives. Their understanding
                  of what makes people click is incredible."
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section  */}
        <FAQSection />


        {/* Footer */}
        <Footer />

      </main>
    </ReactLenis>
  );
}
