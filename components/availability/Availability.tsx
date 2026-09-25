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
      {/* header — same pattern as Projects / Skills / Experience */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Availability</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">
            Open for work. <span className="text-emerald-400">Let&rsquo;s build.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-slate-400">
          Freelance, contract, or full-time &mdash; from first idea through to production.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/20 sm:p-9"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {availability.status}
        </span>

        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-baseline gap-1.5">
              <span className="text-5xl font-bold text-emerald-400 sm:text-6xl">
                {availability.rate}
              </span>
              <span className="text-lg font-medium text-slate-400">{availability.rateUnit}</span>
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{availability.pitch}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Let&rsquo;s Discuss Now
            </a>
            <a
              href="mailto:jaydeepkadiya005@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-slate-500">
          {availability.stats.map((stat) => (
            <span key={stat} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden="true" />
              {stat}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {availability.services.map(({ icon, label }, index) => {
          const Icon = icons[icon];
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 transition hover:border-emerald-500/30"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-300" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-200">{label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
