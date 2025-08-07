'use client';

import { useState, useEffect } from 'react';
import SideNavigation from '@/components/SideNavigation';
import { Menu, X } from 'lucide-react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  // Load nav state from localStorage on mount
  useEffect(() => {
    try {
      const savedNavState = localStorage.getItem('navCollapsed');
      if (savedNavState !== null) {
        setNavCollapsed(JSON.parse(savedNavState));
      }
    } catch (error) {
      console.warn('Failed to load nav state from localStorage:', error);
    }
  }, []);

  // Save nav state to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('navCollapsed', JSON.stringify(navCollapsed));
    } catch (error) {
      console.warn('Failed to save nav state to localStorage:', error);
    }
  }, [navCollapsed]);

  const handleNavToggle = () => {
    const newState = !navCollapsed;
    setNavCollapsed(newState);
    // localStorage is automatically updated by the useEffect above
  };

  return (
    <div className="flex h-screen transition-colors duration-200">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <SideNavigation 
          className="lg:relative" 
          isCollapsed={navCollapsed}
          onToggleCollapse={handleNavToggle}
        />
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 z-40 p-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md shadow-sm border duration-200"
        >
          {sidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden lg:ml-0">
        <div className="h-full pt-16 lg:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}