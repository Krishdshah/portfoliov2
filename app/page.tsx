'use client';

import { ArrowRight, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    // FIX 1: Reverted to 'flex-grow' so it fits perfectly between Navbar and Footer on Desktop.
    // We utilize 'flex-col' to ensure centering works in the available space.
    <div className="relative flex-grow flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden bg-brand-dark">
      
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-brand-accent/20 rounded-full blur-[80px] md:blur-[128px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        // FIX 2: Added 'md:min-h-[600px]' to restore the grand feel on laptop screens.
        // Kept 'w-full max-w-7xl' to ensure it doesn't stretch too wide on ultra-wide monitors.
        className="w-full max-w-7xl md:min-h-[600px] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
      >
        
        {/* LEFT SIDE: Text Content */}
        <div className="z-10 space-y-6 order-2 lg:order-1 text-center lg:text-left">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              // Mobile: text-4xl | Laptop/Desktop: text-7xl (Restored original size)
              className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Hi! I’m <br />
              <span className="text-brand-accent">Krish.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              I am a Software Engineer and AI enthusiast. I build modern websites and intelligent applications using React, Python, and Next.js.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start"
          >
            <a href="/work" className="px-6 py-3 md:px-8 md:py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-brand-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              My Projects
              <ArrowRight size={20} />
            </a>
            
            <a href="/about" className="px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Image Area */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center">
            
            {/* The Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              // Mobile: w-60 | Laptop: w-80 (Restored original size)
              className="relative z-10 w-60 h-64 md:w-80 md:h-96 bg-gray-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
            >
              <img 
                src="/me.jpg" 
                alt="Krish D Shah" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Badge 1: Projects */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:left-0 z-20 bg-brand-dark/90 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-xl scale-90 md:scale-100"
            >
              <div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                <Code2 size={20} />
              </div>
              <div>
                <div className="text-lg font-bold text-white">10+</div>
                <div className="text-[10px] text-gray-400">Projects</div>
              </div>
            </motion.div>

             {/* Badge 2: Open to Work */}
             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 md:top-6 md:-right-4 z-20 bg-brand-dark/90 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-xl scale-90 md:scale-100"
            >
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                <Rocket size={20} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400">Status</div>
                <div className="text-xs font-bold text-white">Open to Work</div>
              </div>
            </motion.div>

        </div>

      </motion.div>
    </div>
  );
}