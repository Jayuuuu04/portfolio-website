"use client";

import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Experience</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">Built for scale, collaboration, and real results.</h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-slate-400">
          Hands-on backend engineering across internship and full-time roles.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {experience.map((role, index) => (
          <motion.article
            key={role.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/20"
          >
            {/* top row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-semibold text-slate-100">{role.role}</h3>
                  {role.type === 'Full-time' ? (
                    <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                      Full-time
                    </span>
                  ) : (
                    <span className="rounded-full bg-violet-500/10 px-3 py-0.5 text-xs font-semibold text-violet-300 border border-violet-500/20">
                      Internship
                    </span>
                  )}
                  {index === 0 && (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-1">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                    <Briefcase className="h-3.5 w-3.5 text-slate-500" />
                    {role.company}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </span>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300 shrink-0 h-fit">
                <Calendar className="h-3.5 w-3.5 text-slate-500" />
                {role.date}
              </span>
            </div>

            {/* divider */}
            <div className="my-5 h-px bg-white/5" />

            {/* highlights */}
            <ul className="space-y-3">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
