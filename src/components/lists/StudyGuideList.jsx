import { useMemo, useState } from 'react';
import StudyGuideCard from '../cards/StudyGuideCard';

export default function StudyGuideList({ podcast, episode }) {
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  const freeGuideKey = useMemo(() => {
    const firstEpisodeWithGuide = podcast.episodes.find((podcastEpisode) => podcastEpisode.guides?.length);
    if (!firstEpisodeWithGuide) return null;
    return `${firstEpisodeWithGuide.id}:${firstEpisodeWithGuide.guides[0].id}`;
  }, [podcast]);

  return (
    <>
      <div className="space-y-4">
        {episode.guides.map((guide) => {
          const guideKey = `${episode.id}:${guide.id}`;
          const isFreeGuide = guideKey === freeGuideKey;

          return (
            <StudyGuideCard
              key={guide.id}
              guide={guide}
              isPreview={isFreeGuide}
              onLockedClick={() => setShowPremiumPopup(true)}
            />
          );
        })}
      </div>

      {showPremiumPopup ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4" onClick={() => setShowPremiumPopup(false)}>
          <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)]" onClick={(event) => event.stopPropagation()}>
            <p className="text-lg font-semibold text-[var(--text-primary)]">🔒 Premium Content</p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Only the first study guide per podcast is free. Upgrade to unlock all remaining guides.</p>
            <button
              type="button"
              onClick={() => setShowPremiumPopup(false)}
              className="mt-4 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white"
            >
              Got it
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
