'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations from './translations.json';
import { getFontForLanguage } from './utils';

type Language = 'en' | 'ar';
type TranslationsType = typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  isRTL: boolean;
  getFontClass: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Update document direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update document font class
    const fontClass = getFontForLanguage(language);
    document.documentElement.className = fontClass;
  }, [language]);

  // Helper function to get translation value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getTranslationValue = (key: string): any => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = (translations as TranslationsType)[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value;
  };

  // Translation function for strings - returns string for JSX compatibility
  const t = (key: string): string => {
    const value = getTranslationValue(key);
    
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value[0] || key; // Return first item of array as fallback
    }
    
    return key; // Fallback to the key if translation not found
  };

  // Translation function for arrays - returns array
  const tArray = (key: string): string[] => {
    const value = getTranslationValue(key);
    
    if (Array.isArray(value)) {
      return value;
    } else if (typeof value === 'string') {
      return [value]; // Wrap string in array
    }
    
    return [key]; // Fallback
  };

  const isRTL = language === 'ar';
  
  // Get appropriate font class for current language
  const getFontClass = () => getFontForLanguage(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, isRTL, getFontClass }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 