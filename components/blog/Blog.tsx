import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog';

export function Blog() {
  return (
    <section id="blogs" className="glass-card p-10 sm:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Blogs</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-100">Insights that blend strategy and execution.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Thoughtful content on product design, development workflow, and frontend strategy.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
          >
            <h3 className="text-xl font-semibold text-slate-100">{post.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{post.summary}</p>
            <a href={post.url} className="mt-6 inline-flex text-sm font-semibold text-fuchsia-200 transition hover:text-white">
              Read article →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
