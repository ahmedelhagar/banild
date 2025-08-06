
// 'use client';

// import { useLanguage } from '@/lib/useLanguage';
// import { useDarkMode } from '@/lib/useDarkMode';
// import { cn } from '@/lib/utils';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import {
//     NavCreateButton,
//     NavDashboard,
//     NavProjectTree,
//     NavDarkModeToggle,
//     NavSettings
// } from '@/ui/nav';
// import { Logo } from '@/ui/logo';

// interface NavProps {
//     className?: string;
//     isCollapsed?: boolean;
//     onToggleCollapse?: () => void;
// }

// export default function Nav({
//     className,
//     isCollapsed = false,
//     onToggleCollapse
// }: NavProps) {
//     const { getFontClass } = useLanguage();
//     const { isDarkMode } = useDarkMode();


//   return (
//         <nav className={cn(
//             "relative flex flex-col h-screen border-r transition-all duration-300",
//             isCollapsed
//                 ? "w-16" // Collapsed width
//                 : "w-72 lg:w-80 xl:w-72", // Expanded width - ChatGPT style
//             "shadow-sm",
//             getFontClass(),
//             isDarkMode
//                 ? "bg-[#0f0f0f] border-[#2a2a2a]"
//                 : "bg-white border-gray-200",
//             className
//         )}>
//             {/* Logo Section */}
//             <div className="flex flex-col items-center">
//                 <Link href="/app" className="flex items-center mt-6 mb-4">
//                     <Logo
//                         showText={!isCollapsed}
//                         variant={isDarkMode ? "dark" : "light"}
//                         className="h-8"
//                     />
//                 </Link>

//                 {/* Create Button - Below Logo */}
//                 <div className={cn(
//                     isCollapsed 
//                         ? "flex justify-center" 
//                         : "px-4 w-full"
//                 )}>
//                     <NavCreateButton isCollapsed={isCollapsed} />
//                 </div>

//                 {/* Toggle Button - Under Logo when collapsed */}
//                 {onToggleCollapse && isCollapsed && (
//                     <div className="flex justify-center mt-3">
//                         <button
//                             onClick={onToggleCollapse}
//                             className={cn(
//                                 "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 border cursor-pointer",
//                                 isDarkMode
//                                     ? "text-white hover:text-gray-200 hover:bg-[#252525] border-[#2a2a2a] bg-[#1a1a1a]"
//                                     : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-gray-200 bg-white"
//                             )}
//                             aria-label="Expand navigation"
//                         >
//                             <ChevronRight className="w-3.5 h-3.5" />
//                         </button>
//                     </div>
//                 )}
//             </div>

//             {/* Toggle Button - Absolute when expanded */}
//             {onToggleCollapse && !isCollapsed && (
//                 <div className="absolute top-6 -right-4 transition-all duration-300">
//                     <button
//                         onClick={onToggleCollapse}
//                         className={cn(
//                             "flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 border backdrop-blur-sm",
//                             isDarkMode
//                                 ? "text-gray-400 hover:text-gray-200 hover:bg-[#252525] border-[#2a2a2a] bg-[#1a1a1a]/80"
//                                 : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-gray-200 bg-white/80"
//                         )}
//                         aria-label="Collapse navigation"
//                     >
//                         <ChevronLeft className="w-3.5 h-3.5" />
//                     </button>
//                 </div>
//             )}

//             {/* Main Navigation */}
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 {isCollapsed ? (
//                     <div className="flex-1 flex flex-col justify-start">
//                         <div className="px-2 py-4 space-y-2 flex flex-col items-center">
//                             {/* Dashboard Button - Icon Only */}
//                             <NavDashboard isCollapsed={true} />
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Dashboard Button - Fixed */}
//                         <div className="flex-shrink-0 px-4 mt-4 pb-4 border-b border-gray-200 dark:border-[#2a2a2a]">
//                             <NavDashboard />
//                         </div>

//                         {/* Project Tree - Scrollable (Hidden Scrollbar) */}
//                         <div className="flex-1 overflow-y-auto scrollbar-hide">
//                             <div className="px-4 py-2 space-y-1">
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                                 <NavProjectTree />
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Bottom Section - Settings & Profile */}
//             <div className={cn(
//                 "border-t space-y-1",
//                 isDarkMode ? "border-[#2a2a2a]" : "border-gray-200",
//                 isCollapsed ? "p-2" : "p-4"
//             )}>
//                 {isCollapsed ? (
//                     <div className="flex flex-col items-center space-y-2">
//                         {/* Dark Mode Toggle - Icon Only */}
//                         <NavDarkModeToggle isCollapsed={true} />

//                         {/* Settings - Icon Only */}
//                         <NavSettings isCollapsed={true} />
//                     </div>
//                 ) : (
//                     <>
//                         {/* Dark Mode Toggle */}
//                         <NavDarkModeToggle />

//                         {/* Settings */}
//                         <NavSettings />
//                     </>
//                 )}
//     </div>
//         </nav>
//   );
