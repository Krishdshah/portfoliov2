"use client";

import React, { useState, useEffect } from "react";
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
  X,
  Compass,
  CheckCircle2,
  Activity,
  Maximize2,
  GitBranch,
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

interface ProjectArtifact {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  category: "AI" | "WEB" | "COMPUTER VISION" | "DEV TOOLS" | "EXPERIMENTS";
  statusLabel: string;
  statusColor: string;
  tags: string[];
  problem: string;
  solution: string;
  stackFlow: StackStep[];
  tech: string[];
  links: {
    demo?: string;
    git?: string;
  };
  stats: string;
  desktopSpatial: {
    left: string; // percentage or px
    top: string;  // px offset in spatial canvas
    rotation: number; // degrees
    width: string; // card width style
    accentColor: string;
  };
}

// --- Spatial Projects Data Archive ---
const projectArtifacts: ProjectArtifact[] = [
  {
    id: "fintech-agent",
    number: "01",
    slug: "fintech-agent-bot",
    title: "FINTECH AGENT BOT",
    tagline: "Enterprise Financial AI Agent & Tool Execution Workflow",
    category: "AI",
    statusLabel: "SYSTEM ONLINE",
    statusColor: "#10B981", // Emerald
    tags: ["RAG", "LLM", "AGENTS", "ADK"],
    problem: "Static LLMs hallucinate on real-time financial market data and cannot safely execute transactional banking commands.",
    solution: "Engineered an autonomous agentic workflow using Google ADK to route queries. The agent dynamically binds financial API tools (Stock Feeds, Ledger Operations) based on intent verification.",
    stackFlow: [
      { tool: "User Input", icon: Globe },
      { tool: "Google ADK", icon: Cpu },
      { tool: "Gemini 1.5", icon: Zap },
      { tool: "Tool Execution", icon: Terminal },
    ],
    tech: ["Python", "Google ADK", "Gemini API", "FastAPI", "Financial APIs"],
    links: {
      demo: "https://genai-mjy8.vercel.app/",
      git: "https://github.com/archeeetah/GenAI.git",
    },
    stats: "Automated Workflows",
    desktopSpatial: {
      left: "8%",
      top: "60px",
      rotation: -2,
      width: "420px",
      accentColor: "#E86F2D",
    },
  },
  {
    id: "aarush-va",
    number: "02",
    slug: "aarush-virtual-assistant",
    title: "AARUSH VIRTUAL ASSISTANT",
    tagline: "RAG-Powered Intelligent Event Knowledge System",
    category: "AI",
    statusLabel: "RETRIEVAL ACTIVE",
    statusColor: "#38BDF8", // Sky
    tags: ["LANGCHAIN", "CHROMADB", "FASTAPI", "RAG"],
    problem: "Over 20,000 tech fest attendees struggled to retrieve event schedules, venue maps, and rules buried in static PDFs.",
    solution: "Architected a hybrid vector-search RAG pipeline embedding multi-document PDFs into ChromaDB with semantic reranking for instant context response.",
    stackFlow: [
      { tool: "React UI", icon: Layers },
      { tool: "FastAPI Engine", icon: Code2 },
      { tool: "ChromaDB", icon: Database },
      { tool: "LLM Inference", icon: Cpu },
    ],
    tech: ["LangChain", "ChromaDB", "FastAPI", "React", "Python"],
    links: {
      demo: "https://ava.aaruush.org/chat",
    },
    stats: "Reduced Support Tix",
    desktopSpatial: {
      left: "54%",
      top: "20px",
      rotation: 2.5,
      width: "390px",
      accentColor: "#0284C7",
    },
  },
  {
    id: "janrakshak",
    number: "03",
    slug: "janrakshak",
    title: "JANRAKSHAK",
    tagline: "AI-Powered Public Safety & Emergency Dispatch Platform",
    category: "COMPUTER VISION",
    statusLabel: "PIPELINE ACTIVE",
    statusColor: "#F59E0B", // Amber
    tags: ["COMPUTER VISION", "FIREBASE", "REACT", "DISPATCH"],
    problem: "Citizens experience crucial delays reporting emergencies and dispatchers lack real-time visual crisis analysis.",
    solution: "Built an integrated emergency response platform featuring incident reporting, vision-assisted hazard tagging, and automated dispatch routing.",
    stackFlow: [
      { tool: "Citizen Node", icon: Globe },
      { tool: "Incident Portal", icon: Cpu },
      { tool: "AI Processing", icon: Zap },
      { tool: "Dispatch Matrix", icon: Terminal },
    ],
    tech: ["React", "Firebase", "JavaScript", "Cloud Functions", "Firestore"],
    links: {
      demo: "https://janrakshak.web.app/",
    },
    stats: "Safety Automation",
    desktopSpatial: {
      left: "58%",
      top: "430px",
      rotation: -1.8,
      width: "410px",
      accentColor: "#D97706",
    },
  },
  {
    id: "loksetu",
    number: "04",
    slug: "loksetu",
    title: "LOKSETU",
    tagline: "Citizen-Government Public Service Bridge",
    category: "WEB",
    statusLabel: "PWA ONLINE",
    statusColor: "#10B981", // Emerald
    tags: ["GOVERNANCE", "PWA", "REACT", "FIRESTORE"],
    problem: "Citizens encounter bureaucratic barriers identifying eligible government schemes and tracking grievance statuses.",
    solution: "Designed a centralized civic tech portal streamlining scheme discovery through algorithmic eligibility matching and direct grievance tracking.",
    stackFlow: [
      { tool: "Citizen", icon: Globe },
      { tool: "LokSetu Portal", icon: Cpu },
      { tool: "Grievance Engine", icon: Zap },
      { tool: "Government Node", icon: Terminal },
    ],
    tech: ["React", "Firebase", "JavaScript", "Firestore", "Progressive Web App"],
    links: {
      demo: "https://loksetu.web.app/",
    },
    stats: "Digital Governance",
    desktopSpatial: {
      left: "6%",
      top: "480px",
      rotation: 1.8,
      width: "400px",
      accentColor: "#059669",
    },
  },
  {
    id: "sign-sync",
    number: "05",
    slug: "sign-sync",
    title: "SIGN SYNC",
    tagline: "Real-Time Sign Language Translation & Speech Synthesis",
    category: "COMPUTER VISION",
    statusLabel: "CV MODEL READY",
    statusColor: "#8B5CF6", // Purple
    tags: ["OPENCV", "TENSORFLOW", "PYTHON", "ACCESSIBILITY"],
    problem: "Mute and speech-impaired individuals face continuous communication barriers in daily public interactions.",
    solution: "Engineered a real-time computer vision sign language pipeline detecting gesture keypoints and translating them instantly into text-to-speech audio.",
    stackFlow: [
      { tool: "Camera Stream", icon: Globe },
      { tool: "OpenCV Pipeline", icon: Cpu },
      { tool: "TensorFlow Model", icon: Zap },
      { tool: "Speech Output", icon: Terminal },
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "PyTTSx3"],
    links: {
      git: "https://github.com/Laksh718/SignLang-To-Text-And-Speech",
    },
    stats: "Realtime Vision",
    desktopSpatial: {
      left: "14%",
      top: "900px",
      rotation: -2.2,
      width: "380px",
      accentColor: "#7C3AED",
    },
  },
  {
    id: "folder-structure",
    number: "06",
    slug: "see-my-folder-structure",
    title: "SEE MY FOLDER STRUCTURE",
    tagline: "VS Code Extension for Workspace Architecture Visualization",
    category: "DEV TOOLS",
    statusLabel: "PUBLISHED TOOL",
    statusColor: "#6366F1", // Indigo
    tags: ["VS CODE API", "TYPESCRIPT", "TOOLING", "MARKETPLACE"],
    problem: "Developers lacked a clean, customizable tool to export structured directory trees for documentation and code reviews.",
    solution: "Built and published an official VS Code extension that generates clean ASCII and Markdown tree visualizers directly from the workspace sidebar.",
    stackFlow: [
      { tool: "VS Code Core", icon: Layers },
      { tool: "Extension API", icon: Code2 },
      { tool: "Tree Generator", icon: Database },
      { tool: "Markdown Export", icon: Cpu },
    ],
    tech: ["TypeScript", "VS Code Extension API", "Node.js", "npm"],
    links: {
      demo: "https://marketplace.visualstudio.com/items?itemName=Krishdshah.see-my-folder-structure",
    },
    stats: "Marketplace Published",
    desktopSpatial: {
      left: "56%",
      top: "870px",
      rotation: 1.5,
      width: "410px",
      accentColor: "#4F46E5",
    },
  },
  {
    id: "portfolio-v2",
    number: "07",
    slug: "portfolio-v2",
    title: "PORTFOLIO V2",
    tagline: "Spatial Digital Archive & Modern Web Architecture",
    category: "WEB",
    statusLabel: "LIVE DEPLOY",
    statusColor: "#E11D48", // Rose
    tags: ["NEXT.JS", "TAILWIND", "FRAMER MOTION", "TYPESCRIPT"],
    problem: "Traditional portfolio web layouts feel flat, linear, and uninspiring.",
    solution: "Designed a spatial 2D archive featuring custom kinetic grids, interactive dock navigation, theme transitions, and case study overlays.",
    stackFlow: [
      { tool: "Next.js App", icon: Globe },
      { tool: "Tailwind CSS", icon: Cpu },
      { tool: "Framer Motion", icon: Zap },
      { tool: "Vercel Edge", icon: Terminal },
    ],
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    links: {
      git: "https://github.com/Krishdshah/portfoliov2",
    },
    stats: "Spatial UX",
    desktopSpatial: {
      left: "50%",
      top: "1280px",
      rotation: -1.4,
      width: "400px",
      accentColor: "#E11D48",
    },
  },
  {
    id: "airline-booking",
    number: "08",
    slug: "airline-ticket-booking",
    title: "AIRLINE BOOKING SYSTEM",
    tagline: "Transactional Desktop Flight Management System",
    category: "EXPERIMENTS",
    statusLabel: "ARCHIVED SYSTEM",
    statusColor: "#64748B", // Slate
    tags: ["PYTHON", "TKINTER", "MYSQL", "DATABASE"],
    problem: "Complex flight reservation engines require robust ACID transaction handling and relational integrity across seats and tickets.",
    solution: "Built a Python desktop app integrated with a custom MySQL schema to manage real-time seat assignments, passenger records, and ticket generation.",
    stackFlow: [
      { tool: "Tkinter GUI", icon: Layers },
      { tool: "Python Logic", icon: Code2 },
      { tool: "MySQL Engine", icon: Database },
      { tool: "Ticket Output", icon: Cpu },
    ],
    tech: ["Python", "Tkinter", "MySQL", "Relational Database Design"],
    links: {
      git: "https://github.com/Krishdshah/Airline-ticket-booking",
    },
    stats: "ACID Database",
    desktopSpatial: {
      left: "8%",
      top: "1310px",
      rotation: 2.1,
      width: "390px",
      accentColor: "#475569",
    },
  },
];

const categoryFilters = [
  { id: "ALL", label: "ALL OBJECTS" },
  { id: "AI", label: "AI & AGENTS" },
  { id: "WEB", label: "WEB PLATFORMS" },
  { id: "COMPUTER VISION", label: "COMPUTER VISION" },
  { id: "DEV TOOLS", label: "DEV TOOLS" },
  { id: "EXPERIMENTS", label: "EXPERIMENTS" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedArtifact, setSelectedArtifact] = useState<ProjectArtifact | null>(null);

  // Esc key listener to close modal and preserve scroll position
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedArtifact(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredArtifacts = projectArtifacts.filter(
    (item) => activeCategory === "ALL" || item.category === activeCategory
  );

  return (
    <div className="relative w-full bg-transparent text-foreground overflow-hidden min-h-screen">
      
      {/* --- BACKGROUND SPATIAL BLUEPRINT & GRID --- */}
      <div className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-20 z-0 overflow-hidden">
        {/* Fine Dot Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: `32px 32px`,
          }}
        />
        {/* Subtle Faint Crosshair Marks */}
        <div className="absolute top-24 left-12 font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
          SYS_CANVAS // 48° 12&apos; N 16° 22&apos; E
        </div>
        <div className="absolute top-24 right-12 font-mono text-[10px] text-foreground/40 uppercase tracking-widest hidden md:block">
          SCALE: 1:1 // SPATIAL ARCHIVE
        </div>
      </div>

      {/* --- TOP HEADER & SPATIAL CONTROL BAR --- */}
      <div className="relative z-20 border-b border-border-custom px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-background/80 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E86F2D] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/60">
              SPATIAL WORKSPACE ARCHIVE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
            Works &amp; Systems
          </h2>
          <p className="text-sm font-serif text-foreground/70 mt-2 max-w-xl">
            Explore Krish&apos;s digital workspace. Projects exist as individual technical artifacts distributed across a 2D spatial canvas.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
          <div className="font-mono text-xs font-bold tracking-widest text-foreground/50 uppercase">
            ARCHIVE COUNT:{" "}
            <span className="text-foreground font-bold">{filteredArtifacts.length} OBJECTS</span>
          </div>
          <div className="text-[11px] font-mono text-foreground/40 uppercase tracking-wider">
            SCROLL TO EXPLORE ARCHIVE
          </div>
        </div>
      </div>

      {/* --- CATEGORY FILTER TABS --- */}
      <div className="relative z-20 px-6 md:px-12 lg:px-20 py-4 border-b border-border-custom bg-background/70 backdrop-blur-md sticky top-16 flex items-center overflow-x-auto scrollbar-none gap-2">
        {categoryFilters.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-3.5 py-1.5 text-[11px] font-mono font-bold tracking-wider uppercase rounded-xs transition-colors duration-200 shrink-0 ${
                isActive ? "text-background" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeSpatialCategory"
                  className="absolute inset-0 bg-foreground rounded-xs"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* --- DESKTOP 2D SPATIAL CANVAS (lg screens) --- */}
      <div className="hidden lg:block relative z-10 w-full min-h-[1750px] px-8 py-12">
        <AnimatePresence>
          {filteredArtifacts.map((artifact) => {
            const pos = artifact.desktopSpatial;

            return (
              <motion.div
                key={artifact.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute pointer-events-auto"
                style={{
                  left: pos.left,
                  top: pos.top,
                  width: pos.width,
                  transform: `rotate(${pos.rotation}deg)`,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    rotate: 0,
                    y: -6,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  onClick={() => setSelectedArtifact(artifact)}
                  className="cursor-pointer group"
                >
                  <BorderGlow borderRadius={8} className="p-6 transition-all duration-300 shadow-md hover:shadow-xl bg-card border border-border-custom/80">
                    
                    {/* Top Artifact Badge & Status Indicator */}
                    <div className="flex items-center justify-between pb-4 border-b border-border-custom/40">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sm font-bold px-2 py-0.5 rounded-xs bg-foreground/10 text-foreground">
                          {artifact.number}
                        </span>
                        <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-foreground/60">
                          [{artifact.category}]
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: artifact.statusColor }}
                        />
                        <span className="font-mono text-[9px] font-bold tracking-widest text-foreground/50">
                          {artifact.statusLabel}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="py-4">
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground group-hover:text-[#E86F2D] transition-colors duration-200">
                        {artifact.title}
                      </h3>
                      <p className="font-serif text-sm text-foreground/75 mt-1.5 leading-snug">
                        {artifact.tagline}
                      </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex items-center flex-wrap gap-1.5 py-2">
                      {artifact.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 bg-background border border-border-custom/60 rounded-xs text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 mt-2 border-t border-dashed border-border-custom/40 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold tracking-widest text-foreground/45 group-hover:text-foreground transition-colors">
                        METRIC: {artifact.stats}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#E86F2D] group-hover:translate-x-1 transition-transform duration-200">
                        <span>EXPLORE ARTIFACT</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                  </BorderGlow>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* --- MOBILE / TABLET RESPONSIVE SPATIAL STACK (< lg screens) --- */}
      <div className="lg:hidden relative z-10 px-6 py-8 flex flex-col gap-6">
        <AnimatePresence>
          {filteredArtifacts.map((artifact, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <motion.div
                key={artifact.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedArtifact(artifact)}
                className={`cursor-pointer ${isOdd ? "rotate-1 md:ml-6" : "-rotate-1 md:mr-6"}`}
              >
                <BorderGlow borderRadius={8} className="p-5 bg-card border border-border-custom">
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border-custom/40">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-xs bg-foreground/10 text-foreground">
                        {artifact.number}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-widest text-foreground/60">
                        [{artifact.category}]
                      </span>
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-foreground/50">
                      {artifact.statusLabel}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="py-3">
                    <h3 className="font-serif text-xl font-bold tracking-tight text-foreground">
                      {artifact.title}
                    </h3>
                    <p className="font-serif text-xs text-foreground/75 mt-1 leading-relaxed">
                      {artifact.tagline}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center flex-wrap gap-1.5 py-1">
                    {artifact.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] font-bold px-2 py-0.5 bg-background border border-border-custom/60 rounded-xs text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 mt-2 border-t border-dashed border-border-custom/40 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-foreground/50">
                      {artifact.stats}
                    </span>
                    <div className="flex items-center gap-1 font-mono text-xs font-bold text-[#E86F2D]">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* --- LEVEL 2: EXPANDED CASE STUDY WORKSPACE MODAL --- */}
      <AnimatePresence>
        {selectedArtifact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-auto">
            
            {/* Darkened Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtifact(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-lg"
            />

            {/* Modal Drawer Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-card border-2 border-border-custom rounded-lg shadow-2xl flex flex-col overflow-hidden z-10"
            >
              
              {/* Modal Header Bar */}
              <div className="px-6 py-5 border-b border-border-custom bg-background/90 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold px-2.5 py-1 bg-foreground text-background rounded-xs">
                    {selectedArtifact.number}
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold tracking-widest text-foreground/50 uppercase block">
                      [{selectedArtifact.category}] // {selectedArtifact.statusLabel}
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground">
                      {selectedArtifact.title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-bold tracking-wider uppercase border border-border-custom rounded-xs bg-background hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  <span>RETURN TO ARCHIVE</span>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Case Study Body */}
              <div className="p-6 md:p-10 overflow-y-auto space-y-8 scrollbar-thin">
                
                {/* Tagline & Stat Banner */}
                <div className="p-5 border border-dashed border-border-custom rounded-sm bg-background/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-foreground/50 uppercase">
                      SYSTEM OVERVIEW
                    </span>
                    <p className="font-serif text-lg font-medium text-foreground mt-1">
                      {selectedArtifact.tagline}
                    </p>
                  </div>
                  <div className="px-3.5 py-2 bg-foreground text-background font-mono text-xs font-bold tracking-wider rounded-xs shrink-0">
                    METRIC: {selectedArtifact.stats}
                  </div>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border border-border-custom rounded-sm bg-background/60 flex flex-col gap-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-500 uppercase tracking-wider">
                      <Activity className="w-4 h-4" />
                      <span>THE CHALLENGE</span>
                    </div>
                    <p className="font-serif text-base text-foreground/80 leading-relaxed">
                      {selectedArtifact.problem}
                    </p>
                  </div>

                  <div className="p-6 border border-border-custom rounded-sm bg-background/60 flex flex-col gap-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-500 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>THE ARCHITECTURAL SOLUTION</span>
                    </div>
                    <p className="font-serif text-base text-foreground/80 leading-relaxed">
                      {selectedArtifact.solution}
                    </p>
                  </div>
                </div>

                {/* System Architecture Flow Diagram */}
                <div className="p-6 border border-border-custom rounded-sm bg-background/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-border-custom/40 pb-3">
                    <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/60">
                      SYSTEM ARCHITECTURE FLOW
                    </span>
                    <span className="font-mono text-[10px] text-foreground/40">
                      DATA PIPELINE MODEL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedArtifact.stackFlow.map((step, idx) => {
                      const IconComp = step.icon;
                      return (
                        <div
                          key={idx}
                          className="relative p-4 border border-border-custom rounded-xs bg-card flex flex-col items-center justify-center text-center gap-2 group"
                        >
                          <div className="w-8 h-8 rounded-xs border border-border-custom bg-background flex items-center justify-center text-[#E86F2D]">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-xs font-bold text-foreground">
                            {step.tool}
                          </span>
                          <span className="font-mono text-[9px] text-foreground/40 uppercase">
                            STEP 0{idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Full Stack Badges */}
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/60">
                    TECHNOLOGY &amp; SYSTEM STACK
                  </span>
                  <div className="flex items-center flex-wrap gap-2">
                    {selectedArtifact.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 font-mono text-xs font-bold tracking-wider bg-background border border-border-custom rounded-xs text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Links */}
                <div className="pt-6 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {selectedArtifact.links.demo && (
                      <a
                        href={selectedArtifact.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-xs font-bold tracking-wider uppercase rounded-xs hover:opacity-90 transition-opacity"
                      >
                        <span>EXPLORE DEMO</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {selectedArtifact.links.git && selectedArtifact.links.git !== "#" && (
                      <a
                        href={selectedArtifact.links.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-border-custom bg-background text-foreground font-mono text-xs font-bold tracking-wider uppercase rounded-xs hover:border-foreground transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>SOURCE REPO</span>
                      </a>
                    )}
                  </div>

                  <span className="font-mono text-[10px] text-foreground/40">
                    SYSTEM ID: {selectedArtifact.id}
                  </span>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
