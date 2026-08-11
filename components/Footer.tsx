"use client";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Krishdshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/45 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/ikrishshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/45 hover:text-foreground transition-colors"
              aria-label="X / Twitter"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
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
