import { Link } from 'react-router-dom';

export default function Sidebar({ podcastId, podcastTitle, episodeCount }) {
  return (
    <aside className="hidden rounded-2xl border border-white/10 bg-card p-5 lg:block">
      <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">Now browsing</p>
      <h3 className="mt-2 text-lg font-semibold text-text-primary">{podcastTitle}</h3>
      <p className="mt-1 text-sm text-text-secondary">{episodeCount} episodes</p>
      <Link to={`/podcast/${podcastId}/episodes`} className="mt-5 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-400">
        View all episodes →
      </Link>
    </aside>
  );
}
