"use client";

import Image from "next/image";

interface Project {
  fig: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
}

export default function SelectedWork() {
  const projects: Project[] = [
    {
      fig: "FIG. 01",
      title: "SignSync",
      image: "/project-signsync.png",
      description: "Real-time gesture recognition system translating ASL to text using optimized edge-deployed models. Reduced inference latency by 40% on low-power devices.",
      tags: ["PyTorch", "Edge TPU"],
    },
    {
      fig: "FIG. 02",
      title: "ParkPulse AI",
      image: "/project-parkpulse.png",
      description: "Computer vision pipeline for dynamic urban parking optimization. Processes 10k+ video streams simultaneously.",
      tags: ["OpenCV", "Kafka"],
    },
    {
      fig: "FIG. 03",
      title: "JanRakshak",
      image: "/project-janrakshak.png",
      description: "Predictive analytics engine for disaster response resource allocation. Deployed statewide across 14 districts.",
      tags: ["TensorFlow", "React Native"],
    },
    {
      fig: "FIG. 04",
      title: "NexusAI",
      image: "/project-nexusai.png",
      description: "Federated learning framework prioritizing privacy-preserving model training across decentralized mobile edge nodes.",
      tags: ["PyTorch", "Docker"],
    },
  ];

  return (
    <section id="work" className="w-full bg-background">
      {/* Title Header */}
      <div className="border-b border-border-custom px-6 md:px-12 lg:px-20 py-6 flex justify-between items-end">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-foreground">
          Selected Work
        </h2>
        <span className="text-[10px] font-mono font-semibold tracking-widest text-foreground/45 uppercase">
          2023&mdash;2026
        </span>
      </div>

      {/* Bento Grid */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <BentoCard project={projects[0]} className="md:col-span-8" imageClass="aspect-[16/9]" />
          <BentoCard project={projects[1]} className="md:col-span-4 md:row-span-2" tall />
          <BentoCard project={projects[2]} className="md:col-span-4" imageClass="aspect-[16/9]" />
          <BentoCard project={projects[3]} className="md:col-span-4" imageClass="aspect-[16/9]" />
        </div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  project: Project;
  className?: string;
  imageClass?: string;
  tall?: boolean;
}

function BentoCard({ project, className = "", imageClass = "", tall = false }: BentoCardProps) {
  return (
    <div
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border-custom bg-background cursor-pointer bento-lift",
        className,
      ].join(" ")}
    >
      {/* Image area */}
      <div
        className={[
          "relative w-full overflow-hidden bg-[#EBE6DE]",
          tall ? "flex-1 min-h-[240px] md:min-h-[360px]" : imageClass,
        ].join(" ")}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-90 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-serif font-semibold tracking-tight text-foreground leading-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-[9px] font-mono font-bold tracking-widest text-foreground/40 uppercase mt-0.5">
            {project.fig}
          </span>
        </div>

        <p className="font-serif text-sm leading-relaxed text-foreground/70">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 border border-border-custom text-[8px] font-mono font-bold tracking-widest text-foreground/55 uppercase bg-[#EBE6DE] rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow hint slides in on hover */}
      <div
        aria-hidden
        className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-border-custom bg-background flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style jsx>{`
        .bento-lift {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.28s ease;
        }
        .bento-lift:hover {
          transform: translateY(-7px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05),
            0 14px 28px rgba(0, 0, 0, 0.09), 0 24px 48px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </div>
  );
}
