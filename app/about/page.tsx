'use client';

import { motion } from 'framer-motion';
import { Book, Code, Briefcase, ArrowLeft, Trophy, Award, Star, Crown, Rocket, GitPullRequest, Globe, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';

// --- DATA: ACHIEVEMENTS ---
const achievements = [
  {
    title: "1st Place - Hacktrix 25",
    org: "REACH + Techvantage.ai",
    date: "2025",
    icon: Trophy,
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
  },
  {
    title: "Regional Winner (Chennai)",
    org: "NASA Space Apps Challenge",
    date: "Oct 2025",
    icon: Rocket,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
  },
  {
    title: "2nd Place Winner",
    org: "ACM SIGAI Hackathon",
    date: "2025",
    icon: Award,
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
  },
  {
    title: "3rd Place - Ideathon 2.0",
    org: "Cintel Association (SRMIST)",
    date: "Oct 2025",
    icon: Star,
    color: "text-orange-400 border-orange-500/20 bg-orange-500/5",
    glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
  },
  {
    title: "Top 6 Finalist",
    org: "CredX AI Challenge 2025",
    date: "2025",
    icon: Crown,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
  },
  {
    title: "Top 3 Winner",
    org: "Entrepreneurship 101",
    date: "2025",
    icon: Star,
    color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]"
  }
];

// --- DATA: OPEN SOURCE ---
const openSourceData = [
  {
    repo: "fitfinder",
    org: "Code-Social",
    description: "Optimized frontend performance and fixed critical responsive UI bugs for the fitness tracking platform.",
    link: "https://github.com/Code-Social/fitfinder",
    status: "Merged"
  },
  {
    repo: "canitrythis",
    org: "Code-Social",
    description: "Implemented new recommendation engine logic and enhanced component reusability.",
    link: "https://github.com/Code-Social/canitrythis",
    status: "Merged"
  }
];

const openSourcePrograms = [
  "Social Winter of Code (SWOC)",
  "Open Source Contributors Institute (OSCI)",
  "Hacktoberfest 2024"
];

// --- DATA: TIMELINE ---
const timelineData = [
  {
    type: 'experience',
    title: "Business Analyst Intern",
    subtitle: "MedGency",
    date: "Dec 2025 – Present",
    desc: "Conducting competitor research, validating feature roadmaps, and analyzing market gaps to optimize SaaS product strategy.",
    icon: Briefcase,
    color: "border-blue-500/20 text-blue-400 bg-blue-500/10"
  },
  {
    type: 'education',
    title: "B.Tech in CSE (AI & ML)",
    subtitle: "SRM Institute of Science and Technology",
    date: "2024 – 2028",
    desc: "Focusing on AI/ML systems engineering, algorithms, and full-stack software development. Maintaining a 9.91 GPA.",
    icon: GraduationCap,
    color: "border-purple-500/20 text-purple-400 bg-purple-500/10"
  }
];

// --- DATA: SKILLS CATEGORIES ---
const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C / C++", "Java", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "AI & ML Stack",
    skills: ["TensorFlow", "ChromaDB", "LangChain", "Google ADK", "Data Modeling"]
  },
  {
    title: "Web Technologies",
    skills: ["React.js", "Next.js", "FastAPI", "Firebase", "MongoDB", "Tailwind CSS"]
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-transparent p-4 md:p-12 text-slate-300 pb-32 relative">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          BACK_TO_HOME
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6"
        >
          About Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed text-slate-400 font-sans"
        >
          I am a Computer Science undergraduate with a dual focus on <b>AI/ML Systems</b> and <b>Full Stack Engineering</b>. 
          I engineer robust pipelines that render models useful, clean backend REST services, and high-performance frontend interfaces.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* SECTION 1: TIMELINE (Education & Experience merged) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={22} className="text-blue-400" />
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-white">Experience & Education</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 pl-6 md:pl-10 space-y-10">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline point */}
                  <div className={`absolute -left-[39px] md:-left-[55px] top-1.5 p-1.5 rounded-full border border-white/10 ${item.color} shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={16} />
                  </div>

                  <div className="bg-slate-950/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl group-hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.subtitle}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/10 self-start sm:self-center">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: TECHNICAL ARSENAL */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code size={22} className="text-blue-400" />
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-white">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-950/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.02] rounded-full blur-xl pointer-events-none" />
                <h3 className="font-bold text-white text-sm font-mono tracking-wider uppercase mb-4 text-blue-400 border-b border-white/5 pb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 rounded-lg px-3 py-1.5 text-xs text-slate-300 font-semibold transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: OPEN SOURCE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <GitPullRequest size={22} className="text-blue-400" />
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-white">Open Source Contributions</h2>
          </div>

          <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

            {/* Program Badges */}
            <div className="mb-8">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">PROGRAMS & EVENTS</h3>
              <div className="flex flex-wrap gap-3">
                {openSourcePrograms.map((program, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/5 text-slate-200 text-xs font-semibold shadow-sm hover:border-blue-500/20 transition-all duration-300">
                    <CheckCircle2 size={14} className="text-blue-400" />
                    {program}
                  </div>
                ))}
              </div>
            </div>

            {/* Repo Contributions */}
            <div>
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">CONTRIBUTIONS</h3>
              <div className="grid gap-4">
                {openSourceData.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-slate-950 border border-white/10 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                        <GitPullRequest size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                          {item.repo} <span className="text-slate-500 font-mono text-xs">by {item.org}</span>
                        </h4>
                        <p className="text-xs text-slate-400 mt-1.5 max-w-xl leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/15 self-start md:self-center">
                      <Globe size={12} />
                      {item.status.toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center border-t border-white/5 pt-5">
               <a 
                 href="https://github.com/Krishdshah" 
                 target="_blank" 
                 className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors font-mono"
               >
                 VIEW_FULL_GRAPH_ON_GITHUB <ChevronRight size={14} />
               </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: ACHIEVEMENTS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Trophy size={22} className="text-blue-400" />
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-white">Achievements & Badges</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className={`bg-slate-950/40 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all duration-300 group ${item.glow}`}
                >
                  <div className={`mb-4 p-2.5 rounded-xl w-fit border ${item.color} group-hover:scale-105 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1 leading-snug group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{item.org}</p>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-white/5 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}