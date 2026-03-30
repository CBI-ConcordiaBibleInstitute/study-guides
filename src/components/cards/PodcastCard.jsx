import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PodcastCard({ podcast }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]"
    >
      <img src={podcast.cover} alt={podcast.title} loading="lazy" decoding="async" className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="relative space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1 text-xs text-[var(--text-primary)]">{podcast.badge}</span>
          <span className="text-xs text-[var(--text-secondary)]">{podcast.followers} followers</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-[var(--text-primary)]">{podcast.title}</h3>
        <p className="line-clamp-2 text-sm text-[var(--text-secondary)]">{podcast.summary}</p>
        <Link to={`/podcast/${podcast.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition group-hover:gap-3 hover:text-[var(--brand)]">
          Explore podcast <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
