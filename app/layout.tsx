import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-brand-dark text-gray-300`}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}