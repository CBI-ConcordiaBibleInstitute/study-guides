import PodcastCard from '../components/cards/PodcastCard';
import SectionHeader from '../components/common/SectionHeader';
import { getPodcastsByTag } from '../data/content';

const sections = [
  {
    id: 'trending',
    eyebrow: 'Trending Now',
    title: 'Most-played study podcasts',
    subtitle: 'Curated picks your community is listening to this week.',
    tag: 'trending'
  },
  {
    id: 'popular',
    eyebrow: 'Popular',
    title: 'Fan-favorite deep dives',
    subtitle: 'High-retention series with practical notes and premium packs.',
    tag: 'popular'
  },
  {
    id: 'new',
    eyebrow: 'New Releases',
    title: 'Fresh episodes this month',
    subtitle: 'New drops with free starter guides and locked bonus materials.',
    tag: 'new'
  }
];

export default function Home() {
  return (
    <section className="space-y-14">
      <header className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">Premium Learning Platform</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Stream podcast-style study guides with a world-class SaaS experience.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Discover series, drill into episodes, and unlock premium guide packs with a cinematic interface inspired by Netflix and Spotify.
        </p>
      </header>

      {sections.map((section) => (
        <section id={section.id} key={section.id} className="space-y-4 scroll-mt-24">
          <SectionHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {getPodcastsByTag(section.tag).map((podcast) => (
              <PodcastCard key={`${section.id}-${podcast.id}`} podcast={podcast} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
