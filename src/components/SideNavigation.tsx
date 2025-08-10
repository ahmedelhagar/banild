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
  Settings,
  FileText,
  Headphones,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';
import { Button, IconButton } from '@/ui/buttons';
import NavItemButton from '@/ui/sidenav/NavItemButton';
import ActionButton from '@/ui/sidenav/ActionButton';
import ModeToggle from '@/ui/sidenav/ModeToggle';
import type { NavItem } from '@/ui/sidenav/types';

interface SideNavigationProps {
  className?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

// NavItem type moved to ui/sidenav/types

export default function SideNavigation({
  className,
  isCollapsed = false,
  onToggleCollapse
}: SideNavigationProps) {
  const { isRTL, getFontClass } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [activeItem, setActiveItem] = useState('home');

  // Main action buttons
  const actionButtons: NavItem[] = [
    {
      id: 'create-app',
      labelEn: 'Create App',
      labelAr: 'إنشاء تطبيق',
      icon: <Plus />,
      isAction: true,
      variant: 'secondary',
      href: '/app'
    },
    {
      id: 'import-code',
      labelEn: 'Import code or design',
      labelAr: 'استيراد كود أو تصميم',
      icon: <Download />,
      isAction: true,
      variant: 'secondary',
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
      id: 'settings',
      labelEn: 'Settings',
      labelAr: 'الإعدادات',
      icon: <Settings />,
      href: '/app/settings'
    },
    {
      id: 'templates',
      labelEn: 'Templates',
      labelAr: 'القوالب',
      icon: <FileText />,
      href: '/templates'
    },
    {
      id: 'support',
      labelEn: 'Support',
      labelAr: 'الدعم',
      icon: <Headphones />,
      href: '/support'
    }
  ];

  // Learning & Help section removed

  // Settings section removed (Settings moved to main nav)

  const handleItemClick = (item: NavItem) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      
      // Handle theme toggle
      if (item.id === 'theme-toggle') {
        toggleDarkMode();
        return;
      }
    }
  };

  const isItemActive = (itemId: string) => {
    return activeItem === itemId;
  };

  const renderNavButton = (item: NavItem, isActive: boolean = false) => {
    return (
      <NavItemButton
        key={item.id}
        item={item}
        isCollapsed={isCollapsed}
        isDarkMode={isDarkMode}
        isRTL={isRTL}
        isActive={isActive}
        onClick={handleItemClick}
      />
    );
  };

  const renderActionButton = (item: NavItem) => (
    <ActionButton
          key={item.id}
      item={item}
      isCollapsed={isCollapsed}
      isDarkMode={isDarkMode}
      isRTL={isRTL}
      onClick={handleItemClick}
    />
  );

  // Mode toggle moved to ui/sidenav/ModeToggle

  return (
    <nav className={cn(
      "flex flex-col h-screen overflow-hidden transition-all duration-500 ease-in-out",
      isCollapsed ? "w-16" : "w-72",
      getFontClass(),
      isDarkMode
        ? "bg-darkmode-tertiary"
        : "bg-lightmode-tertiary",
      className
    )}>
      {/* Toggle Button Section */}
      <div className={cn(
        "flex items-center relative transition-all duration-300 ease-in-out",
        isCollapsed ? "justify-center p-2 h-14" : "justify-start p-2"
      )}>
        {/* Toggle Button */}
        {onToggleCollapse && (
          <IconButton
            icon={isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
            variant="secondary"
            size="sm"
            onClick={onToggleCollapse}
            className={cn(
              "backdrop-blur-sm shadow-sm rounded-lg",
              "cursor-pointer focus:outline-none transition-all duration-200",
              isDarkMode
                ? "bg-darkmode-primary hover:bg-darkmode-primary text-darkmode-primaryicon hover:text-darkmode-primaryicon"
                : "bg-lightmode-primary hover:bg-lightmode-primary text-lightmode-primaryicon hover:text-lightmode-primaryicon",
              "w-9 h-9"
            )}
          />
        )}
      </div>

      {/* Action Buttons Section */}
      <div className={cn(
        "border-b transition-all mb-2 duration-300 ease-in-out",
        isDarkMode ? "border-darkmode-primary" : "border-lightmode-primary",
        isCollapsed ? "py-4 flex flex-col items-center" : "py-4 px-3"
      )}>
        {actionButtons.map(renderActionButton)}
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className={cn(
          "transition-all duration-300 ease-in-out",
          isCollapsed ? "p-2 flex flex-col items-center" : "p-2"
        )}>
          {navItems.map((item) => renderNavButton(item, isItemActive(item.id)))}
          <div className={cn(isCollapsed ? "w-full flex justify-center mt-2" : "mt-2")}> 
            <ModeToggle
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              isRTL={isRTL}
              onToggle={toggleDarkMode}
            />
          </div>
        </div>

        
      </div>

      {/* Bottom Section - Plan Info */}
      <div className={cn(
        "border-t",
        isDarkMode ? "border-[--color-darkmode-tertiary]" : "border-[--color-lightmode-tertiary]",
        isCollapsed ? "p-2" : "p-4"
      )}>
        {!isCollapsed && (
          <div className="space-y-3">
            <div>
              <h4 className={cn(
                "text-sm font-semibold mb-2",
                isDarkMode ? "text-[--color-darkmode-primarytxt]" : "text-[--color-lightmode-primarytxt]",
                isRTL ? "text-right" : "text-left"
              )}>
                {isRTL ? "خطة المبتدئ" : "Your Starter Plan"}
              </h4>
              
              <div className="space-y-2 text-xs">
                <div className={cn(
                  "flex items-center gap-2",
                  isDarkMode ? "text-[--color-darkmode-secondarytxt]" : "text-[--color-lightmode-secondarytxt]",
                  isRTL ? "flex-row-reverse" : ""
                )}>
                  <FolderOpen className="w-4 h-4" />
                  <span>{isRTL ? "مشاريع مجانية" : "Free Projects"}</span>
                  <span className="ml-auto font-mono">0/10 {isRTL ? "تم إنشاؤها" : "created"}</span>
                </div>
                
                <div className={cn(
                  "flex items-center gap-2",
                  isDarkMode ? "text-[--color-darkmode-secondarytxt]" : "text-[--color-lightmode-secondarytxt]",
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
                className={cn(
                  "gap-2 cursor-pointer focus:outline-none",
                  isDarkMode ? "bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt" : "bg-black text-lightmode-primary hover:bg-lightmode-primarytxt"
                )}
              >
                {isRTL ? "ترقية إلى Banild Pro" : "Upgrade to Banild Pro"}
              </Button>
            </Link>
          </div>
        )}
        
        {isCollapsed && (
          <div className="flex flex-col items-center space-y-2">
            <Link href="/upgrade">
              <IconButton
                icon={<Sparkles />}
                aria-label={isRTL ? "ترقية" : "Upgrade"}
                variant="primary"
                size="sm"
                className={cn(
                  "cursor-pointer focus:outline-none",
                  isDarkMode ? "bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt" : "bg-black text-lightmode-primary hover:bg-lightmode-primarytxt"
                )}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}