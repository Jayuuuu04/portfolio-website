"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl sm:p-10 lg:p-14">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Jaydeep Kadiya — Backend Developer
          </span>
          <h1 className="mt-8 text-5xl font-semibold text-slate-100 sm:text-6xl">
            Building resilient backend systems and seamless integrations for modern businesses.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I specialise in PHP and Node.js backend development, SQL database design, cloud deployment, and connecting services to create powerful end-to-end solutions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Core expertise</p>
              <p className="mt-4 text-slate-200">PHP, Node.js, SQL databases, APIs, AWS, GitHub integration.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Integration focus</p>
              <p className="mt-4 text-slate-200">Backend architecture, microservices, cloud deployment and high-quality data workflows.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">Work with me</Button>
            <Link href="#projects" className="inline-flex items-center rounded-full border border-slate-700/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/80 hover:text-cyan-200">
              Explore projects
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/40">
            <div className="relative mx-auto h-[340px] w-full overflow-hidden rounded-[1.5rem] bg-slate-950/90 sm:h-[360px]">
              <Image src="/images/jaydeep-profile.svg" alt="Jaydeep Kadiya profile" fill className="object-cover" />
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Backend Engineering</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">API-first systems</h2>
              </div>
              <p className="leading-7 text-slate-300">
                I design backend services that connect frontend products to databases, external APIs, and cloud platforms using robust, maintainable architectures.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">PHP & Node.js</div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">SQL & database design</div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">Cloud deployment</div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">Git/GitHub workflows</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
