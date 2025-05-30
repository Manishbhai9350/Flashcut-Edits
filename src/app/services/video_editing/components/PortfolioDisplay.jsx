'use client';

import { useState, useEffect } from 'react';
import { Play, Clock, Eye, Heart, Share2, Filter } from 'lucide-react';
import { getCategories, filterVideosByCategory } from '../data/portfolioData';

export default function PortfolioDisplay({ 
  portfolioData, 
  slugConfig, 
  metadata,
  initialTab = 'short-form' 
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    console.log("🎬 Portfolio display loaded!");
    console.log("📊 Metadata:", metadata);
    
    // Set initial filtered videos
    const currentVideos = portfolioData[activeTab]?.videos || [];
    setFilteredVideos(currentVideos);
  }, [portfolioData, activeTab]);

  // Filter videos by category using helper function
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    const currentVideos = portfolioData[activeTab]?.videos || [];
    const filtered = filterVideosByCategory(currentVideos, category);
    setFilteredVideos(filtered);
  };

  const currentSection = portfolioData[activeTab];
  const categories = getCategories(currentSection?.videos || []);
  const availableTabs = Object.keys(portfolioData);

  if (!currentSection) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No content available</h3>
        <p className="text-gray-500">No videos found for this section.</p>
      </div>
    );
  }

  return (
    <>
      {/* Tab Navigation - Only show if multiple tabs available */}
      {slugConfig.showBothSections && availableTabs.length > 1 && (
        <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 md:px-20">
            <div className="flex space-x-8">
              {availableTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedCategory('All');
                  }}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {portfolioData[tab].title}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d1117]">
              {currentSection?.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {currentSection?.description}
            </p>
            
            {/* Metadata Display */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {metadata.totalVideos} Videos
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {metadata.categories.length} Categories
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {metadata.platforms.length} Platforms
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-gray-500 mr-4">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterByCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className={`grid gap-8 ${
            activeTab === 'short-form' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className={`${
                    activeTab === 'short-form' ? 'aspect-[9/16]' : 'aspect-video'
                  } bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Play className="w-8 h-8 text-blue-500" />
                      </div>
                      <p className="text-gray-600 text-sm">Video Preview</p>
                    </div>
                  </div>
                  
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2">
                      <Play size={20} />
                      Watch Video
                    </button>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-[#0d1117] group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2">
                      {video.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {video.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={14} />
                        {video.likes}
                      </span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No videos found</h3>
              <p className="text-gray-500">Try selecting a different category or view all videos.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
