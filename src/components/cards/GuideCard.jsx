import Button from '../common/Button';

export default function GuideCard({ guide, isFirstFree }) {
  const locked = guide.isPremium && !isFirstFree;

  return (
    <article className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-brand-500/40">
      <div>
        <h3 className="font-medium text-white">{guide.title}</h3>
        <p className="text-sm text-slate-400">{guide.duration}</p>
      </div>
      {locked ? (
        <Button variant="ghost" aria-label="Unlock premium guide">
          🔒 Premium
        </Button>
      ) : (
        <Button aria-label="Open free guide">Open Free</Button>
      )}
    </article>
  );
}
