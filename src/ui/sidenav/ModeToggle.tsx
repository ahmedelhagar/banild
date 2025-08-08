'use client';

import { Button, IconButton } from '@/ui/buttons';
import { cn } from '@/lib/utils';
import type { CommonNavProps } from './types';
import { Moon, Sun } from 'lucide-react';

interface ModeToggleProps extends CommonNavProps {
  onToggle: () => void;
}

export default function ModeToggle({ isCollapsed, isDarkMode, isRTL, onToggle }: ModeToggleProps) {
  const label = isDarkMode ? (isRTL ? 'الوضع الفاتح' : 'Light Mode') : (isRTL ? 'الوضع المظلم' : 'Dark Mode');
  const icon = isDarkMode ? <Sun /> : <Moon />;

  if (isCollapsed) {
    return (
      <IconButton
        icon={icon}
        aria-label={label}
        variant="secondary"
        size="sm"
        onClick={onToggle}
        className={cn(
          'w-9 h-9 justify-center flex-shrink-0',
          'cursor-pointer focus:outline-none transition-all duration-200',
          isDarkMode
            ? 'text-darkmode-secondaryicon hover:text-white'
            : 'text-lightmode-secondaryicon hover:text-black'
        )}
      />
    );
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      icon={icon}
      iconPosition={isRTL ? 'right' : 'left'}
      onClick={onToggle}
      className={cn(
        'w-full justify-start gap-2.5 px-2.5 py-2 text-sm font-medium',
        'flex items-center min-h-[36px] transition-all duration-200',
        'cursor-pointer focus:outline-none',
        isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row',
        isDarkMode
          ? 'text-darkmode-secondaryicon hover:text-white'
          : 'text-lightmode-secondaryicon hover:text-black'
      )}
    >
      <span className="flex-1 truncate">{label}</span>
    </Button>
  );
}

