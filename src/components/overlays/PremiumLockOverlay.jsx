import { motion } from 'framer-motion';

export default function PremiumLockOverlay({ cta = 'Unlock Premium' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-between rounded-2xl bg-[var(--bg)]/75 px-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-2 text-[var(--text-primary)]">
        <span className="text-lg" aria-hidden>
          🔒
        </span>
        <span className="text-sm font-semibold">Premium Content</span>
      </div>
      <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">{cta}</span>
    </motion.div>
  );
}
