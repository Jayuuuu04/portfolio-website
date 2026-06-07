export function Footer() {
  return (
    <footer className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 text-slate-400 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Ready to launch</p>
          <p className="mt-2 text-slate-300">A responsive, polished experience built for modern products and creators.</p>
        </div>
        <p className="text-sm text-slate-500">© 2026 Premium Portfolio. Designed for impact.</p>
      </div>
    </footer>
  );
}
