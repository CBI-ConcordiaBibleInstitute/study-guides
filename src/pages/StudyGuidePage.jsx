import { Link, useParams } from 'react-router-dom';
import FadeInView from '../components/animations/FadeInView';
import SectionHeader from '../components/common/SectionHeader';
import SkeletonCard from '../components/feedback/SkeletonCard';
import Sidebar from '../components/layout/Sidebar';
import StudyGuideList from '../components/lists/StudyGuideList';
import useMockLoading from '../hooks/useMockLoading';
import { getEpisodeById, getPodcastById } from '../data/content';

export default function StudyGuidePage() {
  const { podcastId, episodeId } = useParams();
  const podcast = getPodcastById(podcastId);
  const episode = getEpisodeById(podcast, episodeId);
  const isLoading = useMockLoading();

  if (!podcast || !episode) {
    return <p className="text-[var(--text-secondary)]">Study guides not found.</p>;
  }

  return (
    <FadeInView>
      <section className="space-y-8">
        <Link to={`/podcast/${podcast.id}`} className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
          ← Back to episodes
        </Link>
        <header className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">{podcast.title}</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">{episode.title}</h1>
          <p className="mt-3 text-[var(--text-secondary)]">{episode.description}</p>
        </header>
        <SectionHeader
          eyebrow="Study Guides"
          title="Free + Premium Access"
          subtitle="Only the first guide in this podcast is free. Remaining guides are premium locked."
        />
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Sidebar podcastId={podcast.id} podcastTitle={podcast.title} episodeCount={podcast.episodes.length} />
          {isLoading ? (
            <div className="space-y-4">{Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} className="h-24" />)}</div>
          ) : (
            <StudyGuideList podcast={podcast} episode={episode} />
          )}
        </div>
      </section>
    </FadeInView>
  );
}
