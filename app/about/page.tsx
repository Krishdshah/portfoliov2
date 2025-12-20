'use client';

import { motion } from 'framer-motion';
import { Book, Code, Briefcase, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-dark p-6 md:p-12 text-gray-300">
      
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
          I don't just build models; I build the infrastructure that makes them useful. Currently scaling my skills at SRM IST and IIT Madras.
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
              <p className="text-sm text-gray-500 mt-2">Current GPA: 10.0</p>
            </div>

            {/* Degree 2
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl text-white">BS in Data Science & Applications</h3>
                <span className="text-sm text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">Ongoing</span>
              </div>
              <p className="text-gray-400">Indian Institute of Technology, Madras (IITM)</p>
            </div> */}
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
              <p className="text-brand-accent text-sm mb-2">Healthcare Communication Startup • Dec 2025 – Present</p>
              <p className="text-gray-400">
                Conducting competitor research and analyzing market gaps to optimize product strategy.
              </p>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-brand-dark bg-gray-600" />
              <h3 className="text-xl font-bold text-white">Mentor & Contributor</h3>
              <p className="text-brand-accent text-sm mb-2">Open Source & Student Organizations</p>
              <p className="text-gray-400">
                Mentoring juniors in AI/ML concepts and contributing to open-source repositories (fixing headers, optimizing components).
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

      </div>
    </div>
  );
}