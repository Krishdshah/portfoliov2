"use client";

const achievements = [
  {
    title: "1st Place — Hacktrix 25",
    subtitle: "REACH + Techvantage.ai",
    year: "2025",
  },
  {
    title: "Regional Winner (Chennai)",
    subtitle: "NASA Space Apps Challenge",
    year: "Oct 2025",
  },
  {
    title: "2nd Place Winner",
    subtitle: "ACM SIGAI Hackathon",
    year: "2025",
  },
  {
    title: "3rd Place — Ideathon 2.0",
    subtitle: "Cintel Association · SRMIST",
    year: "Oct 2025",
  },
  {
    title: "Top 6 Finalist",
    subtitle: "CredX AI Challenge 2025",
    year: "2025",
  },
  {
    title: "Top 3 Winner",
    subtitle: "Entrepreneurship 101",
    year: "2025",
  },
];

const timeline = [
  {
    type: "EXPERIENCE",
    title: "Business Analyst Intern",
    subtitle: "MedGency",
    date: "Dec 2025 – Mar 2026",
    desc: "Conducting competitor research, validating feature roadmaps, and analysing market gaps to optimise SaaS product strategy.",
  },
  {
    type: "EDUCATION",
    title: "B.Tech — CSE (AI & ML)",
    subtitle: "SRM Institute of Science and Technology",
    date: "2024 – 2028",
    desc: "Focusing on AI/ML systems engineering, algorithms, and full-stack software development. Maintaining a CGPA of 9.83.",
  },
];

export default function BottomGrid() {
  return (
    <section
      id="now"
      className="w-full grid grid-cols-1 md:grid-cols-2 bg-transparent"
    >
      {/* Left Column — Achievements */}
      <div className="p-6 md:py-12 md:pl-12 lg:pl-20 md:pr-12 md:border-r border-border-custom flex flex-col">
        <h3 className="text-xl font-serif font-bold tracking-tight text-foreground mb-8">
          Achievements &amp; Recognition
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
              <span className="font-mono text-xs font-semibold text-foreground/45 shrink-0">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column — Education & Experience */}
      <div className="p-6 md:py-12 md:pl-12 md:pr-12 lg:pr-20 flex flex-col bg-card/30">
        <h3 className="text-xl font-serif font-bold tracking-tight text-foreground mb-8">
          Education &amp; Experience
        </h3>

        <div className="flex flex-col gap-4 flex-grow">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="border border-border-custom p-5 bg-card relative flex flex-col gap-3"
            >
              {/* Type badge */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-foreground text-background text-[9px] font-mono font-bold tracking-widest uppercase rounded-xs">
                  {item.type}
                </span>
                <span className="text-[10px] font-mono text-foreground/40">
                  {item.date}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="font-serif text-[17px] font-semibold text-foreground leading-snug">
                  {item.title}
                </h4>
                <p className="font-mono text-[11px] font-semibold tracking-wide text-foreground/50 mt-1 uppercase">
                  {item.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="font-serif text-[13px] text-foreground/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
