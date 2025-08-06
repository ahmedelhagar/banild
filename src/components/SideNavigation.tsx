'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Download, 
  Home, 
  FolderOpen, 
  Rocket, 
  BarChart3, 
  Users, 
  Settings,
  Moon,
  Sun,
  GraduationCap,
  HelpCircle,
  FileText,
  Video,
  Gift,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';
import { Button, IconButton } from '@/ui/buttons';

interface SideNavigationProps {
  className?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface NavItem {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: React.ReactNode;
  href?: string;
  isAction?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
}

export default function SideNavigation({
  className,
  isCollapsed = false,
  onToggleCollapse
}: SideNavigationProps) {
  const { isRTL, getFontClass } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [activeItem, setActiveItem] = useState('home');

  // Main action buttons (like in Replit)
  const actionButtons: NavItem[] = [
    {
      id: 'create-app',
      labelEn: 'Create App',
      labelAr: 'إنشاء تطبيق',
      icon: <Plus />,
      isAction: true,
      variant: 'outline',
      href: '/app'
    },
    {
      id: 'import-code',
      labelEn: 'Import code or design',
      labelAr: 'استيراد كود أو تصميم',
      icon: <Download />,
      isAction: true,
      variant: 'outline',
      href: '/app/import'
    }
  ];

  // Navigation items
  const navItems: NavItem[] = [
    {
      id: 'home',
      labelEn: 'Home',
      labelAr: 'الرئيسية',
      icon: <Home />,
      href: '/app'
    },
    {
      id: 'projects',
      labelEn: 'Projects',
      labelAr: 'المشاريع',
      icon: <FolderOpen />,
      href: '/app/projects'
    },
    {
      id: 'domains',
      labelEn: 'Domains',
      labelAr: 'النطاقات',
      icon: <Rocket />,
      href: '/app/domains'
    },
    {
      id: 'usage',
      labelEn: 'Usage',
      labelAr: 'الاستخدام',
      icon: <BarChart3 />,
      href: '/app/usage'
    },
    {
      id: 'teams',
      labelEn: 'Teams',
      labelAr: 'الفرق',
      icon: <Users />,
      href: '/app/teams'
    }
  ];

  // Learning & Help section
  const learningItems: NavItem[] = [
    {
      id: 'getting-started',
      labelEn: 'Getting Started',
      labelAr: 'دليل البداية',
      icon: <GraduationCap />,
      href: '/learn/getting-started'
    },
    {
      id: 'tutorials',
      labelEn: 'Video Tutorials',
      labelAr: 'دروس الفيديو',
      icon: <Video />,
      href: '/learn/tutorials'
    },
    {
      id: 'help',
      labelEn: 'Help & Support',
      labelAr: 'المساعدة والدعم',
      icon: <HelpCircle />,
      href: '/help'
    },
    {
      id: 'templates',
      labelEn: 'Templates',
      labelAr: 'القوالب',
      icon: <FileText />,
      href: '/templates'
    }
  ];

  // Settings section
  const settingsItems: NavItem[] = [
    {
      id: 'settings',
      labelEn: 'Settings',
      labelAr: 'الإعدادات',
      icon: <Settings />,
      href: '/app/settings'
    },
    {
      id: 'theme-toggle',
      labelEn: isDarkMode ? 'Light Mode' : 'Dark Mode',
      labelAr: isDarkMode ? 'الوضع الفاتح' : 'الوضع المظلم',
      icon: isDarkMode ? <Sun /> : <Moon />,
      isAction: true
    }
  ];

  const handleItemClick = (item: NavItem) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      
      // Handle theme toggle
      if (item.id === 'theme-toggle') {
        toggleDarkMode();
        return;
      }
      
      // For items with href, the Link component will handle navigation
      // This function is mainly for actions and state management
    }
  };

  const isItemActive = (itemId: string) => {
    return activeItem === itemId;
  };

  const renderNavButton = (item: NavItem, isActive: boolean = false) => {
    const label = isRTL ? item.labelAr : item.labelEn;
    
    // For items with href, wrap in Link
    if (item.href) {
      if (isCollapsed) {
        return (
          <Link key={item.id} href={item.href}>
            <IconButton
              icon={item.icon}
              aria-label={label}
              variant={isActive ? 'secondary' : 'ghost'}
              size="md"
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={cn(
                "w-10 h-10 justify-center flex-shrink-0",
                "cursor-pointer focus:outline-none",
                isActive && "bg-opacity-20"
              )}
            />
          </Link>
        );
      }

      return (
        <Link key={item.id} href={item.href}>
          <Button
            variant={isActive ? 'secondary' : 'ghost'}
            size="md"
            icon={item.icon}
            iconPosition={isRTL ? 'right' : 'left'}
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
            className={cn(
              "w-full justify-start mt-1 gap-3 px-3 py-2.5 font-medium",
              "flex items-center min-h-[40px]", // Ensure proper alignment and consistent height
              "cursor-pointer focus:outline-none",
              isRTL ? "text-right flex-row-reverse" : "text-left flex-row",
              isActive && "bg-gray-700 shadow-sm"
            )}
          >
            <span className="flex-1 truncate">{label}</span>
          </Button>
        </Link>
      );
    }

    // For items without href (like theme toggle), render without Link
    if (isCollapsed) {
      return (
        <IconButton
          key={item.id}
          icon={item.icon}
          aria-label={label}
          variant={isActive ? 'secondary' : 'ghost'}
          size="md"
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
                     className={cn(
             "w-10 h-10 justify-center mt-1 flex-shrink-0",
             "cursor-pointer focus:outline-none",
             isActive && "bg-opacity-20"
           )}
        />
      );
    }

    return (
      <Button
        key={item.id}
        variant={isActive ? 'primary' : 'ghost'}
        size="md"
        icon={item.icon}
        iconPosition={isRTL ? 'right' : 'left'}
        onClick={() => handleItemClick(item)}
        disabled={item.disabled}
                 className={cn(
           "w-full justify-start gap-3 px-3 py-2.5 font-medium",
           "flex items-center min-h-[40px]", // Ensure proper alignment and consistent height
           "cursor-pointer focus:outline-none",
           isRTL ? "text-right flex-row-reverse" : "text-left flex-row",
           isActive && "bg-opacity-20 shadow-sm"
         )}
      >
        <span className="flex-1 truncate">{label}</span>
      </Button>
    );
  };

  const renderActionButton = (item: NavItem) => {
    const label = isRTL ? item.labelAr : item.labelEn;
    
    // Custom styles for Create and Import buttons
    const getCustomStyles = (itemId: string) => {
      if (itemId === 'create-app') {
        return {
          collapsed: cn(
            "w-10 h-10 mb-2",
            "bg-black dark:bg-white hover:from-blue-600 hover:to-blue-700",
            "text-white dark:text-black",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "ring-blue-500/20 hover:ring-blue-500/30",
            "cursor-pointer"
          ),
          expanded: cn(
            "justify-start gap-3 px-3 py-1 font-bold mb-2",
            "flex items-center",
            "bg-black dark:bg-gray-100",
            "text-white dark:text-black",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "cursor-pointer",
            isRTL ? "text-right flex-row-reverse" : "text-left flex-row"
          )
        };
      } else if (itemId === 'import-code') {
        return {
          collapsed: cn(
            "w-10 h-10",
            "bg-black dark:bg-white hover:from-blue-600 hover:to-blue-700",
            "text-white dark:text-black",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "ring-blue-500/20 hover:ring-blue-500/30",
            "cursor-pointer"
          ),
          expanded: cn(
           "justify-start gap-3 px-3 py-1 font-bold",
            "flex items-center",
            "bg-red-500 dark:bg-gray-100",
            "text-white dark:text-black",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "cursor-pointer",
            isRTL ? "text-right flex-row-reverse" : "text-left flex-row"
          )
        };
      }
      
      // Default styles for other action buttons
      return {
        collapsed: "w-10 h-10 flex-shrink-0",
        expanded: cn(
          "justify-start gap-3 px-4 py-1 font-medium",
          "flex items-center",
          isRTL ? "text-right flex-row-reverse" : "text-left flex-row"
        )
      };
    };

    const customStyles = getCustomStyles(item.id);
    const isCustomButton = item.id === 'create-app' || item.id === 'import-code';
    
    // For action buttons with href, wrap in Link
    if (item.href) {
      if (isCollapsed) {
        return (
          <Link key={item.id} href={item.href}>
            <IconButton
              icon={item.icon}
              aria-label={label}
              variant={isCustomButton ? 'primary' : (item.variant || 'outline')}
              size="md"
              onClick={() => handleItemClick(item)}
              className={customStyles.collapsed}
            />
          </Link>
        );
      }

      return (
        <Link key={item.id} href={item.href}>
          <Button
            variant={isCustomButton ? 'primary' : (item.variant || 'outline')}
            size="md"
            icon={item.icon}
            iconPosition={isRTL ? 'right' : 'left'}
            onClick={() => handleItemClick(item)}
            fullWidth
            className={customStyles.expanded}
          >
            <span className={cn("flex-1 truncate", isCustomButton && "font-semibold")}>{label}</span>
          </Button>
        </Link>
      );
    }

    // For action buttons without href, render without Link
    if (isCollapsed) {
      return (
        <IconButton
          key={item.id}
          icon={item.icon}
          aria-label={label}
          variant={isCustomButton ? 'primary' : (item.variant || 'outline')}
          size="md"
          onClick={() => handleItemClick(item)}
          className={customStyles.collapsed}
        />
      );
    }

    return (
      <Button
        key={item.id}
        variant={isCustomButton ? 'primary' : (item.variant || 'outline')}
        size="md"
        icon={item.icon}
        iconPosition={isRTL ? 'right' : 'left'}
        onClick={() => handleItemClick(item)}
        fullWidth
        className={customStyles.expanded}
      >
        <span className={cn("flex-1 truncate", isCustomButton && "font-semibold")}>{label}</span>
      </Button>
    );
  };

  return (
    <nav className={cn(
      "flex flex-col h-screen border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-72",
      getFontClass(),
      isDarkMode
        ? "bg-[#0a0a0a] border-[#1f1f1f]"
        : "bg-white border-gray-200",
      className
    )}>
      {/* Toggle Button Section */}
      <div className={cn(
        "flex items-center relative",
        isDarkMode ? "border-[#1f1f1f]" : "border-gray-200",
        isCollapsed ? "justify-center p-2" : "justify-end px-4 py-2"
      )}>
        {/* Toggle Button */}
        {onToggleCollapse && (
          <IconButton
            icon={isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
                                     className={cn(
              "backdrop-blur-sm shadow-sm",
              "cursor-pointer focus:outline-none",
              isDarkMode
                ? "bg-[#1a1a1a]/90 hover:bg-[#252525]"
                : "bg-white/90 hover:bg-gray-50",
              "w-7 h-7"
            )}
          />
        )}
      </div>

      {/* Action Buttons Section */}
      <div className={cn(
        "border-b",
        isDarkMode ? "border-[#1f1f1f]" : "border-gray-200",
        isCollapsed ? "p-2 space-y-2" : "p-4 space-y-3"
      )}>
        {actionButtons.map(renderActionButton)}
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className={cn(
          isCollapsed ? "p-2 space-y-1" : "p-4 space-y-1"
        )}>
          {navItems.map((item) => renderNavButton(item, isItemActive(item.id)))}
        </div>

        {/* Learning & Help Section */}
        <div className={cn(
          "border-t",
          isDarkMode ? "border-[#1f1f1f]" : "border-gray-200"
        )}>
          {!isCollapsed && (
            <div className="px-4 py-3">
              <h3 className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDarkMode ? "text-gray-400" : "text-gray-500",
                isRTL ? "text-right" : "text-left"
              )}>
                {isRTL ? "التعلم والمساعدة" : "Learn & Help"}
              </h3>
            </div>
          )}
          
          <div className={cn(
            isCollapsed ? "p-2 space-y-1" : "px-4 pb-4 space-y-1"
          )}>
            {learningItems.map((item) => renderNavButton(item, isItemActive(item.id)))}
          </div>
        </div>

        {/* Settings Section */}
        <div className={cn(
          "border-t",
          isDarkMode ? "border-[#1f1f1f]" : "border-gray-200"
        )}>
          {!isCollapsed && (
            <div className="px-4 py-3">
              <h3 className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDarkMode ? "text-gray-400" : "text-gray-500",
                isRTL ? "text-right" : "text-left"
              )}>
                {isRTL ? "الإعدادات" : "Settings"}
              </h3>
            </div>
          )}
          
          <div className={cn(
            isCollapsed ? "p-2 space-y-1" : "px-4 pb-4 space-y-1"
          )}>
            {settingsItems.map((item) => renderNavButton(item, isItemActive(item.id)))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Plan Info */}
      <div className={cn(
        "border-t",
        isDarkMode ? "border-[#1f1f1f]" : "border-gray-200",
        isCollapsed ? "p-2" : "p-4"
      )}>
        {!isCollapsed && (
          <div className="space-y-3">
            <div>
              <h4 className={cn(
                "text-sm font-semibold mb-2",
                isDarkMode ? "text-white" : "text-gray-900",
                isRTL ? "text-right" : "text-left"
              )}>
                {isRTL ? "خطة المبتدئ" : "Your Starter Plan"}
              </h4>
              
              <div className="space-y-2 text-xs">
                <div className={cn(
                  "flex items-center gap-2",
                  isDarkMode ? "text-gray-400" : "text-gray-600",
                  isRTL ? "flex-row-reverse" : ""
                )}>
                  <FolderOpen className="w-4 h-4" />
                  <span>{isRTL ? "مشاريع مجانية" : "Free Projects"}</span>
                  <span className="ml-auto font-mono">0/10 {isRTL ? "تم إنشاؤها" : "created"}</span>
                </div>
                
                <div className={cn(
                  "flex items-center gap-2",
                  isDarkMode ? "text-gray-400" : "text-gray-600",
                  isRTL ? "flex-row-reverse" : ""
                )}>
                  <Sparkles className="w-4 h-4" />
                  <span>{isRTL ? "استخدام الوكيل" : "Agent Usage"}</span>
                  <span className="ml-auto font-mono">0% {isRTL ? "مستخدم" : "used"}</span>
                </div>
              </div>
            </div>

            <Link href="/upgrade">
              <Button
                variant="primary"
                size="sm"
                icon={<Sparkles />}
                fullWidth
                                 className="gap-2 cursor-pointer focus:outline-none"
              >
                {isRTL ? "ترقية إلى Replit Core" : "Upgrade to Replit Core"}
              </Button>
            </Link>
          </div>
        )}
        
        {isCollapsed && (
          <div className="flex flex-col items-center space-y-2">
            <Link href="/app/plan">
              <IconButton
                icon={<Gift />}
                aria-label={isRTL ? "مشاريع مجانية" : "Free Projects"}
                                 variant="ghost"
                 size="md"
                 className="cursor-pointer focus:outline-none"
               />
             </Link>
             <Link href="/upgrade">
               <IconButton
                 icon={<Sparkles />}
                 aria-label={isRTL ? "ترقية" : "Upgrade"}
                 variant="primary"
                 size="sm"
                 className="cursor-pointer focus:outline-none"
               />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}