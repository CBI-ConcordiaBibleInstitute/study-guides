import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EpisodeCard({ episode, podcastId }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/30"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{episode.title}</h3>
        <span className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-xs text-slate-300">{episode.length}</span>
      </div>
      <p className="mb-4 text-sm text-slate-300">{episode.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{episode.publishedAt}</p>
        <Link
          to={`/podcast/${podcastId}/episode/${episode.id}/study-guides`}
          className="text-sm font-semibold text-brand-400 transition hover:text-brand-300"
        >
          Open guides →
        </Link>
      </div>
    </motion.article>
  );
}
