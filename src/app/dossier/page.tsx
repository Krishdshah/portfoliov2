import Link from "next/link";

import PDFViewer from "../../components/dossier/pdf-viewer";

export default function DossierPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
      </div>

      {/* Top Border */}
      <div className="absolute left-0 top-0 h-px w-full bg-cyan-400/20" />

      {/* Navigation */}
      <header className="relative z-20 flex items-center justify-between px-10 py-6">
        <div className="font-mono text-sm tracking-[0.25em] text-white/90">
          ENGINE_ON
        </div>

        <nav className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.25em] text-white/60">
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Engine
          </Link>

          <Link
            href="/experiments"
            className="transition-colors hover:text-white"
          >
            Lab
          </Link>

          <Link
            href="/archive"
            className="transition-colors hover:text-white"
          >
            Archive
          </Link>

          <Link
            href="/origin"
            className="transition-colors hover:text-white"
          >
            About
          </Link>
        </nav>

        <button
          className="
            border
            border-cyan-400/40
            bg-cyan-400/10
            px-4
            py-2
            font-mono
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-cyan-300
            transition-all
            hover:bg-cyan-400/20
          "
        >
          ESTABLISH LINK
        </button>
      </header>

      {/* Main Content */}
      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pb-20 pt-8">
        {/* Title */}
        <div className="mb-8 text-center">
          <p className="mono mb-3 text-[11px] uppercase tracking-[0.35em] text-cyan-300/70">
            PROFILE DOSSIER
          </p>

          <h1 className="text-4xl font-semibold tracking-tight">
            Engineering Profile Archive
          </h1>
        </div>

        {/* PDF */}
        <PDFViewer />

        {/* Download */}
        <a
          href="/resume/krish_d_shah_resume.pdf"
          download
          className="
            mono
            mt-8
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-white/50
            transition-all
            hover:text-cyan-300
          "
        >
          EXPORT DOSSIER ↓
        </a>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-white/5 px-8 py-4">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-white/30">
          PROFILE STATUS: ACTIVE
        </div>

        <div className="mono text-[10px] uppercase tracking-[0.25em] text-white/30">
          LAST UPDATED: MAY 2026
        </div>

        <div className="mono text-[10px] uppercase tracking-[0.25em] text-white/30">
          DOCUMENT TYPE: ENGINEERING DOSSIER
        </div>
      </footer>
    </main>
  );
}