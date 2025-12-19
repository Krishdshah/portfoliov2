'use client';

import { ArrowRight, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-brand-dark">
      
      {/* 1. Background Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[128px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* 2. The Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl min-h-[600px] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        
        {/* LEFT SIDE: Text Content */}
        <div className="z-10 space-y-8 order-2 lg:order-1">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-5xl md:text-7xl text-white leading-tight"
            >
              Hi! I’m <br />
              <span className="text-brand-accent">Krish.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg text-gray-400 max-w-md leading-relaxed"
            >
              I am a Software Engineer and AI enthusiast. I build modern websites and intelligent applications using React, Python, and Next.js.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="/work" className="px-8 py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-brand-accent hover:text-white transition-all duration-300 flex items-center gap-2">
              My Projects
              <ArrowRight size={20} />
            </a>
            
            <a href="/about" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Image Area */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[450px]">
            
            {/* The Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 w-72 h-80 md:w-80 md:h-96 bg-gray-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
            >
              <img 
                src="../me.jpg"
                alt="Krish D Shah" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Floating Badge 1: Bottom Left (Moved outward) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 left-0 md:left-4 z-20 bg-brand-dark/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                <Code2 size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-white">10+</div>
                <div className="text-xs text-gray-400">Projects Built</div>
              </div>
            </motion.div>

             {/* Floating Badge 2: Top Right (Moved outward) */}
             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-4 md:-right-8 z-20 bg-brand-dark/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                <Rocket size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-400">Status</div>
                <div className="text-sm font-bold text-white">Open to Work</div>
              </div>
            </motion.div>

        </div>

      </motion.div>
    </div>
  );
}