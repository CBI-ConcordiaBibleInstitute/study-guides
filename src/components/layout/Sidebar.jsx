import { Link } from 'react-router-dom';

export default function Sidebar({ podcastId, podcastTitle, episodeCount }) {
  return (
    <aside className="hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 lg:block">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Now browsing</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{podcastTitle}</h3>
      <p className="mt-1 text-sm text-slate-400">{episodeCount} episodes</p>
      <Link
        to={`/podcast/${podcastId}/episodes`}
        className="mt-5 inline-flex text-sm font-semibold text-brand-400 hover:text-brand-300"
      >
        View all episodes →
      </Link>
    </aside>
  );
}
