"use client";

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="glass-card p-10 sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-100">Backend-first engineering with a product mindset.</h2>
          </div>
          <p className="text-sm text-slate-400">Open to freelance, startup, or full-time roles.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_0.75fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/30">
            <p className="leading-7 text-slate-300">
              I specialise in building robust backend systems using PHP and Node.js, designing efficient SQL schemas, and integrating third-party APIs. I enjoy turning complex requirements into clean, maintainable server-side solutions.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/30">
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                B.E. Computer Science graduate with 8.94 CGPA (GTU, 2023).
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Experienced in REST API design, database optimisation, and cloud deployment.
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Passionate about clean code, CI/CD automation, and production reliability.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
