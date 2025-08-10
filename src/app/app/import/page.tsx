"use client";

import ImportOptions from '@/components/import/ImportOptions';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/lib/useDarkMode';

export default function ImportPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={cn("w-full h-full bg-lightmode-secondary mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-10", isDarkMode ? "bg-darkmode-secondary" : "bg-lightmode-secondary")}>
      <ImportOptions />
    </div>
  );
}