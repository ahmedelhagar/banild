'use client';

import { forwardRef, ReactNode } from 'react';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';
import Button, { ButtonProps } from './Button';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'icon' | 'iconPosition'> {
  icon: ReactNode;
  'aria-label': string; // Required for accessibility
  tooltip?: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, size = 'md', variant = 'secondary', ...props }, ref) => {
    const { isDarkMode } = useDarkMode();

    const sizeMap = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10', 
      lg: 'w-11 h-11',
      xl: 'w-12 h-12'
    };

    return (
      <Button
        ref={ref}
        className={cn(
          sizeMap[size],
          'p-0', // Remove padding for perfect square
          className
        )}
        size={size}
        variant={variant}
        icon={icon}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;