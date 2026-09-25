"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ mode: 'onTouched' });

  const onSubmit = async (data: ContactFormValues) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // Keys must match the {{variables}} in the EmailJS template.
          name: data.name,
          email: data.email,
          title: `New portfolio message from ${data.name}`,
          time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
          message: data.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="glass-card p-10 sm:p-12">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-100">Let’s build your next digital experience.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Send a message for collaboration, consulting, or project inquiries — I respond quickly and professionally.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid gap-6 sm:grid-cols-[1fr_1fr]">
          <label className="col-span-full flex flex-col gap-2 text-sm text-slate-300">
            Name
            <input
              {...register('name', { required: 'Name is required' })}
              className="rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/70"
              placeholder="Your full name"
            />
            {errors.name && <span className="text-xs text-rose-400">{errors.name.message}</span>}
          </label>
          <label className="col-span-full flex flex-col gap-2 text-sm text-slate-300">
            Email
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
              })}
              className="rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/70"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-xs text-rose-400">{errors.email.message}</span>}
          </label>
          <label className="col-span-full flex flex-col gap-2 text-sm text-slate-300">
            Message
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="min-h-[160px] rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/70"
              placeholder="Tell me about your project"
            />
            {errors.message && <span className="text-xs text-rose-400">{errors.message.message}</span>}
          </label>
          <div className="col-span-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            <p className="text-sm text-slate-400">
              Prefer email? <a href="mailto:jaydeepkadiya005@gmail.com" className="font-semibold text-slate-100 hover:text-cyan-200 transition">jaydeepkadiya005@gmail.com</a>
            </p>
          </div>
        </form>

        {status === 'success' && <p className="mt-5 rounded-3xl bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200">Message sent successfully. I’ll get back to you soon.</p>}
        {status === 'error' && <p className="mt-5 rounded-3xl bg-rose-500/10 px-5 py-4 text-sm text-rose-200">There was an issue sending your message. Please try again later.</p>}
      </motion.div>
    </section>
  );
}
