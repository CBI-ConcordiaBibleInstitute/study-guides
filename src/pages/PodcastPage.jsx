import { Link, useParams } from 'react-router-dom';
import EpisodeCard from '../components/cards/EpisodeCard';
import { getPodcastById } from '../data/content';

export default function PodcastPage() {
  const { podcastId } = useParams();
  const podcast = getPodcastById(podcastId);

  if (!podcast) {
    return <p className="text-slate-300">Podcast not found.</p>;
  }

  return (
    <section className="space-y-8">
      <Link to="/" className="text-sm font-semibold text-brand-500 hover:text-brand-600">
        ← Back to all podcasts
      </Link>
      <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
        <h1 className="text-3xl font-bold text-white">{podcast.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{podcast.summary}</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {podcast.episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} podcastId={podcast.id} />
        ))}
      </div>
    </section>
  );
}
