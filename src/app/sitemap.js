import { StaticRoutes as GraphicsRoutes } from "./services/graphic_designing/data/staticRoutes"
import { StaticRoutes as VideoRoutes } from "./services/video_editing/data/staticRoutes"


export default function sitemap() {
  const baseUrl = "https://flashcutedits.com";

  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/hiring",
  ];

  const videoSlugs = VideoRoutes.map((slug) => `/services/video_editing/${slug}`);
  const graphicsSlugs = GraphicsRoutes.map((slug) => `/services/graphic_design/${slug}`);

  const allRoutes = [...staticRoutes, ...videoSlugs, ...graphicsSlugs];

  const now = new Date().toISOString();

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

// /
// /services
// /services/video_editing/[slug]
// /services/graphic_design/[slug]
// /hiring

