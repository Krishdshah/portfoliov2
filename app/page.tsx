"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SkillsTicker />
        <Quote />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
