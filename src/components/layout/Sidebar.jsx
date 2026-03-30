import { Link } from 'react-router-dom';

export default function Sidebar({ podcastId, podcastTitle, episodeCount }) {
  return (
    <aside className="hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:block">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Now browsing</p>
      <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{podcastTitle}</h3>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">{episodeCount} episodes</p>
      <Link to={`/podcast/${podcastId}`} className="mt-5 inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
        View all episodes →
      </Link>
    </aside>
  );
}
