import { motion } from 'framer-motion';
import Button from '../common/Button';
import PremiumLockOverlay from '../overlays/PremiumLockOverlay';

export default function StudyGuideCard({ guide, isPreview, onOpen }) {
  const isLocked = guide.isPremium && !isPreview;

  return (
    <motion.article
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg shadow-black/25"
    >
      <div className="flex items-center justify-between gap-4 pr-1">
        <div>
          <h3 className="font-medium text-white">{guide.title}</h3>
          <p className="text-sm text-slate-400">{guide.duration}</p>
        </div>
        <Button onClick={() => onOpen?.(guide)} disabled={isLocked} aria-label={`Open ${guide.title}`}>
          {isLocked ? 'Locked' : 'Open'}
        </Button>
      </div>
      {isLocked ? <PremiumLockOverlay label="Unlock this guide" cta="Go Premium" /> : null}
    </motion.article>
  );
}
