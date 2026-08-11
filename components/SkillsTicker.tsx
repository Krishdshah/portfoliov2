"use client";

import { useState, useRef } from "react";

interface Skill {
  name: string;
  logo: string | null;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "PYTHON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JAVASCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TYPESCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "JAVA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  // AI & ML
  { name: "PYTORCH", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "TENSORFLOW", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "SCIKIT-LEARN", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "NUMPY", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "PANDAS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "OPENCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "LANGCHAIN", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langchain.svg" },
  { name: "LANGGRAPH", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langgraph.svg" },
  { name: "LLAMAINDEX", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/llamaindex.svg" },
  { name: "HUGGING FACE", logo: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/huggingface.svg" },
  { name: "PROMPT ENGINEERING", logo: null },
  { name: "RAG SYSTEMS", logo: null },
  { name: "AI AGENTS", logo: null },
  { name: "VECTOR DB", logo: null },
  // Tools & Deployment
  { name: "GIT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "DOCKER", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "VERCEL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "GITHUB ACTIONS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "MLOPS", logo: null },
  { name: "CI / CD", logo: null },
  // Full Stack Web
  { name: "REACT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "NEXT.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "NODE.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "EXPRESS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "FASTAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "MONGODB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "FIREBASE", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "TAILWIND CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "REST APIS", logo: null },
  { name: "SYSTEM DESIGN", logo: null },
  // CS Core
  { name: "DSA", logo: null },
  { name: "DBMS", logo: null },
  { name: "OPERATING SYSTEMS", logo: null },
  { name: "COMPUTER NETWORKS", logo: null },
  { name: "OOPS", logo: null },
  { name: "SOFTWARE ENGINEERING", logo: null },
];

// Duplicate for seamless infinite scroll
const tickerItems = [...skills, ...skills];

export default function SkillsTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current && isPaused) {
      const el = scrollRef.current;
      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0) {
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        }
      }
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current && isPaused) {
      const el = scrollRef.current;
      const delta = e.deltaY + e.deltaX;
      el.scrollLeft += delta;

      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0) {
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (el.scrollLeft <= 0 && delta < 0) {
          el.scrollLeft += halfWidth;
        }
      }
    }
  };

  return (
    <section className="w-full border-b border-border-custom bg-transparent py-6 md:py-8">
      {/* Section Label */}
      <div className="px-6 md:px-12 lg:px-20 mb-4 select-none">
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-foreground/45 uppercase">
          TECH STACK & CAPABILITIES
        </span>
      </div>

      {/* Fade Overlay Container */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto scrollbar-none select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredName(null);
            if (scrollRef.current) {
              scrollRef.current.scrollLeft = 0;
            }
          }}
          onWheel={handleWheel}
          onScroll={handleScroll}
        >
          <div
            className="animate-marquee-responsive flex items-center whitespace-nowrap gap-8 md:gap-12"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {tickerItems.map((skill, index) => {
              const isHovered = hoveredName === skill.name;
              return (
                <span
                  key={`${index}-${skill.name}`}
                  className="flex items-center gap-8 md:gap-12 cursor-default"
                  onMouseEnter={() => setHoveredName(skill.name)}
                  onMouseLeave={() => setHoveredName(null)}
                >
                  <span
                    className={`flex items-center gap-2.5 text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase transition-all duration-200 ${
                      isHovered ? "text-foreground" : "text-foreground/50"
                    }`}
                  >
                  {/* Logo is always visible to engage mobile and desktop users alike */}
                  {skill.logo && (
                    <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain block"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                      />
                    </span>
                  )}
                  {skill.name}
                </span>
                <span className={`text-sm md:text-base font-mono transition-colors duration-200 ${isHovered ? "text-foreground/30" : "text-foreground/20"}`}>
                  /
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
