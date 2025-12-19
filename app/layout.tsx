import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space', 
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Krish D Shah | Systems & AI Engineer",
  description: "Portfolio of Krish D Shah. Building scalable agentic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-brand-dark text-gray-300`}>
        {children}
      </body>
    </html>
  );
}