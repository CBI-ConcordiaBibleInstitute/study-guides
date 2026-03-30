import { Link, useParams } from 'react-router-dom';
import FadeInView from '../components/animations/FadeInView';
import EpisodeCard from '../components/cards/EpisodeCard';
import SectionHeader from '../components/common/SectionHeader';
import SkeletonCard from '../components/feedback/SkeletonCard';
import Sidebar from '../components/layout/Sidebar';
import useMockLoading from '../hooks/useMockLoading';
import { getPodcastById } from '../data/content';

export default function EpisodeListPage() {
  const { podcastId } = useParams();
  const podcast = getPodcastById(podcastId);
  const isLoading = useMockLoading();

  if (!podcast) {
    return <p className="text-[var(--text-secondary)]">Podcast not found.</p>;
  }

  return (
    <FadeInView>
      <section className="space-y-8">
        <Link to={`/podcast/${podcast.id}`} className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
          ← Back to podcast
        </Link>
        <SectionHeader eyebrow="Episode Library" title={`${podcast.title} Episodes`} subtitle="Choose an episode to open its study guide stack." />
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Sidebar podcastId={podcast.id} podcastTitle={podcast.title} episodeCount={podcast.episodes.length} />
          <div className="grid gap-4 lg:grid-cols-2">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} className="h-40" />)
              : podcast.episodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} podcastId={podcast.id} />)}
          </div>
        </div>
      </section>
    </FadeInView>
  );
}
