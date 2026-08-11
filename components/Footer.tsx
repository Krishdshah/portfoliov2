"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-6 md:px-12 py-8 border-t border-border-custom/50 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side (Logo & Copyright) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-2xl font-semibold font-serif tracking-tight text-foreground select-none">
            KDS.
          </span>
          <span className="text-[9px] font-mono font-bold tracking-widest text-foreground/45 uppercase mt-1">
            © {new Date().getFullYear()} KDS. Crafted with care & curiosity.
          </span>
        </div>

        {/* Right Side (Socials & Disciplines) */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://in.linkedin.com/in/thekrishdshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/45 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Krishdshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/45 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/ikrishshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/45 hover:text-foreground transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Disciplines */}
          <div className="flex items-center gap-2.5 text-[8px] font-mono font-bold tracking-widest text-foreground/40 uppercase">
            <span>AI/ML</span>
            <span>/</span>
            <span>SOFTWARE</span>
            <span>/</span>
            <span>RESEARCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
