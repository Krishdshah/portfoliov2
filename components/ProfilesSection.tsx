"use client";

import React from "react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Code2, Code, Database, BookOpen, FileText, Puzzle, Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const skillLogos = [
  { name: "PYTHON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JAVASCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TYPESCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JAVA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "PYTORCH", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TENSORFLOW", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "SCIKIT-LEARN", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "NUMPY", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "PANDAS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "OPENCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "GIT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "DOCKER", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "VERCEL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "GITHUB ACTIONS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "REACT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NEXT.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "NODE.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "EXPRESS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "FASTAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "MONGODB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "FIREBASE", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "TAILWIND CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const otherProfiles = [
  {
    name: "LeetCode",
    handle: "thekdshah",
    url: "https://leetcode.com/u/thekdshah/",
    icon: Code,
  },
  {
    name: "Kaggle",
    handle: "krishdshah",
    url: "https://www.kaggle.com/krishdshah",
    icon: Database,
  },
  {
    name: "Medium",
    handle: "@thekrishdshahbhs",
    url: "https://medium.com/@thekrishdshahbhs",
    icon: BookOpen,
  },
  {
    name: "Dev.to",
    handle: "@thekrishdshah",
    url: "https://dev.to/thekrishdshah",
    icon: FileText,
  },
  {
    name: "VS Marketplace",
    handle: "krishdshah",
    url: "https://marketplace.visualstudio.com/publishers/krishdshah",
    icon: Puzzle,
  },
  {
    name: "X (Twitter)",
    handle: "@ikrishshah",
    url: "https://x.com/ikrishshah",
    icon: TwitterIcon,
  },
  {
    name: "Email",
    handle: "thekrishdshahbhs [at] gmail.com",
    url: "mailto:thekrishdshahbhs@gmail.com",
    icon: Mail,
  },
];

function SketchyBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 py-1 align-baseline">
      <span className="relative z-10 font-serif font-semibold text-lg md:text-xl text-foreground">
        {children}
      </span>
      <svg
        className="absolute inset-0 w-full h-full text-[#E86F2D] overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 3,6 L 98,3 C 99,25 97,65 96,94 L 5,97 C 3,75 4,35 3,6 M 6,10 L 95,7 L 93,92 L 9,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function WavyUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block pb-1.5 px-1 align-baseline">
      <span className="relative z-10 font-serif font-bold text-foreground">
        {children}
      </span>
      <svg
        className="absolute left-0 right-0 bottom-0 w-full h-3 text-[#E86F2D] overflow-visible pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M 2,3 C 20,8 35,-2 55,3 C 75,8 88,-1 98,4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function ProfilesSection() {
  return (
    <div className="py-14 md:py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column — Text Statement & Connect Links */}
        <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-serif leading-[1.18] tracking-tight font-bold text-foreground">
            Building <WavyUnderline>systems</WavyUnderline> <br />
            that matter.
          </h1>

          <p className="font-serif text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg">
            I bridge the gap between creative architecture and robust development, drafting digital experiences with precision and intent.
          </p>

          <div className="w-full border-t border-dashed border-border-custom my-2" />

          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-foreground/45 uppercase">
              CONNECT
            </span>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <a
                href="https://github.com/Krishdshah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3.5 px-4 py-3 bg-background border border-border-custom rounded-sm hover:border-foreground/40 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 border border-border-custom rounded-xs flex items-center justify-center bg-card text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wide text-foreground">
                  GitHub
                </span>
              </a>

              <a
                href="https://in.linkedin.com/in/thekrishdshah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3.5 px-4 py-3 bg-background border border-border-custom rounded-sm hover:border-foreground/40 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 border border-border-custom rounded-xs flex items-center justify-center bg-card text-foreground group-hover:border-foreground/40 transition-colors shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wide text-foreground">
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="flex items-center flex-wrap gap-2.5 mt-1">
              {otherProfiles.map((p) => {
                const IconComp = p.icon;
                return (
                  <a
                    key={p.name}
                    href={p.url}
                    target={p.url.startsWith("http") ? "_blank" : undefined}
                    rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={`${p.name} (${p.handle})`}
                    className="w-10 h-10 border border-border-custom rounded-sm flex items-center justify-center bg-background text-foreground hover:bg-foreground hover:text-background hover:border-foreground/40 transition-all duration-200 shadow-xs group"
                  >
                    <IconComp className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-2">
            <div className="inline-flex items-center px-3.5 py-2 bg-foreground text-background rounded-xs text-[11px] font-mono font-bold tracking-wider">
              Status: Always building
            </div>
          </div>
        </div>

        {/* Right Column — Tech Stack Header & Interactive Icon Cloud */}
        <div className="lg:col-span-6 flex flex-col items-end w-full">
          <div className="flex flex-col items-end text-right mb-6">
            <SketchyBox>Tech Stack</SketchyBox>
            <span className="font-mono text-xs text-foreground/50 mt-1">
              Drafted for performance &amp; scale.
            </span>
          </div>

          <div className="relative w-full aspect-square max-w-lg flex items-center justify-center rounded-lg border-2 border-dashed border-border-custom p-6 md:p-8 bg-card/20 shadow-sm overflow-hidden">
            <IconCloud iconItems={skillLogos} />
          </div>
        </div>

      </div>
    </div>
  );
}
