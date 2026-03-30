export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'bg-brand-500 text-white hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-glow focus-visible:ring-brand-500/60',
    ghost:
      'border border-white/15 bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:ring-white/30'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
