export const metadata = {
  title: "Join the Team - Careers at Flashcut Edits",
  description: "Explore exciting career opportunities at Flashcut Edits. We're hiring talented video editors, graphic designers, and creatives to build world-class visual content. Apply now and grow with us!",
  keywords: "Flashcut Edits careers, video editing jobs, graphic design jobs, creative agency hiring, remote creative jobs, join Flashcut team, video editor position, graphic designer vacancy",
  openGraph: {
    title: "Join the Team - Careers at Flashcut Edits",
    description: "We're building a world-class creative team. Find open roles in video editing, graphic design, and more. Apply now!",
    url: "https://flashcutedits.com/hiring",
    siteName: "Flashcut Edits",
    type: "website",
    images: [
      {
        url: "/hiring.png",
        width: 1200,
        height: 630,
        alt: "Join the Flashcut Edits Team",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Team - Careers at Flashcut Edits",
    description: "Explore creative job opportunities and grow your career with Flashcut Edits.",
    images: [{
        url: "/hiring.png",
        width: 1200,
        height: 630,
        alt: "Join the Flashcut Edits Team",
      }],
  },
};


export default function RootLayout({ children }) {
  return (
    <>
          {children}
    </>
  );
}
