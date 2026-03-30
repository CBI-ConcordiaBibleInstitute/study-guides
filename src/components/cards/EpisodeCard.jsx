import { Link } from 'react-router-dom';

export default function EpisodeCard({ episode, podcastId }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:border-brand-500/40 hover:shadow-glow">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{episode.title}</h3>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{episode.length}</span>
      </div>
      <p className="mb-4 text-sm text-slate-300">{episode.description}</p>
      <Link
        to={`/podcast/${podcastId}/episode/${episode.id}`}
        className="text-sm font-semibold text-brand-500 transition hover:text-brand-600"
      >
        View guides
      </Link>
    </article>
  );
}
