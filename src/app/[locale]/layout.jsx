import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../_components/Navbar";
import ViewTransition from "../_components/ViewTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Flashcut Edits",
  description: "Video Editing / Graphic Designing",
};

export function generateStaticParams() {
  return [
    { locale: 'en-IN' },
    { locale: 'en-US' }
  ];
}

export default function RootLayout({ children, params }) {
  const { locale } = params;
  
  return (
    <html lang={locale.split('-')[0]} className={inter.variable}>
      <body className={`antialiased font-sans`}>
        <Navbar locale={locale} />
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}