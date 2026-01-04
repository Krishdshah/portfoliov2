'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Profiles', path: '/profiles' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 pointer-events-none px-4">
      <nav className="pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-1 py-1 md:px-2 md:py-2 flex items-center shadow-lg max-w-full overflow-x-auto">
        
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-4 py-2 md:px-6 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}