'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <button 
        className="group gradient-green-yellow text-white px-4 py-2 rounded-2xl shadow-lg hover:shadow-2xl hover-lift text-sm font-bold backdrop-blur-sm border border-white/20"
        disabled
      >
        <span className="flex items-center gap-2">
          🌙 Tema
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="group gradient-green-yellow text-white px-4 py-2 rounded-2xl shadow-lg hover:shadow-2xl hover-lift text-sm font-bold backdrop-blur-sm border border-white/20"
      title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <span className="flex items-center gap-2">
        {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Escuro' : 'Claro'}
        <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      </span>
    </button>
  );
}