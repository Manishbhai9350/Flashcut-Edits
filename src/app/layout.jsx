import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import ViewTransition from "./_components/ViewTransition";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Flashcut Edits",
  description: "Video Editing / Graphic Designing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased font-sans`}>
        <Navbar />
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
