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
  variant?: 'primary' | 'secondary';
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
              variant={isActive ? 'primary' : 'secondary'}
              size="md"
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={cn(
                "w-10 h-10 justify-center flex-shrink-0",
                "cursor-pointer focus:outline-none transition-all duration-200",
                isActive 
                  ? isDarkMode
                    ? "bg-[--color-darkmode-blue]/20 text-[--color-darkmode-blue]"
                    : "bg-[--color-lightmode-blue]/20 text-[--color-lightmode-blue]"
                  : isDarkMode
                    ? "text-[--color-darkmode-secondarytxt] hover:bg-[--color-darkmode-tertiary] hover:text-[--color-darkmode-primarytxt]"
                    : "text-[--color-lightmode-secondarytxt] hover:bg-[--color-lightmode-secondary] hover:text-[--color-lightmode-primarytxt]"
              )}
            />
          </Link>
        );
      }

      return (
        <Link key={item.id} href={item.href}>
          <Button
            variant={isActive ? 'primary' : 'secondary'}
            size="md"
            icon={item.icon}
            iconPosition={isRTL ? 'right' : 'left'}
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
            className={cn(
              "w-full justify-start gap-3 px-3 py-2.5 font-medium",
              "flex items-center min-h-[40px] transition-all duration-200",
              "cursor-pointer focus:outline-none",
              isRTL ? "text-right flex-row-reverse" : "text-left flex-row",
              isActive 
                ? isDarkMode
                  ? "bg-[--color-darkmode-blue]/20 text-[--color-darkmode-blue]"
                  : "bg-[--color-lightmode-blue]/20 text-[--color-lightmode-blue]"
                : isDarkMode
                  ? "text-[--color-darkmode-secondarytxt] hover:bg-[--color-darkmode-tertiary] hover:text-[--color-darkmode-primarytxt]"
                  : "text-[--color-lightmode-secondarytxt] hover:bg-[--color-lightmode-secondary] hover:text-[--color-lightmode-primarytxt]"
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
          variant={isActive ? 'primary' : 'secondary'}
          size="md"
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
          className={cn(
            "w-10 h-10 justify-center flex-shrink-0",
            "cursor-pointer focus:outline-none transition-all duration-200",
            isActive 
              ? isDarkMode
                ? "bg-[--color-darkmode-blue]/20 text-[--color-darkmode-blue]"
                : "bg-[--color-lightmode-blue]/20 text-[--color-lightmode-blue]"
              : isDarkMode
                ? "text-[--color-darkmode-secondarytxt] hover:bg-[--color-darkmode-tertiary] hover:text-[--color-darkmode-primarytxt]"
                : "text-[--color-lightmode-secondarytxt] hover:bg-[--color-lightmode-secondary] hover:text-[--color-lightmode-primarytxt]"
          )}
        />
      );
    }

    return (
      <Button
        key={item.id}
        variant={isActive ? 'primary' : 'secondary'}
        size="md"
        icon={item.icon}
        iconPosition={isRTL ? 'right' : 'left'}
        onClick={() => handleItemClick(item)}
        disabled={item.disabled}
        className={cn(
          "w-full justify-start gap-3 px-3 py-2.5 font-medium",
          "flex items-center min-h-[40px] transition-all duration-200",
          "cursor-pointer focus:outline-none",
          isRTL ? "text-right flex-row-reverse" : "text-left flex-row",
          isActive 
            ? isDarkMode
              ? "bg-[--color-darkmode-blue]/20 text-[--color-darkmode-blue]"
              : "bg-[--color-lightmode-blue]/20 text-[--color-lightmode-blue]"
            : isDarkMode
              ? "text-[--color-darkmode-secondarytxt] hover:bg-[--color-darkmode-tertiary] hover:text-[--color-darkmode-primarytxt]"
              : "text-[--color-lightmode-secondarytxt] hover:bg-[--color-lightmode-secondary] hover:text-[--color-lightmode-primarytxt]"
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
            isDarkMode
              ? "bg-[--color-darkmode-lightbtn] text-[--color-darkmode-secondary] hover:bg-[--color-darkmode-lightbtn]/90"
              : "bg-[--color-lightmode-darkbtn] text-[--color-lightmode-darktxtbtn] hover:bg-[--color-lightmode-darkbtn]/90",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "cursor-pointer"
          ),
          expanded: cn(
            "justify-start gap-3 px-3 py-1 font-bold mb-2",
            "flex items-center",
            isDarkMode
              ? "bg-[--color-darkmode-lightbtn] text-[--color-darkmode-secondary] hover:bg-[--color-darkmode-lightbtn]/90"
              : "bg-[--color-lightmode-darkbtn] text-[--color-lightmode-darktxtbtn] hover:bg-[--color-lightmode-darkbtn]/90",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "cursor-pointer",
            isRTL ? "text-right flex-row-reverse" : "text-left flex-row"
          )
        };
      } else if (itemId === 'import-code') {
        return {
          collapsed: cn(
            "w-10 h-10",
            isDarkMode
              ? "bg-[--color-darkmode-blue] text-[--color-darkmode-primary] hover:bg-[--color-darkmode-blue]/90"
              : "bg-[--color-lightmode-blue] text-[--color-lightmode-primary] hover:bg-[--color-lightmode-blue]/90",
            "shadow-lg hover:shadow-xl transition-all duration-200",
            "cursor-pointer"
          ),
          expanded: cn(
           "justify-start gap-3 px-3 py-1 font-bold",
            "flex items-center",
            isDarkMode
              ? "bg-[--color-darkmode-blue] text-[--color-darkmode-primary] hover:bg-[--color-darkmode-blue]/90"
              : "bg-[--color-lightmode-blue] text-[--color-lightmode-primary] hover:bg-[--color-lightmode-blue]/90",
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
              variant={isCustomButton ? 'primary' : (item.variant || 'secondary')}
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
            variant={isCustomButton ? 'primary' : (item.variant || 'secondary')}
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
          variant={isCustomButton ? 'primary' : (item.variant || 'secondary')}
          size="md"
          onClick={() => handleItemClick(item)}
          className={customStyles.collapsed}
        />
      );
    }

    return (
      <Button
        key={item.id}
        variant={isCustomButton ? 'primary' : (item.variant || 'secondary')}
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

  // Mode toggle button component
  const renderModeToggle = () => {
    const label = isDarkMode 
      ? (isRTL ? 'الوضع الفاتح' : 'Light Mode')
      : (isRTL ? 'الوضع المظلم' : 'Dark Mode');
    
    const icon = isDarkMode ? <Sun /> : <Moon />;

    if (isCollapsed) {
      return (
        <IconButton
          icon={icon}
          aria-label={label}
          variant="secondary"
          size="md"
          onClick={toggleDarkMode}
          className={cn(
            "w-10 h-10 justify-center flex-shrink-0",
            "cursor-pointer focus:outline-none transition-all duration-200",
            isDarkMode
              ? "text-[--color-darkmode-secondarytxt] hover:bg-[--color-darkmode-tertiary] hover:text-[--color-darkmode-primarytxt]"
              : "text-[--color-lightmode-secondarytxt] hover:bg-[--color-lightmode-secondary] hover:text-[--color-lightmode-primarytxt]"
          )}
        />
      );
    }

    return (
      <Button
        variant="secondary"
        size="md"
        icon={icon}
        iconPosition={isRTL ? 'right' : 'left'}
        onClick={toggleDarkMode}
        className={cn(
          "w-full justify-start gap-3 px-3 py-2.5 font-medium",
          "flex items-center min-h-[40px] transition-all duration-200",
          "cursor-pointer focus:outline-none",
          isRTL ? "text-right flex-row-reverse" : "text-left flex-row",
          isDarkMode
            ? "text-[--color-darkmode-secondarytxt] hover:bg-[--color-darkmode-tertiary] hover:text-[--color-darkmode-primarytxt]"
            : "text-[--color-lightmode-secondarytxt] hover:bg-[--color-lightmode-secondary] hover:text-[--color-lightmode-primarytxt]"
        )}
      >
        <span className="flex-1 truncate">{label}</span>
      </Button>
    );
  };

  return (
    <nav className={cn(
      "flex flex-col h-screen border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-72",
      getFontClass(),
      isDarkMode
        ? "bg-[--color-darkmode-secondary] border-[--color-darkmode-tertiary]"
        : "bg-[--color-lightmode-primary] border-[--color-lightmode-tertiary]",
      className
    )}>
      {/* Toggle Button Section */}
      <div className={cn(
        "flex items-center relative",
        isDarkMode ? "border-[--color-darkmode-tertiary]" : "border-[--color-lightmode-tertiary]",
        isCollapsed ? "justify-center p-2" : "justify-end px-4 py-2"
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
                ? "bg-[--color-darkmode-tertiary]/90 hover:bg-[--color-darkmode-primary] text-[--color-darkmode-secondaryicon] hover:text-[--color-darkmode-primaryicon]"
                : "bg-[--color-lightmode-secondary]/90 hover:bg-[--color-lightmode-tertiary] text-[--color-lightmode-secondaryicon] hover:text-[--color-lightmode-primaryicon]",
              "w-7 h-7"
            )}
          />
        )}
      </div>

      {/* Action Buttons Section */}
      <div className={cn(
        "border-b",
        isDarkMode ? "border-[--color-darkmode-tertiary]" : "border-[--color-lightmode-tertiary]",
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
          isDarkMode ? "border-[--color-darkmode-tertiary]" : "border-[--color-lightmode-tertiary]"
        )}>
          {!isCollapsed && (
            <div className="px-4 py-3">
              <h3 className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDarkMode ? "text-[--color-darkmode-secondarytxt]" : "text-[--color-lightmode-secondarytxt]",
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
          isDarkMode ? "border-[--color-darkmode-tertiary]" : "border-[--color-lightmode-tertiary]"
        )}>
          {!isCollapsed && (
            <div className="px-4 py-3">
              <h3 className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDarkMode ? "text-[--color-darkmode-secondarytxt]" : "text-[--color-lightmode-secondarytxt]",
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
            
            {/* Mode Toggle Button */}
            {renderModeToggle()}
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
                variant="secondary"
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