"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full border-b border-border-custom grid grid-cols-1 md:grid-cols-3 bg-background">
      {/* Left Column (Statement & Badge) */}
      <div className="col-span-1 md:col-span-2 px-6 py-12 md:px-12 lg:pl-20 md:py-20 flex flex-col justify-between gap-12">
        <h1 className="text-4xl md:text-6xl lg:text-[76px] font-serif leading-[1.08] tracking-tight font-medium text-foreground max-w-4xl">
          I build things that <span className="italic font-light">move</span> from <span className="font-semibold">idea</span> · <span className="font-semibold">system</span> · <span className="font-semibold">product</span>.
        </h1>
        
        <div>
          <div className="inline-flex items-center px-3.5 py-1.5 bg-[#EBE6DE]/40 border border-border-custom rounded-sm text-[10px] font-mono tracking-widest text-foreground font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E54848] animate-pulse mr-2" />
            AVAILABLE FOR ARCHITECTURE DESIGN
          </div>
        </div>
      </div>

      {/* Right Column (FIG. 00 Container) */}
      <div className="col-span-1 border-t md:border-t-0 md:border-l border-border-custom relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 bg-[#FAF8F5]">
        <span className="absolute top-4 right-4 text-[10px] font-mono tracking-wider font-semibold text-foreground/40">
          FIG. 00
        </span>
        <div className="w-full h-full relative aspect-square max-w-[280px]">
          <Image
            src="/hero-fig.png"
            alt="Hero Wireframe Graphic"
            fill
            className="object-contain opacity-90 mix-blend-multiply"
            priority
          />
        </div>
      </div>
    </section>
  );
}
