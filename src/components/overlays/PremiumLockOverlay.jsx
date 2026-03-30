import Button from '../common/Button';

export default function PremiumLockOverlay({ label = 'Premium content', cta = 'Upgrade' }) {
  return (
    <div className="absolute inset-0 flex items-center justify-between rounded-2xl bg-slate-950/75 p-4 backdrop-blur-sm">
      <p className="text-sm font-medium text-slate-100">🔒 {label}</p>
      <Button variant="ghost">{cta}</Button>
    </div>
  );
}
