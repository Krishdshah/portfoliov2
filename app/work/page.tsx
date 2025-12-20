'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "Sign Sync",
    description: "An ML-powered system that converts sign language gestures into text and speech, promoting communication for the deaf and speech-impaired.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    links: {
      github: "https://github.com/Laksh718/SignLang-To-Text-And-Speech",
      demo: "#"
    }
  },
  {
    title: "Aaruush Virtual Assistant",
    description: "AI-powered chatbot for the Aaruush tech fest, utilizing RAG and ChromaDB to streamline information access for attendees.",
    tags: ["LangChain", "ChromaDB", "FastAPI", "React"],
    links: {
      github: "#",
      demo: "https://www.aaruush.org/ava"
    }
  },
  {
    title: "FinTech Agent Bot",
    description: "An AI-powered enterprise agent built with Google ADK and Gemini API. Handles financial queries and automates support workflows.",
    tags: ["Python", "Google ADK", "Gemini API"],
    links: {
      github: "https://github.com/archeeetah/GenAI.git",
      demo: "https://genai-mjy8.vercel.app/"
    }
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive portfolio built to showcase projects. Designed with a clean UI, dark theme, and smooth animations.",
    tags: ["React", "Vite", "Framer Motion", "Three.js"],
    links: {
      github: "https://github.com/Krishdshah/portfoliov2",
      demo: "https://thekrishdshah.vercel.app/"
    }
  },
  {
    title: "Airline Ticket Booking",
    description: "Desktop application enabling users to search and book airline tickets. Features a Tkinter UI and efficient MySQL backend.",
    tags: ["Python", "Tkinter", "MySQL"],
    links: {
      github: "https://github.com/Krishdshah/Airline-ticket-booking",
      demo: "#"
    }
  },
  {
    title: "Sudoku Checker",
    description: "Python-based tool that verifies whether a given Sudoku puzzle is correctly solved by validating rows, columns, and subgrids.",
    tags: ["Python", "Algorithms"],
    links: {
      github: "https://github.com/Krishdshah/SUDOKU-CHECKER",
      demo: "#"
    }
  },
  // {
  //   title: "Padhlo Mitra",
  //   description: "An education-focused platform helping students organize study materials and track progress. Built for the student community.",
  //   tags: ["Next.js", "Firebase", "Tailwind CSS"],
  //   links: {
  //     github: "https://github.com/Krishdshah/PadhloMitra.git",
  //     demo: "https://padhlo-mitra.vercel.app/"
  //   }
  // }
];

export default function Work() {
  return (
    <div className="min-h-screen bg-brand-dark p-6 md:p-12">
      <div className="max-w-6xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-5xl text-white"
        >
          Selected Work
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-4">
                {project.links.github && project.links.github !== '#' && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.links.demo && project.links.demo !== '#' && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}