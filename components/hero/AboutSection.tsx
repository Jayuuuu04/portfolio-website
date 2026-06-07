import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="glass-card p-10 sm:p-12">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-100">Design-focused engineering with a business mindset.</h2>
          </div>
          <p className="text-sm text-slate-400">Ready for freelance, startup, or full-time roles.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_0.75fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/30">
            <p className="leading-7 text-slate-300">
              I specialize in building premium web experiences with modern frontend stacks. My work blends thoughtful interface design, accessible development, and optimized performance to help brands stand out.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/30">
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                7+ years building UI systems, dashboards, and SaaS experiences.
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Expert at converting product strategy into responsive design systems.
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Passionate about motion, accessibility, and launch-ready optimization.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
