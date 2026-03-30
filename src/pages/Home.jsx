import PodcastCard from '../components/cards/PodcastCard';
import { podcasts } from '../data/content';

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="inline-flex rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
          Learn faster
        </p>
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">Discover study guides like your favorite podcast app.</h1>
        <p className="text-slate-300">Browse shows, open episodes, and unlock premium guide packs as you grow.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </section>
  );
}
