'use client';

import Image from 'next/image';
import Link from 'next/link';
import { User, Crown } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/buttons';
import { Logo } from '@/ui/logo';

interface AppHeaderProps {
  userProfile?: {
    name: string;
    email: string;
    avatar?: string;
  };
  showUpgrade?: boolean;
  upgradeText?: string;
  className?: string;
}

export default function AppHeader({
  userProfile = { name: "John Doe", email: "john@example.com" },
  showUpgrade = true,
  upgradeText = "Upgrade",
}: AppHeaderProps) {
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <header className={cn(
      "flex items-center justify-between px-6 py-3",
      isDarkMode ? "bg-[--color-darkmode-secondary]" : "bg-[--color-lightmode-secondary]"
    )}>
      {/* Logo Section */}
      <div className={cn(
        "flex items-center",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <Link href="/app" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Logo showText={true} variant={isDarkMode ? 'dark' : 'light'} />
        </Link>
      </div>


      {/* Right Section: Upgrade + Profile */}
      <div className={cn(
        "flex items-center gap-4",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        {/* Upgrade Button */}
        {showUpgrade && (
          <Link href="/pricing">
            <Button
              variant="primary"
              size="sm"
              icon={<Crown className="w-4 h-4" />}
              className="outline-1 rounded-full "
            >
              {upgradeText}
            </Button>
          </Link>
        )}

        {/* Profile Section */}
        <div className="relative">
          {userProfile.avatar ? (
            <Image
              src={userProfile.avatar}
              alt={userProfile.name}
              width={36}
              height={36}
              className={cn(
                "rounded-full border-2 cursor-pointer hover:opacity-80 transition-opacity object-cover",
                isDarkMode
                  ? "border-[--color-darkmode-tertiary]"
                  : "border-[--color-lightmode-tertiary]"
              )}
              onError={(e) => {
                // Hide the image and show fallback if loading fails
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}

          {/* Fallback Avatar - Always present but hidden when image loads successfully */}
          <div
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity border-2",
              isDarkMode
                ? "bg-[--color-darkmode-darkbtn] text-[--color-darkmode-primarytxt] border-[--color-darkmode-tertiary]"
                : "bg-[--color-lightmode-lightbtn] text-[--color-lightmode-primarytxt] border-[--color-lightmode-tertiary]",
              userProfile.avatar ? "hidden" : "flex"
            )}
            style={{ display: userProfile.avatar ? 'none' : 'flex' }}
          >
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}