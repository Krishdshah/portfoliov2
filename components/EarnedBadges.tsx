'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const badgeData = [
  {
    id: "ddb189b5-526c-4c13-9941-eaff55686ce8",
    title: "AWS Academy Graduate - Generative AI Foundations",
    issuer: "AWS Academy",
    image: "https://images.credly.com/images/7fa09e71-4149-4d59-9066-14fc8a3e0f39/blob",
    glowColor: "rgba(249, 115, 22, 0.15)",
    glowBorder: "group-hover:border-orange-500/30",
  },
  {
    id: "668a0cd7-2580-4389-b2c4-6c327d894d8f",
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    image: "https://images.credly.com/images/94f4180f-4139-4529-9cd1-c5ae95b12f5f/blob",
    glowColor: "rgba(59, 130, 246, 0.15)",
    glowBorder: "group-hover:border-blue-500/30",
  }
];

export default function EarnedBadges() {
  return (
    <div className="flex flex-wrap gap-4 justify-start w-full">
      {badgeData.map((badge, index) => {
        return (
          <motion.a
            key={badge.id}
            href={`https://www.credly.com/badges/${badge.id}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative flex flex-col items-center justify-center p-4 w-[160px] h-[190px] bg-slate-100/60 dark:bg-slate-950/45 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[1.8rem] hover:bg-slate-200/50 dark:hover:bg-slate-900/40 hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 text-center shadow-lg ${badge.glowBorder}`}
          >
            {/* Hover background radial glow */}
            <div 
              className="absolute inset-0 rounded-[1.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${badge.glowColor} 0%, transparent 70%)`
              }}
            />

            {/* Badge Image */}
            <div className="relative w-20 h-20 mb-3 flex items-center justify-center shrink-0">
              <img 
                src={badge.image} 
                alt={badge.title} 
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-[10px] font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors leading-tight line-clamp-2 px-1">
              {badge.title}
            </h3>

            {/* Issuer */}
            <span className="text-[8px] text-slate-500 font-mono mt-1 font-semibold block uppercase tracking-wider">
              {badge.issuer}
            </span>

            {/* Micro verification icon */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-emerald-400">
              <ShieldCheck size={12} />
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
