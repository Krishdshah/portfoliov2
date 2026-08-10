"use client";

import React from "react";

// Handwritten Circle Highlight Component for "intelligent"
function SketchyEllipse({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3.5 py-0.5 align-baseline mx-1">
      <span className="relative z-10 font-script text-4xl md:text-5xl lg:text-[60px] text-[#E86F2D] font-normal leading-none">
        {children}
      </span>
      <svg
        className="absolute inset-0 w-full h-full text-[#E86F2D] overflow-visible pointer-events-none -translate-y-1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 5,50 C 5,20 25,5 55,5 C 88,5 98,25 98,50 C 98,75 75,95 45,95 C 15,95 2,75 5,50 C 7,32 25,12 55,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Handwritten Orange Underline for "work."
function OrangeUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1 pb-1 align-baseline">
      <span className="relative z-10 font-script text-4xl md:text-5xl lg:text-[60px] text-[#E86F2D] font-normal leading-none">
        {children}
      </span>
      <svg
        className="absolute left-0 right-0 -bottom-2 w-full h-4 text-[#E86F2D] overflow-visible pointer-events-none"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 0,5 C 25,9 50,2 75,6 C 88,7 96,3 100,5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 10,8 C 35,6 65,9 90,7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </span>
  );
}

export default function Quote() {
  return (
    <section className="relative w-full border-b border-border-custom bg-transparent px-6 py-20 md:py-28 flex flex-col items-center justify-center text-center overflow-hidden select-none">
      {/* Background SVG Decorations */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 1200 480"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <defs>
          <pattern
            id="quote-grid-dots"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" className="fill-foreground/20" />
          </pattern>
        </defs>

        {/* TOP-LEFT DECORATION */}
        {/* Soft circle */}
        <circle cx="75" cy="110" r="32" className="fill-[#EBE3D8]/50 dark:fill-white/[0.04]" />
        {/* Dot grid */}
        <rect x="65" y="75" width="55" height="55" fill="url(#quote-grid-dots)" />
        {/* Orange sparkle star */}
        <path
          d="M 85,145 C 86,141 88,139 92,138 C 88,137 86,135 85,131 C 84,135 82,137 78,138 C 82,139 84,141 85,145 Z"
          fill="#E86F2D"
        />

        {/* TOP-RIGHT DECORATION (Sunburst Rays) */}
        <g stroke="#E86F2D" strokeWidth="2.2" strokeLinecap="round">
          <line x1="1090" y1="90" x2="1096" y2="103" />
          <line x1="1108" y1="85" x2="1110" y2="100" />
          <line x1="1124" y1="97" x2="1116" y2="108" />
        </g>

        {/* BOTTOM-LEFT DECORATION (Loopy Hand-Drawn Squiggle) */}
        <path
          d="M 45,355 C 90,340 120,315 140,335 C 155,350 130,365 155,355 C 180,345 190,330 210,350 C 225,365 205,370 230,365 Q 260,360 285,370"
          className="stroke-foreground/70 dark:stroke-foreground/50"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Small orange end-dot */}
        <circle cx="291" cy="370" r="2.5" fill="#E86F2D" />

        {/* BOTTOM-CENTER DIVIDER */}
        <line
          x1="480"
          y1="355"
          x2="570"
          y2="355"
          className="stroke-foreground/25 dark:stroke-foreground/15"
          strokeWidth="1"
        />
        {/* Center Orange Sparkle Star */}
        <path
          d="M 600,355 C 601,349 604,346 610,345 C 604,344 601,341 600,335 C 599,341 596,344 590,345 C 596,346 599,349 600,355 Z"
          fill="#E86F2D"
        />
        <line
          x1="630"
          y1="355"
          x2="720"
          y2="355"
          className="stroke-foreground/25 dark:stroke-foreground/15"
          strokeWidth="1"
        />

        {/* BOTTOM-RIGHT DECORATION */}
        {/* Soft circle */}
        <circle cx="1100" cy="370" r="38" className="fill-[#EBE3D8]/50 dark:fill-white/[0.04]" />
        {/* Dot grid */}
        <rect x="1055" y="330" width="70" height="70" fill="url(#quote-grid-dots)" />
      </svg>

      {/* TOP CENTER QUOTATION MARKS */}
      <div className="mb-2 select-none">
        <span className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none text-[#E5DCD0]/75 dark:text-white/10 tracking-widest font-normal">
          “
        </span>
      </div>

      {/* QUOTE HEADING */}
      <h2 className="relative z-10 text-3xl md:text-4xl lg:text-[50px] font-serif font-normal leading-[1.35] text-foreground max-w-5xl tracking-tight">
        I care less about making something look <SketchyEllipse>intelligent</SketchyEllipse>{" "}
        <br className="hidden md:inline" />
        and more about making it <OrangeUnderline>work.</OrangeUnderline>
      </h2>
    </section>
  );
}
