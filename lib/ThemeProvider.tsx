'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggle: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
      <button
        onClick={toggle}
        aria-label="Toggle dark mode"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          padding: '0.5rem 0.75rem',
          background: 'var(--color-primary, #6c63ff)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.4rem',
          cursor: 'pointer',
          zIndex: 9999,
          fontSize: '1.25rem',
        }}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </ThemeContext.Provider>
  );
}
