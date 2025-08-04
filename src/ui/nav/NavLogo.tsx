'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

export default function NavLogo() {
  const { t, isRTL, getFontClass } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <div className={cn(
      "flex items-center p-4 lg:p-6 border-b",
      "border-gray-200 dark:border-gray-700",
      {
        "flex-row-reverse": isRTL
      }
    )}>
      <Link href="/" className="flex items-center space-x-3">
        <div className={cn(
          "w-8 h-8 rounded-lg flex items-center justify-center",
          isDarkMode ? "bg-white" : "bg-black"
        )}>
          <span className={cn(
            "font-bold text-sm",
            isDarkMode ? "text-black" : "text-white"
          )}>
            B
          </span>
        </div>
        <span className={cn(
          "text-lg lg:text-xl font-bold",
          "text-black dark:text-white",
          getFontClass(),
          {
            "mr-3 ml-0": isRTL,
            "ml-3": !isRTL
          }
        )}>
          {t('nav.brandName')}
        </span>
      </Link>
    </div>
  );
}