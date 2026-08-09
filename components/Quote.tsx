"use client";

export default function Quote() {
  return (
    <section className="w-full border-b border-border-custom bg-background-muted px-6 py-20 md:py-28 text-center flex flex-col items-center justify-center gap-6">
      {/* Icon/Chevron */}
      <span className="text-xl font-mono text-foreground/45 font-light select-none">
        ∧
      </span>
      
      {/* Quote Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-[54px] font-serif font-medium leading-[1.25] text-foreground max-w-5xl tracking-tight">
        I care less about making something look intelligent <br className="hidden md:inline" />
        and more about{" "}
        <span className="relative inline-block border-b-[2.5px] border-[#A83E2D] pb-1">
          making it work.
        </span>
      </h2>
    </section>
  );
}
