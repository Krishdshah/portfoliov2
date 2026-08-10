"use client";

export default function BottomGrid() {
  const achievements = [
    {
      title: "Global Nominee",
      subtitle: "NASA Space Apps Challenge",
      year: "2023",
    },
    {
      title: "1st Place, #1 Track",
      subtitle: "National Hackathon",
      year: "2023",
    },
    {
      title: "Published Author",
      subtitle: "IEEE Conference on Computer Vision",
      year: "2022",
    },
  ];

  const research = [
    {
      tag: "PAPER",
      title: "Efficient Attention Mechanisms in Resource-Constrained Environments",
      description: "Exploring sparsity and approximation to deploy transformer models on edge devices without significant degradation.",
      link: "#",
    },
    {
      tag: "CRAFT",
      title: "Topology of Latent Spaces in Multi-Modal Architectures",
      description: "Geometric analysis of how cross-modal representations align during contrastive pre-training phases.",
      link: "#",
    },
  ];

  return (
    <section id="research" className="w-full border-b border-border-custom grid grid-cols-1 md:grid-cols-2 bg-background">
      {/* Left Column (Achievements & Recognition) */}
      <div className="p-6 md:py-12 md:pl-12 lg:pl-20 md:pr-12 md:border-r border-border-custom flex flex-col">
        <h3 className="text-xl font-serif font-bold tracking-tight text-foreground mb-8">
          Achievements & Recognition
        </h3>

        <div className="border-t border-border-custom flex-grow">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-border-custom py-5 flex justify-between items-start gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-bold tracking-wider text-foreground">
                  {item.title}
                </span>
                <span className="font-serif text-sm text-foreground/50">
                  {item.subtitle}
                </span>
              </div>
              <span className="font-mono text-xs font-semibold text-foreground/45">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Research Archive) */}
      <div className="p-6 md:py-12 md:pl-12 md:pr-12 lg:pr-20 flex flex-col bg-card/30">
        <h3 className="text-xl font-serif font-bold tracking-tight text-foreground mb-8">
          Research Archive
        </h3>

        <div className="flex flex-col gap-4 flex-grow">
          {research.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="border border-border-custom p-5 bg-card relative hover:shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-foreground/20 transition-all duration-300 flex flex-col group"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-0.5 bg-foreground text-background text-[9px] font-mono font-bold tracking-widest uppercase rounded-xs">
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                  ↗
                </span>
              </div>

              {/* Card Content */}
              <h4 className="font-serif text-[17px] font-semibold text-foreground mt-4 group-hover:text-[#A83E2D] transition-colors duration-200">
                {item.title}
              </h4>
              <p className="font-serif text-[13px] text-foreground/60 mt-2 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
