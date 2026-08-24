"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 pointer-events-auto">
          {/* Darkened Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-5xl h-[88vh] bg-card border-2 border-border-custom rounded-lg shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header Control Bar */}
            <div className="px-5 py-4 border-b border-border-custom bg-background/90 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xs border border-border-custom bg-card flex items-center justify-center text-[#E86F2D]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-widest text-foreground/50 uppercase block">
                    DOCUMENT VIEWER
                  </span>
                  <h3 className="font-serif text-lg font-bold tracking-tight text-foreground">
                    Krish D Shah — Curriculum Vitae
                  </h3>
                </div>
              </div>

              {/* Action Buttons: Download PDF + Close X */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="/resume/krishdshah_cv.pdf"
                  download="Krish_D_Shah_Resume.pdf"
                  className="flex items-center gap-2 px-3.5 py-2 bg-foreground text-background font-mono text-xs font-bold tracking-wider uppercase rounded-xs hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4 text-[#E86F2D]" />
                  <span className="hidden sm:inline">DOWNLOAD PDF</span>
                </a>

                <button
                  onClick={onClose}
                  className="flex items-center justify-center p-2 sm:px-3 sm:py-2 border border-border-custom bg-background text-foreground font-mono text-xs font-bold tracking-wider uppercase rounded-xs hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Close resume viewer"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline ml-1.5">CLOSE</span>
                </button>
              </div>
            </div>

            {/* Embedded PDF Canvas */}
            <div className="relative w-full flex-grow bg-neutral-950 flex items-center justify-center overflow-hidden">
              <iframe
                src="/resume/krishdshah_cv.pdf#toolbar=0"
                title="Krish D Shah Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
