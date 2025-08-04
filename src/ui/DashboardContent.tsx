'use client';

import { useState } from 'react';
import { Search, Github, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

export default function DashboardContent() {
  const [domain, setDomain] = useState('');
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const handleDomainSearch = () => {
    if (domain.trim()) {
      console.log('Searching domain:', domain);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h1 className={cn(
            "text-3xl lg:text-4xl font-bold",
            isDarkMode ? "text-gray-100" : "text-black"
          )}>
            Welcome to Banild AI
          </h1>
          <p className={cn(
            "text-lg",
            isDarkMode ? "text-gray-400" : "text-gray-600"
          )}>
            Your intelligent assistant for WordPress and ad campaign management
          </p>
        </div>

        {/* Start Your Website Section */}
        <div className={cn(
          "rounded-2xl p-8 border",
          isDarkMode ? "bg-[#161616] border-[#2a2a2a]" : "bg-white border-gray-200"
        )}>
          <h2 className={cn(
            "text-xl font-semibold mb-6",
            isDarkMode ? "text-gray-100" : "text-black"
          )}>
            Start Your Website
          </h2>
          
          {/* Domain Search */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Search for your perfect domain name..."
                className={cn(
                  "w-full text-base rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50",
                  isDarkMode 
                    ? "bg-[#0a0a0a] border-[#2a2a2a] text-gray-100 placeholder-gray-500 focus:ring-gray-400 focus:border-gray-400" 
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-black focus:border-black",
                  {
                    "pl-4 pr-12 py-4": !isRTL,
                    "pr-4 pl-12 py-4": isRTL
                  }
                )}
                onKeyDown={(e) => e.key === 'Enter' && handleDomainSearch()}
              />
              <button
                onClick={handleDomainSearch}
                className={cn(
                  "absolute top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors duration-200",
                  isDarkMode
                    ? "text-gray-500 hover:text-gray-300 hover:bg-[#252525]"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
                  {
                    "right-2": !isRTL,
                    "left-2": isRTL
                  }
                )}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-gray-400" : "text-gray-600"
            )}>
              Find and register your domain, then host your WordPress site with us
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* WordPress Plugin Card */}
          <div className={cn(
            "group cursor-pointer rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg",
            isDarkMode 
              ? "bg-[#161616] border-[#2a2a2a] hover:border-[#3a3a3a]" 
              : "bg-white border-gray-200 hover:border-gray-300"
          )}>
            <div className={cn(
              "flex items-start",
              {
                "flex-row-reverse": isRTL
              }
            )}>
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                isDarkMode ? "bg-[#252525]" : "bg-gray-100",
                {
                  "ml-4": isRTL,
                  "mr-4": !isRTL
                }
              )}>
                <Github className={cn(
                  "w-6 h-6",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={cn(
                  "text-lg font-semibold mb-2",
                  isDarkMode ? "text-gray-100" : "text-black"
                )}>
                  WordPress Plugin
                </h3>
                <p className={cn(
                  "text-sm leading-relaxed",
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                )}>
                  Install our official plugin from GitHub
                </p>
                <div className={cn(
                  "flex items-center mt-3 text-sm font-medium transition-colors duration-200",
                  isDarkMode 
                    ? "text-gray-400 group-hover:text-gray-200" 
                    : "text-gray-700 group-hover:text-black",
                  {
                    "flex-row-reverse": isRTL
                  }
                )}>
                  <span>Get Plugin</span>
                  <ArrowRight className={cn(
                    "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1",
                    {
                      "mr-1 group-hover:-translate-x-1": isRTL,
                      "ml-1": !isRTL
                    }
                  )} />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Start Video Card */}
          <div className={cn(
            "group cursor-pointer rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg",
            isDarkMode 
              ? "bg-[#161616] border-[#2a2a2a] hover:border-[#3a3a3a]" 
              : "bg-white border-gray-200 hover:border-gray-300"
          )}>
            <div className={cn(
              "flex items-start",
              {
                "flex-row-reverse": isRTL
              }
            )}>
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                isDarkMode ? "bg-[#252525]" : "bg-gray-100",
                {
                  "ml-4": isRTL,
                  "mr-4": !isRTL
                }
              )}>
                <Play className={cn(
                  "w-6 h-6",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={cn(
                  "text-lg font-semibold mb-2",
                  isDarkMode ? "text-gray-100" : "text-black"
                )}>
                  Quick Start Video
                </h3>
                <p className={cn(
                  "text-sm leading-relaxed",
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                )}>
                  Watch our 5-minute setup guide
                </p>
                <div className={cn(
                  "flex items-center mt-3 text-sm font-medium transition-colors duration-200",
                  isDarkMode 
                    ? "text-gray-400 group-hover:text-gray-200" 
                    : "text-gray-700 group-hover:text-black",
                  {
                    "flex-row-reverse": isRTL
                  }
                )}>
                  <span>Watch Video</span>
                  <ArrowRight className={cn(
                    "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1",
                    {
                      "mr-1 group-hover:-translate-x-1": isRTL,
                      "ml-1": !isRTL
                    }
                  )} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}