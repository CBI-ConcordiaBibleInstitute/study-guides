import FadeInView from '../components/animations/FadeInView';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import SkeletonCard from '../components/feedback/SkeletonCard';
import PodcastList from '../components/lists/PodcastList';
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
        <header className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,var(--accent-soft),transparent_55%)]" />
          <div className="relative space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Faith + Learning Platform</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl">
              Explore podcasts, open episodes, and grow with structured study guides.
            </h1>
            <p className="max-w-2xl text-[var(--text-secondary)]">
              Click any podcast to view all episodes, then open an episode to access study guides with built-in free + premium gating.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Get Started</Button>
              <Button variant="ghost">Explore Podcasts</Button>
            </div>
          </div>
        </header>
      </FadeInView>

      {sections.map((section, sectionIndex) => (
        <FadeInView key={section.id} delay={sectionIndex * 0.05}>
          <section id={section.id} className="space-y-4 scroll-mt-24">
            <SectionHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
            {isLoading ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonCard key={index} className="h-72" />
                ))}
              </div>
            ) : (
              <PodcastList podcasts={getPodcastsByTag(section.tag)} />
            )}
          </section>
        </FadeInView>
      ))}
    </section>
  );
}
