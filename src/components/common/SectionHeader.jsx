export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-5 space-y-1.5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm text-slate-300">{subtitle}</p> : null}
    </div>
  );
}
