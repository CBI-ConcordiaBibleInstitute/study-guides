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
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--primary)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v18M3 12h18" />
            </svg>
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">StudyCast</p>
            <p className="text-xs text-[var(--text-secondary)]">Concordia Bible Institute</p>
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
