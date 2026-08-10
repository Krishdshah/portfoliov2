import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import KineticGrid from "@/components/ui/kinetic-grid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Krish D Shah | Aspiring Software Engineer",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${alexBrush.variable} antialiased`}
    >
      <body className="relative">
        <KineticGrid>
          {children}
        </KineticGrid>
      </body>
    </html>
  );
}
