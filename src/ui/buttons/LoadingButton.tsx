'use client';

import { forwardRef, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import Button, { ButtonProps } from './Button';

export interface LoadingButtonProps extends Omit<ButtonProps, 'loading'> {
  loading?: boolean;
  loadingText?: string;
  spinnerIcon?: ReactNode;
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ 
    loading = false,
    loadingText,
    spinnerIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const customSpinner = spinnerIcon || <Loader2 className="animate-spin" />;
    
    return (
      <Button
        ref={ref}
        loading={loading}
        disabled={disabled || loading}
        icon={loading ? customSpinner : undefined}
        {...props}
      >
        {loading && loadingText ? loadingText : children}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

export default LoadingButton;