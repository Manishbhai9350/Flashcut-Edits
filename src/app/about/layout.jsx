export const metadata = {
  title: "About Flashcut Edits | Our Story, Team & Creative Process",
  keywords: [
    "about Flashcut Edits",
    "video editing company",
    "creative team",
    "content creation process",
    "professional video editors",
    "graphic design agency",
    "our mission",
    "creative values",
    "video production team",
    "content creation specialists",
  ],
  description:
    "Discover the story behind Flashcut Edits - a passionate team of video editors and designers transforming ideas into captivating visual stories since 2024. Learn about our process and values.",
  openGraph: {
    title: "About Flashcut Edits | Our Creative Journey",
    description:
      "Meet the team and learn about our mission to deliver exceptional video editing and design services that help brands stand out.",
    url: "https://flashcutedits.com/about",
    images: [
      {
        url: "/graphic-design.jpg",
        width: 1200,
        height: 630,
        alt: "Flashcut Edits Team - Professional Video Editors and Designers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Flashcut Edits | Our Creative Journey",
    description:
      "Get to know the people and values behind our video editing and design services.",
    images: ["/graphic-design.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
