// Graphic Design Portfolio Data
export const graphicPortfolio = {
  'brand-identity': {
    title: 'Brand Identity Design',
    description: 'Complete brand identity solutions including logos, guidelines, and visual systems.',
    projects: [
      {
        id: 1,
        title: 'Tech Startup Logo',
        thumbnail: '/api/placeholder/400/300',
        category: 'Logo Design',
        client: 'TechFlow Inc.',
        year: '2024',
        description: 'Modern minimalist logo design for a technology startup'
      },
      {
        id: 2,
        title: 'Restaurant Brand Package',
        thumbnail: '/api/placeholder/400/300',
        category: 'Brand Guidelines',
        client: 'Bella Vista',
        year: '2024',
        description: 'Complete brand identity package for upscale restaurant'
      },
      {
        id: 3,
        title: 'Fitness Brand Identity',
        thumbnail: '/api/placeholder/400/300',
        category: 'Logo Design',
        client: 'PowerFit Gym',
        year: '2024',
        description: 'Dynamic logo and brand system for fitness center'
      },
      {
        id: 4,
        title: 'E-commerce Brand Kit',
        thumbnail: '/api/placeholder/400/300',
        category: 'Brand Guidelines',
        client: 'StyleHub',
        year: '2024',
        description: 'Comprehensive brand guidelines for online fashion retailer'
      },
      {
        id: 5,
        title: 'Coffee Shop Branding',
        thumbnail: '/api/placeholder/400/300',
        category: 'Logo Design',
        client: 'Brew & Bean',
        year: '2024',
        description: 'Warm and inviting brand identity for local coffee shop'
      },
      {
        id: 6,
        title: 'Corporate Stationery',
        thumbnail: '/api/placeholder/400/300',
        category: 'Business Cards',
        client: 'Global Solutions',
        year: '2024',
        description: 'Professional business card and letterhead design'
      }
    ]
  },
  'digital-design': {
    title: 'Digital Design',
    description: 'Digital graphics for web, social media, and online platforms.',
    projects: [
      {
        id: 7,
        title: 'Social Media Campaign',
        thumbnail: '/api/placeholder/400/300',
        category: 'Social Media Graphics',
        client: 'Fashion Forward',
        year: '2024',
        description: 'Instagram post series for fashion brand campaign'
      },
      {
        id: 8,
        title: 'Website Banner Design',
        thumbnail: '/api/placeholder/400/300',
        category: 'Web Graphics',
        client: 'Digital Agency',
        year: '2024',
        description: 'Hero banners and web graphics for agency website'
      },
      {
        id: 9,
        title: 'Email Newsletter Template',
        thumbnail: '/api/placeholder/400/300',
        category: 'Email Templates',
        client: 'TechNews Daily',
        year: '2024',
        description: 'Responsive email template for tech newsletter'
      },
      {
        id: 10,
        title: 'Mobile App UI Kit',
        thumbnail: '/api/placeholder/400/300',
        category: 'App UI Elements',
        client: 'FitTracker',
        year: '2024',
        description: 'UI elements and icons for fitness tracking app'
      },
      {
        id: 11,
        title: 'Digital Ad Campaign',
        thumbnail: '/api/placeholder/400/300',
        category: 'Digital Advertisements',
        client: 'EcoProducts',
        year: '2024',
        description: 'Banner ads for sustainable products campaign'
      },
      {
        id: 12,
        title: 'Instagram Story Templates',
        thumbnail: '/api/placeholder/400/300',
        category: 'Social Media Graphics',
        client: 'Lifestyle Blog',
        year: '2024',
        description: 'Branded Instagram story templates for lifestyle content'
      }
    ]
  },
  'print-design': {
    title: 'Print Design',
    description: 'High-quality print materials and publications.',
    projects: [
      {
        id: 13,
        title: 'Corporate Brochure',
        thumbnail: '/api/placeholder/400/300',
        category: 'Brochures & Flyers',
        client: 'Construction Co.',
        year: '2024',
        description: 'Tri-fold brochure for construction company services'
      },
      {
        id: 14,
        title: 'Event Poster Design',
        thumbnail: '/api/placeholder/400/300',
        category: 'Posters & Banners',
        client: 'Music Festival',
        year: '2024',
        description: 'Large format poster for annual music festival'
      },
      {
        id: 15,
        title: 'Product Packaging',
        thumbnail: '/api/placeholder/400/300',
        category: 'Packaging Design',
        client: 'Organic Foods',
        year: '2024',
        description: 'Eco-friendly packaging design for organic food products'
      },
      {
        id: 16,
        title: 'Magazine Layout',
        thumbnail: '/api/placeholder/400/300',
        category: 'Magazine Layouts',
        client: 'Design Quarterly',
        year: '2024',
        description: 'Editorial layout for design industry magazine'
      },
      {
        id: 17,
        title: 'Book Cover Design',
        thumbnail: '/api/placeholder/400/300',
        category: 'Book Covers',
        client: 'Independent Author',
        year: '2024',
        description: 'Compelling book cover for fiction novel'
      },
      {
        id: 18,
        title: 'Trade Show Banner',
        thumbnail: '/api/placeholder/400/300',
        category: 'Posters & Banners',
        client: 'Tech Expo',
        year: '2024',
        description: 'Large format banner for technology trade show'
      }
    ]
  }
};

// Helper function to get unique categories
export const getCategories = (projects) => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  return categories;
};

// Helper function to filter projects by category
export const filterProjectsByCategory = (projects, category) => {
  if (category === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  const allProjects = [
    ...graphicPortfolio['brand-identity'].projects,
    ...graphicPortfolio['digital-design'].projects,
    ...graphicPortfolio['print-design'].projects
  ];
  return allProjects.find(project => project.id === parseInt(id));
};

// Helper function to get related projects
export const getRelatedProjects = (currentProject, limit = 3) => {
  const allProjects = [
    ...graphicPortfolio['brand-identity'].projects,
    ...graphicPortfolio['digital-design'].projects,
    ...graphicPortfolio['print-design'].projects
  ];
  const relatedProjects = allProjects
    .filter(project =>
      project.id !== currentProject.id &&
      (project.category === currentProject.category || project.client === currentProject.client)
    )
    .slice(0, limit);

  return relatedProjects;
};
