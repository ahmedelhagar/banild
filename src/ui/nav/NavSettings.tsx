'use client';

import Link from 'next/link';
import { Settings } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface NavSettingsProps {
  isCollapsed?: boolean;
}

export default function NavSettings({ isCollapsed = false }: NavSettingsProps) {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  if (isCollapsed) {
    return (
      <Link
        href="/settings"
        className={cn(
          "p-2 rounded-lg transition-colors duration-200 group relative flex justify-center",
          isDarkMode
            ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
            : "text-gray-600 hover:bg-gray-50 hover:text-black"
        )}
        title={t('nav.settings')}
      >
        <Settings className="w-4 h-4" />
      </Link>
    );
  }

  return (
    <Link
      href="/settings"
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
        isDarkMode
          ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
          : "text-gray-600 hover:bg-gray-50 hover:text-black",
        {
          "flex-row-reverse": isRTL
        }
      )}
    >
      <Settings className={cn(
        "w-4 h-4",
        {
          "ml-2": isRTL,
          "mr-2": !isRTL
        }
      )} />
      {t('nav.settings')}
    </Link>
  );
}