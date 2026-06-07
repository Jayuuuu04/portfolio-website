import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 lg:px-14">
      <section className="mx-auto max-w-4xl rounded-3xl border border-slate-800/80 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-md">
        <h1 className="text-4xl font-semibold text-violet-300">Projects</h1>
        <p className="mt-6 leading-8 text-slate-300">
          The homepage contains premium project highlights, tech-driven case studies, and next-level product details.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
          Return to Portfolio
        </Link>
      </section>
    </main>
  );
}
