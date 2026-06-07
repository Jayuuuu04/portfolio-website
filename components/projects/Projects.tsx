"use client";

import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Projects</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">Work that blends product, marketing, and polish.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          High-impact launches with premium UX, scalability, and motion-rich interfaces for modern brands and SaaS products.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-cyan-300">Featured</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">Case study</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.url} className="mt-8 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-white">
              View details →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
