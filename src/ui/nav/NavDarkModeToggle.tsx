'use client';

import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface NavDarkModeToggleProps {
  isCollapsed?: boolean;
}

export default function NavDarkModeToggle({ isCollapsed = false }: NavDarkModeToggleProps) {
  const { isRTL } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  if (isCollapsed) {
    return (
      <button
        onClick={toggleDarkMode}
        className={cn(
          "p-2 rounded-lg transition-colors duration-200 group relative",
          isDarkMode
            ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
            : "text-gray-600 hover:bg-gray-50 hover:text-black"
        )}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={isDarkMode ? "Light Mode" : "Dark Mode"}
      >
        {isDarkMode ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
        isDarkMode
          ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
          : "text-gray-600 hover:bg-gray-50 hover:text-black",
        {
          "flex-row-reverse": isRTL
        }
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className={cn(
          "w-4 h-4",
          {
            "ml-2": isRTL,
            "mr-2": !isRTL
          }
        )} />
      ) : (
        <Moon className={cn(
          "w-4 h-4",
          {
            "ml-2": isRTL,
            "mr-2": !isRTL
          }
        )} />
      )}
      <span className="text-xs">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}