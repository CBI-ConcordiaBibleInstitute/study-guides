import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-500/25 text-accent-300">✦</span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-text-primary">StudyCast</p>
            <p className="text-xs text-text-secondary">Faithful learning, premium experience</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex">
          <a href="#trending" className="transition hover:text-text-primary">Trending</a>
          <a href="#popular" className="transition hover:text-text-primary">Popular</a>
          <a href="#new" className="transition hover:text-text-primary">New</a>
        </div>

        <Button>Explore Guides</Button>
      </nav>
    </header>
  );
}
