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
          2023—2026
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, idx) => {
          // Compute border classes dynamically to avoid double borders
          const isLeft = idx % 2 === 0;

          // Align padding so outer edges line up with the page padding px-6 md:px-12 lg:px-20
          const paddingClass = isLeft
            ? "pl-6 md:pl-12 lg:pl-20 pr-6 md:pr-8"
            : "pl-6 md:pl-8 pr-6 md:pr-12 lg:pr-20";

          return (
            <div
              key={project.title}
              className={`flex flex-col border-b border-border-custom ${
                isLeft ? "md:border-r border-border-custom" : ""
              } bg-background hover:bg-[#FAF8F5] transition-colors duration-300 group`}
            >
              {/* Project Card Header */}
              <div className={`flex justify-between items-center py-4 border-b border-border-custom ${paddingClass}`}>
                <h3 className="text-lg font-serif font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono font-semibold tracking-widest text-foreground/45">
                  {project.fig}
                </span>
              </div>

              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full border-b border-border-custom overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500 ease-out mix-blend-multiply"
                />
              </div>

              {/* Card Footer details */}
              <div className={`py-6 flex flex-col gap-6 justify-between flex-grow ${paddingClass}`}>
                <p className="font-serif text-base md:text-[17px] leading-relaxed text-foreground/80 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-border-custom text-[9px] font-mono font-bold tracking-widest text-foreground/60 uppercase bg-background rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
