'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink, Hash, Search, Puzzle, BookOpen, Database, Code } from 'lucide-react';
import Link from 'next/link';

// --- DATA: PROFILES ---
const profiles = [
  {
    id: "github",
    name: "GitHub",
    handle: "@Krishdshah",
    url: "https://github.com/Krishdshah",
    icon: Github,
    color: "text-slate-950 dark:text-white group-hover:text-slate-950 dark:group-hover:text-white", 
    borderColor: "group-hover:border-black/30 dark:group-hover:border-white/30", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(0,0,0,0.02)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]",
    glowColor: "rgba(255,255,255,0.02)",
    brandColor: "bg-slate-950 dark:bg-white",
    stats: "Code & OSS",
    tags: ["code", "dev", "git"]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/thekrishdshah",
    url: "https://in.linkedin.com/in/thekrishdshah",
    icon: Linkedin,
    color: "text-[#0A66C2] dark:text-[#0A66C2] group-hover:text-[#0A66C2] dark:group-hover:text-white", 
    borderColor: "group-hover:border-[#0A66C2]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(10,102,194,0.1)]",
    glowColor: "rgba(10,102,194,0.05)",
    brandColor: "bg-[#0A66C2]",
    stats: "Network",
    tags: ["work", "social", "job"]
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "thekdshah",
    url: "https://leetcode.com/u/thekdshah/",
    icon: Code,
    color: "text-[#FFA116] dark:text-[#FFA116] group-hover:text-[#FFA116] dark:group-hover:text-white", 
    borderColor: "group-hover:border-[#FFA116]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,161,22,0.1)]",
    glowColor: "rgba(255,161,22,0.05)",
    brandColor: "bg-[#FFA116]",
    stats: "DSA & Problem Solving",
    tags: ["dsa", "problems", "logic"]
  },
  {
    id: "kaggle",
    name: "Kaggle",
    handle: "krishdshah",
    url: "https://www.kaggle.com/krishdshah",
    icon: Database,
    color: "text-[#20BEFF] dark:text-[#20BEFF] group-hover:text-[#20BEFF] dark:group-hover:text-white", 
    borderColor: "group-hover:border-[#20BEFF]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(32,190,255,0.1)]",
    glowColor: "rgba(32,190,255,0.05)",
    brandColor: "bg-[#20BEFF]",
    stats: "AI | ML Models & Datasets",
    tags: ["data", "ml", "models"]
  },
  {
    id: "medium",
    name: "Medium",
    handle: "@thekrishdshahbhs", 
    url: "https://medium.com/@thekrishdshahbhs", 
    icon: BookOpen,
    color: "text-[#FFC017] dark:text-[#FFC017] group-hover:text-[#FFC017] dark:group-hover:text-white", 
    borderColor: "group-hover:border-[#FFC017]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,192,23,0.1)]",
    glowColor: "rgba(255,192,23,0.05)",
    brandColor: "bg-[#FFC017]",
    stats: "Tech Writing",
    tags: ["writing", "blog", "articles"]
  },
  {
    id: "devto",
    name: "Dev.to",
    handle: "@thekrishdshah", 
    url: "https://dev.to/thekrishdshah", 
    icon: BookOpen,
    color: "text-slate-950 dark:text-[#A5B4FC] group-hover:text-slate-950 dark:group-hover:text-white", 
    borderColor: "group-hover:border-black/20 dark:group-hover:border-[#A5B4FC]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(165,180,252,0.1)]",
    glowColor: "rgba(165,180,252,0.05)",
    brandColor: "bg-slate-900 dark:bg-[#A5B4FC]",
    stats: "Developer Insights",
    tags: ["writing", "blog", "articles"]
  },
  {
    id: "vs-marketplace",
    name: "VS Marketplace",
    handle: "krishdshah", 
    url: "https://marketplace.visualstudio.com/publishers/krishdshah", 
    icon: Puzzle,
    color: "text-[#F97316] dark:text-[#F97316] group-hover:text-[#F97316] dark:group-hover:text-white", 
    borderColor: "group-hover:border-[#F97316]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
    glowColor: "rgba(249,115,22,0.05)",
    brandColor: "bg-[#F97316]",
    stats: "VS Code Tooling",
    tags: ["extensions", "vscode", "tools"]
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    handle: "@ikrishshah",
    url: "https://x.com/ikrishshah", 
    icon: Github,
    color: "text-slate-950 dark:text-[#38BDF8] group-hover:text-slate-950 dark:group-hover:text-white", 
    borderColor: "group-hover:border-black/20 dark:group-hover:border-[#38BDF8]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]",
    glowColor: "rgba(56,189,248,0.05)",
    brandColor: "bg-[#38BDF8]",
    stats: "Tech Discussions",
    tags: ["social", "tweets", "news"]
  },
  {
    id: "email",
    name: "Email",
    handle: "thekrishdshahbhs [at] gmail.com",
    url: "#",
    icon: Mail,
    color: "text-[#F87171] dark:text-[#F87171] group-hover:text-[#F87171] dark:group-hover:text-white", 
    borderColor: "group-hover:border-[#F87171]/45", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(248,113,113,0.1)]",
    glowColor: "rgba(248,113,113,0.05)",
    brandColor: "bg-[#F87171]",
    stats: "Collaboration & Inquiries",
    tags: ["contact", "mail", "message"]
  }
];

export default function ProfilesClient() {
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
    <div className="min-h-screen bg-transparent p-4 md:p-12 text-slate-700 dark:text-slate-300 pb-32 relative">
      
      {/* Background radial blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          BACK_TO_HOME
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display font-extrabold text-4xl md:text-5xl text-slate-950 dark:text-white mb-3"
            >
              Command Center
            </motion.h1>
            <p className="text-slate-600 dark:text-slate-400 font-sans">Access my digital channels, open-source code repositories, and technical writings.</p>
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
              className="w-full bg-slate-100 dark:bg-slate-900 border border-black/5 dark:border-white/5 text-slate-900 dark:text-white pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500/40 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-sans text-sm"
            />
          </div>
        </div>
      </div>

      {/* 2. PROFILES GRID */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode='popLayout'>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProfiles.map((profile, index) => {
              const Icon = profile.icon;
              
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (profile.id === "email") {
                  e.preventDefault();
                  const user = "thekrishdshahbhs";
                  const domain = "gmail.com";
                  window.location.href = `mailto:${user}@${domain}`;
                }
              };

              return (
                <motion.a
                  layout
                  key={profile.id}
                  href={profile.url}
                  onClick={handleClick}
                  target={profile.id === "email" ? undefined : "_blank"}
                  rel={profile.id === "email" ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative flex flex-col justify-between h-[230px] bg-slate-100/60 dark:bg-slate-950/40 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl p-6 hover:bg-slate-200/40 dark:hover:bg-slate-900/10 hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {/* Brand highlight border top */}
                  <div 
                    className={`absolute top-0 left-8 right-8 h-[3px] rounded-b-full transition-opacity duration-300 opacity-60 group-hover:opacity-100 ${profile.brandColor}`}
                  />

                  {/* Top row: Icon and ExternalLink */}
                  <div className="flex items-start justify-between w-full">
                    <div className={`p-3 rounded-2xl bg-slate-200/50 dark:bg-slate-900 border border-black/5 dark:border-white/5 ${profile.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={22} />
                    </div>
                    
                    <div className="text-slate-400 dark:text-slate-600 group-hover:text-slate-950 dark:group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                      <ExternalLink size={18} />
                    </div>
                  </div>

                  {/* Middle row: Brand name & Handle & Stats */}
                  <div className="text-left mt-4 flex-grow flex flex-col justify-center">
                    <h2 className="font-display font-extrabold text-xl text-slate-950 dark:text-white group-hover:text-blue-500 transition-colors leading-none">
                      {profile.name}
                    </h2>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-500 mt-1.5 block">
                      @{profile.handle.replace('@','').replace('/in/','')}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mt-2 block">
                      {profile.stats}
                    </span>
                  </div>

                  {/* Bottom row: Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-black/[0.03] dark:border-white/[0.03]">
                    {profile.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-900/60 px-2 py-0.5 rounded border border-black/5 dark:border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>

                </motion.a>
              );
            })}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-mono text-sm border border-dashed border-black/5 dark:border-white/5 rounded-2xl">
             {`// NO_SIGNALS_FOUND_FOR: "${query}"`}
          </div>
        )}
      </div>

    </div>
  );
}
