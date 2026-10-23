import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "utsho | turn your data into intelligence",
  description:
    "utsho turns raw Earth observation, LiDAR point clouds, and enterprise data into production intelligence. Co-founded by Sharmin Islam Disha (AI Systems & Generative AI) and Rafi Mahmud Tumon (Geospatial & Remote Sensing Specialist, M.Sc. TU Berlin).",
  keywords: [
    "utsho",
    "turn your data into intelligence",
    "GIS",
    "Remote Sensing",
    "AI Engineer",
    "Computer Vision",
    "YOLOv12",
    "Sentinel-2",
    "Sentinel-1 SAR",
    "PostGIS",
    "LiDAR",
    "RAG",
    "Generative AI",
    "Web GIS",
    "Sharmin Islam Disha",
    "Rafi Mahmud Tumon",
    "TU Berlin",
    "German Aerospace Center",
  ],
  authors: [
    { name: "Sharmin Islam Disha" },
    { name: "Rafi Mahmud Tumon" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}

