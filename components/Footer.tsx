'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-auto bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-slate-500 text-xs font-mono">
          © {new Date().getFullYear()} KRISH D SHAH // COMPUTER SCIENCE UNDERGRADUATE
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Krishdshah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-all hover:scale-110 duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/thekrishdshah/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#0A66C2] transition-all hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          
          <a 
            href="mailto:thekrishdshahbhs@gmail.com" 
            className="text-slate-500 hover:text-[#EF4444] transition-all hover:scale-110 duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}