export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600 hover:shadow-glow focus-visible:ring-brand-500/60',
    ghost: 'bg-slate-800/70 text-slate-100 hover:bg-slate-700 border border-slate-600'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
