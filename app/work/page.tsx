"use client";

import Header from "@/components/Header";
import Projects from "@/components/projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function WorkPage(props: PageProps<"/work">) {
  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow pt-20">
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
