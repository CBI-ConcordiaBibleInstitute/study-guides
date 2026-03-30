import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PodcastCard({ podcast }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card shadow-card"
    >
      <img
        src={podcast.cover}
        alt={podcast.title}
        className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      <div className="relative space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-xs text-text-primary">{podcast.badge}</span>
          <span className="text-xs text-text-secondary">{podcast.followers} followers</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-text-primary">{podcast.title}</h3>
        <p className="line-clamp-2 text-sm text-text-secondary">{podcast.summary}</p>
        <Link
          to={`/podcast/${podcast.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition group-hover:gap-3 group-hover:text-accent-400"
        >
          Explore podcast <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
