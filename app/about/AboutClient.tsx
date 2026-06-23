'use client';

import { motion } from 'framer-motion';
import { Book, Code, Briefcase, ArrowLeft, Trophy, Award, Star, Crown, Rocket, GitPullRequest, Globe, CheckCircle2, ChevronRight, GraduationCap, Brain, Terminal } from 'lucide-react';
import Link from 'next/link';
import EarnedBadges from '@/components/EarnedBadges';

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
    date: "Dec 2025 – March 2026",
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
    title: "Programming Languages",
    icon: Code,
    color: "text-blue-400 border-blue-500/10",
    gridClass: "md:col-span-1",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    title: "AI & Machine Learning Stack",
    icon: Brain,
    color: "text-purple-400 border-purple-500/10",
    gridClass: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "LangChain", logo: null },
      { name: "LangGraph", logo: null },
      { name: "LlamaIndex", logo: null },
      { name: "Hugging Face", logo: null },
      { name: "Prompt Engineering", logo: null },
      { name: "RAG Systems", logo: null },
      { name: "AI Agents", logo: null },
      { name: "Vector Databases", logo: null }
    ]
  },
  {
    title: "Tools & Deployment",
    icon: Terminal,
    color: "text-blue-400 border-blue-500/10",
    gridClass: "md:col-span-1",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Netlify", logo: null },
      { name: "CI / CD", logo: null },
      { name: "MLOps", logo: null }
    ]
  },
  {
    title: "Full Stack Web Development",
    icon: Globe,
    color: "text-emerald-400 border-emerald-500/10",
    gridClass: "md:col-span-3",
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "REST APIs", logo: null },
      { name: "System Design", logo: null }
    ]
  },
  {
    title: "CS Coursework & Core",
    icon: Book,
    color: "text-rose-400 border-rose-500/10",
    gridClass: "md:col-span-3",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", logo: null },
      { name: "Database Management Systems (DBMS)", logo: null },
      { name: "Computer Organization & Architecture (COA)", logo: null },
      { name: "Operating Systems (OS)", logo: null },
      { name: "Computer Networks (CN)", logo: null },
      { name: "Object Oriented Programming (OOPs)", logo: null },
      { name: "Software Engineering (SE)", logo: null }
    ]
  }
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-transparent p-4 md:p-12 text-slate-700 dark:text-slate-300 pb-32 relative">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          BACK_TO_HOME
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-extrabold text-4xl md:text-5xl text-slate-950 dark:text-white mb-6"
        >
          About Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-sans"
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
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-950 dark:text-white">Experience & Education</h2>
          </div>
          
          <div className="relative border-l border-black/10 dark:border-white/10 ml-4 pl-6 md:pl-10 space-y-10">
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
                  <div className={`absolute -left-[39px] md:-left-[55px] top-1.5 p-1.5 rounded-full border border-black/10 dark:border-white/10 ${item.color} shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={16} />
                  </div>

                  <div className="bg-slate-100/60 dark:bg-slate-950/40 backdrop-blur-xl border border-black/5 dark:border-white/5 p-6 rounded-2xl group-hover:border-black/10 dark:group-hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-slate-950 dark:text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.subtitle}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/10 self-start sm:self-center">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">{item.desc}</p>
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
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-950 dark:text-white">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => {
              const CategoryIcon = cat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-slate-100/60 dark:bg-slate-950/40 border border-black/5 dark:border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 ${cat.gridClass}`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.02] rounded-full blur-xl pointer-events-none" />
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-4 border-b border-black/5 dark:border-white/5 pb-2">
                    <div className={`p-1 rounded-lg ${cat.color} bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5`}>
                      <CategoryIcon size={16} />
                    </div>
                    <h3 className="font-bold text-slate-950 dark:text-white text-sm font-mono tracking-wider uppercase">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center gap-1.5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/5 dark:border-white/5 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 font-semibold transition-all duration-200 hover:scale-[1.02]"
                      >
                        {skill.logo ? (
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-3.5 h-3.5 object-contain"
                            onError={(e) => {
                              // Hide broken image link gracefully
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-1 h-1 rounded-full bg-blue-400/60" />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: OPEN SOURCE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <GitPullRequest size={22} className="text-blue-400" />
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-950 dark:text-white">Open Source Contributions</h2>
          </div>

          <div className="bg-slate-100/60 dark:bg-slate-950/40 border border-black/5 dark:border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

            {/* Program Badges */}
            <div className="mb-8">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">PROGRAMS & EVENTS</h3>
              <div className="flex flex-wrap gap-3">
                {openSourcePrograms.map((program, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-black/5 dark:border-white/5 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm hover:border-blue-500/20 transition-all duration-300">
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
                    className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-slate-200/20 dark:bg-slate-900/40 border border-black/5 dark:border-white/5 hover:border-blue-500/30 hover:bg-slate-200/40 dark:hover:bg-slate-900/60 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                        <GitPullRequest size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-950 dark:text-white group-hover:text-blue-400 transition-colors">
                          {item.repo} <span className="text-slate-500 font-mono text-xs">by {item.org}</span>
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 max-w-xl leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/15 self-start md:self-center">
                      <Globe size={12} />
                      {item.status.toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center border-t border-black/5 dark:border-white/5 pt-5">
               <a 
                 href="https://github.com/Krishdshah" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-mono"
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
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-950 dark:text-white">Honors & Achievements</h2>
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
                  className={`bg-slate-100/60 dark:bg-slate-950/40 border border-black/5 dark:border-white/5 p-6 rounded-2xl hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 group ${item.glow}`}
                >
                  <div className={`mb-4 p-2.5 rounded-xl w-fit border ${item.color} group-hover:scale-105 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-slate-950 dark:text-white mb-1 leading-snug group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{item.org}</p>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-200/50 dark:bg-slate-900 border border-black/5 dark:border-white/5 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: VERIFIED CREDENTIALS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award size={22} className="text-blue-400" />
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-950 dark:text-white">Verified Badges & Credentials</h2>
          </div>

          <EarnedBadges />
        </section>

      </div>
    </div>
  );
}
