import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:bg-cyan-300"
    >
      {children}
    </Link>
  );
}
