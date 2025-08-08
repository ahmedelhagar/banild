'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/buttons';
import type { NavItem, CommonNavProps } from './types';

interface NavItemButtonProps extends CommonNavProps {
  item: NavItem;
  isActive: boolean;
  onClick: (item: NavItem) => void;
}

export default function NavItemButton({ item, isCollapsed, isDarkMode, isRTL, isActive, onClick }: NavItemButtonProps) {
  const label = isRTL ? item.labelAr : item.labelEn;

  const baseInactive = isDarkMode
    ? 'text-darkmode-secondarytxt hover:text-white'
    : 'text-lightmode-secondarytxt hover:text-black';
  const baseActive = isDarkMode
    ? 'text-white'
    : 'text-black';

  // Single button structure with animated label for smooth collapse/expand
  const buttonBase = cn(
    'transition-all duration-300 ease-in-out',
    isCollapsed
      ? 'w-9 h-9 p-0 px-0 justify-center gap-0'
      : 'w-full min-h-[36px] px-2.5 py-2 justify-start gap-2.5 text-sm font-medium',
    'flex items-center cursor-pointer focus:outline-none',
    isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row',
    isActive ? baseActive : baseInactive
  );

  const labelClasses = cn(
    'transition-[max-width,opacity,transform] duration-300 ease-in-out',
    'whitespace-nowrap',
    isCollapsed
      ? 'max-w-0 opacity-0 -translate-x-1 overflow-hidden'
      : 'max-w-[180px] opacity-100 translate-x-0 flex-1 truncate'
  );

  const content = (
    <Button
      variant={isActive ? 'primary' : 'secondary'}
      size={isCollapsed ? 'sm' : 'sm'}
      icon={item.icon}
      iconPosition={isRTL ? 'right' : 'left'}
      onClick={() => onClick(item)}
      disabled={item.disabled}
      className={buttonBase}
    >
      <span className={labelClasses}>{label}</span>
    </Button>
  );

  if (item.href) {
    return (
      <Link key={item.id} href={item.href}>
        {content}
      </Link>
    );
  }

  return content;
}

