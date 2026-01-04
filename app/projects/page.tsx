'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink, Cpu, Database, Globe, Layers, Code2, Terminal, Zap, Puzzle } from 'lucide-react';
import Link from 'next/link';

// --- 1. FLAGSHIP PROJECTS (Deep Dives with Architecture) ---
const flagshipProjects = [
  {
    id: "fintech-agent",
    title: "FinTech Agent Bot",
    tagline: "Enterprise Financial AI Agent",
    problem: "Static LLMs hallucinate on real-time financial data and cannot execute secure banking transactions.",
    solution: "Engineered an agentic workflow using Google ADK to route queries. The agent intelligently selects tools (Stock API, Transaction Engine) based on user intent.",
    // Visualizing the "Stack Flow"
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
      git: "#" // No public repo link provided in your data
    },
    stats: "Reduced Support Tix"
  }
];

// --- 2. STANDARD PROJECTS (Grid) ---
const otherProjects = [
  {
    title: "Sign Sync",
    desc: "ML system converting sign language to text/speech for the speech-impaired. Real-time CV pipeline.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    link: "https://github.com/Laksh718/SignLang-To-Text-And-Speech",
    icon: ExternalLink
  },
  {
    title: "See My Folder Structure",
    desc: "VS Code extension to visualize and export project directory trees. Published on Marketplace.",
    tags: ["VS Code API", "TypeScript", "Tooling"],
    link: "https://marketplace.visualstudio.com/items?itemName=Krishdshah.see-my-folder-structure",
    icon: Puzzle // Special icon for Extension
  },
  {
    title: "Portfolio V2",
    desc: "High-performance personal site with 3D elements and smooth framer motion animations.",
    tags: ["React", "Vite", "Three.js"],
    link: "https://github.com/Krishdshah/portfoliov2",
    icon: Github
  },
  {
    title: "Airline Ticket Booking",
    desc: "Desktop app for flight management with a robust MySQL backend for transaction handling.",
    tags: ["Python", "Tkinter", "MySQL"],
    link: "https://github.com/Krishdshah/Airline-ticket-booking",
    icon: Github
  },
  {
    title: "Sudoku Checker",
    desc: "Algorithmic tool to validate Sudoku puzzles using efficient row/column/grid checking logic.",
    tags: ["Python", "Algorithms"],
    link: "https://github.com/Krishdshah/SUDOKU-CHECKER",
    icon: Github
  }
];

export default function Work() {
  return (
    // Note: Removed 'bg-brand-dark' to let global glow show through
    <div className="min-h-screen p-4 md:p-12 text-gray-300 pb-32">
      
      {/* 1. HEADER */}
      <div className="max-w-6xl mx-auto mb-16">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            Engineering <span className="text-brand-accent">Log</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            A selection of complex systems I have architected. <br/>
            Focusing on <span className="text-white">AI Agents</span>, <span className="text-white">RAG Pipelines</span>, and <span className="text-white">Developer Tools</span>.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* 2. FLAGSHIP PROJECTS (Detailed Case Studies) */}
        <section className="space-y-12">
          {flagshipProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                
                {/* Left: Context & Problem */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold border border-brand-accent/20">
                         CASE STUDY
                       </span>
                       <span className="text-xs font-mono text-green-400 flex items-center gap-1">
                         <Zap size={12} /> {project.stats}
                       </span>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-lg text-gray-400 font-medium">{project.tagline}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                      <h3 className="text-xs font-mono text-red-400 uppercase tracking-wider mb-1">The Challenge</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                      <h3 className="text-xs font-mono text-green-400 uppercase tracking-wider mb-1">The Solution</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.links.git !== "#" && (
                      <a href={project.links.git} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                        <Github size={18} /> Code
                      </a>
                    )}
                    {project.links.demo !== "#" && (
                      <a href={project.links.demo} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Architecture & Tech */}
                <div className="flex flex-col justify-between space-y-8">
                  
                  {/* Visual Architecture Flow */}
                  <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xs font-mono text-gray-500 uppercase mb-6 flex items-center gap-2">
                      <Terminal size={14} /> System Architecture
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      {project.stackFlow.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex flex-col items-center gap-2">
                            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-brand-accent">
                              <step.icon size={20} />
                            </div>
                            <span className="text-[10px] font-mono text-gray-400">{step.tool}</span>
                          </div>
                          {i !== project.stackFlow.length - 1 && (
                            <ArrowRight size={16} className="text-gray-600 -mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div>
                    <h3 className="text-xs font-mono text-gray-500 uppercase mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-sm text-gray-300 hover:text-white transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </section>


        {/* 3. OTHER PROJECTS (Grid) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-brand-accent" />
            <h2 className="text-2xl font-display font-bold text-white">More Experiments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <motion.a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <project.icon size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-gray-500 bg-black/20 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}