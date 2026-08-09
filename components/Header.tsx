"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-border-custom px-6 md:px-12 lg:px-20 py-5 bg-background">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="text-3xl font-semibold font-serif tracking-tight text-foreground hover:opacity-80 transition-opacity">
          KDS.
        </Link>

        {/* Center Nav */}
        <nav className="flex items-center gap-8 md:gap-12 text-[11px] font-mono tracking-wider font-semibold text-foreground/50">
          <div className="relative py-2">
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-foreground" />
            <a href="#work" className="text-foreground transition-colors">
              WORK
            </a>
          </div>
          <a href="#research" className="hover:text-foreground transition-colors">
            RESEARCH
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            ABOUT
          </a>
          <a href="#now" className="hover:text-foreground transition-colors">
            NOW
          </a>
        </nav>

        {/* Right Nav */}
        <a
          href="#"
          className="text-[11px] font-mono font-semibold tracking-wider text-foreground hover:opacity-75 transition-opacity flex items-center gap-0.5 uppercase"
        >
          Resume <span className="text-[10px]">↗</span>
        </a>
      </div>
    </header>
  );
}
