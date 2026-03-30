import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--primary)]">✦</span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">StudyCast</p>
            <p className="text-xs text-[var(--text-secondary)]">Modern study streaming</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--text-secondary)] md:flex">
          <a href="#trending" className="transition hover:text-[var(--text-primary)]">Trending</a>
          <a href="#popular" className="transition hover:text-[var(--text-primary)]">Popular</a>
          <a href="#new" className="transition hover:text-[var(--text-primary)]">New</a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <Button>Explore Guides</Button>
        </div>
      </nav>
    </header>
  );
}
