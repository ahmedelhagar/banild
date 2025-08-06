'use client';

import { forwardRef, ReactNode } from 'react';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

export interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: 'md' | 'lg';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  'aria-label': string;
}

const FloatingActionButton = forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  ({ 
    icon,
    size = 'lg',
    position = 'bottom-right',
    className,
    'aria-label': ariaLabel,
    ...props 
  }, ref) => {
    const { isDarkMode } = useDarkMode();

    const sizeStyles = {
      md: 'w-12 h-12',
      lg: 'w-14 h-14'
    };

    const positionStyles = {
      'bottom-right': 'fixed bottom-6 right-6',
      'bottom-left': 'fixed bottom-6 left-6',
      'top-right': 'fixed top-6 right-6',
      'top-left': 'fixed top-6 left-6'
    };

    const iconSizes = {
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full shadow-lg',
          'transition-all duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'hover:shadow-xl hover:scale-105 active:scale-95',
          'z-50', // High z-index for floating
          
          // Size
          sizeStyles[size],
          
          // Position
          positionStyles[position],
          
          // Theme
          isDarkMode
            ? 'bg-white text-black hover:bg-gray-100 focus:ring-white shadow-black/25'
            : 'bg-black text-white hover:bg-gray-800 focus:ring-black shadow-black/25',
          
          className
        )}
        aria-label={ariaLabel}
        {...props}
      >
        <span className={iconSizes[size]}>
          {icon}
        </span>
      </button>
    );
  }
);

FloatingActionButton.displayName = "FloatingActionButton";

export default FloatingActionButton;