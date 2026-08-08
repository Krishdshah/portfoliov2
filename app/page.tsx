"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the 3D Codecon component to prevent Next.js SSR WebGL errors.
const Codecon = dynamic(() => import("@/components/Codecon"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-zinc-950/20 backdrop-blur-sm rounded-2xl border border-zinc-800/40">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-zinc-700 border-t-zinc-300 rounded-full animate-spin"></div>
        <span className="text-sm font-medium text-zinc-500 font-mono tracking-wider">
          LOADING ENGINE...
        </span>
      </div>
    </div>
  ),
});

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const skills = [
    { name: "Three.js & WebGL", category: "creative", icon: "✨", color: "border-orange-500/30 text-orange-400 hover:shadow-orange-500/10" },
    { name: "React / Next.js", category: "frontend", icon: "⚛️", color: "border-blue-500/30 text-blue-400 hover:shadow-blue-500/10" },
    { name: "TypeScript", category: "frontend", icon: "📘", color: "border-sky-500/30 text-sky-400 hover:shadow-sky-500/10" },
    { name: "Node.js", category: "backend", icon: "🟢", color: "border-green-500/30 text-green-400 hover:shadow-green-500/10" },
    { name: "Tailwind CSS", category: "frontend", icon: "🎨", color: "border-teal-500/30 text-teal-400 hover:shadow-teal-500/10" },
    { name: "WebGL Shaders (GLSL)", category: "creative", icon: "🌋", color: "border-purple-500/30 text-purple-400 hover:shadow-purple-500/10" },
    { name: "GraphQL & REST APIs", category: "backend", icon: "🔌", color: "border-pink-500/30 text-pink-400 hover:shadow-pink-500/10" },
    { name: "Python / AI Integration", category: "backend", icon: "🐍", color: "border-yellow-500/30 text-yellow-400 hover:shadow-yellow-500/10" },
  ];

  const projects = [
    {
      title: "Interactive 3D Engine",
      desc: "Procedural mesh generation, physics-based simulations, and custom post-processing shaders.",
      tags: ["Three.js", "WebGL", "TypeScript"],
      color: "from-orange-500/20 to-pink-500/20 hover:border-orange-500/40",
    },
    {
      title: "Collaborative Design Space",
      desc: "Realtime vector editing and canvas workspaces with multiplayer state sync.",
      tags: ["Next.js", "WebSockets", "Canvas"],
      color: "from-blue-500/20 to-indigo-500/20 hover:border-blue-500/40",
    },
    {
      title: "AI Shader Assistant",
      desc: "NLP interface generating custom GLSL shaders automatically based on style profiles.",
      tags: ["GLSL", "Node.js", "OpenAI"],
      color: "from-purple-500/20 to-teal-500/20 hover:border-purple-500/40",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white relative overflow-x-hidden">
      
      {/* Decorative Atmospheric Lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900 px-6 py-4 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              KRISH D SHAH
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#codecon" className="hover:text-white transition-colors duration-200">Codecon 3D</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          </nav>
          <div>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col gap-24 z-10">
        
        {/* Hero Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">
                Available for Projects
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-none">
              Engineering <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Creative Dimensions
              </span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I am an Aspiring Software Engineer building interactive web systems. 
              Fusing robust full-stack architecture with immersive 3D interfaces 
              to craft unforgettable digital journeys.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-semibold text-zinc-950 bg-white hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 transform active:scale-95"
              >
                View Selected Work
              </a>
              <a
                href="#codecon"
                className="px-6 py-3 rounded-full font-semibold border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                Interact with Codecon 3D
              </a>
            </div>
          </div>

          {/* Right Column: 3D Codecon Canvas */}
          <div id="codecon" className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 to-zinc-950/60 shadow-2xl backdrop-blur-md overflow-hidden group">
              
              {/* Decorative Corner Borders */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-20">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest z-20 pointer-events-none select-none">
                Interactive Scene
              </div>

              {/* The 3D Engine Component */}
              <Codecon />
              
              {/* Interaction Hint Overlay */}
              <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none select-none z-20 transition-opacity duration-300 opacity-80 group-hover:opacity-100">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase bg-zinc-950/80 px-3 py-1.5 rounded-full border border-zinc-800/60 backdrop-blur-sm">
                  🖱️ Move Cursor to Rotate Cluster
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-400 font-mono">
              Expertise & Stack
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              Technologies I Work With
            </h2>
            <p className="text-zinc-400 max-w-xl">
              A breakdown of languages, frameworks, and graphics toolsets I leverage to bridge 
              the gap between design, functionality, and immersive animations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:bg-zinc-900/40 flex flex-col gap-3 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${skill.color}`}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-base font-semibold text-zinc-100">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Cards */}
        <section id="projects" className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
              Selected Projects
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              What I've Been Building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 flex flex-col justify-between gap-6 hover:bg-zinc-900/50 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 group`}
              >
                <div className="flex flex-col gap-3">
                  <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${project.color.split(" ")[0]} ${project.color.split(" ")[1]}`} />
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Container */}
        <section id="contact" className="rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/30 to-zinc-950/80 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold">Let's create something legendary.</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Have an idea for a 3D interface, web application, or need a developer with a 
              passion for visuals? Let's connect and discuss your vision.
            </p>
          </div>
          <a
            href="mailto:contact@example.com"
            className="px-8 py-4 rounded-full font-semibold text-zinc-950 bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 hover:shadow-[0_0_35px_rgba(239,68,68,0.25)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            Start Conversation
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Krish D Shah. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">GitHub</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
