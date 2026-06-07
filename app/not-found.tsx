export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-24 text-center sm:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <h1 className="text-5xl font-semibold text-slate-100">Page not found</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">The page you were looking for could not be found. Return to the homepage to continue.</p>
          <a href="/" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
