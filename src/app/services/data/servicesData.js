import {
  Play,
  Camera,
  Sparkles
} from 'lucide-react';

// Services data structure matching portfolio categories
export const videoEditing = {
    title: "Video Editing",
    icon: <Play className="w-6 h-6" />,
    gradient: "from-blue-500 to-purple-600",
    description: "Professional video editing services across all formats and platforms",
    subcategories: {
      shortFormContent: {
        title: "Short-Form Content",  
        icon: <Camera className="w-5 h-5" />,
        description: "Engaging short-form videos optimized for social media platforms",
        services: [
          { name: "Ads & Promotional Videos", href: "/services/video_editing/ads_promotional" },
          { name: "3D Edit", href: "/services/video_editing/3d" },
          { name: "Documentary", href: "/services/video_editing/documentary" },
          { name: "Ecommerce", href: "/services/video_editing/ecommerce" },
          { name: "Educational", href: "/services/video_editing/educational" },
          { name: "Faceless", href: "/services/video_editing/faceless" },
          { name: "High Level Motion Graphics", href: "/services/video_editing/high_level_motion_graphics" },
          { name: "Podcasts", href: "/services/video_editing/podcasts" },
          { name: "Real Estate", href: "/services/video_editing/real_estate" },
        ]
      },
      longFormContent: {
        title: "Long-Form Content",
        icon: <Sparkles className="w-5 h-5" />,
        description: "Comprehensive long-form videos for detailed storytelling",
        services: [
          { name: "Ads & Promotional Videos", href: "/services/video_editing/ads_promotional" },
          { name: "3D Edit", href: "/services/video_editing/3d" },
          { name: "Documentary", href: "/services/video_editing/documentary" },
          { name: "Ecommerce", href: "/services/video_editing/ecommerce" },
          { name: "Educational", href: "/services/video_editing/educational" },
          { name: "Faceless", href: "/services/video_editing/faceless" },
          { name: "High Level Motion Graphics", href: "/services/video_editing/high_level_motion_graphics" },
          { name: "Podcasts", href: "/services/video_editing/podcasts" },
          { name: "Real Estate", href: "/services/video_editing/real_estate" },
        ]
      }
    }
  }

export const graphicDesign = {
    title: "Graphic Design",
    description: "Creative graphic design solutions for all your visual needs",
    subcategories: {
      "Catalogs":{
        title: "Catalogs",
        icon: <Sparkles className="w-5 h-5" />,
        description: "Comprehensive long-form videos for detailed storytelling",
        href:'/services/graphic_designing/catalogs',
        categories:[
          { name: "Documentary", category: "documentary" },
          { name: "Educational", category: "educational" },
          { name: "Fitness", category: "fitness" },
          { name: "Gaming", category: "gaming" },
          { name: "Podcasts", category: "podcasts" },
          { name: "Tech", category: "tech" },
          { name: "Trading", category: "trading" },
          { name: "Vlog / Lifestyle", category: "vlog_lifestyle" },
        ]
      },
      "Channel banners":{
         title:"Channel banners",
         href:'/services/graphic_designing/banners',
        icon: <Sparkles className="w-5 h-5" />,
        description: "Comprehensive long-form videos for detailed storytelling",
        services:[
          { name: "Documentary", href: "/services/graphic_designing/documentary" },
          { name: "Educational", href: "/services/graphic_designing/educational" },
          { name: "Fitness", href: "/services/graphic_designing/fitness" },
          { name: "Gaming", href: "/services/graphic_designing/gaming" },
          { name: "Podcasts", href: "/services/graphic_designing/podcasts" },
          { name: "Tech", href: "/services/graphic_designing/tech" },
          { name: "Trading", href: "/services/graphic_designing/trading" },
          { name: "Vlog / Lifestyle", href: "/services/graphic_designing/vlog_lifestyle" },
        ]
      }, 
      "cover images ":{
         title: "cover image",
         href:'/services/graphic_designing/cover',
        icon: <Sparkles className="w-5 h-5" />,
        description: "Comprehensive long-form videos for detailed storytelling",
        services:[
          { name: "Documentary", href: "/services/graphic_designing/documentary" },
          { name: "Educational", href: "/services/graphic_designing/educational" },
          { name: "Fitness", href: "/services/graphic_designing/fitness" },
          { name: "Gaming", href: "/services/graphic_designing/gaming" },
          { name: "Podcasts", href: "/services/graphic_designing/podcasts" },
          { name: "Tech", href: "/services/graphic_designing/tech" },
          { name: "Trading", href: "/services/graphic_designing/trading" },
          { name: "Vlog / Lifestyle", href: "/services/graphic_designing/vlog_lifestyle" },
        ]
      },
      "Flyers & Brochures" :{
         title: "Flyers & Brochures",
        icon: <Sparkles className="w-5 h-5" />,
         href:'/services/graphic_designing/flyers_brochures',
        description: "Comprehensive long-form videos for detailed storytelling",
        services:[
          { name: "Documentary", href: "/services/graphic_designing/documentary" },
          { name: "Educational", href: "/services/graphic_designing/educational" },
          { name: "Fitness", href: "/services/graphic_designing/fitness" },
          { name: "Gaming", href: "/services/graphic_designing/gaming" },
          { name: "Podcasts", href: "/services/graphic_designing/podcasts" },
          { name: "Tech", href: "/services/graphic_designing/tech" },
          { name: "Trading", href: "/services/graphic_designing/trading" },
          { name: "Vlog / Lifestyle", href: "/services/graphic_designing/vlog_lifestyle" },
        ]
      },
      "Logo designing ":{
         title: "Logo designing",
         href:'/services/graphic_designing/logo_designing',
        icon: <Sparkles className="w-5 h-5" />,
        description: "Comprehensive long-form videos for detailed storytelling",
        services:[
          { name: "Documentary", href: "/services/graphic_designing/documentary" },
          { name: "Educational", href: "/services/graphic_designing/educational" },
          { name: "Fitness", href: "/services/graphic_designing/fitness" },
          { name: "Gaming", href: "/services/graphic_designing/gaming" },
          { name: "Podcasts", href: "/services/graphic_designing/podcasts" },
          { name: "Tech", href: "/services/graphic_designing/tech" },
          { name: "Trading", href: "/services/graphic_designing/trading" },
          { name: "Vlog / Lifestyle", href: "/services/graphic_designing/vlog_lifestyle" },
        ]
      },
      "Posters & creatives" :{
         title: "Posters & creatives",
        icon: <Sparkles className="w-5 h-5" />,
         href:'/services/graphic_designing/poster_creatives',

        description: "Comprehensive long-form videos for detailed storytelling",
        services:[
          { name: "Documentary", href: "/services/graphic_designing/documentary" },
          { name: "Educational", href: "/services/graphic_designing/educational" },
          { name: "Fitness", href: "/services/graphic_designing/fitness" },
          { name: "Gaming", href: "/services/graphic_designing/gaming" },
          { name: "Podcasts", href: "/services/graphic_designing/podcasts" },
          { name: "Tech", href: "/services/graphic_designing/tech" },
          { name: "Trading", href: "/services/graphic_designing/trading" },
          { name: "Vlog / Lifestyle", href: "/services/graphic_designing/vlog_lifestyle" },
        ]
      },
      "Thumbnails":{
         title:"Thumbnails",
         href:'/services/graphic_designing/thumbnails',
        icon: <Sparkles className="w-5 h-5" />,
        description: "Comprehensive long-form videos for detailed storytelling",
        services:[
          { name: "Documentary", href: "/services/graphic_designing/documentary" },
          { name: "Educational", href: "/services/graphic_designing/educational" },
          { name: "Fitness", href: "/services/graphic_designing/fitness" },
          { name: "Gaming", href: "/services/graphic_designing/gaming" },
          { name: "Podcasts", href: "/services/graphic_designing/podcasts" },
          { name: "Tech", href: "/services/graphic_designing/tech" },
          { name: "Trading", href: "/services/graphic_designing/trading" },
          { name: "Vlog / Lifestyle", href: "/services/graphic_designing/vlog_lifestyle" },
        ]
      },
    }
  }
