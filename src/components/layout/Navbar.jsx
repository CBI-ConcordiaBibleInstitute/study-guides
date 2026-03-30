import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-500/20 text-brand-300">▶</span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">StudyCast</p>
            <p className="text-xs text-slate-400">Premium study streaming</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#trending" className="transition hover:text-white">Trending</a>
          <a href="#popular" className="transition hover:text-white">Popular</a>
          <a href="#new" className="transition hover:text-white">New</a>
        </div>

        <Button className="hidden sm:inline-flex">Start Free</Button>
      </nav>
    </header>
  );
}
