"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import SelectedWork from "@/components/SelectedWork";
import ProfilesSection from "@/components/ProfilesSection";
import BottomGrid from "@/components/BottomGrid";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow">
        <div id="hero">
          <Hero />
        </div>
        <SkillsTicker />
        <SelectedWork />
        <div id="profiles" className="border-t border-border-custom bg-transparent">
          <ProfilesSection />
        </div>
        <div id="now" className="border-t border-border-custom bg-transparent">
          <BottomGrid />
        </div>
        <Quote />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
