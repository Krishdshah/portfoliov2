"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Code2, Linkedin, Twitter } from "lucide-react";

// Logos imported directly from SkillsTicker
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

// Handwritten Box Component for "Tech Stack"
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

// Handwritten Wavy Underline for "systems"
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

export default function ProfilesPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col selection:bg-foreground selection:text-background relative overflow-x-hidden w-full">
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Text Statement & Connect Links */}
          <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8">
            {/* Main Statement Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-serif leading-[1.18] tracking-tight font-bold text-foreground">
              Building <WavyUnderline>systems</WavyUnderline> <br />
              that matter.
            </h1>

            {/* Subtext */}
            <p className="font-serif text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg">
              I bridge the gap between creative architecture and robust development, drafting digital experiences with precision and intent.
            </p>

            {/* Dashed Horizontal Divider */}
            <div className="w-full border-t border-dashed border-border-custom my-2" />

            {/* CONNECT Section */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs font-bold tracking-widest text-foreground/45 uppercase">
                CONNECT
              </span>

              <div className="flex flex-col gap-3 max-w-xs">
                {/* GitHub */}
                <a
                  href="https://github.com/Krishdshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 px-3.5 py-2.5 bg-background border border-border-custom rounded-sm hover:border-foreground/40 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 border border-border-custom rounded-xs flex items-center justify-center bg-card text-foreground group-hover:border-foreground/40 transition-colors">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-wide text-foreground">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/krishdshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 px-3.5 py-2.5 bg-background border border-border-custom rounded-sm hover:border-foreground/40 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 border border-border-custom rounded-xs flex items-center justify-center bg-card text-foreground group-hover:border-foreground/40 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-wide text-foreground">
                    LinkedIn
                  </span>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/krishdshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 px-3.5 py-2.5 bg-background border border-border-custom rounded-sm hover:border-foreground/40 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 border border-border-custom rounded-xs flex items-center justify-center bg-card text-foreground group-hover:border-foreground/40 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-wide text-foreground">
                    Twitter
                  </span>
                </a>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-4">
              <div className="inline-flex items-center px-3.5 py-2 bg-foreground text-background rounded-xs text-[11px] font-mono font-bold tracking-wider">
                Status: Always building
              </div>
            </div>
          </div>

          {/* Right Column — Tech Stack Header & Interactive Icon Cloud */}
          <div className="lg:col-span-6 flex flex-col items-end w-full">
            {/* Tech Stack Header Badge */}
            <div className="flex flex-col items-end text-right mb-6">
              <SketchyBox>Tech Stack</SketchyBox>
              <span className="font-mono text-xs text-foreground/50 mt-1">
                Drafted for performance &amp; scale.
              </span>
            </div>

            {/* Bordered Box containing 3D Interactive Icon Cloud using SkillsTicker logos */}
            <div className="relative w-full aspect-square max-w-lg flex items-center justify-center rounded-lg border-2 border-dashed border-border-custom p-6 md:p-8 bg-card/20 shadow-sm overflow-hidden">
              <IconCloud iconItems={skillLogos} />
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
