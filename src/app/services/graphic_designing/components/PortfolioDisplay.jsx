'use client';

import { useState, useEffect } from 'react';
import { Eye, Calendar, User, Filter, ExternalLink } from 'lucide-react';

export default function PortfolioDisplay({ 
  portfolioData,
}) {
  const [activeTab, setActiveTab] = useState(portfolioData.categories[0].category);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [Categories, setCategories] = useState(portfolioData.categories)
  const [CurrentCategory, setCurrentCategory] = useState(portfolioData.categories.find(e => e.category == portfolioData.categories[0].category))

  useEffect(() => {
    console.log(portfolioData , ' Data')
    console.log(activeTab , ' Active')
    console.log(Categories , ' Cats')
    console.log(CurrentCategory , 'Current Cat')
  }, [portfolioData, activeTab]);


  if (false) {
    return (
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No content available</h3>
        <p className="text-gray-500">No projects found for this section.</p>
      </div>
    );
  }

  return (
    <>
      {/* Tab Navigation - Only show if multiple tabs available */}
      {Categories?.length > 0 &&  (
        <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 md:px-20">
            <div className="flex space-x-8">
              {Categories.map((item) => {
                console.log(item)
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
                </button>
})}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      
    </>
  );
}


function Content(){
  return (
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
                {metadata.totalProjects} Projects
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {metadata.categories.length} Categories
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {metadata.clients.length} Clients
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
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300"
              >
                {/* Project Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Eye className="w-8 h-8 text-purple-500" />
                      </div>
                      <p className="text-gray-600 text-sm">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Project Overlay Info */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                    <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200 flex items-center gap-2">
                      <ExternalLink size={20} />
                      View Project
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-[#0d1117] group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{project.client}</span>
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
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
  )
}