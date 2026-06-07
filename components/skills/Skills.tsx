"use client";

import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">The stack behind elegant digital products.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Modern frontend tooling with a focus on performance, design systems, and scalable developer experience.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((skillGroup) => (
          <motion.article
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
          >
            <h3 className="text-xl font-semibold text-slate-100">{skillGroup.category}</h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-300">
              {skillGroup.list.map((skill) => (
                <div key={skill} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
