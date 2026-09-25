"use client";

import { motion } from 'framer-motion';
import { Smartphone, Globe, Database, Layers, Mail } from 'lucide-react';
import { availability } from '../../data/availability';
import { whatsappUrl } from '../../data/contact';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

const icons = { Smartphone, Globe, Database, Layers };

export function Availability() {
  return (
    <section id="availability" className="glass-card p-10 sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Availability</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">Work With Me</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Freelance, contract, or full-time &mdash; let&rsquo;s build something together.
          </p>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-900/50 p-8 text-center sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            {availability.status}
          </span>

          <p className="mt-8 flex items-baseline justify-center gap-1">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              {availability.rate}
            </span>
            <span className="text-xl font-medium text-slate-400">{availability.rateUnit}</span>
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300">{availability.pitch}</p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {availability.services.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 transition hover:border-cyan-300/40"
                >
                  <Icon className="mx-auto h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-xs font-medium text-slate-300">{label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Let&rsquo;s Discuss Now
            </a>
            <a
              href="mailto:jaydeepkadiya005@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500">
            {availability.stats.map((stat, i) => (
              <span key={stat} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">·</span>}
                {stat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
