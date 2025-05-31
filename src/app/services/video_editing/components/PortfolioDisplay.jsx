'use client';

import { useState, useEffect } from 'react';
import { Play, Clock, Eye, Heart, Share2, Filter } from 'lucide-react';

export default function PortfolioDisplay({ 
  portfolioData,
  initialTab = 'short-form',
  slug = '',
  metadata = {},
  filters = []
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [FilteredData, setFilteredData] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    console.clear()
    console.log(portfolioData)
    setFilteredData(prev => {
      const Filtered = portfolioData[activeTab].videos.filter(video => video.slug == slug)
      return Filtered;
    })
  }, [activeTab])
  

  return (
      <section className="py-16 px-6 md:px-20">
        {/* Long Short Switch */}
        <div className="tabs p-2 flex space-x-6 border-b border-gray-200">
          {['long-form', 'short-form'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab text-xl font-medium pb-2 transition-all duration-300 relative
                ${activeTab === tab ? 'text-pink-600' : 'text-gray-500 hover:text-pink-500'}`}
            >
              {tab == 'long-form' ? 'Long Form' : 'Short Form'}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-6">
          {/* Section Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d1117]">
              {portfolioData[activeTab]?.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {portfolioData[activeTab]?.description}
            </p>
            </div>

          


          {/* Video Grid */}
          <div className={`grid gap-8 ${
            activeTab === 'short-form' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {FilteredData && FilteredData.map((video) => (
              <div
                key={video.id}
                className="group bg-white min-h-[300px] border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                  {/* Video Overlay Info */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Clock size={12} />
                      {video.duration}
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.platform}
                    </span>
                  </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-[#0d1117] group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2">
                      {video.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>
  );
}
