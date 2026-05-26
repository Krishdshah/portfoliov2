"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-8 md:px-14">
      <Link
        href="/"
        className="font-mono text-xs tracking-[0.35em] text-white/90"
      >
        KRISH_D_SHAH
      </Link>

      <nav className="hidden items-center gap-10 font-mono text-[11px] uppercase tracking-[0.25em] text-white/55 md:flex">
        <Link
          href="/"
          className="transition-colors hover:text-white"
        >
          Engine
        </Link>

        <Link
          href="/experiments"
          className="transition-colors hover:text-white"
        >
          Lab
        </Link>

        <Link
          href="/archive"
          className="transition-colors hover:text-white"
        >
          Archive
        </Link>

        <Link
          href="/origin"
          className="transition-colors hover:text-white"
        >
          About
        </Link>
      </nav>

      <Link
        href="/contact"
        className="
          border
          border-cyan-400/20
          bg-cyan-400/5
          px-4
          py-2
          font-mono
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-cyan-200
          transition-all
          hover:bg-cyan-400/10
        "
      >
        ESTABLISH LINK
      </Link>
    </header>
  );
}