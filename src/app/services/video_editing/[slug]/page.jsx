'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {videoPortfolio,Slugs} from '../data/portfolioData'
import PortfolioDisplay from '../components/PortfolioDisplay'

export default  function VideoEditingSlugPage({ params }) {
  const [PortfolioData , setPortfolioData ] = useState()
  const [slugConfig, setSlugConfig] = useState({});
  const [metadata, setMetadata] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {slug} =  params;

  useEffect(() => {
    const CurrentSlug = Slugs.find(sl => sl.slug == slug)
    if(!CurrentSlug) {
      setError({
        message:'Invalid Slug'
      })
    } else {
      setPortfolioData(videoPortfolio)
      setMetadata(CurrentSlug)
    }
    setIsLoading(false)
  }, [])
  

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
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

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {metadata?.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {metadata?.description}
          </p>
        </div>
      </section>

      {/* Portfolio Display Component */}
      <PortfolioDisplay
        portfolioData={PortfolioData}
        initialTab={'short-form'}
        slug={slug}
        metadata={metadata}
      />

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d1117]">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Let's bring your vision to life with professional video editing that captivates your audience
            and elevates your brand. Get started with a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-300 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}