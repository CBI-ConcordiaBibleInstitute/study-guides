import { Link, useParams } from 'react-router-dom';
import StudyGuideCard from '../components/cards/StudyGuideCard';
import SectionHeader from '../components/common/SectionHeader';
import Sidebar from '../components/layout/Sidebar';
import { getEpisodeById, getPodcastById } from '../data/content';

export default function StudyGuidePage() {
  const { podcastId, episodeId } = useParams();
  const podcast = getPodcastById(podcastId);
  const episode = getEpisodeById(podcast, episodeId);

  if (!podcast || !episode) {
    return <p className="text-slate-300">Study guides not found.</p>;
  }

  return (
    <section className="space-y-8">
      <Link to={`/podcast/${podcast.id}/episodes`} className="text-sm font-semibold text-brand-400 hover:text-brand-300">
        ← Back to episodes
      </Link>
      <header className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-black/30">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{podcast.title}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{episode.title}</h1>
        <p className="mt-3 text-slate-300">{episode.description}</p>
      </header>
      <SectionHeader
        eyebrow="Study Guides"
        title="Start free, then unlock premium"
        subtitle="The first guide is free. Upgrade to access all deeper packs and workshop assets."
      />
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <Sidebar podcastId={podcast.id} podcastTitle={podcast.title} episodeCount={podcast.episodes.length} />
        <div className="space-y-4">
          {episode.guides.map((guide, index) => (
            <StudyGuideCard key={guide.id} guide={guide} isPreview={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
