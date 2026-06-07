"use client";

import { motion } from 'framer-motion';

export function Academics() {
  return (
    <section id="academics" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Academics</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">A strong foundation in backend systems and web engineering.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Practical academic training combined with hands-on backend integration and cloud deployment experience.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
        >
          <h3 className="text-2xl font-semibold text-slate-100">B.Sc. Computer Science</h3>
          <p className="mt-4 text-slate-300">Developed strong backend fundamentals, data structures, and system design knowledge.</p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
        >
          <h3 className="text-2xl font-semibold text-slate-100">Backend focus</h3>
          <p className="mt-4 text-slate-300">Studied API architecture, SQL database modeling, and server-side integration with Node.js and PHP.</p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
        >
          <h3 className="text-2xl font-semibold text-slate-100">Tools & certifications</h3>
          <p className="mt-4 text-slate-300">Experienced with Git, GitHub, AWS, cloud deployment pipelines, and production-ready backend workflows.</p>
        </motion.article>
      </div>
    </section>
  );
}
