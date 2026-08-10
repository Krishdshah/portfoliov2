"use client";

import Header from "@/components/Header";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";

export default function WorkPage(props: PageProps<"/work">) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow pt-20">
        <SelectedWork />
      </main>
      <Footer />
    </div>
  );
}
