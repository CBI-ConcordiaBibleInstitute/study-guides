import { Link, useParams } from 'react-router-dom';
import FadeInView from '../components/animations/FadeInView';
import StudyGuideCard from '../components/cards/StudyGuideCard';
import SectionHeader from '../components/common/SectionHeader';
import SkeletonCard from '../components/feedback/SkeletonCard';
import Sidebar from '../components/layout/Sidebar';
import useMockLoading from '../hooks/useMockLoading';
import { getEpisodeById, getPodcastById } from '../data/content';

export default function StudyGuidePage() {
  const { podcastId, episodeId } = useParams();
  const podcast = getPodcastById(podcastId);
  const episode = getEpisodeById(podcast, episodeId);
  const isLoading = useMockLoading();

  if (!podcast || !episode) {
    return <p className="text-text-secondary">Study guides not found.</p>;
  }

  return (
    <FadeInView>
      <section className="space-y-8">
        <Link to={`/podcast/${podcast.id}/episodes`} className="text-sm font-semibold text-accent-300 hover:text-accent-400">
          ← Back to episodes
        </Link>
        <header className="rounded-3xl border border-white/10 bg-card p-6 shadow-card">
          <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">{podcast.title}</p>
          <h1 className="mt-2 text-3xl font-semibold text-text-primary">{episode.title}</h1>
          <p className="mt-3 text-text-secondary">{episode.description}</p>
        </header>
        <SectionHeader
          eyebrow="Study Guides"
          title="Start free, then unlock premium"
          subtitle="The first guide is free. Upgrade to access all deeper packs and workshop assets."
        />
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Sidebar podcastId={podcast.id} podcastTitle={podcast.title} episodeCount={podcast.episodes.length} />
          <div className="space-y-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} className="h-24" />)
              : episode.guides.map((guide, index) => <StudyGuideCard key={guide.id} guide={guide} isPreview={index === 0} />)}
          </div>
        </div>
      </section>
    </FadeInView>
  );
}
