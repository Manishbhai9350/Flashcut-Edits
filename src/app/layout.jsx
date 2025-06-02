import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Flashcut Edits | Professional Video Editing & Graphic Design",
    template: "%s | Flashcut Edits"
  },
  keywords: [
    "professional video editing",
    "YouTube video editing",
    "social media content creation",
    "graphic design services",
    "creative video agency",
    "remote video editors",
    "content creation team",
    "brand video production",
    "motion graphics",
    "Instagram reel editing",
    "TikTok video editing",
    "Adobe Premiere editors",
    "After Effects specialists",
    "thumbnail design",
    "video post-production",
    "content marketing visuals"
  ],
  description: "Flashcut Edits transforms your raw footage into captivating stories. Our team of professional video editors and graphic designers creates high-impact content for brands, creators, and businesses worldwide. 100% remote, always on deadline.",
  openGraph: {
    title: "Flashcut Edits | Professional Video Editing & Graphic Design",
    description: "Transform your content with our professional editing and design services. Perfect for brands, creators, and businesses looking to elevate their visual storytelling.",
    url: "https://flashcutedits.com",
    siteName: "Flashcut Edits",
    images: [
      {
        url: "https://flashcutedits.com/og-image.jpg",
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
    title: "Flashcut Edits | Professional Video Editing & Graphic Design",
    description: "Transform your content with our professional editing and design services.",
    images: ["https://flashcutedits.com/og-image.jpg"],
    creator: "@flashcut.tanishq",
  },
  metadataBase: new URL("https://flashcutedits.com"),
  alternates: {
    canonical: "/",
  },
  category: "Video Editing and Graphic Designing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}