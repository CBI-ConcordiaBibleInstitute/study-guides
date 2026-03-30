import { useState } from 'react';
import { cn } from '../../utils/cn';

export default function Button({ children, variant = 'primary', className = '', onClick, ...props }) {
  const [ripples, setRipples] = useState([]);

  const styles = {
    primary:
      'bg-brand-500 text-white hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-glow focus-visible:ring-brand-500/60',
    ghost:
      'border border-white/15 bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:ring-white/30'
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };

    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => setRipples((prev) => prev.filter((item) => item.id !== ripple.id)), 450);
    onClick?.(event);
  };

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2',
        styles[variant],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/25"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
