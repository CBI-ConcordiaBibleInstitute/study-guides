import { motion } from 'framer-motion';

export default function SkeletonCard({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0.45 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.9 }}
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] ${className}`}
    />
  );
}
