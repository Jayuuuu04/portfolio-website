"use client";

import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const colorMap: Record<string, { border: string; heading: string; pill: string; dot: string; glow: string }> = {
  cyan:    { border: 'border-cyan-500/20',    heading: 'text-cyan-300',    pill: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20',    dot: 'bg-cyan-400',    glow: 'bg-cyan-500/5'    },
  violet:  { border: 'border-violet-500/20',  heading: 'text-violet-300',  pill: 'bg-violet-500/10 text-violet-200 border-violet-500/20',  dot: 'bg-violet-400',  glow: 'bg-violet-500/5'  },
  emerald: { border: 'border-emerald-500/20', heading: 'text-emerald-300', pill: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20', dot: 'bg-emerald-400', glow: 'bg-emerald-500/5' },
  orange:  { border: 'border-orange-500/20',  heading: 'text-orange-300',  pill: 'bg-orange-500/10 text-orange-200 border-orange-500/20',  dot: 'bg-orange-400',  glow: 'bg-orange-500/5'  },
  pink:    { border: 'border-pink-500/20',    heading: 'text-pink-300',    pill: 'bg-pink-500/10 text-pink-200 border-pink-500/20',    dot: 'bg-pink-400',    glow: 'bg-pink-500/5'    },
  yellow:  { border: 'border-yellow-500/20',  heading: 'text-yellow-300',  pill: 'bg-yellow-500/10 text-yellow-200 border-yellow-500/20',  dot: 'bg-yellow-400',  glow: 'bg-yellow-500/5'  },
};

const allSkillPills = [
  'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Node.js', 'Next.js', 'React',
  'MySQL', 'REST APIs', 'Docker', 'AWS', 'Git', 'GitHub', 'Vercel',
  'Postman', 'Razorpay', 'Shiprocket', 'Omnicard', 'Tailwind CSS', 'CI/CD',
];

export function Skills() {
  return (
    <section id="skills" className="glass-card p-10 sm:p-12">

      {/* header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">
            The stack behind elegant <span className="text-cyan-400">digital products.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-slate-400">
          Backend and cloud tooling with a focus on reliability, performance, and clean developer workflows.
        </p>
      </div>

      {/* scrolling pill strip */}
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-900/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-900/80 to-transparent z-10" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 w-max"
        >
          {[...allSkillPills, ...allSkillPills].map((skill, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full border border-slate-700/50 bg-slate-800/60 px-4 py-1.5 text-xs font-medium text-slate-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* skill category cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const c = colorMap[group.color];
          return (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-3xl border ${c.border} ${c.glow} bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20`}
            >
              {/* card header */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`text-lg font-semibold ${c.heading}`}>{group.category}</h3>
              </div>

              {/* skill pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {group.list.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${c.pill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* bottom bar */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-slate-950/60 px-6 py-4">
        <div className="flex flex-wrap gap-6">
          {[
            { dot: 'bg-cyan-400', label: 'Frontend' },
            { dot: 'bg-violet-400', label: 'Backend' },
            { dot: 'bg-emerald-400', label: 'Database' },
            { dot: 'bg-orange-400', label: 'DevOps & Cloud' },
            { dot: 'bg-pink-400', label: 'Tools' },
            { dot: 'bg-yellow-400', label: 'Integrations' },
          ].map(({ dot, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dot}`} />
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
        <span className="rounded-full border border-cyan-400/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Always Learning
        </span>
      </div>

    </section>
  );
}
