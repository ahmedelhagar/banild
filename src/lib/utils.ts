import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility to get the appropriate font class based on language
export function getFontForLanguage(language: 'en' | 'ar' | string = 'en') {
  return language === 'ar' ? 'font-cairo' : 'font-poppins';
}

// Utility to get direction based on language
export function getDirectionForLanguage(language: 'en' | 'ar' | string = 'en') {
  return language === 'ar' ? 'rtl' : 'ltr';
}