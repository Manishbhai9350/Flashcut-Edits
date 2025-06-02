export const metadata = {
  title: "Services",
  description:
    "Flashcut Edits is an Video editing and Graphic Design agency where we help businesses, idivisual, freelancers, students, content-creators, social media managers, social-media-influencers to create seamless, engaging and high attention grabbing Video and Graphic",
  keywords:
    "Video editing , Graphic design , Video Editing , Graphic Designing , Video Editing Agency , Video Editing Services , Graphic Designing Agency , Graphic Designing Services",
  openGraph: {
    title: "Send us a mail and we will handle the rest",
    description:
      "We help brands, businesses, idivisual, freelancers, students, content-creators, social media managers, social-media-influencers to create seamless, engaging and high attention grabbing Video Editing and Graphic Designing",
    url: "https://flashcutedits.com/hiring",
    siteName: "Flashcut Edits",
    type: "website",
    images: [
      {
        url: "/graphic-design.jpg",
        width: 1200,
        height: 630,
        alt: "Join the Flashcut Edits Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Our Services",
    description: "Explore our work and Let us do something for you!",
    images: [
      {
        url: "/graphic-design.jpg",
        width: 1200,
        height: 630,
        alt: "Join the Flashcut Edits Team",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
