import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EpisodeCard({ episode, podcastId }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="rounded-2xl border border-white/10 bg-card p-5 shadow-card"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-text-primary">{episode.title}</h3>
        <span className="rounded-full border border-white/10 bg-card-elevated px-3 py-1 text-xs text-text-secondary">{episode.length}</span>
      </div>
      <p className="mb-4 text-sm text-text-secondary">{episode.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">{episode.publishedAt}</p>
        <Link to={`/podcast/${podcastId}/episode/${episode.id}/study-guides`} className="text-sm font-semibold text-accent-300 transition hover:text-accent-400">
          Open guides →
        </Link>
      </div>
    </motion.article>
  );
}
