import { graphicPortfolio } from '../data/portfolioData';

// Slug condition mapping for graphic designing
export const slugConditions = {
  'portfolio': {
    title: 'Graphic Design Portfolio',
    description: 'Discover our creative graphic design work across different mediums and styles.',
    showAllSections: true,
    defaultTab: 'brand-identity'
  },
  'brand-identity': {
    title: 'Brand Identity Design',
    description: 'Complete brand identity solutions including logos, guidelines, and visual systems.',
    showAllSections: false,
    defaultTab: 'brand-identity',
    restrictToTab: 'brand-identity'
  },
  'digital-design': {
    title: 'Digital Design',
    description: 'Digital graphics for web, social media, and online platforms.',
    showAllSections: false,
    defaultTab: 'digital-design',
    restrictToTab: 'digital-design'
  },
  'print-design': {
    title: 'Print Design',
    description: 'High-quality print materials and publications.',
    showAllSections: false,
    defaultTab: 'print-design',
    restrictToTab: 'print-design'
  },
  // Specific design categories
  'logo-design': {
    title: 'Logo Design',
    description: 'Professional logo design that captures your brand essence.',
    showAllSections: true,
    defaultTab: 'brand-identity',
    filterCategories: ['Logo Design']
  },
  'brand-guidelines': {
    title: 'Brand Guidelines',
    description: 'Comprehensive brand guidelines and style guides.',
    showAllSections: true,
    defaultTab: 'brand-identity',
    filterCategories: ['Brand Guidelines']
  },
  'social-media-graphics': {
    title: 'Social Media Graphics',
    description: 'Engaging social media graphics that boost your online presence.',
    showAllSections: false,
    defaultTab: 'digital-design',
    restrictToTab: 'digital-design',
    filterCategories: ['Social Media Graphics']
  },
  'web-graphics': {
    title: 'Web Graphics',
    description: 'Professional web graphics and digital assets.',
    showAllSections: false,
    defaultTab: 'digital-design',
    restrictToTab: 'digital-design',
    filterCategories: ['Web Graphics']
  },
  'packaging-design': {
    title: 'Packaging Design',
    description: 'Creative packaging solutions that make your products stand out.',
    showAllSections: false,
    defaultTab: 'print-design',
    restrictToTab: 'print-design',
    filterCategories: ['Packaging Design']
  },
  'brochures': {
    title: 'Brochures & Flyers',
    description: 'Professional brochures and flyers for marketing campaigns.',
    showAllSections: false,
    defaultTab: 'print-design',
    restrictToTab: 'print-design',
    filterCategories: ['Brochures & Flyers']
  }
};

// Data fetching functions
export const getSlugConfig = (slug) => {
  return slugConditions[slug] || slugConditions['portfolio'];
};

export const getFilteredPortfolioData = (slug) => {
  const config = getSlugConfig(slug);
  const filteredData = {};

  Object.keys(graphicPortfolio).forEach(tabKey => {
    // Skip tabs if restricted
    if (config.restrictToTab && config.restrictToTab !== tabKey) {
      return;
    }

    const tabData = { ...graphicPortfolio[tabKey] };
    let projects = [...tabData.projects];

    // Apply category filters
    if (config.filterCategories) {
      projects = projects.filter(project => 
        config.filterCategories.includes(project.category)
      );
    }

    if (projects.length > 0) {
      filteredData[tabKey] = {
        ...tabData,
        projects
      };
    }
  });

  return filteredData;
};

export const getAvailableTabs = (slug) => {
  const filteredData = getFilteredPortfolioData(slug);
  return Object.keys(filteredData);
};

export const getSlugMetadata = (slug) => {
  const config = getSlugConfig(slug);
  const filteredData = getFilteredPortfolioData(slug);
  
  // Calculate total projects
  const totalProjects = Object.values(filteredData).reduce(
    (total, section) => total + section.projects.length, 
    0
  );

  // Get unique categories
  const allCategories = new Set();
  Object.values(filteredData).forEach(section => {
    section.projects.forEach(project => {
      allCategories.add(project.category);
    });
  });

  // Get unique clients
  const allClients = new Set();
  Object.values(filteredData).forEach(section => {
    section.projects.forEach(project => {
      allClients.add(project.client);
    });
  });

  return {
    config,
    totalProjects,
    categories: Array.from(allCategories).sort(),
    clients: Array.from(allClients).sort(),
    availableTabs: Object.keys(filteredData)
  };
};

// Validation functions
export const isValidSlug = (slug) => {
  return Object.keys(slugConditions).includes(slug);
};

export const getSlugSuggestions = (invalidSlug) => {
  const suggestions = Object.keys(slugConditions);
  
  // Simple similarity check
  const similar = suggestions.filter(slug => 
    slug.includes(invalidSlug.toLowerCase()) || 
    invalidSlug.toLowerCase().includes(slug)
  );

  return similar.length > 0 ? similar : suggestions.slice(0, 3);
};

// Analytics helper
export const getSlugAnalytics = (slug) => {
  const metadata = getSlugMetadata(slug);
  const filteredData = getFilteredPortfolioData(slug);

  const analytics = {
    slug,
    totalProjects: metadata.totalProjects,
    topCategories: {},
    topClients: {},
    yearDistribution: {}
  };

  Object.values(filteredData).forEach(section => {
    section.projects.forEach(project => {
      // Count categories
      analytics.topCategories[project.category] = 
        (analytics.topCategories[project.category] || 0) + 1;

      // Count clients
      analytics.topClients[project.client] = 
        (analytics.topClients[project.client] || 0) + 1;

      // Count years
      analytics.yearDistribution[project.year] = 
        (analytics.yearDistribution[project.year] || 0) + 1;
    });
  });

  return analytics;
};
