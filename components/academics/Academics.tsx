"use client";

import { motion } from 'framer-motion';

const academics = [
  {
    year: '2016',
    degree: '10th Grade (SSC)',
    institution: 'Swaminarayan Vidhyalaya, Bhuj',
    result: '76%',
    detail: 'Built a strong foundation in science and mathematics.',
  },
  {
    year: '2018',
    degree: '11th & 12th Science (HSC)',
    institution: 'Swaminarayan Vidhyalaya, Bhuj',
    result: '67%',
    detail: 'Strengthened analytical and technical understanding through science stream.',
  },
  {
    year: '2023',
    degree: 'B.E. Computer Science & Engineering',
    institution: 'HJD Institute of Technical Education & Research (GTU)',
    result: '8.94 CGPA',
    detail: 'Focused on backend systems, software engineering, data structures, and real-world integration projects.',
  },
];

export function Academics() {
  return (
    <section id="academics" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Academics</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">A strong foundation in engineering.</h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-slate-400">
          From secondary school to a computer science degree with distinction.
        </p>
      </div>

      <div className="relative mt-12 ml-4 sm:ml-8">
        {/* vertical line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-slate-700/40 to-transparent" />

        <div className="flex flex-col gap-10">
          {academics.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* dot */}
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-slate-950" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 w-fit">
                  {item.year}
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 w-fit">
                  {item.result}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-100">{item.degree}</h3>
              <p className="mt-1 text-sm font-medium text-slate-400">{item.institution}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
