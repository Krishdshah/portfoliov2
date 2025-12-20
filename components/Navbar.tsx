'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
      
      {/* Glass Container */}
      <nav className="pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center shadow-lg">
        
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {/* The "Active" Glow Background */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Text */}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}