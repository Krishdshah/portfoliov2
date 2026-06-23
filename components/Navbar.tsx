'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Profiles', path: '/profiles' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 pointer-events-none px-4">
      <nav className="pointer-events-auto bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-full px-1 py-1 md:px-2 md:py-2 flex items-center shadow-2xl max-w-full overflow-x-auto">
        
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-4 py-2 md:px-6 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                isActive 
                  ? 'text-slate-950 dark:text-white' 
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black/[0.05] dark:bg-white/[0.07] border border-black/5 dark:border-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}

        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="p-2 md:p-2.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-300 ml-1 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] active:scale-95 flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={14} className="text-amber-500 dark:text-slate-400" /> : <Moon size={14} />}
        </button>
      </nav>
    </div>
  );
}