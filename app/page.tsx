'use client';

import { ArrowRight, Code2, Rocket, Sparkles, Cpu, Terminal, ArrowUpRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const focusAreas = [
    { icon: Cpu, title: 'AI Systems', desc: 'Agentic workflows & RAG pipelines' },
    { icon: Terminal, title: 'Full Stack', desc: 'High-performance React & Python services' },
    { icon: Sparkles, title: 'Dev Experience', desc: 'Custom VS Code tooling & extensions' }
  ];

  return (
    <div className="relative flex-grow flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-transparent">
      
      {/* Background Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl bg-slate-100/60 dark:bg-slate-950/45 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-[2.5rem] p-6 md:p-14 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden"
      >
        
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* LEFT SIDE: Text Content (Col-span 7) */}
        <div className="z-10 space-y-8 order-2 lg:order-1 text-center lg:text-left lg:col-span-7">
          <div className="space-y-4">
            
            {/* Status tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-mono font-semibold mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.1] tracking-tight"
            >
              Hi, I’m <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Krish D Shah.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              I am a Software Engineer and AI developer crafting robust, production-grade applications that bridge smart models with scalable infrastructure.
            </motion.p>
          </div>

          {/* Focus Areas Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left"
          >
            {focusAreas.map((item, i) => (
              <div 
                key={i}
                className="p-4 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all group"
              >
                <div className="p-2 w-fit bg-slate-100 dark:bg-slate-900 rounded-xl border border-black/5 dark:border-white/5 text-blue-500 dark:text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                  <item.icon size={16} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start items-center"
          >
            <a href="/projects" className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20 active:scale-95">
              Explore Projects
              <ArrowRight size={18} />
            </a>
            
            <a href="/about" className="w-full sm:w-auto px-8 py-4 bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-semibold rounded-2xl hover:bg-black/[0.08] dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              About & Contact
            </a>

            <a 
              href="/resume" 
              target="_blank"
              className="w-full sm:w-auto px-6 py-4 bg-transparent text-slate-500 dark:text-slate-400 font-semibold rounded-2xl hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText size={16} />
              Resume
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Image Area (Col-span 5) */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center lg:col-span-5 py-4">
            
            {/* The Image Container with tilt glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-10 w-60 h-64 md:w-72 md:h-[22rem] bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
              <img 
                src="/me.jpg" 
                alt="Krish D Shah" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </motion.div>

            {/* Glowing Backdrop Behind Image */}
            <div className="absolute w-60 h-64 md:w-72 md:h-[22rem] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-[2.5rem] blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />

            {/* Badge 1: Projects */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 md:bottom-2 md:-left-6 z-20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border border-black/10 dark:border-white/10 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl scale-90 md:scale-100"
            >
              <div className="bg-blue-500/10 p-2.5 rounded-xl text-blue-500 dark:text-blue-400 border border-blue-500/20">
                <Code2 size={20} />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">10+</div>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">SHIPPED PROJECTS</div>
              </div>
            </motion.div>


        </div>

      </motion.div>
    </div>
  );
}