"use client";

import React from "react";

// Handwritten Circle Highlight Component
function SketchyCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 py-1 align-baseline">
      <span className="relative z-10 font-script text-5xl md:text-7xl lg:text-[84px] text-[#C2410C] font-normal leading-none pr-1">
        {children}
      </span>
      <svg
        className="absolute inset-0 w-full h-full text-[#E8590C]/80 overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 5,50 C 5,20 30,5 65,5 C 92,5 98,25 98,50 C 98,75 80,95 45,95 C 15,95 2,75 8,50 C 10,38 22,22 45,15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Handwritten Box Highlight Component
function SketchyBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 py-1 align-baseline">
      <span className="relative z-10 font-serif font-semibold">
        {children}
      </span>
      <svg
        className="absolute inset-0 w-full h-full text-[#D05A87]/85 overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 3,6 L 98,3 C 99,25 97,65 96,94 L 5,97 C 3,75 4,35 3,6 M 6,10 L 95,7 L 93,92 L 9,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Handwritten Underline Highlight Component
function WavyUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block pb-2 px-1 align-baseline">
      <span className="relative z-10 font-serif font-semibold">
        {children}
      </span>
      <svg
        className="absolute left-0 right-0 bottom-0 w-full h-3 text-[#7CB342]/90 overflow-visible pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M 2,3 C 20,8 35,-2 55,3 C 75,8 88,-1 98,4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

// Handwritten Squiggly Arrow Component
function SquigglyArrow() {
  return (
    <span className="inline-block relative w-12 h-6 ml-2 -translate-y-1 align-middle select-none">
      <svg
        className="absolute inset-0 w-full h-full text-[#F5B041] overflow-visible pointer-events-none"
        viewBox="0 0 50 20"
        fill="none"
      >
        <path
          d="M 2,10 C 10,3 18,17 28,10 C 34,7 38,10 44,11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 38,5 L 45,11 L 39,17"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="w-full border-b border-border-custom bg-background">
      {/* Statement & Badge Container */}
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-28 flex flex-col gap-16 md:gap-20">
        <h1 className="text-4xl md:text-6xl lg:text-[76px] font-serif leading-[1.25] md:leading-[1.2] tracking-tight font-medium text-foreground max-w-6xl">
          I build things that <SketchyCircle>move</SketchyCircle> <br className="hidden lg:inline" />
          from <SketchyBox>idea</SketchyBox> · <WavyUnderline>system</WavyUnderline> · <span className="font-script text-5xl md:text-7xl lg:text-[84px] text-foreground font-normal leading-none pr-1">product</span>
          <SquigglyArrow />.
        </h1>
        
        <div>
          <div className="inline-flex items-center px-3.5 py-1.5 bg-[#EBE6DE]/40 border border-border-custom rounded-sm text-[10px] font-mono tracking-widest text-foreground font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E54848] animate-pulse mr-2" />
            AVAILABLE FOR ARCHITECTURE DESIGN
          </div>
        </div>
      </div>
    </section>
  );
}
