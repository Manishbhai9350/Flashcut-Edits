import { videoPortfolio } from '../data/portfolioData';

// Slug condition mapping
export const slugConditions = {
  'portfolio': {
    title: 'Video Editing Portfolio',
    description: 'Discover our professional video editing work across different formats and styles.',
    showBothSections: true,
    defaultTab: 'short-form'
  },
  'short-form': {
    title: 'Short-Form Video Editing',
    description: 'Engaging short-form content optimized for social media platforms.',
    showBothSections: false,
    defaultTab: 'short-form',
    restrictToTab: 'short-form'
  },
  'long-form': {
    title: 'Long-Form Video Editing',
    description: 'Comprehensive long-form content for detailed storytelling.',
    showBothSections: false,
    defaultTab: 'long-form',
    restrictToTab: 'long-form'
  },
  // Specific video editing categories (available for both short-form and long-form)
  'ads_promotional': {
    title: 'Ads & Promotional Videos',
    description: 'High-impact advertising and promotional video content that drives results.',
    showBothSections: true,
    defaultTab: 'short-form',
    filterCategories: ['Ads & Promotional']
  },
  '3d': {
    title: '3D Video Editing',
    description: 'Advanced 3D video editing with stunning visual effects and animations.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['3D Edit']
  },
  'documentary': {
    title: 'Documentary Video Editing',
    description: 'Professional documentary editing with compelling storytelling and narrative flow.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['Documentary']
  },
  'ecommerce': {
    title: 'Ecommerce Video Editing',
    description: 'Product showcase videos that convert browsers into buyers.',
    showBothSections: true,
    defaultTab: 'short-form',
    filterCategories: ['Ecommerce']
  },
  'educational': {
    title: 'Educational Video Editing',
    description: 'Engaging educational content that makes learning enjoyable and effective.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['Educational']
  },
  'faceless': {
    title: 'Faceless Video Editing',
    description: 'Creative faceless content with engaging visuals and storytelling.',
    showBothSections: true,
    defaultTab: 'short-form',
    filterCategories: ['Faceless']
  },
  'high_level_motion_graphics': {
    title: 'High Level Motion Graphics',
    description: 'Advanced motion graphics and visual effects for premium video content.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['Motion Graphics']
  },
  'podcasts': {
    title: 'Podcast Video Editing',
    description: 'Professional podcast video editing with multi-camera setups and graphics.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['Podcast']
  },
  'real_estate': {
    title: 'Real Estate Video Editing',
    description: 'Property showcase videos with drone footage and professional presentation.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['Real Estate']
  },
  // Legacy slugs for backward compatibility
  'social-media': {
    title: 'Social Media Video Editing',
    description: 'Viral content creation for Instagram, TikTok, and YouTube Shorts.',
    showBothSections: false,
    defaultTab: 'short-form',
    restrictToTab: 'short-form',
    filterCategories: ['Product Launch', 'Fashion', 'Travel', 'Lifestyle', 'Fitness', 'Beauty']
  },
  'youtube': {
    title: 'YouTube Video Editing',
    description: 'Professional YouTube content editing for all formats.',
    showBothSections: true,
    defaultTab: 'short-form',
    filterPlatforms: ['YouTube', 'YouTube Shorts']
  },
  'corporate': {
    title: 'Corporate Video Editing',
    description: 'Professional corporate and business video editing services.',
    showBothSections: true,
    defaultTab: 'long-form',
    filterCategories: ['Corporate', 'Business', 'Documentary', 'Event']
  },
  'music': {
    title: 'Music Video Editing',
    description: 'Creative music video production and editing.',
    showBothSections: false,
    defaultTab: 'long-form',
    restrictToTab: 'long-form',
    filterCategories: ['Music']
  },
  'gaming': {
    title: 'Gaming Video Editing',
    description: 'Dynamic gaming content with epic highlights and effects.',
    showBothSections: false,
    defaultTab: 'short-form',
    restrictToTab: 'short-form',
    filterCategories: ['Gaming']
  }
};

// Data fetching functions
export const getSlugConfig = (slug) => {
  return slugConditions[slug] || slugConditions['portfolio'];
};

export const getFilteredPortfolioData = (slug) => {
  const config = getSlugConfig(slug);
  const filteredData = {};

  Object.keys(videoPortfolio).forEach(tabKey => {
    // Skip tabs if restricted
    if (config.restrictToTab && config.restrictToTab !== tabKey) {
      return;
    }

    const tabData = { ...videoPortfolio[tabKey] };
    let videos = [...tabData.videos];

    // Apply category filters
    if (config.filterCategories) {
      videos = videos.filter(video =>
        config.filterCategories.includes(video.category)
      );
    }

    // Apply platform filters
    if (config.filterPlatforms) {
      videos = videos.filter(video =>
        config.filterPlatforms.includes(video.platform)
      );
    }

    if (videos.length > 0) {
      filteredData[tabKey] = {
        ...tabData,
        videos
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

  // Calculate total videos
  const totalVideos = Object.values(filteredData).reduce(
    (total, section) => total + section.videos.length,
    0
  );

  // Get unique categories
  const allCategories = new Set();
  Object.values(filteredData).forEach(section => {
    section.videos.forEach(video => {
      allCategories.add(video.category);
    });
  });

  // Get unique platforms
  const allPlatforms = new Set();
  Object.values(filteredData).forEach(section => {
    section.videos.forEach(video => {
      allPlatforms.add(video.platform);
    });
  });

  return {
    config,
    totalVideos,
    categories: Array.from(allCategories).sort(),
    platforms: Array.from(allPlatforms).sort(),
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
    totalViews: 0,
    totalLikes: 0,
    averageDuration: 0,
    topCategories: {},
    topPlatforms: {},
    videoCount: metadata.totalVideos
  };

  let totalDurationSeconds = 0;
  let videoCount = 0;

  Object.values(filteredData).forEach(section => {
    section.videos.forEach(video => {
      // Parse views (remove M, K suffixes)
      const views = parseFloat(video.views.replace(/[MK]/g, '')) *
        (video.views.includes('M') ? 1000000 : video.views.includes('K') ? 1000 : 1);

      // Parse likes
      const likes = parseFloat(video.likes.replace(/[MK]/g, '')) *
        (video.likes.includes('M') ? 1000000 : video.likes.includes('K') ? 1000 : 1);

      // Parse duration (convert to seconds)
      const [minutes, seconds] = video.duration.split(':').map(Number);
      const durationInSeconds = minutes * 60 + seconds;

      analytics.totalViews += views;
      analytics.totalLikes += likes;
      totalDurationSeconds += durationInSeconds;
      videoCount++;

      // Count categories
      analytics.topCategories[video.category] =
        (analytics.topCategories[video.category] || 0) + 1;

      // Count platforms
      analytics.topPlatforms[video.platform] =
        (analytics.topPlatforms[video.platform] || 0) + 1;
    });
  });

  analytics.averageDuration = videoCount > 0 ?
    Math.round(totalDurationSeconds / videoCount) : 0;

  return analytics;
};
