
import React from 'react';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}

/**
 * Clean Badge component for status tags.
 */
export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'neutral', 
  className = '',
  dot = false
}) => {
  const variants = {
    primary: 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800/50',
    success: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50',
    warning: 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50',
    error: 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800/50',
    neutral: 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-900/20 dark:text-slate-400 dark:border-slate-800/50',
  };

  const dotColors = {
    primary: 'bg-indigo-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
    neutral: 'bg-slate-500',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${variants[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
