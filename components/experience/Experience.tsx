"use client";

import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Experience</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">Built for scale, collaboration, and real results.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Systematic career history showcasing leadership in frontend architecture, design systems, and motion-rich launches.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {experience.map((role, index) => (
          <motion.article
            key={role.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">{role.role}</h3>
                <p className="text-sm text-slate-400">{role.company}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{role.date}</span>
            </div>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
