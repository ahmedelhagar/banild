'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    try {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        const darkMode = JSON.parse(savedDarkMode);
        setIsDarkMode(darkMode);
        updateDocumentClass(darkMode);
      } else {
        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(systemPrefersDark);
        updateDocumentClass(systemPrefersDark);
        // Save the system preference
        try {
          localStorage.setItem('darkMode', JSON.stringify(systemPrefersDark));
        } catch (saveError) {
          console.warn('Failed to save system preference to localStorage:', saveError);
        }
      }
    } catch (error) {
      console.warn('Failed to load dark mode from localStorage:', error);
      // Fallback to system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      updateDocumentClass(systemPrefersDark);
    }
  }, []);

  // Update document class when dark mode changes
  const updateDocumentClass = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    updateDocumentClass(newDarkMode);
    
    // Save to localStorage with error handling
    try {
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    } catch (error) {
      console.warn('Failed to save dark mode to localStorage:', error);
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};