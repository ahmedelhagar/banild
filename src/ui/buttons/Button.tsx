'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
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
      "inline-flex items-center justify-center font-medium transition-all duration-200",
      "focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      "select-none touch-manipulation cursor-pointer",
      "leading-none", // Better vertical alignment
      fullWidth && "w-full"
    );

        const variants = {
      primary: cn(
        "font-semibold ",
        isDarkMode
          ? "bg-[--color-darkmode-lightbtn] text-[--color-darkmode-secondary] hover:bg-[--color-darkmode-lightbtn]/90 active:bg-[--color-darkmode-lightbtn]/80"
          : "bg-[--color-lightmode-darkbtn] text-[--color-lightmode-darktxtbtn] hover:bg-[--color-lightmode-darkbtn]/90 active:bg-[--color-lightmode-darkbtn]/80"
      ),
      secondary: cn(
        "font-medium shadow-md hover:shadow-lg transition-all duration-200",
        isDarkMode
          ? "bg-[--color-darkmode-darkbtn] text-[--color-darkmode-primarytxt] hover:bg-[--color-darkmode-primary] active:bg-[--color-darkmode-primary]/80"
          : "bg-[--color-lightmode-lightbtn] text-[--color-lightmode-primarytxt] hover:bg-[--color-lightmode-secondary] active:bg-[--color-lightmode-tertiary]"
      )
    };

    const sizes = {
      sm: "h-9 px-4 text-sm gap-2 rounded-lg",
      md: "h-11 px-6 text-base gap-3 rounded-lg", 
      lg: "h-12 px-8 text-lg gap-3 rounded-xl",
      xl: "h-14 px-10 text-xl gap-4 rounded-xl"
    };

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7"
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