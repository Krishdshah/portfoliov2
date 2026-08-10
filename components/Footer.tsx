"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        {/* Left Side (Logo & Copyright) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-3xl font-semibold font-serif tracking-tight text-foreground select-none">
            KDS.
          </span>
          <span className="text-[9px] font-mono font-bold tracking-widest text-foreground/40 uppercase mt-2">
            © {new Date().getFullYear()} KDS. ENGINEERED PRECISION
          </span>
        </div>

        {/* Right Side (Disciplines) */}
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-foreground/40 uppercase">
          <span>AI/ML</span>
          <span>/</span>
          <span>SOFTWARE</span>
          <span>/</span>
          <span>RESEARCH</span>
        </div>
      </div>
    </footer>
  );
}
