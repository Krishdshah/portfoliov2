import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HexMenu from "../components/HexMenu"; 
import BackgroundGlow from "../components/BackgroundGlow";
import Background3D from "../components/Background3D";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  preload: false 
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space', 
  weight: ['300', '400', '500', '600', '700'],
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thekrishdshah.vercel.app"),
  title: "Krish D Shah | Software Engineer",
  description: "Portfolio of Krish D Shah - Computer Science Undergraduate, AI/ML Specialist, and Full Stack Developer.",
  openGraph: {
    title: "Krish D Shah | Software Engineer",
    description: "Portfolio of Krish D Shah - Computer Science Undergraduate, AI/ML Specialist, and Full Stack Developer.",
    url: "https://thekrishdshah.vercel.app",
    siteName: "Krish D Shah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krish D Shah | Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish D Shah | Software Engineer",
    description: "Portfolio of Krish D Shah - Computer Science Undergraduate, AI/ML Specialist, and Full Stack Developer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white dark:bg-brand-dark text-slate-800 dark:text-gray-300 flex flex-col min-h-screen font-sans transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background3D />
          <BackgroundGlow />
          
          <Navbar />
          
          <main className="flex-grow flex flex-col pt-20"> 
            {children}
          </main>
          
          <Footer />
          
          <HexMenu /> 
        </ThemeProvider>
      </body>
    </html>
  );
}