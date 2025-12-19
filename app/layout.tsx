import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HexMenu from "../components/HexMenu"; 

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space', 
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Krish D Shah | Software Engineer",
  description: "Portfolio of Krish D Shah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-brand-dark text-gray-300 flex flex-col min-h-screen`}>
        
        <Navbar />
        
        <main className="flex-grow flex flex-col"> 
          {children}
        </main>
        
        <Footer />
        
        <HexMenu /> 
        
      </body>
    </html>
  );
}