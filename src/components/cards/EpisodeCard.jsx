import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EpisodeCard({ episode, podcastId, episodeNumber }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="saas-card p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">Episode {episodeNumber}</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{episode.title}</h3>
        </div>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--text-secondary)]">{episode.length}</span>
      </div>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">{episode.description}</p>
      <Link
        to={`/podcast/${podcastId}/episode/${episode.id}/study-guides`}
        className="inline-flex text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
      >
        Open study guides →
      </Link>
    </motion.article>
  );
}
