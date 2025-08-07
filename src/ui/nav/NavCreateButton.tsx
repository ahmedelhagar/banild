'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface NavCreateButtonProps {
  isCollapsed?: boolean;
}

export default function NavCreateButton({ isCollapsed = false }: NavCreateButtonProps) {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  if (isCollapsed) {
    return (
      <Link
        href="/create"
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 group relative",
          isDarkMode 
            ? "bg-white text-black hover:bg-gray-200" 
            : "bg-black text-white hover:bg-gray-800"
        )}
        title={t('nav.createProject')}
      >
        <Plus className="w-5 h-5" />
      </Link>
    );
  }

  return (
    <Link
      href="/create"
      className={cn(
        "flex items-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg transition-colors duration-200",
        isDarkMode 
          ? "bg-white text-black hover:bg-gray-200" 
          : "bg-black hover:bg-gray-800",
        {
          "flex-row-reverse": isRTL
        }
      )}
    >
      <Plus className={cn(
        "w-4 h-4",
        {
          "ml-2": isRTL,
          "mr-2": !isRTL
        }
      )} />
      {t('nav.createProject')}
    </Link>
  );
}