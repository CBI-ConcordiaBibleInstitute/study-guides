export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)] transition hover:-translate-y-0.5 hover:text-[var(--text-primary)]"
      aria-label="Toggle theme"
    >
      {isDark ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}
