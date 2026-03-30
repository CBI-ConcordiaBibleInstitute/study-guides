import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import FadeInView from '../components/animations/FadeInView';
import Button from '../components/common/Button';
import { getPodcastById } from '../data/content';

export default function PodcastPage() {
  const { podcastId } = useParams();
  const podcast = getPodcastById(podcastId);

  if (!podcast) {
    return <p className="text-[var(--text-secondary)]">Podcast not found.</p>;
  }

  return (
    <FadeInView>
      <section className="space-y-8">
        <Link to="/" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
          ← Back to home
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] lg:grid-cols-[320px_1fr]"
        >
          <img src={podcast.cover} alt={podcast.title} className="h-72 w-full rounded-xl object-cover" />
          <div className="space-y-4 self-center">
            <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">{podcast.badge}</span>
            <h1 className="text-4xl font-semibold text-[var(--text-primary)]">{podcast.title}</h1>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-secondary)]">Hosted by {podcast.host}</p>
            <p className="max-w-2xl text-[var(--text-secondary)]">{podcast.summary}</p>
            <div className="flex items-center gap-3">
              <Link to={`/podcast/${podcast.id}/episodes`}>
                <Button>Browse Episodes</Button>
              </Link>
              <span className="text-sm text-[var(--text-secondary)]">{podcast.followers} followers</span>
            </div>
          </div>
        </motion.section>
      </section>
    </FadeInView>
  );
}
