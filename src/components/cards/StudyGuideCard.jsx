import { motion } from 'framer-motion';
import Button from '../common/Button';
import PremiumLockOverlay from '../overlays/PremiumLockOverlay';

export default function StudyGuideCard({ guide, isPreview, onOpen, onLockedClick }) {
  const isLocked = !isPreview;

  return (
    <motion.article
      whileHover={{ y: -2, scale: 1.01 }}
      className="saas-card relative overflow-hidden p-4"
    >
      <div className={`flex items-center justify-between gap-4 pr-1 transition ${isLocked ? 'blur-[1.8px]' : ''}`}>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-[var(--surface-elevated)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              {isLocked ? 'Premium' : 'Free'}
            </span>
            {isLocked ? <span className="text-xs text-[var(--text-secondary)]">Locked content</span> : null}
          </div>
          <h3 className="font-medium text-[var(--text-primary)]">{guide.title}</h3>
          <p className="text-sm text-[var(--text-secondary)]">{guide.duration}</p>
        </div>
        <Button
          onClick={isLocked ? onLockedClick : () => onOpen?.(guide)}
          variant={isLocked ? 'ghost' : 'primary'}
          aria-label={`Open ${guide.title}`}
        >
          {isLocked ? 'Unlock' : 'Open'}
        </Button>
      </div>

      {isLocked ? <PremiumLockOverlay cta="Unlock to Access" /> : null}
    </motion.article>
  );
}
