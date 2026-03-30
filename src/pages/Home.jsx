import FadeInView from '../components/animations/FadeInView';
import PodcastCard from '../components/cards/PodcastCard';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import SkeletonCard from '../components/feedback/SkeletonCard';
import useMockLoading from '../hooks/useMockLoading';
import { getPodcastsByTag } from '../data/content';

const sections = [
  { id: 'trending', eyebrow: 'Trending Now', title: 'Most-played study podcasts', subtitle: 'Curated picks your community is listening to this week.', tag: 'trending' },
  { id: 'popular', eyebrow: 'Popular', title: 'Fan-favorite deep dives', subtitle: 'High-retention series with practical notes and premium packs.', tag: 'popular' },
  { id: 'new', eyebrow: 'New Releases', title: 'Fresh episodes this month', subtitle: 'New drops with free starter guides and locked bonus materials.', tag: 'new' }
];

export default function Home() {
  const isLoading = useMockLoading();

  return (
    <section className="space-y-14">
      <FadeInView>
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 shadow-card sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(137,35,52,0.2),transparent_55%)]" />
          <div className="relative space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">Faith + Learning Platform</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl">
              Grow in Scripture with podcast-style study guides built for modern discipleship.
            </h1>
            <p className="max-w-2xl text-text-secondary">
              Explore curated episodes, open guided notes, and unlock premium learning paths in a clean academic experience inspired by concordiabible.org.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Get Started</Button>
              <Button variant="ghost">Explore Guides</Button>
            </div>
          </div>
        </header>
      </FadeInView>

      {sections.map((section, sectionIndex) => (
        <FadeInView key={section.id} delay={sectionIndex * 0.05}>
          <section id={section.id} className="space-y-4 scroll-mt-24">
            <SectionHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} className="h-72" />)
                : getPodcastsByTag(section.tag).map((podcast) => (
                    <PodcastCard key={`${section.id}-${podcast.id}`} podcast={podcast} />
                  ))}
            </div>
          </section>
        </FadeInView>
      ))}
    </section>
  );
}
