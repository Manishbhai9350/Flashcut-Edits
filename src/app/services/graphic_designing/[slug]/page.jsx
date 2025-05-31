'use client';

import { use, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { graphicDesign } from '../data/portfolioData';
import PortfolioDisplay from '../components/PortfolioDisplay';

export default function GraphicDesigningSlugPage({ params }) {
  const [portfolioData, setPortfolioData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  const {slug} = use(params)

  useEffect(() => {
    const SlugData = graphicDesign.slugs[slug]
    setIsLoading(false)
    if(!SlugData) {
      setError({
        message:'Invalid Category',
        suggestions:Object.keys(graphicDesign.slugs)
      })
    } else {
      setPortfolioData(SlugData)
    }
    return () => {
      
    }
  }, [])
  

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {error.type === 'invalid_slug' ? 'Page Not Found' : 'Error Loading Content'}
          </h2>
          <p className="text-gray-600 mb-6">{error.message}</p>
          
          {error.suggestions && (
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3">Did you mean:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {error.suggestions.map((suggestion) => (
                  <Link
                    key={suggestion}
                    href={`/services/graphic_designing/${suggestion}`}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm hover:bg-purple-200 transition-colors"
                  >
                    {suggestion}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-12 overflow-x-hidden">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {portfolioData.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {portfolioData.description}
          </p>
        </div>
      </section>

      {/* Portfolio Display Component */}
      <PortfolioDisplay 
        portfolioData={portfolioData}
      />

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d1117]">
            Ready to Create Amazing Designs?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Let's bring your vision to life with professional graphic design that captivates your audience 
            and elevates your brand. Get started with a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-500 transition-colors duration-300 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
