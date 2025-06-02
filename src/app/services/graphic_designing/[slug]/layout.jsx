

export async function generateMetadata({params}){
    const {slug} = await params;
  return  {
   title: slug?.toUpperCase() + 'Graphic Designing' || 'Services',
    description: `Flash Edits Provides ${slug?.toUpperCase() || ''} Graphic Designing`,
    keywords: [
      "professional graphic designing",
      "YouTube banner & thumbnails",
      "social media content creation",
      "creative graphic agency",
      "remote graphic editors",
      "content creation team",
      "brand video production",
      "Instagram graphic designing",
      "TikTok graphic designing",
      "Adobe Premiere editors",
      "After Effects specialists",
      "thumbnail design",
      "video post-production",
      "content marketing visuals",
      "poster designing",
    ],
    openGraph: {
      title: "Flashcut Edits | Professional Graphic Designing",
      description: "Transform your content with our professional editing and design services. Perfect for brands, creators, and businesses looking to elevate their visual storytelling.",
      url: "https://flashcutedits.com",
      siteName: "Flashcut Edits",
      images: [
        {
          url: "/graphic-design.jpg",
          width: 1200,
          height: 630,
          alt: "Flashcut Edits - Professional Graphic Designing Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Flashcut Edits | Professional Graphic Designing",
      description: "Transform your content with our professional editing and design services.",
      images: ["/graphic-design.jpg"],
      creator: "@flashcut.tanishq",
    },
    metadataBase: new URL("https://flashcutedits.com"),
    alternates: {
      canonical: "/",
    },
    category: "Graphic Designing services",
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
