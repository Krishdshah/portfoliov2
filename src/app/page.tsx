"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-[#EAE6DF]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Header />

      {/* Hero */}
      <section className="relative z-10 flex min-h-[85vh] items-center px-8 md:px-14">
        <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300/70">
              Experimental Systems Engineer
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Building intelligent systems,
              interfaces, and digital
              infrastructure.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/55 md:text-base">
              Computer Science undergraduate focused on AI systems,
              immersive web experiences, and engineering meaningful
              products.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/dossier"
                className="
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-4
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  transition-all
                  hover:border-cyan-300/40
                  hover:bg-cyan-300/5
                "
              >
                Open Dossier
              </Link>

              <Link
                href="/experiments"
                className="
                  border
                  border-white/10
                  px-6
                  py-4
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                  transition-all
                  hover:border-white/30
                  hover:text-white
                "
              >
                View Lab
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div
              className="
                relative
                h-[600px]
                w-[600px]
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
              "
            >
              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

              {/* Wireframe */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-cyan-300/20
                "
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/10
                "
              />

              {/* Labels */}
              <div className="absolute left-10 top-10 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Neural Infrastructure
              </div>

              <div className="absolute bottom-10 right-10 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-200/60">
                KRISH.OS
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strip */}
      <section className="relative z-10 overflow-hidden border-y border-white/5 py-6">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            min-w-max
            gap-20
            whitespace-nowrap
            font-mono
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-white/35
          "
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-20">
              <span>AI SYSTEMS</span>
              <span>FULL STACK ENGINEERING</span>
              <span>IMMERSIVE EXPERIENCES</span>
              <span>INFRASTRUCTURE THINKING</span>
              <span>RAG ARCHITECTURES</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Systems */}
      <section className="relative z-10 px-8 py-28 md:px-14">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300/60">
              Selected Systems
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Featured Experiments
            </h2>
          </div>

          <Link
            href="/experiments"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-white"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "FINTECH_AGENT",
              field: "AI_AGENTS",
              desc: "Enterprise financial intelligence routing system.",
            },
            {
              title: "AVA_RAG",
              field: "RAG_SYSTEMS",
              desc: "Context-aware retrieval architecture for events.",
            },
            {
              title: "SIGN_SYNC",
              field: "COMPUTER_VISION",
              desc: "Real-time sign language interpretation system.",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/60">
                {item.field}
              </p>

              <h3 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.desc}
              </p>

              <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                SYSTEM ACTIVE
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Archive Fragment */}
      <section className="relative z-10 px-8 pb-32 pt-10 md:px-14">
        <div className="mx-auto max-w-5xl border border-white/10 bg-white/[0.02] px-10 py-20 backdrop-blur-xl md:px-20">
          <p className="text-center text-3xl font-medium leading-[1.5] tracking-tight text-white/90 md:text-5xl">
            “Intelligence isn't a feature you bolt on.
            It's infrastructure.”
          </p>

          <div className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300/60">
            Archive Node 04
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}