import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PodcastCard({ podcast }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl"
    >
      <img src={podcast.cover} alt={podcast.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Hosted by {podcast.host}</p>
        <h3 className="text-xl font-semibold text-white">{podcast.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-300">{podcast.summary}</p>
        <Link
          to={`/podcast/${podcast.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition group-hover:gap-3"
        >
          Open podcast <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
