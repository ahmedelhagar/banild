'use client';

import { cn } from '@/lib/utils';
import { useDarkMode } from '@/lib/useDarkMode';
import { useLanguage } from '@/lib/useLanguage';
import { Figma, ArrowRight, ChevronLeft } from 'lucide-react';
import { Logo } from '@/ui/logo';
import Link from 'next/link';

export default function FigmaImport() {
  const { isDarkMode } = useDarkMode();
  const { isRTL } = useLanguage();

  return (
    <div className={cn('w-full max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-14')}>
      <div className="mb-4">
        <Link
          href="/app/import"
          className={cn(
            'inline-flex items-center gap-2 border-1 rounded-lg px-3 py-1.5 text-sm transition-colors',
            isDarkMode ? 'text-darkmode-primarytxt hover:bg-darkmode-primary' : 'text-lightmode-primarytxt border border-lightmode-secondary hover:bg-lightmode-primary'
          )}
        >
          <ChevronLeft className="w-4 h-4" /> {isRTL ? 'رجوع إلى الاستيراد' : 'Back to Import'}
        </Link>
      </div>
      {/* Heading */}
      <h1
        className={cn(
          'text-3xl md:text-3xl font-extrabold tracking-tight',
          isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt'
        )}
      >
        {isRTL ? 'استيراد تصميم Figma إلى Banild' : 'Import Figma Design into Banild'}
      </h1>
      <p
        className={cn(
          'mt-3 md:mt-4 text-base md:text-lg',
          isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt'
        )}
      >
        {isRTL
          ? 'حوّل تصميماتك إلى تطبيقات مباشرة باستخدام وكيل Banild'
          : 'Convert your designs into live Apps using the Banild Agent'}
      </p>
      {/* Card */}
      <div
        className={cn(
          'mt-8 md:mt-10 rounded-2xl border',
          isDarkMode
            ? 'bg-darkmode-secondary border-darkmode-primary'
            : 'bg-lightmode-primary border-lightmode-tertiary'
        )}
      >
        <div className="px-6 md:px-10 py-10 md:py-14 text-center">
          {/* Brand icons row */}
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center', isDarkMode ? 'bg-darkmode-tertiary' : 'bg-lightmode-secondary')}>
              <Figma className={cn('w-7 h-7', isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt')} />
            </div>
            <ArrowRight className={cn('w-6 h-6', isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt')} />
            <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center', isDarkMode ? 'bg-darkmode-tertiary' : 'bg-lightmode-secondary')}>
              <Logo variant={isDarkMode ? 'dark' : 'light'} />
            </div>
          </div>

          <h2
            className={cn(
              'mt-8 text-2xl md:text-3xl font-bold',
              isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt'
            )}
          >
            {isRTL ? 'اربط Figma بـ Banild' : 'Connect Figma to Banild'}
          </h2>
          <p className={cn('mt-3 md:mt-4', isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt')}>
            {isRTL
              ? 'ابدأ بتسجيل الدخول باستخدام حساب Figma الخاص بك'
              : 'Get started by logging in with your Figma account'}
          </p>

          <div className="mt-8 md:mt-10 flex justify-center">
            <button
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-5 md:px-6 py-3 font-semibold cursor-pointer',
                'transition-colors',
                // Blue call-to-action similar to the screenshot
                'bg-lightmode-blue text-lightmode-primary hover:opacity-90',
                isDarkMode
                  ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
                  : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt',
              )}
            >
              {isRTL ? 'تسجيل الدخول باستخدام Figma' : 'Log in with Figma'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


