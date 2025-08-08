'use client';

import type React from 'react';

export interface NavItem {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: React.ReactNode;
  href?: string;
  isAction?: boolean;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface CommonNavProps {
  isCollapsed: boolean;
  isDarkMode: boolean;
  isRTL: boolean;
}

