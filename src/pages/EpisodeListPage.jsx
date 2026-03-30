import { Link, useParams } from 'react-router-dom';
import EpisodeCard from '../components/cards/EpisodeCard';
import SectionHeader from '../components/common/SectionHeader';
import { getPodcastById } from '../data/content';

export default function EpisodeListPage() {
  const { podcastId } = useParams();
  const podcast = getPodcastById(podcastId);

  if (!podcast) {
    return <p className="text-slate-300">Podcast not found.</p>;
  }

  return (
    <section className="space-y-8">
      <Link to={`/podcast/${podcast.id}`} className="text-sm font-semibold text-brand-400 hover:text-brand-300">
        ← Back to podcast
      </Link>
      <SectionHeader
        eyebrow="Episode Library"
        title={`${podcast.title} Episodes`}
        subtitle="Choose an episode to open its study guide stack."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {podcast.episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} podcastId={podcast.id} />
        ))}
      </div>
    </section>
  );
}
