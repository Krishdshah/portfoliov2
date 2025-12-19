'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto bg-brand-dark/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Krish D Shah | CSE
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Krishdshah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/thekrishdshah/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a 
            href="mailto:thekrishdshahbhs@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}