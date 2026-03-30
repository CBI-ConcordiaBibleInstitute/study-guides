import { Link, useParams } from 'react-router-dom';
import FadeInView from '../components/animations/FadeInView';
import SectionHeader from '../components/common/SectionHeader';
import SkeletonCard from '../components/feedback/SkeletonCard';
import Sidebar from '../components/layout/Sidebar';
import EpisodeList from '../components/lists/EpisodeList';
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
        <SectionHeader
          eyebrow="Podcast Episodes"
          title={`${podcast.title}`}
          subtitle="Browse all episodes in this podcast and open any episode to view its study guides."
        />
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Sidebar podcastId={podcast.id} podcastTitle={podcast.title} episodeCount={podcast.episodes.length} />
          <div className="space-y-4">
            <Link to="/" className="inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
              ← Back to podcasts
            </Link>
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} className="h-44" />)
            ) : (
              <EpisodeList episodes={podcast.episodes} podcastId={podcast.id} />
            )}
          </div>
        </div>
      </section>
    </FadeInView>
  );
}
