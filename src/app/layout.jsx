import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
