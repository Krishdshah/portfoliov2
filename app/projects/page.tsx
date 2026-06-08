'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink, Cpu, Database, Globe, Layers, Code2, Terminal, Zap, Puzzle, Server } from 'lucide-react';
import Link from 'next/link';

// --- 1. FLAGSHIP PROJECTS (With Category and Architecture) ---
const flagshipProjects = [
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

// --- 2. STANDARD PROJECTS ---
const otherProjects = [
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

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredFlagship = flagshipProjects.filter(p => 
    activeFilter === 'all' || p.category === activeFilter
  );

  const filteredOther = otherProjects.filter(p => 
    activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <div className="min-h-screen p-4 md:p-12 text-slate-300 pb-32 relative">
      
      {/* Background radial blurs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          BACK_TO_HOME
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Engineering <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Log</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
              A comprehensive showcase of production systems, automated workflows, AI integrations, and developer toolkits.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 p-1.5 bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl w-fit self-start md:self-end"
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-pill"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* 2. FLAGSHIP PROJECTS SECTION */}
        <AnimatePresence mode="popLayout">
          {filteredFlagship.length > 0 && (
            <motion.section 
              layout
              className="space-y-10"
            >
              {filteredFlagship.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-10 hover:border-blue-500/20 hover:bg-slate-900/20 transition-all duration-500 relative overflow-hidden group shadow-xl"
                >
                  {/* Glowing background hint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                    
                    {/* Left side: Context, Challenge, Solution (Col-span 7) */}
                    <div className="space-y-6 lg:col-span-7">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold tracking-wider uppercase border border-blue-500/15">
                            CASE STUDY
                          </span>
                          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                            <Zap size={12} /> {project.stats}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-2 leading-tight">
                          {project.title}
                        </h2>
                        <p className="text-base text-slate-400 font-medium">{project.tagline}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                          <h3 className="text-[10px] font-mono text-rose-400 uppercase tracking-widest mb-1.5 font-bold">The Challenge</h3>
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">{project.problem}</p>
                        </div>
                        <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                          <h3 className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1.5 font-bold">The Solution</h3>
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-1">
                        {project.links.git !== "#" && (
                          <a 
                            href={project.links.git} 
                            target="_blank" 
                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-950 font-bold text-sm rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
                          >
                            <Github size={16} /> Codebase
                          </a>
                        )}
                        {project.links.demo !== "#" && (
                          <a 
                            href={project.links.demo} 
                            target="_blank" 
                            className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all"
                          >
                            <ExternalLink size={16} /> Live Project <ArrowRight size={14} className="opacity-60" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right side: System flow diagram & tech stack (Col-span 5) */}
                    <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                      
                      {/* Flow Diagram Block */}
                      <div className="bg-slate-950/80 rounded-2xl p-5 border border-white/5 relative overflow-hidden">
                        <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                          <Server size={12} className="text-blue-500" /> SYSTEM ARCHITECTURE PIPELINE
                        </h3>
                        
                        <div className="flex items-center justify-between gap-1 relative py-2">
                          
                          {/* Moving gradient connector line behind */}
                          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[2px] bg-slate-800 z-0 overflow-hidden">
                            <motion.div 
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                              className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                            />
                          </div>

                          {project.stackFlow.map((step, i) => {
                            const Icon = step.icon;
                            return (
                              <div key={i} className="flex flex-col items-center gap-2 z-10 relative">
                                <div className="p-3 bg-slate-900 border border-white/10 rounded-xl text-blue-400 group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all">
                                  <Icon size={18} />
                                </div>
                                <span className="text-[9px] font-mono text-slate-400 text-center truncate max-w-[70px]">{step.tool}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="space-y-2">
                        <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">TECHNOLOGY MATRIX</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-xs text-slate-300 font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>


        {/* 3. ADDITIONAL EXPERIMENTS SECTION */}
        <AnimatePresence mode="popLayout">
          {filteredOther.length > 0 && (
            <motion.section layout className="space-y-6">
              <div className="flex items-center gap-3">
                <Code2 size={20} className="text-blue-400" />
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-white">More Experiments</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredOther.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <motion.a 
                      key={project.title}
                      layout
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      className="group p-6 bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl hover:bg-slate-900/30 hover:border-white/10 transition-all flex flex-col justify-between shadow-md h-full"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                            {project.title}
                          </h3>
                          <Icon size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-xs md:text-sm text-slate-400 mb-6 leading-relaxed font-sans">
                          {project.desc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        
        {/* Empty state */}
        {filteredFlagship.length === 0 && filteredOther.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-mono">
            {`// NO_PROJECTS_FOUND_FOR_CATEGORY: "${activeFilter}"`}
          </div>
        )}

      </div>
    </div>
  );
}