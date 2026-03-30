import { motion } from 'framer-motion';

export default function PremiumLockOverlay({ cta = 'Unlock Premium' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-between rounded-2xl bg-slate-950/70 px-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-2 text-slate-100">
        <span className="text-lg" aria-hidden>
          🔒
        </span>
        <span className="text-sm font-semibold">Premium Content</span>
      </div>
      <span className="rounded-full border border-brand-300/50 bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-200">
        {cta}
      </span>
    </motion.div>
  );
}
