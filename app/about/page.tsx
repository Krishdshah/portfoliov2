'use client';

import { motion } from 'framer-motion';
// Added 'Rocket' to the imports here
import { Book, Code, Briefcase, ArrowLeft, Trophy, Award, Star, Crown, Rocket } from 'lucide-react';
import Link from 'next/link';

// --- 1. ACHIEVEMENTS DATA ---
const achievements = [
  {
    title: "1st Place - Hacktrix 25",
    org: "REACH + Techvantage.ai",
    date: "2025",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    title: "Regional Winner (Chennai)",
    org: "NASA Space Apps Challenge",
    date: "Oct 2025",
    icon: Rocket, // Now using the standard Rocket icon
    color: "text-blue-400"
  },
  {
    title: "2nd Place Winner",
    org: "ACM SIGAI Hackathon",
    date: "2025",
    icon: Award,
    color: "text-purple-400"
  },
  {
    title: "3rd Place - Ideathon 2.0",
    org: "Cintel Association (SRMIST)",
    date: "Oct 2025",
    icon: Star,
    color: "text-orange-400"
  },
  {
    title: "Top 6 Finalist",
    org: "CredX AI Challenge 2025",
    date: "2025",
    icon: Crown,
    color: "text-green-400"
  },
  {
    title: "Top 3 Winner",
    org: "Entrepreneurship 101",
    date: "2025",
    icon: Star,
    color: "text-pink-400"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-brand-dark p-4 md:p-12 text-gray-300 pb-24">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-5xl text-white mb-6"
        >
          About Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg leading-relaxed text-gray-400"
        >
          I am a Computer Science undergraduate with a dual focus on <b>AI/ML Systems</b> and <b>Full Stack Engineering</b>. 
          I don't just build models; I build the infrastructure that makes them useful. Currently scaling my skills at SRM IST.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* SECTION 1: EDUCATION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Book className="text-brand-accent" />
            <h2 className="text-2xl font-display font-bold text-white">Education</h2>
          </div>
          
          <div className="grid gap-6">
            {/* Degree 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl text-white">B.Tech in CSE (AI & ML)</h3>
                <span className="text-sm text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">2024 – 2028</span>
              </div>
              <p className="text-gray-400">SRM Institute of Science and Technology</p>
              <p className="text-sm text-gray-500 mt-2">Current GPA: 9.91</p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2: EXPERIENCE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-brand-accent" />
            <h2 className="text-2xl font-display font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-8 relative">
            
            {/* Job 1 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-brand-dark bg-brand-accent" />
              <h3 className="text-xl font-bold text-white">Business Analyst Intern</h3>
              <p className="text-brand-accent text-sm mb-2">MedGency • Dec 2025 – Present</p>
              <p className="text-gray-400">
                Conducting competitor research and analyzing market gaps to optimize product strategy.
              </p>
            </div>
            
          </div>
        </motion.section>

        {/* SECTION 3: SKILLS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-brand-accent" />
            <h2 className="text-2xl font-display font-bold text-white">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'C / C++', 'Java', 'React.js', 'Next.js', 'TensorFlow', 'Google ADK', 'SQL / MongoDB'].map((skill, index) => (
              <div key={index} className="bg-white/5 border border-white/5 p-4 rounded-xl text-center hover:border-brand-accent/50 transition-colors">
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- SECTION 4: ACHIEVEMENTS --- */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-brand-accent" />
            <h2 className="text-2xl font-display font-bold text-white">Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-300 group"
              >
                <div className={`mb-4 p-3 rounded-xl bg-white/5 w-fit ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-white leading-tight mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{item.org}</p>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{item.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}