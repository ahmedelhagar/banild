'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, IconButton } from '@/ui/buttons';
import type { NavItem, CommonNavProps } from './types';

interface ActionButtonProps extends CommonNavProps {
  item: NavItem;
  isCollapsed: boolean;
  onClick: (item: NavItem) => void;
}

export default function ActionButton({ item, isCollapsed, isDarkMode, isRTL, onClick }: ActionButtonProps) {
  const label = isRTL ? item.labelAr : item.labelEn;
  const isCustom = item.id === 'create-app' || item.id === 'import-code';

  const custom = (id: string) => {
    if (id === 'create-app') {
      return {
        collapsed: cn(
          'w-9 h-9 mb-2',
          isDarkMode
            ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
            : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt',
          'shadow-sm hover:shadow transition-all duration-200',
          'cursor-pointer'
        ),
        expanded: cn(
          'justify-start gap-2.5 px-2.5 text-sm font-semibold mb-2',
          'flex items-center',
          isDarkMode
            ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
            : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt',
          'transition-all duration-200 min-h-[36px]',
          'cursor-pointer',
          isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row'
        )
      };
    }
    if (id === 'import-code') {
      return {
        collapsed: cn(
          'w-9 h-9',
          isDarkMode
            ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
            : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt',
          'transition-all duration-200',
          'cursor-pointer'
        ),
        expanded: cn(
          'justify-start gap-2.5 px-2.5 text-sm font-semibold',
          'flex items-center min-h-[36px]',
          isDarkMode
            ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
            : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt',
          'transition-all duration-200',
          'cursor-pointer',
          isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row'
        )
      };
    }
    return {
      collapsed: 'w-9 h-9 flex-shrink-0',
      expanded: cn(
        'justify-start gap-2.5 px-2.5 text-sm font-medium',
        'flex items-center min-h-[36px]',
        isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row'
      )
    };
  };

  const styles = custom(item.id);

  if (item.href) {
    if (isCollapsed) {
      return (
        <Link key={item.id} href={item.href}>
          <IconButton
            icon={item.icon}
            aria-label={label}
            variant={isCustom ? 'primary' : (item.variant || 'secondary')}
            size="md"
            onClick={() => onClick(item)}
            className={styles.collapsed}
          />
        </Link>
      );
    }
    return (
      <Link key={item.id} href={item.href}>
        <Button
          variant={isCustom ? 'primary' : (item.variant || 'secondary')}
          size="md"
          icon={item.icon}
          iconPosition={isRTL ? 'right' : 'left'}
          onClick={() => onClick(item)}
          fullWidth
          className={styles.expanded}
        >
          <span className={cn('flex-1 truncate', isCustom && 'font-semibold')}>{label}</span>
        </Button>
      </Link>
    );
  }

  if (isCollapsed) {
    return (
      <IconButton
        key={item.id}
        icon={item.icon}
        aria-label={label}
        variant={isCustom ? 'primary' : (item.variant || 'secondary')}
        size="md"
        onClick={() => onClick(item)}
        className={styles.collapsed}
      />
    );
  }

  return (
    <Button
      key={item.id}
      variant={isCustom ? 'primary' : (item.variant || 'secondary')}
      size="md"
      icon={item.icon}
      iconPosition={isRTL ? 'right' : 'left'}
      onClick={() => onClick(item)}
      fullWidth
      className={styles.expanded}
    >
      <span className={cn('flex-1 truncate', isCustom && 'font-semibold')}>{label}</span>
    </Button>
  );
}

