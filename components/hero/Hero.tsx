import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl sm:p-10 lg:p-14">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Premium Developer Portfolio
          </span>
          <h1 className="mt-8 text-5xl font-semibold text-slate-100 sm:text-6xl">
            Crafting fast, modern digital experiences with design-first development.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build elegant websites, high-converting applications, and polished digital identities using Next.js, Tailwind, and motion-driven interfaces.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">Work with me</Button>
            <Link href="#projects" className="inline-flex items-center rounded-full border border-slate-700/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/80 hover:text-cyan-200">
              Explore projects
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-7 shadow-2xl shadow-slate-950/30">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/40">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Fast deployment</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Built for scale</h2>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-300/20">⚡</span>
            </div>
            <p className="leading-7 text-slate-300">
              Every experience is responsive, accessible, and SEO-friendly, with premium motion and polished interactions across devices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
