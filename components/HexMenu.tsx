'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, X, Home, FolderGit2, Github, User, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { 
    id: 'home', 
    icon: Home, 
    label: 'Home', 
    href: '/', 
    textColor: 'text-blue-400 group-hover:text-blue-300',
    borderGlow: 'from-blue-500/40 to-blue-300/10 group-hover:from-blue-500 group-hover:to-blue-300',
    glowColor: 'rgba(59, 130, 246, 0.4)'
  },
  { 
    id: 'work', 
    icon: FolderGit2, 
    label: 'Projects', 
    href: '/projects', 
    textColor: 'text-purple-400 group-hover:text-purple-300',
    borderGlow: 'from-purple-500/40 to-purple-300/10 group-hover:from-purple-500 group-hover:to-purple-300',
    glowColor: 'rgba(168, 85, 247, 0.4)'
  },
  { 
    id: 'github', 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/Krishdshah', 
    external: true, 
    textColor: 'text-slate-300 group-hover:text-white',
    borderGlow: 'from-slate-500/30 to-slate-400/10 group-hover:from-slate-300 group-hover:to-white',
    glowColor: 'rgba(255, 255, 255, 0.15)'
  },
  { 
    id: 'linkedin', 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/thekrishdshah/', 
    external: true, 
    textColor: 'text-sky-400 group-hover:text-sky-300',
    borderGlow: 'from-sky-500/40 to-sky-300/10 group-hover:from-sky-500 group-hover:to-sky-300',
    glowColor: 'rgba(14, 165, 233, 0.4)'
  },
  { 
    id: 'about', 
    icon: User, 
    label: 'About', 
    href: '/about', 
    textColor: 'text-emerald-400 group-hover:text-emerald-300',
    borderGlow: 'from-emerald-500/40 to-emerald-300/10 group-hover:from-emerald-500 group-hover:to-emerald-300',
    glowColor: 'rgba(16, 185, 129, 0.4)'
  },
  { 
    id: 'contact', 
    icon: Mail, 
    label: 'Contact', 
    href: 'mailto:thekrishdshahbhs@gmail.com', 
    textColor: 'text-rose-400 group-hover:text-rose-300',
    borderGlow: 'from-rose-500/40 to-rose-300/10 group-hover:from-rose-500 group-hover:to-rose-300',
    glowColor: 'rgba(244, 63, 94, 0.4)'
  },
];

export default function HexMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <>
      {/* Floating Glass Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-slate-950/80 backdrop-blur-md text-slate-300 border border-white/10 rounded-full shadow-2xl hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <Grid size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            {/* Circular Hex Layout */}
            <div 
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center scale-75 md:scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item, index) => {
                const totalItems = menuItems.length;
                const radius = 140; 
                const angle = (index * 2 * Math.PI) / totalItems - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{ scale: 1, opacity: 1, x: x, y: y }}
                    exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    transition={{ delay: index * 0.04, type: "spring", stiffness: 260, damping: 22 }}
                    className="absolute w-24 h-28 md:w-28 md:h-32"
                  >
                    <Link 
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="group w-full h-full flex flex-col items-center justify-center text-slate-300 transition-all duration-300 hover:scale-105"
                      style={{ clipPath: hexClipPath }}
                    >
                      {/* Glow Backdrop */}
                      <div 
                        className="absolute inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none -z-10"
                        style={{
                          background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`
                        }}
                      />

                      {/* The colored border outline (uses clip-path card showing through gap) */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${item.borderGlow} opacity-30 group-hover:opacity-100 transition-all duration-300`} 
                        style={{ clipPath: hexClipPath }} 
                      />
                      
                      {/* Translucent Obsidian Glass base */}
                      <div 
                        className="absolute inset-[1.5px] bg-slate-950/90 backdrop-blur-md group-hover:bg-slate-900/80 transition-colors duration-300" 
                        style={{ clipPath: hexClipPath }} 
                      />
                      
                      {/* Inner contents */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <item.icon size={20} className={`${item.textColor} transition-all duration-300 group-hover:scale-110`} />
                        <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-500 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}