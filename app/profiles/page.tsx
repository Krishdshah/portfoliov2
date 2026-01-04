'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added 'Database' (Kaggle) and 'Code' (LeetCode) to imports
import { ArrowLeft, Github, Linkedin, Twitter, Mail, ExternalLink, PenTool, Hash, Search, Puzzle, BookOpen, Database, Code } from 'lucide-react';
import Link from 'next/link';

// --- DATA: PROFILES (Added Kaggle & LeetCode) ---
const profiles = [
  {
    id: "github",
    name: "GitHub",
    handle: "@Krishdshah",
    url: "https://github.com/Krishdshah",
    icon: Github,
    color: "text-white", 
    borderColor: "group-hover:border-white/80", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    bgGradient: "from-gray-800/80 to-black/80",
    stats: "Code & OSS",
    tags: ["code", "dev", "git"]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/thekrishdshah",
    url: "https://in.linkedin.com/in/thekrishdshah",
    icon: Linkedin,
    color: "text-[#0077b5]", 
    borderColor: "group-hover:border-[#0077b5]", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]",
    bgGradient: "from-[#0077b5]/20 to-black/80",
    stats: "Network",
    tags: ["work", "social", "job"]
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "thekdshah",
    url: "https://leetcode.com/u/thekdshah/",
    icon: Code,
    color: "text-[#FFA116]", // Official LeetCode Orange
    borderColor: "group-hover:border-[#FFA116]", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(255,161,22,0.3)]",
    bgGradient: "from-orange-900/30 to-black/80",
    stats: "DSA & Algo",
    tags: ["dsa", "problems", "logic"]
  },
  {
    id: "medium",
    name: "Medium",
    handle: "@thekrishdshahbhs", 
    url: "https://medium.com/@thekrishdshahbhs", 
    icon: PenTool,
    color: "text-yellow-400", 
    borderColor: "group-hover:border-yellow-400", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]",
    bgGradient: "from-yellow-900/30 to-black/80",
    stats: "Stories",
    tags: ["writing", "blog", "articles"]
  },
  {
    id: "kaggle",
    name: "Kaggle",
    handle: "krishdshah",
    url: "https://www.kaggle.com/krishdshah",
    icon: Database,
    color: "text-[#20BEFF]", 
    borderColor: "group-hover:border-[#20BEFF]", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(32,190,255,0.3)]",
    bgGradient: "from-cyan-900/30 to-black/80",
    stats: "Data Science",
    tags: ["data", "ml", "models"]
  },
  {
    id: "devto",
    name: "Dev.to",
    handle: "@thekrishdshah", 
    url: "https://dev.to/thekrishdshah", 
    icon: BookOpen,
    color: "text-indigo-400", 
    borderColor: "group-hover:border-indigo-400", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]",
    bgGradient: "from-indigo-900/30 to-black/80",
    stats: "Tech Blogs",
    tags: ["writing", "blog", "articles"]
  },
  {
    id: "vs-marketplace",
    name: "VS Marketplace",
    handle: "krishdshah", 
    url: "https://marketplace.visualstudio.com/publishers/krishdshah", 
    icon: Puzzle,
    color: "text-orange-500", 
    borderColor: "group-hover:border-orange-500", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    bgGradient: "from-orange-900/30 to-black/80",
    stats: "Extensions",
    tags: ["extensions", "vscode", "tools"]
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    handle: "@ikrishshah",
    url: "https://x.com/ikrishshah", 
    icon: Twitter,
    color: "text-sky-400", 
    borderColor: "group-hover:border-sky-400", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    bgGradient: "from-sky-900/30 to-black/80",
    stats: "Thoughts",
    tags: ["social", "tweets", "news"]
  },
  {
    id: "email",
    name: "Email",
    handle: "Contact Me",
    url: "mailto:thekrishdshahbhs@gmail.com",
    icon: Mail,
    color: "text-red-400", 
    borderColor: "group-hover:border-red-400", 
    shadow: "group-hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]",
    bgGradient: "from-red-900/30 to-black/80",
    stats: "Inquiry",
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

  const cutCornerStyle = {
    clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)"
  };

  return (
    <div className="min-h-screen bg-brand-dark p-4 md:p-12 text-gray-300 pb-32">
      
      <div className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-2"
            >
              Command Center
            </motion.h1>
            <p className="text-gray-400">My digital footprint.</p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Filter (e.g. 'data')..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 rounded-none focus:outline-none focus:border-brand-accent/50 transition-all placeholder:text-gray-600 font-mono text-sm"
              style={{ clipPath: "polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)" }} 
            />
          </div>
        </div>
      </div>

      {/* 2. PROFILES LIST */}
      <div className="max-w-4xl mx-auto space-y-4">
        <AnimatePresence mode='popLayout'>
          {filteredProfiles.map((profile) => (
            <motion.a
              layout
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`
                group relative block w-full
                transition-all duration-300
              `}
              style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }} 
            >
              
              {/* Main Content Container */}
              <div 
                className="relative h-24 md:h-28 w-full bg-black/40 backdrop-blur-md" 
                style={cutCornerStyle}
              >
                
                {/* 1. Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${profile.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* 2. The Border */}
                <div 
                  className={`absolute inset-0 border border-white/10 ${profile.borderColor} transition-colors duration-300 z-20 pointer-events-none`} 
                  style={cutCornerStyle} 
                />

                {/* 3. The Glow Effect */}
                <div className={`absolute inset-0 ${profile.shadow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} style={cutCornerStyle} />

                {/* 4. Content */}
                <div className="relative z-30 h-full flex items-center justify-between px-6 md:px-10">
                  
                  {/* Left: Icon + Text */}
                  <div className="flex items-center gap-6">
                    {/* Icon Box */}
                    <div className={`
                      p-3 bg-black/50 border border-white/10 
                      ${profile.color} group-hover:scale-110 transition-transform duration-300
                    `}
                    style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 30%)" }}
                    >
                      <profile.icon size={28} />
                    </div>

                    <div>
                      <h2 className={`font-display font-bold text-2xl text-white group-hover:tracking-wider transition-all duration-300`}>
                        {profile.name}
                      </h2>
                      <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-gray-500 group-hover:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Hash size={12} /> {profile.handle.replace('@','').replace('/in/','')}
                        </span>
                        <span className="text-gray-700">|</span>
                        <span className={`${profile.color} opacity-80`}>{profile.stats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Arrow */}
                  <div className="text-gray-600 group-hover:text-white transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300">
                    <ExternalLink size={24} />
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </AnimatePresence>
        
        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-mono">
             {`// NO_SIGNALS_FOUND for "${query}"`}
          </div>
        )}
      </div>

    </div>
  );
}