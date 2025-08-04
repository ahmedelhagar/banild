'use client';

import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface NavDashboardProps {
  isCollapsed?: boolean;
}

export default function NavDashboard({ isCollapsed = false }: NavDashboardProps) {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  if (isCollapsed) {
    return (
      <Link
        href="/dashboard"
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 group relative",
          isDarkMode
            ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
            : "text-gray-600 hover:bg-gray-50 hover:text-black"
        )}
        title={t('nav.dashboard')}
      >
        <LayoutDashboard className="w-4 h-4" />
      </Link>
    );
  }

  return (
    <Link
      href="/dashboard"
      className={cn(
        "flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
        isDarkMode
          ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
          : "text-gray-600 hover:bg-gray-50 hover:text-black",
        {
          "flex-row-reverse": isRTL
        }
      )}
    >
      <LayoutDashboard className={cn(
        "w-4 h-4",
        {
          "ml-2": isRTL,
          "mr-2": !isRTL
        }
      )} />
      {t('nav.dashboard')}
    </Link>
  );
}