'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { cn } from '@/lib/utils';

export interface ButtonGroupProps {
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  attached?: boolean; // Whether buttons should be visually connected
}

export default function ButtonGroup({
  children,
  orientation = 'horizontal',
  size = 'md',
  className,
  attached = true
}: ButtonGroupProps) {
  const { isRTL } = useLanguage();

  const orientationStyles = {
    horizontal: 'flex-row',
    vertical: 'flex-col'
  };

  const attachedStyles = attached
    ? orientation === 'horizontal'
      ? '[&>*:not(:first-child)]:ml-[-1px] [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none'
      : '[&>*:not(:first-child)]:mt-[-1px] [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none'
    : orientation === 'horizontal'
    ? 'gap-2'
    : 'gap-2';

  return (
    <div
      className={cn(
        'inline-flex',
        orientationStyles[orientation],
        attachedStyles,
        // RTL support
        isRTL && orientation === 'horizontal' && attached && [
          '[&>*:not(:first-child)]:mr-[-1px] [&>*:not(:first-child)]:ml-0',
          '[&>*:not(:first-child)]:rounded-r-none [&>*:not(:first-child)]:rounded-l-lg',
          '[&>*:not(:last-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-lg'
        ],
        className
      )}
      role="group"
    >
      {children}
    </div>
  );
}