'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const { isRTL } = useLanguage();
    const { isDarkMode } = useDarkMode();

    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
      "focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      "select-none touch-manipulation cursor-pointer",
      "leading-none", // Better vertical alignment
      fullWidth && "w-full"
    );

        const variants = {
      primary: cn(
        "font-semibold shadow-lg hover:shadow-xl transition-all duration-200",
        isDarkMode
          ? "bg-[#8ab4f8] text-[#1a1a1a] hover:bg-[#aecbfa] active:bg-[#c8d9fc]"
          : "bg-[#1a73e8] text-white hover:bg-[#1557b0] active:bg-[#1142a0]"
      ),
      secondary: cn(
        "font-medium shadow-md hover:shadow-lg transition-all duration-200",
        isDarkMode
          ? "bg-[#2a2a2a] text-[#e8eaed] hover:bg-[#3a3a3a] active:bg-[#4a4a4a]"
          : "bg-[#f1f3f4] text-[#202124] hover:bg-[#e8eaed] active:bg-[#dadce0]"
      ),
      outline: cn(
        "bg-transparent font-medium transition-all duration-200",
        isDarkMode
          ? "text-[#9aa0a6] hover:bg-[#2a2a2a] hover:text-[#e8eaed] active:bg-[#3a3a3a]"
          : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124] active:bg-[#e8eaed]"
      ),
      ghost: cn(
        "bg-transparent font-medium transition-all duration-200",
        isDarkMode
          ? "text-[#9aa0a6] hover:bg-[#2a2a2a] hover:text-[#e8eaed] active:bg-[#3a3a3a]"
          : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124] active:bg-[#e8eaed]"
      ),
      destructive: cn(
        "font-semibold shadow-lg hover:shadow-xl transition-all duration-200",
        isDarkMode
          ? "bg-[#f28b82] text-[#1a1a1a] hover:bg-[#f6aea9] active:bg-[#fad2cf]"
          : "bg-[#d93025] text-white hover:bg-[#b52d20] active:bg-[#a50e0e]"
      )
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-2",
      md: "h-10 px-4 text-sm gap-2.5",
      lg: "h-11 px-6 text-base gap-3",
      xl: "h-12 px-8 text-lg gap-3.5"
    };

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-4 h-4",
      lg: "w-5 h-5",
      xl: "w-5 h-5"
    };

    const isDisabled = disabled || loading;
    const hasIcon = icon || loading;
    const iconSize = iconSizes[size];

    const renderIcon = () => {
      if (loading) {
        return <Loader2 className={cn(iconSize, "animate-spin")} />;
      }
      if (icon) {
        return <span className={cn(iconSize, "flex items-center justify-center flex-shrink-0")}>{icon}</span>;
      }
      return null;
    };

    const renderContent = () => {
      if (!children && hasIcon) {
        // Icon-only button
        return renderIcon();
      }

      if (!hasIcon) {
        // Text-only button
        return children;
      }

      // Button with icon and text
      const iconElement = renderIcon();
      const shouldReverseOrder = (iconPosition === 'right') !== isRTL;

      return (
        <>
          {shouldReverseOrder ? children : iconElement}
          {shouldReverseOrder ? iconElement : children}
        </>
      );
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;