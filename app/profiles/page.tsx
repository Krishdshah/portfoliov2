'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Twitter, Mail, ExternalLink, PenTool, Hash, Search, Puzzle, BookOpen, Database, Code, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// --- DATA: PROFILES ---
const profiles = [
  {
    id: "github",
    name: "GitHub",
    handle: "@Krishdshah",
    url: "https://github.com/Krishdshah",
    icon: Github,
    color: "text-white group-hover:text-white", 
    borderColor: "group-hover:border-white/30", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]",
    glowColor: "rgba(255,255,255,0.02)",
    stats: "Code & OSS",
    tags: ["code", "dev", "git"]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/thekrishdshah",
    url: "https://in.linkedin.com/in/thekrishdshah",
    icon: Linkedin,
    color: "text-[#0A66C2] group-hover:text-white", 
    borderColor: "group-hover:border-[#0A66C2]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(10,102,194,0.1)]",
    glowColor: "rgba(10,102,194,0.05)",
    stats: "Network",
    tags: ["work", "social", "job"]
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "thekdshah",
    url: "https://leetcode.com/u/thekdshah/",
    icon: Code,
    color: "text-[#FFA116] group-hover:text-white", 
    borderColor: "group-hover:border-[#FFA116]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,161,22,0.1)]",
    glowColor: "rgba(255,161,22,0.05)",
    stats: "DSA & Problem Solving",
    tags: ["dsa", "problems", "logic"]
  },
  {
    id: "kaggle",
    name: "Kaggle",
    handle: "krishdshah",
    url: "https://www.kaggle.com/krishdshah",
    icon: Database,
    color: "text-[#20BEFF] group-hover:text-white", 
    borderColor: "group-hover:border-[#20BEFF]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(32,190,255,0.1)]",
    glowColor: "rgba(32,190,255,0.05)",
    stats: "AI | ML Models & Datasets",
    tags: ["data", "ml", "models"]
  },
  {
    id: "medium",
    name: "Medium",
    handle: "@thekrishdshahbhs", 
    url: "https://medium.com/@thekrishdshahbhs", 
    icon: PenTool,
    color: "text-[#FFC017] group-hover:text-white", 
    borderColor: "group-hover:border-[#FFC017]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,192,23,0.1)]",
    glowColor: "rgba(255,192,23,0.05)",
    stats: "Tech Writing",
    tags: ["writing", "blog", "articles"]
  },
  {
    id: "devto",
    name: "Dev.to",
    handle: "@thekrishdshah", 
    url: "https://dev.to/thekrishdshah", 
    icon: BookOpen,
    color: "text-[#A5B4FC] group-hover:text-white", 
    borderColor: "group-hover:border-[#A5B4FC]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(165,180,252,0.1)]",
    glowColor: "rgba(165,180,252,0.05)",
    stats: "Developer Insights",
    tags: ["writing", "blog", "articles"]
  },
  {
    id: "vs-marketplace",
    name: "VS Marketplace",
    handle: "krishdshah", 
    url: "https://marketplace.visualstudio.com/publishers/krishdshah", 
    icon: Puzzle,
    color: "text-[#F97316] group-hover:text-white", 
    borderColor: "group-hover:border-[#F97316]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
    glowColor: "rgba(249,115,22,0.05)",
    stats: "VS Code Tooling",
    tags: ["extensions", "vscode", "tools"]
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    handle: "@ikrishshah",
    url: "https://x.com/ikrishshah", 
    icon: Twitter,
    color: "text-[#38BDF8] group-hover:text-white", 
    borderColor: "group-hover:border-[#38BDF8]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]",
    glowColor: "rgba(56,189,248,0.05)",
    stats: "Tech Discussions",
    tags: ["social", "tweets", "news"]
  },
  {
    id: "email",
    name: "Email",
    handle: "thekrishdshahbhs@gmail.com",
    url: "mailto:thekrishdshahbhs@gmail.com",
    icon: Mail,
    color: "text-[#F87171] group-hover:text-white", 
    borderColor: "group-hover:border-[#F87171]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(248,113,113,0.1)]",
    glowColor: "rgba(248,113,113,0.05)",
    stats: "Collaboration & Inquiries",
    tags: ["contact", "mail", "message"]
  }
];

export default function Profiles() {
  const [query, setQuery] = useState("");

  const filteredProfiles = profiles.filter((profile) => {
    const search = query.toLowerCase();
    return (
      profile.name.toLowerCase().includes(search) ||
      profile.handle.toLowerCase().includes(search) ||
      profile.tags.some(tag => tag.includes(search))
    );
  });

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-12 text-slate-300 pb-32 relative">
      
      {/* Background radial blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HEADER */}
      <div className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          BACK_TO_HOME
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display font-extrabold text-4xl md:text-5xl text-white mb-3"
            >
              Command Center
            </motion.h1>
            <p className="text-slate-400 font-sans">Access my digital channels, open-source code repositories, and technical writings.</p>
          </div>

          {/* Glowing Command Search Bar */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Filter by skill, tag, platform..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-900 border border-white/5 text-white pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500/40 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all placeholder:text-slate-600 font-sans text-sm"
            />
          </div>
        </div>
      </div>

      {/* 2. PROFILES LIST */}
      <div className="max-w-4xl mx-auto space-y-4">
        <AnimatePresence mode='popLayout'>
          {filteredProfiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.a
                layout
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`
                  group relative block w-full bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5 md:p-6
                  hover:bg-slate-900/10 hover:scale-[1.01] transition-all duration-300 shadow-md ${profile.borderColor} ${profile.shadow}
                `}
                style={{
                  '--hover-glow': profile.glowColor
                } as any}
              >
                {/* Custom inner glow background on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 50%, ${profile.glowColor} 0%, transparent 50%)`
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  
                  {/* Left content */}
                  <div className="flex items-center gap-5">
                    {/* Icon frame */}
                    <div className={`
                      p-3 rounded-xl bg-slate-900 border border-white/5 
                      ${profile.color} group-hover:bg-white/[0.04] group-hover:border-white/10 group-hover:scale-105 transition-all duration-300
                    `}>
                      <Icon size={22} />
                    </div>

                    <div className="text-left">
                      <h2 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                        {profile.name}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs md:text-sm font-sans text-slate-500 group-hover:text-slate-400">
                        <span className="flex items-center gap-0.5 font-mono text-[11px] bg-slate-900/60 px-1.5 py-0.5 rounded border border-white/5">
                          <Hash size={10} /> {profile.handle.replace('@','').replace('/in/','')}
                        </span>
                        <span className="hidden md:inline text-slate-700">|</span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{profile.stats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="text-slate-600 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300">
                    <ExternalLink size={18} />
                  </div>

                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
        
        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-16 text-slate-600 font-mono text-sm border border-dashed border-white/5 rounded-2xl">
             {`// NO_SIGNALS_FOUND_FOR: "${query}"`}
          </div>
        )}
      </div>

    </div>
  );
}