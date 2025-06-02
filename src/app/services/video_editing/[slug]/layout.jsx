

export async function generateMetadata({params}){
    const {slug} = await params;
  return  {
    title: slug?.toUpperCase() + 'Video Editing' || 'Services',
    description: `Flash Edits Provides ${slug?.toUpperCase() || ''} Video Editing`,
    keywords: [
      "professional video editing",
      "YouTube video editing",
      "social media content creation",
      "creative video agency",
      "remote video editors",
      "content creation team",
      "brand video production",
      "Instagram reel editing",
      "TikTok video editing",
      "Adobe Premiere editors",
      "After Effects specialists",
      "thumbnail design",
      "video post-production",
      "content marketing visuals",
      "short form editing",
      "long form editing",
    ],
    openGraph: {
      title: "Flashcut Edits | Professional Video Editing",
      description: "Transform your content with our professional editing and design services. Perfect for brands, creators, and businesses looking to elevate their visual storytelling.",
      url: "https://flashcutedits.com",
      siteName: "Flashcut Edits",
      images: [
        {
          url: "/video-editing.jpg",
          width: 1200,
          height: 630,
          alt: "Flashcut Edits - Professional Video Editing Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Flashcut Edits | Professional Video Editing",
      description: "Transform your content with our professional editing and design services.",
      images: ["/video-editing.jpg"],
      creator: "@flashcut.tanishq",
    },
    metadataBase: new URL("https://flashcutedits.com"),
    alternates: {
      canonical: "/",
    },
    category: "Video Editing services",
  };
}

// export async function generateStaticParams(){
//   const VideoEditingRoutes = await fetch('../data/staticRoutes.json').then(res => res.json())
  
//   return VideoEditingRoutes.map((item) => ({
//     slug: item
//   }))
// }

export default function RootLayout({ children }) {
  return <>{children}</>;
}
