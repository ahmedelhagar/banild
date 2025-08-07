'use client';

import Image from 'next/image';
import { User } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface AppHeaderProps {
  projectName?: string;
  projectStats?: {
    sites: number;
    platforms: number;
    tasks: number;
  };
  userProfile?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export default function AppHeader({ 
  projectName = "Fashion Store",
  projectStats = { sites: 2, platforms: 4, tasks: 2 },
  userProfile = { name: "John Doe", email: "john@example.com" }
}: AppHeaderProps) {
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <header className={cn(
      "flex items-center justify-between px-6 py-4 border-b",
      isDarkMode 
        ? "bg-[#1a1a1a] border-[#2a2a2a]" 
        : "bg-white border-gray-200"
    )}>
      {/* Project Info */}
      <div className={cn(
        "flex flex-col",
        {
          "items-end": isRTL,
          "items-start": !isRTL
        }
      )}>
        <h1 className={cn(
          "text-xl font-bold",
          isDarkMode ? "text-gray-100" : "text-black"
        )}>
          {projectName}
        </h1>
        <p className={cn(
          "text-sm",
          isDarkMode ? "text-gray-500" : "text-gray-500"
        )}>
          {projectStats.sites} sites • {projectStats.platforms} ad platforms • {projectStats.tasks} tasks
        </p>
      </div>

      {/* User Profile */}
      <div className={cn(
        "flex items-center",
        {
          "flex-row-reverse": isRTL
        }
      )}>
        <div className="relative">
          {userProfile.avatar ? (
            <Image
              src={userProfile.avatar}
              alt={userProfile.name}
              width={32}
              height={32}
              className={cn(
                "rounded-full border",
                isDarkMode ? "border-[#2a2a2a]" : "border-gray-200"
              )}
            />
          ) : (
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isDarkMode ? "bg-white" : "bg-black"
            )}>
              <User className={cn(
                "w-4 h-4",
                isDarkMode ? "text-black" : "text-white"
              )} />
            </div>
          )}
          {/* Online status indicator */}
          <div className={cn(
            "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white",
            isDarkMode ? "bg-white" : "bg-black"
          )}></div>
        </div>
      </div>
    </header>
  );
}