'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, X, Home, FolderGit2, Github, User, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { id: 'home', icon: Home, label: 'Home', href: '/', color: 'bg-blue-500' },
  { id: 'work', icon: FolderGit2, label: 'Projects', href: '/work', color: 'bg-purple-500' },
  { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/Krishdshah', color: 'bg-gray-700', external: true },
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thekrishdshah/', color: 'bg-blue-700', external: true },
  { id: 'about', icon: User, label: 'About', href: '/about', color: 'bg-green-600' },
  { id: 'contact', icon: Mail, label: 'Contact', href: 'mailto:thekrishdshahbhs@gmail.com', color: 'bg-red-500' },
];

export default function HexMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Hexagon Clip Path (Standard Pointy Top)
  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <>
      {/* 1. Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-brand-accent text-white rounded-full shadow-2xl hover:bg-white hover:text-brand-accent transition-colors duration-300 hover:scale-110 active:scale-95"
      >
        <Grid size={24} />
      </button>

      {/* 2. Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* 3. The Hexagon Ring Container */}
            {/* We use a fixed size relative container to center the ring */}
            <div 
              className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item, index) => {
                // --- THE FIX: MATH-BASED POSITIONING ---
                // We divide a circle (360deg or 2*PI radians) by 6 items.
                // We offset by -PI/2 to make the first item start at the top (12 o'clock).
                const totalItems = menuItems.length;
                const radius = 140; // Distance from center (in pixels)
                const angle = (index * 2 * Math.PI) / totalItems - Math.PI / 2;
                
                // Calculate exact X and Y coordinates
                // We use 'translate' so we don't worry about screen size
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      x: x, 
                      y: y 
                    }}
                    exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    transition={{ 
                      delay: index * 0.05, 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                    className="absolute w-24 h-28 md:w-28 md:h-32"
                  >
                    <Link 
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="group w-full h-full flex flex-col items-center justify-center text-white transition-transform hover:scale-110"
                      style={{ clipPath: hexClipPath }}
                    >
                      {/* Background Layer */}
                      <div className={`absolute inset-0 ${item.color} opacity-20 group-hover:opacity-90 transition-opacity duration-300`} />
                      
                      {/* Glass Border Effect */}
                      <div className="absolute inset-[1px] bg-brand-dark/40 backdrop-blur-sm group-hover:bg-transparent transition-colors duration-300" style={{ clipPath: hexClipPath }} />
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <item.icon size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover:text-white transition-colors">
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