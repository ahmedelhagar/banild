'use client';

import Link from 'next/link';
import Image from 'next/image';
import { User } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface NavProfileProps {
  userProfile: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export default function NavProfile({ 
  userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/default-avatar.png'
  }
}: NavProfileProps) {
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <Link
      href="/profile"
      className={cn(
        "flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
        isDarkMode
          ? "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
          : "text-gray-600 hover:bg-gray-50 hover:text-black",
        {
          "flex-row-reverse": isRTL
        }
      )}
    >
      <div className={cn(
        "relative",
        {
          "ml-3": isRTL,
          "mr-3": !isRTL
        }
      )}>
        {userProfile.avatar ? (
          <Image
            src={userProfile.avatar}
            alt={userProfile.name}
            width={24}
            height={24}
            className={cn(
              "rounded-full border",
              isDarkMode ? "border-[#2a2a2a]" : "border-gray-200"
            )}
          />
        ) : (
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center",
            isDarkMode ? "bg-white" : "bg-black"
          )}>
            <User className={cn(
              "w-3 h-3",
              isDarkMode ? "text-black" : "text-white"
            )} />
          </div>
        )}
        <div className={cn(
          "absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white",
          isDarkMode ? "bg-white" : "bg-black"
        )}></div>
      </div>
      <div className={cn(
        "flex-1 min-w-0",
        {
          "text-right": isRTL,
          "text-left": !isRTL
        }
      )}>
        <p className={cn(
          "text-sm font-medium truncate",
          isDarkMode ? "text-gray-200" : "text-black"
        )}>
          {userProfile.name}
        </p>
        <p className={cn(
          "text-xs truncate",
          isDarkMode ? "text-gray-500" : "text-gray-400"
        )}>
          {userProfile.email}
        </p>
      </div>
    </Link>
  );
}