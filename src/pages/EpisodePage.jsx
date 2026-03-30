import { Link, useParams } from 'react-router-dom';
import GuideCard from '../components/cards/GuideCard';
import { getEpisodeById, getPodcastById } from '../data/content';

export default function EpisodePage() {
  const { podcastId, episodeId } = useParams();
  const podcast = getPodcastById(podcastId);
  const episode = getEpisodeById(podcast, episodeId);

  if (!podcast || !episode) {
    return <p className="text-slate-300">Episode not found.</p>;
  }

  return (
    <section className="space-y-8">
      <Link to={`/podcast/${podcast.id}`} className="text-sm font-semibold text-brand-500 hover:text-brand-600">
        ← Back to episodes
      </Link>
      <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{podcast.title}</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{episode.title}</h1>
        <p className="mt-2 text-slate-300">{episode.description}</p>
      </header>

      <div className="space-y-4">
        {episode.guides.map((guide, index) => (
          <GuideCard key={guide.id} guide={guide} isFirstFree={index === 0} />
        ))}
      </div>
    </section>
  );
}
