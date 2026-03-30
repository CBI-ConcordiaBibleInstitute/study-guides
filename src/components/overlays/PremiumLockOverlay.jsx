import { motion } from 'framer-motion';

export default function PremiumLockOverlay({ cta = 'Unlock Premium' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-between rounded-2xl bg-bg/75 px-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-2 text-text-primary">
        <span className="text-lg" aria-hidden>
          🔒
        </span>
        <span className="text-sm font-semibold">Premium Content</span>
      </div>
      <span className="rounded-full border border-accent-300/60 bg-accent-500/25 px-3 py-1 text-xs font-semibold text-accent-300">{cta}</span>
    </motion.div>
  );
}
