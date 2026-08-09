"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import SelectedWork from "@/components/SelectedWork";
import Quote from "@/components/Quote";
import BottomGrid from "@/components/BottomGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SkillsTicker />
        <SelectedWork />
        <Quote />
        <BottomGrid />
      </main>
      <Footer />
    </div>
  );
}
