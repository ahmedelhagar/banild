'use client';

import { Search } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

export default function NavSearch() {
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="p-4">
      <div className="relative">
        <Search className={cn(
          "absolute top-1/2 transform -translate-y-1/2 w-4 h-4",
          isDarkMode ? "text-gray-400" : "text-gray-500",
          {
            "left-3": !isRTL,
            "right-3": isRTL
          }
        )} />
        <input
          type="text"
          placeholder="Search projects..."
          className={cn(
            "w-full text-sm rounded-lg border transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-opacity-50",
            isDarkMode 
              ? "bg-[#161616] border-[#2a2a2a] text-gray-100 placeholder-gray-500 focus:ring-gray-400 focus:border-gray-400" 
              : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-black focus:border-black",
            {
              "pl-10 pr-4 py-2": !isRTL,
              "pr-10 pl-4 py-2": isRTL
            }
          )}
        />
      </div>
    </div>
  );
}