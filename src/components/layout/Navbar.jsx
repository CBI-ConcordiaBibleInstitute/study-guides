import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-bold text-white transition hover:text-brand-500">
          StudyCast
        </Link>
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <span className="hidden sm:block">Podcast-style study guides</span>
          <span className="rounded-full bg-brand-500/10 px-3 py-1 text-brand-500">Premium</span>
        </div>
      </nav>
    </header>
  );
}
