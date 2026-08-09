"use client";

export default function SkillsTicker() {
  const skills = [
    "PYTHON",
    "PYTORCH",
    "DOCKER",
    "TENSORFLOW",
    "AWS",
    "KUBERNETES",
    "SYSTEM DESIGN",
    "LLM OPS",
  ];

  // Repeat the skills multiple times to fill the width for a seamless infinite scroll
  const listItems = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="w-full border-b border-border-custom bg-background overflow-hidden py-4">
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12 text-[10px] font-mono font-bold tracking-widest text-foreground/40">
          {listItems.map((skill, index) => (
            <span key={index} className="flex items-center gap-12">
              <span>{skill}</span>
              <span>/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
