import { motion } from 'framer-motion';
import Button from '../common/Button';

export default function GuideCard({ guide, isFirstFree }) {
  const locked = guide.isPremium && !isFirstFree;

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4 transition shadow-lg shadow-black/25"
    >
      <div>
        <h3 className="font-medium text-white">{guide.title}</h3>
        <p className="text-sm text-slate-400">{guide.duration}</p>
      </div>
      {locked ? (
        <Button variant="ghost" aria-label="Unlock premium guide">
          🔒 Premium
        </Button>
      ) : (
        <Button aria-label="Open free guide">Free Access</Button>
      )}
    </motion.article>
  );
}
