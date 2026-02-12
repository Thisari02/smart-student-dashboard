
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
}

/**
 * Standard UI Card component for the dashboard.
 * Supports consistent border-radius, shadows, and dark mode transitions.
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  title, 
  subtitle, 
  action,
  noPadding = false
}) => {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden transition-all ${className}`}>
      {(title || action) && (
        <div className="px-6 py-5 flex items-center justify-between border-b border-gray-50 dark:border-slate-700/50">
          <div>
            {title && <h3 className="text-lg font-bold tracking-tight">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};
