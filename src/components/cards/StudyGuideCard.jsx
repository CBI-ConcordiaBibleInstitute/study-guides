import { motion } from 'framer-motion';
import Button from '../common/Button';
import PremiumLockOverlay from '../overlays/PremiumLockOverlay';

export default function StudyGuideCard({ guide, isPreview, onOpen }) {
  const isLocked = !isPreview;

  return (
    <motion.article
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg shadow-black/25"
    >
      <div className={`flex items-center justify-between gap-4 pr-1 transition ${isLocked ? 'blur-[1.8px]' : ''}`}>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              {isLocked ? 'Premium' : 'Free'}
            </span>
            {isLocked ? <span className="text-xs text-slate-400">Preview only</span> : null}
          </div>
          <h3 className="font-medium text-white">{guide.title}</h3>
          <p className="text-sm text-slate-400">{guide.duration}</p>
        </div>
        <Button onClick={() => onOpen?.(guide)} disabled={isLocked} aria-label={`Open ${guide.title}`}>
          {isLocked ? 'Locked' : 'Open'}
        </Button>
      </div>

      {isLocked ? <PremiumLockOverlay cta="Unlock" /> : null}
    </motion.article>
  );
}
