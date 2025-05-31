'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { videoEditing,graphicDesign } from './data/servicesData';


export default function ServicesPage() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedSubcategory(null);
  };

  const toggleSubcategory = (subcategory) => {
    setExpandedSubcategory(expandedSubcategory === subcategory ? null : subcategory);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white text-[#0d1117] pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive video editing and graphic design solutions tailored to elevate your brand and captivate your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#services"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 font-medium text-center shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white border-2 border-gray-300 text-[#0d1117] rounded-lg hover:border-blue-500 hover:bg-gray-50 transition-all duration-300 font-medium text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-700">
              What We{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                Offer
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we provide end-to-end creative solutions
            </p>
          </div>

          <div className="space-y-6">
            {/* // ->>>  */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Main Category Header */}
                <button
                  onClick={() => toggleCategory('video_editing')}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r text-white`}>
                      {/* Icon Here  */}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#0d1117]">{videoEditing.title}</h3>
                      <p className="text-gray-600">{videoEditing.description}</p>
                    </div>
                  </div>
                  <div className="transition-transform duration-200">
                    {expandedCategory === 'video_editing' ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Subcategories */}
                {expandedCategory === 'video_editing' && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    {Object.entries(videoEditing.subcategories).map(([subKey, subcategory]) => (
                      <div key={subKey} className="border-b border-gray-100 last:border-b-0">
                        {/* Subcategory Header */}
                        <button
                          onClick={() => toggleSubcategory(subKey)}
                          className="w-full p-4 pl-16 flex items-center justify-between hover:bg-white transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white shadow-sm">
                              {subcategory.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-[#0d1117]">{subcategory.title}</h4>
                          </div>
                          <div className="transition-transform duration-200">
                            {expandedSubcategory === subKey ? (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {/* Services List */}
                        {expandedSubcategory === subKey && (
                          <div className="pl-24 pr-6 pb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {subcategory.services.map((service, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-semibold text-[#0d1117]">{service.name}</h5>
                                  </div>
                                  <Link href={service.href} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium">
                                    View
                                    <ArrowRight className="w-4 h-4" />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
          </div>
          <div className="mt-6">
            {/* // ->>>  */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Main Category Header */}
                <button
                  onClick={() => toggleCategory('graphic_designing')}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r text-white`}>
                      {/* Icon Here  */}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#0d1117]">{graphicDesign.title}</h3>
                      <p className="text-gray-600">{graphicDesign.description}</p>
                    </div>
                  </div>
                  <div className="transition-transform duration-200">
                    {expandedCategory === 'graphic_designing' ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Subcategories */}
               {expandedCategory === 'graphic_designing' && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    {Object.entries(graphicDesign.subcategories).map(([subKey, subcategory]) => {
                      return <div key={subKey} className="border-b border-gray-100 last:border-b-0">
                        {/* Subcategory Header */}
                        <button
                          onClick={() => toggleSubcategory(subKey)}
                          className="w-full p-4 pl-16 flex items-center justify-between hover:bg-white transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white shadow-sm">
                              {subcategory.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-[#0d1117]">{subcategory.title}</h4>
                          </div>
                          <div className="transition-transform text-blue-500">
                            {/* {expandedSubcategory === subKey ? (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            )} */}
                            <Link href={subcategory.href}>View</Link>
                          </div>
                        </button>

                        
                      </div>
})}
                  </div>
                )} 
                
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-700">
            Ready to{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
              Get Started?
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss your project and bring your vision to life with our professional services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 font-medium text-center shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              href="https://calendly.com/jaitanishq222/video-editing-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-2 border-gray-300 text-[#0d1117] rounded-lg hover:border-blue-500 hover:bg-gray-50 transition-all duration-300 font-medium text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
