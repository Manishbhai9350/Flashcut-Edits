'use client';

import { useState, useEffect } from 'react';
import { Eye, Calendar, User, Filter, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioDisplay({ 
  portfolioData,
}) {
  const [activeTab, setActiveTab] = useState(portfolioData.categories[0].category);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [Categories, setCategories] = useState(portfolioData.categories)
  const [CurrentCategory, setCurrentCategory] = useState(portfolioData.categories.find(e => e.category == portfolioData.categories[0].category))

  useEffect(() => {
    if(!activeTab) return;
    setCurrentCategory(portfolioData.categories.find(e => e.category == activeTab))
    // setCurrentCategory(portfolioData.categories.find(e => e?.category == portfolioData?.categories[activeTab]?.category))
    return () => {
      
    }
  }, [activeTab])
  


  if (!portfolioData.categories || portfolioData.categories.length == 0 ) {
    return (
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Work Available</h3>
        <p className="text-gray-500">Till Then View Our Other Works</p>
      </div>
    );
  }

  return (
    <>
      {/* Tab Navigation - Only show if multiple tabs available */}
      {portfolioData.categories?.length > 0 &&  (
        <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 md:px-20">
            <div className="flex space-x-8 w-screen overflow-x-scroll">
              {portfolioData.categories.map((item) => {
                return <button
                  key={item.category}
                  onClick={() => {
                    setActiveTab(item.category);
                  }}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === item.category
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </button>})}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-4 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d1117]">
              {CurrentCategory?.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {CurrentCategory?.description}
            </p>
          </div>

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-gray-500 mr-4">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {(CurrentCategory.works && CurrentCategory.works.length > 0 ) ?  CurrentCategory.works.map((category) => (
              <button
                key={category}
                onClick={() => filterByCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            )) : <>

            </>}
          </div> */}

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {(CurrentCategory.works && CurrentCategory.works.length > 0 ) ?  CurrentCategory.works.map((category) => {
              console.log(category)
                return <div
                key={category.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300"
              >
                {/* Project Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[5/3] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="image relative w-full h-[auto]">
                      <Image fill src={`https://drive.google.com/uc?export=view&id=${category.id}`} alt="Image" />
                    </div>
                  </div>
                  
                  {/* Project Overlay Info */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {category.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-3">
                  <div className="flex items-start justify-between my-1">
                    <h3 className="font-bold text-lg text-[#0d1117] group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {category.category}
                    </span>
                  </div>
                </div>
              </div>
            }) : <>

            </>}
          </div>

          {/* No Results */}
          {(!CurrentCategory.works || CurrentCategory.works.length === 0) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category or view all projects.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
