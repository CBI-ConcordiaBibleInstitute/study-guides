export default function PageSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 w-1/3 rounded-xl bg-[var(--surface-elevated)]" />
      <div className="h-40 rounded-2xl bg-[var(--surface-elevated)]" />
      <div className="h-24 rounded-2xl bg-[var(--surface-elevated)]" />
    </div>
  );
}
