"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import Quote from "@/components/Quote";
import Projects from "@/components/projects";
import ProfilesSection from "@/components/ProfilesSection";
import BottomGrid from "@/components/BottomGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow space-y-16 md:space-y-24">
        {/* Home / Hero Section */}
        <section id="home" className="pt-4">
          <Hero />
          <SkillsTicker />
          <Quote />
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-12 md:pt-16 scroll-mt-20">
          <Projects />
        </section>

        {/* Profiles Section */}
        <section id="profiles" className="pt-12 md:pt-16 scroll-mt-20">
          <ProfilesSection />
        </section>

        {/* Now / Activity Grid Section */}
        <section id="now" className="pt-12 md:pt-16 pb-12 scroll-mt-20">
          <BottomGrid />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
