'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <button 
        className="w-12 h-12 rounded-full gradient-green-yellow text-white shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20"
        disabled
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <path d="m12 1-3 3-3-3 3-3 3 3zm0 22-3 3-3-3 3-3 3 3zm-10-10-3-3 3-3v6zm22 0-3-3 3-3v6z"/>
        </svg>
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="group w-12 h-12 rounded-full gradient-green-yellow text-white shadow-lg hover:shadow-2xl hover-lift flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
      title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      )}
    </button>
  );
}