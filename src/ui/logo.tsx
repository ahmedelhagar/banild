import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export function Logo({ className, showText = false, variant = 'light' }: LogoProps) {
  const logoSrc = variant === 'light' ? '/logo-light.png' : '/logo-dark.png';
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src={logoSrc}
        alt="Banild Logo"
        width={28}
        height={28}
        className={cn("h-8 w-8", className)}
        priority
      />
      
      {showText && (
        <span className={cn(
          "text-xl font-semibold",
          variant === 'light' ? "text-black" : "text-white"
        )}>
          Banild
        </span>
      )}
    </div>
  );
}