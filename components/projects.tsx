"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BorderGlow from "@/components/ui/BorderGlow";
import {
  Globe,
  Cpu,
  Zap,
  Terminal,
  Layers,
  Code2,
  Database,
  ExternalLink,
  Puzzle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// --- Types ---
interface StackStep {
  tool: string;
  icon: React.ComponentType<any>;
}

interface FlagshipProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  stackFlow: StackStep[];
  tech: string[];
  links: {
    demo: string;
    git: string;
  };
  stats: string;
}

interface OtherProject {
  title: string;
  desc: string;
  category: string;
  tags: string[];
  link: string;
  icon: React.ComponentType<any>;
}

// --- Data ---
const flagshipProjects: FlagshipProject[] = [
  {
    id: "fintech-agent",
    title: "FinTech Agent Bot",
    tagline: "Enterprise Financial AI Agent",
    category: "ai-agents",
    problem: "Static LLMs hallucinate on real-time financial data and cannot execute secure banking transactions.",
    solution: "Engineered an agentic workflow using Google ADK to route queries. The agent intelligently selects tools (Stock API, Transaction Engine) based on user intent.",
    stackFlow: [
      { tool: "User", icon: Globe },
      { tool: "Google ADK", icon: Cpu },
      { tool: "Gemini API", icon: Zap },
      { tool: "Fin. Tools", icon: Terminal },
    ],
    tech: ["Python", "Google ADK", "Gemini API"],
    links: { 
      demo: "https://genai-mjy8.vercel.app/", 
      git: "https://github.com/archeeetah/GenAI.git" 
    },
    stats: "Automated Workflows"
  },
  {
    id: "ava-bot",
    title: "Aaruush Virtual Assistant",
    tagline: "RAG-Powered Event Support",
    category: "ai-agents",
    problem: "Tech fest attendees struggled to find specific event details buried in massive PDF schedules and websites.",
    solution: "Built a Retrieval-Augmented Generation (RAG) pipeline. It embeds event docs into ChromaDB, allowing the LLM to answer context-aware queries instantly.",
    stackFlow: [
      { tool: "React UI", icon: Layers },
      { tool: "FastAPI", icon: Code2 },
      { tool: "ChromaDB", icon: Database },
      { tool: "LLM Inference", icon: Cpu },
    ],
    tech: ["LangChain", "ChromaDB", "FastAPI", "React"],
    links: { 
      demo: "https://www.aaruush.org/ava", 
      git: "#" 
    },
    stats: "Reduced Support Tix"
  },
  {
    id: "janrakshak",
    title: "JanRakshak",
    tagline: "AI-Powered Public Safety & Emergency Response Platform",
    category: "web-platforms",
    problem: "Citizens often face delays in reporting emergencies, accessing public safety resources, and receiving timely assistance during critical situations.",
    solution: "Developed a digital public-safety platform that streamlines incident reporting, emergency communication, and citizen-authority coordination through a centralized and accessible interface.",
    stackFlow: [
      { tool: "Citizen", icon: Globe },
      { tool: "Web Platform", icon: Cpu },
      { tool: "AI Processing", icon: Zap },
      { tool: "Response System", icon: Terminal },
    ],
    tech: ["React", "Firebase", "JavaScript", "Cloud Functions", "Firestore"],
    links: {
      demo: "https://janrakshak.web.app/",
      git: "#"
    },
    stats: "Safety Automation"
  },
  {
    id: "loksetu",
    title: "LokSetu",
    tagline: "Citizen-Government Digital Bridge",
    category: "web-platforms",
    problem: "Millions of citizens struggle to access government schemes, submit grievances, understand eligibility requirements, and navigate bureaucratic processes.",
    solution: "Built a citizen engagement platform that centralizes government scheme discovery, grievance registration, volunteer participation, document assistance, and public-service communication into a single digital ecosystem.",
    stackFlow: [
      { tool: "Citizen", icon: Globe },
      { tool: "LokSetu Portal", icon: Cpu },
      { tool: "Scheme & Grievance Engine", icon: Zap },
      { tool: "Government Authorities", icon: Terminal },
    ],
    tech: ["React", "Firebase", "JavaScript", "Firestore", "Progressive Web App"],
    links: {
      demo: "https://loksetu.web.app/",
      git: "#"
    },
    stats: "Digital Governance"
  }
];

const otherProjects: OtherProject[] = [
  {
    title: "Sign Sync",
    desc: "ML system converting sign language to text/speech for the speech-impaired. Real-time CV pipeline.",
    category: "ai-agents",
    tags: ["Python", "OpenCV", "TensorFlow"],
    link: "https://github.com/Laksh718/SignLang-To-Text-And-Speech",
    icon: ExternalLink
  },
  {
    title: "See My Folder Structure",
    desc: "VS Code extension to visualize and export project directory trees. Published on Marketplace.",
    category: "dev-tools",
    tags: ["VS Code API", "TypeScript", "Tooling"],
    link: "https://marketplace.visualstudio.com/items?itemName=Krishdshah.see-my-folder-structure",
    icon: Puzzle
  },
  {
    title: "Portfolio V2",
    desc: "High-performance personal site with 3D elements and smooth framer motion animations.",
    category: "web-platforms",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    link: "https://github.com/Krishdshah/portfoliov2",
    icon: Github
  },
  {
    title: "Airline Ticket Booking",
    desc: "Desktop app for flight management with a robust MySQL backend for transaction handling.",
    category: "web-platforms",
    tags: ["Python", "Tkinter", "MySQL"],
    link: "https://github.com/Krishdshah/Airline-ticket-booking",
    icon: Github
  },
  {
    title: "Sudoku Checker",
    desc: "Algorithmic tool to validate Sudoku puzzles using efficient row/column/grid checking logic.",
    category: "dev-tools",
    tags: ["Python", "Algorithms"],
    link: "https://github.com/Krishdshah/SUDOKU-CHECKER",
    icon: Github
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-agents', label: 'AI & Agents' },
  { id: 'web-platforms', label: 'Web Platforms' },
  { id: 'dev-tools', label: 'Developer Tools' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFlagship = flagshipProjects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const filteredOther = otherProjects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <section className="w-full bg-transparent min-h-screen">
      {/* Title Header */}
      <div className="border-b border-border-custom px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-foreground">
            Works & Systems
          </h2>
          <p className="text-sm font-serif text-foreground/60 mt-2 max-w-lg">
            A showcase of agentic workflows, distributed web systems, and utility tools engineered for reliability and scale.
          </p>
        </div>
        <span className="text-[10px] font-mono font-semibold tracking-widest text-foreground/45 uppercase">
          2022&mdash;2026
        </span>
      </div>

      {/* Interactive Tabs */}
      <div className="px-6 md:px-12 lg:px-20 py-6 border-b border-border-custom bg-background/50 backdrop-blur-md sticky top-14 z-30 flex items-center overflow-x-auto scrollbar-none gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase rounded-sm transition-colors duration-300 ${
                isActive ? "text-background" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCategoryHighlight"
                  className="absolute inset-0 bg-foreground rounded-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Showcase Content */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-16 flex flex-col gap-16 md:gap-24">
        {/* Flagship Projects Section */}
        {filteredFlagship.length > 0 && (
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A83E2D]" />
              <h3 className="text-xs font-mono font-bold tracking-widest text-foreground/40 uppercase">
                Flagship Implementations
              </h3>
            </div>

            <div className="flex flex-col gap-12 md:gap-20">
              <AnimatePresence mode="popLayout">
                {filteredFlagship.map((project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-visible"
                  >
                    <BorderGlow
                      borderRadius={16}
                      backgroundColor="var(--card)"
                      className="w-full"
                    >
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <div className="flex items-baseline gap-3 flex-wrap">
                              <span className="font-script text-3xl md:text-4xl text-[#C2410C] dark:text-[#F97316] font-normal select-none">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
                                {project.title}
                              </h4>
                              {/* Live stat status indicator */}
                              <span className="inline-flex items-center px-2 py-0.5 border border-border-custom bg-background-muted/40 text-[9px] font-mono font-bold tracking-widest text-foreground/60 uppercase rounded-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7CB342] animate-pulse mr-1.5" />
                                {project.stats}
                              </span>
                            </div>
                            <p className="text-xs font-mono font-semibold tracking-wider text-foreground/50 mt-1 uppercase">
                              {project.tagline}
                            </p>
                          </div>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 border border-border-custom text-[8px] font-mono font-bold tracking-widest text-foreground/55 uppercase bg-background-muted rounded-sm"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stack Flow Diagram */}
                        <div className="border-y border-border-custom py-6 flex flex-col gap-3">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-foreground/40 uppercase">
                            Architecture Flow
                          </span>
                          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-none py-2 px-1">
                            {project.stackFlow.map((step, idx) => {
                              const IconComponent = step.icon;
                              return (
                                <React.Fragment key={idx}>
                                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 shrink-0 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border-custom bg-card flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] font-mono font-bold text-foreground/60 group-hover:text-foreground transition-colors duration-200 uppercase tracking-wider">
                                      {step.tool}
                                    </span>
                                  </div>
                                  {idx < project.stackFlow.length - 1 && (
                                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/30 animate-pulse shrink-0 self-center -translate-y-2.5 sm:-translate-y-3" />
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>

                        {/* Problem & Solution Split Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border-l-2 border-[#A83E2D]/55 pl-4 flex flex-col gap-2">
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#A83E2D] uppercase">
                              The Challenge
                            </span>
                            <p className="font-serif text-sm leading-relaxed text-foreground/80">
                              {project.problem}
                            </p>
                          </div>

                          <div className="border-l-2 border-[#7CB342]/65 pl-4 flex flex-col gap-2">
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#7CB342] uppercase">
                              The Solution
                            </span>
                            <p className="font-serif text-sm leading-relaxed text-foreground/80">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 flex-wrap pt-2">
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 border border-foreground bg-foreground text-background text-xs font-mono font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-all duration-300 rounded-sm"
                            >
                              Live Demo ↗
                            </a>
                          )}
                          {project.links.git !== "#" && (
                            <a
                              href={project.links.git}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border-custom bg-transparent text-foreground text-xs font-mono font-bold uppercase tracking-widest hover:border-foreground transition-all duration-300 rounded-sm"
                            >
                              <Github className="w-3.5 h-3.5" /> Repository
                            </a>
                          )}
                        </div>
                      </div>
                    </BorderGlow>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Other Projects Section */}
        {filteredOther.length > 0 && (
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-foreground/45" />
              <h3 className="text-xs font-mono font-bold tracking-widest text-foreground/40 uppercase">
                Research & Tools Archive
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredOther.map((project, idx) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.a
                      layout
                      key={project.title}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group block relative overflow-visible hover:-translate-y-1.5 transition-all duration-300"
                    >
                      <BorderGlow
                        borderRadius={12}
                        backgroundColor="var(--card)"
                        className="w-full h-full"
                      >
                        <div className="p-6 flex flex-col justify-between h-full min-h-[220px]">
                          <div>
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                              <span className="px-2.5 py-0.5 border border-border-custom text-[8px] font-mono font-bold tracking-widest text-foreground/50 uppercase rounded-sm bg-background-muted/40">
                                {project.category}
                              </span>
                              <IconComponent className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors duration-200" />
                            </div>

                            {/* Title & Desc */}
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="font-script text-xl text-[#C2410C] dark:text-[#F97316] font-normal select-none">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <h4 className="font-serif text-lg font-semibold text-foreground leading-tight group-hover:text-[#A83E2D] transition-colors duration-200">
                                {project.title}
                              </h4>
                            </div>
                            <p className="font-serif text-[13px] text-foreground/60 mt-2.5 leading-relaxed">
                              {project.desc}
                            </p>
                          </div>

                          {/* Footer tags */}
                          <div className="flex flex-wrap gap-1 mt-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 border border-border-custom/50 text-[7px] font-mono font-semibold tracking-wider text-foreground/50 uppercase rounded-xs bg-card"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </BorderGlow>
                    </motion.a>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
