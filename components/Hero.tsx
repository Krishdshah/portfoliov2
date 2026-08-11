"use client";

import React from "react";

// Handwritten Circle Highlight Component
function SketchyCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-2 sm:px-3 py-1 align-baseline">
      <span className="relative z-10 font-script text-4xl sm:text-5xl md:text-7xl lg:text-[84px] text-[#C2410C] font-normal leading-none pr-1">
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
    <span className="relative inline-block px-2 sm:px-3 py-1 align-baseline">
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
    <span className="relative inline-block pb-1.5 sm:pb-2 px-1 align-baseline">
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

// Handwritten Name Signature with curvy underline
function NameSignature() {
  return (
    <div className="relative inline-block select-none">
      <span
        className="font-script text-[32px] sm:text-5xl md:text-7xl lg:text-[84px] leading-none tracking-wide"
        style={{ letterSpacing: "0.01em" }}
      >
        <span className="text-[#7C3AED] dark:text-[#A78BFA]">Krish</span>{" "}
        <span className="text-[#E86F2D]">D</span>{" "}
        <span className="text-foreground">Shah</span>
      </span>
      {/* Curvy sketchy underline */}
      <svg
        className="absolute left-0 w-full overflow-visible pointer-events-none"
        style={{ bottom: "-10px", height: "18px" }}
        viewBox="0 0 260 18"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 2,9 C 18,2 38,16 62,8 C 84,1 106,14 130,8 C 154,2 176,15 200,9 C 218,4 238,13 258,8"
          stroke="#C2410C"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
        {/* second wobble line for extra sketch feel */}
        <path
          d="M 10,13 C 30,8 55,18 85,12 C 112,7 140,17 168,11 C 192,6 220,16 254,11"
          stroke="#C2410C"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

import { FileText } from "lucide-react";
import ProfileDoodle from "./ProfileDoodle";

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

export default function Hero() {
  return (
    <section className="w-full border-b border-border-custom bg-transparent">
      {/* Statement & Badge Container */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          {/* Name signature */}
          <div>
            <NameSignature />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[76px] font-serif leading-[1.25] md:leading-[1.2] tracking-tight font-medium text-foreground">
            I build things that <SketchyCircle>move</SketchyCircle> <br className="hidden lg:inline" />
            from <SketchyBox><span className="text-[#7C3AED] dark:text-[#A78BFA]">idea</span></SketchyBox> · <WavyUnderline><span className="text-[#1B5E20] dark:text-[#4ADE80]">system</span></WavyUnderline> · <span className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-[84px] text-[#E11D48] dark:text-[#FB7185] font-normal leading-none pr-1">product</span>
            <SquigglyArrow />
          </h1>

          {/* Resume & Connect Block */}
          <div className="flex flex-col gap-8 mt-2">
            {/* Resume action */}
            <div className="flex items-center gap-3 sm:gap-5 flex-nowrap">
              <div className="relative group">
                {/* playful rays */}
                <svg
                  className="absolute -top-4 -right-4 w-8 h-8 text-[#E86F2D] pointer-events-none transition-transform duration-300 group-hover:rotate-12"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <line x1="16" y1="3" x2="16" y2="9" />
                  <line x1="26" y1="7" x2="22" y2="11" />
                  <line x1="6" y1="7" x2="10" y2="11" />
                  <line x1="29" y1="17" x2="24" y2="17" />
                </svg>

                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume"
                  className="relative inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-7 py-2.5 sm:py-4 bg-[#23211F] text-white dark:bg-[#EDE8E1] dark:text-[#23211F] border border-[#23211F] dark:border-[#EDE8E1] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase rounded-[3px] shadow-[3px_3px_0px_#E86F2D] sm:shadow-[5px_5px_0px_#E86F2D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#E86F2D] sm:hover:shadow-[3px_3px_0px_#E86F2D] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all duration-150"
                >
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E86F2D]" />
                  <span>VIEW RESUME</span>
                  <span className="ml-0.5 text-[#E86F2D] text-sm sm:text-base leading-none">↗</span>
                </a>
              </div>

              {/* handwritten annotation */}
              <div className="relative flex items-center gap-1 sm:gap-2 select-none shrink-0">
                <svg
                  className="w-10 sm:w-16 h-6 sm:h-9 text-foreground/45 overflow-visible"
                  viewBox="0 0 80 36"
                  fill="none"
                >
                  <path
                    d="M76 9C57 3 48 28 36 17C26 8 39 2 25 12C17 18 10 21 3 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M8 13L3 17L8 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="flex flex-col -rotate-2">
                  <span className="font-script text-[13px] sm:text-lg text-foreground/75 leading-none">
                    click to
                  </span>
                  <span className="font-script text-[13px] sm:text-lg text-foreground/75 leading-none relative inline-block">
                    download
                    <svg
                      className="absolute left-0 -bottom-1 w-full h-1.5 sm:h-2 text-[#E86F2D]"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d="M0 5Q48 0 100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Social / connect row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="flex items-center gap-2 select-none shrink-0">
                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-foreground/50 uppercase">
                  LET'S CONNECT
                </span>
                <div className="w-6 sm:w-10 border-t border-dashed border-border-custom" />
                <div className="h-5 border-r border-border-custom hidden sm:block" />
              </div>

              <div className="relative flex flex-col items-start w-fit">
                <div className="flex items-center gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://in.linkedin.com/in/thekrishdshah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border-custom bg-background/40 text-foreground flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]"
                  >
                    <LinkedinIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-wider opacity-0 group-hover:opacity-60 transition-opacity">
                      LI
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Krishdshah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border-custom bg-background/40 text-foreground flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:border-foreground"
                  >
                    <GithubIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-wider opacity-0 group-hover:opacity-60 transition-opacity">
                      GH
                    </span>
                  </a>

                  {/* X */}
                  <a
                    href="https://x.com/ikrishshah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    title="X / Twitter"
                    className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border-custom bg-background/40 text-foreground flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:border-foreground"
                  >
                    <TwitterIcon className="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px]" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-wider opacity-0 group-hover:opacity-60 transition-opacity">
                      X
                    </span>
                  </a>
                </div>

                {/* hand-drawn underline */}
                <div className="w-full px-1.5 mt-1.5 pointer-events-none select-none">
                  <svg
                    className="w-full h-2.5 text-[#E86F2D]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M1 4C22 7 45 1 65 4C80 6 91 2 99 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Doodle */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <ProfileDoodle />
        </div>
      </div>
    </section>
  );
}