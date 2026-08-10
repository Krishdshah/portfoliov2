"use client";

import { useState } from "react";

interface Skill {
  name: string;
  logo: string | null;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "PYTHON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JAVASCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TYPESCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JAVA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  // AI & ML
  { name: "PYTORCH", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TENSORFLOW", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "SCIKIT-LEARN", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "NUMPY", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "PANDAS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "OPENCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "LANGCHAIN", logo: null },
  { name: "LANGGRAPH", logo: null },
  { name: "LLAMAINDEX", logo: null },
  { name: "HUGGING FACE", logo: null },
  { name: "PROMPT ENGINEERING", logo: null },
  { name: "RAG SYSTEMS", logo: null },
  { name: "AI AGENTS", logo: null },
  { name: "VECTOR DB", logo: null },
  // Tools & Deployment
  { name: "GIT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "DOCKER", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "VERCEL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "GITHUB ACTIONS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "MLOPS", logo: null },
  { name: "CI / CD", logo: null },
  // Full Stack Web
  { name: "REACT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NEXT.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "NODE.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "EXPRESS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "FASTAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "MONGODB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "FIREBASE", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "TAILWIND CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
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

  return (
    <section className="w-full border-b border-border-custom bg-transparent overflow-hidden py-6 md:py-8">
      <div
        className="flex w-full overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredName(null);
        }}
      >
        <div
          className="animate-marquee flex items-center whitespace-nowrap gap-12"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: "55s",
          }}
        >
          {tickerItems.map((skill, index) => {
            const isHovered = hoveredName === skill.name;
            return (
              <span
                key={`${index}-${skill.name}`}
                className="flex items-center gap-12 cursor-default"
                onMouseEnter={() => setHoveredName(skill.name)}
                onMouseLeave={() => setHoveredName(null)}
              >
                <span
                  className={`flex items-center gap-2.5 text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase transition-all duration-200 ${
                    isHovered ? "text-foreground" : "text-foreground/50"
                  }`}
                >
                  {/* Logo reveal on hover (if available) */}
                  {skill.logo && (
                    <span
                      className={`transition-all duration-200 overflow-hidden ${
                        isHovered ? "w-6 opacity-100" : "w-0 opacity-0"
                      }`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain block"
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
