"use client";

import Header from "@/components/Header";
import BottomGrid from "@/components/BottomGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function NowPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow pt-20">
        <BottomGrid />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
