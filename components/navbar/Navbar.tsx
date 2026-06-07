"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Academics', href: '#academics' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between py-6 px-5 sm:px-8 lg:px-12"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 shadow-lg shadow-slate-950/20 backdrop-blur-xl">
        <span className="inline-flex h-3 w-3 rounded-full bg-cyan-400" />
        <div>
          <p className="text-sm font-semibold text-cyan-300">Jaydeep Kadiya</p>
          <p className="text-xs text-slate-400">Backend Developer</p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-200">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-100 transition hover:border-cyan-300/70 hover:bg-slate-800/90 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-5 top-24 rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-800/80 hover:text-cyan-200" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
