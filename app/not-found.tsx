'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-brand-dark">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 space-y-6 max-w-md"
      >
        <div className="inline-flex p-4 bg-slate-900 border border-white/5 text-blue-400 rounded-3xl mb-2">
          <HelpCircle size={40} />
        </div>
        
        <h1 className="font-display font-extrabold text-6xl text-white">404</h1>
        <h2 className="font-display font-bold text-xl text-slate-200">SIGNAL_NOT_FOUND</h2>
        
        <p className="text-slate-400 font-sans text-sm leading-relaxed">
          The coordinates you entered do not match any active routes. The page you are looking for might have been moved or deleted.
        </p>
        
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold text-sm rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Return to Base
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
