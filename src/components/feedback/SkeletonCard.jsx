import { motion } from 'framer-motion';

export default function SkeletonCard({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.9 }}
      className={`rounded-2xl border border-white/10 bg-slate-800/60 ${className}`}
    />
  );
}
