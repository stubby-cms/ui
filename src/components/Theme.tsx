import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (_theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localTheme = localStorage.getItem('theme') as Theme;
  const [theme, setTheme] = useState<Theme>(localTheme ?? 'light');

  useEffect(() => {
    if (localTheme) {
      setTheme(localTheme);
      toggleTheme(localTheme);
    }
  }, []);

  const toggleTheme = (_theme: 'dark' | 'light') => {
    localStorage.setItem('theme', _theme);
    setTheme(_theme);

    document.documentElement.classList.add(_theme);
    document.documentElement.classList.remove(_theme === 'dark' ? 'light' : 'dark');
    document.documentElement.style.colorScheme = _theme;
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
