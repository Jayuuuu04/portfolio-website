"use client";

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2, Trophy, BadgeCheck } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '2', label: 'Products Shipped' },
  { value: '8.94', label: 'CGPA (B.E. CSE)' },
  { value: '5+', label: 'Technologies' },
];

const highlights = [
  {
    icon: Briefcase,
    title: 'Currently at',
    value: 'Aeonx Digital Technology Ltd.',
    sub: 'Backend Developer · May 2023 – Present',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    value: 'B.E. Computer Science & Engineering',
    sub: 'HJD Institute (GTU) · 2023 · 8.94 CGPA',
  },
  {
    icon: MapPin,
    title: 'Based in',
    value: 'Bhuj, Gujarat, India',
    sub: 'Open to remote & hybrid opportunities',
  },
  {
    icon: Code2,
    title: 'Core Stack',
    value: 'PHP · Node.js · Next.js · MySQL',
    sub: 'AWS · REST APIs · CI/CD · Flutter',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="glass-card p-10 sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {/* header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-100">
              Backend-first engineering with a product mindset.
            </h2>
          </div>
          <span className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* bio */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/30">
          <p className="leading-8 text-slate-300">
            I'm <span className="font-semibold text-slate-100">Jaydeep Kadiya</span>, a Backend Developer based in Bhuj, Gujarat with over 2 years of professional experience building scalable server-side systems. I specialise in <span className="text-cyan-300 font-medium">PHP</span>, <span className="text-cyan-300 font-medium">Node.js</span>, and <span className="text-cyan-300 font-medium">MySQL</span> — designing clean REST APIs, optimising database performance, and integrating third-party services like payment gateways, shipping providers, and corporate card platforms.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            I've shipped real-world SaaS products including <span className="text-slate-200 font-medium">Xpense</span>, an enterprise travel and expense management platform, and <span className="text-slate-200 font-medium">Foodio</span>, an FMCG e-commerce system. I care deeply about writing maintainable code, building reliable systems, and delivering products that actually work in production.
          </p>
        </div>

        {/* stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-center shadow-lg"
            >
              <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* highlight cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, value, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-lg"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <Icon className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{title}</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
                <p className="mt-0.5 text-xs text-slate-500">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* achievements & certifications */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 shadow-lg"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Trophy className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500/70">Achievement</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">🥇 1st Rank — Code Clash Hackathon</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Won a trophy and ₹50,000 prize money at the Code Clash Hackathon organised by Aeonx Digital Technology Limited · September 2024
              </p>
            </div>
          </motion.div>

          {/* certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5 shadow-lg"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
              <BadgeCheck className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-500/70">Certification</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">Claude Certified Architect — Foundation</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Passed the Claude Certified Architect Foundation Exam · 2026
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
